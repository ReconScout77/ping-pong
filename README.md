# Ping Pong

#### Counts to the input number, replacing some numbers with ping, pong, or ping-pong, July 14, 2017

#### By Robert Murray

## Specifications

| Behavior | Input | Output |
| -------- | ----- | ------ |
| It can count to the provided number | 2 | [1,2] |
| It replaces numbers divisible by 3 with "ping" | 3 | ping |
| It replaces numbers divisible by 5 with "pong" | 5 | pong |
| It replaces numbers divisible by 15 with "ping-pong" | 15 | ping-pong |
| It separates the counted numbers into separate list items | 3 | <li>1</li>  <li>2</li>  <li>ping</li> |
| It clears previous text | 3 <br> <br> <br> 2 | <li>1</li>  <li>2</li>  <li>ping</li> <br> <li>1</li>  <li>2</li> |
| It can count in reverse order | radio value = reverse <br> 3 | <li>ping</li> <li>2</li> <li>1</li> |
