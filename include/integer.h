#ifndef exit
#include<stdlib.h>
#endif

#ifndef __CUSTOM_STRING_H__
#include "./string.h"
#endif

#ifndef calloc
#include<stdlib.h>
#endif

#ifndef printf
#include<stdio.h>
#endif

#ifndef __CUSTOM_INTEGER_H__
#define __CUSTOM_INTEGER_H__


/**
	* Functions -> get
	*/
char getIntegerSign(char* value);
struct StringStruct* getInteger(char* value);

/**
	* Types - Struct
	*/
typedef struct IntegerStruct {
	/**
		* Variables
		*/
	char sign;
	struct StringStruct* number;
	struct StringStruct* raw;

	/**
		* Functions -> is
		*/
	bool (*isSigned)(char* value);
	bool (*isValid)(char* value);
	bool (*isNegative)(struct IntegerStruct* i);
	bool (*isPositive)(struct IntegerStruct* i);

	/**
		* Functions -> get
		*/
	char (*getSign)(char* value);
	struct StringStruct* (*getNumber)(char* value);

	/**
		* Functions -> trim
		*/
	struct IntegerStruct* (*trim)(struct IntegerStruct* s);

	/**
		* Functions -> Compare
		*/
	struct IntegerStruct* (*max)(struct IntegerStruct* a,struct IntegerStruct* b);
	struct IntegerStruct* (*min)(struct IntegerStruct* a,struct IntegerStruct* b);


	/**
		* Functions -> Calculate
		*/
	struct IntegerStruct* (*add)(struct IntegerStruct* a,struct IntegerStruct* b);

	/**
		* Functions -> Print
		*/
	void (*print)(struct IntegerStruct* i);
	struct StringStruct* (*toString)(struct IntegerStruct* i);

} IntegerStruct;

/**
	* Functions -> Constructor
	*/
extern struct IntegerStruct* IntegerConstructor(char* value);

/**
	* Functions -> Print
	*/
void printIntegerStruct(struct IntegerStruct* i);
struct StringStruct* toStringFromInteger(struct IntegerStruct* i);

/**
	* Functions -> is
	*/
bool isInteger(char* value);
bool isIntegerSigned(char* value);
bool isNegativeInteger(struct IntegerStruct* i);
bool isPositiveInteger(struct IntegerStruct* i);

/**
 * Functions -> trim 
 */
struct IntegerStruct* trimInteger(struct IntegerStruct* s);

/**
	* Functions -> Compare
	*/
struct IntegerStruct* maxInteger(struct IntegerStruct* a,struct IntegerStruct* b);
struct IntegerStruct* minInteger(struct IntegerStruct* a,struct IntegerStruct* b);

/**
	* Functions -> Calculate
	*/
struct IntegerStruct* addInteger(struct IntegerStruct* a,struct IntegerStruct* b);

#endif
