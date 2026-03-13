# Joseph Blessing Stephen — Portfolio

Personal portfolio website. Built as a single-page HTML file with vanilla JS.

## File Structure

```
/
├── index.html              ← the entire site
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
    │   ├── post-1.jpg      ← Social & Content design tab images
    │   ├── post-2.jpg
    │   └── ...
    ├── film/
    │   └── (thumbnails auto-pulled from YouTube — no files needed)
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

This site is hosted on GitHub Pages.
Live URL: `https://[your-username].github.io/[repo-name]`
