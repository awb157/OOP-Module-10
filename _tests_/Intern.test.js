const Intern = require("../lib/Intern")


describe('Intern', () => {
    it('can get school', () => {
 const school ="Hillcrest"

      const example = new Intern("Austin",123,"awb157@gmial.com",school)

      expect(example.school).toEqual(school);
    });

    it('can get school with method getschool', () => {
        const school ="awb157"
       
             const example = new Intern("Austin",123,"awb157@gmial.com",school)
       
             expect(example.getschool()).toEqual(school);
           });

      it('get roll should get Intern', () => {
 const roll ="Intern"

        const example = new Intern("austin",123,"awb157@gmail.com","Hillcrest")
  
        expect(example.getroll()).toEqual(roll);
      });

  });