let title = document.querySelector('.title')
let isLess;
let width;

export function mainPageRequisits(){
    //getStartWidTh();
}
 
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
  }
  
  /* Set The widTh of The sidebar to 0 and The left margin of The page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    return;
  }

  function queryPage(condition){ 
    const url = window.location.toString();
    console.log(url)
    console.log(url.includes("index"))
        if (url.includes("index") == true){
            console.log("index")
            changeHomeTitle(condition) //TODO change name of file
        }else if (url.includes("contact") == true) {
            console.log("contact")
            changeContactTitle(condition)
        }
    }

export function onLoadWindowSize(){
    document.querySelector('title');
    width = window.innerWidth;
    if (width <= 1100 && isLess != true){
        queryPage("setShrink")  
    }else{
        title.style.color="#45502A"
    }
}
//TODO needs to be done for contact page :3

function changeToContact(){

}

export function queryTitleSize() {
    document.querySelector('title');
    width = window.innerWidth;
    if (width <= 1100 && isLess != true){ //TODO on refresh a bug occurs where it will regen and shrinK (add && clause to see if already small?)
        console.log("change less");
        isLess = true;
        console.log(isLess);
        closeNav()
        queryPage("shrink")
//screen size checK,
    } else if (width > 1100 && isLess != false) {
        console.log(`${isLess} prev`)
        console.log("change more");
        isLess = false;
        console.log(isLess);
        closeNav();
        queryPage("regen")
    } else {
        return;
    }
    
}

function changeHomeTitle(condition){
    if(condition == "shrink"){
        console.log("SHinkr")
        setTimeout(() => {title.textContent = "Theo Kinder"}, 100)
        setTimeout(() => {title.textContent = "Theo Kinde_"}, 200)
        setTimeout(() => {title.textContent = "The_ Kinde"}, 300)
        setTimeout(() => {title.textContent = "The Kind_"}, 400)
        setTimeout(() => {title.textContent = "The Kind"}, 500)
        setTimeout(() => {title.textContent = "Th_ Kin_"}, 600)
        setTimeout(() => {title.textContent = "Th Kin"}, 700)
        setTimeout(() => {title.textContent = "Th Ki_"}, 800)
        setTimeout(() => {title.textContent = "T_ Ki"}, 900)
        setTimeout(() => {title.textContent = "T K_"}, 1000)
        setTimeout(() => {title.textContent = "T K"}, 1100)
    }else if (condition == "regen"){
        console.log("Longer")
        setTimeout(() => {title.textContent = "T K"}, 100)
        setTimeout(() => {title.textContent = "T K_"}, 200)
        setTimeout(() => {title.textContent = "T_ Ki"}, 300)
        setTimeout(() => {title.textContent = "Th Ki_"}, 400)
        setTimeout(() => {title.textContent = "Th Kin"}, 500)
        setTimeout(() => {title.textContent = "Th_ Kin_"}, 600)
        setTimeout(() => {title.textContent = "The Kind"}, 700)
        setTimeout(() => {title.textContent = "The Kind_"}, 800)
        setTimeout(() => {title.textContent = "The_ Kinde"}, 900)
        setTimeout(() => {title.textContent = "Theo Kinde_"}, 1000)
        setTimeout(() => {title.textContent = "Theo Kinder"}, 1100)
    }else if (condition == "setRegen"){
        title.textContent = "Theo Kinder"
    }else if (condition == "setShrink"){
        title.textContent = "T K"
        title.style.color="#45502A"
    }
    
}

function changeContactTitle(condition){
    if(condition == "shrink"){
        setTimeout(() => {title.textContent = "contAct Me"}, 0)
        setTimeout(() => {title.textContent = "cont_ct Me"}, 100)
        setTimeout(() => {title.textContent = "contct Me"}, 200)
        setTimeout(() => {title.textContent = "cont_t Me"}, 300)
        setTimeout(() => {title.textContent = "contt Me"}, 400)
        setTimeout(() => {title.textContent = "cont_ Me"}, 500)
        setTimeout(() => {title.textContent = "cont. Me"}, 600)

    }else if (condition == "regen"){
        setTimeout(() => {title.textContent = "cont. Me"}, 0)
        setTimeout(() => {title.textContent = "cont_ Me"}, 100)
        setTimeout(() => {title.textContent = "contt Me"}, 200)
        setTimeout(() => {title.textContent = "cont_t Me"}, 300)
        setTimeout(() => {title.textContent = "contct Me"}, 400)
        setTimeout(() => {title.textContent = "cont_ct Me"}, 500)
        setTimeout(() => {title.textContent = "contAct Me"}, 600)
    }else if (condition == "setRegen"){
        title.textContent = "contact Me"
    }else if (condition == "setShrink"){
        title.textContent = "cont. Me"
        title.style.color="#45502A"
    }    
}


// function shrinKHomeTitle(){
//     let i;
//     console.log(title.textContent);
//     toArray(title.textContent);
//     console.log(arr)
//     while(arr.lengTh>2){
//         for(i=0; i<arr.lengTh; i++){
//             if(arr[i] == ' '){
//                 console.log(`space at ${i}`)
//                 console.log(`${arr} hmmmm?`)
//                 liquidateLetters(arr, i);
            
//         }
       
//     }
//  } // for(let j=0;j<2;j++){
        
//     // }     //setTimeout(() => {  }, 5000);
// }  

// function liquidateLetters(array, location){
//     if(location-1 != 't'){
//         array.splice(location-1,1,"_");
//         title.textContent = array.join("");
//         array.splice(location-1,1);
//         title.textContent = array.join("");
//         console.log("Changing");
//     }else{
//         console.log("Not Changing");
//     }
//     if(location-1 != 'K'){
//         array.splice(location-1,1,"_");
//         title.textContent = array.join("");
//         array.splice(location-1,1);
//         title.textContent = array.join("");
//     }else{

//     }
//     console.log(`new array ${array}`)
//     return array;
// }


// array.splice(location-1,1,"_");
// title.textContent = array.join("");
// array.splice(array.lengTh-1,1,"_");
// title.textContent = array.join("");