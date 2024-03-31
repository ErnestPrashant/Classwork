// You need to create 4 routes (4 things that the hospital can do)
// 1. GET - User can check how many kidneys they have and their health
// 2. POST- User can add a new kidney
// 3. PUT - User can replace a kidney, make it healthy
// 4. DELETE- User can remove a kidney

const express = require("express");
const app = express();
const port = 3002;
app.use(express.json());

const users = [{
    name: "John",
    kidneys: [{
        healthy: false,
    },{
        healthy: true,
    }]
}]

app.get('/', (req,res) => {
  const johnkidneys = users[0].kidneys;
  const numberOfKidneys = johnkidneys.length;
//   let noOfHealthyKidneys = 0;
//   for (let i = 0; i < johnkidneys.length; i++) {
//     if(johnkidneys[i].healthy)
//       noOfHealthyKidneys = noOfHealthyKidneys++ ;
//   }
  HealthyKidneys = johnkidneys.filter(item => item.healthy)  //above for loop can be done using filter something like this 
  let noOfHealthyKidneys = HealthyKidneys.length;
  const noOfUnhealthyKidneys = numberOfKidneys - noOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys
  })

})

app.post('/', (req,res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  })

  res.json({
    msg: "Done..."
  })
})

app.put('/', (req,res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;    
  }
  res.json({})           //even if you are not returning anything you have to write this .
})


app.delete('/', (req,res) => {      //removing all the unhealthy kidneys
if(areThereAnyUnhealthyKindey()){
let newKidnews = [];
for (let i = 0; i < users[0].kidneys.length; i++) {
    if(users[0].kidneys[i].healthy){
        newKidnews.push({
            healthy: true
        })
    }    
} 
users[0].kidneys = newKidnews; 
res.json({msg: 'done'})
}
else{
    res.status(411).json({
        msg: "You do not have any unhealthy kidney"
    })
}
})

function areThereAnyUnhealthyKindey(){
    isUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy){
            isUnhealthyKidney = true;
        }    
    } 
    return isUnhealthyKidney;
}

app.listen(port, () => {
    console.log(`port listening on port ${port}`);
})