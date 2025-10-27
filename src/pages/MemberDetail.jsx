import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './MemberDetail.css'

const memberData = {
  zhanglijun: {
    name: '张立军',
    title: '研究员',
    description: '张立军，主要研究方向：模型检测, 形式化方法, 深度学习模型应用, 自动驾驶仿真系统。个人主页：https://tis.ios.ac.cn/people/lijun-zhang/。于2008年在德国萨尔大学取得计算机科学博士学位，于2012年被聘为丹麦科技大学长聘副教授，并于2013年被中科院软件所以百人计划聘为研究员（终期考核优秀），现任中国科学院工业人工智能研究院可信智能软件实验室主任，中国科学院大学岗位教授，博士生导师，中欧联合实验室中方主任在高水平国际杂志及会议发表论文一百余篇，其中 CCF A类会议及杂志三十余篇，包括验证会议CAV(Computer Aided Verification)论文7篇，逻辑会议LICS (Logical in Computer Science)论文2篇，计算机程序语言POPL及PLDI各1篇，CCF A类杂志Information and Computation 5篇。申请人研究成果在国际相关领域得到认可：受邀请任第三十五届计算机逻辑CCF A类会议LICS 2020（Logic in Computer Science）大会共同主席，并任执行委员会委员。据谷歌学术统计，申请人论文被引用二千余次。其他主要学术任职为：CCF B类会议TACAS 2019、CONCUR 2018主席，以及CAV、LICS、AAAI、TACAS、CONCUR、FOSSACS及FM等CCF A、B类会议程序委员会委员。发表论文链接：https://tis.ios.ac.cn/publications-by-person/lijun-zhang/',
  },
  xueyinxing: {
    name: '薛吟兴',
    title: '研究员',
    description: '薛吟兴，主要研究方向：AI系统分析, 大数据系统方向, 具身智能安全, 软件系统安全。个人主页：https://yinxingxue.github.io/。2005年和2007年于武汉大学获学士、硕士学位，2013年2月于新加坡国立大学获博士学位，2013至2014年11月于新加坡国立大学淡马锡研究院（Temasek Lab@NUS）担任研究科学家(Research Scientist)从事新加坡国防项目，2015年至2017年7月于新加坡南洋理工大学淡马锡研究院（Temasek Lab@NTU）担任研究科学家从事新加坡国防项目。此后在微软亚太研发集团互联网工程院担任过2级数据科学家从事Exchange邮件系统的anti-spam核心项目。以主要作者在高水平国际期刊与会议共发表论文近40篇, 如CCF A类期刊TIFS、TSE、TOSEM，A类会议CCS、USENIX security、ICSE、FSE、ASE、ISSTA等。现承担国家自然基金委面上和江苏省科技厅面上项目。曾担任30个会议或研讨会的外部审稿人;作为 PRDC 2014, ICECCS2015, ICSEM2017-Tool, ISSTA 2019-Tool等会议技术委员会;作为如下期刊特邀审稿人: IEEE Trans on Reliability, IET Information Security, Computer & Security, IEEE Access, Journal of Computer Science等。 ',
  },
  yulijia: {
    name: '于立佳',
    title: '副研究员',
    description: '于立佳，致力于深度学习模型应用的研究。',
  },
  libohan: {
    name: '李博涵',
    title: '助理研究员',
    description: '李博涵，主要研究方向：约束求解。个人主页：https://douglaslee001.github.io/',
  },
  lirenjue: {
    name: '李仞珏',
    title: '助理研究员',
    description: '李仞珏，主要研究方向：自动驾驶仿真系统。个人主页：https://tis.ios.ac.cn/people/renjue-li/',
  },
  yangwenzhang: {
    name: '杨文章',
    title: '助理研究员',
    description: '杨文章，主要研究方向：软件系统安全。个人主页：https://wzyang.cn/',
  },
  limengyun: {
    name: '李梦雲',
    title: '助理工程师',
    description: '--',
  },
  sushuai: {
    name: '苏帅',
    title: '助理工程师',
    description: '--',
  },
  jiangzhengjie: {
    name: '江铮杰',
    title: '助理工程师',
    description: '--',
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
