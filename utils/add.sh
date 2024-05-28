#!/usr/bin/env bash
if [[ -z $1 ]] || [[ -z $2 ]] || [[ -z $3 ]]; then
    echo "please provide a \$1: filename / \$2: readme details line number / \$3: problem name"
else
    echo "creating js file"
    touch $1.js
    cat ../utils/details | sed -i "$2r /dev/stdin" README.md
    sed -i "$(($2+2))i <summary>$3</summary>" README.md
    sed -i "$(($2+4))i ## $3" README.md
    sed -i "$(($2+8))i [$1.js](./$1.js)" README.md
fi


