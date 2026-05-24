export const appData = {
  // ======= 基础信息替换区 =======
  boyName: "JH", // 男生名字
  girlName: "ZY", // 女生名字
  startDate: "2025-05-25T00:00:00", // 你们在一起的具体日期和时间
  
  // ======= 音乐配置 =======
  music: {
    // 使用网易云音乐外链 API，直接填入歌曲 ID 即可播放
    url: "https://music.163.com/song/media/outer/url?id=1366216050.mp3", 
    title: "这是我一生中最勇敢的瞬间 - 棱镜乐队"
  },

  // ======= 首页顶部配置 =======
  hero: {
    title: "the 1st year",
    subtitle: "",
    // 首页顶部的大图（建议使用竖屏图片）
    coverImage: "/首图.jpg", // 直接使用 / 文件名，因为 public 目录下的文件会被映射到根目录
  },

  // ======= 第一张合照 =======
  firstPhoto: {
    title: "还记得第一张合照吗？",
    description: "云南滇池，勇敢的你还有无措的我= =",
    image: "/第一张照片.jpg", // 也可以替换成其他你想展示的第一张照片
  },

  // ======= 恋爱时间轴（可自行增减字数和条目） =======
  timeline: [
    {
      id: 1,
      title: "惠州",
      description: "这算不算是我们第一次约会^-^我们一起走遍惠州西湖，吃了好多小吃，急匆匆地奔向姐姐的演唱会",
      images: [
        "/惠州1.jpg",
        "/惠州2.jpg"
      ],
      theme: "pink", // 可选: pink, blue, mint, purple
    },
    {
      id: 2,
      title: "中山",
      description: "还是会为乳鸽和粥底火锅去好多好多次中山，金钟湖的草真的很绿，还要再去！",
      image: [
        "/中山.jpg",
        "/金钟湖.jpg"
      ],
      theme: "mint",
    },
    {
      id: 3,
      title: "顺德",
      description: "也去过很多很多次顺德，每一次都没有走完顺峰山哈哈哈",
      image: [
        "/顺德.jpg",
        "/顺峰山公园.jpg"
      ],
      theme: "purple",
    },
    {
      id: 4,
      title: "宝墨园 + 沙湾古镇",
      description: "那天的阳光很好，锦鲤很肥",
      images: [
        "/宝墨园.jpg",
        "/沙湾古镇.jpg"
      ],
      theme: "blue", // 可选: pink, blue, mint, purple
    },
    {
      id: 5,
      title: "深圳",
      description: "赶在夕阳下山之前，在天文台看上了一场落日",
      image: "/深圳天文台.jpg",
      theme: "pink",
    },
    {
      id: 6,
      title: "潮汕",
      description: "三天两夜有一些些特种兵逛吃潮州和汕头，俺们的vlog还没剪，黎师傅何时开始干活*-*",
      image: [
        "/潮汕2.jpg",
        "/潮汕.jpg"
      ],
      theme: "blue",
    },
    {
      id: 7,
      title: "澳门",
      description: "说走就走的旅行，下一次说什么也得在赌场挥霍一把！",
      image: "/澳门.jpg",
      theme: "mint",
    },
    {
      id: 8,
      title: "从化",
      description: "温泉太舒服了吧！好多好多山狠狠吸氧",
      image: "/从化.jpg",
      theme: "purple",
    }
  ],

  // ======= 一起做过很多事 =======
  activities: [
    {
      id: 1,
      title: "一起看演唱会",
      description: "邓紫棋和潘玮柏的演唱会，在现场一起大合唱的氛围太棒啦！",
      images: [
        "/邓紫棋演唱会.jpg",
        "/潘玮柏演唱会.jpg"
      ],
      theme: "pink",
    },
    {
      id: 2,
      title: "一起看烟花",
      description: "暗戳戳的仙女棒摆爱心烟花，真嘟很成功了",
      images: [
        "/烟花.jpg",
        "/烟花2.jpg"
      ],
      theme: "blue",
    },
    {
      id: 3,
      title: "一起逛公园",
      description: "走了3万步的海珠湖公园，腿都给我干废",
      images: [
        "/海珠湖公园.jpg"
      ],
      theme: "mint",
    },
    {
      id: 4,
      title: "一起逛花街",
      description: "顺德花街好热闹，第一次玩卡丁车，有那么一点点阴影在的",
      images: [
        "/顺德花街.jpg"
      ],
      theme: "purple",
    },
    {
      id: 5,
      title: "一起看大湾鸡",
      description: "但是没有看到真鸡！咱要换个地方看会跳舞的鸡！",
      images: [
        "/大湾鸡.jpg"
      ],
      theme: "pink",
    },
    {
      id: 6,
      title: "一起看星星",
      description: "风车山的风景真的绝了，银河也巨好看，还有莲麻小镇看到的北斗七星！",
      images: [
        "/银河.jpg",
        "/风车山.jpg"
      ],
      theme: "pink",
    },
    {
      id: 7,
      title: "一起摆摊",
      description: "有一丢丢亏本了但是，纯体验生活哈哈哈",
      images: [
        "/摆摊.jpg"
      ],
      theme: "pink",
    },
    {
      id: 8,
      title: "一起考公",
      description: "这里没有图哈哈哈，是有那么一点点三天打鱼两天晒网啦，别的不说今年继续吗战友",
      theme: "pink",
    }
  ],

  // ======= 浪漫图集（替换为你们的照片URL） =======
  galleryTitle: "还有一起吃过的很多饭",
  gallery: [
    "/饭1.jpg",
    "/饭2.jpg",
    "/饭3.jpg",
    "/饭4.jpg",
    "/饭5.jpg",
    "/饭6.jpg",
    "/饭7.jpg",
    "/饭8.jpg",
    "/饭9.jpg",
    "/饭.jpg"
  ],

  // ======= 结尾信件 =======
  letter: {
    title: "最后的最后",
    content: "亲爱滴小洪老师\n\n不知不觉，我们已经共同走过了一整年的四季轮回。\n\n这一年里，岁岁年年有你，朝朝暮暮皆是欢笑。真的很感谢你一直以来的温柔与耐心，包容着我所有的情绪。\n\n好快这第一年就过去了，进入我们的第二年，想和你一起春赏花，夏听风，秋登高，冬看雪。\n\n期待未来去更远的地方看更多的风景，一起成长一起搞钱！",
    signoff: "一周年快乐❤️"
  }
};
