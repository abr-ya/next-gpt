import { Nav } from "@/app/components";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";
import ToasterProvider from "./providers/ToasterProvider";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "AI App == Next 13 + Tailwind",
  description: "Discover and share ai-prompts",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <ToasterProvider />
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
