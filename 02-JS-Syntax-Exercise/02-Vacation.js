function vacation(groupPeople, typeGroup, dayWeek) {
  let priceForOne = 0;
 
  if (dayWeek === 'Friday') {
    if (typeGroup === 'Students') {
      priceForOne = 8.45;
    } else if (typeGroup === 'Business') {
      priceForOne = 10.90;
    } else if (typeGroup === 'Regular') {
      priceForOne = 15;
    }
  } else if (dayWeek === 'Saturday') {
    if (typeGroup === 'Students') {
      priceForOne = 9.80;
    } else if (typeGroup === 'Business') {
      priceForOne = 15.60;
    } else if (typeGroup === 'Regular') {
      priceForOne = 20;
    }
  } else if (dayWeek === 'Sunday') {
    if (typeGroup === 'Students') {
      priceForOne = 10.46;
    } else if (typeGroup === 'Business') {
      priceForOne = 16;
    } else if (typeGroup === 'Regular') {
      priceForOne = 22.50;
    }
  }
 
  if (groupPeople >= 30 && typeGroup === 'Students') {
    priceForOne *= 0.85;
  } else if (groupPeople >= 100 && typeGroup === 'Business') {
    groupPeople -= 10;
  } else if (typeGroup === 'Regular' && groupPeople >= 10 && groupPeople <= 20) {
    priceForOne *= 0.95;
  }
 
  let totalPrice = priceForOne * groupPeople;
 
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}