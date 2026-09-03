# ⚡ Interactive React 

A responsive, highly dynamic character physics simulation built from scratch using **ReactJS** and **Styled-Components** based on strict **Atomic Design Principles**. This project achieves 100% pure CSS, styles, images, canvas, or external graphic libraries.

## 🚀 Key Engineering Features
- **Atomic Design Directory Structure:** Decoupled into `atoms`, `molecules`, `organisms`, and a global `common/shared` module for professional reusability.
- **Unified Nesting Trees:** Handled all skeleton postures under a single structured CSS inheritance tree via Styled-Components, securing flawless joint anchors (`transform-origin`).
- **Dual-Synchronized Motion State:** Driven by a central React State that symmetrically controls both character joints in real-time.
- **Infinite Loop Animations:** Smooth continuous running and dancing loop states engineered via native CSS `@keyframes`.
- **Custom Mouse Gaze-Tracking Hook:** Calculated trigonometric coordinates to enable interactive physics and defensive postures when the mouse gets too close.
- **Fully Responsive Breakpoints:** Structured custom media queries to adapt the entire control panel and studio stage onto mobile and tablet screen widths.

## 📁 Folder Architecture
```text
src/
 ├── App.jsx
 ├── AppStyles.js
 ├── hooks/
 │    └── useMouseTracker.js
 └── components/
      ├── atoms/
      │    ├── line/
      │    ├── circle/
      │    └── common/
      │         ├── SliderInput/
      │         └── CustomButton/
      ├── molecules/
      │    └── Head/
      └── organisms/
           └── Character/
```

## 🛠️ Installation & Local Setup
```bash
npm install
npm start
```