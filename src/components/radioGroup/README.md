# RadioGroup Component 🎯

## Introduction

The **RadioGroup** and **RadioOption** primitives provide a lightweight, accessible way to render a set of radio options where only one option can be selected at a time. The components are intentionally minimal and composable so you can integrate them into forms, validation libraries, or custom UI systems.

- `RadioGroup` — container that passes `name`, `value`, and `onChange` to its `RadioOption` children.
- `RadioOption` — an individual radio input with label and inline styling support.

---

## Installation / Setup ⚙️

If you're working inside this repository, import from the component folder:

```js
import { RadioGroup, RadioOption } from "./src/components/radioGroup"; // adjust path as needed
```

No additional runtime dependencies are required beyond React.

---

## Usage Examples ✨

### Controlled Radio Group (recommended)

```jsx
import React, { useState } from "react";
import { RadioGroup, RadioOption } from "./src/components/radioGroup";

function ControlledExample() {
  const [value, setValue] = useState("apple");

  return (
    <RadioGroup name="fruits" value={value} onChange={(v) => setValue(v)}>
      <RadioOption label="Apple" value="apple" />
      <RadioOption label="Banana" value="banana" />
      <RadioOption label="Cherry" value="cherry" />
    </RadioGroup>
  );
}
```

Notes: `RadioGroup` passes `onChange` to each `RadioOption`. `RadioOption` calls `onChange(value)` when clicked.

### Uncontrolled Wrapper (local state inside wrapper)

```jsx
import React, { useState } from "react";
import { RadioGroup, RadioOption } from "./src/components/radioGroup";

function UncontrolledExample({ defaultValue }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <RadioGroup name="size" value={value} onChange={setValue}>
      <RadioOption label="Small" value="s" />
      <RadioOption label="Medium" value="m" />
      <RadioOption label="Large" value="l" />
    </RadioGroup>
  );
}
```

### Integration with Form Libraries

You can use `RadioGroup` with form state libraries (Formik, React Hook Form, etc.) by wiring the library's field value and onChange into `value` and `onChange` props.

---

## Props Reference 📋

### RadioGroup

| Prop       | Type                   | Default      | Description                                                                                                       |
| ---------- | ---------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------- |
| `children` | `ReactNode`            | —            | `RadioOption` elements, or any components that accept `onChange`, `name` and `selectedValue`.                     |
| `onChange` | `(value: any) => void` | **required** | Called when a child option is selected with the selected option's `value`.                                        |
| `value`    | `any`                  | —            | The currently selected value (controlled pattern). Pass `undefined` to make it uncontrolled at the wrapper level. |
| `name`     | `string`               | —            | The `name` attribute applied to inputs; keeps radio inputs grouped for browser behavior and accessibility.        |

### RadioOption

| Prop            | Type                   | Default                           | Description                                                                                       |
| --------------- | ---------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------- |
| `label`         | `string  ReactNode`   | —                                 | Visible label for the option.                                                                     |
| `value`         | `any`                  | **required**                      | Value that will be passed to `onChange` when selected. Used to determine `checked` state.         |
| `name`          | `string`               | —                                 | `name` attribute for the native input. If omitted, the parent `RadioGroup` provides it.           |
| `onChange`      | `(value: any) => void` | **required when used standalone** | Handler invoked as `onChange(value)`. When used inside `RadioGroup`, it is provided by the group. |
| `selectedValue` | `any`                  | —                                 | The current selected value to compute `checked` (supplied by `RadioGroup`).                       |
| `className`     | `string`               | `""`                              | Additional classes applied to the option wrapper for custom styling.                              |

> Note: The current `RadioOption` implementation calls `onChange(value)` directly — ensure an `onChange` handler is provided either by `RadioGroup` or the parent.

---

## Styling & Customization 🎨

The components use minimal markup and lightweight class names (Bootstrap-styled by default):

- Wrapper: `form-check-inline` (applied to each option)
- Input: `form-check-input`
- Label: `form-check-label`

You can override or extend styles by passing `className` to `RadioOption` or wrapping the components with your CSS modules or styled-components.

Example CSS:

```css
/* make the options vertical instead of inline */
.form-check-inline {
  display: block;
  margin-bottom: 0.5rem;
}

/* custom color for checked input */
.form-check-input:checked + .form-check-label {
  font-weight: 600;
  color: #1a73e8;
}
```

You can also swap the default classes entirely by forking the component or creating a tiny wrapper that renders a different structure.

---

## Advanced Usage & Patterns 🧭

### Controlled vs Uncontrolled

- Controlled: parent holds `value` and passes `onChange` — recommended for predictable behavior and form integration.
- Uncontrolled: you can manage internal state in a wrapper component (see `UncontrolledExample` above) or integrate with form libraries that provide refs and handlers.

### Disabled Options

The `RadioOption` does not include a `disabled` prop by default. To support disabled options, either extend the component or add checking logic in `onChange`. Example extension:

```jsx
function RadioOption({
  onChange,
  label,
  value,
  name,
  selectedValue,
  className = "",
  disabled = false,
}) {
  const id = `${name}-${value}`;
  return (
    <div className={`form-check-inline ${className}`} aria-disabled={disabled}>
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={selectedValue === value}
        disabled={disabled}
        onChange={() => !disabled && onChange(value)}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
```

### Accessibility & Keyboard

- Ensure every radio input has a unique `id` and associated `<label>` (the `RadioOption` already creates `id` from `name` + `value`).
- Provide a clear `name` prop to group radios together.
- Test keyboard navigation: Arrow keys should move focus across options. Many browsers and assistive tech handle this automatically when inputs share a name, but if you implement custom focus management, preserve native keyboard semantics.

---

## Best Practices ✅

- Prefer the controlled pattern for form fields (parent-managed `value` + `onChange`).
- Always supply a `name` prop to avoid collisions between different radio groups on the page.
- Use `label` content that clearly describes the option — this helps screen reader users.
- Add unit tests that assert selected state changes and `onChange` invocations.
- If you need additional features (disabled state, aria-describedby for help text, or validation states), extend the primitives in small, compatible ways and add examples/tests.

---

## Contributing / Extending

If you add functionality (disabled support, validation states, or keyboard helpers), please:

- Add usage examples to this README
- Include unit tests covering the new behavior
- Keep changes backward-compatible where possible

---

If you'd like, I can add a small `disabled` prop to `RadioOption` and a `RadioGroup` example that demonstrates form integration and tests. Which would you prefer me to add next? 💡
