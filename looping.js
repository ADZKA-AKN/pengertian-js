// const hobi = ["membaca","bersepeda","main bola", "basket"]

// for (let i = 0; i < hobi.length; i++) {
//   console.log(hobi[i]);
// }

const bintang = ["*","**","***","****","*****"]

for (let i = 0; i < bintang.length; i++) {
  console.log(bintang[i]);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];

for (let array2 of array) {
  if (array2 % 2 === 0) {
    console.log(array2);
  }
}

function faktorial(n) {
  let hasil = 1;

  for (let i = 1; i <= n; i++) {
    hasil = hasil *= i;
  }

  console.log(hasil);
}

faktorial(5);