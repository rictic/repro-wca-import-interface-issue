import {Checked as CheckedImported} from './baz';

interface Checked {
  checked: boolean;
}

interface ExtendsSameFile extends Checked, HTMLElement {
  // Declaring this property should be a no-op, as it's in Checked
  // checked: boolean;
}

declare global {
  interface HTMLElementTagNameMap {
    'extends-declaration': ExtendsSameFile;
  }
}

interface ExtendsImported extends CheckedImported, HTMLElement {
}

declare global {
  interface HTMLElementTagNameMap {
    'extends-imported': ExtendsImported;
  }
}

console.log(document.createElement('extends-imported').checked);


// TypeScript finds the `checked` property, but web-component-analyzer does not.
console.log(document.createElement('extends-declaration').checked);

export {};
