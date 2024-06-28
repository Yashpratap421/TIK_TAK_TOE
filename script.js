let sound = new Audio("click.mp3")
let soundend = new Audio("win.mp3")

let turn = "X";
var t =30;
var flag=0;

var Gameplay = ()=>{
var boxs =document.querySelectorAll("td")
Array.from(boxs).forEach(element => {
    element.addEventListener('click',()=>{
       
        if(element.innerText === '')
            {
             element.innerText=turn;
             turn = Playerturn();
             document.querySelector("h2").textContent=turn;
             flag= flag +1;
             sound.play();
             if(flag === 9)
                {
                    document.querySelector("button").style.opacity=  "8"; 
                    // document.querySelector("table").style.opacity= "0";
                }
            
            } 
            winnner();
        })}   
);

};




var Playerturn = ()=>{
    return  turn  === "X"? "0":"X"  ;                                            
} 

var winnner =  ()=>{
var box =document.querySelectorAll("td");
 let winningcondition= [
            [0,1,2],
            [0,3,6],
            [3,4,5],
            [6,7,8],
            [8,5,2],
            [0,4,8],
            [2,4,6],
            [1,4,7]
        ];
       Array.from(winningcondition).forEach(elem =>  {
                // console.log(elem[1]);
                if((box[elem[0]].innerText === box[elem[1]].innerText) && (box[elem[1]].innerText === box[elem[2]].innerText) && (box[elem[0]].innerText !== ''))
                    {
                        // prompt(`${box[elem[0]].innerText} " is the winner"`)
                       let winner = document.querySelector("span")
                       winner.textContent= box[elem[0]].innerText;
                       winner.style.color = "aqua";
                       document.querySelector("h3").style.opacity = "0";
                       document.querySelector("#khatam").style.opacity= "8";
                       document.querySelector("h2").style.opacity= "0";
                       document.querySelector("button").style.opacity=  "8";
                    //    document.querySelector("table").style.opacity= "0";
                       turn="";
                       soundend.play();


                    };
            });
    
        }
        
        Gameplay();
    



























        

//    var timerrun = ()=>{
//     setInterval(function(){
//         if(turn=== "X")
//             {
//         if(t>0){
//         t--;
//        let timework= document.getElementById("A")
//        timework.textContent =t;
//        timework.style.color ="red";
//        Gameplay();
        
//         }
//         else{
//             clearInterval(t);
//         }
//     }

//     if(turn=== "0")
//         {
//     if(t>0){
//     t--;
//    let timework= document.getElementById("B")
//    timework.textContent =t;
//    timework.style.color ="red";
//    Gameplay();
    
//     }
//     else{
//         clearInterval(t);
//     }
// }
//     },1000);

    

//    }
   
// timerrun();
