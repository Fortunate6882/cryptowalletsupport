import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { TickerBar, Footer } from './components/Ticker'
import Home from './pages/Home'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import { Issues, IssueDetail } from './pages/Issues'
import { Privacy, About, NotFound } from './pages/Other'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function JivoChat() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//code.jivosite.com/widget/LnSN2EdEfk'
    script.async = true
    document.body.appendChild(script)
    return () => { try { document.body.removeChild(script) } catch {} }
  }, [])
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <JivoChat />
      <Navbar />
      <TickerBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/issues/:slug" element={<IssueDetail />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
