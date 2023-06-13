import "./globals.css";

export const metadata = {
  title: "AI App == Next 13 + Tailwind",
  description: "Discover and share ai-prompts",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">
        {/* todo: Nav */}
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
