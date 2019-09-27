#!/bin/bash

# Find and replace asset folder to absolute in
find ./build -name "*.html" -print | xargs sed -i 's/\"asset\//\"\/asset\//g'
