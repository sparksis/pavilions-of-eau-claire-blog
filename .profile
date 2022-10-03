JEKYLL_VERSION=4
alias jekyll="docker run --rm \
  --volume="$PWD:/srv/jekyll:Z" \
  -it jekyll/jekyll:$JEKYLL_VERSION \
  jekyll"
