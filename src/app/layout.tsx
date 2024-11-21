import type { Metadata } from "next";
import { ThemeProvider } from "@/provider/theme-provider"
import {DM_Sans} from "next/font/google";
import "./globals.css";
import { clsx } from 'clsx';


const Dm_sans = DM_Sans({
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "Fuzzie",
  description: "Automate your work with fuzzie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={clsx(Dm_sans.className, "antialiased")}
      >

<ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

        

      </body>
    </html>
  );
}
