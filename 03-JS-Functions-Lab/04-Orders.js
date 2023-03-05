function orderFunc(product, qty) {
    // •	coffee - 1.50
    // •	water - 1.00
    // •	coke - 1.40
    // •	snacks - 2.00
  
    quantity = Number(qty);
    result = 0;
    
    if (product === 'coffee') {
      result = quantity * 1.50;
    }else if (product === 'water') {
      result = quantity * 1.00;
    }else if (product === 'coke') {
      result = quantity * 1.40;
    }else if (product === 'snacks') {
      result = quantity * 2.00;
    }
    
    console.log(result.toFixed(2));
  }

  orderFunc("coffee", 2)

  