import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import ThemeProvider from "@/contexts/ThemeProvider";

const openSans = Open_Sans({ subsets: ["latin"] });

const ScriptTag = () => {
  const codeToRunOnClient = `(function() {
    const isDark =
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
})()`;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const metadata: Metadata = {
  title: "Wellcom! My Blog! <Yuu.log />",
  description: "Generated by create 22yuu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${openSans.className} bg-theme-bg`}>
        <ScriptTag />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
