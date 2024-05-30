#!/usr/bin/env bash
case $1 in
    1) if [[ -z $2 ]] || [[ -z $3 ]] || [[ -z $4 ]]; then 
	   echo "please provide a \$2: filename / \$3: readme details line number / \$4: problem name"
       else
	   ../../../utils/add.sh $2 $3 "$4"
       fi ;;
    2) if [[ -z $2 ]]; then
	   echo "please provide a \$2: js file"
       else
	   ../../../utils/run.sh $2
       fi ;;
    3) ../../../utils/get_line_number.sh ;;
    *) echo "provide \$1: 1 - add / 2 - run / 3 - get line number" ;;
esac	

