import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />

        {/* Pricing section kept inline to maintain 3-4 focused components */}
        <section id="pricing" className="relative py-20 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-50/40 to-transparent pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
              <p className="mt-3 text-gray-600">No hidden fees. Just powerful tools to help you trade better.</p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "$0",
                  period: "/mo",
                  perks: ["Demo account", "Real-time quotes", "Basic analytics"],
                  cta: "Start free",
                  highlight: false,
                },
                {
                  name: "Pro",
                  price: "$29",
                  period: "/mo",
                  perks: [
                    "Low spreads",
                    "Smart alerts",
                    "Depth of market",
                    "Priority support",
                  ],
                  cta: "Go Pro",
                  highlight: true,
                },
                {
                  name: "Institutional",
                  price: "Custom",
                  period: "",
                  perks: ["Dedicated manager", "Custom liquidity", "API access"],
                  cta: "Talk to sales",
                  highlight: false,
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={[
                    "relative rounded-2xl border bg-white p-8 shadow-sm",
                    plan.highlight
                      ? "border-gray-900 ring-2 ring-gray-900"
                      : "border-gray-200",
                  ].join(" ")}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 right-6 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
                      Most popular
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-gray-700">
                    {plan.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={[
                      "mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-medium transition",
                      plan.highlight
                        ? "bg-gray-900 text-white hover:bg-black"
                        : "border border-gray-300 text-gray-900 hover:bg-gray-50",
                    ].join(" ")}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
