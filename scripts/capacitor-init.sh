#!/bin/bash
set -e

APP_NAME="Omar MCQ"
APP_ID="com.omar.mcq"

echo "Installing Capacitor..."
npm install @capacitor/core @capacitor/cli @capacitor/android --save

echo "Initializing Capacitor project..."
npx cap init "$APP_NAME" "$APP_ID" --web-dir=out --npm-client=npm

echo "Adding Android platform..."
npx cap add android

echo "Copying web build into native project..."
npx cap copy android
