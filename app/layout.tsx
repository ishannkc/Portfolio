import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ishankc.com'),
  title: 'Ishan KC | Full-Stack Developer',
  description:
    'Portfolio of Ishan KC - A passionate Full-Stack Developer specializing in MERN stack, AI integration, and cloud solutions. Computer Science student at Kathmandu University.',
  keywords: [
    'Ishan KC',
    'Full-Stack Developer',
    'MERN Stack',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'Web Developer',
    'Nepal',
    'Kathmandu University',
  ],
  authors: [{ name: 'Ishan KC' }],
  creator: 'Ishan KC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ishankc.com',
    siteName: 'Ishan KC Portfolio',
    title: 'Ishan KC | Full-Stack Developer',
    description:
      'Portfolio of Ishan KC - A passionate Full-Stack Developer specializing in MERN stack, AI integration, and cloud solutions.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ishan KC - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ishan KC | Full-Stack Developer',
    description:
      'Portfolio of Ishan KC - A passionate Full-Stack Developer specializing in MERN stack, AI integration, and cloud solutions.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ishan KC',
  url: 'https://ishankc.com',
  jobTitle: 'Full-Stack Developer',
  description:
    'A passionate Full-Stack Developer specializing in MERN stack, AI integration, and cloud solutions.',
  email: 'ishankc777@gmail.com',
  telephone: '+977-9860039457',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Banepa',
    addressCountry: 'Nepal',
  },
  sameAs: [
    'https://www.linkedin.com/in/ishan-kc',
    'https://github.com/ishankc',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Kathmandu University',
  },
  knowsAbout: [
    'React.js',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Python',
    'MongoDB',
    'AWS',
    'Firebase',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else if (theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-dark-bg text-gray-900 dark:text-white transition-colors duration-300">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--card)',
              color: 'var(--foreground)',
              border: '1px solid var(--card-border)',
            },
            success: {
              iconTheme: {
                primary: '#22c55e',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
