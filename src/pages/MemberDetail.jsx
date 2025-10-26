import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './MemberDetail.css'

const memberData = {
  zhanglijun: {
    name: '张立军',
    title: '研究员',
    description: '负责团队的整体研究方向。',
  },
  xueyinxing: {
    name: '薛吟兴',
    title: '研究员',
    description: '专注于形式化方法和模型检测的研究。',
  },
  yulijia: {
    name: '于立佳',
    title: '副研究员',
    description: '致力于深度学习模型应用的研究。',
  },
  libohan: {
    name: '李博涵',
    title: '助理研究员',
    description: '研究方向：约束求解',
  },
  lirenjue: {
    name: '李仞珏',
    title: '助理研究员',
    description: '研究方向：自动驾驶仿真系统',
  },
  yangwenzhang: {
    name: '杨文章',
    title: '助理研究员',
    description: '研究方向：软件系统安全',
  },
  limengyun: {
    name: '李梦雲',
    title: '助理工程师',
    description: '。',
  },
  sushuai: {
    name: '苏帅',
    title: '助理工程师',
    description: '。',
  },
  jiangzhengjie: {
    name: '江铮杰',
    title: '助理工程师',
    description: '。',
  },
}

export default function MemberDetail() {
  const { memberId } = useParams()
  const member = memberData[memberId]

  if (!member) {
    return (
      <div className="container">
        <h1>成员未找到</h1>
        <Link to="/members">返回成员列表</Link>
      </div>
    )
  }

  return (
    <div className="container">
      <Link to="/members" style={{ color: 'var(--primary-color)', marginBottom: '1rem', display: 'inline-block' }}>
        ← 返回成员列表
      </Link>
      <div className="member-detail">
        <div className="member-avatar-large">
          {member.name.charAt(0)}
        </div>
        <h1>{member.name}</h1>
        <p className="member-title">{member.title}</p>
        <div className="member-description">
          <p>{member.description}</p>
        </div>
      </div>
    </div>
  )
}
