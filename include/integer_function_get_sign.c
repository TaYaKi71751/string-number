#include "./integer_function_get_sign.h"

/** GET_SIGN_INTEGER_START **/
char getSignInteger(struct IntegerClassStruct* s){
 bool number = 0x29 < s->raw[0] && 0x40 < s->raw[0]; /** isNumberASCII **/
 bool zero = getNumberInteger(s)[0] == 0x30;
 bool positive = s->raw[0] == 0x00 || s->raw[0] == '+';
 bool negative = s->raw[0] == '-';
 if(zero || number || positive) return 0x00;
 if(negative) return '-';
	return 0x00;
}
/** GET_SIGN_INTEGER_END **/
