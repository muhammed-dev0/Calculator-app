let ilkDeger = null;
let ikinciDeger = null;
let islem = null;
let sonuc = null;

const parent = document.querySelector(".container");
const input = document.querySelector("#input");

parent.addEventListener("click", function (event) {

    let buttons = event.target.closest('button');
    let buttonTip = buttons.dataset.type;
    if (!buttons) return;
    else if (buttonTip === "clear") {
        input.value = ""
        return;
    } else if (buttonTip === "clear2") {
        input.value = input.value.slice(0, -1)
        return;
    } else if (buttonTip === "number") {
        input.value += buttons.innerText;
    } else if(buttonTip === "operator") {
        input.value += buttons.innerText;
        islem = buttons.innerText;
    } else if (buttonTip === "equals") {
        let tamMetin = input.value;
        let parcala = tamMetin.split(islem);
        ilkDeger = parseFloat(parcala[0]);
        ikinciDeger = parseFloat(parcala[1]);
        calculate();
    } 

    function calculate() {
        if(islem === "+") {
            sonuc = ilkDeger + ikinciDeger;
        } else if(islem === "-") {
            sonuc = ilkDeger - ikinciDeger;
        } else if (islem === "x") {
            sonuc = ilkDeger * ikinciDeger;
        } else if (islem === "÷" ) {
            if (ikinciDeger === 0) {
                sonuc = "0'a bölünemez";
                setTimeout(ekraniTemizle, 1500)
            }else {
                sonuc = ilkDeger / ikinciDeger;
            }
        } else if (islem === "%") {
            sonuc = ilkDeger / 100;
        }

        function ekraniTemizle() {
            input.value = ""
        }

        if (sonuc === "0'a bölünemez") {
            input.value = sonuc;
        } else if (isNaN(sonuc)) {
            input.value = "Geçersiz İşlem";
        } else {
            input.value = sonuc;
        }

        if (input.value === "Geçersiz İşlem" || input.value === "0'a bölünemez") {
            setTimeout(ekraniTemizle, 2000);
        }

    }

})

