import type { Metadata } from 'next';
import './globals.css';
import './slideshow.css';

export const metadata: Metadata = {
  title: 'Pacific Roadhouse | Cape Town Cafeteria',
  description:
    'A proper Cape Town cafeteria at Pacific Business Park on Jakes Gerwel Drive. Call for today\'s menu and come hungry.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Pacific Roadhouse | Come hungry.',
    description:
          'A proper Cape Town cafeteria at Pacific Business Park, Jakes Gerwel Drive.',
    images: [
      {
        url: '/brand/social-card.png',
        width: 1200,
        height: 433,
        alt: 'Pacific Roadhouse',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
