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
#include "./string_class.h"

#ifndef __CUSTOM_STRING_FUNCTION_H__
#define __CUSTOM_STRING_FUNCTION_H__

typedef struct StringFunctionStruct {
	char (*charAt)(struct StringClassStruct* s,size_t i);
	size_t (*length)(char* s);
} StringFunctionStruct;

extern struct StringFunctionStruct* StringFunctionConstructor();
extern size_t strlen_runtime(char* s);
extern char charAtString(StringClassStruct* s,size_t i);

#endif