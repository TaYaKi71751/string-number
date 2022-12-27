#include "../include/integer_def_atozAtoZ0to9.h"

/** START DEFINE INT_NUM_CHARSET **/
#ifndef __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__
#define __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__() (__CUSTOM_INTEGER_DEF_ATOZ0TO9_CHARSET__())
#endif
/** END DEFINE INT_NUM_CHARSET **/

#include<stdio.h>
#include<stdlib.h>
#include<stddef.h>
#include<stdbool.h>
#include<string.h>

#include "../include/integer_def_sign.h"
#include "../include/integer_def_number.h"
#include "../include/integer_def_calc.h"

#ifndef __CUSTOM_TEST_CALC_H__
#define __CUSTOM_TEST_CALC_H__

extern char* __ADD_INTEGER__(char *a, char *b);
extern char* __SUB_INTEGER__(char *a, char *b);
extern int __CMP_CHARSET__(char *a, char *b);

#endif
