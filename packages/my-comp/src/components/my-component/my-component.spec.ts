import { newSpecPage } from '@stencil/core/testing';
import { helloTsc } from '@nx-stencil/hello-tsc';
import { MyComponent } from './my-component';


// describe('my-component', () => {
//   it('renders', async () => {
//     expect(true).toEqual(true)
//   });
// });
describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm : hello-tsc
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS : hello-tsc
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
