import { Link } from 'react-router-dom'
import { Home, Search, Shield } from 'lucide-react'

export function Privacy() {
  const sections = [
    {
      title: "What Data We Collect",
      content: "We collect only the information necessary to provide our support service. This includes: information you voluntarily share in live chat sessions (such as transaction details, wallet addresses, and exchange names), basic analytics data such as page visits and time on site (no personal identifiers), and technical information such as browser type and device category for service improvement purposes."
    },
    {
      title: "How We Use Your Data",
      content: "Information shared in chat sessions is used solely to diagnose and resolve your specific issue. Analytics data is used in aggregate form to identify which help articles and topics are most useful to our users. We do not use your data for advertising, profiling, or any commercial purpose beyond providing direct support."
    },
    {
      title: "Data Retention",
      content: "Chat session data is retained for a maximum of 90 days after your session closes, after which it is permanently deleted from our systems. Analytics data is retained in aggregate form for up to 12 months. You may request immediate deletion of your data by contacting us at any time."
    },
    {
      title: "Third Parties",
      content: "We do not sell, rent, or share your personal information with any third parties for commercial purposes. Our live chat service (JivoChat) processes session data under their own privacy policy. We use basic analytics tools that do not collect personally identifiable information. No blockchain or wallet data you share with us is transmitted to any external party."
    },
    {
      title: "Cookies",
      content: "We use functional cookies only — those necessary for the website to operate correctly. These include session cookies that maintain your chat connection and preference cookies that remember your language settings. We do not use tracking cookies, advertising cookies, or any cookies that identify you across other websites."
    },
    {
      title: "Your Rights",
      content: "You have the right to request access to any personal data we hold about you, request correction of any inaccurate data, request deletion of your data at any time, and opt out of any non-essential data collection. To exercise any of these rights, start a live chat or navigate to our contact page. We will respond to all data requests within 14 business days."
    },
    {
      title: "Security",
      content: "We take the security of your information seriously. All data transmitted through our platform uses HTTPS encryption. Chat sessions are not accessible to unauthorized parties. However, as a reminder: never share your private key, seed phrase, or wallet password with our support team or anyone else. We will never ask for these details."
    }
  ]

  return (
    <div style={{ paddingTop: '108px', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 mb-8 font-body text-sm" style={{ color: 'rgba(240,239,248,0.35)' }}>
          <Link to="/" className="no-underline transition-colors" style={{ color: 'inherit' }}>Home</Link>
          <span>/</span>
          <span style={{ color: 'rgba(240,239,248,0.65)' }}>Privacy Policy</span>
        </div>

        <h1 className="font-heading font-bold text-white mb-3" style={{ fontSize: 'clamp(28px, 5vw, 44px)', letterSpacing: '-1px' }}>Privacy Policy</h1>
        <p className="font-body text-sm mb-12" style={{ color: 'rgba(240,239,248,0.35)' }}>Last updated: June 2026</p>

        <p className="font-body leading-relaxed mb-10" style={{ color: 'rgba(240,239,248,0.55)', fontSize: '16px', lineHeight: 1.8 }}>
          Cryptowalletsupport is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data. Our core promise: we will never sell your data and we will never ask for your private keys or seed phrases.
        </p>

        <div className="space-y-8">
          {sections.map((s, i) => (
            <div key={i} className="card p-6">
              <h2 className="font-heading font-bold text-white mb-4" style={{ fontSize: '18px' }}>{s.title}</h2>
              <p className="font-body leading-relaxed" style={{ color: 'rgba(240,239,248,0.55)', fontSize: '15px', lineHeight: 1.8 }}>{s.content}</p>
            </div>
          ))}
        </div>

        <div id="disclaimer" className="card p-6 mt-8" style={{ background: 'rgba(79,142,247,0.06)', borderColor: 'rgba(79,142,247,0.2)' }}>
          <h2 className="font-heading font-bold text-white mb-4" style={{ fontSize: '18px' }}>Disclaimer</h2>
          <p className="font-body leading-relaxed" style={{ color: 'rgba(240,239,248,0.55)', fontSize: '15px', lineHeight: 1.8 }}>
            Cryptowalletsupport provides educational guidance and general support information only. We do not have access to any user wallets, funds, exchange accounts, or blockchain systems. We cannot reverse transactions, recover funds, or intervene in any blockchain operation. All guidance provided is for informational purposes only. Always verify information independently and consult official sources for your specific wallet or exchange. Cryptowalletsupport is not liable for any financial losses arising from actions taken based on our guidance.
          </p>
        </div>
      </div>
    </div>
  )
}

export function About() {
  return (
    <div style={{ paddingTop: '108px', minHeight: '100vh' }}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: 'linear-gradient(135deg, #4F8EF7, #8B5CF6)' }}>
            <Shield size={28} fill="white" color="white" />
          </div>
          <h1 className="font-heading font-bold text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-1px' }}>About CryptoWalletSupport</h1>
          <p className="font-body max-w-xl mx-auto" style={{ color: 'rgba(240,239,248,0.55)', fontSize: '17px', lineHeight: 1.7 }}>
            Built on trust. Powered by technology. Guided by expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { title: 'Our Mission', body: 'Cryptowalletsupport exists to make the blockchain accessible and safe for everyone. We provide clear, accurate guidance on wallet setup, transaction issues, and security — free of charge and without ever asking for your private credentials.' },
            { title: 'Who We Are', body: 'We are a team of blockchain enthusiasts and support specialists who have collectively helped thousands of users navigate crypto issues. We understand how stressful a stuck withdrawal or missing transaction can be, and we are here to help.' },
            { title: 'What We Do', body: 'We provide step-by-step help articles covering every major wallet and exchange, live chat support available around the clock, and clear guidance on the most common crypto issues — from wrong network sends to account security.' },
            { title: 'What We Don\'t Do', body: 'We never ask for your private key, seed phrase, or wallet password. We cannot access your wallet or funds. We do not charge fees for our support. Any entity claiming otherwise is not affiliated with Cryptowalletsupport.' },
          ].map(({ title, body }) => (
            <div key={title} className="card p-6">
              <h2 className="font-heading font-bold text-white mb-3" style={{ fontSize: '17px' }}>{title}</h2>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(240,239,248,0.55)', lineHeight: 1.8 }}>{body}</p>
            </div>
          ))}
        </div>

        <div className="card p-8 text-center" style={{ background: 'rgba(79,142,247,0.06)', borderColor: 'rgba(79,142,247,0.2)' }}>
          <p className="font-heading font-bold text-white text-lg mb-2">Need help right now?</p>
          <p className="font-body text-sm mb-6" style={{ color: 'rgba(240,239,248,0.45)' }}>Our support team is available 24/7 via live chat.</p>
          <button onClick={() => { if ((window as any).jivo_api) (window as any).jivo_api.open() }}
            className="btn-primary" style={{ padding: '12px 28px', margin: '0 auto' }}>
            Start Live Chat
          </button>
        </div>
      </div>
    </div>
  )
}

export function NotFound() {
  return (
    <div style={{ paddingTop: '108px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="text-center px-6">
        <p className="font-heading font-bold mb-4" style={{ fontSize: '100px', color: 'rgba(255,255,255,0.04)', letterSpacing: '-4px', lineHeight: 1 }}>404</p>
        <h1 className="font-heading font-bold text-white mb-3" style={{ fontSize: '32px', letterSpacing: '-0.5px', marginTop: '-20px' }}>Page Not Found</h1>
        <p className="font-body mb-10" style={{ color: 'rgba(240,239,248,0.45)', fontSize: '16px' }}>
          This page doesn't exist or may have moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary" style={{ padding: '12px 28px', justifyContent: 'center' }}>
            <Home size={16} /> Go to Homepage
          </Link>
          <Link to="/articles" className="btn-secondary" style={{ padding: '12px 28px', justifyContent: 'center' }}>
            <Search size={16} /> Search Help Articles
          </Link>
        </div>
      </div>
    </div>
  )
}
