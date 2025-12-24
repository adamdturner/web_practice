'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';

export default function DashboardPage() {
  const { user, userProfile, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-grid flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-amber-400/30 border-t-amber-400 rounded-full animate-spin" />
          <p className="text-zinc-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-grid pt-24 pb-12 px-6">
        {/* Ambient glow */}
        <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-zinc-100 mb-2">
              Welcome back{userProfile?.displayName ? `, ${userProfile.displayName}` : ''}! 👋
            </h1>
            <p className="text-zinc-400">
              Here&apos;s your personal dashboard. Let&apos;s build something great.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-zinc-400 text-sm font-medium">Account Status</span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                  Active
                </span>
              </div>
              <p className="text-2xl font-bold text-zinc-100">Verified</p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-zinc-400 text-sm font-medium">Member Since</span>
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <p className="text-2xl font-bold text-zinc-100">Today</p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-zinc-400 text-sm font-medium">Projects</span>
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
              </div>
              <p className="text-2xl font-bold text-zinc-100">0</p>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-semibold text-zinc-100 mb-6">Your Profile</h2>
            
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-zinc-900 font-bold text-3xl shadow-lg shadow-emerald-500/20">
                {user.email?.charAt(0).toUpperCase() || 'U'}
              </div>

              {/* Info */}
              <div className="flex-1 space-y-4">
                <div>
                  <label className="text-sm text-zinc-500 block mb-1">Email</label>
                  <p className="text-zinc-100">{user.email}</p>
                </div>
                <div>
                  <label className="text-sm text-zinc-500 block mb-1">User ID</label>
                  <p className="text-zinc-400 text-sm font-mono bg-zinc-800/50 rounded-lg px-3 py-2 inline-block">
                    {user.uid}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-zinc-100 mb-6">Quick Actions</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <button className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800 transition-all text-left group">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="font-medium text-zinc-100 mb-1">Create Project</h3>
                <p className="text-sm text-zinc-500">Start a new project</p>
              </button>

              <button className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800 transition-all text-left group">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-medium text-zinc-100 mb-1">Settings</h3>
                <p className="text-sm text-zinc-500">Manage your account</p>
              </button>

              <button 
                onClick={() => logout()}
                className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700 hover:border-red-500/50 hover:bg-red-500/5 transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </div>
                <h3 className="font-medium text-zinc-100 mb-1">Sign Out</h3>
                <p className="text-sm text-zinc-500">End your session</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

