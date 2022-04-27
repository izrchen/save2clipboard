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
// 获取链接
link=window.location.href
// 获取标题
if (document.getElementsByTagName('h1').length>0 && document.getElementsByTagName('h1')[0].textContent){
    title=document.getElementsByTagName('h1')[0].textContent
}else{
    title=document.title
}
// 将当前页面的链接复制到剪切板
copyToClip('[['+link+']['+title+']]')

// 复制到浏览器书签用的
javascript:function tankuang(content){ if(ele_msg=document.getElementById("msg")){ele_msg.remove()};var html ='<div id="msg" style="position:fixed;top:50%;width:100%;height:30px;line-height:30px;margin-top:-15px;"><p style="background:#000;opacity:0.8;width:300px;color:#fff;text-align:center;padding:10px 10px;margin:0 auto;font-size:12px;border-radius:4px;">'+ content +'</p></div>'; document.querySelector("body").insertAdjacentHTML('beforeEnd', html); var t=setTimeout(next,2000); function next(){ if(ele_msg=document.getElementById("msg")){ele_msg.remove()};}} function copyToClip(content){var aux = document.createElement("input");aux.setAttribute("value", content); document.body.appendChild(aux); aux.select(); document.execCommand("copy"); document.body.removeChild(aux); tankuang("复制成功"); } link=window.location.href; if (document.getElementsByTagName('h1').length>0 && document.getElementsByTagName('h1')[0].textContent){title=document.getElementsByTagName('h1')[0].textContent}else{title=document.title};copyToClip('[['+link+']['+title+']]')
