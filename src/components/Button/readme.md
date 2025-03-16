# Button Component

The `Button` component is a customizable button for React Native, designed to handle loading states, text, background color, and custom styles. It is built with flexibility in mind, allowing you to easily configure its appearance and behavior.

## Features
- Supports loading indicator while performing actions.
- Customizable background color, text color, and styles.
- Easily handles button disable state with customized styles.
- Can contain text or custom children elements.

## Usage

```tsx
import React, { useState } from 'react';
import { Button } from '@alpha-mo/basically';

const MyComponent = () => {
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    // Simulate a network request or long-running task
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Button
      text="Submit"
      loading={loading}
      onPress={handlePress}
      bgColor="#005364"
      textColor="#ffffff"
    />
  );
};
```

## Props

| Name             | Type                               | Default Value        | Description                                                                                   |
|------------------|------------------------------------|----------------------|-----------------------------------------------------------------------------------------------|
| `loading`        | `boolean`                          | `false`              | If `true`, shows a loading indicator instead of text.                                          |
| `text`           | `string`                           | -                    | The text displayed on the button.                                                              |
| `bgColor`        | `ColorValue`                       | `#005364`            | The background color of the button.                                                           |
| `textColor`      | `ColorValue`                       | `white`              | The color of the text in the button.                                                           |
| `style`          | `ViewStyle`                        | -                    | Additional styles to apply to the button container.                                            |
| `textStyle`      | `TextStyle`                        | -                    | Additional styles to apply to the text.                                                        |
| `disabled`       | `boolean`                          | `false`              | If `true`, the button will be disabled, and the `onPress` function will not be triggered.      |
| `disabledStyle`  | `{ backgroundColor, color }`       | -                    | Custom styles for the disabled button, including `backgroundColor` and `color`.               |
| `onPress`        | `() => void`                       | -                    | The callback function to be called when the button is pressed.                                |
| `children`       | `ReactNode`                        | -                    | Optionally, custom children elements inside the button.                                        |

## Example

Here’s an example of how to use the `Button` component:

```tsx
import React, { useState } from 'react';
import { Button } from '@alpha-mo/basically';

const MyComponent = () => {
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    // Simulate a network request or long-running task
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Button
      text="Submit"
      loading={loading}
      onPress={handlePress}
      bgColor="#005364"
      textColor="#ffffff"
      disabled={loading}
    />
  );
};
```

## Styling

You can apply custom styles to the button container using the `style` prop, and you can also customize the text styling with the `textStyle` prop.

Example:

```tsx
<Button
  text="Custom Styled Button"
  style={{ borderRadius: 10, padding: 20 }}
  textStyle={{ fontSize: 16, fontWeight: 'bold' }}
/>
```

## License

MIT License. See [LICENSE](../../../License) for details.
```

This README provides an overview of the `Button` component, detailed props, example usage, and styling options. Let me know if you'd like to make any changes!
