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

#ifndef __CUSTOM_MEMEORY_FUNCTION_H__
#define __CUSTOM_MEMEORY_FUNCTION_H__

typedef struct MemoryFunctionStruct {
	void* (*free)(void* target);
	void* (*clone)(void* from,size_t size);
	struct MemoryClassStruct* (*alloc)(struct MemoryClassStruct* s,void* target,size_t size);
	bool (*swap)(
		struct MemoryClassStruct* a,struct MemoryClassStruct* a_swap,
		struct MemoryClassStruct* b,struct MemoryClassStruct* b_swap
	);
} MemoryFunctionStruct;

extern struct MemoryFunctionStruct* MemoryFunctionConstructor();

extern void* freeMemory(void* target);
extern void* cloneMemory(void* from,size_t size);
extern struct MemoryClassStruct* allocMemory(struct MemoryClassStruct* s,void* target,size_t size);
extern bool swapMemory(
	struct MemoryClassStruct* a,struct MemoryClassStruct* a_swap,
	struct MemoryClassStruct* b,struct MemoryClassStruct* b_swap
);

#endif
