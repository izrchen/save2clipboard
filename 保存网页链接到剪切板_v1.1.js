// 弹框
function tankuang(pWidth,content){
    if(ele_msg=document.getElementById("msg")){
        ele_msg.remove()
    };
    var html ='<div id="msg" style="position:fixed;top:50%;width:100%;height:30px;line-height:30px;margin-top:-15px;"><p style="background:#000;opacity:0.8;width:'+ pWidth +'px;color:#fff;text-align:center;padding:10px 10px;margin:0 auto;font-size:12px;border-radius:4px;">'+ content +'</p></div>'; 
    document.querySelector("body").insertAdjacentHTML('beforeEnd', html); 
    var t=setTimeout(next,2000); 
    function next(){ 
        if(ele_msg=document.getElementById("msg")){
            ele_msg.remove()
        };
    }
}

// 复制内容到剪切板
function copyToClip(content, message) {
    var aux = document.createElement("input"); 
    aux.setAttribute("value", content); 
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy"); 
    document.body.removeChild(aux);
    if (message == null) {
        alert("复制成功");
    } else{
        alert(message);
    }
}

// 字符串规范化
function strNormalize(content) {
    return content.replace('[','【').replace(']','】').replace('_','-');
}

// 获取网页链接
link=window.location.href
// 获取标题，避免[]影响emacs识别，将其替换为【】
title=strNormalize(document.title)
// 获取鼠标选中文字
selectedWords=strNormalize(window.getSelection().toString())

// 将当前页面的链接复制到剪切板
selectedWords ? pageName=selectedWords : pageName=title
copyToClip('[['+link+']['+pageName+']]')

// 复制到浏览器书签用的
javascript:function tankuang(content){ if(ele_msg=document.getElementById("msg")){ele_msg.remove()};var html ='<div id="msg" style="position:fixed;top:50%;width:100%;height:30px;line-height:30px;margin-top:-15px;"><p style="background:#000;opacity:0.8;width:300px;color:#fff;text-align:center;padding:10px 10px;margin:0 auto;font-size:12px;border-radius:4px;">'+ content +'</p></div>'; document.querySelector("body").insertAdjacentHTML('beforeEnd', html); var t=setTimeout(next,2000); function next(){ if(ele_msg=document.getElementById("msg")){ele_msg.remove()};}} function copyToClip(content){var aux = document.createElement("input");aux.setAttribute("value", content); document.body.appendChild(aux); aux.select(); document.execCommand("copy"); document.body.removeChild(aux); tankuang("复制成功"); } function strNormalize(content) { return content.replace('[','【').replace(']','】').replace('_','-');} link=window.location.href; title=strNormalize(document.title); selectedWords=strNormalize(window.getSelection().toString()); selectedWords ? pageName=selectedWords : pageName=title; copyToClip('[['+link+']['+pageName+']]')
