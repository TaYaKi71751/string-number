#ifndef __STDIO_H__
#include<stdio.h>
#endif

#ifndef __STDIO_H__
#include<stdlib.h>
#endif

#ifndef __CUSTOM_INTEGER_H__
#include "../include/integer.h"
#endif

#ifndef __CUSTOM_TEST_H__
#define __CUSTOM_TEST_H__

extern void testCalculate(struct IntegerStruct* a,struct IntegerStruct* b);
extern void testCalculateMatrix(struct IntegerStruct* min,struct IntegerStruct* max);
#endif
