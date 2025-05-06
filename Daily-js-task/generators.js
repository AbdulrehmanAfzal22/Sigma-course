let adjective = ["Amazing", "Fire", "Crazy"]
let shopname = ["Engine", "Food", "Garment"]
let other = ["Bros", "Limited", "Hub"]
function showname() {
    let count = 0; 
    for (let i = 0; i < adjective.length; i++) {
        for (let s = 0; s < shopname.length; s++) {
            for (let o = 0; s < other.length; o++) {
                let name = adjective[i]+" "+shopname[s]+" "+other[o];
console.log(name)
count++;


if (count >= 10) {
    alert("Only the first 10 names are generated!");
    return;
}
            }
        }

    }
}
showname()