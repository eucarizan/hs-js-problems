#!/usr/bin/env bash
if [[ -z $1 ]]; then
    echo "file argument is required"
else
    node.exe $1
fi	

