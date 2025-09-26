# Proviniti Website - React.js Implementation

A modern, responsive website for Proviniti built with React.js, showcasing their ServiceNow consulting and digital transformation services.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design matching the original screenshots
- **Component-Based Architecture**: Modular React components for easy maintenance
- **Interactive Elements**: Hover effects, smooth transitions, and engaging user interface
- **SEO-Friendly**: Proper semantic HTML structure
- **Multi-Page Routing**: React Router for seamless navigation

## 📋 Updated Project Structure

```
src/
├── components/
│   ├── CTASection.jsx & CTASection.css
│   ├── ClientShowcase.jsx & ClientShowcase.css
│   ├── FooterSection.jsx & FooterSection.css
│   ├── Header.jsx & Header.css
│   ├── Industries.jsx & Industries.css
│   ├── Services.jsx & Services.css
│   ├── Solutions.jsx & Solutions.css
│   ├── TestimonialSection.jsx & TestimonialSection.css
│   └── WhoWeAre.jsx & WhoWeAre.css
├── pages/
│   ├── Contact.jsx & ContactPage.css
│   ├── Home.jsx & Home.css
│   ├── Resources.jsx & Resources.css
│   ├── WhatWeDo.jsx & WhatWeDo.css
│   └── WhoWeAre.jsx
├── main.jsx
└── index.css
```

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with Flexbox and Grid
- **HTML5** - Semantic markup
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Create a new React app:**
```bash
npx create-react-app proviniti-website
cd proviniti-website
```

2. **Install React Router:**
```bash
npm install react-router-dom
```

3. **Replace the default src folder structure** with the provided files

4. **Install dependencies:**
```bash
npm install
```

5. **Start the development server:**
```bash
npm start
```

6. **Open your browser** and navigate to `http://localhost:3000`

## 🎯 Component Overview

### Layout Components
- **Header.jsx** - Navigation header with responsive menu
- **FooterSection.jsx** - Footer with links and company information

### Home Page Components
- **Hero Section** - Main banner with call-to-action
- **Services.jsx** - Service offerings grid
- **Solutions.jsx** - Technical solutions showcase
- **WhoWeAre.jsx** - Company introduction
- **Industries.jsx** - Industry specialization
- **ClientShowcase.jsx** - Client testimonials and logos
- **TestimonialSection.jsx** - Customer testimonials
- **CTASection.jsx** - Call-to-action sections

### Page Components
- **Home.jsx** - Landing page with all sections
- **WhatWeDo.jsx** - Detailed service descriptions
- **WhoWeAre.jsx** - About company page
- **Resources.jsx** - Blog, press releases, resources
- **Contact.jsx** - Contact form and information

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Various Platforms

**Netlify:**
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure redirects for SPA routing

**Vercel:**
```bash
npm install -g vercel
vercel
```

**GitHub Pages:**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/proviniti-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Deploy: `npm run deploy`

## 🔧 Customization

### Colors
Main color scheme in CSS variables:
- Primary Blue: `#0056b3`
- Dark Blue: `#003d82`
- Light Gray: `#f8f9fa`
- Medium Gray: `#e9ecef`
- Text Color: `#333333`

### Content
Update text content directly in each component file. Each component is modular and easy to modify.

### Styling
Modify component CSS files to change:
- Colors and themes
- Layout and spacing
- Animations and transitions
- Responsive breakpoints

## 📄 Pages Included

1. **Home** (`/`) - Complete landing page with all sections
2. **What We Do** (`/what-we-do`) - Detailed services page
3. **Who We Are** (`/who-we-are`) - About company page
4. **Resources** (`/resources`) - Blog and press releases
5. **Contact** (`/contact`) - Contact information and form

## 🔄 Routing Configuration

Update your `App.jsx` to include React Router:

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FooterSection from './components/FooterSection';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import WhoWeAre from './pages/WhoWeAre';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Support

For support or questions about this implementation:
- Check the React documentation
- Review the component comments
- Examine the CSS styling for layout questions

## 📜 License

This project is for educational/demonstration purposes. Please ensure you have the proper rights to use any branded content.

## 🔄 Future Enhancements

Potential improvements for the website:
- [x] Add React Router for multi-page navigation
- [ ] Implement state management with Context API
- [ ] Add form validation for contact form
- [ ] Integrate with a CMS for dynamic content
- [ ] Add animations with Framer Motion
- [ ] Implement dark mode toggle
- [ ] Add internationalization (i18n)
- [ ] Integrate with analytics
- [ ] Add performance optimization (lazy loading, etc.)

---

**Built with ❤️ using React.js and React Router**

## 🎨 Design System

### Typography Scale
- H1: 2.5rem (40px)
- H2: 2rem (32px)
- H3: 1.5rem (24px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

### Spacing System
- Small: 0.5rem (8px)
- Medium: 1rem (16px)
- Large: 2rem (32px)
- X-Large: 4rem (64px)

### Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1199px
- Desktop: 1200px+

