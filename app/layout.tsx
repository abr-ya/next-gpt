import { Nav, AuthProvider } from "@/components";
import "./globals.css";

export const metadata = {
  title: "AI App == Next 13 + Tailwind",
  description: "Discover and share ai-prompts",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <AuthProvider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </AuthProvider>
    </body>
  </html>
);

export default RootLayout;
