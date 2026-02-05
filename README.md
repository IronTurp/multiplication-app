# Multiplication Practice PWA

A colorful, kid-friendly Progressive Web App for practicing multiplication tables. Features multiple game modes, progress tracking, and works offline!

## Features

- **Three Practice Modes:**
  - Quiz Mode: Random questions with instant feedback
  - Timed Challenge: Race against the clock
  - Practice by Table: Focus on specific multiplication tables

- **Configurable Tables:** Choose which tables (1-12) to practice

- **Progress Tracking:**
  - Total questions answered
  - Accuracy statistics
  - Per-table performance
  - High scores for timed challenges

- **PWA Capabilities:**
  - Installable on mobile and desktop
  - Works offline after first visit
  - Fast loading with caching

- **Kid-Friendly Design:**
  - Bright, colorful interface
  - Fun animations and celebrations
  - Large, touch-friendly buttons
  - Encouraging feedback messages

## Live Demo

Once deployed, your app will be available at:
```
https://[your-username].github.io/multiplication-app/
```

## Project Structure

```
multiplication-app/
├── index.html              # Main app shell
├── styles.css              # Styling and animations
├── app.js                  # Game logic and state management
├── manifest.json           # PWA manifest
├── service-worker.js       # Offline support
├── icons/                  # App icons
│   ├── icon.svg           # SVG template
│   ├── generate-icons.html # Icon generator tool
│   └── README.md          # Icon instructions
└── README.md              # This file
```

## Local Development

1. **Clone or download this repository**

2. **Generate icons** (required for PWA):
   ```bash
   # Open icons/generate-icons.html in your browser
   # Click the download buttons to generate icons
   # Save them in the icons folder
   ```

3. **Test locally:**
   - Open `index.html` in your browser, or
   - Use a local server for better testing:
     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js http-server
     npx http-server

     # Using PHP
     php -S localhost:8000
     ```
   - Visit `http://localhost:8000`

4. **Test the app:**
   - Try all three game modes
   - Check settings and table selection
   - View stats after playing
   - Test on mobile devices

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon → "New repository"
3. Name it `multiplication-app`
4. Set to Public (required for free GitHub Pages)
5. Click "Create repository"

### Step 2: Initialize Git and Push Code

In your project folder, run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Multiplication Practice PWA"

# Add GitHub repository as remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/multiplication-app.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source":
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Select "/ (root)" folder
5. Click "Save"

### Step 4: Wait for Deployment

- GitHub will build and deploy your site (takes 1-2 minutes)
- Visit `https://[YOUR-USERNAME].github.io/multiplication-app/`
- Your app is now live!

### Step 5: Update the Manifest (Important!)

If your repository name is different from `multiplication-app`, update these files:

**manifest.json:**
```json
"start_url": "/your-repo-name/",
```

**service-worker.js:**
```javascript
const urlsToCache = [
  '/your-repo-name/',
  '/your-repo-name/index.html',
  // ... update all paths
];
```

Then commit and push the changes:
```bash
git add .
git commit -m "Update paths for GitHub Pages"
git push
```

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #4CAF50;
    --secondary: #2196F3;
    --accent: #FF9800;
    /* ... more colors */
}
```

### Tables Range
To change the range of tables (e.g., 1-15 instead of 1-12):
1. Edit `app.js` - update loops and default selected tables
2. Edit `renderTableCheckboxes()` and `renderPracticeTableButtons()`

### Timer Duration
In `app.js`, find `startMode('timed')`:
```javascript
this.state.timeLeft = 60; // Change this value
```

### Question Pool
Modify `generateQuestion()` in `app.js` to change:
- Multiplier range (currently 1-12)
- Question format
- Difficulty levels

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## PWA Installation

### On Mobile (Android/iOS):
1. Visit the app in your browser
2. Tap the "Add to Home Screen" option
3. The app installs like a native app

### On Desktop (Chrome/Edge):
1. Look for the install icon in the address bar
2. Click "Install"
3. App opens in its own window

## Technical Details

- **Size:** ~50-100 KB total (very lightweight)
- **Storage:** Uses localStorage (no backend needed)
- **Offline:** Fully functional offline after first visit
- **Performance:** Instant loading after caching

## Troubleshooting

### Service Worker Not Registering
- Service workers require HTTPS (GitHub Pages has this by default)
- For local testing, use `localhost` (HTTP is allowed)

### Icons Not Showing
- Make sure icon files are generated and in the `icons/` folder
- Check browser console for 404 errors
- Verify paths in `manifest.json`

### App Not Installing as PWA
- Ensure all icons are present
- Check that `manifest.json` is linked in `index.html`
- Service worker must register successfully
- Must be served over HTTPS

### Stats Not Saving
- Check browser localStorage settings
- Some privacy modes block localStorage
- Clear cache and try again

## Future Enhancements

Ideas for future updates:
- Sound effects and background music
- Multiple difficulty levels
- Division practice mode
- Parent dashboard with detailed analytics
- Multiplayer challenges
- Achievements and badges
- Custom themes

## License

Free to use and modify for personal and educational purposes.

## Credits

Created with love for kids learning multiplication!

Built with vanilla HTML, CSS, and JavaScript - no frameworks needed!

## Support

If you encounter issues or have suggestions:
1. Check the Troubleshooting section above
2. Review browser console for errors
3. Ensure all files are present and paths are correct

---

Happy Multiplying! 🎯✖️🎉
