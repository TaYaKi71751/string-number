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

#ifndef __CUSTOM_MEMORY_CLASS_H__
#define __CUSTOM_MEMORY_CLASS_H__

typedef struct MemoryClassStruct {
	void* target;
	size_t size;
} MemoryClassStruct;

extern struct MemoryClassStruct* MemoryClassConstructor(void* target,size_t size);

#endif
