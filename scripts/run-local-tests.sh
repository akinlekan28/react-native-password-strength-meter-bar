#!/bin/bash

isOSX() {
  [ $OS == "osx" ] || [ $OS == "both" ]
}

isAndroid() {
  [ $OS == "android" ] || [ $OS == "both" ]
}

set -e

# Run appium
(pkill -9 -f appium || true)
npm run appium > /dev/null 2>&1 &

# Build Android
if isAndroid; then
  npm run run-emulator:android
  trap 'adb shell reboot -p' 0
fi

# Run Android e2e tests
if isAndroid; then
  npm run test:android
fi

# Run iOS e2e tests
if isOSX; then
  npm run test:ios
fi