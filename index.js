let Array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let r1 = document.getElementById('R1');
let r2 = document.getElementById('R2');
let r3 = document.getElementById('R3');
let r4 = document.getElementById('R4');
let characterNumber = 0

function createPassword() {
    characterNumber = document.getElementById('characterNumber').value
    let Rtext1 = ""
    let Rtext2 = ""
    let Rtext3 = ""
    let Rtext4 = ""
    for (let i = 0; i < characterNumber; i++) {
        Rtext1 += Array.charAt(Math.floor(Math.random() * characterNumber))
        Rtext2 += Array.charAt(Math.floor(Math.random() * characterNumber))
        Rtext3 += Array.charAt(Math.floor(Math.random() * characterNumber))
        Rtext4 += Array.charAt(Math.floor(Math.random() * characterNumber))
    }
    r1.textContent = Rtext1
    r2.textContent = Rtext2
    r3.textContent = Rtext3
    r4.textContent = Rtext4
    return Rtext 
}
