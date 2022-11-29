const Engineer = require("../lib/Engineer")


describe('Engineer', () => {
    it('can get github', () => {
 const github ="awb157"

      const example = new Engineer("Austin",123,"awb157@gmial.com",github)

      expect(example.github).toEqual(github);
    });

    it('can get github with method getgithub', () => {
        const github ="awb157"
       
             const example = new Engineer("Austin",123,"awb157@gmial.com",github)
       
             expect(example.getgithub()).toEqual(github);
           });

      it('get roll should get engineer', () => {
 const roll ="Engineer"

        const example = new Engineer("austin",123,"awb157@gmail.com","awb157")
  
        expect(example.getroll()).toEqual(roll);
      });

  });