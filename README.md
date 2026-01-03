# @nareshsanjeev/react-component-lib

A small, composable React component library containing commonly-used UI primitives (Dropdown, Accordion, Button, Input, RadioGroup, Pagination, ProgressBar, Checkbox, and more). The library provides minimal, testable primitives you can style and extend for your applications or design systems.

---

## Introduction ✨

**Brief overview:** This package exposes a set of lightweight React components with predictable, composition-friendly APIs. Components aim to be unopinionated about styling and focus on structure and behavior; default class names follow Bootstrap conventions for easy integration.

**Purpose & use cases:**

- Build small UI kits and internal component libraries
- Quick prototyping with ready-to-use primitives
- Base components to layer accessibility, state-management, and design-system theming

---

## Installation & Setup ⚙️

Install the package from npm:

```bash
npm i @nareshsanjeev/react-component-lib
```

Peer dependencies: **React >= 18**, **react-dom >= 18**. Ensure these are installed in your app.

Styling requirements: The components use Bootstrap-style class names by default. To get the intended styles, include Bootstrap CSS in your project. The easiest way is to add the CDN link to your HTML:

```html
<!-- Add this to your index.html (or equivalent) -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  crossorigin="anonymous"
/>
```

Note: Bootstrap JavaScript is not required for the React primitives in this library. The components are pure React and manage their own behavior.

---

## Usage Examples 🚀

### Importing components

```jsx
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  RadioGroup,
  RadioOption,
  Button,
  Input,
  Pagination,
  ProgressBar,
  Checkbox,
} from "@nareshsanjeev/react-component-lib";
```

### Controlled Dropdown (recommended)

```jsx
import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "@nareshsanjeev/react-component-lib";

export function ControlledDropdownExample() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <Dropdown open={open} onToggle={() => setOpen((s) => !s)}>
      <DropdownToggle
        label={selected ?? "Choose an option"}
        onToggle={() => setOpen((s) => !s)}
      />
      <DropdownMenu open={open} onToggle={() => setOpen(false)}>
        <DropdownItem value="a" onSelect={(v) => setSelected(v)}>
          Option A
        </DropdownItem>
        <DropdownItem value="b" onSelect={(v) => setSelected(v)}>
          Option B
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
```

### Uncontrolled helper (example pattern)

```jsx
import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "@nareshsanjeev/react-component-lib";

export function UncontrolledDropdown({ defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Dropdown open={open} onToggle={() => setOpen((s) => !s)}>
      <DropdownToggle label="Options" onToggle={() => setOpen((s) => !s)} />
      <DropdownMenu open={open} onToggle={() => setOpen(false)}>
        <DropdownItem value={1} onSelect={() => setOpen(false)}>
          One
        </DropdownItem>
        <DropdownItem value={2} onSelect={() => setOpen(false)}>
          Two
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
```

### RadioGroup example

```jsx
import React, { useState } from "react";
import { RadioGroup, RadioOption } from "@nareshsanjeev/react-component-lib";

export function RadioExample() {
  const [value, setValue] = useState("apple");

  return (
    <RadioGroup name="fruit" value={value} onChange={setValue}>
      <RadioOption label="Apple" value="apple" />
      <RadioOption label="Banana" value="banana" />
    </RadioGroup>
  );
}
```

---

## Props Reference 📋

> See component-level READMEs in `src/components/<name>/README.md` for more details and examples.

### Dropdown

| Prop       | Type         | Default | Description                                   |
| ---------- | ------------ | ------- | --------------------------------------------- |
| `open`     | `boolean`    | `false` | Controls visibility (controlled).             |
| `onToggle` | `() => void` | —       | Toggle handler (parent should update `open`). |
| `children` | `ReactNode`  | —       | `DropdownToggle` and `DropdownMenu`.          |

Dropdown primitives:

- `DropdownToggle`: `label: string|ReactNode`, `onToggle: () => void`
- `DropdownMenu`: `open: boolean`, `onToggle: () => void`, `children`
- `DropdownItem`: `value: any`, `onSelect: (value) => void`, `onToggle: () => void`

### Accordion

| Prop       | Type        | Default | Description                                                                                  |
| ---------- | ----------- | ------- | -------------------------------------------------------------------------------------------- |
| `children` | `ReactNode` | —       | Should contain `AccordionItem` children; default implementation keeps a single active index. |

Accordion primitives:

- `AccordionItem`: `isOpen: boolean`, `onToggle: () => void`
- `AccordionHeader`: `onToggle`, `isOpen`, `id`
- `AccordionPanel`: `isOpen`

### RadioGroup / RadioOption

| Prop                  | Type              | Default      | Description                                 |
| --------------------- | ----------------- | ------------ | ------------------------------------------- |
| `RadioGroup.value`    | `any`             | —            | Controlled selected value.                  |
| `RadioGroup.onChange` | `(v:any) => void` | **required** | Called when option selected.                |
| `RadioGroup.name`     | `string`          | —            | `name` applied to native inputs (grouping). |

`RadioOption`: `label`, `value` (**required**), `name`, `onChange`, `selectedValue`, `className`.

### Button

| Prop      | Type         | Default     | Description                  |
| --------- | ------------ | ----------- | ---------------------------- |
| `variant` | `string`     | `'primary'` | Visual variant (CSS module). |
| `size`    | `string`     | `'md'`      | Visual size.                 |
| `onClick` | `() => void` | —           | Click handler.               |
| `type`    | `string`     | `'button'`  | Button `type` attribute.     |

### Input

| Prop          | Type          | Default     | Description         |
| ------------- | ------------- | ----------- | ------------------- |
| `type`        | `string`      | `'text'`    | Input type.         |
| `value`       | `any`         | —           | Controlled value.   |
| `onChange`    | `(e) => void` | —           | Change handler.     |
| `placeholder` | `string`      | `''`        | Placeholder text.   |
| `size`        | `string`      | `'md'`      | Visual size.        |
| `variant`     | `string`      | `'outline'` | Visual variant.     |
| `disabled`    | `boolean`     | `false`     | Disabled state.     |
| `error`       | `boolean`     | `false`     | Error visual state. |

### Pagination

| Prop         | Type                    | Default | Description                      |
| ------------ | ----------------------- | ------- | -------------------------------- |
| `totalItems` | `number`                | —       | Total number of items.           |
| `perPage`    | `number`                | —       | Items per page.                  |
| `current`    | `number`                | —       | Current page number.             |
| `onChange`   | `(page:number) => void` | —       | Called with the new page number. |

### ProgressBar

| Prop           | Type      | Default   | Description         |
| -------------- | --------- | --------- | ------------------- |
| `value`        | `number`  | `0`       | Percentage (0-100). |
| `height`       | `string`  | `'12px'`  | Container height.   |
| `background`   | `string`  | `'green'` | Bar color.          |
| `borderRadius` | `string`  | `'20px'`  | Bar corner radius.  |
| `visibility`   | `boolean` | `false`   | Controls rendering. |

---

## Styling & Customization 🎨

- The library uses Bootstrap-style class names (e.g., `btn`, `dropdown`, `form-check-*`) which makes it easy to pick up Bootstrap styles.
- You can override or extend styles by:
  - Including a custom Bootstrap theme or overriding variables
  - Adding CSS rules targeting component classes
  - Using CSS modules (some components include local CSS module files)
  - Wrapping primitives to change markup or structure for complete customization

**Custom class overrides:** Many components accept `className` or can be wrapped to receive additional props and class names. Check the component-level README for exact support.

---

## Advanced Usage & Edge Cases 🧭

- Controlled vs Uncontrolled:
  - The primitives are designed to be controlled (parent-managed `open`/`value`). You can create uncontrolled wrappers that maintain internal state if preferred.
- Disabled states:
  - Not every primitive includes `disabled` by default. Add `disabled` handling in wrappers or extend components when you need it.
- Accessibility:
  - Components provide basic markup; for production-ready accessibility add `aria-*` attributes, proper `role`s, and keyboard handlers (e.g., arrow navigation for menus).

---

## Best Practices & Notes ✅

**Performance tips:**

- Avoid inline function re-creation in lists; memoize handlers where necessary.
- Keep component trees shallow and prefer composition over large monolithic components.

**Common mistakes to avoid:**

- Not providing unique `name` props for radio groups (causes incorrect grouping)
- Omitting `aria` attributes and keyboard navigation for interactive components
- Relying solely on Bootstrap classes for accessibility—add ARIA as needed

**Compatibility:**

- Peer deps: `react >= 18`, `react-dom >= 18`.
- Library targets modern browsers; provide polyfills if supporting older environments.

---

## Contributing

Contributions welcome — when adding features (keyboard navigation, disabled states, form helpers), please include examples, tests, and README updates.

---

If you'd like, I can add a small `examples/` folder that demonstrates accessible keyboard navigation for dropdowns and an `Uncontrolled` helper. Which would you prefer next? 💡

A small, composable React component library with common UI primitives (Dropdown, Accordion, Button, Input, RadioGroup, Pagination, ProgressBar, Checkbox, and more) that you can import and style into your React apps.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
