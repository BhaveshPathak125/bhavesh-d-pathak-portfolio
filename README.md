<div align="center">

# ✦ Bhavesh Pathak — Portfolio

**AI/ML Engineer · Full Stack Developer · Agentic AI Builder**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Portfolio-4169E1?style=for-the-badge&logo=vercel&logoColor=white)](https://bhaveshpathak125.github.io/Bhavesh-Portfolio)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![EmailJS](https://img.shields.io/badge/EmailJS-Integrated-FF6B35?style=for-the-badge)](https://www.emailjs.com)

</div>

---

## 📸 Preview

> A dark-themed, scroll-animated developer portfolio built with React + Vite, featuring a live scroll-tracked experience timeline, bento-grid project cards, and a fully functional contact form wired to Gmail via EmailJS.

---

## ✨ Features

| Section | Highlights |
|---|---|
| **Hero** | Animated intro with role typewriter effect and CTA buttons |
| **About** | Personal summary, tech focus, and profile card |
| **Skills** | Categorized skill grid with icon badges |
| **Experience** | Scroll-tracked SVG ball path — ball runs ahead of scroll, cards animate in on approach |
| **Projects** | Bento-grid cards with hover detail overlay and direct GitHub links |
| **Contact** | Live contact form → emails delivered to Gmail via EmailJS, with loading/success/error states |

---

## 🛠️ Tech Stack

**Frontend**
- [React 18](https://react.dev) — component architecture
- [Vite 7](https://vitejs.dev) — lightning-fast dev server & build
- CSS custom properties — Royal Blue & Black design system
- `react-icons` — icon library

**Email**
- [EmailJS](https://www.emailjs.com) — serverless email delivery, no backend needed

**Tooling**
- ESLint — code quality
- Git — version control

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/BhaveshPathak125/Bhavesh-Portfolio.git
cd Bhavesh-Portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build       # outputs to /dist
npm run preview     # preview the production build locally
```

---

## 📧 EmailJS Setup

The contact form uses EmailJS to deliver messages directly to Gmail — no backend required.

1. Sign up at [emailjs.com](https://www.emailjs.com) (free tier: 200 emails/month)
2. Add a **Gmail** email service and connect your account
3. Create an **Email Template** using these variables:
   ```
   {{name}}  {{from_email}}  {{message}}
   ```
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Paste them into `src/components/Contact.jsx`:

```js
const EMAILJS_SERVICE_ID  = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY  = 'your_public_key';
```

> ⚠️ These values are client-side visible by design (EmailJS architecture). Restrict allowed origins in your EmailJS dashboard after deploying.

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/
│       ├── swar-ai.png
│       ├── daily-money.png
│       └── camelot-ai.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Experience.jsx / .css   ← scroll-tracked SVG timeline
│   │   ├── Projects.jsx / .css     ← bento grid + hover overlays
│   │   └── Contact.jsx / .css      ← EmailJS contact form
│   ├── App.jsx
│   ├── App.css
│   ├── index.css                   ← design system / CSS variables
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🎨 Design System

All colors, spacing, and typography are driven by CSS custom properties defined in `src/index.css`:

```css
--royal-blue:       #4169E1
--royal-blue-dark:  #2B4ACB
--royal-blue-light: #6D8EF5
--bg-primary:       #06060B
--bg-secondary:     #0C0C14
--bg-card:          #12121E
```

---

## 🗂️ Featured Projects

| Project | Description | Repo |
|---|---|---|
| **Swar AI** | Voice-based AI assistant — WhatsApp, calls, search | [GitHub](https://github.com/BhaveshPathak125/Swar_AI) |
| **Daily Money** | AI-powered expense tracker with spending insights | [GitHub](https://github.com/BhaveshPathak125/DailyMoney) |
| **Camelot AI** | RAG-based multi-document chatbot (Flask + FastAPI) | [GitHub](https://github.com/BhaveshPathak125/Camelot-AI) |

---

## 💼 Experience Highlights

- **BlackHole Infiverse** — AI & ML Intern · Built AI Agents & integrated AI into Unreal Engine 5
- **IBM** — AI & ML Intern · Developed Eco-Energy Chatbot with Watson Assistant
- **Levaze Digital** — Full Stack Developer · Led team of 4, built E-Commerce platform
- **TechnoHacks EduTech** — Full Stack Developer · 3 major MEAN stack projects
- **IBM** — Data Analyst · Data Visualization & Analysis

---

## 📬 Contact

| Platform | Link |
|---|---|
| Email | [pathakbhavesh2005@gmail.com](mailto:pathakbhavesh2005@gmail.com) |
| LinkedIn | [Bhavesh Pathak](https://www.linkedin.com/in/bhavesh-pathak-013368295/) |
| GitHub | [BhaveshPathak125](https://github.com/BhaveshPathak125) |
| Instagram | [@bhavesh_pathak15](https://instagram.com/bhavesh_pathak15) |

---

<div align="center">

Made with ☕ and a lot of CSS by **Bhavesh D Pathak**

</div>
