import { defineConfig } from "vitepress";
import {
    containerPreview,
    componentPreview,
} from "@vitepress-demo-preview/plugin";
import path from "path";
import { fileURLToPath, URL } from "node:url";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "组件库", // 网站的标题、顶部左侧-标题
    description: "组件库文档",
    lang: "cn-ZH",
    base: "/zp-element-plus", // url添加base，http://localhost:5173/xxx
    head: [['link', { rel: 'icon', href: '/zp-element-plus/favicon.ico' }]],
    lastUpdated: true, // 文档最后，最后修改时间是否显影
    vite: {
        //plugins: [vueJsx()],
        resolve: {
            alias: {
                //"@": fileURLToPath(new URL("../../", import.meta.url)),
                //"@": path.resolve(),
            },
        },
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "/imgs/hero.jpg", // 顶部左侧-标题前的logo
        siteTitle: "组件文档", // 顶部左侧-标题（会覆盖上面的title）
        outline: 3, // 控制的目录层级，哪些显示。因为文档中的标题是3级标题。默认是显示的
        // 导航
        nav: [
            { text: "首页", link: "/" },
            { text: "安装指南", link: "/component/indexGuide" },
            { text: "组件预览", link: "/component/documentOne", activeMatch: '^/component/' },
            {
                text: "GitHub地址",
                link: "https://www.baidu.com/",
            },
            {
                text: "博客",
                items: [
                    { text: "vitePress", link: "https://vitepress.dev/zh/" },
                    { text: "CSDN", link: "https://blog.csdn.net/cwin8951" },
                    {
                        text: "掘金",
                        link: "https://juejin.cn/user/888061128344087/posts",
                    },
                ],
            },
        ],
        // github 跳转
        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
            {
                icon: "npm",
                link: "https://www.npmjs.com/package/pf-component-library",
            },
        ],
        // 左侧侧边栏
        sidebar: [
            {
                text: "组件",
                items: [
                    { text: "文档1", link: "/component/documentOne" },
                    { text: "文档2", link: "/component/documentTwo" },
                    { text: "ZpButton", link: "/component/button.md" },
                ],
            },
        ],
    },
    markdown: {
        config(md) {
            // 示例预览功能（查看，copy）
            md.use(containerPreview);
            md.use(componentPreview);
        },
    },
});
