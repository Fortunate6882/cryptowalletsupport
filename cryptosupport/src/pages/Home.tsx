import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ChevronDown, ChevronUp,
  Shield, BookOpen, MessageCircle, AlertTriangle,
  CheckCircle, Clock, XCircle, ArrowUpRight, Send, Lock, Zap, Globe
} from 'lucide-react'
import { articles, issues, faqs } from '../data/content'

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)
    <div>
      {faqs.map((faq, i) => (
        <div key={i} className="accordion-item">
          <button className="accordion-btn" onClick={() => setOpen(open === i ? null : i)}>
            <span>{faq.q}</span>
            {open === i
              ? <ChevronUp size={18} style={{ color: '#8B5CF6', flexShrink: 0 }} />
              : <ChevronDown size={18} style={{ color: 'rgba(0,0,0,0.3)', flexShrink: 0 }} />}
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
  '⏳': <Clock size={20} />,
  '📤': <Send size={20} />,
  '🔀': <ArrowUpRight size={20} />,
  '❌': <XCircle size={20} />,
  '🕐': <Clock size={20} />,
  '🚫': <AlertTriangle size={20} />,
}

export default function Home() {
  return (
    <div>

      {/* ══════════════════════════════════
          HERO — Dark
      ══════════════════════════════════ */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
        paddingTop: '130px', paddingBottom: '100px',
        background: '#080612',
      }}>
        {/* Purple glow */}
        <div style={{
          position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.20) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px',
          background: 'linear-gradient(to bottom, transparent, #080612)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: '820px', margin: '0 auto', width: '100%' }}>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'Sora', fontWeight: 800,
            fontSize: 'clamp(52px, 10vw, 100px)',
            letterSpacing: '-3px', lineHeight: 0.95,
            color: '#ffffff', marginBottom: '24px',
          }}>
            Your wallet.<br />Our expertise.
          </h1>

          <p style={{
            fontFamily: 'DM Sans', fontSize: 'clamp(16px, 2.5vw, 20px)',
            fontWeight: 400, color: 'rgba(255,255,255,0.50)',
            marginBottom: '48px', lineHeight: 1.65,
            maxWidth: '480px', margin: '0 auto 48px',
          }}>
            Stuck on a withdrawal? Transaction pending forever? We've seen it all — and fixed it all.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '60px' }}>
            <button
              onClick={() => window.open('https://wa.me/18632100688?text=' + encodeURIComponent('Any issues on your wallet how can we be of help?'), '_blank')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '16px 36px', borderRadius: '100px',
                background: 'white', border: 'none',
                color: '#080612', cursor: 'pointer',
                fontFamily: 'Sora', fontWeight: 700, fontSize: '15px',
                whiteSpace: 'nowrap' as const,
                boxShadow: '0 4px 24px rgba(255,255,255,0.15)',
              }}>
              <MessageCircle size={17} /> Start Live Chat
            </button>
            <Link to="/articles" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 36px', borderRadius: '100px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.80)', textDecoration: 'none',
              fontFamily: 'Sora', fontWeight: 600, fontSize: '15px',
              whiteSpace: 'nowrap' as const,
            }}>
              <BookOpen size={17} /> Browse Help Articles
            </Link>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
            marginTop: '72px', paddingTop: '40px',
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}>
            {[
              ['10,000+', 'Users Helped'],
              ['24/7', 'Live Support'],
              ['100+', 'Help Articles'],
            ].map(([val, label], i) => (
              <div key={label} style={{
                textAlign: 'center', padding: '0 40px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                <p style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '34px', color: '#ffffff', letterSpacing: '-1.5px', lineHeight: 1, margin: 0 }}>{val}</p>
                <p style={{ fontFamily: 'DM Sans', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.30)', margin: '8px 0 0' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          TRUST BANNER — Dark
      ══════════════════════════════════ */}
      <div style={{
        background: 'rgba(139,92,246,0.08)',
        borderTop: '1px solid rgba(139,92,246,0.20)',
        borderBottom: '1px solid rgba(139,92,246,0.20)',
        padding: '20px 24px',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Shield size={20} style={{ color: '#8B5CF6', flexShrink: 0 }} />
          <p style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '14px', color: 'rgba(255,255,255,0.80)', margin: 0 }}>
            We will <strong style={{ color: 'white' }}>NEVER</strong> ask for your private key, seed phrase, or wallet password — not in chat, not ever.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════
          HOW IT WORKS — White
      ══════════════════════════════════ */}
      <section style={{ padding: '100px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{
              display: 'inline-block', padding: '6px 16px', borderRadius: '100px',
              border: '1px solid rgba(139,92,246,0.25)', marginBottom: '20px',
            }}>
              <span style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' as const, color: '#8B5CF6' }}>Simple Process</span>
            </div>
            <h2 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-2px', color: '#0a0814', margin: 0, lineHeight: 1 }}>
              Three steps.<br />One solution.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { step: '01', icon: <Search size={28} style={{ color: '#8B5CF6' }} />, title: 'Search your problem', desc: 'Type what\'s happening — pending withdrawal, failed transaction, wrong network — and find your answer instantly.' },
              { step: '02', icon: <BookOpen size={28} style={{ color: '#8B5CF6' }} />, title: 'Follow the guide', desc: 'Step-by-step instructions written by crypto experts. Clear, direct, and built for every experience level.' },
              { step: '03', icon: <MessageCircle size={28} style={{ color: '#8B5CF6' }} />, title: 'Chat if you\'re stuck', desc: 'Still need help? Our live support team is online 24/7. Real people, real answers, no bots.' },
            ].map(({ step, icon, title, desc }, i) => (
              <div key={step} style={{
                padding: '40px 36px',
                background: i === 1 ? '#0a0814' : '#f8f7ff',
                borderRadius: '20px',
                border: i === 1 ? 'none' : '1px solid rgba(139,92,246,0.10)',
                position: 'relative' as const,
              }}>
                <div style={{
                  position: 'absolute' as const, top: '24px', right: '28px',
                  fontFamily: 'Sora', fontWeight: 800, fontSize: '64px',
                  color: i === 1 ? 'rgba(255,255,255,0.04)' : 'rgba(139,92,246,0.07)',
                  letterSpacing: '-3px', lineHeight: 1,
                }}>{step}</div>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: i === 1 ? 'rgba(139,92,246,0.20)' : 'rgba(139,92,246,0.08)',
                  marginBottom: '24px',
                }}>{icon}</div>
                <h3 style={{
                  fontFamily: 'Sora', fontWeight: 700, fontSize: '20px',
                  color: i === 1 ? '#ffffff' : '#0a0814',
                  marginBottom: '12px', letterSpacing: '-0.5px',
                }}>{title}</h3>
                <p style={{
                  fontFamily: 'DM Sans', fontSize: '14px', lineHeight: 1.75,
                  color: i === 1 ? 'rgba(255,255,255,0.45)' : 'rgba(10,8,20,0.50)',
                  margin: 0,
                }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FEATURES — Dark
      ══════════════════════════════════ */}
      <section style={{ padding: '100px 0', background: '#080612' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ marginBottom: '56px' }}>
            <div style={{
              display: 'inline-block', padding: '6px 16px', borderRadius: '100px',
              border: '1px solid rgba(255,255,255,0.12)', marginBottom: '20px',
            }}>
              <span style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.50)' }}>Why Us</span>
            </div>
            <h2 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-2px', color: '#ffffff', margin: 0, lineHeight: 1 }}>
              Built different.<br />By design.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {[
              { icon: <Lock size={22} />, color: '#8B5CF6', title: 'Zero data, zero risk', desc: 'We never touch your wallet. No private keys. No seed phrases. No account access. Ever. Our guidance is the only thing we offer.' },
              { icon: <Zap size={22} />, color: '#4F8EF7', title: 'Fast answers, not delays', desc: 'No ticket queues. No waiting 48 hours. You get real-time answers from people who live and breathe crypto every day.' },
              { icon: <Globe size={22} />, color: '#22C55E', title: 'Every platform, every chain', desc: 'MetaMask, Trust Wallet, Binance, Bybit, Coinbase — if you use it, we know it. BTC, ETH, BNB, SOL, TRX and beyond.' },
            ].map(({ icon, color, title, desc }) => (
              <div key={title} style={{
                padding: '40px 36px',
                background: '#0D0C1A',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px',
                position: 'relative' as const, overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute' as const, top: '-30px', right: '-30px',
                  width: '160px', height: '160px', borderRadius: '50%',
                  background: `radial-gradient(circle, ${color}18 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${color}15`, border: `1px solid ${color}25`,
                  color, marginBottom: '24px',
                }}>{icon}</div>
                <h3 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '20px', color: '#ffffff', marginBottom: '12px', letterSpacing: '-0.3px' }}>{title}</h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(255,255,255,0.40)', lineHeight: 1.75, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ARTICLES — White
      ══════════════════════════════════ */}
      <section style={{ padding: '100px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap' as const, gap: '16px' }}>
            <div>
              <div style={{
                display: 'inline-block', padding: '6px 16px', borderRadius: '100px',
                border: '1px solid rgba(79,142,247,0.25)', marginBottom: '16px',
              }}>
                <span style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' as const, color: '#4F8EF7' }}>Knowledge Base</span>
              </div>
              <h2 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-2px', color: '#0a0814', margin: 0, lineHeight: 1 }}>
                Help articles
              </h2>
            </div>
            <Link to="/articles" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '10px 22px', borderRadius: '100px',
              border: '1px solid rgba(10,8,20,0.15)',
              color: '#0a0814', textDecoration: 'none',
              fontFamily: 'Sora', fontWeight: 600, fontSize: '13px',
            }}>
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
            {articles.slice(0, 6).map(article => (
              <Link key={article.slug} to={`/articles/${article.slug}`} style={{
                display: 'block', padding: '28px',
                background: '#f8f7ff',
                border: '1px solid rgba(139,92,246,0.10)',
                borderRadius: '16px', textDecoration: 'none',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.35)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.10)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{
                    fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px',
                    padding: '4px 12px', borderRadius: '100px',
                    background: `${categoryColors[article.category] || '#4F8EF7'}15`,
                    color: categoryColors[article.category] || '#4F8EF7',
                  }}>{article.category}</span>
                  <span style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(10,8,20,0.35)' }}>{article.readTime}</span>
                </div>
                <h3 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '16px', color: '#0a0814', marginBottom: '10px', lineHeight: 1.4 }}>{article.title}</h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: '13px', color: 'rgba(10,8,20,0.50)', lineHeight: 1.65, marginBottom: '20px' }}>{article.description}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontFamily: 'DM Sans', fontWeight: 600, fontSize: '13px', color: '#8B5CF6' }}>
                  Read More <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ISSUES — Dark
      ══════════════════════════════════ */}
      <section style={{ padding: '100px 0', background: '#080612' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              display: 'inline-block', padding: '6px 16px', borderRadius: '100px',
              border: '1px solid rgba(139,92,246,0.25)', marginBottom: '16px',
            }}>
              <span style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' as const, color: '#8B5CF6' }}>Troubleshooting</span>
            </div>
            <h2 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-2px', color: '#ffffff', margin: 0, lineHeight: 1 }}>
              What's going wrong?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '12px' }}>
            {issues.map(issue => (
              <Link key={issue.slug} to={`/issues/${issue.slug}`} style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '22px 24px',
                background: '#0D0C1A',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '14px', textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(139,92,246,0.30)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(139,92,246,0.10)', color: '#8B5CF6',
                }}>
                  {issueIcons[issue.icon] || issue.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: '14px', color: '#ffffff', margin: '0 0 4px' }}>{issue.title}</h3>
                  <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>{issue.description}</p>
                </div>
                <ArrowRight size={15} style={{ color: 'rgba(255,255,255,0.20)', flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FAQ — White
      ══════════════════════════════════ */}
      <section style={{ padding: '100px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'inline-block', padding: '6px 16px', borderRadius: '100px',
              border: '1px solid rgba(139,92,246,0.25)', marginBottom: '16px',
            }}>
              <span style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' as const, color: '#8B5CF6' }}>FAQs</span>
            </div>
            <h2 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-2px', color: '#0a0814', margin: 0 }}>
              Common questions
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA — Dark
      ══════════════════════════════════ */}
      <section style={{ padding: '100px 0', background: '#080612' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            padding: 'clamp(48px, 8vw, 96px) clamp(32px, 6vw, 80px)',
            borderRadius: '24px', textAlign: 'center',
            background: 'linear-gradient(135deg, #13103a 0%, #0d0b2a 100%)',
            border: '1px solid rgba(139,92,246,0.20)',
            position: 'relative' as const, overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute' as const, top: '-80px', left: '50%', transform: 'translateX(-50%)',
              width: '500px', height: '300px', borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(139,92,246,0.20) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative' as const, zIndex: 1 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '60px', height: '60px', borderRadius: '18px', marginBottom: '28px',
                background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.25)',
              }}>
                <CheckCircle size={28} style={{ color: '#8B5CF6' }} />
              </div>
              <h2 style={{
                fontFamily: 'Sora', fontWeight: 800,
                fontSize: 'clamp(32px, 5vw, 60px)',
                letterSpacing: '-2px', color: '#ffffff',
                marginBottom: '16px', lineHeight: 1,
              }}>
                Still need help?
              </h2>
              <p style={{
                fontFamily: 'DM Sans', fontSize: '17px',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: '40px',
                maxWidth: '400px', margin: '0 auto 40px', lineHeight: 1.7,
              }}>
                Our support team is online right now. Get expert guidance in minutes — not hours.
              </p>
              <button
                onClick={() => window.open('https://wa.me/18632100688?text=' + encodeURIComponent('Any issues on your wallet how can we be of help?'), '_blank')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '16px 40px', borderRadius: '100px',
                  background: 'white', border: 'none',
                  color: '#080612', cursor: 'pointer',
                  fontFamily: 'Sora', fontWeight: 700, fontSize: '15px',
                  boxShadow: '0 4px 24px rgba(255,255,255,0.12)',
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
