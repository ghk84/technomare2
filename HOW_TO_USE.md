# How to Use the Hellenic Maritime Registry Website

## Quick Start

### Option 1: Direct File Opening (Recommended for Testing)
The website is now configured to work when you simply **double-click the `index.html` file** in the `dist` folder!

1. Navigate to the `dist` folder
2. Double-click `index.html`
3. The website will open in your default browser

The website now uses hash-based routing (URLs will have `#` in them like `index.html#/naval`), which allows it to work as a standalone HTML file.

---

### Option 2: Local Web Server (Recommended for Production)

For the best experience and to test it like a real website, use a local web server:

#### Using Python (if installed):
```bash
# Python 3
cd dist
python -m http.server 8000

# Then open: http://localhost:8000
```

#### Using Node.js (if installed):
```bash
# Install a simple server globally
npm install -g http-server

# Run in the dist folder
cd dist
http-server

# Then open: http://localhost:8080
```

#### Using VS Code:
1. Install the "Live Server" extension
2. Right-click on `dist/index.html`
3. Select "Open with Live Server"

---

## Website Features

### Pages:
- **Home** (`/` or `index.html`) - Company introduction, services, contact form, and map
- **Ship Registration** (`#/naval`) - Ship registration services with 20-image gallery
- **Harbor Piers** (`#/piers`) - Pier registration services with 20-image gallery

### Language:
- Click the language toggle button (🌐 EN/ΕΛ) in the top-right corner
- Switches between English and Greek instantly

### Contact Form:
- Located at the bottom of the home page
- Submits locally (shows success message)
- Google Maps shows location: 38.829651, 20.710351

### Image Galleries:
- Click any image to view full-screen
- Use arrow keys or buttons to navigate
- Press ESC to close

---

## For Deployment

To deploy this website to a hosting service:

1. Upload the entire contents of the `dist` folder
2. Make sure `index.html` is in the root directory
3. The website is a single HTML file with everything embedded (CSS, JS, fonts)

### Hosting Options:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Deploy the `dist` folder
- **GitHub Pages**: Upload to repository
- **Any web hosting**: Upload via FTP/cPanel

---

## Troubleshooting

**Q: The page is blank when I open it**
- Make sure you're opening `dist/index.html` (not the root `index.html`)
- Try using a local web server (see Option 2 above)
- Check browser console (F12) for any errors

**Q: Images don't load**
- Images are hosted on Pexels CDN, internet connection required
- Make sure your browser allows loading external images

**Q: Navigation doesn't work**
- The website now uses hash-based routing (`#/naval`, `#/piers`)
- This should work even when opening directly as a file

---

## File Structure

```
project/
├── dist/
│   └── index.html          ← Open this file!
├── src/                    ← Source code (for development)
├── package.json
└── vite.config.ts
```

---

## Need Help?

The website is completely self-contained in the `dist/index.html` file. Everything (HTML, CSS, JavaScript) is bundled into this single file for easy distribution.

Enjoy your maritime registry website! ⚓🚢
