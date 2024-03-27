function persistence(num) {
    let count = 0;
    while (num >= 10) {
      let product = 1;
      for (const digit of String(num)) {
        product *= parseInt(digit);
      }
      num = product;
      count++;
    }
    return count;
  }
  

  console.log(persistence(39));
  
  