console.log("hello world!!!!");

let rawHtml = document.getElementsByTagName("p");
var text = [];

// console.log(rawHtml);

for (let i = 0; i < rawHtml.length; i++) {
    const element = rawHtml[i];
    text = element.innerHTML;
    
    element.innerHTML = "hacked";
    // text.push(element.innerHTML);  
    console.log();  
}
/*
for (let i = 0; i < text; i++) {
    console.log(text[i]);
}
*/
