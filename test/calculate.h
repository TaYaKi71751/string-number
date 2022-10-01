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

#include "../include/memory_class.h"
#include "../include/memory_function.h"
#include "../include/integer_class.h"
#include "../include/integer_function.h"

#ifndef __CUSTOM_TEST_CALCULATE_H__
#define __CUSTOM_TEST_CALCULATE_H__

extern void testCalculate(struct IntegerClassStruct* a,struct IntegerClassStruct* b);
extern void testCalculateMatrix(struct IntegerClassStruct* min,struct IntegerClassStruct* max);

#endif
