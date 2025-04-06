# `Button` Component

A customizable and reusable button component built with React Native. It supports loading states, disabled states, custom styling, and more.

## ✨ Features

- ✅ Customizable text and styles
- ⏳ Built-in loading indicator
- 🚫 Disabled state support with overrideable styles
- 👶 Fallback to `Text` if no children are provided
- 💅 Styled with sensible presets out of the box

---

## 🔧 Usage

```tsx
import { Button } from '@alpha-mo/basically'

<Button
  text="Submit"
  onPress={() => console.log('Pressed')}
  loading={false}
  disabled={false}
/>
```

---

## ⚙️ Props

| Prop            | Type                                      | Description                                                                 |
|-----------------|-------------------------------------------|-----------------------------------------------------------------------------|
| `text`          | `string`                                  | The text displayed inside the button (used if `children` is not provided). |
| `onPress`       | `TouchableOpacityProps['onPress']`        | Callback fired when the button is pressed.                                 |
| `loading`       | `boolean`                                 | Displays a loading spinner if `true`.                                      |
| `disabled`      | `boolean`                                 | Disables the button and applies `disabledStyle` if `true`.                 |
| `children`      | `ReactNode`                               | Custom content to render inside the button instead of text.                |
| `style`         | `StyleProp<ViewStyle>`                    | Overrides the container style.                                             |
| `textStyle`     | `StyleProp<TextStyle>`                    | Overrides the text style.                                                  |
| `loadingColor`  | `ColorValue`                              | Custom color for the loading spinner.                                      |
| `disabledStyle` | `{ backgroundColor?: ColorValue; color?: ColorValue }` | Overrides background and text color when disabled.                        |

---

## 🎨 Default Styles

### Container (`preset.style`)

```ts
{
  width: '100%',
  backgroundColor: '#420097',
  padding: 15,
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
}
```

### Text (`preset.textStyle`)

```ts
{
  color: '#ededed',
  fontSize: 18,
  fontWeight: 'bold'
}
```

### Disabled (`preset.disabledStyle`)

```ts
{
  backgroundColor: '#919191',
  color: '#dedede'
}
```

---

## 📌 Notes

- If `children` is provided, it overrides the `text` prop.
- The component uses `TouchableOpacity` from `react-native`.
- `disabled` or `loading` makes the button non-pressable and applies appropriate styles.

---

## 🧪 Example

```tsx
<Button
  text="Login"
  loading={isSubmitting}
  disabled={!isFormValid}
  loadingColor="#fff"
  disabledStyle={{ backgroundColor: '#ccc', color: '#888' }}
  onPress={handleLogin}
/>
```

---