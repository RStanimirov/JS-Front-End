function arrayToJson(name, lastName, hairColor) {    
    
    let personObj = {
          name,
          lastName,
          hairColor
      };

      console.log(JSON.stringify(personObj));
  }

  arrayToJson('George', 'Jones', 'Brown')
