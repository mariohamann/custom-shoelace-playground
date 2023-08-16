---
meta:
  title: Color Tokens
  description: Color tokens help maintain consistent use of color throughout your app.
---

# Color Tokens

Color tokens help maintain consistent use of color throughout your app. Leonardo provides palettes for theme colors and primitives that you can use as a foundation for your design system.

Color tokens are referenced using the `--ld-color-{name}-{n}` CSS custom property, where `{name}` is the name of the palette and `{n}` is the numeric value of the desired swatch.

## Theme Tokens

Theme tokens give you a semantic way to reference colors in your app. The primary palette is typically based on a brand color, whereas success, neutral, warning, and danger are used to visualize actions that correspond to their respective meanings.

<div class="color-palette">
  <div class="color-palette__name">
    Primary<br>
    <code>--ld-color-primary-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-primary-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-primary-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-primary-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-primary-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-primary-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-primary-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-primary-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-primary-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-primary-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-primary-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-primary-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Success<br>
    <code>--ld-color-success-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-success-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-success-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-success-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-success-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-success-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-success-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-success-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-success-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-success-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-success-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-success-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Warning<br>
    <code>--ld-color-warning-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-warning-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-warning-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-warning-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-warning-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-warning-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-warning-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-warning-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-warning-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-warning-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-warning-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-warning-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Danger<br>
    <code>--ld-color-danger-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-danger-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-danger-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-danger-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-danger-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-danger-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-danger-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-danger-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-danger-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-danger-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-danger-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-danger-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Neutral<br>
    <code>--ld-color-neutral-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-neutral-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-neutral-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-neutral-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-neutral-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-neutral-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-neutral-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-neutral-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-neutral-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-neutral-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-neutral-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-neutral-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Black & White<br>
    <code>--ld-color-neutral-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch color-palette__swatch--border" style="background-color: var(--ld-color-neutral-0);"></div>0</div>
  <div class="color-palette__example"><div class="color-palette__swatch " style="background-color: var(--ld-color-neutral-1000);"></div>1000</div>
</div>

:::tip
Looking for an easy way to customize your theme? [Try the color token generator!](https://codepen.io/claviska/full/QWveRgL)
:::

## Primitives

Additional palettes are provided in the form of color primitives. Use these when you need arbitrary colors that don't have semantic meaning. Color primitives are derived from the fantastic [Tailwind color palette](https://tailwindcss.com/docs/customizing-colors).

<div class="color-palette">
  <div class="color-palette__name">
    Gray<br>
    <code>--ld-color-gray-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-gray-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-gray-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-gray-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-gray-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-gray-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-gray-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-gray-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-gray-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-gray-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-gray-900);"></div>900</div>  
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-gray-950);"></div>950</div>  
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Red<br>
    <code>--ld-color-red-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-red-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-red-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-red-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-red-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-red-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-red-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-red-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-red-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-red-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-red-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-red-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Orange<br>
    <code>--ld-color-orange-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-orange-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-orange-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-orange-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-orange-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-orange-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-orange-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-orange-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-orange-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-orange-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-orange-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-orange-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Amber<br>
    <code>--ld-color-amber-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-amber-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-amber-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-amber-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-amber-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-amber-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-amber-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-amber-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-amber-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-amber-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-amber-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-amber-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Yellow<br>
    <code>--ld-color-yellow-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-yellow-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-yellow-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-yellow-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-yellow-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-yellow-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-yellow-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-yellow-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-yellow-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-yellow-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-yellow-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-yellow-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Lime<br>
    <code>--ld-color-lime-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-lime-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-lime-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-lime-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-lime-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-lime-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-lime-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-lime-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-lime-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-lime-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-lime-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-lime-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Green<br>
    <code>--ld-color-green-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-green-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-green-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-green-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-green-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-green-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-green-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-green-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-green-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-green-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-green-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-green-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Emerald<br>
    <code>--ld-color-emerald-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-emerald-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-emerald-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-emerald-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-emerald-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-emerald-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-emerald-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-emerald-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-emerald-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-emerald-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-emerald-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-emerald-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Teal<br>
    <code>--ld-color-teal-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-teal-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-teal-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-teal-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-teal-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-teal-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-teal-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-teal-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-teal-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-teal-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-teal-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-teal-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Cyan<br>
    <code>--ld-color-cyan-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-cyan-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-cyan-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-cyan-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-cyan-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-cyan-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-cyan-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-cyan-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-cyan-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-cyan-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-cyan-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-cyan-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Sky<br>
    <code>--ld-color-sky-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-sky-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-sky-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-sky-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-sky-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-sky-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-sky-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-sky-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-sky-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-sky-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-sky-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-sky-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Blue<br>
    <code>--ld-color-blue-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-blue-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-blue-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-blue-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-blue-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-blue-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-blue-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-blue-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-blue-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-blue-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-blue-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-blue-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Indigo<br>
    <code>--ld-color-indigo-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-indigo-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-indigo-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-indigo-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-indigo-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-indigo-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-indigo-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-indigo-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-indigo-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-indigo-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-indigo-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-indigo-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Violet<br>
    <code>--ld-color-violet-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-violet-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-violet-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-violet-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-violet-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-violet-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-violet-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-violet-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-violet-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-violet-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-violet-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-violet-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Purple<br>
    <code>--ld-color-purple-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-purple-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-purple-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-purple-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-purple-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-purple-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-purple-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-purple-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-purple-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-purple-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-purple-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-purple-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Fuchsia<br>
    <code>--ld-color-fuchsia-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-fuchsia-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-fuchsia-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-fuchsia-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-fuchsia-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-fuchsia-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-fuchsia-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-fuchsia-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-fuchsia-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-fuchsia-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-fuchsia-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-fuchsia-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Pink<br>
    <code>--ld-color-pink-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-pink-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-pink-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-pink-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-pink-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-pink-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-pink-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-pink-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-pink-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-pink-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-pink-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-pink-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Rose<br>
    <code>--ld-color-rose-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-rose-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-rose-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-rose-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-rose-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-rose-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-rose-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-rose-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-rose-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-rose-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-rose-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--ld-color-rose-950);"></div>950</div>
</div>
