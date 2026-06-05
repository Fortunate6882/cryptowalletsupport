import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, TrendingUp, TrendingDown } from 'lucide-react'

const COINS = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum' },
  { id: 'binancecoin', symbol: 'BNB', name: 'BNB' },
  { id: 'solana', symbol: 'SOL', name: 'Solana' },
  { id: 'tether', symbol: 'USDT', name: 'Tether' },
  { id: 'tron', symbol: 'TRX', name: 'TRON' },
  { id: 'matic-network', symbol: 'MATIC', name: 'Polygon' },
]

type CoinPrice = { price: number; change: number }

export function TickerBar() {
  const [prices, setPrices] = useState<Record<string, CoinPrice>>({})

  const fetchPrices = async () => {
    try {
      const ids = COINS.map(c => c.id).join(',')
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`
      )
      if (res.ok) {
        const data = await res.json()
        const parsed: Record<string, CoinPrice> = {}
        COINS.forEach(c => {
          if (data[c.id]) {
            parsed[c.symbol] = { price: data[c.id].usd, change: data[c.id].usd_24h_change }
          }
        })
        setPrices(parsed)
      }
    } catch {}
  }

  useEffect(() => {
    fetchPrices()
    const interval = setInterval(fetchPrices, 30000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (p: number) => {
    if (p >= 1000) return `$${p.toLocaleString('en-US', { maximumFractionDigits: 0 })}`
    if (p >= 1) return `$${p.toFixed(2)}`
    return `$${p.toFixed(4)}`
  }

  const tickerItems = [...COINS, ...COINS].map((coin, i) => {
    const data = prices[coin.symbol]
    const change = data?.change ?? 0
    const isUp = change >= 0
    return (
      <div key={i} className="flex items-center gap-2 flex-shrink-0">
        <span className="font-heading font-bold text-xs text-white">{coin.symbol}</span>
        <span className="font-mono text-xs" style={{ color: 'rgba(240,239,248,0.65)' }}>
          {data ? formatPrice(data.price) : '—'}
        </span>
        {data && (
          <span className="font-body text-xs flex items-center gap-0.5" style={{ color: isUp ? '#22C55E' : '#EF4444' }}>
            {isUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
            {Math.abs(change).toFixed(2)}%
          </span>
        )}
        <span style={{ color: 'rgba(255,255,255,0.12)', marginLeft: '16px' }}>|</span>
      </div>
    )
  })

  return (
    <div className="ticker-bar" style={{ position: 'sticky', top: '68px', zIndex: 40 }}>
      <div className="ticker-track">
        {tickerItems}
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer style={{ background: '#0D0C14', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '64px', paddingBottom: '24px' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #4F8EF7, #8B5CF6)' }}>
                <Shield size={18} fill="white" color="white" />
              </div>
              <span className="font-heading font-bold text-white text-sm">CryptoWalletSupport</span>
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(240,239,248,0.45)' }}>
              Built on trust. Powered by technology. Guided by expertise.
            </p>
            <p className="font-body text-xs" style={{ color: 'rgba(240,239,248,0.3)' }}>
              We will never request your private key or seed phrase.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">Help Center</h4>
            <div className="space-y-3">
              {[['Articles', '/articles'], ['Common Issues', '/issues']].map(([label, to]) => (
                <Link key={to} to={to} className="block font-body text-sm no-underline transition-colors"
                  style={{ color: 'rgba(240,239,248,0.45)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#4F8EF7')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,239,248,0.45)')}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">Company</h4>
            <div className="space-y-3">
              {[['About', '/about'], ['Contact', '#']].map(([label, to]) => (
                <Link key={label} to={to} className="block font-body text-sm no-underline transition-colors"
                  style={{ color: 'rgba(240,239,248,0.45)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#4F8EF7')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,239,248,0.45)')}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">Legal</h4>
            <div className="space-y-3">
              {[['Privacy Policy', '/privacy'], ['Disclaimer', '/privacy#disclaimer']].map(([label, to]) => (
                <Link key={label} to={to} className="block font-body text-sm no-underline transition-colors"
                  style={{ color: 'rgba(240,239,248,0.45)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#4F8EF7')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,239,248,0.45)')}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="font-body text-xs leading-relaxed text-center py-6"
          style={{ color: 'rgba(240,239,248,0.3)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          Cryptowalletsupport provides guidance only. We do not have access to any user wallets, funds, or exchange accounts. Never share your private keys or recovery phrase with anyone.
        </p>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="font-body text-xs" style={{ color: 'rgba(240,239,248,0.3)' }}>
            © 2026 Cryptowalletsupport. All rights reserved.
          </p>
          <p className="font-body text-xs flex items-center gap-2" style={{ color: 'rgba(240,239,248,0.3)' }}>
            🔒 We never request private keys or seed phrases.
          </p>
        </div>
      </div>
    </footer>
  )
}
