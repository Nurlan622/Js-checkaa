var yoxla = 0;
var arr = ["salam", "nurlan"]
var yeniarr = arr.toString()
var value = prompt("zehmet olmasa simvol daxil edin:")
for (let i = 0; i< yeniarr.length; i++) {
    if (value === yeniarr[i]) {
        yoxla++;
    }

}
console.log(yoxla);