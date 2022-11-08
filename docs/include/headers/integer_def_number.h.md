# `include/integer_def_number.h`

- [macros](./integer_def_number.h.md#macros)
  - [`__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()`](./integer_def_number.h.md#`__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__`)
  - [`__CHARSET_LEN_ZERO_ABORT__()`](./integer_def_number.h.md#`__CHARSET_LEN_ZERO_ABORT__`)
  - [`__OUT_OF_INDEX_ABORT__()`](./integer_def_number.h.md#`__OUT_OF_INDEX_ABORT__`)
  - [`__CHARSET_LEN_CHECK__()`](./integer_def_number.h.md#`__CHARSET_LEN_CHECK__`)

- [function](./integer_def_number.h.md#function)
  - [`__CHARSET_AT__(index)`](./integer_def_number.h.md#`__CHARSET_AT__`)
  - [`__IS_CURRENT_NUMBER_CHARSET__(charset_index,current)`](./integer_def_number.h.md#`__IS_CURRENT_NUMBER_CHARSET__`)
  - [`__IS_CURRENT_CHARSET_ZERO__(current)`](./integer_def_number.h.md#`__IS_CURRENT_CHARSET_ZERO__`)
  - [`__START_NUMBER__(index,length,n)`](./integer_def_number.h.md#`__START_NUMBER__`)
  - [`__END_NUMBER__(index,length,n)`](./integer_def_number.h.md#`__END_NUMBER__`)
  - [`__INDEX_OF_CURRENT_CHARSET__(charset_index,current)`](./integer_def_number.h.md#`__INDEX_OF_CURRENT_CHARSET__`)
  - [`__CMP_CURRENT_CHARSET__(a_current,b_current)`](./integer_def_number.h.md#`__CMP_CURRENT_CHARSET__`)
  - [`__CMP_CHARSET__(a,b)`](./integer_def_number.h.md#`__CMP_CHARSET__`)
  - [`ctoa(c)`](./integer_def_number.h.md#`ctoa`)
  - [`uctoa(uc)`](./integer_def_number.h.md#`uctoa`)
  - [`stoa(s)`](./integer_def_number.h.md#`stoa`)
  - [`ustoa(us)`](./integer_def_number.h.md#`ustoa`)
  - [`itoa(i)`](./integer_def_number.h.md#`itoa`)
  - [`uitoa(ui)`](./integer_def_number.h.md#`uitoa`)
  - [`ltoa(l)`](./integer_def_number.h.md#`ltoa`)
  - [`ultoa(ul)`](./integer_def_number.h.md#`ultoa`)
  - [`lltoa(ll)`](./integer_def_number.h.md#`lltoa`)
  - [`ulltoa(ull)`](./integer_def_number.h.md#`ulltoa`)

## macros
### `__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__`
- `like` - `() => (char*)`
- `length` - *DO NOT OVER `(__INT8_MAX__ / 2)`*
- `custom` - `#define` before `#include`
- `default` - [`__CUSTOM_INTEGER_DEF_DECIMAL_CHARSET__()`](./integer_def_decimal.h.md#`__CUSTOM_INTEGER_DEF_DECIMAL_CHARSET__`)

### `__CHARSET_LEN_ZERO_ABORT__`
- `like` - `() => (void)`

### `__OUT_OF_INDEX_ABORT__`
- `like` - `() => (void)`

### `__CHARSET_LEN_CHECK__`
- `like` - `() => (bool | unreachable<void>)`


## fuction
### `__CHARSET_AT__`
- `like` - `(index) => (char)`
- `params` - `(index:size_t)`
- `aborts` -
   <br/>*`index` > [`strlen_runtime`](./string_function.h.md#`strlen_runtime`)([`__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()`](./integer_def_number.h.md#`__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__`))* -> [`__OUT_OF_INDEX_ABORT__`](./integer_def_number.h.md#`__OUT_OF_INDEX_ABORT__`)
- `returns` - `char` at [`__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()`](./integer_def_number.h.md#`__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__`)[`index`] 

### `__IS_CURRENT_NUMBER_CHARSET__`
- `like` - `(charset_index,current) => (bool)`
- `params` -
   <br/>`charset_index => (size_t)`
	 <br/>`current => (char)`
- `returns` - *`current` in [`__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()`](./integer_def_number.h.md#`__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__`)	*

### `__IS_CURRENT_CHARSET_ZERO__`
- `like` - `(current) => (bool)`
- `params` - 
   <br/>`current => (char)`
- `returns` - *`current` is [`__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()`](./integer_def_number.h.md#`__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__`)[0]*

### `__START_NUMBER__`
- `like` - `(index,length,n)=>(char *)`
- `params` - 
   <br/>`index => (size_t)`
   <br/>`length => (size_t)`
   <br/>`n => (char *)`
- `returns` -
   <br/>*`n + index` > `n + length`* -> `0x00`
   <br/>*[`__IS_CURRENT_NUMBER_CHARSET__`](./integer_def_number.h.md#`__IS_CURRENT_NUMBER_CHARSET__`)(1,`*(n + index)`)* -> `(n + index)`
   <br/>*[`__START_NUMBER__`](./integer_def_number.h.md#`__START_NUMBER__`)(index + 1,length,n)* -> `(n + index)`

### `__END_NUMBER__`
- `like` - `(index,length,n)=>(char *)`
- `params` -
   <br/>`index => (size_t)`
   <br/>`length => (size_t)`
   <br/>`n => (char *)`
- `returns` -
   <br/>*`n + index` > `n + length`* -> `0x00` :
   <br/>*\![`__IS_CURRENT_NUMBER_CHARSET__`](./integer_def_number.h.md#`__IS_CURRENT_NUMBER_CHARSET__`)(0,`*(n + index)`)* -> `n + index` :
   <br/>*[`__END_NUMBER__`](./integer_def_number.h.md#`__END_NUMBER__`)(index + 1,length,n)* -> `n + index`

### `__INDEX_OF_CURRENT_CHARSET__`
- `like` - `(charset_index,current) => (size_t)`
- `params` -
   <br/>`charset_index => (size_t)`
   <br/>`current => (char)`
- `aborts` -
   <br/>*\![`__IS_CURRENT_NUMBER_CHARSET__`](./integer_def_number.h.md#`__IS_CURRENT_NUMBER_CHARSET__`)(0,`current`)*
   <br/>*\!(`charset_index` < `(charset_index + 1)`)*
- `returns` -
   <br/>*`current` == [`__CHARSET_AT__`](./integer_def_number.h.md#`__CHARSET_AT__`)(`charset_index`)* -> `charset_index` :
   <br/>*[`__INDEX_OF_CURRENT_CHARSET__`](./integer_def_number.h.md#`__INDEX_OF_CURRENT_CHARSET__`)(`charset_index + 1`,`current`)* -> [`__CHARSET_AT__`](./integer_def_number.h.md#`__CHARSET_AT__`)(`charset_index`)

### `__CMP_CURRENT_CHARSET__`
- `like` - `(a_current,b_current) => (int)`
- `params` -
   <br/>`a_current => (char)`
   <br/>`b_current => (char)`
- `variables` -
   <br/>`a_index` -> [`__INDEX_OF_CURRENT_CHARSET__`](./integer_def_number.h.md#`__INDEX_OF_CURRENT_CHARSET__`)(0,`a_current`)
   <br/>`b_index` -> [`__INDEX_OF_CURRENT_CHARSET__`](./integer_def_number.h.md#`__INDEX_OF_CURRENT_CHARSET__`)(0,`b_current`)
- `returns` -
   <br/>*`a_index` == `b_index`* -> `0`
   <br/>*`a_index` > `b_index`* -> `1`
   <br/>*`a_index` < `b_index`* -> `-1`

### `__CMP_CHARSET__`
- `like` - `(a,b) => (int)`
- `params` -
   <br/>`a => (char *)`
   <br/>`b => (char *)`
- `variables` -
   <br/>`a_length` -> [`strlen_runtime`](./string_function.h.md#`strlen_runtime`)(`a`)
   <br/>`b_length` -> [`strlen_runtime`](./string_function.h.md#`strlen_runtime`)(`b`)
   <br/>`a_start` -> [`__START_NUMBER__`](./integer_def_number.h.md#`__START_NUMBER__`)(0,`a_length`,`a`)
   <br/>`b_start` -> [`__START_NUMBER__`](./integer_def_number.h.md#`__START_NUMBER__`)(0,`b_length`,`b`)
   <br/>`a_end` -> [`__END_NUMBER__`](./integer_def_number.h.md#`__END_NUMBER__`)(`a_start` - `a`,`a_length`,`a`)
   <br/>`b_end` -> [`__END_NUMBER__`](./integer_def_number.h.md#`__END_NUMBER__`)(`b_start` - `b`,`b_length`,`b`)
   <br/>`a_length` -> (`a_end` + 1 - `a_start`)
   <br/>`b_length` -> (`b_end` + 1 - `b_start`)
- `aborts` -
   <br/>*(!`a_length` || !`b_length`)*
   <br/>*(!`a_start` || !`b_start`)*
   <br/>*(!`a_end` || !`b_end`)*
- `returns` -
   <br/>*`a_length` > `b_length`* -> `1` :
   <br/>*`a_length` < `b_length`* -> `-1` :
   <br/>*`a_length` == `b_length`* -> 
   <br/>*Compare until (`retVal != 0` or `index == length`) [`__CMP_CURRENT_CHARSET__`](./integer_def_number.h.md#`__CMP_CURRENT_CHARSET__`)(`a_start[index]`,`b_start[index]`)* -> `1` or `-1` or `0`

### `ctoa`
- `like` - `(c) => (char *)`
- `params` - 
   <br/>`c => (char)`
- `returns` - *`c` to `string` of `c`'s `digit value` with `malloc`*

### `uctoa`
- `like` - `(uc) => (char *)`
- `params` - 
   <br/>`uc => (unsigned char)`
- `returns` - *`uc` to `string` of `uc`'s `digit value` with `malloc`*

### `stoa`
- `like` - `(s) => (char *)`
- `params` - 
   <br/>`s => (short)`
- `returns` - *`s` to `string` of `s`'s `digit value` with `malloc`*

### `ustoa`
- `like` - `(us) => (char *)`
- `params` - 
   <br/>`us => (unsigned short)`
- `returns` - *`us` to `string` of `us`'s `digit value` with `malloc`*

### `itoa`
- `like` - `(i) => (char *)`
- `params` - 
   <br/>`i => (int)`
- `returns` - *`i` to `string` of `i`'s `digit value` with `malloc`*

### `uitoa`
- `like` - `(ui) => (char *)`
- `params` - 
   <br/>`ui => (unsigned int)`
- `returns` - *`ui` to `string` of `ui`'s `digit value` with `malloc`*

### `ltoa`
- `like` - `(l) => (char *)`
- `params` - 
   <br/>`l => (long)`
- `returns` - *`l` to `string` of `l`'s `digit value` with `malloc`*

### `ultoa`
- `like` - `(ul) => (char *)`
- `params` - 
   <br/>`ul => (unsigned long)`
- `returns` - *`ul` to `string` of `ul`'s `digit value` with `malloc`*

### `lltoa`
- `like` - `(ll) => (char *)`
- `params` - 
   <br/>`ll => (long long)`
- `returns` - *`ll` to `string` of `ll`'s `digit value` with `malloc`*

### `ulltoa`
- `like` - `(ull) => (char *)`
- `params` - 
   <br/>`ull => (unsigned long long)`
- `returns` - *`ull` to `string` of `ull`'s `digit value` with `malloc`*