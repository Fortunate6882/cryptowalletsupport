import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { articles } from '../data/content'

const categoryColors: Record<string, string> = {
  'Wallet Setup': '#4F8EF7',
  'Transactions': '#8B5CF6',
  'Security': '#22C55E',
}

const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))]

import { useState } from 'react'

export default function Articles() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? articles : articles.filter(a => a.category === active)

  return (
    <div style={{ paddingTop: '108px', minHeight: '100vh' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-body font-bold text-xs tracking-widest uppercase mb-4 block" style={{ color: '#4F8EF7', letterSpacing: '3px' }}>Knowledge Base</span>
          <h1 className="font-heading font-bold text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '-1.5px' }}>Help Articles</h1>
          <p className="font-body" style={{ color: 'rgba(240,239,248,0.55)', fontSize: '17px' }}>
            Step-by-step guides for wallets, transactions, and security.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className="font-body font-semibold text-sm px-5 py-2 rounded-full transition-all"
              style={{
                background: active === cat ? 'linear-gradient(135deg, #4F8EF7, #8B5CF6)' : 'rgba(255,255,255,0.05)',
                color: active === cat ? 'white' : 'rgba(240,239,248,0.55)',
                border: active === cat ? 'none' : '1px solid rgba(255,255,255,0.1)',
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(article => (
            <Link key={article.slug} to={`/articles/${article.slug}`}
              className="card p-6 no-underline block group">
              <div className="flex items-center justify-between mb-4">
                <span className="font-body font-bold text-xs px-3 py-1 rounded-full"
                  style={{ background: `${categoryColors[article.category] || '#4F8EF7'}18`, color: categoryColors[article.category] || '#4F8EF7' }}>
                  {article.category}
                </span>
                <span className="font-body text-xs flex items-center gap-1" style={{ color: 'rgba(240,239,248,0.3)' }}>
                  <Clock size={12} />{article.readTime}
                </span>
              </div>
              <h2 className="font-heading font-bold text-white mb-3 group-hover:text-blue-400 transition-colors" style={{ fontSize: '16px', lineHeight: 1.4 }}>{article.title}</h2>
              <p className="font-body text-sm mb-5 leading-relaxed" style={{ color: 'rgba(240,239,248,0.45)' }}>{article.description}</p>
              <span className="font-body font-semibold text-sm flex items-center gap-1" style={{ color: '#4F8EF7' }}>
                Read More <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
