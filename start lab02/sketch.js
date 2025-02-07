let friend01 = {name:"David", age:46, bowling:true};
let friend02 = {name:"Pete", age:29, bowling:false};
let friend03 = {name:"John", age:36, bowling:true};
let friend04 = {name:"Mary", age:30, bowling:false};
let friend05 = {name:"Jason", age:25, bowling:true};


let friends = [];
let friendAges=[];
let friendBowlingAges=[];

friends.push(friend01)
friends.push(friend02)
friends.push(friend03)
friends.push(friend04)
friends.push(friend05)

for(let index=0; index<5; index++){
        friendAges.push(friends[index].age)
}

for(let index=0; index<5; index++){
    if(friends[index].bowling == true){
        friendBowlingAges.push(friends[index].age)
    }
}

function calcAvg(arrayNum) {
    
    let avg = 0;

for (let index = 0; index < arrayNum.length; index++) {
    avg = avg + arrayNum[index];
}
    return avg / arrayNum.length;
}

// for(let i = 0; i<100; i++){
//     if(i%2==0){console.log(i)}
// }

function median(arrayNums){
    if (arrayNums.length%2==0){
        console.log("its even")
    }  else {
        return arrayNums[Math.floor(arrayNums.length/2)]
    }
}

 function median(arrayNums){
    arrayNums.sort((a,b) => (a-b))
     if (arrayNums.length%2==0){
        let endNum = arrayNums.length/2  
        let startNum = endNum - 1

        return (arrayNums[startNum] + arrayNums[endNum])/2
     
     }  else {
         return arrayNums[Math.floor(arrayNums.length/2)]
     }
 }