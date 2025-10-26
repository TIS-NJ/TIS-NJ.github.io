export default function Members() {
  return (
    <div className="container">
      <h1>团队成员</h1>
      <p>我们团队由以下成员组成：</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>教授/导师</h2>
        <ul>
          <li>XXX 教授</li>
          <li>XXX 副教授</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>博士生</h2>
        <ul>
          <li>张三</li>
          <li>李四</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>硕士生</h2>
        <ul>
          <li>王五</li>
          <li>赵六</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>本科生</h2>
        <ul>
          <li>钱七</li>
          <li>孙八</li>
        </ul>
      </section>
    </div>
  )
}
