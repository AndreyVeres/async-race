export default class Component {
  element: HTMLElement;
  private template: string;
  private model: Record<string, string>;
  private parentElement: HTMLElement | null;
  constructor(
    parentElement: HTMLElement | null,
    tagName: keyof HTMLElementTagNameMap = 'div',
    styles: string[] = [],
    template = '',
    model: Record<string, string> = {}

  ) {
    this.parentElement = parentElement || null;
    this.element = document.createElement(tagName);
    this.template = template;
    this.model = model;
    this.buildTemplate();
    this.element.innerHTML = this.template;
    this.element.classList.add(...styles);

    if (parentElement) parentElement.append(this.element);
    else this.render();
  }

  private buildTemplate() {
    Object.entries(this.model).forEach(([key, value]) => {
      this.template = this.template.replaceAll(`{{${key}}}`, value);
    });
  }

  render(): HTMLElement {
    return this.element;
  }

  destroy(): void {
    this.element.remove();
  }
}
