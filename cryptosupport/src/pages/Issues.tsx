import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, MessageCircle, AlertTriangle, Clock, XCircle, Send } from 'lucide-react'
import { useState } from 'react'
import { issues } from '../data/content'

const iconMap: Record<string, any> = {
  '⏳': <Clock size={28} />,
  '📤': <Send size={28} />,
  '🔀': <ArrowRight size={28} />,
  '❌': <XCircle size={28} />,
  '🕐': <Clock size={28} />,
  '🚫': <AlertTriangle size={28} />,
}

export function Issues() {
  return (
    <div style={{ paddingTop: '108px', minHeight: '100vh' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="font-body font-bold text-xs tracking-widest uppercase mb-4 block" style={{ color: '#8B5CF6', letterSpacing: '3px' }}>Troubleshooting</span>
          <h1 className="font-heading font-bold text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '-1.5px' }}>Common Issues</h1>
          <p className="font-body" style={{ color: 'rgba(240,239,248,0.55)', fontSize: '17px' }}>
            Find your issue below and follow the step-by-step resolution guide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {issues.map(issue => (
            <Link key={issue.slug} to={`/issues/${issue.slug}`}
              className="card p-6 no-underline flex items-start gap-4 group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(139,92,246,0.1)', color: '#8B5CF6' }}>
                {iconMap[issue.icon] || issue.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="font-heading font-bold text-white group-hover:text-purple-400 transition-colors" style={{ fontSize: '16px' }}>{issue.title}</h2>
                  <span className="font-body font-bold text-xs px-2 py-0.5 rounded-full"
                    style={{ background: `${issue.severityColor}18`, color: issue.severityColor }}>
                    {issue.severity}
                  </span>
                </div>
                <p className="font-body text-sm" style={{ color: 'rgba(240,239,248,0.45)' }}>{issue.description}</p>
              </div>
              <ArrowRight size={16} style={{ color: 'rgba(240,239,248,0.25)', flexShrink: 0, marginTop: '4px' }} />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="card p-8 mt-12 text-center" style={{ background: 'rgba(139,92,246,0.06)', borderColor: 'rgba(139,92,246,0.2)' }}>
          <p className="font-heading font-bold text-white mb-2">Don't see your issue?</p>
          <p className="font-body text-sm mb-6" style={{ color: 'rgba(240,239,248,0.45)' }}>Our live support team can help with any crypto issue not covered here.</p>
          <button onClick={() => { if ((window as any).jivo_api) (window as any).jivo_api.open() }}
            className="btn-primary" style={{ padding: '12px 28px', margin: '0 auto' }}>
            <MessageCircle size={16} /> Start Live Chat
          </button>
        </div>
      </div>
    </div>
  )
}

function IssueBlock({ block }: { block: any }) {
  if (block.type === 'h2') return <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#F0EFF8', margin: '28px 0 10px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.07)', fontFamily: 'Sora, sans-serif' }}>{block.text}</h2>
  if (block.type === 'p') return <p style={{ color: 'rgba(240,239,248,0.65)', lineHeight: 1.8, marginBottom: '12px', fontSize: '15px' }}>{block.text}</p>
  if (block.type === 'warning') return (
    <div className="callout-warning">⚠️ {block.text}</div>
  )
  if (block.type === 'bullets') return (
    <ol style={{ listStyle: 'none', padding: 0, marginBottom: '16px', counterReset: 'steps' }}>
      {block.items.map((item: string, i: number) => (
        <li key={i} style={{ color: 'rgba(240,239,248,0.65)', fontSize: '15px', lineHeight: 1.7, padding: '8px 0 8px 36px', position: 'relative', borderBottom: i < block.items.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
          <span style={{ position: 'absolute', left: 0, top: '8px', width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(139,92,246,0.15)', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontFamily: 'Sora', fontWeight: 700 }}>{i + 1}</span>
          {item}
        </li>
      ))}
    </ol>
  )
  return null
}

export function IssueDetail() {
  const { slug } = useParams()
  const issue = issues.find(i => i.slug === slug)
  const [helpful, setHelpful] = useState<'yes' | 'no' | null>(null)

  if (!issue) return <Navigate to="/issues" replace />

  const related = issues.filter(i => i.slug !== slug).slice(0, 3)

  return (
    <div style={{ paddingTop: '108px', minHeight: '100vh' }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 font-body text-sm" style={{ color: 'rgba(240,239,248,0.35)' }}>
          <Link to="/" className="no-underline hover:text-purple-400 transition-colors" style={{ color: 'inherit' }}>Home</Link>
          <span>/</span>
          <Link to="/issues" className="no-underline hover:text-purple-400 transition-colors" style={{ color: 'inherit' }}>Common Issues</Link>
          <span>/</span>
          <span style={{ color: 'rgba(240,239,248,0.65)' }}>{issue.title}</span>
        </div>

        {/* Severity badge */}
        <div className="severity-badge mb-6"
          style={{ background: `${issue.severityColor}15`, color: issue.severityColor, border: `1px solid ${issue.severityColor}30` }}>
          <AlertTriangle size={13} />
          {issue.severity} — {issue.severity === 'Critical' ? 'act immediately' : issue.severity === 'High' ? 'act quickly' : 'follow steps carefully'}
        </div>

        <h1 className="font-heading font-bold text-white mb-4" style={{ fontSize: 'clamp(26px, 4vw, 42px)', letterSpacing: '-1px', lineHeight: 1.2 }}>
          {issue.title}
        </h1>

        <p className="font-body mb-10" style={{ color: 'rgba(240,239,248,0.55)', fontSize: '17px', lineHeight: 1.7 }}>
          {issue.description}
        </p>

        {/* Issue body */}
        <div>
          {issue.content.map((block: any, i: number) => (
            <IssueBlock key={i} block={block} />
          ))}
        </div>

        {/* Still need help */}
        <div className="card p-8 mt-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: 'rgba(139,92,246,0.06)', borderColor: 'rgba(139,92,246,0.2)' }}>
          <div>
            <p className="font-heading font-bold text-white text-lg mb-1">Issue not resolved?</p>
            <p className="font-body text-sm" style={{ color: 'rgba(240,239,248,0.45)' }}>Our support team handles this specific issue daily. Start a live chat for immediate help.</p>
          </div>
          <button onClick={() => { if ((window as any).jivo_api) (window as any).jivo_api.open() }}
            className="btn-primary flex-shrink-0" style={{ padding: '12px 24px' }}>
            <MessageCircle size={16} /> Start Live Chat
          </button>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-12">
            <h3 className="font-heading font-bold text-white mb-6" style={{ fontSize: '20px' }}>Other Common Issues</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map(r => (
                <Link key={r.slug} to={`/issues/${r.slug}`} className="card p-5 no-underline block group">
                  <h4 className="font-heading font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors" style={{ fontSize: '14px' }}>{r.title}</h4>
                  <span className="font-body text-xs flex items-center gap-1" style={{ color: '#8B5CF6' }}>Get Help <ArrowRight size={12} /></span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <Link to="/issues" className="flex items-center gap-2 font-body text-sm transition-colors" style={{ color: 'rgba(240,239,248,0.35)' }}>
            <ArrowLeft size={14} /> All Issues
          </Link>
        </div>
      </div>
    </div>
  )
}
