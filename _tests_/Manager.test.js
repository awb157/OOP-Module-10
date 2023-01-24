const Manager = require("../lib/Manager")


describe('Manager', () => {
    it('can get officeNumber', () => {
 const officeNumber ="122"

      const example = new Manager("Austin",123,"awb157@gmial.com",officeNumber)

      expect(example.officeNumber).toEqual(officeNumber);
    });

    it('can get officeNumber with method getofficeNumber', () => {
        const officeNumber ="123"
       
             const example = new Manager("Austin",123,"awb157@gmial.com",officeNumber)
       
             expect(example.getofficeNumber()).toEqual(officeNumber);
           });

      it('get roll should get Manager', () => {
 const roll ="Manager"

        const example = new Manager("austin",123,"awb157@gmail.com","123")
  
        expect(example.getroll()).toEqual(roll);
      });

  });