import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xyz8848.top",
  description:
    "A personal space to document and grow my programming knowledge.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '教程',
        items: [
          { text: 'Git', link: '/git/' },
          { text: 'Node.js', link: '/nodejs/' },
          { text: 'Python', link: '/python/' },
          { text: 'Rust', link: '/rust/' }
        ]
      }
    ],

    sidebar: {
      "/git/": [
        {
          text: "Git",
          collapsed: false,
          items: [
            { text: "简介", link: "/git/" },
            { text: "配置 Git 代理", link: "/git/git-proxy" },
          ]
        },
        {
          text: ".gitignore",
          collapsed: false,
          items: [
            { text: "简介", link: "/git/gitignore" },
            { text: "常见忽略内容", link: "/git/gitignore-templates-by-language" }
          ]
        }
      ],
      "/nodejs/": [
        {
          text: "Node.js",
          collapsed: false,
          items: [
            { text: "简介", link: "/nodejs/" }
          ]
        },
        {
          text: "npm",
          collapsed: false,
          items: [
            { text: "npm 镜像", link: "/nodejs/npm-mirror" }
          ]
        }
      ],
      "/python/": [
        {
          text: "Python",
          collapsed: false,
          items: [
            { text: "简介", link: "/python/" }
          ]
        },
        {
          text: "虚拟环境",
          collapsed: false,
          items: [
            { text: "venv", link: "/python/venv" }
          ]
        }
      ],
      "/rust/": [
        {
          text: "Rust",
          collapsed: false,
          items: [
            { text: "简介", link: "/rust/" },
            { text: "使用镜像源安装Rust", link: "/rust/install-rust-windows-powershell-mirror" }
          ]
        },
        {
          text: "Cargo",
          collapsed: false,
          items: [
            { text: "配置 create.io 镜像", link: "/rust/creates-io-mirror" }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/xyz8848/XyzDocs" }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/xyz8848/XyzDocs/edit/main/docs/:path',
      text: '编辑此页面'
    }
  }
});
