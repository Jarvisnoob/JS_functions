# JS_functions
Operations of DOM are quite complicated and some confusing errors may occur, I wrap some functions those can make DOM operations simpler and more predictable. If you guys find errors or somewhere not good, please make your comments to help me find out then get it done. I'll appreciate it!

function 1 **getEleId(id)**
It's a function to take place of *document.getElementById*, in which *id* should be a string embrace by single or double quotation marks. Return one node.

function 2 **getChildEleNodes(parentNode)**
It's a function to choose element childnodes only(nodeType==1). It returns an *array* consists of element node or *undefine* when parameter is not an element type/has no child.

function 3 **get1stChildEle(parentNode)**
It's a function to get the first child of parameter *parentNode*, which must be an element node and has at least one child, has no reliant on function 2. It returns *one element node*.

function 4 **eleFilter(nodesArr)**
It's a function to *take one array of nodes*, choose nodes those are of element type. It returns *one array consits of element node*.
