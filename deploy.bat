@echo off
echo === Building project ===
npm run build

cd dist
echo === Initializing git in dist folder ===
git init
git remote add origin https://github.com/jvprz/jvprz.github.io.git
git checkout -b main

git add .
git commit -m "Deploy"
git push -f origin main

cd ..
echo === Deploy completed ===
pause
