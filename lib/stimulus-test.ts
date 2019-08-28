import { Application } from 'stimulus';
import { Controller } from 'stimulus';
import { ControllerConstructor } from 'stimulus';

export class StimulusTest {
  controller: Controller
  controllerClass: ControllerConstructor
  controllerAttribute: string
  element: HTMLElement
  fixture: string
  application: Application

  constructor(options) {
    this.controllerAttribute = options.controllerAttribute
    this.controllerClass = options.controllerClass
    this.fixture = options.fixture
  }

  public async setup() {
    this.addFixture();
    await this.registerApplication();
  }

  private addFixture() {
    document.body.insertAdjacentHTML('beforeend', this.fixture);
    this.element = document.querySelector(`[data-controller=${this.controllerAttribute}]`);
  }

  private async registerApplication() {
    if (this.controllerClass && this.controllerAttribute) {
      this.application = Application.start();
      this.application.register(this.controllerAttribute, this.controllerClass);
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        this.controller = this.application.getControllerForElementAndIdentifier(
          this.element,
          this.controllerAttribute,
        );

        resolve();
      });
    });
  }
}
