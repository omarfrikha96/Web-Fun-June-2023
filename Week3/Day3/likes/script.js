let list = [document.querySelector("#like-1").innerHTML,
document.querySelector("#like-2").innerHTML,
document.querySelector("#like-3").innerHTML
]

let list2 = [document.querySelector("#like-1"),
document.querySelector("#like-2"),
document.querySelector("#like-3")
]

let list = list.map(Number);

function addLike(id){
    list[id]++;
    list2[id].innerText= list[id];
}

