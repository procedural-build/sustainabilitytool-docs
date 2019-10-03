# use python 3.5 image (best compatibility with requirements)
FROM python:3.6-alpine
ENV PYTHONUNBUFFERED 1

# Add mysql client for direct db access
RUN apk update

# Add GCC (required for some python libraries)
RUN apk add build-base tiff-dev jpeg-dev zlib-dev freetype-dev lcms2-dev libwebp-dev bash

RUN mkdir /src
WORKDIR /src

# Install python dependencies
#ADD pip.conf /etc/
ADD requirements.txt /src/

#RUN pip --trusted-host pypi.python.org --trusted-host pypi.org --trusted-host files.pythonhosted.org install --upgrade pip
RUN pip install --upgrade pip && pip install -r requirements.txt
