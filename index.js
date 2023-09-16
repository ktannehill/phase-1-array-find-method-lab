const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
]

// function superbowlWin(arr) {
//     console.log(arr.result)
//     if(arr.result === 'W') {
//         console.log(arr.year)
//         return arr.year.year
//     }
//     return undefined
// }

// const superbowlWin = (obj) => {
//     let response;
//     if (obj.result === "W") {
//         console.log("true for: ", obj.year)
//         console.log(obj["year"])
//         console.log(obj.year)
//         response = obj["year"]
//         return response
    
//     }
//     // return undefined
// } 

// let winningYear = record.find(superbowlWin)
// let winningYear = record.find(superbowlWin)

// console.log(winningYear)
// FIND returns WHOLE OBJ no parts, have to select .year separately 



function superbowlWin(records) {
    const winningRecord = records.find(record => record.result === 'W');
    if (winningRecord) {
      return winningRecord.year;
    }
    return undefined; // Return undefined if no winning record is found
}

console.log(superbowlWin(record))