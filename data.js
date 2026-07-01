// ============================================================
// 沪教牛津版四年级下册 语法知识数据
// ============================================================

const GRAMMAR_DATA = [
  {
    id: 1,
    title: "Unit 1",
    subtitle: "What is your daily schedule?",
    icon: "\u23F0",
    color: "#FF6B6B",
    bgGradient: "linear-gradient(135deg, #FF6B6B 0%, #FFA07A 100%)",
    description: "学习时间的表达方式、a.m./p.m.、时间介词 at/on/in 的用法",
    knowledgePoints: [
      {
        title: "时间的表达方式",
        explanation: "英语中有多种表达时间的方法，最常用的是直接读数字法和 past/to 介词法。",
        rules: [
          { rule: "整点表达", detail: "数字 + o'clock", example: "7:00 = seven o'clock", translation: "七点整" },
          { rule: "半点表达", detail: "half past + 小时", example: "3:30 = half past three", translation: "三点半" },
          { rule: "一刻（15分钟）", detail: "a quarter past + 小时", example: "9:15 = a quarter past nine", translation: "九点一刻" },
          { rule: "差一刻（45分钟）", detail: "a quarter to + 下一小时", example: "9:45 = a quarter to ten", translation: "差一刻十点" },
          { rule: "直接读法", detail: "先读小时再读分钟", example: "5:20 = five twenty", translation: "五点二十" },
          { rule: "past 介词法（<=30分）", detail: "分钟 + past + 小时", example: "2:10 = ten past two", translation: "两点十分" },
          { rule: "to 介词法（>30分）", detail: "(60-分钟) + to + (小时+1)", example: "4:50 = ten to five", translation: "差十分五点" }
        ]
      },
      {
        title: "a.m. 和 p.m. 的用法",
        explanation: "a.m. 表示上午（从午夜0:00到中午12:00），p.m. 表示下午（从中午12:00到午夜12:00）。",
        rules: [
          { rule: "a.m.（上午）", detail: "从凌晨0:00到中午12:00", example: "8:00 a.m.", translation: "上午八点" },
          { rule: "p.m.（下午）", detail: "从中午12:00到午夜12:00", example: "3:30 p.m.", translation: "下午三点半" }
        ]
      },
      {
        title: "时间介词 at / on / in 的用法",
        explanation: "at、on、in 是三个常用的时间介词，用法口诀：年月日前用 in，日子前面却要用 on，正午、午夜、时刻 at。",
        rules: [
          { rule: "at", detail: "用于具体时刻、正午、午夜、周末", example: "at 7 o'clock, at noon, at midnight, at weekends", translation: "在七点、在正午、在午夜、在周末" },
          { rule: "on", detail: "用于具体日期、星期、特定某天", example: "on October 1st, on Monday, on a rainy morning", translation: "在十月一日、在周一、在一个下雨的早晨" },
          { rule: "in", detail: "用于年、月、季节、泛指的上午/下午/晚上", example: "in 2026, in May, in spring, in the morning", translation: "在2026年、在五月、在春天、在上午" }
        ]
      },
      {
        title: "What time 和 When 的区别",
        explanation: "What time 专门询问具体时间点；When 用法更广，既可以问具体时间，也可以问大概什么时候。",
        rules: [
          { rule: "What time", detail: "询问具体时间点", example: "What time is it?", translation: "现在几点了？" },
          { rule: "When", detail: "可问具体时间，也可问大概时间", example: "When do you go to school?", translation: "你什么时候去上学？" }
        ]
      },
      {
        title: "go home 和 come home 的区别",
        explanation: "go home 表示回家，说话人不在家里；come home 也表示回家，但说话人在家里。",
        rules: [
          { rule: "go home", detail: "说话人不在家", example: "I go home at 5 p.m.", translation: "我下午五点回家。" },
          { rule: "come home", detail: "说话人在家", example: "Please come home early.", translation: "请早点回家。" }
        ]
      }
    ],
    keySentences: [
      { en: "I get up at 7 a.m.", zh: "我早上七点起床。" },
      { en: "I have lunch at 11:30 a.m.", zh: "我十一点半吃午饭。" },
      { en: "I go to school at half past seven.", zh: "我七点半去上学。" },
      { en: "I get home at a quarter to five.", zh: "我差一刻五点到家。" },
      { en: "What time does Li Liang get up?", zh: "李亮什么时候起床？" },
      { en: "My little brother Li Liang gets up at eight o'clock.", zh: "我的弟弟李亮八点起床。" }
    ],
    pronunciation: {
      title: "字母组合发音",
      groups: [
        { combo: "pl", sound: "/pl/", words: ["play 玩", "place 地方", "plane 飞机", "please 请"] },
        { combo: "bl", sound: "/bl/", words: ["blue 蓝色", "black 黑色", "blouse 女士衬衫", "blind 失明的"] }
      ]
    }
  },
  {
    id: 2,
    title: "Unit 2",
    subtitle: "What do we like about school?",
    icon: "\uD83D\uDCDA",
    color: "#4ECDC4",
    bgGradient: "linear-gradient(135deg, #4ECDC4 0%, #44A8A0 100%)",
    description: "学习第三人称单数变化规则、助动词 does 的用法",
    knowledgePoints: [
      {
        title: "第三人称单数变化规则",
        explanation: "当主语是 he/she/it/人名/单数名词/不可数名词时，谓语动词要加 -s 或 -es。",
        rules: [
          { rule: "一般情况", detail: "直接加 -s", example: "like - likes, work - works", translation: "" },
          { rule: "以 s/x/ch/sh/o 结尾", detail: "加 -es", example: "pass - passes, teach - teaches, go - goes", translation: "" },
          { rule: "辅音字母+y 结尾", detail: "变 y 为 i 加 -es", example: "study - studies, fly - flies", translation: "" },
          { rule: "特殊变化", detail: "do - does, have - has", example: "He has different lessons.", translation: "他有不同的课。" }
        ]
      },
      {
        title: "助动词 does 的用法",
        explanation: "does 是 do 的第三人称单数否定和疑问形式，用于主语是 he/she/it 等第三人称单数时。",
        rules: [
          { rule: "否定句", detail: "主语 + does not (doesn't) + 动词原形 + 其他", example: "She doesn't like painting.", translation: "她不喜欢画画。" },
          { rule: "一般疑问句", detail: "Does + 主语 + 动词原形 + 其他?", example: "Does she like painting?", translation: "她喜欢画画吗？" },
          { rule: "肯定回答", detail: "Yes, 主语 + does.", example: "Yes, she does.", translation: "是的，她喜欢。" },
          { rule: "否定回答", detail: "No, 主语 + doesn't.", example: "No, she doesn't.", translation: "不，她不喜欢。" },
          { rule: "特殊疑问句", detail: "疑问词 + does + 主语 + 动词原形 + 其他?", example: "What subject does she like?", translation: "她喜欢什么科目？" }
        ]
      },
      {
        title: "like / love / favourite 的区别",
        explanation: "like 表示喜欢，love 表示热爱（感情更强烈），favourite 表示最喜欢的（最高级别）。",
        rules: [
          { rule: "like", detail: "表示喜欢", example: "I like Chinese.", translation: "我喜欢语文。" },
          { rule: "love", detail: "表示热爱，感情更强烈", example: "I love Chinese.", translation: "我热爱语文。" },
          { rule: "favourite", detail: "表示最喜欢的，最高级别", example: "My favourite subject is Chinese.", translation: "我最喜欢的科目是语文。" }
        ]
      }
    ],
    keySentences: [
      { en: "What subjects do you have at school?", zh: "你们学校学哪些学科？" },
      { en: "On Monday, my first lesson is Chinese.", zh: "周一我的第一节课是语文课。" },
      { en: "Peter likes swimming and Wang Min likes playing football.", zh: "彼得喜欢游泳，王敏喜欢踢足球。" },
      { en: "Does she like painting? No, she doesn't.", zh: "她喜欢画画吗？不，她不喜欢。" },
      { en: "What subject does she like? She likes PE.", zh: "她喜欢什么科目？她喜欢体育。" },
      { en: "We go to different clubs after school.", zh: "放学后我们去不同的社团。" }
    ],
    pronunciation: {
      title: "字母组合发音",
      groups: [
        { combo: "fl", sound: "/fl/", words: ["flag 旗", "fly 飞", "flower 花", "flat 公寓"] },
        { combo: "cl", sound: "/cl/", words: ["club 俱乐部", "class 班级", "clock 时钟", "cloud 云"] }
      ]
    }
  },
  {
    id: 3,
    title: "Unit 3",
    subtitle: "What's great about jobs?",
    icon: "\uD83D\uDC68\u200D\u2695\uFE0F",
    color: "#45B7D1",
    bgGradient: "linear-gradient(135deg, #45B7D1 0%, #2E86AB 100%)",
    description: "学习职业词汇后缀 -er、Mr/Mrs/Miss/Ms 的用法、询问职业的句型",
    knowledgePoints: [
      {
        title: "派生法构职业词（后缀 -er）",
        explanation: "在很多动词后面加上 -er 可以构成表示做该动作的人的职业名词。",
        rules: [
          { rule: "动词 + er = 职业名词", detail: "表示做该动作的人", example: "teach - teacher, drive - driver, work - worker", translation: "教-老师，驾驶-司机，工作-工人" },
          { rule: "特殊变化", detail: "注意有些词的变化不规则", example: "cook - cook（厨师）, write - writer, dance - dancer, act - actor", translation: "厨师、作家、舞者、演员" }
        ]
      },
      {
        title: "Mr / Mrs / Miss / Ms 的用法",
        explanation: "这四个称谓用于姓名前，表示对不同性别和婚姻状况人士的称呼。",
        rules: [
          { rule: "Mr", detail: "用于男性，无论婚否", example: "Mr Smith", translation: "史密斯先生" },
          { rule: "Miss", detail: "用于未婚女性", example: "Miss Li", translation: "李小姐" },
          { rule: "Mrs", detail: "用于已婚女性", example: "Mrs Green", translation: "格林夫人" },
          { rule: "Ms", detail: "用于女性，不指明婚否", example: "Ms Wang", translation: "王女士" }
        ]
      },
      {
        title: "What do/does + 主语 + do? 询问职业",
        explanation: "这个句型用于询问某人的职业，根据主语人称选择 do 或 does。",
        rules: [
          { rule: "第二人称", detail: "What do you do?", example: "What do you do? I am a teacher.", translation: "你是做什么的？我是老师。" },
          { rule: "第三人称单数", detail: "What does he/she do?", example: "What does she do? She is a dentist.", translation: "她是做什么的？她是牙医。" },
          { rule: "第三人称复数", detail: "What do they do?", example: "What do they do? They are doctors.", translation: "他们是做什么的？他们是医生。" },
          { rule: "同义句型", detail: "What's your job?", example: "What's your job?", translation: "你的工作是什么？" }
        ]
      },
      {
        title: "want to be 句型",
        explanation: "want to be 表示想要成为某人/某职业，第三人称单数用 wants to be。",
        rules: [
          { rule: "I/You/They + want to be", detail: "我/你/他们想要成为...", example: "I want to be a teacher.", translation: "我想成为一名老师。" },
          { rule: "He/She + wants to be", detail: "他/她想要成为...", example: "She wants to be a dentist.", translation: "她想成为一名牙医。" },
          { rule: "询问未来职业", detail: "What do/does + 主语 + want to be?", example: "What does she want to be? She wants to be a nurse.", translation: "她想成为什么？她想当护士。" }
        ]
      }
    ],
    keySentences: [
      { en: "A bus driver drives a bus.", zh: "公交车司机驾驶公交车。" },
      { en: "A firefighter puts out fires.", zh: "消防员灭火。" },
      { en: "A teacher helps students learn.", zh: "老师帮助学生学。" },
      { en: "What does she do? She is a dentist.", zh: "她是做什么的？她是一名牙医。" },
      { en: "You should brush your teeth twice or three times a day.", zh: "你应该每天刷牙两到三次。" },
      { en: "What does he want to be?", zh: "他想成为什么？" }
    ],
    pronunciation: {
      title: "字母组合发音",
      groups: [
        { combo: "br", sound: "/br/", words: ["brush 刷", "brother 兄弟", "bread 面包", "brown 棕色"] }
      ]
    }
  },
  {
    id: 4,
    title: "Unit 4",
    subtitle: "How can we make music",
    icon: "\uD83C\uDFB8",
    color: "#96CEB4",
    bgGradient: "linear-gradient(135deg, #96CEB4 0%, #6BAA8F 100%)",
    description: "学习 play 的用法、现在进行时、What 感叹句、否定疑问句",
    knowledgePoints: [
      {
        title: "play 的用法",
        explanation: "play 有多种含义：玩游戏、弹奏乐器、参加球类运动、扮演角色。注意弹奏乐器要加 the。",
        rules: [
          { rule: "玩游戏", detail: "play + 游戏", example: "The kids are playing in the garden.", translation: "孩子们在花园里玩。" },
          { rule: "弹奏乐器", detail: "play + the + 乐器", example: "She can play the piano.", translation: "她会弹钢琴。" },
          { rule: "参加球类运动", detail: "play + 球类（不加 the）", example: "He likes playing basketball.", translation: "他喜欢打篮球。" },
          { rule: "扮演角色", detail: "play + 角色", example: "She plays a teacher in the play.", translation: "她在剧中扮演老师。" }
        ]
      },
      {
        title: "现在进行时",
        explanation: "现在进行时表示此时此刻正在进行的动作。结构：主语 + am/is/are + 动词-ing。",
        rules: [
          { rule: "肯定句", detail: "主语 + am/is/are + 动词-ing", example: "I am playing the piano.", translation: "我正在弹钢琴。" },
          { rule: "否定句", detail: "主语 + am/is/are + not + 动词-ing", example: "I am not playing the guitar.", translation: "我没有在弹吉他。" },
          { rule: "一般疑问句", detail: "Am/Is/Are + 主语 + 动词-ing?", example: "Are you playing the piano?", translation: "你在弹钢琴吗？" },
          { rule: "动词-ing 变化 - 一般", detail: "直接加 -ing", example: "play - playing, look - looking", translation: "" },
          { rule: "动词-ing 变化 - 去e", detail: "以不发音 e 结尾，去 e 加 -ing", example: "take - taking, write - writing", translation: "" },
          { rule: "动词-ing 变化 - 双写", detail: "重读闭音节结尾，双写末尾字母加 -ing", example: "run - running, hit - hitting", translation: "" }
        ]
      },
      {
        title: "What 感叹句",
        explanation: "What 引导的感叹句结构：What + a/an + 形容词 + 名词（单数）+ 主语 + 谓语！",
        rules: [
          { rule: "What 感叹句结构", detail: "What + a/an + 形容词 + 名词 + 主语 + 谓语!", example: "What a wonderful concert!", translation: "多么精彩的音乐会啊！" },
          { rule: "更多例句", detail: "", example: "What a beautiful song!", translation: "多么美妙的歌曲啊！" }
        ]
      },
      {
        title: "否定疑问句",
        explanation: "否定疑问句用于表示惊讶或强调，如 Isn't it...? 意为 难道不是...吗？",
        rules: [
          { rule: "否定疑问句", detail: "be动词否定式 + 主语 + ...?", example: "Isn't it a clever idea?", translation: "难道这不是一个很棒的主意吗？" },
          { rule: "肯定句变否定疑问句", detail: "将 be 动词变为否定式，提到句首", example: "It is a clever idea. -> Isn't it a clever idea?", translation: "" }
        ]
      }
    ],
    keySentences: [
      { en: "This is a triangle.", zh: "这是一个三角铁。" },
      { en: "The woman can play the violin.", zh: "那个女人会拉小提琴。" },
      { en: "I am playing the piano.", zh: "我正在弹钢琴。" },
      { en: "She is playing the erhu.", zh: "她正在拉二胡。" },
      { en: "What a wonderful concert!", zh: "多么精彩的音乐会啊！" },
      { en: "Isn't it a clever idea?", zh: "难道这不是一个很棒的主意吗？" }
    ],
    pronunciation: {
      title: "字母组合发音",
      groups: [
        { combo: "cr", sound: "/cr/", words: ["crab 螃蟹", "crayon 蜡笔", "cross 穿越", "cream 奶油"] },
        { combo: "gr", sound: "/gr/", words: ["grade 年级", "grass 草", "great 伟大的", "grow 成长"] }
      ]
    }
  },
  {
    id: 5,
    title: "Unit 5",
    subtitle: "How do we make art?",
    icon: "\uD83C\uDFA8",
    color: "#FFEAA7",
    bgGradient: "linear-gradient(135deg, #FFEAA7 0%, #FDCB6E 100%)",
    description: "学习现在进行时一般疑问句、形状词的词性转换、make 的用法",
    knowledgePoints: [
      {
        title: "现在进行时的一般疑问句",
        explanation: "直接把 be 动词提到主语前面即可，用于询问某人是否正在做某事。",
        rules: [
          { rule: "第二人称/复数", detail: "Are + you/they + 动词-ing?", example: "Are you painting pictures?", translation: "你在画画吗？" },
          { rule: "第三人称单数", detail: "Is + he/she/it + 动词-ing?", example: "Is she making a paper-cut?", translation: "她在剪纸吗？" },
          { rule: "第一人称", detail: "Am + I + 动词-ing?", example: "Am I reading a book?", translation: "我在看书吗？" },
          { rule: "肯定回答", detail: "Yes, 主语 + be动词.", example: "Yes, he is.", translation: "是的，他在。" },
          { rule: "否定回答", detail: "No, 主语 + be动词 + not.", example: "No, he isn't.", translation: "不，他没在。" }
        ]
      },
      {
        title: "形状词的名词和形容词词性",
        explanation: "形状词既可以作名词，也可以作形容词修饰其他名词。",
        rules: [
          { rule: "circle（圆形）", detail: "名词/形容词", example: "The clock is a circle. / It's a circle clock.", translation: "钟是圆形的。/ 这是一个圆形的钟。" },
          { rule: "square（正方形）", detail: "名词/形容词", example: "The picture is a square. / It's a square picture.", translation: "图片是方形的。/ 这是一张方形图片。" },
          { rule: "triangle（三角形）", detail: "名词/形容词", example: "The book is a triangle. / It's a triangle book.", translation: "" },
          { rule: "rectangle（长方形）", detail: "名词/形容词", example: "The bed is a rectangle. / It's a rectangle bed.", translation: "" },
          { rule: "star（星形）", detail: "名词/形容词", example: "The card is a star. / It's a star card.", translation: "" },
          { rule: "其他形状", detail: "heart（心形）, oval（椭圆形）, diamond（菱形）", example: "", translation: "" }
        ]
      },
      {
        title: "make 的用法",
        explanation: "make 表示制作，强调创造出新的东西。make with 表示用...来制作。",
        rules: [
          { rule: "make + 物品", detail: "表示制作某物", example: "I can make a paper-cut.", translation: "我会剪纸。" },
          { rule: "make ... with ...", detail: "用某种材料来制作", example: "She makes a doll with cloth.", translation: "她用布做了一个玩偶。" }
        ]
      }
    ],
    keySentences: [
      { en: "I can make a paper-cut.", zh: "我会剪纸。" },
      { en: "A square has four sides and four corners.", zh: "正方形有四条边和四个角。" },
      { en: "A circle does not have corners.", zh: "圆形没有角。" },
      { en: "Are you making a paper-cut?", zh: "你在剪纸吗？" },
      { en: "Is she making a paper-cut? No, she isn't.", zh: "她在剪纸吗？不，她没有。" },
      { en: "I'm painting a picture of a bird and some flowers.", zh: "我在画一只鸟和一些花。" }
    ],
    pronunciation: {
      title: "字母组合发音",
      groups: [
        { combo: "sp", sound: "/sb/", words: ["special 特别的", "space 空间", "sport 运动"] },
        { combo: "st", sound: "/st/", words: ["student 学生", "star 星星", "stone 石头"] }
      ]
    }
  },
  {
    id: 6,
    title: "Unit 6",
    subtitle: "How do we measure time?",
    icon: "\uD83D\uDD50",
    color: "#DDA0DD",
    bgGradient: "linear-gradient(135deg, #DDA0DD 0%, #9B59B6 100%)",
    description: "学习现在进行时特殊疑问句、时间单位名词、What time is it? 句型",
    knowledgePoints: [
      {
        title: "现在进行时的特殊疑问句",
        explanation: "用 What + be动词 + 主语 + doing? 来询问某人正在做什么。",
        rules: [
          { rule: "第二人称/复数", detail: "What are you/they doing?", example: "What are you doing? I am making a pie.", translation: "你在做什么？我在做派。" },
          { rule: "第三人称单数", detail: "What is he/she/it doing?", example: "What is your mum doing? She is helping me.", translation: "你妈妈在做什么？她在帮我。" },
          { rule: "回答注意", detail: "注意人称代词的主格/宾格转换", example: "What is your father doing? He is cooking.", translation: "你爸爸在做什么？他在做饭。" }
        ]
      },
      {
        title: "时间单位名词的用法",
        explanation: "表示时间的量词名词有 day（天）、hour（小时）、minute（分钟）、second（秒）、month（月）、year（年）。",
        rules: [
          { rule: "时间量词", detail: "数字 + 时间单位（复数）", example: "24 hours, 60 minutes, an hour", translation: "24小时、60分钟、一小时" },
          { rule: "A day has 24 hours.", detail: "一天有24小时", example: "A day has 24 hours.", translation: "一天有24小时。" },
          { rule: "One hour has 60 minutes.", detail: "一小时有60分钟", example: "One hour has 60 minutes.", translation: "一小时有60分钟。" },
          { rule: "One minute has 60 seconds.", detail: "一分钟有60秒", example: "One minute has 60 seconds.", translation: "一分钟有60秒。" }
        ]
      },
      {
        title: "What time is it? 询问时间",
        explanation: "What time is it? 专门用来询问当前时间，同义句为 What's the time?。询问某地时间用 in + 地点。",
        rules: [
          { rule: "询问时间", detail: "What time is it?", example: "What time is it? It's three o'clock.", translation: "现在几点了？三点。" },
          { rule: "同义句", detail: "What's the time?", example: "What's the time?", translation: "几点了？" },
          { rule: "询问某地时间", detail: "What time is it in + 地点?", example: "What time is it in Beijing? It's 8 o'clock in the morning.", translation: "北京几点了？早上八点。" }
        ]
      },
      {
        title: "at the same time（同时）",
        explanation: "at the same time 表示同时，可在句首或句末。在现在进行时中，强调同一时刻不同的人在做的事。",
        rules: [
          { rule: "at the same time", detail: "表示同时", example: "They are singing at the same time.", translation: "他们在同时唱歌。" },
          { rule: "句首用法", detail: "也可放在句首", example: "At the same time, the children are playing games.", translation: "与此同时，孩子们在玩游戏。" }
        ]
      }
    ],
    keySentences: [
      { en: "People like to go to the park in the day.", zh: "人们喜欢在白天去公园。" },
      { en: "What time is it?", zh: "现在几点了？" },
      { en: "It's half past eleven. The girl is having lunch.", zh: "十一点半。那个女孩在吃午饭。" },
      { en: "A day has 24 hours.", zh: "一天有24小时。" },
      { en: "What are you doing? I am making a pie.", zh: "你在做什么？我在做派。" },
      { en: "What is your mum doing? She is helping me.", zh: "你妈妈在做什么？她在帮我。" }
    ],
    pronunciation: {
      title: "字母组合发音",
      groups: [
        { combo: "tr", sound: "/tr/", words: ["travel 旅行", "tree 树", "train 火车", "triangle 三角形"] },
        { combo: "dr", sound: "/dr/", words: ["dream 梦想", "draw 画", "drink 喝", "drive 驾驶"] }
      ]
    }
  },
  {
    id: 7,
    title: "Unit 7",
    subtitle: "How do things change",
    icon: "\uD83D\uDD2C",
    color: "#87CEEB",
    bgGradient: "linear-gradient(135deg, #87CEEB 0%, #5BA3D0 100%)",
    description: "学习建议句型 Shall we/Let's、不可数名词、change into、祈使句",
    knowledgePoints: [
      {
        title: "建议类句型",
        explanation: "Shall we...? 用于委婉地提出建议；Let's... 用于提出计划或建议。肯定回答用 Sure!/OK!/Good idea!。",
        rules: [
          { rule: "Shall we...?", detail: "我们...好吗？（委婉建议）", example: "Shall we cut the oranges first?", translation: "我们先切橙子好吗？" },
          { rule: "Let's...", detail: "让我们...吧（提出计划）", example: "Let's make some juice.", translation: "我们做些果汁吧。" },
          { rule: "肯定回答", detail: "Sure! / OK. / Good idea!", example: "Sure!", translation: "当然！" },
          { rule: "委婉拒绝", detail: "Sorry, I am busy now. How about later?", example: "Sorry, I am busy now.", translation: "抱歉，我现在很忙。" }
        ]
      },
      {
        title: "不可数名词的用法",
        explanation: "表示液体、气体的词如 water, air, gas, juice 以及 sugar, salt 是不可数名词，没有复数形式。",
        rules: [
          { rule: "液体/气体", detail: "water, air, gas, juice 等不可数", example: "Water is a liquid.", translation: "水是一种液体。" },
          { rule: "粉末状", detail: "sugar, salt 等不可数", example: "Mix the sugar and cream.", translation: "把糖和奶油混合。" },
          { rule: "无复数形式", detail: "不可数名词不加 -s", example: "I have some water. (不是 waters)", translation: "我有一些水。" }
        ]
      },
      {
        title: "change into 和 turn into",
        explanation: "change into 表示变成，常用于现在进行时，强调状态变化过程；turn into 也表示转变，强调结果转化。",
        rules: [
          { rule: "change into", detail: "强调状态变化过程", example: "The ice is changing into a liquid.", translation: "冰正在变成液体。" },
          { rule: "turn into", detail: "强调结果转化", example: "When does water turn into steam?", translation: "水什么时候变成水蒸气？" }
        ]
      },
      {
        title: "祈使句",
        explanation: "祈使句用于给出指令、建议。肯定形式以动词原形开头；否定形式以 Don't + 动词原形开头。",
        rules: [
          { rule: "肯定祈使句", detail: "动词原形开头", example: "Put the mixture in the freezer.", translation: "把混合物放进冷冻室。" },
          { rule: "否定祈使句", detail: "Don't + 动词原形", example: "Don't touch the hot water.", translation: "不要碰热水。" },
          { rule: "委婉语气", detail: "句末加 please", example: "Please mix the cream and sugar.", translation: "请把奶油和糖混合。" }
        ]
      }
    ],
    keySentences: [
      { en: "Water is a liquid.", zh: "水是一种液体。" },
      { en: "Ice is a solid.", zh: "冰是一种固体。" },
      { en: "Shall we make some more ice cream?", zh: "我们再做一些冰淇淋好吗？" },
      { en: "Let's make some soup. OK.", zh: "我们做些汤吧。好的。" },
      { en: "Mix the sugar and cream.", zh: "把糖和奶油混合。" },
      { en: "It's changing into a solid.", zh: "它正在变成固体。" }
    ],
    pronunciation: {
      title: "字母组合发音",
      groups: [
        { combo: "tr", sound: "/tr/", words: ["travel 旅行", "tree 树", "train 火车", "triangle 三角形"] },
        { combo: "dr", sound: "/dr/", words: ["dream 梦想", "draw 画", "drink 喝", "drive 驾驶"] }
      ]
    }
  },
  {
    id: 8,
    title: "Unit 8",
    subtitle: "How do people get along with each other",
    icon: "\uD83E\uDD1D",
    color: "#FAB1A0",
    bgGradient: "linear-gradient(135deg, #FAB1A0 0%, #E17055 100%)",
    description: "学习一般现在时vs现在进行时、礼貌请求 May I、How 感叹句、祈使句",
    knowledgePoints: [
      {
        title: "一般现在时 vs 现在进行时",
        explanation: "一般现在时表示经常性、习惯性的动作；现在进行时表示此时此刻正在进行的动作。",
        rules: [
          { rule: "一般现在时", detail: "表示经常性动作，用 every day, usually, often 等词", example: "She always takes turns to play games.", translation: "她总是轮流玩游戏。" },
          { rule: "一般现在时否定", detail: "don't/doesn't + 动词原形", example: "He doesn't always take turns in class.", translation: "他在课上不总是轮流。" },
          { rule: "一般现在时疑问", detail: "Do/Does + 主语 + 动词原形?", example: "Do they always help each other?", translation: "他们总是互相帮助吗？" },
          { rule: "现在进行时", detail: "表示正在进行的动作，用 now, at the moment 等词", example: "I am sharing my coloured pencils.", translation: "我正在分享我的彩色铅笔。" },
          { rule: "现在进行时否定", detail: "am/is/are + not + 动词-ing", example: "She is not taking turns in class.", translation: "她在课上没有轮流。" },
          { rule: "现在进行时疑问", detail: "Am/Is/Are + 主语 + 动词-ing?", example: "Are they helping each other now?", translation: "他们现在在互相帮助吗？" }
        ]
      },
      {
        title: "礼貌请求 May I...? 和祈使句",
        explanation: "May I...? 用于礼貌地请求许可；祈使句用于给出指令或建议。",
        rules: [
          { rule: "May I...?", detail: "我可以...吗？（礼貌请求）", example: "May I use your coloured pencils?", translation: "我可以用一下你的彩色铅笔吗？" },
          { rule: "肯定回答", detail: "Sure. / Here you are.", example: "Sure! Here you are.", translation: "当然！给你。" },
          { rule: "否定回答", detail: "Sorry, I'm using it now.", example: "Sorry, I'm using it now.", translation: "抱歉，我现在正在用。" },
          { rule: "祈使句", detail: "用于指令、建议", example: "Knock on the door before you come in.", translation: "进来之前先敲门。" }
        ]
      },
      {
        title: "How 感叹句",
        explanation: "How 引导的感叹句结构：How + 形容词/副词 + 主语 + 谓语！",
        rules: [
          { rule: "How 感叹句结构", detail: "How + 形容词/副词 + 主语 + 谓语!", example: "How kind of him!", translation: "他真好啊！" }
        ]
      },
      {
        title: "behind 介词",
        explanation: "behind 表示在...后面，是方位介词，反义词为 in front of（在...前面）。",
        rules: [
          { rule: "behind", detail: "在...之后/后面", example: "The cat is behind the door.", translation: "猫在门后面。" },
          { rule: "in front of", detail: "在...之前/前面（反义词）", example: "The car is in front of the house.", translation: "车在房子前面。" }
        ]
      }
    ],
    keySentences: [
      { en: "They're very polite.", zh: "他们非常有礼貌。" },
      { en: "We should take turns when we play games.", zh: "我们玩游戏时应该轮流。" },
      { en: "What does May do on Sundays? She often goes to the park.", zh: "梅周日做什么？她经常去公园。" },
      { en: "What is May doing now? She is looking after her brother.", zh: "梅现在在做什么？她在照顾弟弟。" },
      { en: "May I use your coloured pencils?", zh: "我可以用一下你的彩色铅笔吗？" },
      { en: "How kind of him!", zh: "他真好啊！" }
    ],
    pronunciation: {
      title: "字母组合发音",
      groups: [
        { combo: "综合复习", sound: "", words: ["复习本册所有字母组合发音规则"] }
      ]
    }
  }
];

// ============================================================
// 测试题生成器
// ============================================================

const QUESTION_BANK = {
  1: [
    { type: "choice", question: "How do you say 7:00 in English?", options: ["seven o'clock", "half past seven", "a quarter past seven", "seven to eight"], answer: 0, explanation: "整点表达：数字 + o'clock，所以 7:00 = seven o'clock" },
    { type: "choice", question: "How do you say 3:30 in English?", options: ["three thirty only", "half past three", "a quarter past three", "three to four"], answer: 1, explanation: "半点表达：half past + 小时，所以 3:30 = half past three" },
    { type: "choice", question: "How do you say 9:15 in English?", options: ["nine fifteen only", "a quarter to nine", "a quarter past nine", "half past nine"], answer: 2, explanation: "15分钟 = a quarter，a quarter past + 小时 = a quarter past nine" },
    { type: "choice", question: "How do you say 9:45 in English?", options: ["a quarter past nine", "a quarter to ten", "half past nine", "nine forty-five only"], answer: 1, explanation: "45分钟 = 差一刻到下一小时，a quarter to ten" },
    { type: "choice", question: "Which preposition: ___ 7 o'clock", options: ["in", "on", "at", "to"], answer: 2, explanation: "at 用于具体时刻：at 7 o'clock" },
    { type: "choice", question: "Which preposition: ___ Monday", options: ["in", "on", "at", "to"], answer: 1, explanation: "on 用于星期：on Monday" },
    { type: "choice", question: "Which preposition: ___ the morning", options: ["in", "on", "at", "to"], answer: 0, explanation: "in 用于泛指的上午：in the morning" },
    { type: "choice", question: "Which preposition: ___ 2026", options: ["in", "on", "at", "to"], answer: 0, explanation: "in 用于年份：in 2026" },
    { type: "choice", question: "8:00 a.m. means ___", options: ["晚上八点", "上午八点", "下午八点", "凌晨两点"], answer: 1, explanation: "a.m. 表示上午，8:00 a.m. = 上午八点" },
    { type: "choice", question: "3:30 p.m. means ___", options: ["上午三点半", "下午三点半", "晚上三点半", "凌晨三点半"], answer: 1, explanation: "p.m. 表示下午，3:30 p.m. = 下午三点半" },
    { type: "fill", question: "I get up ___ 7 a.m.", answer: "at", explanation: "at 用于具体时刻：at 7 a.m." },
    { type: "fill", question: "I go to school at ___ ___ seven. (七点半)", answer: "half past", explanation: "半点表达：half past + 小时" },
    { type: "fill", question: "I get home at a ___ to five. (差一刻五点)", answer: "quarter", explanation: "45分钟 = a quarter to + 下一小时" },
    { type: "fill", question: "What ___ is it? (问时间)", answer: "time", explanation: "What time is it? 询问时间" },
    { type: "fill", question: "I have four lessons ___ the morning.", answer: "in", explanation: "in the morning 是固定搭配" },
    { type: "fill", question: "We raise the national flag ___ Monday.", answer: "on", explanation: "on 用于星期：on Monday" },
    { type: "fill", question: "8:00 ___ means 上午八点. (填 a.m. 或 p.m.)", answer: "a.m.", explanation: "a.m. 表示上午（从午夜到中午）" },
    { type: "fill", question: "3:30 ___ means 下午三点半. (填 a.m. 或 p.m.)", answer: "p.m.", explanation: "p.m. 表示下午（从中午到午夜）" },
    { type: "fill", question: "I ___ home at 5 p.m. (说话人不在家，填go或come)", answer: "go", explanation: "go home 表示回家，说话人不在家" },
    { type: "fill", question: "Please ___ home early. (说话人在家，填go或come)", answer: "come", explanation: "come home 表示回家，说话人在家" },
    { type: "fill", question: "My birthday is ___ May. (填时间介词)", answer: "in", explanation: "in 用于月份：in May" },
    { type: "fill", question: "I play football ___ the weekend. (填时间介词)", answer: "at", explanation: "at 用于周末：at the weekend" }
  ],
  2: [
    { type: "choice", question: "Choose: He ___ swimming.", options: ["like", "likes", "liking", "to like"], answer: 1, explanation: "主语 He 是第三人称单数，动词加 -s：likes" },
    { type: "choice", question: "Choose: She ___ to school every day.", options: ["go", "goes", "going", "went"], answer: 1, explanation: "主语 She 是第三人称单数，go 以 o 结尾加 -es：goes" },
    { type: "choice", question: "Choose: She doesn't ___ painting.", options: ["likes", "like", "liking", "to like"], answer: 1, explanation: "doesn't 后接动词原形：like" },
    { type: "choice", question: "Make a question: ___ she like painting?", options: ["Do", "Does", "Is", "Are"], answer: 1, explanation: "第三人称单数疑问句用 Does，后接动词原形" },
    { type: "choice", question: "Choose: My sister ___ English.", options: ["study", "studys", "studies", "studying"], answer: 2, explanation: "辅音+y结尾，变y为i加-es：studies" },
    { type: "choice", question: "Which changes differently?", options: ["teach -> teaches", "go -> goes", "study -> studies", "like -> likes"], answer: 2, explanation: "study 变y为i加-es，其他分别加-es或-s" },
    { type: "choice", question: "___ she have Maths today? Yes, she ___.", options: ["Do / does", "Does / does", "Does / do", "Do / do"], answer: 1, explanation: "第三人称单数疑问用 Does，肯定回答 Yes, she does" },
    { type: "choice", question: "What subject ___ she like? She likes PE.", options: ["do", "does", "is", "are"], answer: 1, explanation: "第三人称单数特殊疑问句：What subject does she like?" },
    { type: "fill", question: "He ___ (have) different lessons in the school.", answer: "has", explanation: "have 的第三人称单数是 has" },
    { type: "fill", question: "She doesn't ___ (like) painting.", answer: "like", explanation: "doesn't 后接动词原形" },
    { type: "fill", question: "___ she like painting? (一般疑问句)", answer: "Does", explanation: "第三人称单数疑问用 Does" },
    { type: "fill", question: "Peter ___ (like) swimming.", answer: "likes", explanation: "Peter 是第三人称单数，加 -s：likes" },
    { type: "fill", question: "What subject ___ she like? (特殊疑问句)", answer: "does", explanation: "第三人称单数疑问用 does" },
    { type: "fill", question: "Wang Min ___ (like) playing football.", answer: "likes", explanation: "Wang Min 是第三人称单数，加 -s：likes" },
    { type: "fill", question: "I ___ Chinese. (表示喜欢，填like/love/favourite)", answer: "like", explanation: "like 表示喜欢" },
    { type: "fill", question: "I ___ Chinese! (表示热爱，感情更强烈)", answer: "love", explanation: "love 表示热爱，感情比 like 更强烈" },
    { type: "fill", question: "My ___ subject is Chinese. (表示最喜欢的)", answer: "favourite", explanation: "favourite 表示最喜欢的，最高级别" }
  ],
  3: [
    { type: "choice", question: "teach + er = ?", options: ["teaches", "teacher", "teaching", "teached"], answer: 1, explanation: "动词 + er = 职业名词：teach -> teacher（老师）" },
    { type: "choice", question: "drive + er = ?", options: ["drives", "driver", "driving", "drived"], answer: 1, explanation: "动词 + er = 职业名词：drive -> driver（司机）" },
    { type: "choice", question: "A person who cooks is a ___", options: ["cooker", "cook", "cooks", "cooking"], answer: 1, explanation: "cook 的职业名词还是 cook（厨师），这是特殊变化" },
    { type: "choice", question: "___ is used for a married woman?", options: ["Mr", "Miss", "Mrs", "Ms"], answer: 2, explanation: "Mrs 用于已婚女性" },
    { type: "choice", question: "___ is used for an unmarried woman?", options: ["Mr", "Miss", "Mrs", "Ms"], answer: 1, explanation: "Miss 用于未婚女性" },
    { type: "choice", question: "What ___ she do? She is a dentist.", options: ["do", "does", "is", "are"], answer: 1, explanation: "第三人称单数：What does she do?" },
    { type: "choice", question: "What ___ they do? They are doctors.", options: ["do", "does", "is", "are"], answer: 0, explanation: "第三人称复数：What do they do?" },
    { type: "choice", question: "I want to ___ a teacher.", options: ["be", "am", "is", "are"], answer: 0, explanation: "want to be + 职业：want to be a teacher" },
    { type: "choice", question: "She ___ to be a nurse.", options: ["want", "wants", "wanting", "to want"], answer: 1, explanation: "第三人称单数：wants to be" },
    { type: "fill", question: "A bus ___ (drive) drives a bus.", answer: "driver", explanation: "drive + r = driver（司机）" },
    { type: "fill", question: "A ___ (teach) helps students learn.", answer: "teacher", explanation: "teach + er = teacher（老师）" },
    { type: "fill", question: "What does she ___? She is a dentist. (做什么)", answer: "do", explanation: "What does she do? 询问职业" },
    { type: "fill", question: "I want to ___ a firefighter. (成为)", answer: "be", explanation: "want to be + 职业" },
    { type: "fill", question: "She ___ (want) to be a dentist.", answer: "wants", explanation: "第三人称单数：wants" },
    { type: "fill", question: "___ Smith is a man. (用Mr/Mrs/Miss填空)", answer: "Mr", explanation: "Mr 用于男性" }
  ],
  4: [
    { type: "choice", question: "She can play ___ piano.", options: ["a", "an", "the", "/"], answer: 2, explanation: "弹奏乐器要加 the：play the piano" },
    { type: "choice", question: "He likes playing ___ basketball.", options: ["a", "an", "the", "/"], answer: 3, explanation: "球类运动不加 the：play basketball" },
    { type: "choice", question: "Choose the -ing form of 'write':", options: ["writeing", "writing", "writting", "writein"], answer: 1, explanation: "以不发音 e 结尾，去 e 加 -ing：writing" },
    { type: "choice", question: "Choose the -ing form of 'run':", options: ["runing", "running", "runnin", "runeing"], answer: 1, explanation: "重读闭音节结尾，双写末尾字母：running" },
    { type: "choice", question: "Choose the -ing form of 'play':", options: ["playeing", "playing", "playin", "plaing"], answer: 1, explanation: "一般情况直接加 -ing：playing" },
    { type: "choice", question: "I ___ playing the piano now.", options: ["am", "is", "are", "be"], answer: 0, explanation: "I 配 am：I am playing" },
    { type: "choice", question: "She ___ playing the erhu.", options: ["am", "is", "are", "be"], answer: 1, explanation: "She 配 is：She is playing" },
    { type: "choice", question: "___ a wonderful concert!", options: ["What", "How", "What's", "How's"], answer: 0, explanation: "What + a/an + 形容词 + 名词：What a wonderful concert!" },
    { type: "choice", question: "___ it a clever idea? (否定疑问)", options: ["Is", "Isn't", "Doesn't", "Don't"], answer: 1, explanation: "否定疑问句：Isn't it a clever idea?" },
    { type: "fill", question: "She can play ___ violin. (填适当词)", answer: "the", explanation: "弹奏乐器要加 the" },
    { type: "fill", question: "I am ___ (play) the piano now.", answer: "playing", explanation: "现在进行时：am playing" },
    { type: "fill", question: "She is ___ (write) a letter.", answer: "writing", explanation: "write 去e加-ing：writing" },
    { type: "fill", question: "What ___ wonderful concert! (感叹句)", answer: "a", explanation: "What + a/an + 形容词 + 名词" },
    { type: "fill", question: "The kids are ___ (run) in the garden.", answer: "running", explanation: "run 双写n加-ing：running" },
    { type: "fill", question: "___ it a clever idea? (否定疑问句，表示惊讶)", answer: "Isn't", explanation: "否定疑问句：Isn't it...? 难道不是...吗？" },
    { type: "fill", question: "She can play ___ guitar. (填适当词)", answer: "the", explanation: "弹奏乐器要加 the：play the guitar" },
    { type: "fill", question: "What ___ beautiful song! (感叹句)", answer: "a", explanation: "What + a/an + 形容词 + 名词（单数）" }
  ],
  5: [
    { type: "choice", question: "___ you painting a picture? Yes, I am.", options: ["Do", "Are", "Is", "Am"], answer: 1, explanation: "现在进行时疑问：Are you painting...?" },
    { type: "choice", question: "___ she making a paper-cut? No, she isn't.", options: ["Do", "Does", "Is", "Are"], answer: 2, explanation: "第三人称单数现在进行时疑问：Is she making...?" },
    { type: "choice", question: "Are they painting pictures? Yes, ___.", options: ["they are", "they do", "they is", "they does"], answer: 0, explanation: "肯定回答：Yes, they are." },
    { type: "choice", question: "Is he making art? No, ___.", options: ["he isn't", "he doesn't", "he aren't", "he don't"], answer: 0, explanation: "否定回答：No, he isn't." },
    { type: "choice", question: "A square has ___ sides and four corners.", options: ["three", "four", "five", "six"], answer: 1, explanation: "正方形有四条边和四个角" },
    { type: "choice", question: "A circle does not have ___.", options: ["sides", "corners", "color", "size"], answer: 1, explanation: "圆形没有角（corners）" },
    { type: "choice", question: "She makes a doll ___ cloth.", options: ["in", "on", "with", "by"], answer: 2, explanation: "make ... with ... 表示用某种材料制作" },
    { type: "fill", question: "___ you making a paper-cut? (一般疑问句)", answer: "Are", explanation: "现在进行时一般疑问句：Are you making...?" },
    { type: "fill", question: "___ she making a paper-cut? No, she isn't.", answer: "Is", explanation: "第三人称单数：Is she making...?" },
    { type: "fill", question: "A square has four ___ and four corners. (边)", answer: "sides", explanation: "正方形有四条边（sides）" },
    { type: "fill", question: "I can ___ a paper-cut. (制作)", answer: "make", explanation: "make a paper-cut 剪纸" },
    { type: "fill", question: "She makes a doll ___ cloth. (用...制作)", answer: "with", explanation: "make ... with ... 用...制作" },
    { type: "fill", question: "Are you ___ (paint) a picture? Yes, I am.", answer: "painting", explanation: "现在进行时：painting" }
  ],
  6: [
    { type: "choice", question: "What ___ you doing? I am making a pie.", options: ["do", "are", "is", "does"], answer: 1, explanation: "第二人称：What are you doing?" },
    { type: "choice", question: "What ___ your mum doing? She is helping me.", options: ["do", "does", "is", "are"], answer: 2, explanation: "第三人称单数：What is your mum doing?" },
    { type: "choice", question: "A day has ___ hours.", options: ["12", "24", "60", "7"], answer: 1, explanation: "一天有24小时" },
    { type: "choice", question: "One hour has ___ minutes.", options: ["24", "30", "60", "100"], answer: 2, explanation: "一小时有60分钟" },
    { type: "choice", question: "One minute has ___ seconds.", options: ["30", "60", "100", "24"], answer: 1, explanation: "一分钟有60秒" },
    { type: "choice", question: "What time ___ it in Beijing?", options: ["do", "does", "is", "are"], answer: 2, explanation: "What time is it? 询问时间" },
    { type: "choice", question: "They are singing ___ the same time.", options: ["in", "on", "at", "to"], answer: 2, explanation: "at the same time 表示同时" },
    { type: "fill", question: "What ___ you doing? I am making a pie.", answer: "are", explanation: "What are you doing?" },
    { type: "fill", question: "What ___ your mum doing? She is helping me.", answer: "is", explanation: "第三人称单数：What is your mum doing?" },
    { type: "fill", question: "A day has ___ hours.", answer: "24", explanation: "一天有24小时" },
    { type: "fill", question: "One hour has 60 ___. (分钟)", answer: "minutes", explanation: "一小时有60分钟" },
    { type: "fill", question: "What time ___ it? It's three o'clock.", answer: "is", explanation: "What time is it? 询问时间" },
    { type: "fill", question: "They are singing ___ the same time.", answer: "at", explanation: "at the same time 同时" }
  ],
  7: [
    { type: "choice", question: "___ we make some more ice cream?", options: ["Do", "Shall", "Are", "Let's"], answer: 1, explanation: "Shall we...? 用于委婉建议" },
    { type: "choice", question: "___ make some soup. OK.", options: ["Shall we", "Let's", "Do we", "Are we"], answer: 1, explanation: "Let's... 用于提出计划" },
    { type: "choice", question: "Shall we wash some carrots? ___!", options: ["No", "Sure", "Sorry", "Don't"], answer: 1, explanation: "肯定回答用 Sure! / OK. / Good idea!" },
    { type: "choice", question: "Water is a ___.", options: ["solid", "liquid", "gas", "food"], answer: 1, explanation: "水是一种液体（liquid）" },
    { type: "choice", question: "Ice is a ___.", options: ["solid", "liquid", "gas", "food"], answer: 0, explanation: "冰是一种固体（solid）" },
    { type: "choice", question: "Which word is uncountable?", options: ["apple", "book", "water", "student"], answer: 2, explanation: "water 是不可数名词，没有复数形式" },
    { type: "choice", question: "___ touch the hot water!", options: ["Not", "Don't", "Doesn't", "No"], answer: 1, explanation: "否定祈使句：Don't + 动词原形" },
    { type: "choice", question: "The ice is ___ into a liquid.", options: ["change", "changing", "changes", "changed"], answer: 1, explanation: "现在进行时：is changing into" },
    { type: "fill", question: "___ we make some more ice cream? (我们...好吗)", answer: "Shall", explanation: "Shall we...? 委婉建议" },
    { type: "fill", question: "___'s make some soup. OK. (让我们)", answer: "Let", explanation: "Let's... 让我们..." },
    { type: "fill", question: "Water is a ___. (液体)", answer: "liquid", explanation: "水是一种液体" },
    { type: "fill", question: "Ice is a ___. (固体)", answer: "solid", explanation: "冰是一种固体" },
    { type: "fill", question: "___ touch the hot water! (不要)", answer: "Don't", explanation: "否定祈使句：Don't + 动词原形" },
    { type: "fill", question: "The ice is ___ (change) into a liquid.", answer: "changing", explanation: "现在进行时：is changing" }
  ],
  8: [
    { type: "choice", question: "What does May do on Sundays? She often ___ to the park.", options: ["go", "goes", "going", "went"], answer: 1, explanation: "一般现在时，第三人称单数：goes" },
    { type: "choice", question: "What is May doing now? She is ___ after her brother.", options: ["look", "looks", "looking", "looked"], answer: 2, explanation: "现在进行时：is looking" },
    { type: "choice", question: "They ___ very polite.", options: ["is", "are", "am", "be"], answer: 1, explanation: "They 配 are：They are very polite." },
    { type: "choice", question: "___ I use your coloured pencils?", options: ["Do", "Can", "May", "Am"], answer: 2, explanation: "May I...? 礼貌请求" },
    { type: "choice", question: "May I come in? ___, come in please.", options: ["No", "Sorry", "Sure", "Don't"], answer: 2, explanation: "肯定回答：Sure. / Here you are." },
    { type: "choice", question: "___ kind of him!", options: ["What", "How", "What's", "So"], answer: 1, explanation: "How + 形容词 + 主语 + 谓语！How kind of him!" },
    { type: "choice", question: "Which is present continuous tense?", options: ["She goes to school.", "She is going to school.", "She went to school.", "She go to school."], answer: 1, explanation: "现在进行时：She is going to school." },
    { type: "choice", question: "Which is simple present tense?", options: ["She is reading.", "She reads every day.", "She is going.", "She was reading."], answer: 1, explanation: "一般现在时：She reads every day." },
    { type: "fill", question: "She often ___ (go) to the park on Sundays.", answer: "goes", explanation: "一般现在时，第三人称单数：goes" },
    { type: "fill", question: "She is ___ (look) after her brother now.", answer: "looking", explanation: "现在进行时：is looking" },
    { type: "fill", question: "___ I use your coloured pencils? (礼貌请求)", answer: "May", explanation: "May I...? 礼貌请求" },
    { type: "fill", question: "___ kind of him! (感叹句)", answer: "How", explanation: "How + 形容词 + 主语 + 谓语！" },
    { type: "fill", question: "We should take ___ when we play games. (轮流)", answer: "turns", explanation: "take turns 轮流" },
    { type: "fill", question: "The cat is ___ the door. (在...后面)", answer: "behind", explanation: "behind 表示在...后面" }
  ]
};
