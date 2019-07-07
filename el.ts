import { ExportedBase } from "./base";
import { Checked } from './baz';

class Base extends HTMLElement {
  checked!: boolean;
}

class ExtendsClass extends Base {
}

class ExtendsImport extends ExportedBase {
}

declare global {
  interface HTMLElementTagNameMap {
    'extends-class': ExtendsClass;
    'extends-import': ExtendsImport;
  }
}

export {};
