# Fonts in Next.js

* Go on google font website & choose free fonts.
* You don't need to install them, it's inbuilt.

1. **Import the font in root `layout.tsx`, within the Next...**
   * **eg:**
     ```typescript
     import { Inter } from "next/font/google";
     
     const inter = Inter({
         subsets: ['latin'],
         weight: ['400', '700'],
     });
     ```
   * Pass it to `<html>`:
     ```tsx
     <html lang="en" className={inter.className}>
     ```
