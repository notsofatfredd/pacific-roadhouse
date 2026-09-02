import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pacific Roadhouse | Cape Town Takeaway',
  description:
    'Cape Town favourites, generous portions and straight-up value at Pacific Business Park on Jakes Gerwel Drive.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Pacific Roadhouse | Big flavour. No fuss.',
    description:
      'A proper Cape Town takeaway at Pacific Business Park, Jakes Gerwel Drive.',
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
