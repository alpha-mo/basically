# ImageViewer

The `ImageViewer` component is a powerful image viewing utility for React Native projects using `react-native-gesture-handler` and `react-native-reanimated`. It supports pinch-to-zoom, pan gestures, double-tap zoom, and a fling gesture to navigate back.

## Features

- **Pinch-to-Zoom**: Use two fingers to zoom in and out.
- **Pan Gesture**: Move the image around when zoomed in.
- **Double-Tap Zoom**: Double tap to toggle zoom levels.
- **Fling Gesture**: Swipe up to close the viewer.
- **Supports Local and Remote Images**.

## Usage

### (Proposed) ImageViewer in a Modal with Expo Router

You can integrate `ImageViewer` inside a modal screen for a better user experience.

#### 1. Define a Modal Route

In your `app/_layout.tsx` (or equivalent), ensure that modal presentation is enabled for the screen:

```tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="modal"
        options={{
          presentation: 'modal',
          headerShown: false,
          animation: 'fade',
        }}
      />
    </Stack>
  );
}
```

#### 2. Create the Modal Screen

Create a `modal.tsx` file in your Expo Router project and render `ImageViewer` inside it:

```tsx
import React from 'react';
import { ImageViewer } from '@alpha-mo/basically';

export default function ModalScreen() {
  return <ImageViewer />;
}
```

#### 3. Open the Modal with an Image

Use `expo-router`'s `useRouter` to navigate to the modal and pass the image parameters.

##### For Local Images
```tsx
import { useRouter } from 'expo-router';

const router = useRouter();

/**
 * @param localImg: require('path to your local image')
*/
const showModal = (localImg: number) => {
  router.push({
    pathname: '/modal',
    params: { localSrc: localImg }
  });
};
```

##### For Remote Images
```tsx
const showModal = (uri: string) => {
  router.push({
    pathname: '/modal',
    params: { uri: uri }
  });
};
```

Now, when `handleView` is called, it will push to the `/modal` screen, passing the image data for `ImageViewer` to display.

## Props

| Prop       | Type      | Description |
|------------|----------|-------------|
| `localSrc` | `number` | Local image source using `require()` |
| `uri` | `string` | Remote image URL |
| `style` | `ImageStyle` | Custom styling for the image |
| `animatedStyle` | `Pick<ImageStyle, 'transform'>` | Animated transformations |
| `resizeMode` | `ImagePropsBase['resizeMode']` | Resize mode (e.g., `contain`, `cover`) |

## License

MIT