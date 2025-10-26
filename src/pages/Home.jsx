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
            <div className="feature-card">
              <h3>🏆 卓越研究</h3>
              <p>在软件工程和人工智能领域取得多项突破性研究成果</p>
            </div>
            <div className="feature-card">
              <h3>👥 优秀团队</h3>
              <p>汇聚了一批经验丰富的学者和优秀的青年研究人员</p>
            </div>
            <div className="feature-card">
              <h3>🤝 广泛合作</h3>
              <p>与国内外知名高校和企业保持紧密的合作关系</p>
            </div>
            <div className="feature-card">
              <h3>📊 丰硕成果</h3>
              <p>在高水平期刊和会议上发表多篇重要学术论文</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
