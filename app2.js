let $tab = $(".app2 .tab")
let $content = $(".app2 .content")
$tab.on('click','li',(e)=>{
    //如何切换tab-bar标签?
    //----1. 找到小tab,转换成jquer对象
    const $li = $(e.currentTarget)
    $li.addClass('active')
        .siblings()
        .removeClass('active')
    //----2. 找到索引
    const index = $li.index()
    //----3. 根据索引来选择展示不同的东西
    $content.children()
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active')
})