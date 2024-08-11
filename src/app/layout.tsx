import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Streamlingo Voicesync",
  description:
    "Streamlingo Voicesync offers innovative multilingual voice solutions for businesses, content creators, and developers. Our state-of-the-art platform provides seamless voice synchronization, translation, and dubbing services to enhance global communication. Explore our AI-driven technology for real-time voice translations, custom voiceovers, and automated dubbing to reach audiences worldwide. Experience the power of Voicesync's intuitive interface and elevate your content's accessibility and engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        
        <ConvexClientProvider>
          <ClerkProvider>
            {children}
          </ClerkProvider>
        </ConvexClientProvider>
        
      </body>
    </html>
  );
}
