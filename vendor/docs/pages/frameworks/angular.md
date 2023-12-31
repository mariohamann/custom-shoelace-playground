---
meta:
  title: Angular
  description: Tips for using Leonardo in your Angular app.
---

# Angular

Angular [plays nice](https://custom-elements-everywhere.com/#angular) with custom elements, so you can use Leonardo in your Angular apps with ease.

## Installation

To add Leonardo to your Angular app, install the package from npm.

```bash
npm install @shoelace-style/leonardo
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
import '@shoelace-style/leonardo/%NPMDIR%/themes/light.css';
import { setBasePath } from '@shoelace-style/leonardo/%NPMDIR%/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/leonardo@%VERSION%/%CDNDIR%/');
```

:::tip
If you'd rather not use the CDN for assets, you can create a build task that copies `node_modules/@shoelace-style/leonardo/%NPMDIR%/assets` into a public folder in your app. Then you can point the base path to that folder instead.
:::

## Configuration

Then make sure to apply the custom elements schema as shown below.

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

## Reference Leonardo components in your Angular component code

```js
import { LdDrawer } from '@shoelace-style/leonardo';

@Component({
  selector: 'app-drawer-example',
  template: '<div id="page"><button (click)="showDrawer()">Show drawer</button><ld-drawer #drawer label="Drawer" class="drawer-focus" style="--size: 50vw"><p>Drawer content</p></ld-drawer></div>'
})
export class DrawerExampleComponent implements OnInit {

  // use @ViewChild to get a reference to the #drawer element within component template
  @ViewChild('drawer')
  drawer?: ElementRef<LdDrawer>;

  ...

  constructor(...) {
  }

  ngOnInit() {
  }

  ...

  showDrawer() {
    // use nativeElement to access Leonardo components
    this.drawer?.nativeElement.show();
  }
}
```

Now you can start using Leonardo components in your app!

:::tip
Are you using Leonardo with Angular? [Help us improve this page!](https://github.com/leonardo-design-system/leonardo/blob/next/docs/frameworks/angular.md)
:::
