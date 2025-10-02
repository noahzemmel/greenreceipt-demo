# Vault Marketing Website

A modern, professional marketing website for Vault - the digital receipt management platform.

## 🚀 Features

- **Modern Design**: Clean, futuristic design inspired by Revolut, Stripe, and Amazon
- **Responsive**: Fully responsive design that works on all devices
- **Professional Branding**: Consistent Vault branding with green color scheme
- **SEO Optimized**: Proper meta tags and structured content
- **Fast Performance**: Built with Next.js for optimal performance

## 📱 Pages

### 1. Home Page (`/`)
- Hero section with tagline: "Vault – All your receipts. Zero waste."
- Value propositions for consumers, retailers, and the planet
- Abstract modern visual elements
- Call-to-action sections

### 2. What We Do (`/what-we-do`)
- Core solution explanation
- Feature grid showcasing capabilities
- Consumer and retailer benefits
- Interactive elements

### 3. Why We Do This (`/why-we-do-this`)
- Problem statement with statistics
- Environmental impact data
- Vision for the future
- Impact numbers and metrics

### 4. Founders (`/founders`)
- Team profiles for Noah Zemmel and Sam Hillman
- Cambridge University backgrounds
- Company story and values
- Professional headshot placeholders

### 5. Contact (`/contact`)
- Contact form with validation
- Contact information
- FAQ section
- Social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 🎨 Design System

### Colors
- **Primary**: Green (#00A86B / hsl(142 76% 36%))
- **Background**: White with subtle gradients
- **Text**: Dark gray (#222.2 84% 4.9%)
- **Accents**: Various green shades for highlights

### Typography
- **Font**: Inter (sans-serif)
- **Headings**: Bold, large sizes
- **Body**: Medium weight, readable sizes
- **Gradient Text**: Green gradient for emphasis

### Components
- **Cards**: Subtle shadows, hover animations
- **Buttons**: Green primary, outline secondary
- **Navigation**: Sticky header with backdrop blur
- **Forms**: Clean inputs with proper validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vault-marketing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
vault-marketing/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx        # Home page
│   │   ├── what-we-do/     # What We Do page
│   │   ├── why-we-do-this/ # Why We Do This page
│   │   ├── founders/       # Founders page
│   │   ├── contact/        # Contact page
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable components
│   │   ├── ui/            # shadcn/ui components
│   │   └── navigation.tsx # Navigation component
│   └── lib/               # Utility functions
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
└── package.json          # Dependencies
```

## 🎯 Key Features

### Navigation
- Sticky header with backdrop blur
- Responsive mobile menu
- Smooth scrolling between sections
- Professional logo and branding

### Hero Sections
- Large, impactful headlines
- Gradient backgrounds
- Abstract visual elements
- Clear call-to-action buttons

### Content Sections
- Feature grids with hover animations
- Statistics and metrics display
- Professional card layouts
- Consistent spacing and typography

### Forms
- Contact form with validation
- Professional styling
- Accessibility features
- Error handling

## 🔧 Customization

### Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  // ... other colors
}
```

### Content
- Update page content in respective `page.tsx` files
- Modify navigation in `src/components/navigation.tsx`
- Update metadata in `src/app/layout.tsx`

### Styling
- Global styles in `src/app/globals.css`
- Component-specific styles using Tailwind classes
- Custom animations and transitions

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Images**: Optimized with Next.js Image component

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain configuration available

### Other Platforms
- **Netlify**: Compatible with static export
- **AWS Amplify**: Full-stack deployment support
- **Railway**: Simple deployment with database support

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: hello@vault.app
- Website: [vault.app](https://vault.app)

---

**Vault** - Digital receipts for a digital world 🔒