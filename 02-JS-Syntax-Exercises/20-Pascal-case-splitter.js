function pascalCaseSplitter(text) {

    const splittedText = text.replace(/([A-Z])/g, ' $1');
    
    let trimmedText = splittedText.trim();
    let convertedToArray = trimmedText.split(' ');
    
    console.log(convertedToArray.join(', '));

    // console.log(text.split(/(?=[A-Z])/).join(', '));
  
  }

  pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')

