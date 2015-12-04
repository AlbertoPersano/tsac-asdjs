/**
 * Created by Mach2 on 28/11/2015.
 */


function calcola(vet){
    if (vet.length == 0) {
        return 10;
    }
    else{
        return 5 * vet[0] + calcola(vet.slice(1));
    }
}


function sumesp(vet){
    acc = 0;

    if(vet.length == 0){
        return 0;
    }
    else if ((vet[0]%2)== 0){
        return acc = vet[0] * vet[0] + sumesp(vet.slice(1));
    }
         else{
        return sumesp(vet.slice(1));
    }
}


function filtering(vet){
    var arrF = vet.filter (function(x) {return x % 2 == 0;});
    var faketot = arrF.map(function(x){return x * x;});
    var tot = faketot.reduce(function(acc, x){return acc + x;});
    return tot;
}


function Stack(){
    this.myarray = [];
}

Stack.prototype.push = function(e){
   // this.myarray[this.myarray.length] = e;
    this.myarray.push(e);
}

Stack.prototype.pop = function(){
    return this.myarray.pop();
}

Stack.prototype.peek = function(){
    return this.myarray[this.myarray.length -1];
}
Stack.prototype.isEmpty = function(){
    return this.myarray.length == 0;
}


/*astack = new Stack();
console.log(astack);
astack.push(1);
console.log(astack);
astack.pop();
console.log(astack);
astack.isEmpty();
console.log(astack);
astack.peek();
console.log(astack); **/




function multstack(vet){
    pari = new Stack();
    dispari = new Stack();
    vetR = [];

    for(var i = 0; i < vet.length; i++){
        if ((i%2)== 0){
            pari.push(vet[i]);
        }
        else{
            dispari.push(vet[i]);
        }
    }

    for(var j = 0; j < pari.myarray.length ; j++){
        var par = pari.pop();
        var dis = dispari.pop();
        vetR[j] = par*dis;
    }

    return vetR;

}


function Node(i, undrnd){
    this.item = i;
    this.nd = undrnd;
}

function  linkedlist(){
        this.root = null;
}

linkedlist.prototype.addNode = function(curnode, newnode){
    if (curnode.nd == null){
        curnode.nd = newnode;
    }
    else{
        this.addNode(curnode.nd, newnode);
    }
}

linkedlist.prototype.add = function(item){
    if (this.root == null){
        this.root = new Node(item, null);
    }
    else{
        this.addNode(this.root, new Node(item, null));
    }
}

function ex_1_a (vet){
    function calcola(vet);
}

function ex_1_b (vet){
    function sumesp(vet);
}

function ex_2 (vet){
    function filtering(vet);
}

function ex_3 (vet){
    function multstack(vet);
}


