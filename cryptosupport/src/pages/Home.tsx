import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, ChevronUp, Search, Shield, BookOpen, MessageCircle, AlertTriangle, CheckCircle, Clock, XCircle, ArrowUpRight, Send } from 'lucide-react'
import { articles, issues, faqs } from '../data/content'

// Animated blockchain node background
function NodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animFrame: number

    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = []
    const count = 40

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2.5 + 1
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(79,142,247,0.5)'
        ctx.fill()
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(79,142,247,${0.15 * (1 - dist / 120)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animFrame = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.4 }} />
  )
}

// FAQ Accordion
function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} className="accordion-item">
          <button className="accordion-btn" onClick={() => setOpen(open === i ? null : i)}>
            <span>{faq.q}</span>
            {open === i ? <ChevronUp size={18} style={{ color: '#4F8EF7', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: 'rgba(240,239,248,0.4)', flexShrink: 0 }} />}
          </button>
          <div className={`accordion-content ${open === i ? 'open' : ''}`}>{faq.a}</div>
        </div>
      ))}
    </div>
  )
}

// Reveal on scroll
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
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

  const heroRef = useReveal()
  const trustRef = useReveal()
  const howRef = useReveal()
  const articlesRef = useReveal()
  const issuesRef = useReveal()
  const faqRef = useReveal()

  const handleSearch = (q: string) => {
    setSearchQuery(q)
    if (!q.trim()) { setSearchResults([]); return }
    const lower = q.toLowerCase()
    const results = [
      ...articles.filter(a => a.title.toLowerCase().includes(lower) || a.description.toLowerCase().includes(lower) || a.category.toLowerCase().includes(lower)).map(a => ({ ...a, type: 'article', href: `/articles/${a.slug}` })),
      ...issues.filter(i => i.title.toLowerCase().includes(lower) || i.description.toLowerCase().includes(lower)).map(i => ({ ...i, type: 'issue', href: `/issues/${i.slug}` })),
    ]
    setSearchResults(results.slice(0, 6))
  }

  return (
    <div>
      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '108px', paddingBottom: '80px' }}>
        <NodeBackground />

        {/* Gradient orbs */}
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,142,247,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div ref={heroRef} className="reveal max-w-4xl mx-auto px-6 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass"
            style={{ fontSize: '13px', color: 'rgba(240,239,248,0.7)' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', animation: 'pulse 2s infinite' }} />
            <span className="font-body">Trusted crypto guidance — available 24/7</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-bold text-white mb-6"
            style={{ fontSize: 'clamp(40px, 7vw, 76px)', letterSpacing: '-2px', lineHeight: 1.05 }}>
            The Blockchain{' '}
            <span className="gradient-text">Never Sleeps.</span>
          </h1>

          <p className="font-heading font-medium mb-4" style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(240,239,248,0.65)', letterSpacing: '-0.3px' }}>
            Built on trust. Powered by technology. Guided by expertise.
          </p>

          <p className="font-body mb-10 max-w-xl mx-auto" style={{ fontSize: '16px', color: 'rgba(240,239,248,0.45)', lineHeight: 1.7 }}>
            Millions of transactions. Endless possibilities. One place to understand it all.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button onClick={() => { if ((window as any).jivo_api) (window as any).jivo_api.open() }}
              className="btn-primary" style={{ padding: '14px 32px', fontSize: '15px' }}>
              <MessageCircle size={18} />
              Start Live Chat
            </button>
            <Link to="/articles" className="btn-secondary" style={{ padding: '14px 32px', fontSize: '15px' }}>
              <BookOpen size={18} />
              Browse Help Articles
            </Link>
          </div>

          {/* Search */}
          <div style={{ position: 'relative', maxWidth: '520px', margin: '0 auto' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(240,239,248,0.35)', pointerEvents: 'none' }} />
            <input type="text" placeholder="Search your issue or topic..."
              className="search-input"
              value={searchQuery}
              onChange={e => handleSearch(e.target.value)} />
            {searchResults.length > 0 && (
              <div className="glass absolute w-full mt-2 rounded-2xl overflow-hidden z-50"
                style={{ top: '100%', left: 0, border: '1px solid rgba(255,255,255,0.1)' }}>
                {searchResults.map((r, i) => (
                  <Link key={i} to={r.href} onClick={() => { setSearchQuery(''); setSearchResults([]) }}
                    className="flex items-start gap-3 px-4 py-3 no-underline transition-colors"
                    style={{ borderBottom: i < searchResults.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(79,142,247,0.08)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                    <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '4px', background: r.type === 'article' ? 'rgba(79,142,247,0.15)' : 'rgba(139,92,246,0.15)', color: r.type === 'article' ? '#6BA3FF' : '#A78BFA', fontFamily: 'Sora', fontWeight: 600, marginTop: '2px', flexShrink: 0 }}>
                      {r.type === 'article' ? 'Article' : 'Issue'}
                    </span>
                    <div>
                      <p className="font-heading font-semibold text-white text-sm">{r.title}</p>
                      <p className="font-body text-xs mt-0.5" style={{ color: 'rgba(240,239,248,0.45)' }}>{r.description.slice(0, 70)}...</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TRUST BANNER */}
      <div ref={trustRef} className="reveal" style={{ background: 'rgba(79,142,247,0.06)', borderTop: '1px solid rgba(79,142,247,0.2)', borderBottom: '1px solid rgba(79,142,247,0.2)', borderLeft: '4px solid #4F8EF7', padding: '18px 0' }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-4">
          <Shield size={22} style={{ color: '#4F8EF7', flexShrink: 0 }} />
          <p className="font-body font-semibold" style={{ fontSize: '15px', color: 'rgba(240,239,248,0.9)' }}>
            We will <strong style={{ color: 'white' }}>NEVER</strong> ask for your private key, seed phrase, or wallet password — not in chat, not ever.
          </p>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div ref={howRef} className="reveal text-center mb-16">
            <span className="font-body font-bold text-xs tracking-widest uppercase mb-4 block"
              style={{ color: '#4F8EF7', letterSpacing: '3px' }}>Simple Process</span>
            <h2 className="font-heading font-bold text-white" style={{ fontSize: 'clamp(28px, 5vw, 48px)', letterSpacing: '-1px' }}>
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', icon: <Search size={28} />, title: 'Search Your Problem', desc: 'Describe your issue in the search bar above and find relevant guides instantly.' },
              { step: '02', icon: <BookOpen size={28} />, title: 'Read the Guide', desc: 'Follow our step-by-step help articles written by crypto experts for any experience level.' },
              { step: '03', icon: <MessageCircle size={28} />, title: 'Chat if Unresolved', desc: 'Connect with our live support team directly if you need personalized assistance.' },
            ].map(({ step, icon, title, desc }, i) => (
              <div key={step} className="card p-8 relative overflow-hidden"
                style={{ background: i === 1 ? 'linear-gradient(135deg, rgba(79,142,247,0.1), rgba(139,92,246,0.1))' : undefined, borderColor: i === 1 ? 'rgba(79,142,247,0.3)' : undefined }}>
                <div className="absolute top-6 right-6 font-heading font-bold" style={{ fontSize: '56px', color: 'rgba(255,255,255,0.04)', letterSpacing: '-2px' }}>{step}</div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: i === 1 ? 'linear-gradient(135deg, #4F8EF7, #8B5CF6)' : 'rgba(79,142,247,0.1)', color: i === 1 ? 'white' : '#4F8EF7' }}>
                  {icon}
                </div>
                <p className="font-body font-bold text-xs tracking-widest uppercase mb-3" style={{ color: '#4F8EF7' }}>Step {step}</p>
                <h3 className="font-heading font-bold text-white mb-3" style={{ fontSize: '18px' }}>{title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(240,239,248,0.55)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div ref={articlesRef} className="reveal flex items-end justify-between mb-12">
            <div>
              <span className="font-body font-bold text-xs tracking-widest uppercase mb-3 block" style={{ color: '#4F8EF7', letterSpacing: '3px' }}>Knowledge Base</span>
              <h2 className="font-heading font-bold text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)', letterSpacing: '-1px' }}>Help Articles</h2>
            </div>
            <Link to="/articles" className="btn-secondary hidden md:flex" style={{ padding: '10px 20px', fontSize: '13px' }}>
              View All <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.slice(0, 6).map(article => (
              <Link key={article.slug} to={`/articles/${article.slug}`} className="card p-6 no-underline block group">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body font-bold text-xs px-3 py-1 rounded-full"
                    style={{ background: `${categoryColors[article.category] || '#4F8EF7'}18`, color: categoryColors[article.category] || '#4F8EF7' }}>
                    {article.category}
                  </span>
                  <span className="font-body text-xs" style={{ color: 'rgba(240,239,248,0.3)' }}>{article.readTime}</span>
                </div>
                <h3 className="font-heading font-bold text-white mb-3 group-hover:text-blue-400 transition-colors" style={{ fontSize: '16px', lineHeight: 1.4 }}>{article.title}</h3>
                <p className="font-body text-sm mb-5" style={{ color: 'rgba(240,239,248,0.45)', lineHeight: 1.65 }}>{article.description}</p>
                <span className="font-body font-semibold text-sm flex items-center gap-1" style={{ color: '#4F8EF7' }}>
                  Read More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link to="/articles" className="btn-secondary">View All Articles <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* COMMON ISSUES */}
      <section style={{ padding: '0 0 100px', background: 'rgba(13,12,20,0.5)' }}>
        <div className="max-w-7xl mx-auto px-6 pt-16">
          <div ref={issuesRef} className="reveal text-center mb-12">
            <span className="font-body font-bold text-xs tracking-widest uppercase mb-3 block" style={{ color: '#8B5CF6', letterSpacing: '3px' }}>Troubleshooting</span>
            <h2 className="font-heading font-bold text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)', letterSpacing: '-1px' }}>What's Your Issue?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {issues.map(issue => (
              <Link key={issue.slug} to={`/issues/${issue.slug}`} className="card p-6 no-underline flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl"
                  style={{ background: 'rgba(139,92,246,0.1)', color: '#8B5CF6' }}>
                  {issueIcons[issue.icon] || issue.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-white mb-1 group-hover:text-purple-400 transition-colors" style={{ fontSize: '15px' }}>{issue.title}</h3>
                  <p className="font-body text-sm" style={{ color: 'rgba(240,239,248,0.45)' }}>{issue.description}</p>
                </div>
                <ArrowRight size={16} style={{ color: 'rgba(240,239,248,0.25)', flexShrink: 0, marginTop: '4px', transition: 'color 0.2s' }} className="group-hover:text-purple-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '100px 0' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div ref={faqRef} className="reveal text-center mb-12">
            <span className="font-body font-bold text-xs tracking-widest uppercase mb-3 block" style={{ color: '#4F8EF7', letterSpacing: '3px' }}>FAQs</span>
            <h2 className="font-heading font-bold text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)', letterSpacing: '-1px' }}>Frequently Asked Questions</h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="card p-16 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(79,142,247,0.08) 0%, rgba(139,92,246,0.08) 100%)', borderColor: 'rgba(79,142,247,0.2)' }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,142,247,0.12), transparent)', pointerEvents: 'none' }} />
            <CheckCircle size={40} style={{ color: '#4F8EF7', margin: '0 auto 20px' }} />
            <h2 className="font-heading font-bold text-white mb-4" style={{ fontSize: 'clamp(22px, 4vw, 36px)', letterSpacing: '-0.5px' }}>
              Still need help?
            </h2>
            <p className="font-body mb-8" style={{ color: 'rgba(240,239,248,0.55)', fontSize: '16px' }}>
              Our support team is available 24/7. Start a live chat and get expert guidance within minutes.
            </p>
            <button onClick={() => { if ((window as any).jivo_api) (window as any).jivo_api.open() }}
              className="btn-primary" style={{ padding: '14px 36px', fontSize: '15px', margin: '0 auto' }}>
              <MessageCircle size={18} />
              Start Live Chat Now
            </button>
          </div>
        </div>
      </section>

      {/* JivoChat */}
      <script src="//code.jivosite.com/widget/LnSN2EdEfk" async />
    </div>
  )
}
