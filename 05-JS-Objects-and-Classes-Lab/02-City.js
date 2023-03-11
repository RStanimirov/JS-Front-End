function cityInfo(city) {  
    let cityEntries = Object.entries(city);  
    for (let [ key, value ] of cityEntries) {    
      console.log(`${key} -> ${value}`);  
    }
  }

  cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)

