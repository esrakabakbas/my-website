@echo off
echo Copying PDF files from src/assets/documents to public/documents...

REM Create documents directory in public if it doesn't exist
if not exist "public\documents" mkdir "public\documents"

REM Copy PDF files
copy "src\assets\documents\cv.pdf" "public\documents\cv.pdf"
copy "src\assets\documents\ales_sonuc.pdf" "public\documents\ales_sonuc.pdf"
copy "src\assets\documents\osym_sonuc.pdf" "public\documents\osym_sonuc.pdf"

echo PDF files copied successfully!
echo You can now delete the files from src/assets/documents if you want.
pause 