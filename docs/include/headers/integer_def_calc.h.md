# `include/integer_def_calc.h`

- [macros](./integer_def_calc.h.md#macros)
  - [`__SAFE_OVER_SIZE__`](./integer_def_calc.h.md#`__SAFE_OVER_SIZE__`)

- [function](./integer_def_calc.h.md#function)
  - [`__SUB_INTEGER_OR_NEGATIVE__(a_negativable,b_negativable)`](./integer_def_calc.h.md#`__SUB_INTEGER_OR_NEGATIVE__`)
  - [`__SUB_INTEGER_AND_POSITIVE__(a_positive,b_positive)`](./integer_def_calc.h.md#`__SUB_INTEGER_AND_POSITIVE__`)
  - [`__SUB_INTEGER__(a,b)`](./integer_def_calc.h.md#`__SUB_INTEGER__`)
  - [`__ADD_INTEGER_OR_NEGATIVE__(a_negativable,b_negativable)`](./integer_def_calc.h.md#`__ADD_INTEGER_OR_NEGATIVE__`)
  - [`__ADD_INTEGER_AND_POSITIVE__(a_positive,b_positive)`](./integer_def_calc.h.md#`__ADD_INTGER_AND_POSITIVE__`)
  - [`__ADD_INTEGER__(a,b)`](./integer_def_calc.h.md#`__ADD_INTEGER__`)

## macros
### `__SAFE_OVER_SIZE__`
- `defualt` - `1`


## function
### `__SUB_INTEGER_OR_NEGATIVE__`
- `like` - `(a_negativable,b_negativable) => (char *)`
- `params` -
   <br/>`a_negativable => (char *)`
   <br/>`b_negativable => (char *)`
- `returns` - *calculate `a_negativable - b_negativable` like `(a_negativable = "-5\0 2") - (b_negativable = "9\0 2") => /** malloc'd **/("-14\0")`*

### `__SUB_INTEGER_AND_POSITIVE__`
- `like` - `(a_positive,b_positive) => (char *)`
- `params` -
   <br/>`a_positive => (char *)`
   <br/>`b_positive => (char *)`
- `returns` - *calculate `a_positive - b_positive` like `(a_positive = "-5\0 2") - (b_positive = "9\0 2") => /** malloc'd **/("-4\0")`*

### `__SUB_INTEGER__`
- `like` - `(a,b) => (char *)`
- `params` -
   <br/>`a => (char *)`
   <br/>`b => (char *)`
- `returns` - *calculate `a - b` like `(a = "5\0 2") - (b = "9\0 2") => /** malloc'd **/("-4\0")`*

### `__ADD_INTEGER_OR_NEGATIVE__`
- `like` - `(a_negativable,b_negativable) => (char *)`
- `params` -
   <br/>`a_negativable => (char *)`
   <br/>`b_negativable => (char *)`
- `returns` - *caculate `a_negativable + b_negativable` like `(a_negativable = "-1\0 1") + (b_negativable = "-2\0") => /** malloc'd **/("-3\0")`*

### `__ADD_INTEGER_AND_POSITIVE__`
- `like` - `(a_positive,b_positive) => (char *)`
- `params` -
   <br/>`a_positive => (char *)`
   <br/>`b_positive => (char *)`
- `returns` - *caculate `a_positive + b_positive` like `(a_positive = "-1\0 1") + (b_positive = "-2\0") => /** malloc'd **/("3\0")`*

### `__ADD_INTGER__`
- `like` - `(a,b) => (char *)`
- `params` -
   <br/>`a => (char *)`
   <br/>`b => (char *)`
- `returns` - *caculate `a + b` like `(a = "1\0 1") + (b = "2\0") => /** malloc'd **/("3\0")`*
