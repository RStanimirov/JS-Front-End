function solve(input) {

    let remainingInput = input;
    let num = remainingInput.shift();

    let initalSprintArray = [];
    let sprintCollection = {};

    for (i = 0; i < num; i++) {
        initalSprintArray.push(remainingInput.shift().split(':'));
    }

    for (x of initalSprintArray) {

        let assignee = x[0];
        let taskId = x[1];
        let title = x[2];
        let taskStatus = x[3];
        let estimatedPoints = Number(x[4]);

        if (!sprintCollection.hasOwnProperty(assignee)) {
            sprintCollection[assignee] = [{ taskId, title, taskStatus, estimatedPoints }];
        } else {
            sprintCollection[assignee].push({ taskId, title, taskStatus, estimatedPoints });
        }
    }

    for (let x of remainingInput) {
        let splittedLine = x.split(':');
        let command = splittedLine[0];

        if (command === 'Add New') {
            newAssignee = splittedLine[1];
            taskId = splittedLine[2];
            title = splittedLine[3];
            taskStatus = splittedLine[4];
            estimatedPoints = Number(splittedLine[5]);

            if (!sprintCollection.hasOwnProperty(newAssignee)) {
                console.log(`Assignee ${newAssignee} does not exist on the board!`)    
            } else {
                sprintCollection[newAssignee].push({ taskId, title, taskStatus, estimatedPoints });
            }
        }

        else if (command === 'Change Status') {
            assignee = splittedLine[1];
            taskId = splittedLine[2];
            newStatus = splittedLine[3];

            if (!sprintCollection.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`)    
            } else {
                if (sprintCollection[assignee].find(x => x.taskId !== taskId)) {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
                } else {
                    let foundTask = sprintCollection[assignee].find(x => x.taskId === taskId);
                    foundTask.taskStatus = newStatus;
                }
            }
        }

        else if (command === 'Remove Task') {
            assignee = splittedLine[1];
            idx = splittedLine[2];

            if (!sprintCollection.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`)    
            } else {
                if ((idx < 0 || idx >= sprintCollection[assignee].length)) {
                    console.log('Index is out of range!')
                } else {
                    sprintCollection[assignee].splice(idx, 1);
                }
                
            }
        }

    }


    let todoPts = 0;
    let inProgressPts = 0;
    let codeReviewPts = 0;
    let donePts = 0;

    let allSprints = Object.values(sprintCollection);

    for (let assigneeSprints of allSprints) {
        let todoSprints = assigneeSprints.filter(s => s.taskStatus === 'ToDo');
        for (let x of todoSprints) {
            todoPts += x.estimatedPoints
        }    

        let inprogressSprints = assigneeSprints.filter(s => s.taskStatus === 'In Progress');
        for (let x of inprogressSprints) {
            inProgressPts += x.estimatedPoints
        }
        
        let codeReviewSprints = assigneeSprints.filter(s => s.taskStatus === 'Code Review');
        for (let x of codeReviewSprints) {
            codeReviewPts += x.estimatedPoints
        }
    
        let doneSprints = assigneeSprints.filter(s => s.taskStatus === 'Done');
        for (let x of doneSprints) {
            donePts += x.estimatedPoints
        }
    }

    console.log(`ToDo: ${todoPts}pts`);
    console.log(`In Progress: ${inProgressPts}pts`);
    console.log(`Code Review: ${codeReviewPts}pts`);
    console.log(`Done Points: ${donePts}pts`);

    if (donePts >= (todoPts + inProgressPts + codeReviewPts)) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...')
    }

}


// solve(  [
//     '4',
//     'Kiril:BOP-1213:Fix Typo:Done:1',
//     'Peter:BOP-1214:New Products Page:In Progress:2',
//     'Mariya:BOP-1215:Setup Routing:ToDo:8',
//     'Georgi:BOP-1216:Add Business Card:Code Review:3',
//     'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
//     'Change Status:Georgi:BOP-1216:Done',
//     'Change Status:Will:BOP-1212:In Progress',
//     'Remove Task:Georgi:3',
//     'Change Status:Mariya:BOP-1215:Done',
// ]
// )