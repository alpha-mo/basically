# `TabBar`

A customizable and animated bottom tab bar component for React Native apps using `@react-navigation/bottom-tabs` and `expo-router`. The `TabBar` supports dynamic icon styles, smooth focus animations, and a rich configuration via `tabButtonProps`.

> ✅ Built for flexibility, beauty, and full icon set compatibility via Expo Vector Icons.

---

## ✨ Features

- 📱 Smooth icon and text animations on focus.
- 🎨 Fully customizable icons, text styles, and layout.
- 🌈 Optional focused tab color border for branding or theming.
- 🚫 Filters out internal or system routes like `_sitemap` and `+not-found`.

---

## 📦 Installation

Make sure you have the following peer dependencies:

```bash
npm install @react-navigation/bottom-tabs react-native-reanimated react-native-gesture-handler @expo/vector-icons
```

If you’re using Expo (recommended):

```bash
npx expo install react-native-reanimated react-native-gesture-handler @expo/vector-icons
```

---

## 🚀 Usage

```tsx
import { TabBar } from './tabBar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export const AppTabs = () => (
  <Tab.Navigator tabBar={(props) => <TabBar {...props} useFocusedTabColor />}>
    <Tab.Screen
      name="home"
      component={HomeScreen}
      options={{
        title: "Home",
        tabButtonProps: {
          textColor: "#009bcf",
          font: {
            size: 14,
            lineHeight: 14,
            style: {
              fontWeight: '600',
              textAlignVertical: 'center'
            }
          },
          icon: {
            base: "FontAwesome",
            iconName: "home",
            size: 24,
            color: "#7a9da9",
            focus: {
              borderWidth: 1.25,
              padding: 5,
              color: "#009bcf",
              style: {
                backgroundColor: "#fff",
                borderRadius: 18,
                borderColor: "#009bcf"
              }
            }
          }
        }
      }}
    />
    {/* Add more screens... */}
  </Tab.Navigator>
)
```

---

## 🔧 Props

### `TabBarProps` (Extends `BottomTabBarProps`)

| Prop                | Type                              | Description                                                                 |
|---------------------|-----------------------------------|-----------------------------------------------------------------------------|
| `style`             | `ViewStyle`                       | Optional style object for the tab bar container. Supports layout props.     |
| `useFocusedTabColor`| `boolean`                         | When `true`, adds a border color that matches the active tab's text color. |

---

## 🧩 Tab Configuration

In your screen's `options`, use `tabButtonProps` to configure how each tab looks and behaves.

### `tabButtonProps`

| Prop       | Type                                     | Description                                                       |
|------------|------------------------------------------|-------------------------------------------------------------------|
| `text`     | `string`                                 | Label for the tab.                                                |
| `textColor`| `string`                                 | Color of the label text.                                          |
| `padding`  | `number`                                 | Optional padding around the button.                               |
| `font`     | `{ size, lineHeight, style }`            | Custom font configuration. Supports weight, size, alignment.      |
| `icon`     | `iconConfig`                             | Icon configuration (see below).                                   |

### `icon` configuration

```ts
icon: {
  base: "FontAwesome",
  iconName: "home",
  size: 24,
  color: "#7a9da9",
  focus: {
    color: "#009bcf",
    padding: 5,
    borderWidth: 1.25,
    style: {
      backgroundColor: "#fff",
      borderRadius: 18,
      borderColor: "#009bcf"
    }
  }
}
```

Supports all icon sets from `@expo/vector-icons`:  
`FontAwesome`, `MaterialIcons`, `Ionicons`, `Feather`, etc.

---

## 🧠 How It Works

- The `TabBar` component uses `state.index` to determine which tab is active.
- The active tab icon animates up and enlarges using `react-native-reanimated`.
- Label text fades in and moves above the icon on focus.
- The `BTN` component handles all animations and layout per tab.

---

## 💡 Tips

- Set `useFocusedTabColor` to highlight the current tab with a border — great for emphasizing active sections.
- Avoid using `iconName` values that don't exist in the selected icon set to prevent render issues.
- All tabs are filtered to exclude internal routes like `_sitemap` or `+not-found`.

---

## 🛠️ Customize Even Further

The tab bar is designed to be modular. You can extend `TabBtnProps` and pass in completely custom icons, styles, and animation logic if needed.

---

## 📃 License

MIT — Feel free to use and customize.

---
