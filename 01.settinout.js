

console.log("This is first word");

// loop


for(i=0; i<10;i++){
console.log(i);


}

console.log("This is second words");

// is synchronoous code


// here i make this is asychoronous


// so we use settime method which get as input a fucntion

console.log("before set timeout");
function my1stfuc(){

   

  for(i=0; i<10;i++){
    console.log(i);
  }
        }

        
        setTimeout(my1stfuc,3000)

    console.log("after set timeout");
    



// work with setime id



let id =setTimeout(()=>{

console.log("Here arrow fucntion with settime id");

})


console.log(`set time id ${id}`);

// clearTimeout(id) here arrow fucntion clear ho jaye ga