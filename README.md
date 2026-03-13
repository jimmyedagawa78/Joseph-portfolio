# Joseph Blessing Stephen — Portfolio

Personal portfolio website. Single-page app with separated CSS and JS.

## File Structure

```
/
├── index.html              ← HTML structure (31 KB)
├── style.css               ← All styles (37 KB)
├── script.js               ← Navigation, tilt effect, cursor (4 KB)
└── images/
    ├── home/
    │   ├── social.jpg      ← Home card: Social & Content (portrait, 3:4 ratio)
    │   ├── film.jpg        ← Home card: Film & Editing
    │   ├── logos.jpg       ← Home card: Logo Design
    │   └── articles.jpg    ← Home card: Articles
    ├── hero/
    │   ├── top-left.jpg    ← Hero grid top-left
    │   ├── top-right.jpg   ← Hero grid top-right
    │   ├── bottom-left.jpg ← Hero grid bottom-left
    │   └── bottom-right.jpg
    ├── social/
    │   ├── post-1.jpg
    │   ├── post-2.jpg
    │   └── ...
    └── logos/
        ├── logo-1.jpg
        └── ...
```

## Adding Images

Each home card has a `.cat-bg` div. To add an image, change:
```html
<div class="cat-bg"></div>
```
to:
```html
<div class="cat-bg"><img src="images/home/social.jpg" alt="Social & Content"></div>
```

## Hosting
Hosted on GitHub Pages.
Live URL: `https://[your-username].github.io/[repo-name]`
