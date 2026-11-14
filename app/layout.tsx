import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Fazley Rabbi — AI/ML Engineer & Software Engineer', description: 'Portfolio of Fazley Rabbi: AI/ML engineering, software development, and research.', metadataBase: new URL('https://fazley-rabbi.vercel.app'), openGraph: { title: 'Fazley Rabbi — AI/ML Engineer', description: 'Building thoughtful software and research-driven AI systems.', type: 'website' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" /></head><body>{children}</body></html>; }
