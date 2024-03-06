function getAngkaTerbesarKedua(dataNumber) {
  let max = -Infinity,
    result = -Infinity;

  if (Array.isArray(dataNumber)) {
    for (const value of dataNumber) {
      const nr = Number(value);

      if (nr > max) {
        [result, max] = [max, nr];
      } else if (nr < max && nr > result) {
        result = nr;
      }
    }
  } else if (dataNumber == null) {
    result = 'ERROR: Invalid data type (password must be string)';
  } else {
    result = 'ERROR: Invalid data type (password must be string)';
  }

  return result;
}

//EXPECTED RESULT
//Ketika function tersebut dipanggil

const dataAngka = [9, 4, 7, 7, 4, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
//EXPECTED OUTPUT :
//8

console.log(getAngkaTerbesarKedua(0));
//EXPECTED OUTPUT :
//ERROR: (kamu jelasin apa dan kenapa)

console.log(getAngkaTerbesarKedua());
//EXPECTED OUTPUT :
//ERROR: (kamu jelasin apa dan kenapa)
