# `include/integer_def_sign.h`

- [macros](./integer_def_sign.h.md#macros)
  - [`__CUSTOM_INTEGER_DEF_SIGN_MINUS__()`](./integer_def_sign.h.md#`__CUSTOM_INTEGER_DEF_SIGN_MINUS__`)
  - [`__CUSTOM_INTEGER_DEF_SIGN_PLUS__()`](./integer_def_sign.h.md#`__CUSTOM_INTEGER_DEF_SIGN_PLUS__`)
  - [`__SIGN_MINUS__()`](./integer_def_sign.h.md#`__SIGN_MINUS__`)
  - [`__SIGN_PLUS__()`](./integer_def_sign.h.md#`__SIGN_PLUS__`)
  - [`__SIGN_NEGATIVE__()`](./integer_def_sign.h.md#`__SIGN_NEGATIVE__`)
  - [`__SIGN_POSITIVE__()`](./integer_def_sign.h.md#`__SIGN_POSITIVE__`)
  - [`__IS_SIGN_MINUS__(sign_index,sign_length,sign)`](./integer_def_sign.h.md#`__IS_SIGN_MINUS__`)
  - [`__IS_SIGN_PLUS__(sign_index,sign_length,sign)`](./integer_def_sign.h.md#`__IS_SIGN_PLUS__`)
  - [`__IS_SIGN_UNSIGNED__(sign_index,sign_length,sign)`](./integer_def_sign.h.md#`__IS_SIGN_UNSIGNED__`)
  - [`__IS_UNSIGNED__(sign_index,sign_length,sign)`](./integer_def_sign.h.md#`__IS_UNSIGNED__`)

- [function](./integer_def_sign.h.md#function)
  - [`__IS_SIGN_NEGATIVE__(sign_index,sign_length,sign)`](./integer_def_sign.h.md#`__IS_SIGN_NEGATIVE__`)
  - [`__IS_SIGN_POSITIVE__(sign_index,sign_length,sign)`](./integer_def_sign.h.md#`__IS_SIGN_POSITIVE__`)

## macros
### `__CUSTOM_INTEGER_DEF_SIGN_MINUS__`
- `like` - `() => (char *)`
- `custom` - `#define` before `#include`
- `default` - `("-")`

### `__SIGN_MINUS__`
- `like` - `() => (char *)`
- `default` - [`(__CUSTOM_INTEGER_DEF_SIGN_MINUS__())`](./integer_def_sign.h.md#`__CUSTOM_INTEGER_DEF_SIGN_MINUS__`)

### `__SIGN_NEGATIVE__`
- `like` - `() => (char *)`
- `default` - [`(__CUSTOM_INTEGER_DEF_SIGN_MINUS__())`](./integer_def_sign.h.md#`__CUSTOM_INTEGER_DEF_SIGN_MINUS__`)

### `__CUSTOM_INTEGER_DEF_SIGN_PLUS__`
- `like` - `() => (char *)`
- `custom` - `#define` before `#include`
- `default` - `("")`
### `__SIGN_PLUS__`
- `like` - `() => (char *)`
- `default` - [`(__CUSTOM_INTEGER_DEF_SIGN_PLUS__())`](./integer_def_sign.h.md#`__CUSTOM_INTEGER_DEF_SIGN_PLUS__`)

### `__SIGN_POSITIVE__`
- `like` - `() => (char *)`
- `default` - [`(__CUSTOM_INTEGER_DEF_SIGN_PLUS__())`](./integer_def_sign.h.md#`__CUSTOM_INTEGER_DEF_SIGN_PLUS__`)

### `__IS_SIGN_MINUS__`
- `like` - `(sign_index,sign_length,sign) => (bool)`
- `default` - ([`__IS_SIGN_NEGATIVE__`](./integer_def_sign.h.md#`__IS_SIGN_NEGATIVE__`)(`sign_index`,`sign_length`,`sign`))

### `__IS_SIGN_PLUS__`
- `like` - `(sign_index,sign_length,sign) => (bool)`
- `default` - ([`__IS_SIGN_POSITIVE__`](./integer_def_sign.h.md#`__IS_SIGN_POSITIVE__`)(`sign_index`,`sign_length`,`sign`))

### `__IS_SIGN_UNSIGNED__`
- `like` - `(sign_index,sign_length,sign) => (bool)`
- `default` - ([`__IS_SIGN_NULL__`](./integer_def_sign.h.md#`__IS_SIGN_NULL__`)(`sign_index`,`sign_length`,`sign`))

### `__IS_UNSIGNED__`
- `like` - `(sign_index,sign_length,sign) => (bool)`
- `default` - ([`__IS_SIGN_NULL__`](./integer_def_sign.h.md#`__IS_SIGN_NULL__`)(`sign_index`,`sign_length`,`sign`))


## funciton
### `__IS_SIGN_NEGATIVE__`
- `like` - `(sign_index,sign_length,sign) => (bool)`
- `params` -
   <br/>`sign_index => (size_t)`
   <br/>`sign_length => (size_t)`
   <br/>`sign => (char *)`
- `returns` -
   <br/>*`strncmp` with ([`__SIGN_NEGATIVE__()`](./integer_def_sign.h.md#`__SIGN_NEGATIVE__`),`sign_index`,`sign_length`,`sign`) while `sign_index < sign_length`*

### `__IS_SIGN_POSITIVE__`
- `like` - `(sign_index,sign_length,sign) => (bool)`
- `params` -
   <br/>`sign_index => (size_t)`
   <br/>`sign_length => (size_t)`
   <br/>`sign => (char *)`
- `returns` -
   <br/>*`strncmp` with ([`__SIGN_POSITIVE__()`](./integer_def_sign.h.md#`__SIGN_POSITIVE__`),`sign_index`,`sign_length`,`sign`) while `sign_index < sign_length`*

### `__IS_SIGN_NULL__`
- `like` - `(sign_index,sign_length,sign) => (bool)`
- `params` -
   <br/>`sign_index => (size_t)`
   <br/>`sign_length => (size_t)`
   <br/>`sign => (char *)`
- `returns` -
   <br/>(\![`__IS_SIGN_NEGATIVE__`](./integer_def_sign.h.md#`__IS_SIGN_NEGATIVE__`)(`sign_index`,`sign_length`,`sign`) || \![`__IS_SIGN_POSITIVE__`](./integer_def_sign.h.md)(`sign_index`,`sign_length`,`sign`))