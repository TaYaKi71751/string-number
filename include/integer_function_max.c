#include "./integer_function_max.h"
/** MAX_INTEGER_START **/
 /*
	*	@if (a>b)	@returns a
	*	@if (a<b)	@returns b
	*	@if (a==b)	@returns 0x00
	*/
struct IntegerClassStruct* maxInteger(struct IntegerClassStruct* a,struct IntegerClassStruct* b){
 struct IntegerClassStruct* ri = NULL;
 struct IntegerClassStruct* api = NULL;
 struct IntegerClassStruct* bpi = NULL;

 char* an = getNumberInteger(a);
 char* bn = getNumberInteger(b);
	char* rn = NULL;

	size_t anl = strlen_runtime(an);
	size_t bnl = strlen_runtime(bn);

 char as = getSignInteger(a);
 char bs = getSignInteger(b);

 bool az = an[0] == 0x30;
 bool bz = bn[0] == 0x30;

 bool am = as == '-' && !az;
 bool bm = bs == '-' && !bz;

 bool ap = as != '-' && !az;
 bool bp = bs != '-' && !bz;

 if(az || bz) goto ZERO;
	if(am || bm) goto NEGATIVE;
	if(ap && bp) goto POSITIVE;
ZERO:
	if(az && bz) goto EQUAL;
	if(az && bp) goto B;
	if(bz && am) goto B;
	if(az && bm) goto A;
	if(bz && ap) goto A;
NEGATIVE:
		if(ap && bm) goto A;
		if(am && bp) goto B;
	api = (IntegerClassStruct*)MemoryClassConstructor(an,anl);
	bpi = (IntegerClassStruct*)MemoryClassConstructor(bn,bnl);
		
		if(am && bm){
			ri = maxInteger(api,bpi);
			if(ri == 0x00) goto EQUAL;
	 	rn = getNumberInteger(ri);
			if(rn == an) goto B;
			if(rn == bn) goto A;
		}
POSITIVE:
	if(strlen_runtime(an) > strlen_runtime(bn)) goto A;
	if(strlen_runtime(an) < strlen_runtime(bn)) goto B;
	// else = strlen(an) == strlen(bn) 
	size_t length = strlen_runtime(an);
	for(int i = 0;i < length;i++){
		if(an[i] == bn[i]) continue;
		if(an[i] > bn[i]) goto A;
		if(an[i] < bn[i]) goto B;
	}
	goto EQUAL;
A: ri = a; goto VALUE_END;
B: ri = b; goto VALUE_END;
EQUAL: ri = 0x00; goto VALUE_END; // Returns 0x00 if equals
VALUE_END:
FREE:
	if(api != a && api != NULL) ((freeMemory(api)),											(api = NULL));
	if(bpi != b && bpi != NULL) ((freeMemory(bpi)),											(bpi = NULL));
RETURN:
 return ri;
}
/** MAX_INTEGER_END **/
