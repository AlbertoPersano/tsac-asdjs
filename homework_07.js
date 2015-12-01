/**
 * Created by Mach2 on 28/11/2015.
 */

array = [1, 2, 3];
function calcola(vet){
    if (vet.length == 0) {
        return 10;
    }
    else{
        return 5 * vet[0] + calcola(vet.slice(1));
    }
}
console.log(calcola(array));

generico = [2, 3, 6, 5];

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
console.log(sumesp(generico));

general = [4, 2, 6, 1, 3];

function filtering(vet){
    var arrF = vet.filter (function(x) {return x % 2 == 0;});
    var faketot = arrF.map(function(x){return x * x;});
    var tot = faketot.reduce(function(acc, x){return acc + x;});
    return tot;
}

console.log(filtering(general));


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

anArray = [1, 2, 4, 5, 7];


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
    console.log(pari);
    console.log(dispari);

    for(var j = 0; j < pari.myarray.length ; j++){
        var par = pari.pop();
        var dis = dispari.pop();
        vetR[j] = par*dis;
    }

    return vetR;

}

console.log(multstack(anArray));

function Node(i, undrnd){
    this.item = i;
    this.nd = undrnd;
}

function  Root(){
        this.root = null;
}

Root.prototype.addNode = function(curnode, newnode){
    if (curnode.nd == null){
        curnode.nd = newnode;
    }
    else{
        this.addNode(curnode.nd, newnode);
    }
}

Root.prototype.add = function(item){
    if (this.root == null){
        this.root = new Node(item, null);
    }
    else{
        this.addNode(this.root, new Node(item, null));
    }
}

var t = new Root();
t.add(5);
t.add(6);
console.log(t);
