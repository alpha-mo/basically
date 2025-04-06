# `Input` Component

An animated, floating-label input component for React Native with RTL support, error highlighting, and full customization for layout and styling.

## ✨ Features

- 🎯 Animated placeholder transition on focus/blur
- 🔒 Secure text entry support
- 🔤 Custom keyboard types and return key behavior
- ❌ Error state with custom border color
- 🔁 RTL (right-to-left) layout support
- 🧠 Imperative methods: `getValue()` and `focus()`

---

## 🔧 Usage

```tsx
import { Input } from '@alpha-mo/basically'
import { useRef } from 'react'

const inputRef = useRef<InputRef>(null)

<Input
  ref={inputRef}
  placeholder="Email"
  keyboardType="email-address"
  onSubmit={() => console.log(inputRef.current?.getValue())}
  error={false}
/>
```

---

## ⚙️ Props

| Prop               | Type                       | Description                                                                 |
|--------------------|----------------------------|-----------------------------------------------------------------------------|
| `placeholder`       | `string`                   | The placeholder text displayed above the input.                            |
| `style`             | `Partial<ViewStyle>`       | Container styling — accepts margin, height, width, and transform props.    |
| `placeholderStyle`  | `Partial<TextStyle>`       | Style for the animated floating placeholder.                               |
| `inputStyle`        | `Partial<TextStyle>`       | Custom style for the `TextInput`.                                          |
| `rtl`               | `boolean`                  | Aligns placeholder to the right if `true`.                                 |
| `keyboardType`      | `TextInputProps['keyboardType']` | Type of keyboard to display.                                         |
| `returnKeyType`     | `ReturnKeyTypeOptions`     | Type of return key on the keyboard.                                        |
| `returnKeyLabel`    | `string`                   | Label for the return key.                                                  |
| `onSubmit`          | `TextInputProps['onSubmitEditing']` | Called when the return key is pressed.                             |
| `secure`            | `boolean`                  | Masks input for passwords.                                                 |
| `error`             | `boolean`                  | Highlights the input border on error.                                      |
| `errorBorderColor`  | `ColorValue`               | Custom color for the error border.                                         |

---

## 📟 Refs

The component supports imperative methods via `forwardRef`.

| Method      | Return Type | Description                         |
|-------------|-------------|-------------------------------------|
| `getValue()`| `string`     | Returns the current input value.   |
| `focus()`   | `void`       | Focuses the input programmatically. |

---

## 🎨 Default Styles

### Container

```ts
{
  position: 'relative',
  borderRadius: 4,
  justifyContent: 'center',
  overflow: 'visible',
}
```

### Input

```ts
{
  backgroundColor: '#fef8f0',
  borderWidth: 2,
  borderRadius: 4,
  paddingVertical: 10,
  paddingHorizontal: 10,
  fontSize: 16,
  borderColor: '#a999b8'
}
```

### Placeholder

```ts
{
  backgroundColor: '#fef8f0',
  position: 'absolute',
  paddingHorizontal: 8,
  paddingVertical: 2,
  borderRadius: 4,
  fontSize: 12,
  color: '#3c008b',
  fontWeight: '700'
}
```

---

## 🧪 Example

```tsx
<Input
  placeholder="Password"
  secure
  error={hasError}
  errorBorderColor="#ff4d4f"
  rtl={false}
  returnKeyType="done"
  onSubmit={() => console.log("Submitted")}
/>
```

---

## 🧠 Tip

Use `getValue()` and `focus()` via ref for forms or input validation flows!

```tsx
  const inputRef = useRef<InputRef>(null)

  useEffect(()=>{
    if(inputRef1.current) {
      inputRef1.current.focus()
      console.log(inputRef1.current.getValue());
    }
  },[inputRef1])
  ________

  <Input
    style={styles.input}
    ref={inputRef}
    placeholder={'hgghh'}
    returnKeyType="next"
    returnKeyLabel="Next"
    onSubmit={handleFirstSubmit}
  />
  ```

---