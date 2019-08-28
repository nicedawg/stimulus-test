import { BasicController } from '../basic-controller';
import { StimulusTest } from '../../dist/stimulus-test';

let fixture = `
  <button data-controller="basic" data-action="basic#update">Click Me</button>
`;

/*
 * @controller BasicController
 * @identifier basic
 */
describe('BasicController', () => {
  let test;

  beforeEach((done) => {
    test = new StimulusTest({
      controllerClass: BasicController,
      controllerAttribute: 'basic',
      fixture: fixture,
    });

    test.setup().then(() => done());
  });

  describe("when you click the button", () => {
    beforeEach(() => {
      document.querySelector("button").click();
    });

    it("says you clicked it one time", () => {
      expect(document.body.innerHTML).toMatch(/clicked me 1 time/);
    });
  });

  describe("when you click the button twice", () => {
    beforeEach(() => {
      document.querySelector("button").click();
      document.querySelector("button").click();
    });

    it("says you clicked it two times", () => {
      expect(document.body.innerHTML).toMatch(/clicked me 2 times/);
    });
  });
});
