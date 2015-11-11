
array = [1, 2, 3, 5, -2];


function ex_1_I(vettore) { 
    sum = 0;
        for (i = 0; i < vettore.length; i++) {
            if (vettore[i] < 0) {
                break;
                }else{
                sum = sum + vettore[i];
                }
 
            }
            return sum;
        }
 




n = 5;

function ex_2_I(numero){
    sum = 0;
    for (i = 1; i < n; i=i+2){
        sum = sum + i;
        }
    return sum;
}



box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function ex_3_I(vettore){
    sum = 0;
    for (i = 0; i < vettore.length; i++){
            sum = sum + vettore[i];
            }
    avg = sum / vettore.length;
    return avg;
}




a = 6;
b = 4;


function ex_4_I(primo, secondo){
    sum = 0;
    if (primo <= secondo) {
        for ( primo; primo <= secondo; primo++){
            sum = sum + primo;
            }
        return sum;
    }else{
         for ( secondo; secondo <= primo; secondo++){
            sum = sum + secondo;
            }
        return sum;
     }
}
    
        



a = 2;
b = 3;
 


function ex_5_I(num1, num2){
    tot = 0;
    for ( i = 0; i < b; i++){
        tot = tot + a;
        }
    return tot;
}



In [26]:

a = 7;
b = 2;
 

 
        function ex_6_I(num1, num2) { 
            var intero = 0;
            var riporto = 0;
            for (num1; num1 >= num2; num1 -= num2) {
                riporto = num1 - num2;
                intero++;
            }
 
            return intero + " con il resto di " + riporto;
        }




num1 = 2;
num2 = 3;

function ex_7_I(a, b){
    if ( b == 1){
        return a;
    }
    if ( b == 0){
        return 1;
    }
    for (i = 2; i <= b; i++){
         tot = tot + moltiplica(a, b);
         
         }
    return tot;
}





unvettore = [1, 2, 3, 4, 5, 6, 7, 8, 20];
 

function ex_8_I(vettore){
    futuramatrice = [[]];
    contatore = 0;
    recordMatrix = Math.sqrt(vettore.length); // radice quadrata di un numero
    for (i = 0; i < recordMatrix; i++){
        futuramatrice[i] = [];
        for (j = 0; j < recordMatrix; j++){
            futuramatrice[i][j] = vettore[contatore];
            contatore ++;
        }
    }
    return futuramatrice;
}
    
        
    





qualsiasivettore = ["1", "2", "3", "4", "5"];
 


function ex_9_I(vettore){
    return vettore.reverse();
}
    








a = 5;
n = 3;

function ex_10_I(num1, num2){
    array = [];
    for ( i = 0; i < n; i++){
        array[i] = a
        }
    return array;
}








unvettore = [1, 2, 3, 4, 5];

function ex_11_I(array){
    vettore = [];
    contatore = 0;
    for (i = 0; i < array.length; i++){
        if ((array[i] % 2) != 0){
            vettore[contatore] = array[i];
            contatore ++;// prima processa soltanto i dispari aggiungendo al contatore solo se lo sono, e solo POI passa ai pari
        }
    }
    for (j = 0; j < array.length; j++){
        if ((array[j] %2) == 0){
            vettore[contatore] = array[j];
            contatore ++;
        }
    }
    return vettore;
}







array = [1, 2, 3, -2, 5];
 


function ex_1_R(vettore){
    if (vettore.length == 0 || vettore[0] < 0){
        return 0;
    }else{
        return vettore[0] + ex_1_R(vettore.slice(1));
     }
}
                        




numero = 5;
i = 1;
acc = 0;

function  ex_2_R(n, i, acc){
    
    if ( n < i){
        return acc;
    }else{
     return  ex_2_R(n, i + 2, acc = acc + i);
     }
}
    
 



array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
con = 0;


function  ex_3_R(a, con){
    if (a.length == 0){
        return 0;
    }else if (con == a.length){
              return somma / a.length;
          }else{
               somma = (a[0] +  ex_3_R(a.slice(1), con++))
           }
 
 
}



a = 6;
b = 4;
i = 0;
acc = 0;

function  ex_4_R(primo, secondo, acc){
    if ( primo <= secondo){
        return  ex_4_R(primo + 1, secondo, acc + primo);
    }else if ( secondo <= primo){
              return  ex_4_R(primo, secondo + 1, acc + secondo);
     }else if (primo == secondo) {
    return acc;
    }
}



a = 4;
b = 5;
i = 0;
acc = 0;

function  ex_5_R(a, b, i, acc){
    if (i >= b){
        return acc;
    }else{
         return  ex_5_R(a, b, i++, acc + a);
     }
}
                
            





 

