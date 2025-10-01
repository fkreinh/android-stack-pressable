# Pressable Bug Demo - TrueSheet Android Issue

This repository demonstrates a bug where `Pressable` components do not work properly on Android devices when placed inside TrueSheet bottom sheets.

## Bug Description

When a `Pressable` component is rendered inside a `@lodev09/react-native-true-sheet` bottom sheet, it fails to respond to touch events on Android physical devices (works fine on emulators and iOS).

This issue is related to how native view containers handle touch events on Android.

## Reproduction

1. Install dependencies:

   ```bash
   bun install
   ```

2. Prebuild the native code:

   ```bash
   bun expo prebuild
   ```

3. Run on Android device:

   ```bash
   bun expo run:android
   ```

4. Test the Pressables:
   - **Outside Bottom Sheet**: Pressable works correctly ✅
   - **Inside Bottom Sheet** (tap "Open Bottom Sheet"): Pressable does not respond on Android device ❌

## Environment

- React Native: 0.81.4
- Expo: ~54.0.11
- @lodev09/react-native-true-sheet: ^2.0.6
- react-native-screens: nightly

## Expected Behavior

Both Pressable components should respond to touch events on all platforms.

## Actual Behavior

The Pressable inside the TrueSheet bottom sheet does not respond to touch events on Android physical devices.

## Related Issues

- https://github.com/lodev09/react-native-true-sheet/issues/163
- https://github.com/software-mansion/react-native-screens/issues/2219
