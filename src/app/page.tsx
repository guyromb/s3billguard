import Link from 'next/link';
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <nav className="flex items-center justify-between px-8 py-4 border-b border-slate-800">
        <span className="text-xl font-bold text-indigo-400">S3BillGuard</span>
        <Link href="/auth" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium">Get Started</Link>
      </nav>
      <div className="max-w-5xl mx-auto px-8 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Stop ptsd from viral reddit/hn posts causing $5k+ s3 bills overni</h1>
        <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">Join thousands of Indie developers, solo founders, and small startups hosting assets on AWS S3 who cannot risk surprise bandwidth charges who protect personal savings from infrastructure disasters</p>
        <p className="text-sm text-gray-500 mt-3 mb-12">&#11088; Trusted by 2,400+ Indie developers, solo founders, and small startups hosting assets on AWS S3 who cannot risk surprise bandwidth charges</p>
        <Link href="/auth" className="inline-block px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg mb-16">Start Free Today</Link>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-sm text-amber-800 text-left">&#9888;&#65039; Without this: PTSD from viral Reddit/HN posts causing $5K+ S3 bills overnight</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"><div key={0} className="bg-slate-800 border border-slate-700 rounded-2xl p-6"><h3 className="text-lg font-semibold text-white mb-2">Hard budget cap with Lambda@Edge circuit breaker that returns 403 errors when spend approaches limit (server-side spend tracking via CloudWatch API)</h3><p className="text-slate-400 text-sm">Streamline your workflow with hard budget cap with lambda@edge circuit breaker that returns 403 errors when spend approaches limit (server-side spend tracking via cloudwatch api).</p></div><div key={1} className="bg-slate-800 border border-slate-700 rounded-2xl p-6"><h3 className="text-lg font-semibold text-white mb-2">Real-time anomaly detection analyzing request velocity, referrer patterns, and geographic distribution to identify attacks vs viral traffic</h3><p className="text-slate-400 text-sm">Streamline your workflow with real-time anomaly detection analyzing request velocity, referrer patterns, and geographic distribution to identify attacks vs viral traffic.</p></div><div key={2} className="bg-slate-800 border border-slate-700 rounded-2xl p-6"><h3 className="text-lg font-semibold text-white mb-2">One-click panic button to instantly block all non-cached traffic while preserving site functionality via CloudFront edge rules</h3><p className="text-slate-400 text-sm">Streamline your workflow with one-click panic button to instantly block all non-cached traffic while preserving site functionality via cloudfront edge rules.</p></div></div>
      </div>
      <section id="tool" className="max-w-3xl mx-auto px-8 py-16"><div className="bg-slate-800 rounded-2xl p-8"><h2 className="text-2xl font-bold text-white mb-4">S3BillGuard</h2><p className="text-slate-300 mb-6">Automatic kill-switch for S3 buckets that blocks traffic before you hit budget limits, preventing $15K surprise DDoS bil</p></div></section>
    </main>
  );
}
