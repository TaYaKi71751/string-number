#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#endif
#include <stdio.h>
#include <stdlib.h>
#include <stddef.h>
#include <stdbool.h>
#include <string.h>


#ifndef __CUSTOM_INTEGER_DEF_SIGN_H__
#define __CUSTOM_INTEGER_DEF_SIGN_H__
#include "./string_function.h"

// char *__SIGN_NEGATIVE__;
char *__GET_SIGN_NEGATIVE__();
void __SAFE_SET_SIGN_NEGATIVE__(char *negative);
void __SET_SIGN_NEGATIVE__(char *negative);
//#ifndef __CUSTOM_INTEGER_DEF_SIGN_MINUS__
//#define __CUSTOM_INTEGER_DEF_SIGN_MINUS__() ("-")
//#endif 
//#ifndef __SIGN_MINUS__
//#define __SIGN_MINUS__() (__CUSTOM_INTEGER_DEF_SIGN_MINUS__())
//#endif
//#ifndef __SIGN_NEGATIVE__
//#define __SIGN_NEGATIVE__() (__CUSTOM_INTEGER_DEF_SIGN_MINUS__())
//#endif

// char *__SIGN_POSITIVE__;
char *__GET_SIGN_POSITIVE__();
void __SAFE_SET_SIGN_POSITIVE__(char *positive);
void __SET_SIGN_POSITIVE__(char *positive);
//#ifndef __CUSTOM_INTEGER_DEF_SIGN_PLUS__
//#define __CUSTOM_INTEGER_DEF_SIGN_PLUS__() ("")
//#endif
//#ifndef __SIGN_PLUS__
//#define __SIGN_PLUS__() (__CUSTOM_INTEGER_DEF_SIGN_PLUS__())
//#endif
//#ifndef __SIGN_POSITIVE__
//#define __SIGN_POSITIVE__() (__CUSTOM_INTEGER_DEF_SIGN_PLUS__())
//#endif

bool __IS_SIGN_NEGATIVE__(size_t sign_index,size_t sign_length,char *sign);
bool __IS_SIGN_POSITIVE__(size_t sign_index,size_t sign_length,char *sign);
bool __IS_SIGN_NULL__(size_t sign_index,size_t sign_length,char *sign);
size_t __INDEX_OF_SIGN_NEGATIVE__(size_t sign_index,size_t sign_length,char *sign);
size_t __INDEX_OF_SIGN_POSITIVE__(size_t sign_index,size_t sign_length,char *sign);

#ifndef __IS_SIGN_MINUS__
#define __IS_SIGN_MINUS__(sign_index,sign_length,sign) __IS_SIGN_NEGATIVE__(sign_index,sign_length,sign)
#endif
#ifndef __IS_SIGN_PLUS__
#define __IS_SIGN_PLUS__(sign_index,sign_length,sign) __IS_SIGN_POSITIVE__(sign_index,sign_length,sign)
#endif
#ifndef __IS_SIGN_UNSIGNED__
#define __IS_SIGN_UNSIGNED__(sign_index,sign_length,sign) __IS_SIGN_NULL__(sign_index,sign_length,sign)
#endif
#ifndef __IS_UNSIGNED__
#define __IS_UNSIGNED__(sign_index,sign_length,sign) __IS_SIGN_NULL__(sign_index,sign_length,sign)
#endif

#endif
