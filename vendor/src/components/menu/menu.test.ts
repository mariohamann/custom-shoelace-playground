import '../../../dist/leonardo.js';
import { clickOnElement } from '../../internal/test.js';
import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type LdMenu from './menu';
import type LdSelectEvent from '../../events/ld-select';

describe('<ld-menu>', () => {
  it('emits ld-select with the correct event detail when clicking an item', async () => {
    const menu = await fixture<LdMenu>(html`
      <ld-menu>
        <ld-menu-item value="item-1">Item 1</ld-menu-item>
        <ld-menu-item value="item-2">Item 2</ld-menu-item>
        <ld-menu-item value="item-3">Item 3</ld-menu-item>
        <ld-menu-item value="item-4">Item 4</ld-menu-item>
      </ld-menu>
    `);
    const item2 = menu.querySelectorAll('ld-menu-item')[1];
    const selectHandler = sinon.spy((event: LdSelectEvent) => {
      const item = event.detail.item;
      if (item !== item2) {
        expect.fail('Incorrect event detail emitted with ld-select');
      }
    });

    menu.addEventListener('ld-select', selectHandler);
    await clickOnElement(item2);

    expect(selectHandler).to.have.been.calledOnce;
  });

  it('can be selected via keyboard', async () => {
    const menu = await fixture<LdMenu>(html`
      <ld-menu>
        <ld-menu-item value="item-1">Item 1</ld-menu-item>
        <ld-menu-item value="item-2">Item 2</ld-menu-item>
        <ld-menu-item value="item-3">Item 3</ld-menu-item>
        <ld-menu-item value="item-4">Item 4</ld-menu-item>
      </ld-menu>
    `);
    const [item1, item2] = menu.querySelectorAll('ld-menu-item');
    const selectHandler = sinon.spy((event: LdSelectEvent) => {
      const item = event.detail.item;
      if (item !== item2) {
        expect.fail('Incorrect item selected');
      }
    });

    menu.addEventListener('ld-select', selectHandler);

    item1.focus();
    await item1.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    await sendKeys({ press: 'Enter' });

    expect(selectHandler).to.have.been.calledOnce;
  });

  it('does not select disabled items when clicking', async () => {
    const menu = await fixture<LdMenu>(html`
      <ld-menu>
        <ld-menu-item value="item-1">Item 1</ld-menu-item>
        <ld-menu-item value="item-2" disabled>Item 2</ld-menu-item>
        <ld-menu-item value="item-3">Item 3</ld-menu-item>
        <ld-menu-item value="item-4">Item 4</ld-menu-item>
      </ld-menu>
    `);
    const item2 = menu.querySelectorAll('ld-menu-item')[1];
    const selectHandler = sinon.spy();

    menu.addEventListener('ld-select', selectHandler);

    await clickOnElement(item2);

    expect(selectHandler).to.not.have.been.calledOnce;
  });

  it('does not select disabled items when pressing enter', async () => {
    const menu = await fixture<LdMenu>(html`
      <ld-menu>
        <ld-menu-item value="item-1">Item 1</ld-menu-item>
        <ld-menu-item value="item-2" disabled>Item 2</ld-menu-item>
        <ld-menu-item value="item-3">Item 3</ld-menu-item>
        <ld-menu-item value="item-4">Item 4</ld-menu-item>
      </ld-menu>
    `);
    const [item1, item2] = menu.querySelectorAll('ld-menu-item');
    const selectHandler = sinon.spy();

    menu.addEventListener('ld-select', selectHandler);

    item1.focus();
    await item1.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    expect(document.activeElement).to.equal(item2);
    await sendKeys({ press: 'Enter' });
    await item2.updateComplete;

    expect(selectHandler).to.not.have.been.called;
  });
});
