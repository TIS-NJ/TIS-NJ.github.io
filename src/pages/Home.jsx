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
                团队隶属于xxx，团队的的研究方向聚焦于可信智能软件的理论基础与工程实践，主要涵盖：模型检测, 形式化方法, 深度学习模型应用, 自动驾驶仿真系统, AI系统分析, 大数据系统方向, 具身智能安全, 软件系统安全, 约束求解
              </p>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">
                {/* <span>团队图片</span> */}
                <img src="/徽章.svg" alt="可信智能软件团队" width="200" height="200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="feature-grid">
            <Link to="/members" className="feature-card-link">
              <div className="feature-card">
                <h3>👥 研究团队</h3>
                <p>汇聚了一批经验丰富的学者和优秀的青年研究人员</p>
                <span className="card-link">了解更多 →</span>
              </div>
            </Link>
            <Link to="/papers" className="feature-card-link">
              <div className="feature-card">
                <h3>📊 研究成果</h3>
                <p>在高水平期刊和会议上发表多篇重要学术论文</p>
                <span className="card-link">了解更多 →</span>
              </div>
            </Link>
            <Link to="/students" className="feature-card-link">
              <div className="feature-card">
                <h3>👥 人才培养</h3>
                <p>现有硕士研究生4人</p>
                <span className="card-link">了解更多 →</span>
              </div>
            </Link>
            <Link to="/recruitment" className="feature-card-link">
              <div className="feature-card">
                <h3>🎓 招聘信息</h3>
                <p>欢迎有志于从事可信智能软件研究的实习生、学生和毕业生加入我们团队</p>
                <span className="card-link">了解更多 →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
