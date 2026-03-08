'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handle = (e: React.FormEvent) => { e.preventDefault(); localStorage.setItem('auth_token','demo_'+Date.now()); router.push('/dashboard'); };
  return (<main className="min-h-screen flex items-center justify-center bg-slate-950"><form onSubmit={handle} className="bg-slate-800 p-8 rounded-2xl w-full max-w-sm space-y-4"><h1 className="text-2xl font-bold text-white">S3BillGuard</h1><input className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required /><input className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required /><button className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold" type="submit">Get Started</button></form></main>);
}
