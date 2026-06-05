import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ChevronDown, ChevronUp, Search, Shield,
  BookOpen, MessageCircle, AlertTriangle, CheckCircle,
  Clock, XCircle, ArrowUpRight, Send, Lock, Zap, Globe
} from 'lucide-react'
import { articles, issues, faqs } from '../data/content'

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} className="accordion-item">
          <button className="accordion-btn" onClick={() => setOpen(open === i ? null : i)}>
            <span>{faq.q}</span>
            {open === i
              ? <ChevronUp size={18} style={{ color: '#4F8EF7', flexShrink: 0 }} />
              : <ChevronDown size={18} style={{ color: 'rgba(240,239,248,0.4)', flexShrink: 0 }} />}
          </button>
          <div className={`accordion-content ${open === i ? 'open' : ''}`}>{faq.a}</div>
        </div>
      ))}
    </div>
  )
}

const categoryColors: Record<string, string> = {
  'Wallet Setup': '#4F8EF7',
  'Transactions': '#8B5CF6',
  'Security': '#22C55E',
}

const issueIcons: Record<string, any> = {
  '⏳': <Clock size={22} />,
  '📤': <Send size={22} />,
  '🔀': <ArrowUpRight size={22} />,
  '❌': <XCircle size={22} />,
  '🕐': <Clock size={22} />,
  '🚫': <AlertTriangle size={22} />,
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])

  const handleSearch = (q: string) => {
    setSearchQuery(q)
    if (!q.trim()) { setSearchResults([]); return }
    const lower = q.toLowerCase()
    const results = [
      ...articles.filter(a =>
        a.title.toLowerCase().includes(lower) ||
        a.description.toLowerCase().includes(lower) ||
        a.category.toLowerCase().includes(lower)
      ).map(a => ({ ...a, type: 'article', href: `/articles/${a.slug}` })),
      ...issues.filter(i =>
        i.title.toLowerCase().includes(lower) ||
        i.description.toLowerCase().includes(lower)
      ).map(i => ({ ...i, type: 'issue', href: `/issues/${i.slug}` })),
    ]
    setSearchResults(results.slice(0, 6))
  }

  return (
    <div style={{ background: '#06050A' }}>

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '100px',
      }}>
        {/* Deep atmospheric background */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, #0d0b1a 0%, #06050A 40%, #080614 100%)',
        }} />
        {/* Purple glow top left */}
        <div style={{
          position: 'absolute', top: '-10%', left: '-5%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        {/* Blue glow bottom right */}
        <div style={{
          position: 'absolute', bottom: '-10%', right: '-5%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,142,247,0.14) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        {/* Subtle grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: '900px', margin: '0 auto', width: '100%' }}>

          {/* Trust badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginBottom: '40px', padding: '8px 18px', borderRadius: '100px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.10)',
          }}>
            <Lock size={13} style={{ color: '#4F8EF7' }} />
            <span style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 500, color: 'rgba(240,239,248,0.60)' }}>
              Trusted crypto guidance — available 24/7
            </span>
          </div>

          {/* Main headline */}
          <h1 style={{
            fontFamily: 'Sora', fontWeight: 800,
            fontSize: 'clamp(48px, 9vw, 96px)',
            letterSpacing: '-3px', lineHeight: 0.95,
            color: '#F0EFF8', marginBottom: '28px',
          }}>
            The Blockchain<br />
            <span style={{
              background: 'linear-gradient(135deg, #6BA3FF 0%, #A78BFA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Never Sleeps.
            </span>
          </h1>

          {/* Subheadline */}
          <p style={{
            fontFamily: 'DM Sans', fontSize: 'clamp(16px, 2.5vw, 20px)',
            fontWeight: 500, color: 'rgba(240,239,248,0.55)',
            marginBottom: '12px', lineHeight: 1.6,
          }}>
            Built on trust. Powered by technology. Guided by expertise.
          </p>
          <p style={{
            fontFamily: 'DM Sans', fontSize: '15px',
            color: 'rgba(240,239,248,0.30)',
            marginBottom: '52px', lineHeight: 1.7,
            maxWidth: '480px', margin: '0 auto 52px',
          }}>
            Millions of transactions. Endless possibilities.<br />One place to understand it all.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '56px' }}>
            <button
              onClick={() => { if ((window as any).jivo_api) (window as any).jivo_api.open() }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '15px 32px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #4F8EF7 0%, #8B5CF6 100%)',
                border: 'none', color: 'white', cursor: 'pointer',
                fontFamily: 'Sora', fontWeight: 600, fontSize: '15px',
                boxShadow: '0 8px 32px rgba(79,142,247,0.35)',
                whiteSpace: 'nowrap',
              }}>
              <MessageCircle size={17} /> Start Live Chat
            </button>
            <Link to="/articles" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '15px 32px', borderRadius: '12px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(240,239,248,0.75)', textDecoration: 'none',
              fontFamily: 'Sora', fontWeight: 600, fontSize: '15px',
              whiteSpace: 'nowrap',
            }}>
              <BookOpen size={17} /> Browse Help Articles
            </Link>
          </div>

          {/* Search */}
          <div style={{ position: 'relative', maxWidth: '560px', margin: '0 auto' }}>
            <Search size={17} style={{
              position: 'absolute', left: '18px', top: '50%',
              transform: 'translateY(-50%)',
              color: 'rgba(240,239,248,0.25)', pointerEvents: 'none',
            }} />
            <input
              type="text"
              placeholder="Search your issue or topic..."
              value={searchQuery}
              onChange={e => handleSearch(e.target.value)}
              style={{
                width: '100%', padding: '16px 20px 16px 50px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '12px', color: '#F0EFF8',
                fontFamily: 'DM Sans', fontSize: '15px', outline: 'none',
              }}
            />
            {searchResults.length > 0 && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0,
                background: '#0D0C14', border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '12px', overflow: 'hidden', zIndex: 50,
                boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
              }}>
                {searchResults.map((r, i) => (
                  <Link
                    key={i} to={r.href}
                    onClick={() => { setSearchQuery(''); setSearchResults([]) }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '12px',
                      padding: '14px 16px', textDecoration: 'none',
                      borderBottom: i < searchResults.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(79,142,247,0.08)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                    <span style={{
                      fontSize: '11px', padding: '2px 8px', borderRadius: '4px', flexShrink: 0, marginTop: '2px',
                      background: r.type === 'article' ? 'rgba(79,142,247,0.15)' : 'rgba(139,92,246,0.15)',
                      color: r.type === 'article' ? '#6BA3FF' : '#A78BFA',
                      fontFamily: 'Sora', fontWeight: 600,
                    }}>
                      {r.type === 'article' ? 'Article' : 'Issue'}
                    </span>
                    <div>
                      <p style={{ fontFamily: 'Sora', fontWeight: 600, color: 'white', fontSize: '14px', margin: 0 }}>{r.title}</p>
                      <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(240,239,248,0.45)', margin: '2px 0 0' }}>
                        {r.description.slice(0, 70)}...
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
            gap: '0', marginTop: '64px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '40px',
          }}>
            {[
              ['10,000+', 'Users Helped'],
              ['24/7', 'Live Support'],
              ['100+', 'Help Articles'],
            ].map(([val, label], i) => (
              <div key={label} style={{
                textAlign: 'center', padding: '0 40px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <p style={{
                  fontFamily: 'Sora', fontWeight: 800, fontSize: '32px',
                  color: '#F0EFF8', letterSpacing: '-1px', lineHeight: 1, margin: 0,
                }}>{val}</p>
                <p style={{
                  fontFamily: 'DM Sans', fontSize: '12px', letterSpacing: '2px',
                  textTransform: 'uppercase', color: 'rgba(240,239,248,0.28)', margin: '6px 0 0',
                }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          TRUST BANNER
      ══════════════════════════════════ */}
      <div style={{
        background: 'rgba(79,142,247,0.06)',
        borderTop: '1px solid rgba(79,142,247,0.15)',
        borderBottom: '1px solid rgba(79,142,247,0.15)',
        padding: '20px 0',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Shield size={20} style={{ color: '#4F8EF7', flexShrink: 0 }} />
          <p style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '15px', color: 'rgba(240,239,248,0.85)', margin: 0 }}>
            We will <strong style={{ color: 'white' }}>NEVER</strong> ask for your private key, seed phrase, or wallet password — not in chat, not ever.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════ */}
      <section style={{ padding: '120px 0', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

          {/* Section header */}
          <div style={{
            display: 'flex', flexDirection: 'column' as const,
            alignItems: 'flex-start', marginBottom: '60px',
            paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>
            <p style={{
              fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px',
              letterSpacing: '3px', textTransform: 'uppercase' as const,
              color: '#4F8EF7', marginBottom: '16px',
            }}>Simple Process</p>
            <h2 style={{
              fontFamily: 'Sora', fontWeight: 800,
              fontSize: 'clamp(32px, 5vw, 56px)',
              letterSpacing: '-2px', lineHeight: 1,
              color: '#F0EFF8', margin: 0,
            }}>How It Works</h2>
          </div>

          {/* Steps grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            {[
              { step: '01', icon: <Search size={26} />, title: 'Search Your Problem', desc: 'Describe your issue in the search bar and find relevant guides instantly.' },
              { step: '02', icon: <BookOpen size={26} />, title: 'Read the Guide', desc: 'Follow step-by-step help articles written by crypto experts for any experience level.' },
              { step: '03', icon: <MessageCircle size={26} />, title: 'Chat if Unresolved', desc: 'Connect with our live support team directly for personalized assistance.' },
            ].map(({ step, icon, title, desc }, i) => (
              <div key={step} style={{
                padding: '48px 40px',
                background: '#06050A',
                position: 'relative' as const,
              }}>
                <div style={{
                  position: 'absolute' as const, top: '32px', right: '32px',
                  fontFamily: 'Sora', fontWeight: 800, fontSize: '72px',
                  color: 'rgba(255,255,255,0.03)', letterSpacing: '-4px', lineHeight: 1,
                }}>{step}</div>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '28px',
                  background: i === 1
                    ? 'linear-gradient(135deg, rgba(79,142,247,0.25), rgba(139,92,246,0.25))'
                    : 'rgba(79,142,247,0.08)',
                  border: i === 1 ? '1px solid rgba(79,142,247,0.3)' : '1px solid rgba(79,142,247,0.12)',
                  color: '#4F8EF7',
                }}>{icon}</div>
                <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' as const, color: '#4F8EF7', marginBottom: '12px' }}>Step {step}</p>
                <h3 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '20px', color: '#F0EFF8', marginBottom: '12px', letterSpacing: '-0.5px' }}>{title}</h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(240,239,248,0.45)', lineHeight: 1.75, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          BENTO FEATURES
      ══════════════════════════════════ */}
      <section style={{ padding: '0 0 120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            marginBottom: '40px', paddingBottom: '40px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            flexWrap: 'wrap' as const, gap: '16px',
          }}>
            <div>
              <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' as const, color: '#8B5CF6', marginBottom: '12px' }}>Platform</p>
              <h2 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-2px', color: '#F0EFF8', margin: 0, lineHeight: 1 }}>
                Built for Performance
              </h2>
            </div>
          </div>

          {/* Bento grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {[
              {
                icon: <Lock size={22} />,
                color: '#4F8EF7',
                label: 'Security',
                title: 'Your privacy,\nalways protected',
                desc: 'We operate on a strict no-private-key policy. Your seed phrase and wallet credentials remain yours — always.',
              },
              {
                icon: <Zap size={22} />,
                color: '#8B5CF6',
                label: 'Speed',
                title: 'Fast, expert\nguidance',
                desc: 'Get answers in minutes, not hours. Our team is trained on every major wallet, exchange, and blockchain.',
              },
              {
                icon: <Globe size={22} />,
                color: '#22C55E',
                label: 'Coverage',
                title: 'Every wallet.\nEvery chain.',
                desc: 'From MetaMask to Trust Wallet, Binance to Bybit — we cover every platform you use.',
              },
            ].map(({ icon, color, label, title, desc }) => (
              <div key={label} style={{
                padding: '40px 36px',
                background: '#0D0C14',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px',
                position: 'relative' as const,
                overflow: 'hidden',
              }}>
                {/* Glow */}
                <div style={{
                  position: 'absolute' as const, top: '-40px', right: '-40px',
                  width: '180px', height: '180px', borderRadius: '50%',
                  background: `radial-gradient(circle, ${color}14 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${color}12`, border: `1px solid ${color}25`,
                  color, marginBottom: '24px',
                }}>{icon}</div>
                <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' as const, color, marginBottom: '12px' }}>{label}</p>
                <h3 style={{
                  fontFamily: 'Sora', fontWeight: 700, fontSize: '22px',
                  color: '#F0EFF8', letterSpacing: '-0.5px', lineHeight: 1.25,
                  marginBottom: '14px', whiteSpace: 'pre-line' as const,
                }}>{title}</h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(240,239,248,0.45)', lineHeight: 1.75, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ARTICLES
      ══════════════════════════════════ */}
      <section style={{ padding: '0 0 120px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            padding: '60px 0 48px', flexWrap: 'wrap' as const, gap: '16px',
          }}>
            <div>
              <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' as const, color: '#4F8EF7', marginBottom: '12px' }}>Knowledge Base</p>
              <h2 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-2px', color: '#F0EFF8', margin: 0, lineHeight: 1 }}>Help Articles</h2>
            </div>
            <Link to="/articles" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '10px 20px', borderRadius: '10px',
              background: 'transparent', border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(240,239,248,0.65)', textDecoration: 'none',
              fontFamily: 'Sora', fontWeight: 600, fontSize: '13px',
            }}>
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
            {articles.slice(0, 6).map(article => (
              <Link key={article.slug} to={`/articles/${article.slug}`} style={{
                display: 'block', padding: '28px',
                background: '#0D0C14',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '16px', textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(79,142,247,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span style={{
                    fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px',
                    padding: '4px 10px', borderRadius: '100px',
                    background: `${categoryColors[article.category] || '#4F8EF7'}15`,
                    color: categoryColors[article.category] || '#4F8EF7',
                  }}>{article.category}</span>
                  <span style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(240,239,248,0.25)' }}>{article.readTime}</span>
                </div>
                <h3 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '16px', color: '#F0EFF8', marginBottom: '10px', lineHeight: 1.4 }}>{article.title}</h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: '13px', color: 'rgba(240,239,248,0.40)', lineHeight: 1.65, marginBottom: '20px' }}>{article.description}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontFamily: 'DM Sans', fontWeight: 600, fontSize: '13px', color: '#4F8EF7' }}>
                  Read More <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ISSUES
      ══════════════════════════════════ */}
      <section style={{ padding: '80px 0 120px', background: '#0a0914' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: '48px' }}>
            <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' as const, color: '#8B5CF6', marginBottom: '12px' }}>Troubleshooting</p>
            <h2 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-2px', color: '#F0EFF8', margin: 0, lineHeight: 1 }}>
              What's Your Issue?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '12px' }}>
            {issues.map(issue => (
              <Link key={issue.slug} to={`/issues/${issue.slug}`} style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '20px 24px',
                background: '#0D0C14',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '14px', textDecoration: 'none',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(139,92,246,0.10)', color: '#8B5CF6',
                }}>
                  {issueIcons[issue.icon] || issue.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: '14px', color: '#F0EFF8', margin: '0 0 4px' }}>{issue.title}</h3>
                  <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(240,239,248,0.40)', margin: 0 }}>{issue.description}</p>
                </div>
                <ArrowRight size={15} style={{ color: 'rgba(240,239,248,0.20)', flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FAQ
      ══════════════════════════════════ */}
      <section style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' as const, color: '#4F8EF7', marginBottom: '12px' }}>FAQs</p>
            <h2 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-2px', color: '#F0EFF8', margin: 0 }}>
              Common Questions
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA
      ══════════════════════════════════ */}
      <section style={{ padding: '0 0 120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            padding: '80px 60px', borderRadius: '24px', textAlign: 'center',
            background: 'linear-gradient(135deg, #0f0d1f 0%, #0a0914 100%)',
            border: '1px solid rgba(139,92,246,0.20)',
            position: 'relative' as const, overflow: 'hidden',
          }}>
            {/* Glow effects */}
            <div style={{
              position: 'absolute' as const, top: '-60px', left: '50%', transform: 'translateX(-50%)',
              width: '400px', height: '200px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative' as const, zIndex: 1 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '56px', height: '56px', borderRadius: '16px', marginBottom: '24px',
                background: 'linear-gradient(135deg, rgba(79,142,247,0.2), rgba(139,92,246,0.2))',
                border: '1px solid rgba(139,92,246,0.3)',
              }}>
                <CheckCircle size={26} style={{ color: '#8B5CF6' }} />
              </div>
              <h2 style={{
                fontFamily: 'Sora', fontWeight: 800,
                fontSize: 'clamp(28px, 5vw, 52px)',
                letterSpacing: '-2px', color: '#F0EFF8',
                marginBottom: '16px', lineHeight: 1.05,
              }}>
                Still need help?
              </h2>
              <p style={{
                fontFamily: 'DM Sans', fontSize: '16px',
                color: 'rgba(240,239,248,0.45)',
                marginBottom: '40px', maxWidth: '420px',
                margin: '0 auto 40px', lineHeight: 1.7,
              }}>
                Our support team is available 24/7. Get expert guidance within minutes.
              </p>
              <button
                onClick={() => { if ((window as any).jivo_api) (window as any).jivo_api.open() }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '16px 40px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #4F8EF7 0%, #8B5CF6 100%)',
                  border: 'none', color: 'white', cursor: 'pointer',
                  fontFamily: 'Sora', fontWeight: 700, fontSize: '15px',
                  boxShadow: '0 8px 32px rgba(79,142,247,0.3)',
                }}>
                <MessageCircle size={18} /> Start Live Chat Now
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
