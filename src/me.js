const aboutMe = [
  { icon: "🖐️", desc: "哈喽，我是张跑跑" },
  { icon: "📝", desc: "喜欢总结，热衷分享" },
  { icon: "🌱", desc: "持续学习，茁壮成长" },
  { icon: "🏋️", desc: "热爱健身，撸铁小伙" },
  { icon: "🏖️", desc: "认真工作，认真生活" },
];

const mySocial = [
  {
    platform: {
      href: "https://space.bilibili.com/1886509243",
      img: "./src/img/social/bilibili.jpeg",
      alt: "bilibili",
    },
    detail: {
      title: "录制了一些视频",
      desc: [
        '<a href="https://space.bilibili.com/1886509243/channel/collectiondetail?sid=77008&ctype=0" target="_blank">vue3.2 详细教程</a>',
        '<a href="https://space.bilibili.com/1886509243/channel/collectiondetail?sid=104738&ctype=0" target="_blank">JavaScript 手写轮子系列</a>',
        '<a href="https://space.bilibili.com/1886509243/channel/collectiondetail?sid=607494&ctype=0" target="_blank">用JavaScript 来学《算法4》</a>',
      ],
    },
    status: "持续录制中，近期主要录制算法4系列",
  },
  {
    platform: {
      href: "https://arrow.blog.csdn.net/",
      img: "./src/img/social/csdn.webp",
      alt: "csdn",
    },
    detail: {
      title: "写了一些文章",
      desc: ["记录一下有趣的知识", "总结自己的学习和生活", "面试记录"],
    },
    status: "会一直写下去的，惟愿马不停蹄，手不停笔",
  },
  {
    platform: {
      href: "#",
      img: "./src/img/social/gzh.jpg",
      alt: "gzh",
    },
    detail: {
      title: "算是一个小惊喜",
      desc: ["发发自己的状态", "一个和大家聚集的方式"],
    },
    status: "希望自己能持续的做吧",
  },
];

const myBooks = [
  {
    cover: "设计中...",
    name: "《手写 JavaScript 轮子》",
    abstract: "一起来手写前端的轮子",
    status: "暂时停了，不过在准备再写新的了",
  },
  {
    cover: "设计中...",
    name: '<a href="https://alg.linlove.cn/" target="_blank">用 JavaScript 来学《算法4》</a>',
    abstract: "算法可谓程序猿必备技能，一起来用 JavaScript 来学《算法4》",
    status: "持续中",
  },
];

const myProject = [
  {
    name: "magic-wheel",
    href: "https://github.com/zhangpaopao0609/magic-wheel",
    desc: "手写轮子配套代码",
    status: "跟随轮子一起转",
  },
  {
    name: "format-import",
    href: "https://github.com/zhangpaopao0609/format-import",
    desc: "vscode 插件，用于规范项目中模块引用方法、组件",
    status: "已发布到市场，可以使用",
  },
];

module.exports = {
  aboutMe,
  mySocial,
  myBooks,
  myProject,
};
