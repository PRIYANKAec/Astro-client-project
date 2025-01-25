import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Astrology Center</title>
        <link rel="icon" href="/astro-logo.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}