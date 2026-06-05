import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Shield } from 'lucide-react'

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 no-underline">
    <div className="relative">
      <div className="w-9 h-9 rounded-xl flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #4F8EF7, #8B5CF6)' }}>
        <Shield size={18} fill="white" color="white" />
      </div>
      <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-[#06050A]" />
    </div>
    <div>
      <div className="font-heading font-bold text-white" style={{ fontSize: '15px', letterSpacing: '-0.3px' }}>
        Crypto<span style={{ color: '#4F8EF7' }}>Wallet</span>Support
      </div>
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav' : 'bg-transparent'}`}
        style={{ height: '68px', display: 'flex', alignItems: 'center' }}>
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to}
                className="font-body text-sm font-medium transition-colors no-underline"
                style={{ color: location.pathname === to ? '#4F8EF7' : 'rgba(240,239,248,0.65)' }}>
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => { if ((window as any).jivo_api) (window as any).jivo_api.open() }}
              className="btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>
              Start Live Chat
            </button>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(6,5,10,0.98)' }}>
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          <div className="flex flex-col gap-2 flex-1">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to}
                className="font-heading font-semibold text-lg py-4 border-b no-underline transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.07)', color: location.pathname === to ? '#4F8EF7' : 'rgba(240,239,248,0.75)' }}>
                {label}
              </Link>
            ))}
          </div>
          <button
            onClick={() => { setOpen(false); if ((window as any).jivo_api) (window as any).jivo_api.open() }}
            className="btn-primary w-full justify-center mt-6" style={{ padding: '14px', fontSize: '15px' }}>
            Start Live Chat
          </button>
        </div>
      </div>
    </>
  )
}
