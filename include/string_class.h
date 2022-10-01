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

#include "./memory_class.h"
#include "./memory_function.h"

#ifndef __CUSTOM_STRING_CLASS_H__
#define __CUSTOM_STRING_CLASS_H__

typedef struct StringClassStruct {
	char* target;
	size_t length;
} StringClassStruct;

#endif
