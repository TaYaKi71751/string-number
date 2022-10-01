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

#ifndef __CUSTOM_INTEGER_FUNCTION_H__
#define __CUSTOM_INTEGER_FUNCTION_H__

typedef struct IntegerFunctionStruct {
	char* (*getNumber)(struct IntegerClassStruct* s);
	char (*getSign)(struct IntegerClassStruct* s);
	struct IntegerClassStruct* (*add)(struct IntegerClassStruct* a,struct IntegerClassStruct* b);
	struct IntegerClassStruct* (*max)(struct IntegerClassStruct* a,struct IntegerClassStruct* b);
	struct IntegerClassStruct* (*min)(struct IntegerClassStruct* a,struct IntegerClassStruct* b);
	struct IntegerClassStruct* (*sub)(struct IntegerClassStruct* a,struct IntegerClassStruct* b);
} IntegerFunctionStruct;
extern struct IntegerFunctionStruct* IntegerFunctionConstructor();
extern char getSignInteger(struct IntegerClassStruct* s);
extern char* getNumberInteger(struct IntegerClassStruct* s);

extern struct IntegerClassStruct* addInteger(struct IntegerClassStruct* a,struct IntegerClassStruct* b);
extern struct IntegerClassStruct* maxInteger(struct IntegerClassStruct* a,struct IntegerClassStruct* b);
extern struct IntegerClassStruct* minInteger(struct IntegerClassStruct* a,struct IntegerClassStruct* b);
extern struct IntegerClassStruct* subInteger(struct IntegerClassStruct* a,struct IntegerClassStruct* b);

#endif
