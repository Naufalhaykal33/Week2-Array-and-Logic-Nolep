function pasanganTerbesar(num) {
    // you can only write your code here!
    let angka = num.toString();
    let numString = angka.split("");
    let hasil = "";

for (let i = 0; i < angka.length; i++) {
    bandingAngka = angka[i] + angka[i + 1];
    if (numString < bandingAngka) {
        numString = bandingAngka
    } 
}
    return numString
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99