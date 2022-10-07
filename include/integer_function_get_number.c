#include "./integer_function_get_number.h"

/** GET_NUMBER_INTEGER_START **/
char* getNumberInteger(struct IntegerClassStruct* s){
	if(s == NULL) return 0x00;
 size_t i = 0;
 for(i = 0;(s->length - (i + 1)) < s->length;i++){
		char a = s->raw[i];
		// NON_ZERO_NUMBER_CHAR OR (i == S_LAST_INDEX)
		if((0x30 < a && a < 0x40) //[1-9]
		 || !(s->length - (i + 1)) // i < length - 1
		) return s->raw + i;
		if(a == 0x30) continue; // IF_ZERO
 }
 return s->raw + i;
}
/** GET_NUMBER_INTEGER_END **/
