#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#endif
#include "./integer_def_sign.h"
#include "./integer_def_number.h"

#ifndef __INTEGER_DEF_INIT_H__
#define __INTEGER_DEF_INIT_H__
void __SAFE_CALC_INIT__(char *__SIGN_NEGATIVE__,char *__SIGN_POSITIVE__,char *__NUMBER__);
void __CALC_INIT__(char *__SIGN_NEGATIVE__,char *__SIGN_POSITIVE__,char *__NUMBER__);
#endif