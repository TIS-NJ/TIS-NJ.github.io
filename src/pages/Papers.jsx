import { Link } from 'react-router-dom'
export default function Papers() {
  return (
    <div className="container">
      <h1>论文</h1>
      <p>团队成立后成员发表的重要论文（团队成员的其他论文可以从<Link to="/members">团队成员</Link>的个人主页查看）：</p>
      <ul>
        <li>《增量SAT/SMT问题的求解与应用综述》- 软件学报(CCFA) </li>
        <li>Revisiting Transferable Adversarial Images: Systemization, Evaluation, and New Insights - TPAMI(CCFA)</li>
        <li>Rust-doctor: Enhanced Feature for Rust Ownership and Lifetime Repair with Balanced Training Data Generation - ACL-EMNLP(CCFB)</li>
        <li>Function Clustering-Based Fuzzing Termination: Toward Smarter Early Stopping - IEEE-ASE(CCFA)</li>
        <li>Provable Watermarking for Data Poisoning Attacks - NIPS2025(CCFA)</li>
        <li>SeCon-RAG: A Two-Stage Semantic Filtering and Conflict-Free Framework for Trustworthy RAG - NIPS2025(CCFA)</li>
        <li>Analyzing the Power of Chain of Thought through Memorization Capabilities - NIPS2025(CCFA)</li>
      </ul>
    </div>
  )
}
