// =====================
const banner = document.querySelector(".cookies-banner");

const accept = () => {
    banner.classList.add("hide-cookies-banner")
};

// =====================
const loading = () => {
    alert("Loading weather report....")

}

// =====================
const c2f = (temp) => {
    return Math.round((temp*9/5)+32);
}

const f2c = (temp) => {
    return Math.round((temp-32)*5/9);
}

function change(element){
    for (let i = 1; i < 9; i++) {
        const tempSpan = document.querySelector("#temp"+i) ;
        const tempvalue = parseInt(tempSpan.innerText)
        if (element.value == "°C") {
            tempSpan.innerText = f2c(tempvalue)
        }else{
            tempSpan.innerText = c2f(tempvalue)
        }
        
    }
}





