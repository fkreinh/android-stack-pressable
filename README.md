# Pressable Bug Demo - TrueSheet Android Issue

This repository demonstrates a bug where `Pressable` components do not work properly on Android devices when placed inside TrueSheet bottom sheets.

## Bug Description

When a `Pressable` component is rendered inside a `@lodev09/react-native-true-sheet` bottom sheet, it fails to respond to touch events on Android physical devices (works fine on emulators and iOS).

This issue is related to how native view containers handle touch events on Android.

## Quick Test

**Video Demo:**
https://www.loom.com/share/f8b7177fd2d7436c9097ae003923601b?sid=2df58faf-74da-475d-aa92-360748c16fde

**Download APK:**
Download and install the APK to test on your Android device:
https://expo.dev/accounts/felipe-krein/projects/android-stack-pressable/builds/50ed961d-959e-4bbd-a5cd-39e7fc1578a5

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
- react-native-screens: nightly (4.17.0-nightly-20250930-6525eabd8)

## Expected Behavior

Both Pressable components should respond to touch events on all platforms.

## Actual Behavior

The Pressable inside the TrueSheet bottom sheet does not respond to touch events on Android physical devices.

## Related Issues

- https://github.com/lodev09/react-native-true-sheet/issues/163
- https://github.com/software-mansion/react-native-screens/issues/2219
- https://github.com/software-mansion/react-native-screens/pull/3239
