function getChildElementNodes(parentNode){
    console.log("js 引用成功");
    var raw_childs = parentNode.childNodes;
    var elementChilds = [];
    for(var count = 0;count < raw_childs.length;count++){
        if(raw_childs[count] && raw_childs[count].nodeType == 1){
            elementChilds.push(raw_childs[count]);
        }
    }
    return elementChilds;
}