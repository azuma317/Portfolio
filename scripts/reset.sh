#!/bin/bash

# remove node_modules and package-lock.json
echo "Removing node_modules directories and .lock files..."
find . -type dir -name node_modules | xargs rm -rf && rm -rf package-lock.json

echo "Removing .contentlayer directory..."
rm -rf .contentlayer

echo "Removing .build directory..."
rm -rf .build

echo "Removing package-lock.json file..."
rm -rf package-lock.json

# re-install dependencies
echo "Re-installing dependencies..."
npm install

# Run the dev server
echo "Running the dev server..."
npm run build