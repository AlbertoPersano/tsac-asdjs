function initialArray() {
    var seed = 1;
    function random() {
        var x = Math.sin(seed++) * 10000;
        return Math.floor(x);
    }

    var a = [];
    for(var i = 0; i < 10000; ++i) {
        a.push(random());
    }
    return a;
}




/*
 * START Esercizio Stack
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluate(callback) {
    callback(_0xd10d[0]);
}
array = [1, 2, 5070, 8, 5, 5070];

function contaNum(vet){

    if (vet.length == 0){
        return 0;
    }
    else if (vet[0] == 5070) {
            return vet[0] / 5070 +contaNum(vet.slice(1));
        }
        else{
            return contaNum(vet.slice(1));
        }


    }
console.log(contaNum(initialArray()));

vettore = [1, 2, 3, 4, -2, 5];





function aSqrt(array) {
    return Math.sqrt(array.filter(function(x) {
        if(x >= 0 && x % 2 == 0) {
            return x;
        }
    }).map(function(x) {
        return x * x;

    }).reduce(function(acc, x) {
        return acc + x;
    }));
}


console.log(aSqrt(initialArray()));




function Node(i, left, right) {
    this.item = i;
    this.l = left;
    this.r = right;
}

function BST() {
    this.root = null;

}

BST.prototype.addNode = function(currentNode, newNode) {
    if (newNode.item < currentNode.item) {
        if (currentNode.l == null)
            currentNode.l = newNode;
        else
            this.addNode(currentNode.l, newNode); // altrimenti porta il confronto al prossimo nodo di sinistra
    }
    else {
        if (currentNode.r == null)
            currentNode.r = newNode;
        else
            this.addNode(currentNode.r, newNode); // altrimenti porta il confronto al prossimo nodo di destra
    }
}

BST.prototype.add = function(item) {
    if (this.root == null) {
        this.root = new Node(item, null, null);
    } else {
        this.addNode(this.root, new Node(item, null, null));
    }
}


function searchTree(node, e) {
    if (node == null) {
        return false;
    }

    if (e == node.item) {
        return true;
    } else {
        if (e < node.item) {
            return searchTree(node.l, e)
        } else if (e > node.item) {
            return searchTree(node.r, e)
        }
    }
}

var t = new BST();
function inserisci(vet) {
    for (i = 0; i < vet.length; i++) {
        t.add(vettore[i]);
    }
}
console.log(inserisci(initialArray()));


function maxElem(Node, node) {
    var max = node.item;
    if(node.l != null) {
        max = Math.max(max, maxElem(node.left));
    }
    if(node.r != null) {
        max = Math.max(max, maxElem(node.right));
    }
    return max;
}
 console.log(t.root);


/* END Esercizio Stack */