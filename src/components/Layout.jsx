import { Link, Outlet, useLocation } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <Link to="/">
                <h1>可信智能软件团队</h1>
              </Link>
            </div>
            <nav className="nav">
              <Link to="/" className={isActive('/')}>
                首页
              </Link>
              <Link to="/about" className={isActive('/about')}>
                关于我们
              </Link>
              <Link to="/research" className={isActive('/research')}>
                研究方向
              </Link>
              <Link to="/members" className={isActive('/members')}>
                团队成员
              </Link>
              <Link to="/publications" className={isActive('/publications')}>
                研究成果
              </Link>
              <Link to="/contact" className={isActive('/contact')}>
                联系我们
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 可信智能软件团队. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
