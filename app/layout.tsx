import '@/app/ui/global.css';
import { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'Victor Cano Portfolio',
  description: 'Know more about me, my work and get in touch!'
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-black sm:max-w-screen-sm mx-auto relative px-5'>{children}</body>
      <GoogleAnalytics gaId="G-8JG0BDHZ7T" />
    </html>
  );
}
