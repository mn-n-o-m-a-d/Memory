const pictures = ["pic1.png","pic2.png","pic3.png","pic4.png","pic5.png","pic6.png"]
const field = [4,1,2,0,3,5,1,0,3,4,2,5]

let index = 0
for (let td of document.querySelectorAll("tbody td")) {
    const i=index
    td.textContent = index;
    td.addEventListener("click",function(){
        td.style.backgroundImage="url("+pictures[field[i]]+")"
        td.style.color="transparent"

    });
    index++

}

