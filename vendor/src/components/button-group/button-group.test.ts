import '../../../dist/leonardo.js';
import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import type LdButtonGroup from './button-group.js';

describe('<ld-button-group>', () => {
  describe('defaults ', () => {
    it('passes accessibility test', async () => {
      const group = await fixture<LdButtonGroup>(html`
        <ld-button-group>
          <ld-button>Button 1 Label</ld-button>
          <ld-button>Button 2 Label</ld-button>
          <ld-button>Button 3 Label</ld-button>
        </ld-button-group>
      `);
      await expect(group).to.be.accessible();
    });

    it('default label empty', async () => {
      const group = await fixture<LdButtonGroup>(html`
        <ld-button-group>
          <ld-button>Button 1 Label</ld-button>
          <ld-button>Button 2 Label</ld-button>
          <ld-button>Button 3 Label</ld-button>
        </ld-button-group>
      `);
      expect(group.label).to.equal('');
    });
  });

  describe('slotted button classes', () => {
    it('slotted buttons have the right classes applied based on their order', async () => {
      const group = await fixture<LdButtonGroup>(html`
        <ld-button-group>
          <ld-button>Button 1 Label</ld-button>
          <ld-button>Button 2 Label</ld-button>
          <ld-button>Button 3 Label</ld-button>
        </ld-button-group>
      `);

      const allButtons = group.querySelectorAll('ld-button');
      const hasGroupClass = Array.from(allButtons).every(button =>
        button.classList.contains('ld-button-group__button')
      );
      expect(hasGroupClass).to.be.true;

      expect(allButtons[0]).to.have.class('ld-button-group__button--first');
      expect(allButtons[1]).to.have.class('ld-button-group__button--inner');
      expect(allButtons[2]).to.have.class('ld-button-group__button--last');
    });
  });

  describe('focus and blur events', () => {
    it('toggles focus class to slotted buttons on focus/blur', async () => {
      const group = await fixture<LdButtonGroup>(html`
        <ld-button-group>
          <ld-button>Button 1 Label</ld-button>
          <ld-button>Button 2 Label</ld-button>
          <ld-button>Button 3 Label</ld-button>
        </ld-button-group>
      `);

      const allButtons = group.querySelectorAll('ld-button');
      allButtons[0].dispatchEvent(new FocusEvent('focusin', { bubbles: true }));

      await elementUpdated(allButtons[0]);
      expect(allButtons[0].classList.contains('ld-button-group__button--focus')).to.be.true;

      allButtons[0].dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
      await elementUpdated(allButtons[0]);
      expect(allButtons[0].classList.contains('ld-button-group__button--focus')).not.to.be.true;
    });
  });

  describe('mouseover and mouseout events', () => {
    it('toggles hover class to slotted buttons on mouseover/mouseout', async () => {
      const group = await fixture<LdButtonGroup>(html`
        <ld-button-group>
          <ld-button>Button 1 Label</ld-button>
          <ld-button>Button 2 Label</ld-button>
          <ld-button>Button 3 Label</ld-button>
        </ld-button-group>
      `);

      const allButtons = group.querySelectorAll('ld-button');

      allButtons[0].dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      await elementUpdated(allButtons[0]);
      expect(allButtons[0].classList.contains('ld-button-group__button--hover')).to.be.true;

      allButtons[0].dispatchEvent(new MouseEvent('mouseout', { bubbles: true }));
      await elementUpdated(allButtons[0]);
      expect(allButtons[0].classList.contains('ld-button-group__button--hover')).not.to.be.true;
    });
  });
});
