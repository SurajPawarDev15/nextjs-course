import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-somehash"
          crossOrigin="anonymous"
        />

        {/* ✅ Popper JS */}
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          crossOrigin="anonymous"
        ></script>

        {/* ✅ Bootstrap JS */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
