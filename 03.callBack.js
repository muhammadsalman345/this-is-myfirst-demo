

// a fucntion get an other function is call callBack fucntion

function myfist(myfist1){


    console.log("this is first Function");

myfist1()

}
function myfist1(){


    console.log("Here is sceonf function");
}

myfist(myfist1);// now pass another function

// 2nd example



function addtwonumber(a, b,f) {
    

    console.log(a,b);
    f(a,b)
}

addtwonumber(4,5,addtwonumber1)

function addtwonumber1(c,d){

    console.log(c+d);


}