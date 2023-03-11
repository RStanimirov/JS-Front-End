function scheduleOrganiser(input) {
    
    let meetingsObj = {};

    for (let x of input) {
        let [weekday, name] = x.split(' ');
        if (meetingsObj.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetingsObj[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    for (let x in meetingsObj) {
        console.log(`${x} -> ${meetingsObj[x]}`)
    }
}

scheduleOrganiser(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)

