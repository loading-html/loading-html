    /**
     * @name HTML 加载遮罩层
     * @version v0.0.1
     * @author 乔木
     * @description HTML 加载遮罩层，在 HTML 渲染的过程中增加一个 Loading ，增强页面的交互性
     * @time 2018-11-12
     * @todo 增加顶部 Loading 条、百分数 Loading
     * @todo 重新架构、但调用方法保持不变
     * @todo CSS 与 JS 代码分离
     * @todo 增强浏览器兼容
     * @todo 增强插件的性能
     * @todo 编码更加的规范
     * @todo 插件的测试用例
     */
    LoadingHtml = new Object();
    var loading_html_class='loading_html';
    var loading_img_class='loading_img';
    // 加载蒙版 样式 对象
    LoadingHtml.loading_mask_style={
        position:'fixed',
        left:0,
        top:0,
        width:'100%',
        height:'100%',
        'text-align':'center',
        background:'#CCC',
        opacity:0.6,
        display:'none',
    }
    // 加载图片 样式 对象
    var host = document.scripts;
    var img_src_path=host[host.length-1].src.substring(0,host[host.length-1].src.lastIndexOf("/")+1)+'img/loading.gif';
    LoadingHtml.loading_img_style={
        img_src:img_src_path,
        'margin-top':'10rem',
        width:'32px',
        height:'auto',
    }
    // init 初始化 关于加载层本身的配置参数：loading_time 加载图片显示时间|type 加载层类型、loading_mask_style 蒙版层样式、loading_img_style 加载图片样式
    LoadingHtml.init=function(loading){
        var loading=typeof(loading)!='undefined'?loading:{};
        loading.config=typeof(loading.config)!='undefined'?loading.config:{};
        // 加载时间
        if(typeof(loading.config.loading_time)=='undefined'){
            loading.config.loading_time=0;
        }
        var loading_mask_style=loading.loading_mask_style;
        var loading_img_style=loading.loading_img_style;
        if(loading_mask_style){
            for(var key in loading_mask_style){
                this.loading_mask_style[key]=loading_mask_style[key];
            }
        }
        var body_dom=document.getElementsByTagName('body')[0];
        var loading_id=body_dom.dataset.loading_id?parseInt(body_dom.dataset.loading_id)+1:1;
        body_dom.dataset.loading_id=loading_id;
        loading_id='loading_html_'+loading_id;
        // 创建加载层
        var loading_html=document.createElement("div");
        // 创建加载 img、图片
        var loading_img=document.createElement("img");
        for(var key in this.loading_img_style){
            if(key=='img_src'){
                loading_img.src=this.loading_img_style.img_src;
            }else{
                loading_img.style[key]=this.loading_img_style[key];
            }
        }
        // 增加 class 属性、name 属性
        loading_img.className=loading_img_class;
        loading_img.name=loading_img_class;
        // 给加载层 增加 样式、id、class 属性
        for(var key in this.loading_mask_style){
           loading_html.style[key]=this.loading_mask_style[key];
        }
        loading_html.id=loading_id;
        loading_html.className=loading_html_class;
        loading_html.name=loading_html_class;
        // 把加载层图片添加到加载蒙版中
        loading_html.appendChild(loading_img);
        // 把蒙版添加到 body 中 第一个 script 之前
        document.body.insertBefore(loading_html,document.body.getElementsByTagName("script")[0]);
        var loading_time=parseInt(loading.config.loading_time);
        if(loading_time>0){
                loading_html.style.display='block';
                setTimeout(function(){
                    loading_html.style.display='none';
                },loading_time);
        }else{
            window.onbeforeunload=function(){
                loading_html.style.display='block';
            }
        }
        loading_html.show=function(){
            this.style.display="block";
        }
        loading_html.hide=function(){
            this.style.display="none";
        }
        return loading_html;
    }
    // hide 关闭 默认关闭所有、指定关闭
    LoadingHtml.hide=function(load_mask){
        if(typeof(load_mask)!='object'){
            var all_load_mask=document.getElementsByName(loading_html_class);
            var all_load_mask_length=all_load_mask.length;
            for (var i = 0; i < all_load_mask_length; i++) {
                all_load_mask[i].style.display='none';
            }
        }else{
            load_mask.style.display="none";
        }
    }
    // 显示 需要一个参数
    LoadingHtml.show=function(load_mask){
        if(typeof(load_mask)=='object'){
            load_mask.style.display="block";
        }else{
            console.log('LoadingHtml 需要一个参数');
        }
    }