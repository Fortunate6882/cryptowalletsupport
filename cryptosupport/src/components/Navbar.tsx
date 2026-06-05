import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const EthLogo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 12.5L12 16.5L20 12.5L12 2Z" fill="white" fillOpacity="0.9"/>
    <path d="M12 2L4 12.5L12 16.5V2Z" fill="white" fillOpacity="0.5"/>
    <path d="M12 18.5L4 14L12 22L20 14L12 18.5Z" fill="white" fillOpacity="0.9"/>
    <path d="M12 18.5L4 14L12 22V18.5Z" fill="white" fillOpacity="0.5"/>
  </svg>
)

const Logo = () => (
  <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
    <div style={{
      width: '36px', height: '36px', borderRadius: '10px',
      background: 'linear-gradient(135deg, #4F8EF7 0%, #8B5CF6 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative' as const,
    }}>
      <EthLogo />
      <div style={{
        position: 'absolute' as const, top: '-2px', right: '-2px',
        width: '10px', height: '10px', borderRadius: '50%',
        background: '#22C55E', border: '2px solid #06050A',
      }} />
    </div>
    <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.3px', color: 'white' }}>
      Crypto<span style={{ color: '#8B5CF6' }}>Wallet</span>Support
    </div>
  </Link>
)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/articles', label: 'Articles' },
  { to: '/issues', label: 'Common Issues' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <>
      {/* ── Navbar ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '12px 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          width: '100%', maxWidth: '1100px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 20px',
          background: scrolled ? 'rgba(10,8,20,0.92)' : 'rgba(10,8,20,0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '100px',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
          transition: 'all 0.3s ease',
        }}>
          <Logo />

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} style={{
                fontFamily: 'DM Sans', fontWeight: 500, fontSize: '14px',
                textDecoration: 'none', transition: 'color 0.2s',
                color: location.pathname === to ? 'white' : 'rgba(255,255,255,0.55)',
              }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <button
              onClick={() => { if ((window as any).jivo_api) (window as any).jivo_api.open() }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '10px 22px', borderRadius: '100px',
                background: 'white', border: 'none',
                color: '#0a0814', cursor: 'pointer',
                fontFamily: 'Sora', fontWeight: 700, fontSize: '13px',
                whiteSpace: 'nowrap' as const,
              }}>
              Start Live Chat
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '4px' }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 40,
        background: 'rgba(6,5,10,0.98)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 0.3s ease',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' as const, height: '100%', paddingTop: '96px', padding: '96px 24px 32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0', flex: 1 }}>
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} style={{
                fontFamily: 'Sora', fontWeight: 600, fontSize: '20px',
                padding: '18px 0', textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                color: location.pathname === to ? 'white' : 'rgba(255,255,255,0.60)',
              }}>
                {label}
              </Link>
            ))}
          </div>
          <button
            onClick={() => { setOpen(false); if ((window as any).jivo_api) (window as any).jivo_api.open() }}
            style={{
              width: '100%', padding: '16px', borderRadius: '100px',
              background: 'white', border: 'none',
              color: '#0a0814', cursor: 'pointer',
              fontFamily: 'Sora', fontWeight: 700, fontSize: '15px',
              marginTop: '24px',
            }}>
            Start Live Chat
          </button>
        </div>
      </div>
    </>
  )
}
