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
              <Link to="/papers" className={isActive('/papers')}>
                成果
              </Link>
              <Link to="/members" className={isActive('/members')}>
                团队成员
              </Link>
              <Link to="/students" className={isActive('/students')}>
                学生
              </Link>
              <Link to="/recruitment" className={isActive('/recruitment')}>
                招生
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
          <div className="footer-content">
            <div className="footer-section">
              <h3>联系方式</h3>
              <p>Email: tis-nj@outlook.com; myli@iaii.ac.cn</p>
              <p>地址: 南京市江宁区麒麟街道天泉路168号</p>
            </div>
            <div className="footer-section">
              <h3>快速链接</h3>
              <Link to="/">首页</Link>
              <Link to="/papers">成果</Link>
              <Link to="/members">团队成员</Link>
              <Link to="/students">学生</Link>
              <Link to="/recruitment">招生</Link>
            </div>
          </div>
          <p className="footer-copyright">
            &copy; 2025 可信智能软件团队. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
