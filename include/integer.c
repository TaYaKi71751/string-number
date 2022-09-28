#include "./integer.h"

struct IntegerStruct* IntegerConstructor(char* value) {
	if(!isInteger(value)) return 0x00;
	IntegerStruct* r = calloc(1,sizeof(IntegerStruct));

	r->raw = StringConstructor(value);
	r->sign = getIntegerSign(value);
	r->number = getInteger(value);

	/**
		* Functions -> is
		*/
	r->isSigned = isIntegerSigned;
	r->isValid = isInteger;
	r->isNegative = isNegativeInteger;
	r->isPositive = isPositiveInteger;

	/**
		* Functions -> get
		*/
	r->getSign = getIntegerSign;
	r->getNumber = getInteger;

	/**
		* Functions -> trim
		*/
	r->trim = trimInteger;

	/**
		* Functions -> Compare
		*/
	r->max = maxInteger;
	r->min = minInteger;

	/**
		* Functions -> Calculate
		*/
	r->add = addInteger;

	/**
		* Functions -> Print
		*/
	r->print = printIntegerStruct;

	return r;
}

/**
	* Functions -> trim
	*/
struct IntegerStruct* trimInteger(struct IntegerStruct* s){
	for(int i = 0;i < s->number->length;i++){
		if(s->number->value[i] == 0x30 && s->number->value[s->number->length - 1] != 0x30) continue;
		char* tmp = s->number->value;
		size_t tmp_length = s->number->length;
		s->number->length = tmp_length - i;
		s->number->value = calloc(s->number->length,sizeof(char));
		memcpy(s->number->value,tmp + i,s->number->length);
		return s;
	}
	return s;
}

/**
	*	@if (a>b)	@returns a
	*	@if (a<b)	@returns b
	*	@if (a==b)	@returns 0x00
	*/
struct IntegerStruct* maxInteger(struct IntegerStruct* a,struct IntegerStruct* b){
	a = a->trim(a);
	b = b->trim(b);
	if(a->isNegative(a) || b->isNegative(b)) goto NEGATIVE;
	if(a->isPositive(a) && b->isPositive(b)) goto POSITIVE;
NEGATIVE:
		if(a->isPositive(a) && b->isNegative(b)) goto A;
		if(a->isNegative(a) && b->isPositive(b)) goto B;
		struct IntegerStruct* a_positive = a->isPositive(a) ? a : IntegerConstructor(a->number->value);
		struct IntegerStruct* b_positive = b->isPositive(b) ? b : IntegerConstructor(b->number->value);
		struct IntegerStruct* result = IntegerConstructor("0");
		if(a->isNegative(a) && b->isNegative(b)){
			result = result->max(a_positive,b_positive);
			if(result == 0x00) goto EQUAL;
			if(result->number->value == a->number->value) goto B;
			if(result->number->value == b->number->value) goto A;
		}
POSITIVE:
	if(a->number->length > b->number->length) goto A;
	if(a->number->length < b->number->length) goto B;
	// else = a->number->length == b->number->length
	size_t length = a->number->length;
	for(int i = 0;i < length;i++){
		if(a->number->value[i] == b->number->value[i]) continue;
		if(a->number->value[i] > b->number->value[i]) goto A;
		if(a->number->value[i] < b->number->value[i]) goto B;
	}
	goto EQUAL;
A: return a;
B: return b;
EQUAL: return 0x00; // Returns 0x00 if equals
}

struct IntegerStruct* minInteger(struct IntegerStruct* a,struct IntegerStruct* b){
	a = a->trim(a);
	b = a->trim(b);
	struct IntegerStruct* result = IntegerConstructor("0");
	result = result->max(a,b);
	if(result == 0x00) goto EQUAL;
	if(result->number->value == a->number->value) goto B;
	if(result->number->value == b->number->value) goto A;
A: return a;
B: return b;
EQUAL: return 0x00;
}

/**
	* Functions -> Calculate
	*/
struct IntegerStruct* addInteger(struct IntegerStruct* a,struct IntegerStruct* b){
	struct IntegerStruct* a_positive;
	struct IntegerStruct* b_positive;
	struct IntegerStruct* result = IntegerConstructor("0");
	const size_t length = (a->number->length > b->number->length?a:b)->number->length + 1;
	char* r = calloc(length,sizeof(char));
	char over = 0x00;
	char current = 0x00;
	if(a->isPositive(a) && b->isPositive(b)) goto POSITIVE;
POSITIVE:
	for(int i = length;i >= 0;i--){
		if(i == length && !over) continue;
		char _a = a->number->charAt(a->number,(int)a->number->length - (i + 1)); _a = _a == (char)0x00 ? _a : _a - 0x30;
		char _b = b->number->charAt(b->number,(int)b->number->length - (i + 1)); _b = _b == (char)0x00 ? _b : _b - 0x30;
		current = (_a + _b) % 10;
		r[length - (i + 1)] += current;
 	over = (_a + _b) / 10;
		if(over) r[length - (i + 2)] += over;
	}
	over = 0;
	for(int i = 0;i < length;i++){
		over = r[i] / 10;
		r[i] = r[i] % 10;
		if(over) r[i - 1] += over;
	}
	for(int i = 0;i < length;i++){
		r[i]+= 0x30;
	}
	result = IntegerConstructor(r);
	result = result->trim(result);
	return result;
}

/**
	* Functions -> Print
	*/
void printIntegerStruct(struct IntegerStruct* i){
	printf("IntegerStruct = %x\n",i);
	printf("IntegerStruct->raw = {value:%s,length:%lu}\n",i->raw->value,i->raw->length);
	printf("IntegerStruct->sign = %c\n",i->sign);
	printf("IntegerStruct->number = {value:%s,length:%lu}\n",i->number->value,i->number->length);
}

bool isNegativeInteger(struct IntegerStruct* i){
	return i->sign == '-';
}
bool isPositiveInteger(struct IntegerStruct* i){
	return i->sign == '+' || i->sign == 0x00;
}

/**
	* Functions -> is
	*/
bool isIntegerSigned(char* value){
	if(value[0] == '+' || value[0] == '-') goto SIGNED;
	if(0x29 < value[0] && value[0] < 0x40) goto UNSIGNED;
	goto ERROR;
SIGNED:return true;
UNSIGNED:return false;
ERROR:exit(-1);
}
bool isInteger(char* value){
	const StringStruct* number = getInteger(value);
	for(int i = 0;i < number->length;i++){
		if(!(0x2f < number->value[i] && number->value[i] < 0x3a)) return false;
	}
	return true;
}

/**
	* Functions -> get
	*/
char getIntegerSign(char* value){
	char c;
	if(isIntegerSigned(value))							goto SIGNED;
	else																						goto UNSIGNED;
SIGNED:				c = value[0];			goto RETURN;
UNSIGNED:		c = 0x00;							goto RETURN;
RETURN: return c;
}
struct StringStruct* getInteger(char* value){
	char* start;
	if(isIntegerSigned(value))							goto SIGNED;
	else																						goto UNSIGNED;
SIGNED:				start = value + 1;		goto RETURN;
UNSIGNED:  start = value;						goto RETURN;
RETURN:	return StringConstructor(start);
}