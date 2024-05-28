// let headTag = document.head;
// let bodyTag = document.body
// let havola = document.documentURI;
// let formalar = document.forms;
// let rasmlar = document.images
// let havolalar = document.links

// console.log(havolalar);

// function ButonniBos(){
//     alert("Siz button ni Bosdingiz");
// }

// function ButtonniIkkiBos(){
//     alert("Siz button ni ikki marta bosdingiz!");
// }

// function talash(Event){
//     alert("siz hozir " + event.target.value + "ni taladingiz!");
// }

// function InputgaBosish(){
//     console.log("Inputga bosildi!");
// }

// function inputdanChiqish(){
//     console.log("Inputdan chiqildi");
// }
// function yozish(){
//     console.log(event.target.value)
// }
// document.querySelector(".text").addEventListener("copy",function(event){
//     console.log("Diqqat! Diqat! " + event.target.value + " nomi xujjat ko'chirilyapti!");
// })

function harakatlanish(e){
    console.log(e.clientX,e.clientY);
}
function kirish(){
    console.log("Hududga kirildi");
}
function chiqish(){
    console.log("Hududdan Chikildi");
}