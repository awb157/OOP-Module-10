const Employee=require("../lib/Employee")

describe('employee', () => {
    it('testing to see if the constructor can run the project', () => {
 

      const example = new Employee()

      expect(typeof(example)).toBe("object");
    });

    it('it should take in a name', () => {
 const name ="Austin"

        const example = new Employee(name)
  
        expect(example.name).toEqual(name);
      });
      it('it should take in an id', () => {
 const id =123

        const example = new Employee("austin",id)
  
        expect(example.id).toEqual(id);
      });

      it('it should take in an email', () => {
 const email ="awb157@gmail.com"

        const example = new Employee("austin",123,email)
  
        expect(example.email).toEqual(email);
      });
  });