# Custom Shoelace Playground

## Quick Start

```bash
pnpm i # should work with npm too
pnpm dev
```

## Change something in component

Remove the following from a file you want to edit (e. g. something in the alert):

```
// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED BY CUSTOM SHOELACE CLI
// Removing this comment will prevent it from being managed by the CLI.
// ---------------------------------------------------------------------
```

From that on this file will not longer be synced when you update Shoelace etc.

You can test with the follwoing:

```bash
npx custom-sholace
# "What do you want to do?" -> "Regenerate Shoelace files"
```

## Add new components

```bash
npx custom-sholace
# "What do you want to do?" -> "Add component"
# "Which component would you like to install?" -> "e. g. card"
```

## Update Shoelace version

Go into `custom-shoelace.config.js` and change the version number to 2.7.0

```bash
npx custom-sholace
# "What do you want to do?" -> "Download Shoelace"
```

Everything should work as before. :)
