# Koech Portfolio v2

A modern, responsive portfolio website for Collins Koech - Senior Mobile Engineer & Team Lead.

## 🚀 Features

- **Modern Design**: Clean, pill-shaped design with coral and navy blue color scheme
- **Responsive**: Fully responsive across all devices
- **Performance**: Optimized build with code splitting and lazy loading
- **Animations**: Smooth animations powered by Framer Motion
- **SEO Ready**: Optimized for search engines

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Font**: Gilmer (local font file)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd koech-portfolio-v2
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 🚀 Deployment to Render

### Automatic Deployment (Recommended)

1. **Connect Repository**: 
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New" → "Static Site"
   - Connect your GitHub repository

2. **Configure Build Settings**:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Auto-Deploy**: Yes (recommended)

3. **Environment Variables** (if needed):
   - No environment variables required for this static site

### Manual Deployment

1. Build the project locally:
```bash
npm run build
```

2. Deploy the `dist` folder to your preferred hosting service.

### Using render.yaml (Infrastructure as Code)

This project includes a `render.yaml` file for automated deployment:

```yaml
services:
  - type: web
    name: koech-portfolio
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

Simply connect your repository to Render, and it will automatically use this configuration.

## 📁 Project Structure

```
koech-portfolio-v2/
├── public/
│   ├── fonts/
│   │   └── Gilmer-Heavy.otf
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ui/
│   ├── pages/
│   │   └── Index.tsx
│   ├── lib/
│   └── index.css
├── render.yaml
├── vite.config.ts
└── package.json
```

## 🎨 Color Scheme

- **Primary Background**: `#010936` (Dark Navy)
- **Accent Color**: `#ff4940` (Coral)
- **Text**: White with various opacity levels
- **Design**: Pill-shaped elements throughout

## 📱 Sections

1. **Navigation**: Sticky navigation with smooth scrolling
2. **Hero**: Introduction with animated elements
3. **About**: Professional journey and achievements
4. **Skills**: Technical skills with progress bars
5. **Experience**: Professional timeline
6. **Projects**: Featured projects showcase
7. **Contact**: Contact information and availability

## 🔧 Customization

### Updating Content

- **Personal Info**: Update contact details in `Contact.tsx`
- **Projects**: Modify project data in `Projects.tsx`
- **Experience**: Update work history in `Experience.tsx`
- **Skills**: Adjust skill levels in `Skills.tsx`

### Styling

- **Colors**: Update color variables in component files
- **Fonts**: Replace font files in `public/fonts/`
- **Layout**: Modify component layouts as needed

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading**: Fast initial load with lazy loading
- **SEO**: Optimized meta tags and structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

**Collins Koech**
- Email: collinsvictor1010@gmail.com
- Phone: +254 758 214 490
- Location: Nairobi, Kenya
- GitHub: [@collinsvictor1818](https://github.com/collinsvictor1818)
- LinkedIn: [Collins Koech](https://www.linkedin.com/in/collins-koech-2a6069180/)

---

Built with ❤️ by Collins Koech
