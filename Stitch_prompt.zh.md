# Stitch 提示词 · 中文对照版 — 个人网站（AI PM / Builder）

> 本文件是 [Stitch_prompt.md](Stitch_prompt.md) 的中文对照版，仅用于和我自己确认设计意图。**喂给 Stitch 时请使用英文版本。**

## 角色与目标
设计一份高保真桌面端 + 移动端原型，同时承担两件事：（a）面向资深 AI PM 岗位的求职作品集；（b）面向小红书 / GitHub 关注者的"公开学习"通道。两件事必须以**双核**形式平等存在，不能互相嵌套。

## 受众
- **招聘方 / 创业者 / Hiring Manager**——评估资深 AI PM 的产品功力。
- **社交媒体来的关注者**——想看视频/帖子背后这个真实的人。

同一份内容必须对这两类人都站得住。

## 视觉参考 · Signature Move：Editorial 衬线

这个站是**编辑感优先、界面感其次**。整站的标志性视觉决定是：**全站使用编辑感衬线字体**——像一本长文出版物（Stripe Press、Pirate Wires、Every、The Browser Company 的写作页、Anthropic 的研究 posts），而不是 SaaS 落地页。衬线本身就是品牌。**不要退回到 Inter / grotesk 的安全默认。**

具体落到设计上：
- **排版即视觉系统的全部。** Display、heading、body 全部用编辑感衬线。整站看上去像可以读的东西，而不是可以点的东西。
  - **Display 与标题：** 高对比的编辑感 display 衬线——Tiempos Headline / GT Sectra / PP Editorial New / Reckless Neue。大字号、紧字距、有 optical sizing 更好。
  - **正文：** 与之匹配的文本衬线——Tiempos Text / Source Serif Pro / Newsreader。长版心（~65ch），充裕行高（1.6–1.75）。
  - **等宽：** JetBrains Mono / Berkeley Mono / IBM Plex Mono。**只**用于：元信息行、标签、章节小标（`§ POV` 风格）、终端母题、代码。**不用于正文，不用于标题。**
  - **全站任何地方不出现 grotesk sans。** 不要 Inter，不要 Söhne，不要 Geist。UI 控件如果需要"非衬线"的感觉，用等宽顶上。
- **编辑感微表达**（这是"用了一个衬线字体的网站"和"看起来像被编辑过的网站"之间的差距）：
  - About 第一段使用首字下沉（drop cap）。
  - 每个主要区块上方有等宽 kicker 小标：大写 + 字距打开（例：`§ 01 — POSITIONING`）。
  - 真正的排印标点：弯引号、范围用 en-dash、插入语用 em-dash、真正的 ellipsis 字符。
  - About 里可以有一处 pull-quote：单行 display 衬线、大字号、左对齐 hairline 短线。
  - 桌面端可以有 footnote 风格的边注（页边等宽小数字，不用星号）。
- 大量留白。长行高。正文用长版心，元信息用短版心。
- 单色基底（暖白底 + 近黑字）+ **唯一一种**克制的强调色，只在链接和激活态出现。
- 极细分隔线（1px、低对比）。不要投影、渐变、玻璃拟态、不要漂浮在色块上的"圆角卡片岛"。
- 微弱的"终端 / 开机引导"极客母题**仅在两处出现**：首页和联系页。在视觉层级上**衬线主导、终端只在旁边低声补一句"他也写代码"**。终端面板要做得足够小，让 hero 的衬线大标题始终是视觉主角。**不要让终端和衬线在视觉权重上争。**
- 动效：仅微动效。滚动渐入、终端 caret 闪烁、hover 下划线。不要视差、不要大型 hero 动画。

## 硬约束
- **不要任何人物图片。不要头像。不要 stock 图。不要 hero 插画。** 页面必须靠排版、布局、文字母题独自撑住。
- 不要装饰性图标。图标只在有功能时出现（外链箭头、复制按钮）。
- 不要 emoji。
- v1 不做暗色模式开关——选一个模式做透。（默认暖白底；暗色只出现在首页的终端母题里。）
- 完整响应式：桌面 1440 / 平板 834 / 手机 390。

## 信息架构
单页 + 锚点导航，或 5 个独立路由——设计两套都成立，但在原型里**每一页都画成独立屏**：

1. **Home** — 定位 + 分流
2. **About** — 双核的桥
3. **Work** — 求职主引擎
4. **Public Learning / Notes** — 品牌主引擎
5. **Contact** — 双路径收口

顶部常驻导航：左对齐 wordmark（仅显示名字，等宽字体），右对齐链接：`Home · About · Work · Notes · Contact`。桌面端不出现汉堡菜单。移动端折叠为极简 sheet 菜单。

---

## 第 1 页 · Home（定位 + 分流）

目标：用一句话说清我是谁、一眼建立可信度、并把访客分流到两条路径中的一条。这一页**不承载证据**，必须极薄。

布局（从上到下）：

1. **Hero 区（首屏）**
   - 一行式定位标题，超大字号，紧字距。例：*"Product manager, ten years in. Building with AI for the last two."*
   - 标题下面紧跟一行可信度线，等宽字体、较小、低对比：`10y product · 2y AI PM · RAG / Agents / ads & growth`
   - 一个小的"开机引导"终端母题：桌面端在右侧、移动端在下方。这一页**不可交互**，纯品牌信号。3–5 行假终端输出，含蓄地复述定位，结尾是闪烁 caret。等宽、深色面板、强调色用在提示符上。

2. **两个并列 CTA，权重完全相等**
   - 左 CTA：**"See the work →"** ——副标签（等宽）：`for hiring`
   - 右 CTA：**"See what I'm learning in public →"** ——副标签（等宽）：`for following`
   - 同尺寸、同视觉重量、距 hero 同距。这种**物理上的平等**正是"双核"在首页的字面表达。**不要做主次。**

3. **一条 hairline 分隔线，然后结束。** 不要 testimonials、不要精选作品 grid、不要 logo 墙、不要"最新文章"。**忍住。**

---

## 第 2 页 · About（双核的桥）

目标：一份内容服务两类人。招聘方读到的是"他怎么想"（资深信号）；社交媒体来的人读到的是"这就是视频背后那个人"（人格认同）。

内容优先级（自上而下，**顺序锁死，不可调换**）：

1. **产品观** — 2–3 段短文。编辑感排版，长版心（~65ch）。这是资深信号。文案要传达：*可行性优先于好看 · 交付即实战 · 公开学习作为一种方法*。当作一篇文章的开头来写，不是 bio。

2. **职业脉络的叙事化讲法** — 不是简历式罗列。一段散文：从"十年产品"→ "向 AI PM 的转向" → "我现在押注什么"。**这一页里不要出现项岗位列表。**

3. **当下的技术关注点** — 短而密的一段，或一行紧凑的内联列表（逗号分隔、等宽）：`RAG · agent orchestration · evals · ads & growth surfaces · LLM-native product surfaces`。

布局：单栏，最大宽度 ~720px，左对齐。桌面端（≥1024px）有等宽风格的侧栏锚点导航：`§ POV`、`§ Arc`、`§ Focus`——纯导航、不做装饰。移动端隐藏。

**这一页不能出现**：形容词自夸、过往岗位罗列、技能条形图、"趣味事实"区块。

---

## 第 3 页 · Work（求职主引擎）· Signature Move：三态作品集

目标：给招聘方的深度验证面。**这一页的标志性决定是把作品集划分成三个生命周期状态，包含公开的 Killed 区。** 敢公开展示自己亲手杀掉的项目并讲清楚为什么——这是比任何"已交付"项目都更稀缺的资深信号，绝大多数候选人做不到或不敢做。这一页要让访客读到"这是一个有资格公开退掉自己项目的人"。

布局：三个带标签的纵向区段，每段内放卡片，沿用渐进展开。内容宽度 ~880px，单栏。每段上方一个等宽 kicker。

**区段顺序，附 mono kicker：**

### `§ 01 — SHIPPING`（正在做的）
当前活跃、在迭代中的项目。**1–2 张卡片。** 形态和 Shipped 一致，但右侧多一个 mono 状态标签：`[in flight · last updated yyyy.mm]`。标签上的圆点有一个微动效（轻微脉冲），不要喧宾夺主。

### `§ 02 — SHIPPED`（已交付）
传统作品集区。本原型放 **2 张卡片**：
1. **AdPilot** — 旗舰，最前，深读最全。简历主项目。
2. **FIELD CLAW** — 第二位，体现广度。

下面一行收口（等宽、低对比）：`More shipped projects (OMS · Book Curator · Clinic Triage Assistant) — see résumé →`。指针，不是卡片堆——不要再渲染更多 shipped 卡片。

### `§ 03 — KILLED`（已退役，附理由）
**这一区是整页的资深信号中心，视觉上不能被弱化。** 它和 Shipped 完全同权——同卡片宽度、同字号、同 hairline 节奏。和其他两段的差别**只在两个地方，且只在这两个地方**：
- 折叠态卡片标题末尾有一个 mono 小标签：`[killed · yyyy.mm]`。**标题本身不加删除线**——删除线读起来是"失败"，但这一段不是关于失败，是关于清醒。
- 深读第三段替换（见下）。

原型里至少 **1 张、最好 2 张** Killed 卡片，**第一张默认展开**让样式可见。

**卡片状态（三段通用）：**

**卡片（折叠态）——每段都常态可见：**
- 项目名，display 衬线、大字号。
- 一行问题陈述，body 衬线、常规字重。
- 一行等宽元数据：`role · timeframe · stack/domain`。
- Shipping：右侧 `[in flight · last updated yyyy.mm]`。
- Killed：右侧 `[killed · yyyy.mm]`。
- 右边缘 `read →` 提示。

**深读（就地展开，不开 modal，不跳新页）——Shipping & Shipped：**
四段，**顺序锁死**，mono kicker 标签：
1. `§ Problem` — 问题到底是什么 / 用户原本怎么被 underserve。
2. `§ What I did` — 我做了什么，平白讲。
3. `§ Key decisions & tradeoffs` — **资深信号所在**。讲判断，不讲功能列表。2–3 条决策，每条把取舍点出。
4. `§ Outcome & what carried forward` — 结果 + 留下了什么可复用的判断。

**深读（就地展开）——Killed：**
四段，**第三段替换**：
1. `§ Problem` — 我当初相信什么值得做。
2. `§ What I did` — 在停下之前我把它推到了多远。
3. **`§ Why I killed it`** — 明确写清楚为什么杀掉。**当作一个干净的决策来写，不是失败 postmortem。** 可接受的写法举例：*"the market signal we needed never showed up by week 6; continuing would have been ego, not product"*，或 *"the underlying assumption (X) was wrong and re-scoping would have produced a different product than the one worth building."* 这是整页里最稀缺的一段写作，读起来必须**冷静、笃定、不道歉**——绝不带受伤感、不自嘲、也不要炫耀自己敢杀。
4. `§ What it taught me` — 我带进下一件事的、可复用的判断。

**这一页不能出现**：logo grid、技能栈饼图、dashboard 截图、编造的指标、对 Killed 项目的同情式包装、对 Killed 区的视觉弱化（不要灰显、不要 archived 处理、不要默认折叠）。

---

## 第 4 页 · Public Learning / Notes（品牌主引擎）

目标：双核新增的高杠杆页，也是最容易做错的一页。**不要把这一页设计成博客全文。** 把它做成**精选指针索引**。

布局：

1. **极短的引导段（最多 2 句）**说明这是什么：手工精选的 AI 实践笔记索引，每条都指向原始产物（小红书帖 / GitHub repo / gist / thread）。**"索引、不是仓库"这件事要在文案里讲清楚。**

2. **索引本体。** 纵向列表，**不是 card grid**。每条包含：
   - 短而锋利的标题，一行。
   - 下面一句话"为什么值得你看"，低对比。
   - 右侧一行等宽元数据：`→ xiaohongshu` / `→ github` / `→ thread`，带外链小箭头。
   - 最右侧日期，等宽、低对比。
   - 条目之间只用 hairline 分隔——不要 box、不要 shadow。
   - 占位 6–8 条。

3. **小型"working in public"状态块**：桌面端右上，移动端置顶。标题 `§ now`（等宽）。内容：2–3 行当前在做/在想什么，带日期。刻意做得轻——证明在线，但**不变成微博**。

**这一页不能出现**：长文正文、评论区、RSS 全文摘要、标签云、搜索框。

---

## 第 5 页 · Contact（双路径收口）

目标：双核在收口面的字面表达。两条路径、权重相等、不偏废。

布局：桌面端两列、移动端纵向堆叠。两列同宽、同视觉重量，中间一条纵向 hairline。

**左列 · `§ for hiring`**（等宽标签）：
- 一句话邀请招聘方对话。
- 清晰的路径：`Résumé (PDF) →`、`Selected PRD →`、`Email`、`WeChat`。
- Email 和 WeChat 做成"复制到剪贴板"，不是直接展示纯文本。

**右列 · `§ for following`**（等宽标签）：
- 一句话邀请关注者建立连接。
- 清晰的路径：`Xiaohongshu →`、`GitHub →`、可选 `RSS`。

两列下方、整页通栏，呼应首页的**终端母题**，**这次轻交互**：输入识别命令（如 `resume`、`xhs`、`email`）跳到上面的对应目的地。做小、可选、低存在感——给极客访客的彩蛋，不是主路径。下面给一行等宽提示展示一个示例命令。

---

## 全站 Footer
一条 hairline 分隔的页脚。左：名字 + © 年份，等宽。右：一行 colophon，列字体和技术栈（`Built with React · Vite · Tailwind`）。仅此而已。

## 组件与样式 token（给 Stitch 可抓的把手）
- **字体族：**
  - `display` 编辑感 display 衬线（Tiempos Headline / GT Sectra / PP Editorial New / Reckless Neue）。
  - `body` 编辑感 text 衬线（Tiempos Text / Source Serif Pro / Newsreader）。
  - `mono` JetBrains Mono / Berkeley Mono / IBM Plex Mono——仅元信息、kicker、终端。
  - **全站不出现 grotesk sans。**
- **字号体系（桌面端，比上一版更编辑感——display 更大，body 略大以兼顾衬线易读）：** display 72/76（hero）和 56/60（页面开头），h1 44/52，h2 30/38，body 18/30，small 14/22，mono 12/20，kicker mono 11/16 全大写、字距 +0.12em。
- **编辑感细节：**
  - About 第一段首字下沉——4 行高、display 衬线、可少量使用 accent 色。
  - 每个主要区块上方都有 kicker：mono 11/16、全大写、字距打开、低对比，以 `§ NN — ` 开头。
  - 弯引号、en/em dash、真正的 ellipsis 字符。**任何地方都不用直引号。**
- **颜色 token：** `bg` 暖白（约 #FAFAF7）、`fg` 近黑（约 #111）、`muted` ~55% 灰、`rule` ~12% 黑（hairline）、`accent` 单一克制色——**三选一**：低饱和蓝紫、去饱和赤陶、墨蓝。`terminal-bg` 近黑、`terminal-fg` 近白、`terminal-accent` 同 accent。
- **间距：** 8pt 网格。区段纵向节奏：桌面 120–160px（比 SaaS 站更松——这是出版物），移动 72px。
- **圆角：** 分隔线、内联元素、编辑感区块 0px；只在终端面板这种确实需要的地方上到 6px 上限。
- **描边：** 仅 1px hairline，低对比（`rule` token）。

## 期望 Stitch 输出
- 全部 5 页的桌面端高保真，**整站只用编辑感衬线 + 等宽**（不出现 grotesk sans）。
- 全部 5 页的移动端帧。
- 首页和联系页的终端母题以**真实组件**形式呈现，且尺寸要控制——确保 hero 的衬线大标题始终主导视觉。
- Work 页必须**完整呈现三段**（`Shipping` / `Shipped` / `Killed`），且**等视觉权重**；Shipped 区 AdPilot 展开、Killed 区第一张展开，让两种深读模式都可见。
- About 页必须包含首字下沉、至少一处等宽 kicker、最好再有一处 pull-quote，让编辑感不容错认。
- Notes 页索引列表用真实占位文案（一句话价值线），**不要 lorem ipsum**。

## 占位文案的语气
生成占位文案时，写得像一个想清楚事情的资深 PM，不是营销站。短句。**避免**这些词：*passionate*、*innovative*、*cutting-edge*。优先用具体的名词和动词。不确定的话，**砍掉**。
