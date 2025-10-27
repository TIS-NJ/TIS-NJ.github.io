import { Link } from 'react-router-dom'
import './Members.css'

const researchers = [
  { name: '张立军', title: '研究员', id: 'zhanglijun' },
  { name: '薛吟兴', title: '研究员', id: 'xueyinxing' },
  { name: '于立佳', title: '副研究员', id: 'yulijia' },
]

const assistants = [
  { name: '李博涵', title: '助理研究员', id: 'libohan' },
  { name: '李仞珏', title: '助理研究员', id: 'lirenjue' },
  { name: '杨文章', title: '助理研究员', id: 'yangwenzhang' },
]

const engineers = [
  { name: '李梦雲', title: '助理工程师', id: 'limengyun' },
  { name: '苏帅', title: '助理工程师', id: 'sushuai' },
  { name: '江铮杰', title: '助理工程师', id: 'jiangzhengjie' },
]

export default function Members() {
  return (
    <div className="container">
      <h1>团队成员</h1>
      <p>我们团队由以下成员组成：</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>研究员</h2>
        <div className="member-grid">
          {researchers.map((member) => (
            <Link 
              key={member.id} 
              to={`/members/${member.id}`}
              className="member-card-link"
            >
              <div className="member-card">
                <div className="member-avatar">
                  {member.name.charAt(0)}
                </div>
                <h3>{member.name}</h3>
                <p>{member.title}</p>
                <span className="card-link">查看详情 →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>助理研究员</h2>
        <div className="member-grid">
          {assistants.map((member) => (
            <Link 
              key={member.id} 
              to={`/members/${member.id}`}
              className="member-card-link"
            >
              <div className="member-card">
                <div className="member-avatar">
                  {member.name.charAt(0)}
                </div>
                <h3>{member.name}</h3>
                <p>{member.title}</p>
                <span className="card-link">查看详情 →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>助理工程师</h2>
        <div className="member-grid">
          {engineers.map((member) => (
            <Link 
              key={member.id} 
              to={`/members/${member.id}`}
              className="member-card-link"
            >
              <div className="member-card">
                <div className="member-avatar">
                  {member.name.charAt(0)}
                </div>
                <h3>{member.name}</h3>
                <p>{member.title}</p>
                <span className="card-link">查看详情 →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
