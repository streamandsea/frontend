/**
 * 组件公共的方法
 */
import { cloneDeep } from 'lodash'

/**
 * 处理数据html标签显示界面
 */
export function removeHTMLTag(htmlStr) {
    let html = htmlStr
        .replace(/<img.*?>/g, "[图片]")
        .replaceAll(/<[^>]+>/g, "")
        .replace(/&nbsp;/gi, "")
    return html;
}


/**
 * 定义菜单匹配规则
 * menu 前端定义的路由文件
 * dyMenu 后端动态路由文件
 * 匹配：
 *  [{1,2,3},{3,4,5}] [{1,2},{4,5}] => [{1,2},{4,5}]
 */
export function rulesMenu(menuList, dyMenuList) {
    //前端：[{1,2,3},{2,3,4},{5,6}] 后端：[{1,2},{3,4}]
    //最终筛选符合后端条件的路由-----------
    let menu=[];
    //拷贝一个前端路由
    // const arr = [...menuList];//浅拷贝---不能用
    // const arr = JSON.parse(JSON.stringify(menuList));//深拷贝
    //推荐 loadsh插件--------- 
    // const arr = _.cloneDeep(menuList) //全局引入
    const arr = cloneDeep(menuList)//按需引用
    arr.forEach(one => {
        dyMenuList.forEach(two=>{
            if(one.meta.title === two.name){
                // menu.push(one)
                //注意：判断是否包含children=[]
                if(two.children && two.children.length>0){
                    //继续比较
                   one.children=rulesMenu(one.children,two.children)
                }
                //添加数组
                menu.push(one)
            }
        })
    });

    return menu;
}