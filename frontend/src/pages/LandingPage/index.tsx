import {
  ArrowRight,
  BellRing,
  Boxes,
  Check,
  ChevronDown,
  Globe2,
  LineChart,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Zap,
} from 'lucide-react'

const navLinks = ['Product', 'Solutions', 'Pricing', 'Resources']

const features = [
  {
    icon: LineChart,
    title: 'Market signal, not noise',
    description: 'Track price movement, volume, and momentum in one continuously updated workspace.',
  },
  {
    icon: BellRing,
    title: 'Alerts that know context',
    description: 'Set precise triggers across assets, sectors, and thresholds—without alert fatigue.',
  },
  {
    icon: Boxes,
    title: 'A portfolio in perspective',
    description: 'See concentration, exposure, and performance across every position at a glance.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Built for your workflow',
    description: 'Create saved views and filters for the exact markets and time horizons you follow.',
  },
  {
    icon: ShieldCheck,
    title: 'Data you can defend',
    description: 'Clean sources, clear timestamps, and consistent calculations for every decision.',
  },
  {
    icon: Zap,
    title: 'Fast by default',
    description: 'Move from a market question to a usable answer in seconds, on any screen.',
  },
]

const markets = [
  { symbol: 'NVDA', name: 'Nvidia', price: '$141.24', change: '+3.71%', positive: true },
  { symbol: 'AAPL', name: 'Apple', price: '$234.54', change: '+1.82%', positive: true },
  { symbol: 'MSFT', name: 'Microsoft', price: '$428.77', change: '+0.64%', positive: true },
  { symbol: 'TSLA', name: 'Tesla', price: '$249.98', change: '-1.29%', positive: false },
]

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'For following markets independently.',
    features: ['5 watchlists', 'Delayed market data', 'Daily email digest'],
  },
  {
    name: 'Pro',
    price: '$24',
    description: 'For active investors building a process.',
    features: ['Unlimited watchlists', 'Real-time market data', 'Custom alerts', 'Portfolio analytics'],
    popular: true,
  },
  {
    name: 'Team',
    price: '$79',
    description: 'For firms coordinating market research.',
    features: ['Everything in Pro', 'Up to 8 members', 'Shared workspaces', 'Priority support'],
  },
]

export function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-finora-bg text-finora-primary dark:bg-finora-bg dark:text-finora-primary">
      <nav aria-label="Main navigation" className="sticky top-0 z-50 border-b border-white/0 bg-finora-bg/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#top" className="flex min-h-11 items-center gap-2 rounded-md text-[16px] font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-finora-accent">
            <span className="grid size-8 place-items-center rounded-md bg-finora-accent text-[14px]">F</span>
            Finora
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="rounded-md px-1 py-3 text-[14px] font-medium text-finora-secondary hover:text-finora-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-finora-accent">
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden min-h-11 items-center rounded-md px-4 py-3 text-[14px] font-medium text-finora-secondary hover:text-finora-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-finora-accent sm:flex">
              Sign in
            </a>
            <a href="#cta" className="inline-flex min-h-11 items-center justify-center rounded-md bg-finora-accent px-4 py-3 text-[14px] font-bold text-white hover:bg-[#5B52F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Start free
            </a>
          </div>
        </div>
      </nav>

      <main id="top">
        <section className="relative px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28" aria-labelledby="hero-heading">
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-8 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-finora-accent/10 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-5">
              <div className="mb-6 inline-flex min-h-8 items-center gap-2 rounded-full border border-finora-border bg-finora-surface px-3 py-1 text-[12px] font-medium text-finora-secondary">
                <Sparkles className="size-4 text-finora-accent" aria-hidden="true" />
                Market intelligence for 2026
              </div>
              <h1 id="hero-heading" className="max-w-xl text-[40px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[56px]">
                Know what moved the market.
              </h1>
              <p className="mt-6 max-w-lg text-[20px] leading-8 text-finora-secondary">
                Finora turns live prices, portfolio data, and custom alerts into a clear view of what deserves your attention.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#cta" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-finora-accent px-6 py-3 text-[14px] font-bold text-white hover:bg-[#5B52F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                  Start tracking free
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a href="#product" className="inline-flex min-h-11 items-center justify-center rounded-md border border-finora-border bg-finora-surface px-6 py-3 text-[14px] font-bold text-finora-primary hover:border-finora-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-finora-accent">
                  View product
                </a>
              </div>
              <p className="mt-4 text-[12px] text-finora-secondary">No credit card required · Free for 14 days</p>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-lg border border-finora-border bg-finora-surface p-3 shadow-2xl shadow-black/40">
                <div className="mb-3 flex items-center justify-between rounded-md border border-finora-border px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-finora-accent" />
                    <span className="text-[14px] font-bold">Market watch</span>
                  </div>
                  <div className="flex items-center gap-2 text-finora-secondary">
                    <Search className="size-4" aria-hidden="true" />
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-[minmax(0,1.2fr)_minmax(220px,.8fr)]">
                  <div className="rounded-md border border-finora-border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[12px] text-finora-secondary">Portfolio balance</p>
                        <p className="mt-1 text-[28px] font-bold tracking-tight">$124,592.41</p>
                      </div>
                      <p className="text-[12px] font-bold text-[#22C55E]">+2.03%</p>
                    </div>
                    <svg viewBox="0 0 520 180" role="img" aria-label="Portfolio value trending upward" className="mt-6 h-44 w-full">
                      <path d="M0 145 C48 138 70 149 112 112 S176 126 218 92 S294 99 338 61 S414 72 520 24" fill="none" stroke="#4F46E5" strokeWidth="3" />
                      <path d="M0 145 C48 138 70 149 112 112 S176 126 218 92 S294 99 338 61 S414 72 520 24 L520 180 L0 180 Z" fill="#4F46E5" fillOpacity=".08" />
                    </svg>
                  </div>
                  <div className="rounded-md border border-finora-border p-4">
                    <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-finora-secondary">Watchlist</p>
                    <div className="divide-y divide-finora-border">
                      {markets.map((market) => (
                        <div key={market.symbol} className="flex items-center justify-between py-3">
                          <div>
                            <p className="text-[14px] font-bold">{market.symbol}</p>
                            <p className="text-[12px] text-finora-secondary">{market.name}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[14px] font-bold">{market.price}</p>
                            <p className={`text-[12px] font-bold ${market.positive ? 'text-[#22C55E]' : 'text-finora-danger'}`}>{market.change}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="border-y border-finora-border px-6 py-8 lg:px-8" aria-label="Trusted companies">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-6 text-[14px] font-bold text-finora-secondary sm:justify-between">
            {['NORTHSTAR', 'VECTOR', 'APEX CAPITAL', 'KINETIC', 'MERIDIAN'].map((logo) => (
              <span key={logo} className="grayscale transition-[filter] duration-200 hover:grayscale-0">{logo}</span>
            ))}
          </div>
        </section>

        <section id="product" className="px-6 py-20 lg:px-8 lg:py-28" aria-labelledby="features-heading">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-[14px] font-bold text-finora-accent">One clear workspace</p>
              <h2 id="features-heading" className="text-[28px] font-bold leading-tight sm:text-[40px]">Everything you need to act with context.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
              {features.map((feature, index) => {
                const Icon = feature.icon
                const span = index === 0 || index === 3 ? 'lg:col-span-7' : index === 1 || index === 4 ? 'lg:col-span-5' : 'lg:col-span-6'
                return (
                  <article key={feature.title} className={`${span} rounded-lg border border-finora-border bg-finora-surface p-6 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-finora-accent/70`}>
                    <div className="mb-8 grid size-10 place-items-center rounded-md border border-finora-border bg-finora-bg text-finora-accent">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-[20px] font-bold">{feature.title}</h3>
                    <p className="mt-3 max-w-md text-[16px] leading-7 text-finora-secondary">{feature.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="pricing" className="border-t border-finora-border px-6 py-20 lg:px-8 lg:py-28" aria-labelledby="pricing-heading">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-[14px] font-bold text-finora-accent">Pricing</p>
              <h2 id="pricing-heading" className="text-[28px] font-bold sm:text-[40px]">Start free. Scale when it earns its place.</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {plans.map((plan) => (
                <article key={plan.name} className={`relative rounded-lg border bg-finora-surface p-6 ${plan.popular ? 'border-finora-accent' : 'border-finora-border'}`}>
                  {plan.popular && (
                    <span className="absolute right-4 top-4 rounded-full bg-finora-accent px-3 py-1 text-[12px] font-bold text-white">Most Popular</span>
                  )}
                  <h3 className="text-[20px] font-bold">{plan.name}</h3>
                  <p className="mt-2 min-h-12 text-[14px] leading-6 text-finora-secondary">{plan.description}</p>
                  <p className="mt-6 text-[40px] font-bold tracking-tight">{plan.price}<span className="text-[14px] font-medium text-finora-secondary"> / month</span></p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-[14px] text-finora-secondary">
                        <Check className="size-4 text-finora-accent" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button type="button" className={`mt-8 min-h-11 w-full rounded-md px-4 py-3 text-[14px] font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-finora-accent ${plan.popular ? 'bg-finora-accent text-white hover:bg-[#5B52F0]' : 'border border-finora-border text-finora-primary hover:border-finora-secondary/50'}`}>
                    Choose {plan.name}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="px-6 pb-20 lg:px-8 lg:pb-28" aria-labelledby="cta-heading">
          <div className="mx-auto max-w-7xl rounded-lg border border-finora-border bg-finora-surface px-6 py-16 text-center lg:px-8">
            <Globe2 className="mx-auto size-8 text-finora-accent" aria-hidden="true" />
            <h2 id="cta-heading" className="mx-auto mt-6 max-w-xl text-[28px] font-bold sm:text-[40px]">Turn market movement into a clear next step.</h2>
            <p className="mx-auto mt-4 max-w-lg text-[16px] text-finora-secondary">Create your workspace and start following the signals that matter to you.</p>
            <a href="#top" className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-finora-accent px-6 py-3 text-[14px] font-bold text-white hover:bg-[#5B52F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Create free account
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-finora-border px-6 py-12 lg:px-8" aria-label="Footer">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#top" className="inline-flex min-h-11 items-center gap-2 rounded-md text-[16px] font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-finora-accent">
              <span className="grid size-8 place-items-center rounded-md bg-finora-accent text-[14px]">F</span>
              Finora
            </a>
            <p className="mt-4 max-w-xs text-[14px] leading-6 text-finora-secondary">Market intelligence for investors who prefer clear signals over constant noise.</p>
          </div>
          {[
            ['Product', ['Market data', 'Watchlists', 'Alerts', 'Portfolio']],
            ['Company', ['About', 'Careers', 'Contact', 'Journal']],
            ['Resources', ['Documentation', 'Market guides', 'API', 'Status']],
            ['Legal', ['Privacy', 'Terms', 'Security', 'Cookies']],
          ].map(([title, links]) => (
            <div key={title as string} className="lg:col-span-2">
              <h2 className="text-[14px] font-bold">{title as string}</h2>
              <ul className="mt-4 space-y-2">
                {(links as string[]).map((link) => (
                  <li key={link}><a href="#top" className="inline-flex min-h-11 items-center text-[14px] text-finora-secondary hover:text-finora-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-finora-accent">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}
