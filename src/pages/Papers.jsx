export default function Papers() {
  return (
    <div className="container">
      <h1>论文</h1>
      <p>我们团队发表的重要论文：</p>
      <ul>
        <li>《增量SAT/SMT问题的求解与应用综述》- 软件学报(CCFA) </li>
        <li>Revisiting Transferable Adversarial Images: Systemization, Evaluation, and New Insights - TPAMI(CCFA)</li>
        <li>Rust-doctor: Enhanced Feature for Rust Ownership and Lifetime Repair with Balanced Training Data Generation - ACL-EMNLP(CCFB)</li>
        <li>Function Clustering-Based Fuzzing Termination: Toward Smarter Early Stopping - IEEE-ASE(CCFA)</li>
        {/* <li>Provable Watermarking for Data Poisoning Attacks - NIPS2025(CCFA)</li>
        <li>SeCon-RAG: A Two-Stage Semantic Filtering and Conflict-Free Framework for Trustworthy RAG - NIPS2025(CCFA)</li>
        <li>Analyzing the Power of Chain of Thought through Memorization Capabilities - NIPS2025(CCFA)</li> */}
      </ul>
    </div>
  )
}
