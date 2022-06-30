module.exports = {
    title: '北京邮电大学本科招生宣传（非官方）',
    description: '北京邮电大学本科招生宣传（非官方）',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }]
    ],
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
    },
    markdown: {
        lineNumbers: true
    },
    sidebarDepth: 2,
    lastUpdated: '本页面更新于',
    searchMaxSuggestions: 10,
    ServiceWorker: {
        updatePopup: {
            message: "有新的内容已更新，请点击重新载入",
            buttonText: "重新载入"
        }
    },
    editLinks: true,
    editLinkText: '在 GitHub 帮助改进此页'
}