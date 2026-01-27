# Ishan KC - Portfolio Website

A modern, production-ready portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](./public/images/og-image.png)

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Contact Form:** EmailJS
- **Toast Notifications:** React Hot Toast

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata & SEO
│   ├── page.tsx            # Main page component
│   ├── globals.css         # Global styles & Tailwind utilities
│   └── favicon.ico         # Site favicon
├── components/
│   ├── ThemeProvider.tsx   # Dark/Light mode provider
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # About me section
│   ├── Skills.tsx          # Skills with categories
│   ├── Experience.tsx      # Work experience timeline
│   ├── Projects.tsx        # Project showcase
│   ├── Certifications.tsx  # Certificates & achievements
│   ├── Contact.tsx         # Contact form with EmailJS
│   └── Footer.tsx          # Footer with links
├── public/
│   ├── images/             # Project & profile images
│   └── resume.pdf          # Your resume (add this)
├── lib/
│   └── data.ts             # All portfolio data
├── types/
│   └── index.ts            # TypeScript interfaces
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the portfolio directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 📧 EmailJS Setup

To enable the contact form, you need to set up EmailJS:

1. **Create an EmailJS account:**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create an Email Service:**
   - Go to "Email Services"
   - Connect your email provider (Gmail, Outlook, etc.)
   - Note down your **Service ID**

3. **Create an Email Template:**
   - Go to "Email Templates"
   - Create a new template with these variables:
     ```
     From: {{name}} ({{email}})
     Subject: {{subject}}
     Message: {{message}}
     ```
   - Note down your **Template ID**

4. **Get your Public Key:**
   - Go to "Account"
   - Copy your **Public Key**

5. **Update the configuration:**
   - Open `lib/data.ts`
   - Replace the EmailJS config at the bottom:
     ```typescript
     export const emailjsConfig = {
       serviceId: 'YOUR_SERVICE_ID',      // e.g., 'service_abc123'
       templateId: 'YOUR_TEMPLATE_ID',    // e.g., 'template_xyz789'
       publicKey: 'YOUR_PUBLIC_KEY',      // e.g., 'abcdefghijk12345'
     };
     ```

## 🖼️ Customization

### Adding Your Profile Photo

1. Replace the placeholder image:
   - Add your photo to `public/images/`
   - Recommended: Square image, minimum 300x300px
   - Name it `profile.png` or similar

2. Update the path in `lib/data.ts`:
   ```typescript
   profileImage: '/images/profile.png',
   ```

### Adding Your Resume

1. Add your resume PDF to `public/`:
   - Name it `resume.pdf`
   - Or update the path in `lib/data.ts`:
     ```typescript
     resumeUrl: '/your-resume-name.pdf',
     ```

### Updating Project Screenshots

1. Add your project screenshots to `public/images/`:
   - Recommended size: 800x400px or 16:9 aspect ratio
   - Supported formats: PNG, JPG, WebP

2. Update paths in `lib/data.ts`:
   ```typescript
   image: '/images/your-project-screenshot.png',
   ```

### Updating Personal Information

All personal data is centralized in `lib/data.ts`. Update:

- **Personal Info:** Name, email, phone, location
- **Social Links:** LinkedIn, GitHub URLs
- **About Paragraphs:** Your bio
- **Skills:** Add/remove skills per category
- **Experience:** Your work history
- **Projects:** Your portfolio projects
- **Certifications:** Your certificates

### Updating Social Links

In `lib/data.ts`, update:
```typescript
linkedin: 'https://www.linkedin.com/in/your-profile',
github: 'https://github.com/your-username',
```

## 🎨 Theming

### Colors

The color scheme is defined in `tailwind.config.ts`. Main colors:

- **Primary:** Blue (#3b82f6)
- **Secondary:** Teal (#14b8a6)
- **Accent Purple:** (#8b5cf6)
- **Accent Cyan:** (#06b6d4)
- **Accent Pink:** (#ec4899)

### Dark/Light Mode

The theme toggle is in the navbar. Preferences are saved to localStorage.

To change the default theme:
```typescript
// In components/ThemeProvider.tsx
const [theme, setTheme] = useState<Theme>('dark'); // or 'light'
```

## 🚀 Deployment

### Deploying to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [https://vercel.com/](https://vercel.com/)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

3. **Set up custom domain (optional):**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Environment Variables (if needed)

For production EmailJS, you can use environment variables:

1. Create `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. Update `lib/data.ts` to use environment variables

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🔧 Troubleshooting

### Images not loading
- Ensure images are in the `public/` folder
- Check file paths are correct (case-sensitive)
- Clear browser cache

### EmailJS not working
- Verify all three IDs are correct
- Check EmailJS dashboard for errors
- Ensure email service is connected

### Styles not applying
- Run `npm run dev` again
- Check Tailwind classes are valid
- Inspect element in browser DevTools

### Dark mode flickering
- This is handled by the ThemeProvider
- Clear localStorage if issues persist

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [EmailJS](https://www.emailjs.com/)

---

**Built with ❤️ by Ishan KC**

For questions or support, contact: ishankc777@gmail.com
