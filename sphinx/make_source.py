#!/usr/bin/env python

""" Construct a source folder of RST files from the named folders of
markdown
"""

import m2r
import os
import re

SOURCE_DIR = "../content"
DEST_DIR = "./source/test"

# Get a dictionary mapping parent folder names to children
DIR_MAP = {i[0]: i for i in os.walk(SOURCE_DIR)}


def slugify(value):
    """
    Copied from Django (https://stackoverflow.com/questions/295135/turn-a-string-into-a-valid-filename)
    Normalizes string, converts to lowercase, removes non-alpha characters,
    and converts spaces to hyphens.
    """
    import unicodedata
    #value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore')
    value = unicodedata.normalize('NFKD', value)
    value = re.sub('[^\w\s-]', '', value).strip().lower()
    value = re.sub('[-\s]+', '-', value)
    return value


def parse_dir_name(dirname):
    parts = [slugify(i) for i in dirname.split('/')]
    dest_dir_name = "/".join(parts)
    return dest_dir_name, dirname


def get_md_files(files):
    return [f for f in files if f.split('.')[-1] == "md"]


def make_folder_toctree(root, dirs):
    # Sort the dirs here before looping through
    dirs.sort(key=lambda i: i)
    sub_toc_str = ""
    for dir in dirs:
        if dir.startswith('_'):
            continue
        files = DIR_MAP[f"{root}/{dir}"][2]
        #if not get_md_files(files):
        #    continue
        (dest_dir_name, section_name) = parse_dir_name(dir)
        sub_toc_str += f"   {dest_dir_name}/index.rst\n"
    return f".. toctree::\n   :maxdepth: 10\n\n{sub_toc_str}\n\n"


def md_to_rst(filepath):
    with open(filepath, 'r') as f:
        lines = f.readlines()
    md  = '\n'.join(lines)
    rst = m2r.convert(md)
    lines.clear()
    for line in rst.splitlines():
        lines.append(line)
    return "\n".join(lines)


def title_block(dir):
    title_str = parse_dir_name(os.path.basename(root))[1]
    underscore = "=" * len(title_str)
    return f"{title_str}\n{underscore}\n\n"


if __name__ == "__main__":

    # Step through each folder and convert to rst
    for (key, value) in DIR_MAP.items():
        (root, sub_dirs, files) = value
        if os.path.basename(root).startswith('_'):
            continue
        print("PARSING FOLDER: %s"%(root))

        # Concatenate the .md files into a single .rst string
        files.sort(key=lambda i: i)
        rst_blocks = [md_to_rst(f"{root}/{file}") for file in get_md_files(files)]
        rst_string = "\n\n".join(rst_blocks)

        # Make a matching folder in the dest_dir
        toctree = make_folder_toctree(root, sub_dirs)
        # Add a title
        #if "1. User" in root:
        #    import pdb;pdb.set_trace()
        has_title = True if "====" in rst_string else False
        if not has_title:
            title = title_block(root)
            rst_string = title + toctree + rst_string
        else:
            rst_string = rst_string + "\n\n" + toctree

        # Write this file to the destination
        (dest_dir_name, dirname) = parse_dir_name(root[len(SOURCE_DIR):])
        dest_dir_name = f'{DEST_DIR}/{dest_dir_name}'
        dest_file_path = f"{dest_dir_name}/index.rst"

        # Create the path and write the files
        if not os.path.exists(dest_dir_name):
            os.makedirs(dest_dir_name)

        # Write the file
        with open(dest_file_path, 'w') as f:
            f.write(rst_string)

    # Finally copy the assetts into _static
