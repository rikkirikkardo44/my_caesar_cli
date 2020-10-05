# Caesar cipher CLI tool
Implement CLI tool that will encode and decode a text by Caesar cipher.
## Instalation
*To install package use* `npm install` *or* `npm i`
## Launch
*To launch Caesar cipher CLI tool enter into the console* `node my_caesar-cli <options>`
## Options
CLI tool should accept 4 options (short alias and full name):
1. required options:
    - -s, --shift: a shift (number)
    - -a, --action: an action (encode | decode)
1. additional options:
    - -i, --input: an input file path
    - -o, --output: an output file path

## Usage example:
`$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"`

`$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt`

`$ node my_caesar_cli --action decode --shift 7 --input decoded.txt --output plain.txt`

>input.txt This is secret. Message about "_" symbol!

>output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!