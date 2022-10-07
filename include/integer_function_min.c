#include "./integer_function_min.h"
/** MIN_INTEGER_START **/
struct IntegerClassStruct* minInteger(struct IntegerClassStruct* a,struct IntegerClassStruct* b){
 struct IntegerClassStruct* ri = NULL;

 char* an = getNumberInteger(a);
 char* bn = getNumberInteger(b);
 char* rn = NULL;

	ri = maxInteger(a,b);
	if(ri == 0x00) goto EQUAL;
 rn = getNumberInteger(ri);
	if(rn == an) goto B;
	if(rn == bn) goto A;
A: return a;
B: return b;
EQUAL: return 0x00;
}
/** MIN_INTEGER_END **/
