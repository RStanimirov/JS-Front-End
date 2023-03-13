function registerHero(input) {

    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    let arrayHeroObjects = [];

    for (let x of input) {
        let splittedLine = x.split('/');
        let heroName = splittedLine[0].trim();
        let heroLevel = Number(splittedLine[1].trim());
        let heroItems = splittedLine[2].trim();
        arrayHeroObjects.push(new Hero(heroName, heroLevel, heroItems));
    }

    let sortedArray = arrayHeroObjects.sort((a,b) => {
        let result = a.level - b.level;
        if (result === 0) {
            return a.name.localeCompare(b.name);
        }
        return result;
    });
    

    for (let obj of sortedArray) {
        console.log(`Hero: ${obj.name}`);
        console.log(`level => ${obj.level}`);
        console.log(`items => ${obj.items}`);
    }

}

registerHero([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara',
    'Catman / 2 / Claws, Teeth',
    'Atman / 2 / Soul, Wind',
    ]
    )


