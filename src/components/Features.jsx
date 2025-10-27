import { ShieldCheck, Zap, LineChart, Globe } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Bank-grade security",
    desc: "Segregated accounts, 2FA, and continuous monitoring keep your funds safe.",
  },
  {
    icon: Zap,
    title: "Ultra-fast execution",
    desc: "Low-latency infrastructure with deep liquidity for minimal slippage.",
  },
  {
    icon: LineChart,
    title: "Pro analytics",
    desc: "Advanced charts, smart alerts, and institutional-grade order types.",
  },
  {
    icon: Globe,
    title: "Global markets",
    desc: "Trade forex, crypto, indices, metals, and energies from one unified platform.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Built for performance</h2>
          <p className="mt-3 text-gray-600">Everything you need to trade confidently, all in one place.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="h-10 w-10 rounded-xl bg-gray-900 text-white grid place-items-center shadow group-hover:scale-105 transition">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
