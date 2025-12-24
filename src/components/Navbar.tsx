'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { user, logout, loading } = useAuth();
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
              <span className="text-zinc-900 font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-semibold text-zinc-100 tracking-tight">
              Central Hub
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            {!loading && (
              <>
                {user ? (
                  <>
                    <Link
                      href="/dashboard"
                      className={`text-sm font-medium transition-colors ${
                        pathname === '/dashboard'
                          ? 'text-amber-400'
                          : 'text-zinc-400 hover:text-zinc-100'
                      }`}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                      Sign Out
                    </button>
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-zinc-900 font-semibold text-sm">
                      {user.email?.charAt(0).toUpperCase() || 'U'}
                    </div>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="px-5 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-900 hover:from-amber-300 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
                  >
                    Sign In
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

