---
title: base64 coding principle
date: 2020-06-26 11:09:52
subtitle: 
categories: 
tags: base64
cover: http://b-ssl.duitang.com/uploads/item/201601/29/20160129201251_4uiQa.jpeg
---

## background
`base64` has become common 8-bit code in the network.
It appears because of the spread of the internet.
> It works when transmit English, but it will display as gibberish when use Chinese and some other language.

## principle
`base64` use `A-Za-z0-9+/` as index table, and `=` as fill character.
### convert steps
- transform the character string to 3 bytes arrays, 8 bits per byte, 24 bits totally.
- regroup 3 arrays to 4 arrays, 6 bits per array.
- add `00` before each array, so that 3 bytes change to 4 bytes.
- get base64 from the base64 index table.
|  binary  | base64 |  binary  | base64 |  binary  | base64 |  binary  | base64 |
| :------: | :----: | :------: | :----: | :------: | :----: | :------: | :----: |
| 00000000 |   A    | 00010000 |   Q    | 00100000 |   g    | 00110000 |   w    |
| 00000001 |   B    | 00010001 |   R    | 00100001 |   h    | 00110001 |   x    |
| 00000010 |   C    | 00010010 |   S    | 00100010 |   i    | 00110010 |   y    |
| 00000011 |   D    | 00010011 |   T    | 00100011 |   j    | 00110011 |   z    |
| 00000100 |   E    | 00010100 |   U    | 00100100 |   k    | 00110100 |   0    |
| 00000101 |   F    | 00010101 |   V    | 00100101 |   l    | 00110101 |   1    |
| 00000110 |   G    | 00010110 |   W    | 00100110 |   m    | 00110110 |   2    |
| 00000111 |   H    | 00010111 |   X    | 00100111 |   n    | 00110111 |   3    |
| 00001000 |   I    | 00011000 |   Y    | 00101000 |   o    | 00111000 |   4    |
| 00001001 |   J    | 00011001 |   Z    | 00101001 |   p    | 00111001 |   5    |
| 00001010 |   K    | 00011010 |   a    | 00101010 |   q    | 00111010 |   6    |
| 00001011 |   L    | 00011011 |   b    | 00101011 |   r    | 00111011 |   7    |
| 00001100 |   M    | 00011100 |   c    | 00101100 |   s    | 00111100 |   8    |
| 00001101 |   N    | 00011101 |   d    | 00101101 |   t    | 00111101 |   9    |
| 00001110 |   O    | 00011110 |   e    | 00101110 |   u    | 00111110 |   +    |
| 00001111 |   P    | 00011111 |   f    | 00101111 |   v    | 00111111 |   /    |

## examples
### `Man`
ASSII: M - 77, a - 97, n - 110
binary: M - 01001101, a - 01100001, n - 01101110
regroup: 00010011, 00010110, 00000101, 00101110
base64: T, W, F, u
### `A`
ASSII: A - 65
binary: A - 01000001
regroup: 00010000, 00010000
base64: Q, Q, =, = 