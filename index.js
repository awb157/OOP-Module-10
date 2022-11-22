const Engineer=require("./lib/Engineer");
const Intern=require("./lib/Intern");
const Manager=require("./lib/Manager");
const inquirer=require("inquirer");
const fs= require("fs");

const workeraray=[]
//const worker=new Engineer("austin",20395,"awb157@gmial.com","awb157")
//console.log(worker)

Managerquestions()
function Managerquestions(){
    inquirer.prompt([
        {
            type:"input",
            name:"managername",
            message:"managers name",
        },
        {
            type:"input",
            name:"managerId",
            message:"managers ID",
        },

        {
            type:"input",
            name:"email",
            message:"managers Email",
        },

        {
            type:"input",
            name:"officenumber",
            message:"managers Office Number",
        },

    ])
    .then(responce=>{
        const employee=new Manager(responce.managername,responce.managerId,responce.email,responce.officenumber)
workeraray.push(employee)
console.log (workeraray)
    })
}



function engineerquestions(){
    inquirer.prompt([
        {
            type:"input",
            name:"engineername",
            message:"engineer name",
        },
        {
            type:"input",
            name:"engineerId",
            message:"engineer ID",
        },

        {
            type:"input",
            name:"email",
            message:"engineer Email",
        },

        {
            type:"input",
            name:"gethub",
            message:"engineer github",
        },

    ])
    .then(responce=>{
        const employee=new Engineer(responce.engineername,responce.engineerId,responce.email,responce.gethub)
workeraray.push(employee)
console.log (workeraray)
    })
}

function internquestions(){
    inquirer.prompt([
        {
            type:"input",
            name:"internname",
            message:"intern name",
        },
        {
            type:"input",
            name:"internId",
            message:"intern ID",
        },

        {
            type:"input",
            name:"email",
            message:"intern Email",
        },

        {
            type:"input",
            name:"school name",
            message:"internschool",
        },

    ])
    .then(responce=>{
        const employee=new intern(responce.internname,responce.internId,responce.email,responce.schoolname)
workeraray.push(employee)
console.log (workeraray)
    })
}