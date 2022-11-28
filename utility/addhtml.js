
function addhtml(workeraray){
const finalaray=[]

function managercard(employee){

    return `
    <h3>${employee.getroll()}</h3>
    <h3>${employee.getname()}</h3>
    <h3>${employee.getemail()}</h3>
    <h3>${employee.getofficeNumber()}</h3>
    `
}





return finalaray.join("")
}

module.exports=workeraray=>{

return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Generator</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="wrapper">
    ${addhtml(workeraray)}
    </div>
  </body>
</html>




`

}