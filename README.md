# Headline Widget

## Project Description

**Headline Widget** is a modern, interactive React + TypeScript application powered by Vite and TailwindCSS.  
It allows users to design and preview attention-grabbing headlines with customizable typography, gradients, effects, and per-word styling.

The app includes a real-time preview pane with animations powered by GSAP, UI customization panels, and export utilities so users can easily generate CSS, HTML, or JSON for their styled headlines.

**Live Preview:**  
https://headline-widget-pro.netlify.app/

---

## Features

- 🎨 **Typography Controls**: Adjust font family, weight, and size with live preview.
- 🌈 **Colors & Gradients**: Apply solid colors or directional gradients.
- ✨ **Modern Effects**:
  - Fade-in entrance animation
  - Hover glow effects
  - Dozens of per-letter animations with customizable patterns and delays
- 🖋️ **Segment Styling**: Style specific words or segments with highlights, underlines, or backgrounds.
- 🎯 **Quick Presets**: 9 professionally designed preset styles including Modern, Elegant, Bold, Gradient, Shadow, Retro, Neon Glow, Minimal, and Playful.
- ⚡ **Real-Time Preview**: Animated headline preview using **GSAP**.
- 📤 **Export Options**: Export your styled headline as:
  - JSON configuration
  - CSS styles
  - HTML (complete snippet)
  - Copy styles to clipboard
- 🧩 **Responsive UI** with light/dark support via TailwindCSS.

---

## Installation

### Prerequisites

- [Git](https://git-scm.com/) (to clone the repository)
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (for dependency management)
- A modern web browser (Chrome, Edge, Firefox, Safari, etc.)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/usernayeem/headline-widget.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd headline-widget
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run locally:**
   ```bash
   npm run dev
   ```
   This will start the development server. The app will be available at `http://localhost:5173`.

---

## Usage

- Enter your **headline text** in the sidebar.
- Customize:
  - Typography: font family, weight, size
  - Colors: text, gradients
  - Effects: fade-in, hover glow, animations
  - Segments: style individual words or phrases
- Export your creation via the provided buttons:
  - JSON (re-import or save settings)
  - CSS stylesheet
  - HTML with inline styles
  - Copy CSS snippet to clipboard

---

## Testing

At present, no automated tests are included.  
Recommended manual testing steps:

- Run `npm run dev` and validate:
  - Responsive design across devices.
  - All export formats (JSON/CSS/HTML/Clipboard).
  - Animations (fade-in, letter patterns, hover glow).
  - Segment styling on multiple words.

Linting is available via:

```bash
npm run lint
```

---

## License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more details.

---

## Contact / Support

- **Author:** [Md Nayeem](https://www.github.com/usernayeem)
- **Repository**: https://github.com/usernayeem/headline-widget
- **Issues:** Please use the [GitHub Issues page](https://github.com/usernayeem/headline-widget/issues) for bug reports or feature requests.
