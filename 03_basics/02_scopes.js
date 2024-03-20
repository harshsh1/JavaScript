

if(true)
{
    let a = 10;
    const b =20
    var c =30
}


//console.log(a);
//console.log(b);
//console.log(c);  // Not a Block scope whaich is an problem
function one()
{
    const username = "harsh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    two()
    console.log(website);

    
}
//one();
if(true){
    const username = "harsh"
    if(username === "harsh"){
         const website = " youtube"
         //console.log(username + website);
    }
    //console.log(wesite);
}
//console.log(username);

// +++++++++++++++ interesting +++++++++++++++++++

//console.log(addone(5))
function addone(num){
    return num+1
}



addTwo(5) // Not allowed
const addTwo = function(num){   // Also a way of creating function.Variables are very strong in 
                                // javscript it can hold anything json,function,etc. This way is also
                                            // called expression
    return num+2
}

