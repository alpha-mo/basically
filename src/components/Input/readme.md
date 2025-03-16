# Input Component

The `Input` component is a customizable text input field designed for React Native. It supports animated placeholder behavior, custom styles, error handling, and more.

## Features
- Animated placeholder with focus and blur behavior.
- Customizable styles for the input, placeholder, and error states.
- Support for RTL (Right-to-Left) text direction.
- Secure text entry for password fields.
- Handles error states with customizable error border color.

## Usage

```tsx
import React, { useRef } from 'react';
import { Input } from '@alpha-mo/basically';

const MyComponent = () => {
  const inputRef = useRef<InputRef>(null);

  const handleSubmit = () => {
    const value = inputRef.current?.getValue();
    console.log(value);
  };

  return (
    <Input
      ref={inputRef}
      placeholder="Enter text"
      secure={false}
      error={false}
      keyboardType="default"
      onSubmit={handleSubmit}
    />
  );
};
```

## Props

### `InputProps`

| Name               | Type                                   | Default Value     | Description                                                                                       |
|--------------------|----------------------------------------|-------------------|---------------------------------------------------------------------------------------------------|
| `style`            | `ViewStyle`                            | -                 | Custom styles for the input container (e.g., margin, height, etc.).                               |
| `placeholderStyle` | `TextStyle`                            | -                 | Custom styles for the placeholder text (e.g., font size, color).                                 |
| `placeholder`      | `string`                               | `"placeholder"`   | Text to display as the placeholder.                                                                |
| `inputStyle`       | `TextStyle`                            | -                 | Custom styles for the input field (e.g., font size, color).                                       |
| `rtl`              | `boolean`                              | `false`           | Determines if the input should support RTL text direction.                                        |
| `keyboardType`     | `TextInputProps['keyboardType']`       | `"default"`       | Defines the type of keyboard to display.                                                         |
| `onSubmit`         | `TextInputProps['onSubmitEditing']`    | -                 | Callback function to call when submitting the input.                                              |
| `secure`           | `TextInputProps['secureTextEntry']`    | `false`           | Determines if the input is a secure text entry (password).                                        |
| `error`            | `boolean`                              | `false`           | Determines if the input should display an error state.                                            |
| `errorBorderColor` | `ColorValue`                           | `#e25a29`         | Custom border color for the input when in an error state.                                         |

### `InputRef`

- `getValue`: A method to get the current value of the input.

## Example

Here is an example usage of the `Input` component:

```tsx
import React, { useRef } from 'react';
import { Input } from '@alpha-mo/basically';

const LoginScreen = () => {
  const inputRef = useRef<InputRef>(null);

  const handleSubmit = () => {
    const value = inputRef.current?.getValue();
    console.log('Input Value:', value);
  };

  return (
    <Input
      ref={inputRef}
      placeholder="Username"
      error={false}
      keyboardType="default"
      onSubmit={handleSubmit}
    />
  );
};
```

## Styles

The component comes with the following default styles:

- `container`: Styles for the container of the input field.
- `placeholder`: Styles for the placeholder text (positioned above the input).
- `input`: Styles for the input field (background color, border, padding).

You can override these styles using the `style`, `inputStyle`, and `placeholderStyle` props.

## License

MIT License. See [LICENSE](../../../License) for details.
```

I’ve provided an overview of the component, its usage, and the available props. Let me know if you'd like any changes or additional details!
