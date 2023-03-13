#include <stdio.h>
#include <stdlib.h>
#include <stddef.h>
#include <stdbool.h>
#include <string.h>

#ifndef __SAFE_OVER_SIZE__
#define __SAFE_OVER_SIZE__ 1
#endif

#ifndef __CUSTOM_INTEGER_DEF_CALC_H__
#define __CUSTOM_INTEGER_DEF_CALC_H__

#include "./integer_def_number.h"
#include "./integer_def_sign.h"

char *__SUB_INTEGER_OR_NEGATIVE__(char *a_negativable,char *b_negativable);
char *__SUB_INTEGER_AND_POSITIVE__(char *a_positive,char *b_positive);
char *__SUB_INTEGER__(char *a,char *b);
char *__ADD_INTEGER_OR_NEGATIVE__(char *a_negativable,char *b_negativable);
char *__ADD_INTEGER_AND_POSITIVE__(char *a_positive,char *b_positive);
char *__ADD_INTEGER__(char *a,char *b);
char *__MUL_INTEGER__(char *a,char *b);

#endif