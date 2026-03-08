'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function Dashboard() {
  const router = useRouter();
  useEffect(() => { if (!localStorage.getItem('auth_token')) router.push('/auth'); }, [router]);
  return (<main className="min-h-screen bg-slate-950 text-slate-50 p-8"><div className="max-w-5xl mx-auto"><h1 className="text-3xl font-bold mb-2">S3BillGuard</h1><p className="text-slate-400 mb-8">Automatic kill-switch for S3 buckets that blocks traffic before you hit budget limits, preventing $15K surprise DDoS bil</p><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div key={0} className="bg-slate-800 rounded-xl p-6"><h3 className="font-semibold text-slate-200 mb-2">Hard budget cap with Lambda@Edge circuit breaker that returns 403 errors when spend approaches limit (server-side spend tracking via CloudWatch API)</h3><p className="text-slate-400 text-sm">Feature active</p></div><div key={1} className="bg-slate-800 rounded-xl p-6"><h3 className="font-semibold text-slate-200 mb-2">Real-time anomaly detection analyzing request velocity, referrer patterns, and geographic distribution to identify attacks vs viral traffic</h3><p className="text-slate-400 text-sm">Feature active</p></div><div key={2} className="bg-slate-800 rounded-xl p-6"><h3 className="font-semibold text-slate-200 mb-2">One-click panic button to instantly block all non-cached traffic while preserving site functionality via CloudFront edge rules</h3><p className="text-slate-400 text-sm">Feature active</p></div></div></div></main>);
}
