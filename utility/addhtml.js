
function addhtml(workeraray){
const finalaray=[]

function managercard(employee){

    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.getroll()}</h5>
      <p class="card-text">${employee.getname()}</p>
      <a href="#" class="btn btn-primary">${employee.getemail()}</a>
      <h3>${employee.getofficeNumber()}</h3>
    </div>
  </div>
    
 `
}

function engineercard(employee){

    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.getroll()}</h5>
      <p class="card-text">${employee.getname()}</p>
      <a href="#" class="btn btn-primary">${employee.getemail()}</a>
      <h3>${employee.getgithub()}</h3>
    </div>
  </div>
    `
}

function interncard(employee){

    return `

    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.getroll()}</h5>
      <p class="card-text">${employee.getname()}</p>
      <a href="#" class="btn btn-primary">email: ${employee.getemail()}</a>
      <h3>school: ${employee.getschool()}</h3>
    </div>
  </div>
    `
}
 


for(var i=0;i<workeraray.length;i++){
if(workeraray[i].getroll()==="Manager"){
finalaray.push(managercard(workeraray[i]))
}
else if(workeraray[i].getroll()==="Engineer"){
    finalaray.push(engineercard(workeraray[i]))
}

else if(workeraray[i].getroll()==="Intern"){
    finalaray.push(interncard(workeraray[i]))
}

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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>

  <!-- As a heading -->
<nav class="navbar bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">our team</span>
  </div>
</nav>

    <div class="wrapper">
    ${addhtml(workeraray)}
    </div>
  </body>
</html>




`

}