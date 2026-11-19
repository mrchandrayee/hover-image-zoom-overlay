# Hover Image Zoom with Overlay

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/hover-image-zoom-overlay/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Runnable HTML/CSS/JS recreation of the uploaded 5.44-second screen recording.

## Run locally

Open `index.html` in a modern browser, or run:

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000.

No npm install, framework, or external assets required.

## HTML visible in the video

```html
<div class="zoom-overlay">
  <img src="1.jpg" alt="Sample" />
  <div class="overlay">
    <h1>Image Title</h1>
    <h3>Description goes here</h3>
  </div>
</div>
```

## CSS visible in the video

```css
.zoom-overlay {
  position: relative;
  width: 600px;
  height: 350px;
  overflow: hidden;
  cursor: pointer;
}
```

The screen recording shows the above HTML and CSS snippet. It does not show the remaining CSS that styles the image, overlay opacity, or zoom transition. Those supporting rules are reconstructed in `style.css` to reproduce the visible hover zoom and dark text overlay. `assets/1.jpg` is cropped from the example image shown in the uploaded video.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
