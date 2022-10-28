#define __CUSTOM_INTEGER_DEF_SIGN_MINUS__() ("_")
#define __CUSTOM_INTEGER_DEF_SIGN_MINUS__() ("+")
#define __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__() (")!@#$\%^&*(")

#include<stdio.h>
#include<stdlib.h>
#include<stddef.h>
#include<stdbool.h>
#include<string.h>

#include "../include/memory_class.h"
#include "../include/memory_function.h"
#include "../include/integer_class.h"
#include "../include/integer_def_number.h"

#ifndef __CUSTOM_TEST_PARSE_H__
#define __CUSTOM_TEST_PARSE_H__

char* parseCustomString(char *str);

#endif
