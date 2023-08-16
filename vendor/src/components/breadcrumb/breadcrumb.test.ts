import '../../../dist/leonardo.js';
import { expect, fixture, html } from '@open-wc/testing';
import type LdBreadcrumb from './breadcrumb.js';

// The default link color just misses AA contrast, but the next step up is way too dark. Maybe we can solve this in the
// future with a prefers-contrast media query.
const ignoredRules = ['color-contrast'];

describe('<ld-breadcrumb>', () => {
  let el: LdBreadcrumb;

  describe('when provided a standard list of el-breadcrumb-item children and no parameters', () => {
    before(async () => {
      el = await fixture<LdBreadcrumb>(html`
        <ld-breadcrumb>
          <ld-breadcrumb-item>Catalog</ld-breadcrumb-item>
          <ld-breadcrumb-item>Clothing</ld-breadcrumb-item>
          <ld-breadcrumb-item>Women's</ld-breadcrumb-item>
          <ld-breadcrumb-item>Shirts &amp; Tops</ld-breadcrumb-item>
        </ld-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it('should render ld-icon as separator', () => {
      expect(el.querySelectorAll('ld-icon').length).to.eq(4);
    });

    it('should attach aria-current "page" on the last breadcrumb item.', () => {
      const breadcrumbItems = el.querySelectorAll('ld-breadcrumb-item');
      const lastNode = breadcrumbItems[3];
      expect(lastNode).attribute('aria-current', 'page');
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "separator" to support Custom Separators', () => {
    before(async () => {
      el = await fixture<LdBreadcrumb>(html`
        <ld-breadcrumb>
          <span class="replacement-separator" slot="separator">/</span>
          <ld-breadcrumb-item>First</ld-breadcrumb-item>
          <ld-breadcrumb-item>Second</ld-breadcrumb-item>
          <ld-breadcrumb-item>Third</ld-breadcrumb-item>
        </ld-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it('should accept "separator" as an assigned child in the shadow root', () => {
      const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name=separator]')!;
      const childNodes = slot.assignedNodes({ flatten: true });

      expect(childNodes.length).to.eq(1);
    });

    it('should replace the ld-icon separator with the provided separator', () => {
      expect(el.querySelectorAll('.replacement-separator').length).to.eq(4);
      expect(el.querySelectorAll('ld-icon').length).to.eq(0);
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "prefix" to support prefix icons', () => {
    before(async () => {
      el = await fixture<LdBreadcrumb>(html`
        <ld-breadcrumb>
          <ld-breadcrumb-item>
            <span class="prefix-example" slot="prefix">/</span>
            Home
          </ld-breadcrumb-item>
          <ld-breadcrumb-item>First</ld-breadcrumb-item>
          <ld-breadcrumb-item>Second</ld-breadcrumb-item>
          <ld-breadcrumb-item>Third</ld-breadcrumb-item>
        </ld-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "suffix" to support suffix icons', () => {
    before(async () => {
      el = await fixture<LdBreadcrumb>(html`
        <ld-breadcrumb>
          <ld-breadcrumb-item>First</ld-breadcrumb-item>
          <ld-breadcrumb-item>Second</ld-breadcrumb-item>
          <ld-breadcrumb-item>Third</ld-breadcrumb-item>
          <ld-breadcrumb-item>
            <span class="prefix-example" slot="suffix">/</span>
            Security
          </ld-breadcrumb-item>
        </ld-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });
});
