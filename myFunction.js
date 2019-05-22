function getEleId(id){
    return document.getElementById(id);
}

function getChildEleNodes(parentNode){
    console.log("getChildEleNodes 引用成功");
    var raw_children = parentNode.childNodes;
    var elementChildren = [];
    for(var count = 0;count < raw_children.length;count++){
        if(raw_children[count] && raw_children[count].nodeType == 1){
            elementChildren.push(raw_children[count]);
        }
    }
    return elementChildren;
}

function get1stChildEle(parentNode){
    var isEle = false;
    var childNodes = parentNode.childNodes;
    var count = 0;
    while(!isEle && count < childNodes.length){
        if(childNodes[count] && childNodes[count].nodeType==1){
            isEle = true;
        }else{
            count++;
        }
    }
    return childNodes[count];
}

function eleFilter(nodesArr){
    var elesArr = new Array();
    for (var count = 0; count < nodesArr.length; count++){
        if(nodesArr[count] && nodesArr[count].nodeType==1){
            elesArr.push(nodesArr[count]);
        }
    }
    return elesArr;
}