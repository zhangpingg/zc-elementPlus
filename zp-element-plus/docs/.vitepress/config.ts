import { defineConfig } from 'vitepress';
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'zp-element-plus 组件库', // 网站的标题、顶部左侧-标题
    description: '组件库文档',
    lang: 'cn-ZH',
    base: '/zp-element-plus/', // url添加base，http://localhost:3001/xxx
    lastUpdated: true, // 文档最后，最后修改时间是否显影
    head: [['link', { rel: 'icon', href: '/zp-element-plus/favicon.ico' }]],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/imgs/hero.jpg', // 顶部左侧-标题前的logo
        siteTitle: 'ZpElementPlus 组件文档', // 顶部左侧-标题（会覆盖上面的title）
        outline: [3, 4], // 控制的目录层级，哪些显示。因为文档中的标题是3级标题。默认是显示的
        // 导航
        nav: [
            { text: '安装指南', link: '/component/indexGuide' },
            { text: '组件预览', link: '/component/button', activeMatch: '^/component/' },
            {
                text: 'GitHub地址',
                link: 'https://www.baidu.com/',
            },
            {
                text: '博客',
                items: [
                    { text: 'CSDN', link: 'https://blog.csdn.net/cwin8951' },
                    {
                        text: '掘金',
                        link: 'https://juejin.cn/user/888061128344087/posts',
                    },
                ],
            },
        ],
        // github 跳转
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            {
                icon: 'npm',
                link: 'https://www.npmjs.com/package/pf-component-library',
            },
        ],
        // 左侧侧边栏
        sidebar: [
            {
                text: '组件',
                items: [
                    { text: 'ZpButton', link: '/component/button' },
                    { text: 'SearchForm 查询表单', link: '/component/searchForm' },
                    { text: 'TablePage 表格分页', link: '/component/tablePage' },
                    { text: 'UploadFile 上传文件', link: '/component/uploadFile' },
                ],
            },
            // {
            //     text: "工具",
            //     items: [
            //         { text: "utils", link: "/component/button.md" },
            //     ],
            // },
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
