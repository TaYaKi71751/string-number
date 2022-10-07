#ifndef __STDIO_H__
#include<stdio.h>
#endif

#ifndef __STDLIB_H__
#include<stdlib.h>
#endif

#ifndef __STDDEF_H__
#include<stddef.h>
#endif

#ifndef __STDBOOL_H__
#include<stdbool.h>
#endif

#ifndef __STRING_H__
#include<string.h>
#endif

#include "./memory.h"
#include "./string.h"
#include "./integer_class.h"
#include "./integer_function_get_number.h"

#ifndef __CUSTOM_INTEGER_FUNCTION_GET_SIGN_H__
#define __CUSTOM_INTEGER_FUNCTION_GET_SIGN_H__

char getSignInteger(struct IntegerClassStruct* s);

#endif
