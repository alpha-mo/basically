# ThemeSwitcher Component

The `ThemeSwitcher` component allows users to toggle between light and dark themes with an animated switch. It provides customizable colors for the container, button, and icon, allowing you to integrate it seamlessly into your app.

## Features
- Animated toggle between light and dark modes.
- Customizable container, button, and icon colors for both light and dark themes.
- Supports external callbacks on theme change.
- Lightweight and easy-to-use component.

## Installation

To install the `ThemeSwitcher` component, you can include it as part of your `@alpha-mo/basically` library or copy the component directly into your project.

```bash
npm install @alpha-mo/basically
```

## Usage

```tsx
import React from 'react';
import { ThemeSwitcher } from '@alpha-mo/basically';

const MyComponent = () => {
  const handleToggle = () => {
    console.log('Theme toggled!');
  };

  return (
    <ThemeSwitcher
      onToggle={handleToggle}
      initialState="light"
      options={{
        containerColor: {
          light: { background: '#ffffff', border: '#ccc' },
          dark: { background: '#333', border: '#555' },
        },
        buttonColor: {
          light: { background: '#f0f0f0', border: '#ccc' },
          dark: { background: '#444', border: '#888' },
        },
        iconColor: {
          light: '#000',
          dark: '#fff',
        },
      }}
    />
  );
};
```

## Props

### `ThemeSwitcherProps`

| Name           | Type                                    | Default Value  | Description                                                                                       |
|----------------|-----------------------------------------|----------------|---------------------------------------------------------------------------------------------------|
| `onToggle`     | `() => void`                            | `alert('Switch toggled')` | Callback triggered when the theme is toggled.                                                   |
| `options`      | `ThemeSwitcherProps['options']`         | Default options | Customizable options for container, button, and icon colors.                                      |
| `style`        | `ViewStyle`                             | -              | Styles for positioning the switch (e.g., `position: 'absolute'`).                                 |
| `initialState` | `'light' | 'dark'`                      | `'light'`      | Initial state of the theme switcher, either `'light'` or `'dark'`.                                |

### `ThemeSwitcherProps['options']`

| Name            | Type                           | Description                                                                                       |
|-----------------|--------------------------------|---------------------------------------------------------------------------------------------------|
| `containerColor`| `{ light: { border, background }, dark: { border, background } }` | Colors for the container (background and border) in light and dark modes.                        |
| `buttonColor`   | `{ light: { border, background }, dark: { border, background } }` | Colors for the switch button in light and dark modes.                                             |
| `iconColor`     | `{ light, dark }`              | Colors for the icon (e.g., light or dark mode icons).                                             |

## Example

Here is an example usage of the `ThemeSwitcher` component:

```tsx
import React from 'react';
import { ThemeSwitcher } from '@alpha-mo/basically';

const App = () => {
  const handleToggle = () => {
    console.log('Theme toggled');
  };

  return (
    <ThemeSwitcher
      onToggle={handleToggle}
      initialState="light"
      options={{
        containerColor: {
          light: { background: '#f0f0f0', border: '#ccc' },
          dark: { background: '#333', border: '#555' },
        },
        buttonColor: {
          light: { background: '#fff', border: '#ccc' },
          dark: { background: '#444', border: '#888' },
        },
        iconColor: {
          light: '#000',
          dark: '#fff',
        },
      }}
    />
  );
};
```

## Styles

The component comes with default styles for the container, button, and icon. You can override these styles via the `options` prop or apply custom styles using the `style` prop for positioning.

## License

MIT License. See [LICENSE](https://github.com/alpha-mo/basic-react-native-ui-library/blob/main/LICENSE) for details.
```

This README provides an overview of the component, detailed props, and usage examples. Let me know if you'd like any adjustments!