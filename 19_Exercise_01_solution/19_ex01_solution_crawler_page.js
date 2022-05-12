console.log("This js file is link with '13.html'");
//Solution of excercise01 📌📌📌
let find = "google";

let allLink = document.links;
console.log(allLink);
let href;

Array.from(allLink).forEach(function(element){

    href= element.href;
    if(href.includes(find)){
        console.log(href);
    }
    
})