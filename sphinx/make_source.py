#!/usr/bin/env python

""" Construct a source folder of RST files from the named folders of
markdown
"""

import m2r
import os
import unicode
import re

SOURCE_DIR = "../content"
DEST_DIR = "./source"

# Get a dictionary mapping parent folder names to children
DIR_MAP = {i[0]: i for i in os.walk(SOURCE_DIR)}


def slugify(value):
    """
    Copied from Django (https://stackoverflow.com/questions/295135/turn-a-string-into-a-valid-filename)
    Normalizes string, converts to lowercase, removes non-alpha characters,
    and converts spaces to hyphens.
    """
    import unicodedata
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore')
    value = unicode(re.sub('[^\w\s-]', '', value).strip().lower())
    value = unicode(re.sub('[-\s]+', '-', value))


def parse_dir_name(dirname):
    dest_dir_name = slugify(dirname)
    return dest_dir_name, dirname


def get_md_files(files):
    return [f for f in files if f.split('.')[-1] == "md"]


def make_folder_toctree(dirs):
    # TOC tree
    toctree_str = "-- toctree::\n\n"

    # Sort the dirs here before looping through
    dirs.sort(key=lambda i: i)
    for dir in dirs:
        if not get_md_files(DIR_MAP[dir][2]):
            continue
        (dest_dir_name, section_name) = parse_dir_name(dir)
        toctree_str += f"{dest_dir_name}/index.rst"
    return toctree_str


def md_to_rst(lines):
    md  = '\n'.join(lines)
    rst = m2r.convert(md)
    lines.clear()
    for line in rst.splitlines():
        lines.append(line)
    return lines


# Step through each folder and convert to rst
for (key, value) in DIR_MAP.items():
    (root, sub_dirs, files) = value

    # Concatenate the .md files into a single .rst string
    rst_blocks = [md_to_rst(file) for file in get_md_files()]
    rst_string = "\n\n".join(rst_blocks)

    # Make a matching folder in the dest_dir
    toctree = make_folder_toctree(sub_dirs)
    rst_string = toctree + "\n\n" + rst_string

    # Write this file to the destination
    (dest_dir_name, dirname) = parse_dir_name(root[len(SOURCE_DIR):])
    dest_dir_name = f'{DEST_DIR}/{dest_dir_name}'
    dest_file_path = f"{dest_dir_name}/index.rst"

    # Create the path and write the files
    os.makedirs(dest_dir_name)
    with open(dest_file_path, 'w') as f:
        f.write(rst_string)
