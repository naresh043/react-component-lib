# Dropdown Component 🔽

## Introduction

**Dropdown** is a small, composable set of components for building dropdown menus: `Dropdown`, `DropdownToggle`, `DropdownMenu`, and `DropdownItem`.

This set is intentionally unopinionated: it provides structural building blocks and minimal behavior (open/close via `onToggle`) so you can integrate custom state management, styling, and accessibility enhancements as needed.

---

## Installation / Setup ⚙️

If you're using the component library in this repo, import the components directly from the `Dropdown` folder:

```js
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "./src/components/Dropdown"; // or the published package path
```

No additional runtime dependencies are required beyond React.

---

## Quick Usage Examples ✨

### Controlled Dropdown

This is the recommended pattern for full control over behavior.

```jsx
import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "./src/components/Dropdown";

function ControlledExample() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false); // close after select
  };

  return (
    <Dropdown open={open} onToggle={() => setOpen((s) => !s)}>
      <DropdownToggle
        label={selected ?? "Choose an option"}
        onToggle={() => setOpen((s) => !s)}
      />
      <DropdownMenu open={open} onToggle={() => setOpen(false)}>
        <DropdownItem value="one" onSelect={handleSelect}>
          One
        </DropdownItem>
        <DropdownItem value="two" onSelect={handleSelect}>
          Two
        </DropdownItem>
        <DropdownItem value="three" onSelect={handleSelect}>
          Three
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
```

### Uncontrolled Wrapper Example

If you prefer the component to manage its own open state, wrap the primitives like this:

```jsx
import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "./src/components/Dropdown";

function UncontrolledDropdown({ defaultOpen = false }) {
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

---

## Props Reference 📋

### Dropdown

| Prop       | Type        | Default     | Description                                                                    |
| ---------- | ----------- | ----------- | ------------------------------------------------------------------------------ |
| `open`     | `boolean`   | `false`     | Controls whether the dropdown menu is visible (controlled).                    |
| `onToggle` | `function`  | `undefined` | Called when the toggle is activated; you should toggle `open` from the parent. |
| `children` | `ReactNode` | —           | Should contain `DropdownToggle` and `DropdownMenu`.                            |

### DropdownToggle

| Prop       | Type       | Default     | Description                            |
| ---------- | ---------- | ----------- | -------------------------------------- | ------------------------------------- |
| `label`    | `string    | ReactNode`  | `""`                                   | Content to show in the toggle button. |
| `onToggle` | `function` | `undefined` | Handler called when toggle is clicked. |

### DropdownMenu

| Prop       | Type        | Default     | Description                                                  |
| ---------- | ----------- | ----------- | ------------------------------------------------------------ |
| `open`     | `boolean`   | `false`     | Whether to render the menu.                                  |
| `onToggle` | `function`  | `undefined` | Passed to `DropdownItem` clones so items can close the menu. |
| `children` | `ReactNode` | —           | `DropdownItem` elements.                                     |

### DropdownItem

| Prop       | Type       | Default     | Description                                                  |
| ---------- | ---------- | ----------- | ------------------------------------------------------------ |
| `value`    | `any`      | —           | Value that will be passed to `onSelect`.                     |
| `onSelect` | `function` | `undefined` | Called with `value` when the item is clicked.                |
| `onToggle` | `function` | `undefined` | Called when the item is clicked (usually to close the menu). |

> Note: The components intentionally keep behavior minimal—there is minimal built-in logic for keyboard handling, focus management, or disabled items.

---

## Styling & Customization 🎨

- The components use simple class names you can target:

  - `dropdown` on the root container
  - Toggle uses `btn btn-secondary dropdown-toggle`
  - Menu's list is an unstyled `<ul>`; items include `dropdown-item` inside the `<li>`

- You can either override these class names with global CSS or wrap the components and apply your CSS modules or styled-components to achieve custom appearances.

- Example (CSS):

```css
/* example to override appearance */
.dropdown {
  position: relative;
}
.dropdown ul {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 20;
}
.dropdown-item {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.dropdown-item:hover {
  background: #f3f3f3;
}
```

---

## Advanced Usage & Notes 🧭

### Controlled vs Uncontrolled

- The primitives are controlled by design: you pass `open` and `onToggle` from the parent.
- To create an "uncontrolled" dropdown, wrap the primitives and manage local `open` state inside the wrapper (see example above).

### Accessibility & Keyboard

- These components currently only provide basic structure. For production-ready accessibility, we recommend:
  - Add `aria-haspopup="menu"` and `aria-expanded={open}` to the toggle button.
  - Use `role="menu"` on the menu container (`<ul>`) and `role="menuitem"` on items.
  - Implement keyboard handling: Arrow keys to navigate items, Enter/Space to select, Escape to close, and proper focus management.

### Disabled items

- `DropdownItem` does not include a `disabled` prop by default. You can implement this in your app by:
  - Passing a `disabled` prop and preventing `onSelect`/`onToggle` when true.
  - Styling disabled items differently and using `aria-disabled="true"`.

### Closing behaviors

- The default examples show closing the menu when an item is selected. Consider also:
  - Closing on outside click (listen for clicks on document.body and check containment)
  - Closing on focus loss (blur) depending on UX requirements

---

## Best Practices ✅

- Prefer the controlled pattern for predictable behavior and ease of testing.
- Add ARIA attributes and keyboard handlers before shipping to production.
- Keep presentation separate from logic: use these primitives as building blocks rather than a final UI with all behaviors.
- Test the component with screen readers and keyboard-only navigation.

---

## Example: Adding Basic Accessibility

Here is a simple enhancement to the toggle and menu markup for better accessibility:

```jsx
<button
  className="btn btn-secondary dropdown-toggle"
  aria-haspopup="menu"
  aria-expanded={open}
  onClick={onToggle}
>
  {label}
</button>

<ul role="menu" aria-hidden={!open}>
  <li role="menuitem">Item</li>
</ul>
```

---

## Contributing / Extending

- If you add keyboard navigation or disabled state, consider adding examples and unit tests to cover the new behaviors.
- Keep changes composable and backwards-compatible with the current API.

---

If you'd like, I can add a short example of keyboard handling or an `UncontrolledDropdown` wrapper component to the examples folder. 💡
