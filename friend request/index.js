var  btn = document.querySelector("#add")

var h2 = document.querySelector("h2")
var check = 0 ;

btn.addEventListener("click" ,function(){
    if(check == 0){
        h2.innerHTML = "Friends"
        h2.style.color = "green"
        btn.innerHTML = "Remove Friend"
        check = 1 ;
    } else{
        h2.innerHTML = "Stranger"
        h2.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0;
    }
})