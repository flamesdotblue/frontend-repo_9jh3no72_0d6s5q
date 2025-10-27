import Spline from "@splinetool/react-spline";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/gtEwBEm90LkAMPxU/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 py-24">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs text-gray-700">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            Live spreads from 0.0 pips
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Trade smarter. Scale faster.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
            A premium platform for forex, crypto, and indices with lightning execution,
            bank-grade security, and transparent pricing.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-white hover:bg-black transition shadow-sm"
            >
              Get started
              <ArrowRight size={18} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50 transition"
            >
              <TrendingUp size={18} />
              See features
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <div className="text-2xl font-bold text-gray-900">500k+</div>
              Traders
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">$25B+</div>
              Monthly Volume
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">99.99%</div>
              Uptime
            </div>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
          <div className="absolute inset-0 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 via-violet-100 to-fuchsia-100 opacity-70" />
            <div className="relative p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="text-xs text-gray-600">Account Balance</div>
                <div className="mt-1 text-3xl font-bold tracking-tight text-gray-900">$128,420.12</div>
                <div className="mt-2 inline-flex items-center gap-1 text-emerald-600 text-sm font-medium">
                  +3.21% today
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Forex", value: "+1.8%" },
                  { label: "Crypto", value: "+4.2%" },
                  { label: "Indices", value: "+0.9%" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-white/70 border border-white/60 shadow-sm p-4"
                  >
                    <div className="text-xs text-gray-600">{item.label}</div>
                    <div className="mt-1 font-semibold text-gray-900">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="text-[10px] text-gray-500">
                Past performance does not guarantee future results. Trading involves risk.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
