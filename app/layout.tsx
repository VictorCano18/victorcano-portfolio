import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-black sm:max-w-screen-sm mx-auto relative px-5'>{children}</body>
    </html>
  );
}
