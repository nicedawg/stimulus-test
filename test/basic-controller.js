import { Controller } from "stimulus"

export class BasicController extends Controller {
  connect() {
    this.count = 0;
  }

  update() {
    this.count += 1;
    document.body.insertAdjacentHTML('beforeend', `You clicked me ${this.count} times<br>`);
  }
}
