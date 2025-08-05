Write-Host "Copying PDF files from src/assets/documents to public/documents..." -ForegroundColor Green

# Create documents directory in public if it doesn't exist
if (!(Test-Path "public\documents")) {
    New-Item -ItemType Directory -Path "public\documents" -Force
}

# Copy PDF files
Copy-Item "src\assets\documents\cv.pdf" "public\documents\cv.pdf" -Force
Copy-Item "src\assets\documents\ales_sonuc.pdf" "public\documents\ales_sonuc.pdf" -Force
Copy-Item "src\assets\documents\osym_sonuc.pdf" "public\documents\osym_sonuc.pdf" -Force

Write-Host "PDF files copied successfully!" -ForegroundColor Green
Write-Host "You can now delete the files from src/assets/documents if you want." -ForegroundColor Yellow
Read-Host "Press Enter to continue" 