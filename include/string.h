#ifndef size_t
#include<stddef.h>
#endif

#ifndef true
#include<stdbool.h>
#endif

#ifndef __STRING_H__
#include<string.h>
#endif

#ifndef calloc
#include<stdlib.h>
#endif

#ifndef printf
#include<stdio.h>
#endif

#ifndef __CUSTOM_STRING_H__
#define __CUSTOM_STRING_H__

typedef struct StringStruct {
	/**
		* Variables
		*/
	char* value;
	size_t length;

	/**
		* Functions
		*/
	char (*charAt)(struct StringStruct* s,int index);
} StringStruct;

/**
	* Functions -> Constructor
	*/
extern struct StringStruct* StringConstructor(char* value);

/**
	* Functions
	*/
char charAt(struct StringStruct* s,int index);

#endif
