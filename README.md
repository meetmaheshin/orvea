# Orvea Estates Website

A modern, responsive real estate website built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Hero Section**: Eye-catching hero section with lead capture form
- **Property Listings**: Grid-based property showcase with location filtering
- **About Section**: Company information and statistics
- **3-Step Process**: Visual guide to the home buying journey
- **Testimonials**: Customer reviews with ratings
- **Benefits Section**: Key value propositions with icons
- **FAQ Accordion**: Collapsible frequently asked questions
- **Newsletter**: Email subscription form
- **Contact Footer**: Complete contact information and social media links

## Tech Stack

- **React**: UI library for building components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: ES6+ modern JavaScript

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   \`\`\`bash
   cd houseeazy-clone
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open your browser and visit: [http://localhost:5173/](http://localhost:5173/)

### Build for Production

To create a production build:

\`\`\`bash
npm run build
\`\`\`

The optimized files will be in the \`dist\` directory.

### Preview Production Build

To preview the production build locally:

\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
houseeazy-clone/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, logo, etc.
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Properties.jsx
│   │   ├── About.jsx
│   │   ├── Process.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Benefits.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   ├── data/           # Static data files
│   │   └── properties.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
\`\`\`

## Customization

### Update Contact Information

Edit the Footer component ([src/components/Footer.jsx](src/components/Footer.jsx)) to update:
- Phone number
- Email address
- Physical address
- Social media links

### Modify Property Listings

Edit [src/data/properties.js](src/data/properties.js) to add or modify:
- Property listings
- Testimonials
- FAQ items

### Change Colors

Edit [tailwind.config.js](tailwind.config.js) to customize the color scheme.

### Replace Logo

Replace [src/assets/logo.png](src/assets/logo.png) with your company logo.

## Deployment

### Deploy to Hostinger

1. Build the project:
   \`\`\`bash
   npm run build
   \`\`\`

2. Upload the contents of the \`dist\` folder to your Hostinger hosting account via:
   - FTP/SFTP
   - Hostinger File Manager
   - Git deployment (if available)

3. Ensure your domain (orveaestates.com) points to the directory containing the uploaded files.

### Deploy to Netlify/Vercel

Both platforms offer one-click deployment:

**Netlify:**
1. Connect your repository
2. Build command: \`npm run build\`
3. Publish directory: \`dist\`

**Vercel:**
1. Import your repository
2. Framework: Vite
3. Deploy

## Form Handling

Currently, forms use client-side validation only. To enable email functionality:

1. Integrate with a service like:
   - EmailJS
   - Formspree
   - SendGrid
   - Your own backend API

2. Update the form handlers in:
   - [src/components/Hero.jsx](src/components/Hero.jsx) (Contact form)
   - [src/components/Footer.jsx](src/components/Footer.jsx) (Newsletter)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Orvea Estates. All rights reserved.

## Support

For questions or issues, contact: info@orveaestates.com
