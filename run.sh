
# Shell script for running operations within a clean isolated docker container (ie for tests)
#
# Build the image first with:
# docker build --tag node:10.14-slim-cuttlebelle .
#
case "$1" in
  bash)
    docker run -it --rm -w "/src/" -v "$PWD:/src" -p 8080:8080 node:10.14-slim-cuttlebelle bash
    ;;
  tests)
    docker run -it --rm -w "/src/" -v "$PWD:/src" node:10.14-slim-cuttlebelle echo $PATH && ls /usr/local/bin/c*
    ;;
  docker-build)
    docker build --tag node:10.14-slim-cuttlebelle .
    ;;
  dev)
    docker run -it --rm -w "/src/" -v "$PWD:/src" -p 8080:8080 node:10.14-slim-cuttlebelle npm install && node --experimental-modules code/updateIndex.mjs && node --experimental-modules code/updateTOC.mjs && cuttlebelle watch
    ;;
  build-sphinx)
    docker build --tag python-spinx:latest -f Dockerfile-Sphinx .
    ;;
  sphinx-bash)
    docker run --rm -it -v "$PWD:/src/" python-spinx bash
    ;;
  *)
    echo $"Usage: $0 { tests | bash | docker-build | build-sphinx | sphinx-bash | dev }"
    exit 1

esac
