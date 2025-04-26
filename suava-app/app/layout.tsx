
import "./globals.css";

import type { ReactNode } from 'react';

export const metadata = {
  title: 'Suuave About Page',
  description: 'Replicated About page from Figma design',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}