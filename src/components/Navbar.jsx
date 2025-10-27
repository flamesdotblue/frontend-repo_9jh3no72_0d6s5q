import { Rocket, Shield, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 grid place-items-center text-white shadow-md">
            <Rocket size={18} />
          </div>
          <span className="tracking-tight">GCFX Pro</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-gray-700 hover:text-gray-900 transition">Features</a>
          <a href="#security" className="text-gray-700 hover:text-gray-900 transition">Security</a>
          <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition">Pricing</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition">
            <Shield size={16} />
            <span>Status</span>
          </a>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition">
            <User size={16} />
            <span>Sign in</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
