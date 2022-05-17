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

// 提取sm.ms中markdown图片链接的纯图片链接
selectedWords=window.getSelection().toString().slice(13,-1);


javascript:function copyToClip(content, message) {var aux = document.createElement("input"); aux.setAttribute("value", content); document.body.appendChild(aux); aux.select(); document.execCommand("copy"); document.body.removeChild(aux);} selectedWords=window.getSelection().toString().slice(13,-1); copyToClip(selectedWords)