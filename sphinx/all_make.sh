#!/bin/bash

# Clear RST files from the source directory
find ./source -name "*.rst" | xargs rm -v

# Delete all folders except those starting with "_"
find ./source/ -type d -maxdepth 1 -mindepth 1 -name "*" | grep -v "/_" | xargs rm -rvf

# Copy the assetts folder into place
cp -r ../assets ./source/

# Make the RST source files from markdown in the contents folder
./make_source.py

# Compile from RST to HTML
make clean && make html
