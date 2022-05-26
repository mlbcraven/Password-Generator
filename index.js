let Array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let r1 = document.getElementById('R1');
let r2 = document.getElementById('R2');
let r3 = document.getElementById('R3');
let r4 = document.getElementById('R4');
let characterNumber = 0

function createPassword() {
    characterNumber = document.getElementById('characterNumber').value
    let Rtext = ""
    for (let i = 0; i < characterNumber; i++) {
        Rtext += Array.charAt(Math.floor(Math.random() * characterNumber))
    }
    r1.textContent = Rtext
    r2.textContent = Rtext
    r3.textContent = Rtext
    r4.textContent = Rtext
    return Rtext 
}
