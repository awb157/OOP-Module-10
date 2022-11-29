class Employee{

    constructor(name,id,email){
        this.name=name
        this.id=id
        this.email=email
    }

    getname(){
        return this.name
    }
    getId(){
        return this.id
    }
    getemail(){
        return this.email
    }
    getroll(){
        return "Employee"
    }
}

module.exports=Employee