#!/usr/bin/env python3
"""
📶 MULTITHREADED RANGE-REQUEST HTTP SERVER
===========================================
A custom Python web server designed specifically to serve large files (like PDFs)
supporting HTTP Range requests (206 Partial Content) and concurrent connections.
Bypasses browser CORS blocks and eliminates PDF.js network abort errors.
"""

import os
import re
import sys
import http.server
import socketserver

PORT = 8000

class RangeRequestHandler(http.server.SimpleHTTPRequestHandler):
    def send_head(self):
        """Common code for GET and HEAD commands to support HTTP Range requests."""
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()
            
        ctype = self.guess_type(path)
        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(http.HTTPStatus.NOT_FOUND, "File not found")
            return None
            
        range_header = self.headers.get('Range')
        if not range_header:
            return super().send_head()
            
        # Parse range header: e.g., bytes=0-65535
        match = re.match(r'^bytes=(\d+)-(\d*)', range_header)
        if not match:
            self.send_error(http.HTTPStatus.REQUESTED_RANGE_NOT_SATISFIABLE)
            f.close()
            return None
            
        start = int(match.group(1))
        end = match.group(2)
        
        try:
            fs = os.fstat(f.fileno())
            file_size = fs.st_size
        except OSError:
            f.close()
            return super().send_head()
            
        if end:
            end = int(end)
        else:
            end = file_size - 1
            
        if start >= file_size or end >= file_size or start > end:
            self.send_error(http.HTTPStatus.REQUESTED_RANGE_NOT_SATISFIABLE)
            f.close()
            return None
            
        self.send_response(http.HTTPStatus.PARTIAL_CONTENT)
        self.send_header('Content-Type', ctype)
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Content-Range', f'bytes {start}-{end}/{file_size}')
        self.send_header('Content-Length', str(end - start + 1))
        self.end_headers()
        
        f.seek(start)
        return f

    def copyfile(self, source, outputfile):
        """Copy only the requested range segment of the file to output."""
        range_header = self.headers.get('Range')
        if not range_header:
            return super().copyfile(source, outputfile)
            
        match = re.match(r'^bytes=(\d+)-(\d*)', range_header)
        if not match:
            return super().copyfile(source, outputfile)
            
        start = int(match.group(1))
        end = match.group(2)
        
        fs = os.fstat(source.fileno())
        file_size = fs.st_size
        
        if end:
            end = int(end)
        else:
            end = file_size - 1
            
        bytes_to_read = end - start + 1
        buffer_size = 64 * 1024
        
        try:
            while bytes_to_read > 0:
                chunk = source.read(min(bytes_to_read, buffer_size))
                if not chunk:
                    break
                outputfile.write(chunk)
                bytes_to_read -= len(chunk)
        except Exception as e:
            # Client aborted connection (normal behavior when navigating page-by-page)
            pass

    def end_headers(self):
        self.send_header('Accept-Ranges', 'bytes')
        super().end_headers()

class ThreadingHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    pass

def main():
    # Allow port reuse immediately
    ThreadingHTTPServer.allow_reuse_address = True
    server_address = ("127.0.0.1", PORT)
    
    with ThreadingHTTPServer(server_address, RangeRequestHandler) as httpd:
        print(f"[Server] Serving CISSP Portal on http://localhost:{PORT}")
        print("[Server] Multithreading & HTTP Range Requests enabled.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")

if __name__ == "__main__":
    main()
