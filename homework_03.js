
n = 6;

function Stack(){
    this.array = [];
}

Stack.prototype.push = function(e) {
    this.array.push(e);
}
Stack.prototype.pop = function(e){
    return this.array.pop(e);
}

Stack.prototype.peek = function(e){
    return this.array[this.myarray.length - 1];
}

Stack.prototype.isEmpty = function(e) {
    return this.array.length == 0;
}

Stack.prototype.isEmpty = function(e) {
    return this.array.length == 0;
}

var s1 = new Stack();
function dec2bin(n){
   var newarray = "";
    while (n>0) {
        if ((n % 2) == 0) {
            s1.push(0);
        } else {
            s1.push(1);
        }
        n = Math.floor(n / 2);


    }
    while (!s1.isEmpty()) {
        newarray += s1.pop();
    }
  
    return newarray;
}
