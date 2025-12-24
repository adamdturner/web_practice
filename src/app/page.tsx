import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-grid">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Ambient glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
          {/* Badge */}
          <div className="flex justify-center mb-8 opacity-0 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-zinc-400">Practice Project Active</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-center opacity-0 animate-fade-in animate-delay-100">
            <span className="block text-5xl md:text-7xl font-bold text-zinc-100 tracking-tight mb-4">
              Welcome to the
            </span>
            <span className="block text-5xl md:text-7xl font-bold gradient-text tracking-tight">
              Central Hub
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-xl text-zinc-400 text-center max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in animate-delay-200">
            A practice application built with Next.js, Firebase Authentication, 
            and Cloud Firestore. Explore, learn, and build.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animate-delay-300">
            <Link
              href="/login"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-900 hover:from-amber-300 hover:to-orange-400 transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105"
            >
              Get Started
            </Link>
            <a
              href="https://firebase.google.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-2xl bg-zinc-800/50 text-zinc-100 border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 transition-all"
            >
              Learn Firebase
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-zinc-100 text-center mb-4">
            Built with Modern Tech
          </h2>
          <p className="text-zinc-400 text-center mb-16 max-w-xl mx-auto">
            This practice app showcases the integration of powerful tools
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">Next.js 14+</h3>
              <p className="text-zinc-400 leading-relaxed">
                App Router, Server Components, and the latest React features for optimal performance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">Firebase Auth</h3>
              <p className="text-zinc-400 leading-relaxed">
                Secure authentication with email/password and Google sign-in options.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">Cloud Firestore</h3>
              <p className="text-zinc-400 leading-relaxed">
                Real-time NoSQL database for storing and syncing user data seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-zinc-500 text-sm">
            Built for practice &middot; Next.js + Firebase
          </p>
        </div>
      </footer>
    </main>
    </>
  );
}
