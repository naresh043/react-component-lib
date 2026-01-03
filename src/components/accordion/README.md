# Accordion Component 🪄

## Introduction

The **Accordion** component provides a small, composable set of primitives for building collapsible panels: `Accordion`, `AccordionItem`, `AccordionHeader`, and `AccordionPanel`.

It aims to be minimal and flexible: you get structure and basic open/close behavior and can extend styling, accessibility, and behavior (controlled patterns, multi-open, disabled items) to match your app's needs.

---

## Installation / Setup ⚙️

Import the components directly from the package or local path:

```js
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "./src/components/accordion"; // or from your published package
```

There are no external runtime dependencies beyond React.

---

## Basic Usage Examples ✨

### Simple Accordion (default behavior)

```jsx
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "./src/components/accordion";

function Example() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionHeader>First item</AccordionHeader>
        <AccordionPanel>Content for the first item.</AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader>Second item</AccordionHeader>
        <AccordionPanel>Content for the second item.</AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader>Third item</AccordionHeader>
        <AccordionPanel>Content for the third item.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
```

The provided `Accordion` maintains the active panel index internally and will open the clicked item.

### Controlled Accordion (lifting state up)

If you need the parent to control which panel is open (e.g., for syncing with URL or tests), create a controlled wrapper that supplies `isOpen` and `onToggle` props to clones of children:

```jsx
import React, { useState, Children, cloneElement } from "react";

function ControlledAccordion({ children }) {
  const [active, setActive] = useState(null);

  return (
    <div className="accordion">
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          isOpen: active === index,
          onToggle: () => setActive(active === index ? null : index),
        })
      )}
    </div>
  );
}
```

### Multi-Open Accordion (allow multiple panels open)

To let more than one panel be open at once, store an array of open indexes:

```jsx
import React, { useState, Children, cloneElement } from "react";

function MultiOpenAccordion({ children }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (i) => {
    setOpenIndexes((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <div className="accordion">
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          isOpen: openIndexes.includes(index),
          onToggle: () => toggleIndex(index),
        })
      )}
    </div>
  );
}
```

---

## Props Reference 📋

### Accordion

| Prop       | Type        | Default | Description                                                                                                                             |
| ---------- | ----------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `children` | `ReactNode` | —       | Should contain one or more `AccordionItem` children. The `Accordion` component provided in this repo manages the open state internally. |

> Note: The current `Accordion` implementation keeps the active index internally. Use a wrapper (like `ControlledAccordion` above) if you need external control.

### AccordionItem

| Prop       | Type        | Default     | Description                                                           |
| ---------- | ----------- | ----------- | --------------------------------------------------------------------- |
| `children` | `ReactNode` | —           | Typically contains `AccordionHeader` and `AccordionPanel`.            |
| `isOpen`   | `boolean`   | `false`     | Whether this item is open (used by wrappers and controlled patterns). |
| `onToggle` | `function`  | `undefined` | Handler called to toggle this item (supplied by parent/wrapper).      |

### AccordionHeader

| Prop       | Type        | Default     | Description                                                         |
| ---------- | ----------- | ----------- | ------------------------------------------------------------------- |
| `onToggle` | `function`  | `undefined` | Click handler used to toggle the associated panel.                  |
| `isOpen`   | `boolean`   | `false`     | Whether the associated panel is currently open. Useful for styling. |
| `id`       | `string`    | —           | Optional id for linking header and panel for accessibility.         |
| `children` | `ReactNode` | —           | Header content (usually a title).                                   |

### AccordionPanel

| Prop       | Type        | Default | Description                                |
| ---------- | ----------- | ------- | ------------------------------------------ |
| `isOpen`   | `boolean`   | `false` | Whether the panel should be rendered/open. |
| `children` | `ReactNode` | —       | Panel content.                             |

---

## Styling & Customization 🎨

Classes added by the components (use these to style or override):

- `accordion` — wrapper container
- `accordion-item` — per-item wrapper
- `accordion-header` — header wrapper
- `accordion-button` — actual header button
- `accordion-collapse collapse show` — panel container
- `accordion-body` — inner panel content

You can adopt Bootstrap-style classes (these names follow that convention) or replace them with your own via wrappers and custom CSS modules or styled-components.

Example CSS to change spacing and transitions:

```css
.accordion-item {
  border-bottom: 1px solid #eee;
}
.accordion-button {
  cursor: pointer;
  width: 100%;
  text-align: left;
}
.accordion-collapse {
  transition: max-height 200ms ease;
  overflow: hidden;
}
.accordion-body {
  padding: 1rem;
}
```

For smoother open/close animations, prefer animating `max-height` or use a CSS-in-JS transition on height with measured content sizes.

---

## Advanced Usage & Notes 🧭

- Controlled vs Uncontrolled:
  - The provided `Accordion` keeps state internally (uncontrolled). Use a controlled wrapper when you need deterministic behavior or state synchronization.
- Keyboard & Accessibility:
  - Add `aria-expanded={isOpen}` to the header button and `aria-controls`/`id` linking header to panel.
  - Implement keyboard navigation (Space/Enter to toggle, Arrow keys to move focus between headers). The primitives do not include built-in keyboard handling.
- Disabled items:
  - Add a `disabled` flag to `AccordionItem` or `AccordionHeader` and prevent `onToggle` when disabled; also add `aria-disabled="true"`.
- Multiple open panels:
  - Swap internal index state for an array of indexes to support multi-open behavior (example above).

---

## Best Practices ✅

- Use a **controlled pattern** when you need to share state across components, sync with URL, or make testing easier.
- Implement and test keyboard accessibility and ARIA attributes before production use.
- Keep styling separate from logic—use the component primitives as building blocks and layer your design system on top.
- Provide unique ids for header/panel pairs to support `aria-controls` and improve screen-reader behavior.
- Add unit tests covering open/close behavior, disabled handling, and keyboard navigation when you implement it.

---

## Contributing / Extending

If you add features (keyboard navigation, disabled items, or animation support), consider:

- Adding examples to this README and/or an examples folder
- Including unit and integration tests
- Keeping changes backwards-compatible with the existing simple API

---

If you'd like, I can add a small `ControlledAccordion` and `MultiOpenAccordion` components to the codebase and include accessible keyboard handling examples and tests. 💡
