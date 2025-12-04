# Deploy script for Lunnoa Automate Website
# Run with: .\deploy.ps1

Write-Host "Building project..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Preparing deployment..." -ForegroundColor Cyan

# Save current branch
$currentBranch = git rev-parse --abbrev-ref HEAD

# Create temp directory for dist contents
$tempDir = "..\website-deploy-temp"
Remove-Item -Path $tempDir -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Path $tempDir -Force | Out-Null

# Copy dist contents to temp (Vite copies public/* to dist/ during build)
Copy-Item -Path "dist\*" -Destination $tempDir -Recurse -Force

# Also ensure public assets are copied (images, videos, etc.)
if (Test-Path "public\images") {
    Copy-Item -Path "public\images" -Destination "$tempDir\images" -Recurse -Force
}
if (Test-Path "public\videos") {
    Copy-Item -Path "public\videos" -Destination "$tempDir\videos" -Recurse -Force
}
if (Test-Path "public\lunnoa_automate_Logo.png") {
    Copy-Item -Path "public\lunnoa_automate_Logo.png" -Destination "$tempDir\" -Force
}

# Switch to deploy branch
Write-Host "Switching to deploy branch..." -ForegroundColor Cyan
git checkout deploy

# Clear everything except .git
Get-ChildItem -Force -Exclude .git | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

# Copy from temp to root
Copy-Item -Path "$tempDir\*" -Destination "." -Recurse -Force

# Create .htaccess content
$htaccessContent = @"
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html`$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
"@

# Write .htaccess file
$htaccessContent | Out-File -FilePath ".htaccess" -Encoding ASCII

# Commit and push
Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git add -A
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push origin deploy --force

# Switch back to original branch
Write-Host "Switching back to $currentBranch..." -ForegroundColor Cyan
git checkout $currentBranch

# Cleanup temp directory
Remove-Item -Path $tempDir -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Deployed successfully!" -ForegroundColor Green
Write-Host "Hostinger will auto-deploy from the deploy branch" -ForegroundColor Yellow
