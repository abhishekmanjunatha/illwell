# 🚀 Deployment Instructions for illwell Website

## ✅ Project Status
- ✅ Built successfully
- ✅ Git repository initialized  
- ✅ GitHub Pages configuration complete
- ✅ Ready for deployment

## 📝 Next Steps - Follow these instructions:

### 1. Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository" (+ button)
3. Repository name: `illwell`
4. Set as **Public** (required for GitHub Pages)
5. **Do NOT** initialize with README (we already have files)
6. Click "Create repository"

### 2. Connect Local Repository to GitHub
Run these commands in your terminal (replace `YOUR-USERNAME` with your GitHub username):

```bash
git remote add origin https://github.com/YOUR-USERNAME/illwell.git
git branch -M main
git push -u origin main
```

### 3. Deploy to GitHub Pages
After pushing to GitHub, run:

```bash
npm run deploy
```

This will:
- Build the project
- Create a `gh-pages` branch
- Deploy the built files to GitHub Pages

### 4. Enable GitHub Pages (if needed)
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" in the sidebar
4. Under "Source", select "Deploy from a branch"
5. Select branch: `gh-pages`
6. Select folder: `/ (root)`
7. Click "Save"

### 5. Access Your Live Website
Your website will be available at:
```
https://YOUR-USERNAME.github.io/illwell/
```

Note: It may take a few minutes for the site to be available after first deployment.

## 🔧 Update Configuration (Important!)
Before deploying, update the homepage URL in `package.json`:
- Change: `"homepage": "https://abhishek.github.io/illwell"`
- To: `"homepage": "https://YOUR-USERNAME.github.io/illwell"`

Then rebuild and redeploy:
```bash
npm run build
npm run deploy
```

## 🎯 Features Included
- ✅ Responsive design (desktop + mobile)
- ✅ Practo widget integration for online bookings
- ✅ Phone call functionality
- ✅ Modern UI with icons and animations
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Static export ready

## 📱 Mobile Features
- ✅ Single-line "Book Appointment" button in navbar (Practo widget)
- ✅ Full-width "Get Appointment" button at bottom (phone call)
- ✅ Hidden hamburger menu for cleaner design
- ✅ Optimized button sizes and icons

## 🔄 Future Updates
To update the website:
1. Make changes to your code
2. Commit changes: `git add . && git commit -m "Update message"`
3. Push to GitHub: `git push`
4. Deploy: `npm run deploy`

## 📞 Contact Actions
- **Navbar "Book Appointment"**: Opens Practo booking widget
- **Mobile bottom "Get Appointment"**: Calls +919886717192
- **All other "Book Consultation" buttons**: Calls +919886717192

---

🎉 **Your professional dietitian website is ready for deployment!**
