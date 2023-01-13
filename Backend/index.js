let startDate=20211201
let endDate=20230426
let bag=""
let bag1=""
startDate=startDate.toString().split("");
endDate=endDate.toString().split("");
console.log(startDate);
for(let i=0;i<startDate.length;i++){
    if(i==4){
     bag=bag+"-"+startDate[i]
     console.log(bag);
    }else if(i==6){
        bag=bag+"-"+startDate[i]
        console.log(bag);
    }
    else{
        bag=bag+startDate[i]
    }
}
for(let i=0;i<endDate.length;i++){
    if(i==4){
     bag1=bag1+"-"+endDate[i]
     console.log(bag);
    }else if(i==6){
        bag1=bag1+"-"+endDate[i]
        console.log(bag);
    }
    else{
        bag1=bag1+endDate[i]
    }
}

let currentDate= new Date(bag)
let endingDate= new Date(bag1)
console.log(currentDate,endingDate);
let dates=[]
while(currentDate<=endingDate){
    if(currentDate.getDay()<=5){
        dates.push(new Date(currentDate))
    }
    let next=currentDate.getDate()+1
    currentDate.setDate(next)
   
}

console.log(dates)