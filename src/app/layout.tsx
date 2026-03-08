import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'S3BillGuard', description: 'Automatic kill-switch for S3 buckets that blocks traffic before you hit budget limits, preventing $15K surprise DDoS bil' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><head /><body className="bg-slate-950 text-slate-50 antialiased">{children}</body></html>);
}
