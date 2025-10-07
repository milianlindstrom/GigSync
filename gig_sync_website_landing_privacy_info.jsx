import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { Calendar, Mail, Shield, CheckCircle2, Sparkles, ArrowRight, GitBranch } from "lucide-react";

// Tailwind is available by default in this canvas environment per instructions.
// Single-file React app with three routes: Landing ("Home"), Privacy Policy, and Info.

function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-slate-50 text-slate-800">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/75 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-teal-500 text-white shadow-sm group-hover:rotate-6 transition">
              <Calendar className="w-5 h-5" aria-hidden />
            </div>
            <span className="font-extrabold tracking-tight text-xl">GigSync</span>
          </Link>

          <nav className="flex items-center gap-1">
            <NavItem to="/" label="Home" />
            <NavItem to="/info" label="Info" />
            <NavItem to="/privacy" label="Privacy" />
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10 sm:py-14">{children}</main>

      <footer className="mt-10 border-t border-slate-200 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} GigSync. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/privacy" className="text-slate-600 hover:text-slate-900">Privacy Policy</Link>
            <Link to="/info" className="text-slate-600 hover:text-slate-900">How it works</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive ? "bg-teal-500 text-white" : "text-slate-700 hover:bg-slate-100"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

function Landing() {
  return (
    <>
      {/* Hero */}
      <section className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs mb-4">
            <Sparkles className="w-4 h-4" />
            New: Automatic booking → calendar sync
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Turn booking emails into <span className="text-teal-600">calendar events</span> — automatically
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-prose">
            GigSync scans your Gmail for booking confirmations and adds them to a dedicated Google Calendar — with location, times, and details — so you always know where to be.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#features" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 text-white font-semibold shadow hover:shadow-md transition">
              See features <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/info" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-900 font-semibold hover:bg-slate-200 transition">
              How it works
            </Link>
          </div>

          <ul className="mt-6 space-y-2 text-slate-700">
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 w-5 h-5 text-teal-600"/> Read-only Gmail access for detection</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 w-5 h-5 text-teal-600"/> Creates/uses a private “GigSync” calendar</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 w-5 h-5 text-teal-600"/> Optional replies/drafts to booking requests</li>
          </ul>
        </div>

        {/* Visual card */}
        <div className="relative">
          <div className="absolute -inset-4 bg-teal-200/30 rounded-3xl blur-2xl"></div>
          <div className="relative p-6 rounded-3xl bg-white shadow-lg border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-slate-100"><Mail className="w-5 h-5"/></div>
              <div>
                <p className="text-sm font-semibold">Booking email</p>
                <p className="text-xs text-slate-500">Gmail → Parsed by GigSync</p>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-700">
                “Du är bokad på eventet 14 okt, 18:00–22:00. Plats: Stockholm Waterfront.”
              </p>
            </div>
            <div className="my-4 text-center text-sm text-slate-500">↓</div>
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <Calendar className="w-4 h-4"/> GigSync calendar event created
              </div>
              <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                <li>Date & time (incl. all‑day support)</li>
                <li>Location & description</li>
                <li>Dress code if detected</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">Key features</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Smart parsing" icon={<GitBranch className="w-5 h-5"/>}>
            Understands Swedish dates/times and reads ICS invites when available. Extracts company, location, and even dress code hints.
          </FeatureCard>
          <FeatureCard title="Dedicated calendar" icon={<Calendar className="w-5 h-5"/>}>
            Creates and maintains a private “GigSync” Google Calendar so your gigs stay organized and separate.
          </FeatureCard>
          <FeatureCard title="Respectful access" icon={<Shield className="w-5 h-5"/>}>
            Scopes are limited to Gmail read-only, Calendar, and (optional) Gmail send for replies. You stay in control.
          </FeatureCard>
          <FeatureCard title="Email insights" icon={<Mail className="w-5 h-5"/>}>
            See candidate booking emails and hide the ones that aren’t relevant.
          </FeatureCard>
          <FeatureCard title="One-tap cleanup" icon={<CheckCircle2 className="w-5 h-5"/>}>
            Clear all GigSync-created events and reset mappings any time.
          </FeatureCard>
          <FeatureCard title="Local-first" icon={<Shield className="w-5 h-5"/>}>
            Processing happens on-device. We don’t run a server that stores your mail.
          </FeatureCard>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-3xl p-8 bg-gradient-to-tr from-teal-500 to-cyan-500 text-white shadow-lg">
        <h3 className="text-2xl font-bold">Ready to stay on top of your gigs?</h3>
        <p className="mt-2 text-white/90 max-w-prose">Sign in with your Google account in the app and let GigSync keep your calendar up to date.</p>
        <div className="mt-4 flex gap-3">
          <Link to="/info" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-teal-700 font-semibold shadow hover:shadow-md">
            Learn more <ArrowRight className="w-4 h-4"/>
          </Link>
          <Link to="/privacy" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/10 text-white font-semibold hover:bg-black/20">
            Privacy Policy
          </Link>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ title, icon, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">
      <div className="flex items-center gap-2 text-slate-900 font-semibold">
        <div className="p-2 rounded-lg bg-slate-100 text-slate-700">{icon}</div>
        {title}
      </div>
      <p className="mt-2 text-sm text-slate-600">{children}</p>
    </div>
  );
}

function Info() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>How GigSync works</h1>
      <p>
        GigSync connects to your Google account via Google Sign‑In. It searches for booking‑related emails in your Gmail (e.g.,
        phrases like “du är bokad” or “uppdrag”) and parses details using Swedish‑aware heuristics. When details are found, it creates or updates an event in your private <strong>GigSync</strong> Google Calendar.
      </p>

      <h2>Permissions</h2>
      <ul>
        <li><code>gmail.readonly</code> — find booking emails and read their contents.</li>
        <li><code>calendar</code> — create and manage events in your dedicated GigSync calendar.</li>
        <li><code>gmail.send</code> (optional) — draft or send replies to booking requests in a thread.</li>
      </ul>

      <h2>What gets stored on your device</h2>
      <ul>
        <li>GigSync calendar ID</li>
        <li>Mappings from email/thread → event (to avoid duplicates)</li>
        <li>Hidden email IDs and whitelisted senders (your preferences)</li>
      </ul>
      <p>
        These are saved using iOS <em>UserDefaults</em> and never leave your device unless you back up your device.
      </p>

      <h2>Event details we create</h2>
      <ul>
        <li>Summary (often the company or gig name)</li>
        <li>Start/end time or all‑day date</li>
        <li>Location (if present)</li>
        <li>Description with an excerpt from the email (and detected dress code)</li>
      </ul>

      <h2>Controls</h2>
      <ul>
        <li>Review candidate booking emails and hide non‑bookings</li>
        <li>Clear all GigSync‑created events and reset mappings at any time</li>
        <li>Revoke Google access from your Google Account Security settings</li>
      </ul>

      <h2>FAQ</h2>
      <h3>Does GigSync store my emails on a server?</h3>
      <p>No. All parsing happens on your device. GigSync talks directly to Google’s APIs using your token from Google Sign‑In.</p>

      <h3>Can I use it without Gmail send?</h3>
      <p>Yes. Replying/drafting is optional. If you don’t grant <code>gmail.send</code>, GigSync simply won’t offer those actions.</p>

      <h3>What happens if I uninstall the app?</h3>
      <p>Your GigSync calendar remains in Google Calendar until you delete it manually. The app’s local settings/mappings are removed from your device.</p>
    </div>
  );
}

function Privacy() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>Privacy Policy</h1>
      <p><em>Effective date:</em> 7 October 2025</p>

      <h2>Overview</h2>
      <p>
        GigSync is a local‑first iOS app that helps you keep track of bookings by turning booking‑related emails into Google Calendar events. We are committed to protecting your privacy and keeping your data under your control.
      </p>

      <h2>Personal data we access</h2>
      <ul>
        <li><strong>Gmail messages (read‑only):</strong> We search for recent emails that look like bookings and parse their content, including any attached ICS calendar invites.</li>
        <li><strong>Google Calendar:</strong> We create and manage events in your private “GigSync” calendar.</li>
        <li><strong>Optional Gmail send:</strong> If enabled, we can send or draft replies within existing booking threads on your behalf.</li>
      </ul>

      <h2>How we process data</h2>
      <ul>
        <li>All analysis and parsing occur <strong>on your device</strong>.</li>
        <li>We do <strong>not</strong> operate a server that stores your mail or calendar contents.</li>
        <li>The app communicates directly with Google APIs using your Google Sign‑In token.</li>
      </ul>

      <h2>What we store</h2>
      <p>On your device (iOS UserDefaults):</p>
      <ul>
        <li>GigSync calendar ID</li>
        <li>Email/thread ↔︎ event mappings</li>
        <li>Hidden email IDs and whitelisted senders</li>
      </ul>
      <p>We do not store this data on our servers because we do not run any servers for GigSync.</p>

      <h2>Third parties</h2>
      <ul>
        <li><strong>Google Sign‑In</strong> for authentication</li>
        <li><strong>Gmail API</strong> and <strong>Google Calendar API</strong> for application functionality</li>
      </ul>
      <p>Use of Google services is governed by Google’s terms and privacy policy.</p>

      <h2>Your choices</h2>
      <ul>
        <li>Use the in‑app controls to clear GigSync‑created events and reset mappings.</li>
        <li>Revoke app access anytime in your Google Account settings.</li>
        <li>Uninstall the app to remove local data stored on your device.</li>
      </ul>

      <h2>Data retention</h2>
      <p>
        We retain only the minimal preferences and mappings locally for as long as you keep the app installed. Google Calendar events you created via GigSync remain in your Google account until you delete them.
      </p>

      <h2>Children’s privacy</h2>
      <p>GigSync is not directed to children under 13. If you are a parent/guardian and believe your child has used the app, contact us to request assistance.</p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy. Material changes will be reflected by updating the “Effective date” above.</p>

      <h2>Contact</h2>
      <p>
        For questions or concerns, please contact the developer (Milian Lindström). Add your preferred contact email/URL here.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}
