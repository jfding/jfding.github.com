import { useState } from "react";

const data = [
  {
    cat: "Explaining 解释",
    color: "#7F77DD",
    bg: "#EEEDFE",
    models: [
      { n: "Hanlon's Razor", cn: "汉隆剃刀", f: 1, d: "Don't assume malice when carelessness explains it.", dc: "能用粗心解释的，别归咎于恶意。" },
      { n: "Occam's Razor", cn: "奥卡姆剃刀", f: 1, d: "Prefer the hypothesis with fewest assumptions.", dc: "优先选择假设最少的解释。" },
      { n: "Cognitive Biases", cn: "认知偏差", f: 1, d: "Systematic thinking patterns that deviate from rationality.", dc: "系统性地偏离理性判断的思维模式。" },
      { n: "First Principles", cn: "第一性原理", f: 1, d: "Reason from foundational truths, not by analogy.", dc: "从根本事实出发推理，而非类比。" },
      { n: "Proximate vs Root Cause", cn: "近因 vs 根因", f: 1, d: "Distinguish immediate triggers from deeper reasons.", dc: "区分直接触发因素和深层原因。" },
    ],
  },
  {
    cat: "Modeling 建模",
    color: "#1D9E75",
    bg: "#E1F5EE",
    models: [
      { n: "Thought Experiment", cn: "思想实验", f: 1, d: "Think through consequences of a hypothesis.", dc: "推演假设的后果。" },
      { n: "Systems Thinking", cn: "系统思维", f: 1, d: "Consider the whole system, not just parts.", dc: "考虑整个系统而非仅看局部。" },
      { n: "Scenario Analysis", cn: "情景分析", f: 1, d: "Analyze possible futures by considering alternatives.", dc: "通过考虑不同可能来分析未来。" },
      { n: "Power-law", cn: "幂律分布", f: 1, d: "A small change in one quantity causes proportional change in another.", dc: "一个量的小变化引起另一个量的比例变化。" },
      { n: "Normal Distribution", cn: "正态分布", f: 1, d: "Many independent processes sum to a bell curve.", dc: "许多独立过程之和呈钟形曲线。" },
      { n: "Sensitivity Analysis", cn: "敏感性分析", f: 1, d: "How uncertainty in inputs affects output.", dc: "输入的不确定性如何影响输出。" },
      { n: "Cost-benefit Analysis", cn: "成本效益分析", f: 1, d: "Systematically weigh strengths and weaknesses of options.", dc: "系统地权衡各选项的利弊。" },
      { n: "Simulation", cn: "模拟仿真", f: 3, d: "Imitate real-world processes over time.", dc: "模拟现实世界过程随时间的变化。" },
      { n: "Pareto Efficiency", cn: "帕累托效率", f: 3, d: "No one can be made better off without making another worse off.", dc: "不可能在不损害他人的情况下改善任何人。" },
    ],
  },
  {
    cat: "Physics 物理学",
    color: "#D85A30",
    bg: "#FAECE7",
    models: [
      { n: "Critical Mass", cn: "临界质量", f: 2, d: "Minimum amount needed for self-sustaining reaction.", dc: "引发自持反应所需的最小量。" },
      { n: "Activation Energy", cn: "活化能", f: 2, d: "Minimum energy needed to start a reaction.", dc: "启动反应所需的最低能量。" },
      { n: "Catalyst", cn: "催化剂", f: 2, d: "Something that speeds up change without being consumed.", dc: "加速变化但自身不被消耗的事物。" },
      { n: "Leverage", cn: "杠杆", f: 2, d: "Force amplification through tools or systems.", dc: "通过工具或系统放大力量。" },
      { n: "Inertia", cn: "惯性", f: 2, d: "Resistance to change in current state.", dc: "对改变当前状态的抵抗。" },
      { n: "Half-life", cn: "半衰期", f: 2, d: "Time for quantity to reduce to half.", dc: "数量减少到一半所需的时间。" },
    ],
  },
  {
    cat: "Brainstorming 头脑风暴",
    color: "#D4537E",
    bg: "#FBEAF0",
    models: [
      { n: "Lateral Thinking", cn: "横向思维", f: 1, d: "Solve problems through indirect, creative approaches.", dc: "通过间接、创造性的方式解决问题。" },
      { n: "Divergent vs Convergent", cn: "发散 vs 聚合思维", f: 1, d: "Generate many ideas, then narrow to one solution.", dc: "先产生多种想法，再收敛到一个方案。" },
      { n: "Crowdsourcing", cn: "众包", f: 2, d: "Obtain ideas from a large group of people.", dc: "从大量人群中获取想法。" },
      { n: "Paradigm Shift", cn: "范式转换", f: 2, d: "Fundamental change in basic concepts of a discipline.", dc: "学科基本概念的根本性变化。" },
    ],
  },
  {
    cat: "Experimenting 实验",
    color: "#378ADD",
    bg: "#E6F1FB",
    models: [
      { n: "Scientific Method", cn: "科学方法", f: 1, d: "Observe, hypothesize, test, modify.", dc: "观察、假设、测试、修正。" },
      { n: "Proxy", cn: "代理变量", f: 1, d: "Use a measurable stand-in for what you can't measure.", dc: "用可测量的替代指标来代替不可测的变量。" },
      { n: "Selection Bias", cn: "选择偏差", f: 1, d: "Non-representative sample due to improper selection.", dc: "因不当选择导致样本不具代表性。" },
      { n: "Response Bias", cn: "回应偏差", f: 1, d: "Participants give inaccurate responses.", dc: "参与者给出不准确的回答。" },
      { n: "Observer Effect", cn: "观察者效应", f: 2, d: "Observation itself changes the phenomenon.", dc: "观察行为本身改变了被观察的现象。" },
      { n: "Survivorship Bias", cn: "幸存者偏差", f: 2, d: "Focus on survivors while overlooking those who didn't make it.", dc: "只关注幸存者，忽略了失败者。" },
    ],
  },
  {
    cat: "Interpreting 解读",
    color: "#639922",
    bg: "#EAF3DE",
    models: [
      { n: "Order of Magnitude", cn: "数量级", f: 1, d: "Estimate rounded to nearest power of ten.", dc: "估算值四舍五入到最近的十的幂。" },
      { n: "Major vs Minor Factors", cn: "主因 vs 次因", f: 1, d: "Focus on what explains most of the result.", dc: "关注解释大部分结果的因素。" },
      { n: "False Positives/Negatives", cn: "假阳性/假阴性", f: 1, d: "Type I and Type II errors in testing.", dc: "检测中的第一类和第二类错误。" },
      { n: "Confidence Interval", cn: "置信区间", f: 1, d: "Range of likely values for an unknown parameter.", dc: "未知参数可能值的范围。" },
      { n: "Bayes' Theorem", cn: "贝叶斯定理", f: 2, d: "Update probability with new evidence.", dc: "根据新证据更新概率。" },
      { n: "Regression to the Mean", cn: "均值回归", f: 2, d: "Extremes tend to move back toward average.", dc: "极端值趋向于回归平均值。" },
      { n: "Inflection Point", cn: "拐点", f: 2, d: "Where a curve changes direction of bending.", dc: "曲线弯曲方向发生变化的点。" },
      { n: "Simpson's Paradox", cn: "辛普森悖论", f: 3, d: "A trend reverses when groups are combined.", dc: "分组中的趋势在合并后逆转。" },
    ],
  },
  {
    cat: "Deciding 决策",
    color: "#BA7517",
    bg: "#FAEEDA",
    models: [
      { n: "Business Case", cn: "商业论证", f: 1, d: "Reasoning for initiating a project.", dc: "启动项目的理由论证。" },
      { n: "Opportunity Cost", cn: "机会成本", f: 1, d: "Value of the best alternative you gave up.", dc: "放弃的最佳替代方案的价值。" },
      { n: "Intuition", cn: "直觉", f: 1, d: "Personal experience encoded in your neural network.", dc: "编码在个人神经网络中的经验。" },
      { n: "Local vs Global Optimum", cn: "局部 vs 全局最优", f: 1, d: "Best nearby solution vs best overall solution.", dc: "附近最优解 vs 整体最优解。" },
      { n: "Decision Trees", cn: "决策树", f: 1, d: "Tree-like model of decisions and consequences.", dc: "决策及其后果的树状模型。" },
      { n: "Sunk Cost", cn: "沉没成本", f: 1, d: "Already-spent cost that can't be recovered.", dc: "已经花费且无法收回的成本。" },
      { n: "Availability Bias", cn: "可得性偏差", f: 1, d: "Overweigh recent or vivid information.", dc: "过度依赖最近或印象深刻的信息。" },
      { n: "Confirmation Bias", cn: "确认偏差", f: 1, d: "Favor info that confirms existing beliefs.", dc: "偏好证实已有信念的信息。" },
      { n: "Loss Aversion", cn: "损失厌恶", f: 3, d: "Losses feel worse than equivalent gains feel good.", dc: "损失带来的痛苦大于同等收益的快乐。" },
    ],
  },
  {
    cat: "Reasoning 推理",
    color: "#E24B4A",
    bg: "#FCEBEB",
    models: [
      { n: "Anecdotal", cn: "轶事谬误", f: 1, d: "Using isolated examples instead of solid evidence.", dc: "用个别案例代替可靠证据。" },
      { n: "False Cause", cn: "假因谬误", f: 1, d: "Correlation doesn't imply causation.", dc: "相关性不代表因果关系。" },
      { n: "Straw Man", cn: "稻草人谬误", f: 1, d: "Refuting a distorted version of the argument.", dc: "反驳一个被歪曲的论点。" },
      { n: "Appeal to Emotion", cn: "诉诸情感", f: 1, d: "Using emotion instead of valid argument.", dc: "用情感代替有效论证。" },
      { n: "Ad Hominem", cn: "人身攻击", f: 1, d: "Attacking the person, not the argument.", dc: "攻击人而非攻击论点。" },
      { n: "Slippery Slope", cn: "滑坡谬误", f: 1, d: "Claiming one event will inevitably lead to extremes.", dc: "声称一件事必然导致极端后果。" },
      { n: "Black or White", cn: "非黑即白", f: 1, d: "Presenting only two options when more exist.", dc: "只提供两个选项而忽略其他可能。" },
      { n: "Bandwagon", cn: "从众效应", f: 1, d: "Assuming something is valid because many believe it.", dc: "因为多数人相信就认为是对的。" },
    ],
  },
  {
    cat: "Negotiating 谈判",
    color: "#534AB7",
    bg: "#EEEDFE",
    models: [
      { n: "The Third Story", cn: "第三方视角", f: 1, d: "An impartial version both sides can agree on.", dc: "双方都能接受的客观版本。" },
      { n: "Active Listening", cn: "积极倾听", f: 1, d: "Fully concentrate, understand, respond, remember.", dc: "全神贯注、理解、回应、记住。" },
      { n: "Trade-offs", cn: "权衡取舍", f: 1, d: "Gaining one thing requires giving up another.", dc: "获得一样东西需要放弃另一样。" },
      { n: "Incentives", cn: "激励机制", f: 1, d: "Motivators that drive behavior.", dc: "驱动行为的动力机制。" },
      { n: "BATNA", cn: "最佳替代方案", f: 2, d: "Best alternative if negotiation fails.", dc: "谈判失败时的最佳替代方案。" },
      { n: "Zero-sum vs Non-zero-sum", cn: "零和 vs 非零和", f: 2, d: "One's gain = other's loss, or both can win.", dc: "一方所得=另一方所失，或双赢。" },
      { n: "Prisoner's Dilemma", cn: "囚徒困境", f: 3, d: "Rational individuals may not cooperate even when it helps both.", dc: "理性个体即使合作对双方有利也可能不合作。" },
    ],
  },
  {
    cat: "Mitigating 风险缓解",
    color: "#0F6E56",
    bg: "#E1F5EE",
    models: [
      { n: "Unintended Consequences", cn: "意外后果", f: 1, d: "Outcomes not foreseen by a purposeful action.", dc: "有目的的行动产生的未预见结果。" },
      { n: "Preserving Optionality", cn: "保留选择权", f: 2, d: "Keep options open until uncertainties resolve.", dc: "在不确定性消除前保持选项开放。" },
      { n: "Precautionary Principle", cn: "预防原则", f: 2, d: "When in doubt about harm, err on side of caution.", dc: "对潜在危害存疑时，宁可谨慎。" },
      { n: "Short-termism", cn: "短期主义", f: 2, d: "Excessive focus on short-term at expense of long-term.", dc: "过度关注短期利益而牺牲长期。" },
    ],
  },
  {
    cat: "Managing 管理",
    color: "#854F0B",
    bg: "#FAEEDA",
    models: [
      { n: "Weekly 1-1s", cn: "每周一对一", f: 1, d: "Regular check-ins for speed and agility.", dc: "定期沟通以提高速度和灵活性。" },
      { n: "Forcing Function", cn: "强制函数", f: 1, d: "Something that forces you to take action.", dc: "迫使你采取行动的事物。" },
      { n: "Directly Responsible Individual", cn: "直接责任人", f: 1, d: "One person explicitly owns each task.", dc: "每项任务有一个明确的负责人。" },
      { n: "Pygmalion Effect", cn: "皮格马利翁效应", f: 1, d: "Higher expectations lead to better performance.", dc: "更高的期望带来更好的表现。" },
      { n: "Growth vs Fixed Mindset", cn: "成长 vs 固定心态", f: 2, d: "Abilities can be developed vs are innate.", dc: "能力可以培养 vs 能力是天生的。" },
      { n: "Hindsight Bias", cn: "后见之明偏差", f: 2, d: "Seeing past events as having been predictable.", dc: "认为过去的事件是可预测的。" },
      { n: "Peter Principle", cn: "彼得原理", f: 3, d: "People rise to their level of incompetence.", dc: "人们晋升到其无法胜任的层级。" },
      { n: "Dunbar's Number", cn: "邓巴数", f: 3, d: "~150 stable social relationships max.", dc: "最多维持约150个稳定社交关系。" },
    ],
  },
  {
    cat: "Developing 开发",
    color: "#5F5E5A",
    bg: "#F1EFE8",
    models: [
      { n: "Technical Debt", cn: "技术债务", f: 1, d: "Quick-fix code that costs more to maintain later.", dc: "快速修复的代码后期维护成本更高。" },
      { n: "Binary Search", cn: "二分搜索", f: 1, d: "Efficiently find by repeatedly halving the search space.", dc: "通过反复对半缩小搜索范围来高效查找。" },
      { n: "Divide and Conquer", cn: "分治法", f: 1, d: "Break problems into smaller sub-problems.", dc: "将问题拆分成更小的子问题。" },
      { n: "Design Pattern", cn: "设计模式", f: 1, d: "Reusable solution template for common problems.", dc: "常见问题的可复用解决方案模板。" },
      { n: "Black Box", cn: "黑盒", f: 1, d: "Understand via inputs and outputs, not internals.", dc: "通过输入输出理解，不看内部。" },
      { n: "Moore's Law", cn: "摩尔定律", f: 3, d: "Transistor count doubles roughly every two years.", dc: "晶体管数量大约每两年翻一倍。" },
      { n: "Metcalfe's Law", cn: "梅特卡夫定律", f: 3, d: "Network value grows with the square of users.", dc: "网络价值随用户数的平方增长。" },
    ],
  },
  {
    cat: "Business 商业",
    color: "#993C1D",
    bg: "#FAECE7",
    models: [
      { n: "MVP", cn: "最小可行产品", f: 1, d: "Just enough features to validate learning.", dc: "刚好足够验证学习的功能。" },
      { n: "Product/Market Fit", cn: "产品市场匹配", f: 1, d: "Degree a product satisfies strong market demand.", dc: "产品满足强烈市场需求的程度。" },
      { n: "Reversible vs Irreversible", cn: "可逆 vs 不可逆决策", f: 1, d: "Can you undo the decision easily?", dc: "这个决策能轻松撤回吗？" },
      { n: "Freemium", cn: "免费增值", f: 2, d: "Free basic product, charge for premium features.", dc: "基础产品免费，高级功能收费。" },
      { n: "Open vs Closed Platform", cn: "开放 vs 封闭平台", f: 2, d: "Unrestricted access vs controlled ecosystem.", dc: "无限制访问 vs 受控生态系统。" },
    ],
  },
  {
    cat: "Strategizing 战略",
    color: "#185FA5",
    bg: "#E6F1FB",
    models: [
      { n: "Sustainable Competitive Advantage", cn: "可持续竞争优势", f: 1, d: "Structural factors for long-term outperformance.", dc: "支撑长期领先的结构性因素。" },
      { n: "Core Competency", cn: "核心能力", f: 1, d: "Combined skills that distinguish a firm.", dc: "使公司脱颖而出的综合能力。" },
      { n: "Strategy vs Tactics", cn: "战略 vs 战术", f: 1, d: "Long-term plan vs short-term actions.", dc: "长期规划 vs 短期行动。" },
      { n: "Unknown Unknowns", cn: "未知的未知", f: 2, d: "Risks so unexpected they never occur to you.", dc: "完全出乎意料、从未想到的风险。" },
      { n: "Network Effect", cn: "网络效应", f: 3, d: "Product value increases with more users.", dc: "用户越多，产品价值越高。" },
      { n: "Economies of Scale", cn: "规模经济", f: 3, d: "Cost per unit decreases as scale increases.", dc: "随着规模增加，单位成本降低。" },
    ],
  },
  {
    cat: "Influencing 影响力",
    color: "#D4537E",
    bg: "#FBEAF0",
    models: [
      { n: "Framing", cn: "框架效应", f: 1, d: "Same facts, different perception based on presentation.", dc: "同样的事实，因呈现方式不同感知不同。" },
      { n: "Cialdini's 6 Principles", cn: "西奥迪尼六原则", f: 2, d: "Reciprocity, commitment, social proof, authority, liking, scarcity.", dc: "互惠、承诺、社会认同、权威、喜好、稀缺。" },
      { n: "Paradox of Choice", cn: "选择悖论", f: 3, d: "Too many choices increase anxiety.", dc: "选择太多反而增加焦虑。" },
    ],
  },
  {
    cat: "Competing 竞争",
    color: "#3B6D11",
    bg: "#EAF3DE",
    models: [
      { n: "Supply and Demand", cn: "供给与需求", f: 2, d: "Price settles where supply meets demand.", dc: "价格在供需平衡处稳定。" },
      { n: "Winner Take All", cn: "赢家通吃", f: 2, d: "Market tends toward one dominant player.", dc: "市场趋向于一家独大。" },
      { n: "Barriers to Entry", cn: "进入壁垒", f: 3, d: "Costs new entrants must bear that incumbents don't.", dc: "新进入者必须承担而在位者不需的成本。" },
      { n: "Creative Destruction", cn: "创造性破坏", f: 3, d: "New innovations destroy old economic structures.", dc: "新创新摧毁旧的经济结构。" },
      { n: "Comparative Advantage", cn: "比较优势", f: 3, d: "Produce what you can at lowest relative cost.", dc: "生产你相对成本最低的东西。" },
    ],
  },
  {
    cat: "Learning 学习",
    color: "#534AB7",
    bg: "#EEEDFE",
    models: [
      { n: "Deliberate Practice", cn: "刻意练习", f: 1, d: "Quality of practice matters more than quantity.", dc: "练习质量比数量更重要。" },
      { n: "Dunning-Kruger Effect", cn: "达克效应", f: 3, d: "Unskilled overestimate; skilled underestimate ability.", dc: "能力不足者高估自己；能力强者低估自己。" },
      { n: "Imposter Syndrome", cn: "冒充者综合征", f: 3, d: "High achievers who fear being exposed as fraud.", dc: "高成就者害怕被揭穿为「骗子」。" },
      { n: "Spacing Effect", cn: "间隔效应", f: 3, d: "Spread-out study beats cramming.", dc: "分散学习优于集中突击。" },
    ],
  },
  {
    cat: "Productivity 效率",
    color: "#BA7517",
    bg: "#FAEEDA",
    models: [
      { n: "High-leverage Activities", cn: "高杠杆活动", f: 1, d: "Focus time on what creates disproportionate impact.", dc: "把时间集中在产出不成比例高的事上。" },
      { n: "Makers vs Manager's Schedule", cn: "创造者 vs 管理者时间", f: 1, d: "Makers need long uninterrupted blocks.", dc: "创造者需要长时间不被打断的时间块。" },
      { n: "Murphy's Law", cn: "墨菲定律", f: 2, d: "Anything that can go wrong, will.", dc: "能出错的事一定会出错。" },
      { n: "Parkinson's Law", cn: "帕金森定律", f: 3, d: "Work expands to fill available time.", dc: "工作会膨胀到占满可用时间。" },
    ],
  },
];

const freqLabel = { 1: "Frequent 常用", 2: "Occasional 偶尔", 3: "Rare 少见" };
const freqColor = { 1: "#1D9E75", 2: "#BA7517", 3: "#888780" };

export default function MindMap() {
  const [sel, setSel] = useState(null);
  const [filter, setFilter] = useState(0);

  return (
    <div style={{ fontFamily: "var(--font-sans, system-ui)", color: "var(--color-text-primary, #222)" }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {[0, 1, 2, 3].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            padding: "4px 12px", borderRadius: 16, border: "1px solid var(--color-border-tertiary, #ddd)",
            background: filter === f ? "var(--color-text-primary, #222)" : "transparent",
            color: filter === f ? "var(--color-background-primary, #fff)" : "var(--color-text-secondary, #666)",
            cursor: "pointer", fontSize: 13
          }}>
            {f === 0 ? "All 全部" : freqLabel[f]}
          </button>
        ))}
      </div>

      {sel === null ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
          {data.map((c, i) => {
            let count = filter === 0 ? c.models.length : c.models.filter(m => m.f === filter).length;
            if (count === 0) return null;
            return (
              <div key={i} onClick={() => setSel(i)} style={{
                background: c.bg, borderLeft: `3px solid ${c.color}`, borderRadius: 8,
                padding: "12px 14px", cursor: "pointer", transition: "transform 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                <div style={{ fontWeight: 500, fontSize: 14, color: c.color }}>{c.cat}</div>
                <div style={{ fontSize: 12, color: "var(--color-text-secondary, #777)", marginTop: 4 }}>{count} models</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <button onClick={() => setSel(null)} style={{
            background: "none", border: "none", cursor: "pointer", fontSize: 13,
            color: "var(--color-text-secondary, #666)", marginBottom: 12, padding: 0
          }}>
            ← Back to all categories 返回所有分类
          </button>
          <div style={{
            fontWeight: 500, fontSize: 18, color: data[sel].color, marginBottom: 12, borderBottom: `2px solid ${data[sel].color}`, paddingBottom: 6
          }}>
            {data[sel].cat}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {data[sel].models.filter(m => filter === 0 || m.f === filter).map((m, j) => (
              <div key={j} style={{
                background: data[sel].bg, borderRadius: 8, padding: "10px 14px",
                borderLeft: `3px solid ${freqColor[m.f]}`
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 500, fontSize: 14 }}>{m.n}</span>
                  <span style={{
                    fontSize: 11, padding: "1px 8px", borderRadius: 10,
                    background: freqColor[m.f] + "22", color: freqColor[m.f]
                  }}>
                    {freqLabel[m.f]}
                  </span>
                </div>
                <div style={{ fontSize: 13, color: data[sel].color, fontWeight: 500, marginTop: 2 }}>{m.cn}</div>
                <div style={{ fontSize: 12.5, color: "var(--color-text-secondary, #555)", marginTop: 4, lineHeight: 1.5 }}>
                  {m.d}
                </div>
                <div style={{ fontSize: 12.5, color: "var(--color-text-tertiary, #888)", marginTop: 2, lineHeight: 1.5 }}>
                  {m.dc}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: 16, fontSize: 11, color: "var(--color-text-tertiary, #aaa)", textAlign: "center" }}>
        Based on Gabriel Weinberg's "Mental Models I Find Repeatedly Useful" · 基于 Gabriel Weinberg 的心智模型文章
      </div>
    </div>
  );
}
