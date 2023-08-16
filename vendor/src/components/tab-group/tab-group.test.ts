import '../../../dist/leonardo.js';
import { aTimeout, elementUpdated, expect, fixture, oneEvent, waitUntil } from '@open-wc/testing';
import { clickOnElement } from '../../internal/test.js';
import { html } from 'lit';
import { isElementVisibleFromOverflow } from '../../internal/test/element-visible-overflow.js';
import { queryByTestId } from '../../internal/test/data-testid-helpers.js';
import { sendKeys } from '@web/test-runner-commands';
import { waitForScrollingToEnd } from '../../internal/test/wait-for-scrolling.js';
import type { HTMLTemplateResult } from 'lit';
import type LdTab from '../tab/tab.js';
import type LdTabGroup from './tab-group.js';
import type LdTabPanel from '../tab-panel/tab-panel.js';
import type LdTabShowEvent from '../../events/ld-tab-show.js';

interface ClientRectangles {
  body?: DOMRect;
  navigation?: DOMRect;
}

const waitForScrollButtonsToBeRendered = async (tabGroup: LdTabGroup): Promise<void> => {
  await waitUntil(() => {
    const scrollButtons = tabGroup.shadowRoot?.querySelectorAll('ld-icon-button');
    return scrollButtons?.length === 2;
  });
};

const getClientRectangles = (tabGroup: LdTabGroup): ClientRectangles => {
  const shadowRoot = tabGroup.shadowRoot;
  if (shadowRoot) {
    const nav = shadowRoot.querySelector<HTMLElement>('[part=nav]');
    const body = shadowRoot.querySelector<HTMLElement>('[part=body]');
    return {
      body: body?.getBoundingClientRect(),
      navigation: nav?.getBoundingClientRect()
    };
  }
  return {};
};

const expectHeaderToBeVisible = (container: HTMLElement, dataTestId: string): void => {
  const generalHeader = queryByTestId<LdTab>(container, dataTestId);
  expect(generalHeader).not.to.be.null;
  expect(generalHeader).to.be.visible;
};

const expectOnlyOneTabPanelToBeActive = async (container: HTMLElement, dataTestIdOfActiveTab: string) => {
  await waitUntil(() => {
    const tabPanels = Array.from(container.getElementsByTagName('ld-tab-panel'));
    const activeTabPanels = tabPanels.filter((element: LdTabPanel) => element.hasAttribute('active'));
    return activeTabPanels.length === 1;
  });
  const tabPanels = Array.from(container.getElementsByTagName('ld-tab-panel'));
  const activeTabPanels = tabPanels.filter((element: LdTabPanel) => element.hasAttribute('active'));
  expect(activeTabPanels).to.have.lengthOf(1);
  expect(activeTabPanels[0]).to.have.attribute('data-testid', dataTestIdOfActiveTab);
};

const expectPromiseToHaveName = async (showEventPromise: Promise<LdTabShowEvent>, expectedName: string) => {
  const showEvent = await showEventPromise;
  expect(showEvent.detail.name).to.equal(expectedName);
};

const waitForHeaderToBeActive = async (container: HTMLElement, headerTestId: string): Promise<LdTab> => {
  const generalHeader = queryByTestId<LdTab>(container, headerTestId);
  await waitUntil(() => {
    return generalHeader?.hasAttribute('active');
  });
  if (generalHeader) {
    return generalHeader;
  } else {
    throw new Error(`did not find error with testid=${headerTestId}`);
  }
};

describe('<ld-tab-group>', () => {
  it('renders', async () => {
    const tabGroup = await fixture<LdTabGroup>(html`
      <ld-tab-group>
        <ld-tab slot="nav" panel="general">General</ld-tab>
        <ld-tab-panel name="general">This is the general tab panel.</ld-tab-panel>
      </ld-tab-group>
    `);

    expect(tabGroup).to.be.visible;
  });

  it('is accessible', async () => {
    const tabGroup = await fixture<LdTabGroup>(html`
      <ld-tab-group>
        <ld-tab slot="nav" panel="general">General</ld-tab>
        <ld-tab-panel name="general">This is the general tab panel.</ld-tab-panel>
      </ld-tab-group>
    `);

    await expect(tabGroup).to.be.accessible();
  });

  it('displays all tabs', async () => {
    const tabGroup = await fixture<LdTabGroup>(html`
      <ld-tab-group>
        <ld-tab slot="nav" panel="general" data-testid="general-tab-header">General</ld-tab>
        <ld-tab slot="nav" panel="disabled" disabled data-testid="disabled-tab-header">Disabled</ld-tab>
        <ld-tab-panel name="general">This is the general tab panel.</ld-tab-panel>
        <ld-tab-panel name="disabled">This is a disabled tab panel.</ld-tab-panel>
      </ld-tab-group>
    `);

    expectHeaderToBeVisible(tabGroup, 'general-tab-header');
    expectHeaderToBeVisible(tabGroup, 'disabled-tab-header');
  });

  it('shows the first tab to be active by default', async () => {
    const tabGroup = await fixture<LdTabGroup>(html`
      <ld-tab-group>
        <ld-tab slot="nav" panel="general">General</ld-tab>
        <ld-tab slot="nav" panel="custom">Custom</ld-tab>
        <ld-tab-panel name="general" data-testid="general-tab-content">This is the general tab panel.</ld-tab-panel>
        <ld-tab-panel name="custom">This is the custom tab panel.</ld-tab-panel>
      </ld-tab-group>
    `);

    await expectOnlyOneTabPanelToBeActive(tabGroup, 'general-tab-content');
  });

  describe('proper positioning', () => {
    it('shows the header above the tabs by default', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`
        <ld-tab-group>
          <ld-tab slot="nav" panel="general">General</ld-tab>
          <ld-tab-panel name="general">This is the general tab panel.</ld-tab-panel>
        </ld-tab-group>
      `);

      await aTimeout(0);

      const clientRectangles = getClientRectangles(tabGroup);
      expect(clientRectangles.body?.top).to.be.greaterThanOrEqual(clientRectangles.navigation?.bottom || -Infinity);
    });

    it('shows the header below the tabs by setting placement to bottom', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`
        <ld-tab-group>
          <ld-tab slot="nav" panel="general">General</ld-tab>
          <ld-tab-panel name="general">This is the general tab panel.</ld-tab-panel>
        </ld-tab-group>
      `);
      tabGroup.placement = 'bottom';

      await aTimeout(0);

      const clientRectangles = getClientRectangles(tabGroup);
      expect(clientRectangles.body?.bottom).to.be.lessThanOrEqual(clientRectangles.navigation?.top || +Infinity);
    });

    it('shows the header left of the tabs by setting placement to start', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`
        <ld-tab-group>
          <ld-tab slot="nav" panel="general">General</ld-tab>
          <ld-tab-panel name="general">This is the general tab panel.</ld-tab-panel>
        </ld-tab-group>
      `);
      tabGroup.placement = 'start';

      await aTimeout(0);

      const clientRectangles = getClientRectangles(tabGroup);
      expect(clientRectangles.body?.left).to.be.greaterThanOrEqual(clientRectangles.navigation?.right || -Infinity);
    });

    it('shows the header right of the tabs by setting placement to end', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`
        <ld-tab-group>
          <ld-tab slot="nav" panel="general">General</ld-tab>
          <ld-tab-panel name="general">This is the general tab panel.</ld-tab-panel>
        </ld-tab-group>
      `);
      tabGroup.placement = 'end';

      await aTimeout(0);

      const clientRectangles = getClientRectangles(tabGroup);
      expect(clientRectangles.body?.right).to.be.lessThanOrEqual(clientRectangles.navigation?.left || -Infinity);
    });
  });

  describe('scrolling behavior', () => {
    const generateTabs = (n: number): HTMLTemplateResult[] => {
      const result: HTMLTemplateResult[] = [];
      for (let i = 0; i < n; i++) {
        result.push(html`<ld-tab slot="nav" panel="tab-${i}">Tab ${i}</ld-tab>
          <ld-tab-panel name="tab-${i}">Content of tab ${i}0</ld-tab-panel> `);
      }
      return result;
    };

    before(() => {
      // disabling failing on resize observer ... unfortunately on webkit this is not really specific
      // https://github.com/WICG/resize-observer/issues/38#issuecomment-422126006
      // https://stackoverflow.com/a/64197640
      const errorHandler = window.onerror;
      window.onerror = (
        event: string | Event,
        source?: string | undefined,
        lineno?: number | undefined,
        colno?: number | undefined,
        error?: Error | undefined
      ) => {
        if ((event as string).includes('ResizeObserver') || event === 'Script error.') {
          return true;
        } else if (errorHandler) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return errorHandler(event, source, lineno, colno, error);
        } else {
          return true;
        }
      };
    });

    it('shows scroll buttons on too many tabs', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`<ld-tab-group> ${generateTabs(30)} </ld-tab-group>`);

      await waitForScrollButtonsToBeRendered(tabGroup);

      const scrollButtons = tabGroup.shadowRoot?.querySelectorAll('ld-icon-button');
      expect(scrollButtons, 'Both scroll buttons should be shown').to.have.length(2);

      tabGroup.disconnectedCallback();
    });

    it('does not show scroll buttons on too many tabs if deactivated', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`<ld-tab-group> ${generateTabs(30)} </ld-tab-group>`);
      tabGroup.noScrollControls = true;

      await aTimeout(0);

      const scrollButtons = tabGroup.shadowRoot?.querySelectorAll('ld-icon-button');
      expect(scrollButtons).to.have.length(0);
    });

    it('does not show scroll buttons if all tabs fit on the screen', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`<ld-tab-group> ${generateTabs(2)} </ld-tab-group>`);

      await aTimeout(0);

      const scrollButtons = tabGroup.shadowRoot?.querySelectorAll('ld-icon-button');
      expect(scrollButtons).to.have.length(0);
    });

    // TODO - this fails sporadically, likely due to a timing issue. It tests fine manually.
    it.skip('does not show scroll buttons if placement is start', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`<ld-tab-group> ${generateTabs(50)} </ld-tab-group>`);
      tabGroup.placement = 'start';

      await aTimeout(0);

      const scrollButtons = tabGroup.shadowRoot?.querySelectorAll('ld-icon-button');
      expect(scrollButtons).to.have.length(0);
    });

    // TODO - this fails sporadically, likely due to a timing issue. It tests fine manually.
    it.skip('does not show scroll buttons if placement is end', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`<ld-tab-group> ${generateTabs(50)} </ld-tab-group>`);
      tabGroup.placement = 'end';

      await aTimeout(0);

      const scrollButtons = tabGroup.shadowRoot?.querySelectorAll('ld-icon-button');
      expect(scrollButtons).to.have.length(0);
    });

    // TODO - this fails sporadically, likely due to a timing issue. It tests fine manually.
    it.skip('does scroll on scroll button click', async () => {
      const numberOfElements = 15;
      const tabGroup = await fixture<LdTabGroup>(
        html`<ld-tab-group> ${generateTabs(numberOfElements)} </ld-tab-group>`
      );

      await waitForScrollButtonsToBeRendered(tabGroup);
      const scrollButtons = tabGroup.shadowRoot?.querySelectorAll('ld-icon-button');
      expect(scrollButtons).to.have.length(2);

      const firstTab = tabGroup.querySelector('[panel="tab-0"]');
      expect(firstTab).not.to.be.null;
      const lastTab = tabGroup.querySelector(`[panel="tab-${numberOfElements - 1}"]`);
      expect(lastTab).not.to.be.null;
      expect(isElementVisibleFromOverflow(tabGroup, firstTab!)).to.be.true;
      expect(isElementVisibleFromOverflow(tabGroup, lastTab!)).to.be.false;

      const scrollToRightButton = tabGroup.shadowRoot?.querySelector('ld-icon-button[part*="scroll-button--end"]');
      expect(scrollToRightButton).not.to.be.null;
      await clickOnElement(scrollToRightButton!);

      await elementUpdated(tabGroup);
      await waitForScrollingToEnd(firstTab!);
      await waitForScrollingToEnd(lastTab!);

      expect(isElementVisibleFromOverflow(tabGroup, firstTab!)).to.be.false;
      expect(isElementVisibleFromOverflow(tabGroup, lastTab!)).to.be.true;
    });
  });

  describe('tab selection', () => {
    const expectCustomTabToBeActiveAfter = async (tabGroup: LdTabGroup, action: () => Promise<void>): Promise<void> => {
      const generalHeader = await waitForHeaderToBeActive(tabGroup, 'general-header');
      generalHeader.focus();

      const customHeader = queryByTestId<LdTab>(tabGroup, 'custom-header');
      expect(customHeader).not.to.have.attribute('active');

      const showEventPromise = oneEvent(tabGroup, 'ld-tab-show') as Promise<LdTabShowEvent>;
      await action();

      expect(customHeader).to.have.attribute('active');
      await expectPromiseToHaveName(showEventPromise, 'custom');
      return expectOnlyOneTabPanelToBeActive(tabGroup, 'custom-tab-content');
    };

    const expectGeneralTabToBeStillActiveAfter = async (
      tabGroup: LdTabGroup,
      action: () => Promise<void>
    ): Promise<void> => {
      const generalHeader = await waitForHeaderToBeActive(tabGroup, 'general-header');
      generalHeader.focus();

      let showEventFired = false;
      let hideEventFired = false;
      oneEvent(tabGroup, 'ld-tab-show').then(() => (showEventFired = true));
      oneEvent(tabGroup, 'ld-tab-hide').then(() => (hideEventFired = true));
      await action();

      expect(generalHeader).to.have.attribute('active');
      expect(showEventFired).to.be.false;
      expect(hideEventFired).to.be.false;
      return expectOnlyOneTabPanelToBeActive(tabGroup, 'general-tab-content');
    };

    it('selects a tab by clicking on it', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`
        <ld-tab-group>
          <ld-tab slot="nav" panel="general" data-testid="general-header">General</ld-tab>
          <ld-tab slot="nav" panel="custom" data-testid="custom-header">Custom</ld-tab>
          <ld-tab-panel name="general">This is the general tab panel.</ld-tab-panel>
          <ld-tab-panel name="custom" data-testid="custom-tab-content">This is the custom tab panel.</ld-tab-panel>
        </ld-tab-group>
      `);

      const customHeader = queryByTestId<LdTab>(tabGroup, 'custom-header');
      return expectCustomTabToBeActiveAfter(tabGroup, () => clickOnElement(customHeader!));
    });

    it('does not change if the active tab is reselected', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`
        <ld-tab-group>
          <ld-tab slot="nav" panel="general" data-testid="general-header">General</ld-tab>
          <ld-tab slot="nav" panel="custom">Custom</ld-tab>
          <ld-tab-panel name="general" data-testid="general-tab-content">This is the general tab panel.</ld-tab-panel>
          <ld-tab-panel name="custom">This is the custom tab panel.</ld-tab-panel>
        </ld-tab-group>
      `);

      const generalHeader = queryByTestId(tabGroup, 'general-header');
      return expectGeneralTabToBeStillActiveAfter(tabGroup, () => clickOnElement(generalHeader!));
    });

    it('does not change if a disabled tab is clicked', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`
        <ld-tab-group>
          <ld-tab slot="nav" panel="general" data-testid="general-header">General</ld-tab>
          <ld-tab slot="nav" panel="disabled" data-testid="disabled-header" disabled>disabled</ld-tab>
          <ld-tab-panel name="general" data-testid="general-tab-content">This is the general tab panel.</ld-tab-panel>
          <ld-tab-panel name="disabled">This is the disabled tab panel.</ld-tab-panel>
        </ld-tab-group>
      `);

      const disabledHeader = queryByTestId(tabGroup, 'disabled-header');
      return expectGeneralTabToBeStillActiveAfter(tabGroup, () => clickOnElement(disabledHeader!));
    });

    it('selects a tab by using the arrow keys', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`
        <ld-tab-group>
          <ld-tab slot="nav" panel="general" data-testid="general-header">General</ld-tab>
          <ld-tab slot="nav" panel="custom" data-testid="custom-header">Custom</ld-tab>
          <ld-tab-panel name="general">This is the general tab panel.</ld-tab-panel>
          <ld-tab-panel name="custom" data-testid="custom-tab-content">This is the custom tab panel.</ld-tab-panel>
        </ld-tab-group>
      `);

      return expectCustomTabToBeActiveAfter(tabGroup, () => sendKeys({ press: 'ArrowRight' }));
    });

    it('selects a tab by using the arrow keys and enter if activation is set to manual', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`
        <ld-tab-group>
          <ld-tab slot="nav" panel="general" data-testid="general-header">General</ld-tab>
          <ld-tab slot="nav" panel="custom" data-testid="custom-header">Custom</ld-tab>
          <ld-tab-panel name="general">This is the general tab panel.</ld-tab-panel>
          <ld-tab-panel name="custom" data-testid="custom-tab-content">This is the custom tab panel.</ld-tab-panel>
        </ld-tab-group>
      `);
      tabGroup.activation = 'manual';

      const generalHeader = await waitForHeaderToBeActive(tabGroup, 'general-header');
      generalHeader.focus();

      const customHeader = queryByTestId<LdTab>(tabGroup, 'custom-header');
      expect(customHeader).not.to.have.attribute('active');

      const showEventPromise = oneEvent(tabGroup, 'ld-tab-show') as Promise<LdTabShowEvent>;
      await sendKeys({ press: 'ArrowRight' });
      await aTimeout(0);
      expect(generalHeader).to.have.attribute('active');

      await sendKeys({ press: 'Enter' });

      expect(customHeader).to.have.attribute('active');
      await expectPromiseToHaveName(showEventPromise, 'custom');
      return expectOnlyOneTabPanelToBeActive(tabGroup, 'custom-tab-content');
    });

    it('does not allow selection of disabled tabs with arrow keys', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`
        <ld-tab-group>
          <ld-tab slot="nav" panel="general" data-testid="general-header">General</ld-tab>
          <ld-tab slot="nav" panel="disabled" disabled>Disabled</ld-tab>
          <ld-tab-panel name="general" data-testid="general-tab-content">This is the general tab panel.</ld-tab-panel>
          <ld-tab-panel name="disabled">This is the custom tab panel.</ld-tab-panel>
        </ld-tab-group>
      `);

      return expectGeneralTabToBeStillActiveAfter(tabGroup, () => sendKeys({ press: 'ArrowRight' }));
    });

    it('selects a tab by using the show function', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`
        <ld-tab-group>
          <ld-tab slot="nav" panel="general" data-testid="general-header">General</ld-tab>
          <ld-tab slot="nav" panel="custom" data-testid="custom-header">Custom</ld-tab>
          <ld-tab-panel name="general">This is the general tab panel.</ld-tab-panel>
          <ld-tab-panel name="custom" data-testid="custom-tab-content">This is the custom tab panel.</ld-tab-panel>
        </ld-tab-group>
      `);

      return expectCustomTabToBeActiveAfter(tabGroup, () => {
        tabGroup.show('custom');
        return aTimeout(0);
      });
    });
  });
});
