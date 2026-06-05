import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, ThumbsUp, ThumbsDown, MessageCircle, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { articles } from '../data/content'

const categoryColors: Record<string, string> = {
  'Wallet Setup': '#4F8EF7',
  'Transactions': '#8B5CF6',
  'Security': '#22C55E',
}

function ArticleBlock({ block }: { block: any }) {
  if (block.type === 'h2') return <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#F0EFF8', margin: '32px 0 12px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.07)', fontFamily: 'Sora, sans-serif' }}>{block.text}</h2>
  if (block.type === 'h3') return <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#F0EFF8', margin: '20px 0 8px', fontFamily: 'Sora, sans-serif' }}>{block.text}</h3>
  if (block.type === 'p') return <p style={{ color: 'rgba(240,239,248,0.65)', lineHeight: 1.8, marginBottom: '14px', fontSize: '15px' }}>{block.text}</p>
  if (block.type === 'warning') return (
    <div className="callout-warning">⚠️ {block.text}</div>
  )
  if (block.type === 'bullets') return (
    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '16px' }}>
      {block.items.map((item: string, i: number) => (
        <li key={i} style={{ color: 'rgba(240,239,248,0.65)', fontSize: '15px', lineHeight: 1.7, padding: '4px 0 4px 20px', position: 'relative' }}>
          <span style={{ position: 'absolute', left: 0, color: '#4F8EF7' }}>→</span>
          {item}
        </li>
      ))}
    </ul>
  )
  return null
}

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)
  const [helpful, setHelpful] = useState<'yes' | 'no' | null>(null)

  if (!article) return <Navigate to="/articles" replace />

  const related = articles.filter(a => a.slug !== slug && a.category === article.category).slice(0, 3)

  const headings = article.content.filter((b: any) => b.type === 'h2').map((b: any) => b.text)

  return (
    <div style={{ paddingTop: '108px', minHeight: '100vh' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 font-body text-sm" style={{ color: 'rgba(240,239,248,0.35)' }}>
          <Link to="/" className="no-underline hover:text-blue-400 transition-colors" style={{ color: 'inherit' }}>Home</Link>
          <span>/</span>
          <Link to="/articles" className="no-underline hover:text-blue-400 transition-colors" style={{ color: 'inherit' }}>Articles</Link>
          <span>/</span>
          <span style={{ color: 'rgba(240,239,248,0.65)' }}>{article.title}</span>
        </div>

        <div className="flex gap-12">
          {/* Main content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Meta */}
            <span className="font-body font-bold text-xs px-3 py-1 rounded-full inline-block mb-5"
              style={{ background: `${categoryColors[article.category] || '#4F8EF7'}18`, color: categoryColors[article.category] || '#4F8EF7' }}>
              {article.category}
            </span>

            <h1 className="font-heading font-bold text-white mb-6" style={{ fontSize: 'clamp(26px, 4vw, 42px)', letterSpacing: '-1px', lineHeight: 1.2 }}>
              {article.title}
            </h1>

            <div className="flex items-center gap-6 mb-10" style={{ color: 'rgba(240,239,248,0.4)', fontSize: '13px' }}>
              <span className="flex items-center gap-1"><Clock size={13} />{article.readTime}</span>
              <span className="flex items-center gap-1"><Calendar size={13} />Updated {article.updated}</span>
            </div>

            {/* Article body */}
            <div className="article-body">
              {article.content.map((block: any, i: number) => (
                <ArticleBlock key={i} block={block} />
              ))}
            </div>

            {/* Was this helpful */}
            <div className="card p-6 mt-12 text-center">
              <p className="font-heading font-semibold text-white mb-4">Was this article helpful?</p>
              <div className="flex justify-center gap-4">
                <button onClick={() => setHelpful('yes')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all font-body font-semibold text-sm"
                  style={{ background: helpful === 'yes' ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.05)', color: helpful === 'yes' ? '#22C55E' : 'rgba(240,239,248,0.55)', border: `1px solid ${helpful === 'yes' ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.1)'}` }}>
                  <ThumbsUp size={16} /> Yes, helpful
                </button>
                <button onClick={() => setHelpful('no')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all font-body font-semibold text-sm"
                  style={{ background: helpful === 'no' ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.05)', color: helpful === 'no' ? '#EF4444' : 'rgba(240,239,248,0.55)', border: `1px solid ${helpful === 'no' ? 'rgba(239,68,68,0.3)' : 'rgba(255,255,255,0.1)'}` }}>
                  <ThumbsDown size={16} /> Needs improvement
                </button>
              </div>
              {helpful && (
                <p className="font-body text-sm mt-4" style={{ color: 'rgba(240,239,248,0.4)' }}>
                  {helpful === 'yes' ? 'Thanks for the feedback! 🙌' : 'We\'ll work on improving this. Thanks for letting us know.'}
                </p>
              )}
            </div>

            {/* Still need help CTA */}
            <div className="card p-6 mt-5 flex items-center justify-between flex-wrap gap-4"
              style={{ background: 'rgba(79,142,247,0.06)', borderColor: 'rgba(79,142,247,0.2)' }}>
              <div>
                <p className="font-heading font-semibold text-white mb-1">Still need help?</p>
                <p className="font-body text-sm" style={{ color: 'rgba(240,239,248,0.45)' }}>Connect with our support team for personalized guidance.</p>
              </div>
              <button onClick={() => { if ((window as any).jivo_api) (window as any).jivo_api.open() }}
                className="btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>
                <MessageCircle size={16} /> Start Live Chat
              </button>
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <div className="mt-12">
                <h3 className="font-heading font-bold text-white mb-6" style={{ fontSize: '20px' }}>Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {related.map(r => (
                    <Link key={r.slug} to={`/articles/${r.slug}`} className="card p-5 no-underline block group">
                      <h4 className="font-heading font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors" style={{ fontSize: '14px', lineHeight: 1.4 }}>{r.title}</h4>
                      <span className="font-body text-xs flex items-center gap-1" style={{ color: '#4F8EF7' }}>Read More <ArrowRight size={12} /></span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar TOC */}
          {headings.length > 0 && (
            <aside className="hidden lg:block" style={{ width: '240px', flexShrink: 0 }}>
              <div className="sticky" style={{ top: '120px' }}>
                <p className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-4" style={{ letterSpacing: '2px' }}>On This Page</p>
                <nav>
                  {headings.map((h: string, i: number) => (
                    <a key={i} href={`#section-${i}`} className="toc-link">{h}</a>
                  ))}
                </nav>
                <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <Link to="/articles" className="flex items-center gap-2 font-body text-sm transition-colors" style={{ color: 'rgba(240,239,248,0.35)' }}>
                    <ArrowLeft size={14} /> All Articles
                  </Link>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  )
}
