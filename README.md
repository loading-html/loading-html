# loading-html
- 定义：HTML 页面加载遮罩层
- 特性：简单易用、且灵活多变
- 主页：
    1. [Gitee 码云](https://loading-html.gitee.io "loading-html 官网")
    2. [GitHub](https://loading-html.github.io/ "loading-html 教程")

## 1、下载安装
1. 下载地址 GitHub [loading-html](https://github.com/loading-html/loading-html "loading-html")
2. 目录结构
   - sec 源码目录
   - release 压缩后的源码
   - example 示例目录
   - LICENSE 开源协议
   - README.md 项目文档
## 2、基本使用步骤
1. body 标签中引入 loading-html  
` <script id="loading_html" src="./loading-html.js"></script> `
2. 初始化 LoadingHtml 完成
```
<script>
    // 初始化、最基本使用
    LoadingHtml.init();
</script>
```

## 2、实例指引
1. [loading-html 示例 1](./example/1st.html "loading-html 示例 1")
2. [loading-html 示例 2](./example/2nd.html "loading-html 示例 2")
3. [loading-html 示例 3](./example/3rd.html "loading-html 示例 3")

## 3、API 介绍
1. 初始化 LoadingHtml ` LoadingHtml.init(); `
```
// 参数 1 config:{loading_time:1000} 遮罩层加载时间
// 参数 2 loading_mask_style 蒙版样式、与 CSS 一致，注意：以 - 连接的 CSS 属性 需用引号引起、如 'z-index'
// 参数 3 loading_img_style 加载图片样式、与 CSS 一致
var loading_mask=LoadingHtml.init({
    config:{},
    loading_mask_style:{},
    loading_img_style:{},
});
```
2. 显示遮罩层 ` LoadingHtml.show(); `
```
// loading_mask：1 中示例的对象
// 1000：遮罩层加载时间
LoadingHtml.show(loading_mask,1000);
```
3. 隐藏遮罩层 ` LoadingHtml.hide(); `
```
// loading_html：1 中示例的对象
// 如果不传参数、就隐藏所有遮罩层
LoadingHtml.hide(loading_mask);
```

## 4、交流提问
1. loading-html  QQ 交流群：632813309

<div>
    <img src="./img/qq_qrcode.jpg" title="loading-html QQ 交流群" alt="loading-html QQ 交流群" width=200 style="margin-left:30px" />
</div>

2. loading-html 反馈电子邮件 [![给我写信](./img/e-mail.png)](http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=zvz7_Pb-_vj6_feOv7-graGj "给我写信")

## 关于作者
- 个人主页 [琴诗酒剑](http://www.zhangjianying.cn "琴诗酒剑伊为伴")
- 如果觉着不错，就打个赏吧
<div>
    <img src="./img/qq_wallet.png" title="QQ 打赏" alt="QQ 打赏" style="border:1px solid #CCC" />
    <img src="./img/alipay_wallet.png" title="支付宝打赏" alt="支付宝打赏" style="border:1px solid #CCC" />
</div>