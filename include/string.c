#include "./string.h"

/**
	* Functions -> Constructor
	*/
struct StringStruct* StringConstructor(char* value){
	StringStruct* r = calloc(1,sizeof(StringStruct));

	/**
		* Variables
		*/
	r->value = value;
	r->length = strlen(value);

	/**
		* Funcitons
		*/
	r->charAt = charAt;

	return r;
}

/**
	* Functions
	*/
char charAt(struct StringStruct* s,int index){
	bool state = s->length > index && index > -1;
	if(state){
		return s->value[index];
	}
	return (char)0x00;
}
