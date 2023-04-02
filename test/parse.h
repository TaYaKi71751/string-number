
#include<stdio.h>
#include<stdlib.h>
#include<stddef.h>
#include<stdbool.h>
#include<string.h>

#include "../include/integer_def_sign.h"
#include "../include/integer_def_number.h"

// static char *__GET_SIGN_NEGATIVE__();
// static void __SET_SIGN_NEGATIVE__(char *negative);
// static char *__GET_SIGN_POSITIVE__();
// static void __SET_SIGN_POSITIVE__(char *positive);


#ifndef __CUSTOM_TEST_PARSE_H__
#define __CUSTOM_TEST_PARSE_H__

char* parseCustomString(char *str);
char* parseCustomSign(char *str);

void __TEST_PARSE__();

#endif
