let ism = prompt("ismingizni kiriting")

let promo = prompt("salom " + ism + "siz ismingizni katta yoki kichik harfda yozmoqchimisiz" + "\n 1)katta" + "\n 2)kichik")

if (promo === "1"){
    alert(ism.toUpperCase())
}
else if(promo ==="2"){
    alert(ism.toLowerCase())
}

else{
    alert("bu notogri qiymat")
}

let con = confirm(ism + " ismingizda nechta harf borligini bilmoqchimisiz")

if (con === true){
    alert("ismigizda " + ism.length +"ta qiymat bor")
}

else{
    alert("rahmat")
}
