/**
 * Created by Mach2 on 23/11/2015.
 */
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
    return this.array[this.array.length - 1];
}

Stack.prototype.isEmpty = function(e) {
    return this.array.length == 0;
}

Stack.prototype.isEmpty = function(e) {
    return this.array.length == 0;
}
var values = new Stack();
input = "5 4 3 - *";

function rpn (string){
    result = [];

    array = input.split(" ");

    for(i = 0; i < array.length; i++){
        values.push(array[i]);
     }


    for ( j = 1; j < array.length; j = j + 2){
        if (values.peek() == "-" || "+" || "/" || "*"){
            result[j]= values.pop();

        }

    }

    for (k = 0; k <= result.length; k = k + 2){
        if (values.peek() != "+" && "-" && "/" && "*") {
            result[k] = parseInt(values.pop());
        }
    }
    // ora """""""dovrebbe""""""" essere result ad avere il contenuto di values in ordine
    a = result.join("");

    b = eval(a);
    return b;

}






