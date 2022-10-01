#include "./integer_function.h"

/** INTEGER_FUNCTION_CONSTRUCTOR_START **/
struct IntegerFunctionStruct* IntegerFunctionConstructor(){
 /** INTEGER_FUNCTION_CONSTRUCTOR_ALLOC_START **/
 struct IntegerFunctionStruct* s = calloc(1,sizeof(IntegerFunctionStruct));
 /** INTEGER_FUNCTION_CONSTRUCTOR_ALLOC_END **/
 /** INTEGER_FUNCTION_COSNTRUCTOR_ASSIGN_FUNCTION_START **/
 s->getNumber = getNumberInteger;
 s->getSign = getSignInteger;
 s->add = addInteger;
 s->max = maxInteger;
 s->min = minInteger;
 s->sub = subInteger;
 /** INTEGER_FUNCTION_COSNTRUCTOR_ASSIGN_FUNCTION_END **/
 /** INTEGER_FUNCTION_COSNTRUCTOR_RETURN **/
 return s;
}
/** INTEGER_FUNCTION_CONSTRUCTOR_END **/
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
/** ADD_INTEGER_START **/
struct IntegerClassStruct* addInteger(struct IntegerClassStruct* a,struct IntegerClassStruct* b){
 const size_t FIRST_SIGN_BYTE_SIZE = 0x01;
 const size_t END_BYTE_SIZE = 0x01;

 char* r = NULL;
 char* ur = NULL;

 struct IntegerClassStruct* ri = NULL;
 struct IntegerClassStruct* api = NULL;
 struct IntegerClassStruct* bpi = NULL;
 struct IntegerClassStruct* mxi = NULL;
 struct IntegerClassStruct* mni = NULL;

 char* an = getNumberInteger(a);
 char* bn = getNumberInteger(b);
 char* rn = NULL;

 char as = getSignInteger(a);
 char bs = getSignInteger(b);
 char rs = 0x00;

 bool az = an[0] == 0x30;
 bool bz = bn[0] == 0x30;

 bool am = as == '-' && !az;
 bool bm = bs == '-' && !bz;

 bool ap = as != '-' && !az;
 bool bp = bs != '-' && !bz;

 size_t anl = strlen_runtime(an);
 size_t bnl = strlen_runtime(bn);
 size_t rnl = 0x00;

		char* zst = "0";

 size_t length = 0x00;
 size_t i = 0x00;
 char over = 0x00;
 char current = 0x00;
		api = (IntegerClassStruct*)MemoryClassConstructor(an,strlen_runtime(an));
		bpi = (IntegerClassStruct*)MemoryClassConstructor(bn,strlen_runtime(bn));
		mxi = maxInteger(a,b);
		mni = minInteger(a,b);
	if((az && bz)) goto RESULT_ZERO; 
	if(az || bz) goto ZERO;
	if(am || bm) goto NEGATIVE;
	if(ap && bp) goto POSITIVE;
ZERO:
	if(az && bz) { // (a = 0) + (b = 0) = (r = 0)
RESULT_ZERO:
		zst = cloneMemory(zst,strlen_runtime(zst));
		rn = zst;
		rs = 0x00;
	}
	if(az && bp) { // (a = 0) + (b = 7) = (b = 7)
		rn = bn;
		rs = bs;
	}
	if(bz && am) { // (a = -5) + (b = 0) = (a = -5)
		rn = an;
		rs = as;
	}
	if(az && bm) { // (a = 0) + (b = -7) = (b = -7)
		rn = bn;
		rs = bs;
	}
	if(bz && ap) { // (a = 7) + (b = 0) = (a = 7)
		rn = an;
		rs = as;
	}
	rnl = FIRST_SIGN_BYTE_SIZE + strlen_runtime(rn);
	char* rnr = calloc(rnl + END_BYTE_SIZE,sizeof(char));
	memcpy(rnr,&rs,FIRST_SIGN_BYTE_SIZE);
	memcpy(rnr + FIRST_SIGN_BYTE_SIZE,rn,strlen_runtime(rn));
	if(ri != NULL && (ri != a || ri != b)) freeMemory(ri);
	ri = (IntegerClassStruct*) MemoryClassConstructor(rnr,rnl);
	goto VALUE_END;
NEGATIVE:
		if(ap && bm) { // /** (a > 0,b < 0) **/ (a = 3) + (b = -5) = (a = 3) - (|b| = 5)
			mxi = maxInteger(api,bpi);
			if(mxi == 0x00) goto RESULT_ZERO;
			if(mxi == api){ /** (a > 0,b < 0,|a| > |b|) **/
				ri = subInteger(api,bpi); /** r = (|a| - |b|) **/
				rn = getNumberInteger(ri);
				rs = 0x00; /** (r > 0) **/
			}
			if(mxi == bpi){ /** (a > 0,b < 0,|a| < |b|) **/
				ri = subInteger(bpi,api); /** r = (|b| - |a|) **/
				rn = getNumberInteger(ri);
				rs = '-'; /** (r < 0) **/
			}
		}
		if(am && bp){ // (a = -1) + (b = 2) = (b = 2) - (|a| = 1)
			ri = subInteger(bpi,api);
			goto VALUE_END;
		}
		if(am && bm){ // (a = -1) + (b = -2) = (b = -2) - (|a| = 1) = -|(|b| = 2) + (|a| = 1)|
			ri = addInteger(bpi,api);
			rn = getNumberInteger(ri);
			char* rnr = calloc(FIRST_SIGN_BYTE_SIZE + strlen_runtime(rn) + END_BYTE_SIZE,sizeof(char));
			rs = as == bs ? as :'-';
			memcpy(rnr,&rs,FIRST_SIGN_BYTE_SIZE);
			memcpy(rnr + FIRST_SIGN_BYTE_SIZE,rn,strlen_runtime(rn));
			ri = (IntegerClassStruct*)MemoryClassConstructor(rnr,FIRST_SIGN_BYTE_SIZE+strlen_runtime(rn));
			goto VALUE_END;
		}
		rnl = FIRST_SIGN_BYTE_SIZE + strlen_runtime(rn);
		rnr = calloc(rnl + END_BYTE_SIZE,sizeof(char));

		memcpy(rnr,&rs,FIRST_SIGN_BYTE_SIZE);
		memcpy(rnr + FIRST_SIGN_BYTE_SIZE,rn,strlen_runtime(rn));

		ri = (IntegerClassStruct*)MemoryClassConstructor(rnr,rnl);
		goto VALUE_END;
POSITIVE:
 
 rnl = (length = (anl > bnl ? anl : bnl) + 1);
 r = calloc(length + END_BYTE_SIZE,sizeof(char));
 i = length;
	for(i = length;i - 1 <= i;i--){
		if(i == length) continue;
		char ai = (anl - (length - (i + 1)) - 1 <= anl - 1) ? (an[anl - (length - (i + 1)) - 1]) : 0x00;
		char bi = (bnl - (length - (i + 1)) - 1 <= bnl - 1) ? (bn[bnl - (length - (i + 1)) - 1]) : 0x00;

		ai = 0x29 < ai && ai < 0x40 ? ai - 0x30 : 0x00;
		bi = 0x29 < bi && bi < 0x40 ? bi - 0x30 : 0x00;
		// current = (ai + bi);
		r[i - 1] += ((ai + bi + r[i]) / 10);
		r[i] += ((ai + bi) % 10);
		// r[i] += (ai + bi);
	}
	over = 0;
	i = 0;
	for(i = 0;i <= length;i++){
		over = r[i] / 10;
		r[i] = r[i] % 10;
		if(over && !(length - (i + 1))) r[length - (i + 1)] += over;
	}
 i = 0;
 for(i = 0;(i + 1) <= length;i++) r[i]+= 0x30; /** itoa **/
 i = 0;
 for(i = 0;i <= length;i++){ /** TRIM **/
		rnl = length - i;
		if(r[i] == 0x30 && (length - rnl)) continue;
		ur = calloc(FIRST_SIGN_BYTE_SIZE + rnl + END_BYTE_SIZE,sizeof(char));
		memcpy(ur,&rs,strlen_runtime(&rs));
		memcpy(ur + FIRST_SIGN_BYTE_SIZE,r + i,rnl);
		freeMemory(r);
		ri = (IntegerClassStruct*)MemoryClassConstructor(ur,FIRST_SIGN_BYTE_SIZE + rnl);
		break;
	}
VALUE_END:
FREE:
	if(api != a && api != NULL) freeMemory(api);
	if(bpi != b && bpi != NULL) freeMemory(bpi);
RETURN:
	return ri;
}
/** ADD_INTEGER_END **/
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
	api = (IntegerClassStruct*)MemoryClassConstructor(an,strlen_runtime(an));
	bpi = (IntegerClassStruct*)MemoryClassConstructor(bn,strlen_runtime(bn));
		
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
	if(api != a && api != NULL) freeMemory(api);
	if(bpi != b && bpi != NULL) freeMemory(bpi);
RETURN:
 return ri;
}
/** MAX_INTEGER_END **/
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
/** SUB_INTEGER_START **/
struct IntegerClassStruct* subInteger(struct IntegerClassStruct* a,struct IntegerClassStruct* b){
 const size_t FIRST_SIGN_BYTE_SIZE = 0x01;
 const size_t END_BYTE_SIZE = 0x01;

 char* r = NULL;
 char* ur = NULL;

 struct IntegerClassStruct* ri = NULL;
 struct IntegerClassStruct* api = NULL;
 struct IntegerClassStruct* bpi = NULL;
 struct IntegerClassStruct* mxi = NULL;
 struct IntegerClassStruct* mni = NULL;

	char* an = getNumberInteger(a);
	char* bn = getNumberInteger(b);
	char* rn = NULL;
	char* rnr = NULL;

	char as = getSignInteger(a);
	char bs = getSignInteger(b);
	char rs = 0x00;

 bool az = an[0] == 0x30;
 bool bz = bn[0] == 0x30;

 bool am = as == '-' && !az;
 bool bm = bs == '-' && !bz;

 bool ap = as != '-' && !az;
 bool bp = bs != '-' && !bz;

 size_t anl = strlen_runtime(an);
 size_t bnl = strlen_runtime(bn);
 size_t rnl = 0x00;

	char* zst = "0";

	const size_t length = (anl > bnl ? anl : bnl) + 2;
	size_t i = 0x00;
	r = calloc(length,sizeof(char));	
	char borrow = 0x00;
		api = (IntegerClassStruct*)MemoryClassConstructor(an,strlen_runtime(an));
		bpi = (IntegerClassStruct*)MemoryClassConstructor(bn,strlen_runtime(bn));
	if(as == bs && maxInteger(api,bpi) == 0x00) goto RESULT_ZERO;
 if(az || bz) goto ZERO;
	if(am || bm) goto NEGATIVE;
	if(ap && bp) goto POSITIVE;
ZERO:
	if(az && bz) { // (a = 0) + (b = 0) = (r = (0))
RESULT_ZERO:
		rn = cloneMemory(zst,strlen_runtime(zst));
		rs = 0x00;
	}
	if(az && bp) { // (a = 0) - (b = 7) = (r = -(b = 7))
		rn = bn;
		rs = '-';
	}
	if(az && bm) { // (a = 0) - (b = -7) = (r = (|b| = 7))
		rn = bn;
		rs = 0x00;
	}
	if(bz && am) { // (a = -1) - (b = 0) = (r = (a = -1))
		rn = an;
		rs = as;
	}
	if(bz && ap) { // (a = 7) - (b = 0) = (r = (a = 7))
		rn = an;
		rs = as;
	}
	rnl = FIRST_SIGN_BYTE_SIZE + strlen_runtime(rn);
	rnr = calloc(rnl + END_BYTE_SIZE,sizeof(char));
	memcpy(rnr,&rs,FIRST_SIGN_BYTE_SIZE);
	memcpy(rnr + FIRST_SIGN_BYTE_SIZE,rn,strlen_runtime(rn));
	ri = (IntegerClassStruct*)MemoryClassConstructor(rnr,rnl);
	goto VALUE_END;
NEGATIVE:
		if(ap && bm) { // (a = 7) - (b = -5) = (a = 7) + (|b| = 5)
			ri = addInteger(a,bpi);
			goto VALUE_END;
		}
		if(am && bp){ // (a = -5) - (b = 8) = -|(|a| = 5) + (b = 8)|
			ri = addInteger(api,bpi);
			rn = getNumberInteger(ri);
			rs = '-';
		}
		if(am && bm){ // (a = -2) - (b = -5) = (|b| = 5) - (|a| = 2)
			ri = subInteger(bpi,api);
			rn = getNumberInteger(ri);
		}
		rnl = FIRST_SIGN_BYTE_SIZE + strlen_runtime(rn);
		rnr = calloc(rnl + END_BYTE_SIZE,sizeof(char));
		memcpy(rnr,&rs,FIRST_SIGN_BYTE_SIZE);
		memcpy(rnr+FIRST_SIGN_BYTE_SIZE,rn,strlen_runtime(rn));
		ri = (IntegerClassStruct*)MemoryClassConstructor(rnr,rnl);
		goto VALUE_END;	
POSITIVE:
	mxi = maxInteger(api,bpi);
	mni = minInteger(api,bpi);
	if(mxi == mni) goto RESULT_ZERO;
	if(mxi == bpi){ /** (a > 0,b > 0,|a| < |b|) **/
		ri = subInteger(bpi,api); /** r = (|b| - |a|) **/
		rn = getNumberInteger(ri);
		rs = getSignInteger(ri) == '-' ? 0x00: '-'; /** (r) = -(r) **/

		rnl = FIRST_SIGN_BYTE_SIZE + strlen_runtime(rn);
		rnr = calloc(rnl + END_BYTE_SIZE,sizeof(char));
		memcpy(rnr,&rs,FIRST_SIGN_BYTE_SIZE);
		memcpy(rnr+FIRST_SIGN_BYTE_SIZE,rn,strlen_runtime(rn));
		ri = (IntegerClassStruct*)MemoryClassConstructor(rnr,rnl);
		goto VALUE_END;	
	}
	i = length;
	for(i = length;i - 1 <= i;i--){
		if(i == length) continue;
		char ai = (anl - (length - i) <= anl - 1) ? an[anl - (length - i)] - 0x30 : 0x00;
		char bi = (bnl - (length - i) <= bnl - 1) ? bn[bnl - (length - i)] - 0x30 : 0x00;
		r[i - 1] += ai - bi;
		if(r[(i - 1)] < 0 && (i - 1) > 0){
			r[length - (i + 1)] += 10;
			r[length - (i + 2)] -= 1;
		}
	}
	i = length;
	for(i = length;i - 2 <= i;i--){
		if(
			(r[0] < 0x00 || r[length - (i + 1)] < 0x00) && length - (i + 1) > 0
		){
			r[length - (i + 1)] = (
					r[length - (i + 1)] * (
					r[length - (i + 1)] < 0x00 ? 1 : -1
			) + 10) % 10;
			r[length - (i + 2)] -= 1;
		}
		if(r[length - (i + 1)] < 0x00 &&  (length - (i + 1)) == 0){
			r[length - (i + 1)] += r[length - (i + 1)] < 0x00 ? 1 : -1;
		}
	}
	bool negative = false;
	if(r[0] < 0) negative = true;
	i = length;
	for(i = 0;i < length;i++){
		if(i == length - 1) continue;
		if(r[i] < 0) negative = true;
		if(negative) break;
	}
	for(i = 0;i + 1 < length;i++) r[i]+= 0x30; /** itoa **/
	rs = negative ? '-' : 0x00;
 for(i = 0;i + 1 < length;i++){ /** TRIM **/
		rnl = length - i;
		if(r[i] == 0x30 && (length - rnl <= length)) continue;
		ur = calloc(FIRST_SIGN_BYTE_SIZE + rnl + END_BYTE_SIZE,sizeof(char));
		memcpy(ur,&rs,FIRST_SIGN_BYTE_SIZE);
		memcpy(ur + FIRST_SIGN_BYTE_SIZE,r + i,rnl);
		freeMemory(r);
		ri = (IntegerClassStruct*)MemoryClassConstructor(ur,FIRST_SIGN_BYTE_SIZE + rnl);
		break;
	}
VALUE_END:
 if(bpi != b) freeMemory(bpi);
 if(api != a) freeMemory(api);
RETURN:
	return ri;
}
/** SUB_INTEGER_END **/
