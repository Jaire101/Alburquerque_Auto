$ErrorActionPreference = "Stop"

Write-Host "Finding the Git repository..." -ForegroundColor Cyan
$repoRoot = git rev-parse --show-toplevel
Set-Location $repoRoot

Write-Host "Repository: $repoRoot" -ForegroundColor Green

$gitignore = @"
**/node_modules/
**/.next/
**/dist/
**/.wrangler/
.env
.env.local
"@

Set-Content -Path ".gitignore" -Value $gitignore -Encoding utf8
Write-Host "Created/updated .gitignore." -ForegroundColor Green

Write-Host "Removing generated folders from Git tracking..." -ForegroundColor Cyan
git rm -r --cached --ignore-unmatch -- "Alburquerque-Auto-New-York-Option/node_modules"
git rm -r --cached --ignore-unmatch -- "Alburquerque-Auto-New-York-Option/.next"
git rm -r --cached --ignore-unmatch -- "Alburquerque-Auto-New-York-Option/dist"
git rm -r --cached --ignore-unmatch -- "Alburquerque-Auto-New-York-Option/.wrangler"

git add -A

Write-Host "Replacing the latest local commit without the generated files..." -ForegroundColor Cyan
git commit --amend --no-edit

Write-Host ""
Write-Host "Cleanup complete." -ForegroundColor Green
Write-Host "Return to GitHub Desktop and click Push origin." -ForegroundColor Yellow
