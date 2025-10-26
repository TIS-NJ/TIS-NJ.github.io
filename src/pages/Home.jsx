import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h2>可信智能软件团队</h2>
              <p>
                我们致力于研究和开发可信赖的智能软件系统，推动人工智能技术的创新与应用
              </p>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">
                <span>团队图片</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>团队亮点</h2>
          <div className="feature-grid">
            <Link to="/members" className="feature-card-link">
              <div className="feature-card">
                <h3>🏆 卓越研究</h3>
                <p>在软件工程和人工智能领域取得多项突破性研究成果</p>
                <span className="card-link">了解更多 →</span>
              </div>
            </Link>
            <Link to="/papers" className="feature-card-link">
              <div className="feature-card">
                <h3>📊 丰硕成果</h3>
                <p>在高水平期刊和会议上发表多篇重要学术论文</p>
                <span className="card-link">了解更多 →</span>
              </div>
            </Link>
            <Link to="/students" className="feature-card-link">
              <div className="feature-card">
                <h3>👥 优秀团队</h3>
                <p>汇聚了一批经验丰富的学者和优秀的青年研究人员</p>
                <span className="card-link">了解更多 →</span>
              </div>
            </Link>
            <Link to="/recruitment" className="feature-card-link">
              <div className="feature-card">
                <h3>🎓 招生信息</h3>
                <p>欢迎有志于从事软件工程和人工智能研究的学子加入</p>
                <span className="card-link">了解更多 →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
