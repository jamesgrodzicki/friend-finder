const friendsArray = [
    {
        name: 'john',
        age: '35',
        phoneNumber: '333-333-3333',
        scores: ['3', '3', '3', '3', '3']
    },
    {
        name: 'heheh',
        age: '22',
        phoneNumber: '222-222-2222',
        scores: ['1', '1', '1', '1', '1']
    }
];

function compatibility(existingArr){
    const userArrInt = existingArr[existingArr.length-1].scores.map(Number);
    let bestMatch = 21;
    let bestMatchArr = [];
    let arrayCheck;
    for(let i=0;i<existingArr.length-1;i++){
        let totalDiff = 0;
        arrayCheck = existingArr[i].scores.map(Number);
        for(let j=0;j<arrayCheck.length;j++){
            totalDiff += Math.abs(userArrInt[j] - arrayCheck[j]);
        }
        if(totalDiff < bestMatch){
            bestMatch = totalDiff;
            bestMatchArr = [existingArr[i]];
        } else if(totalDiff == bestMatch){
            bestMatchArr.push(existingArr[i]);
        }
    }
    return bestMatchArr;
}

module.exports = {
    friendsArray: friendsArray,
    compatibility: compatibility
};