@echo off
title CISSP Portal Git Helper
echo ==================================================
echo  🚀 CISSP Portal Git Init & GitHub Push Helper
echo ==================================================
echo.

:: Check if git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not in your PATH!
    echo Please download and install Git from: https://git-scm.com/download/win
    echo After installing, restart this script.
    echo.
    pause
    exit /b
)

:: Initialize repo if not already done
if not exist .git (
    echo [1/3] Initializing local Git repository...
    git init
    git config user.email "vicky@example.com"
    git config user.name "Vicky"
) else (
    echo [1/3] Git repository already initialized.
    git config user.email "vicky@example.com"
    git config user.name "Vicky"
)

:: Add and commit files
echo.
echo [2/3] Adding files and committing...
git add .
git commit -m "Initial commit of CISSP Prep Portal with AI Tutor and Games"

:: Prompt user for repo URL
echo.
echo [3/3] Preparing push to GitHub...
echo.
echo Please create a new public/private repository on https://github.com/new
echo Copy the repository URL (e.g. https://github.com/your-username/cissp-academy.git)
echo.
set /p repo_url="Paste your GitHub repository URL here: "

if "%repo_url%"=="" (
    echo [ERROR] Repository URL cannot be empty!
    pause
    exit /b
)

:: Set branch and remote
git branch -M main
git remote remove origin >nul 2>nul
git remote add origin %repo_url%

:: Push to GitHub
echo.
echo Pushing code to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ==================================================
    echo  🎉 PUSH SUCCESSFUL!
    echo  Now go to vercel.com and import this repository.
    echo ==================================================
) else (
    echo.
    echo [ERROR] Failed to push. Make sure you entered the correct URL and are logged in.
)
echo.
pause
