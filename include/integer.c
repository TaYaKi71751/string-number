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

	/**
		* Functions -> get
		*/
	r->getSign = getIntegerSign;
	r->getNumber = getInteger;

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
	* Functions -> Calculate
	*/
struct IntegerStruct* addInteger(struct IntegerStruct* a,struct IntegerStruct* b){
	const size_t length = (a->number->length > b->number->length?a:b)->number->length;
	char* r = calloc(length,sizeof(char));
	char over = 0x00;
	for(int i = length;i >= 0;i--){
		if(i == length) continue;
		char _a = a->number->charAt(a->number,(int)a->number->length - (i + 1)); _a = _a == (char)0x00 ? _a : _a - 0x30;
		char _b = b->number->charAt(b->number,(int)b->number->length - (i + 1)); _b = _b == (char)0x00 ? _b : _b - 0x30;
		if(_a == 0x00 && _b == 0x00) continue;
		r[length - (i + 1)] += (_a + _b + over) % 10;
		over = (_a + _b + over) / 10;
	}
	for(int i = 0;i < length;i++){
		r[i]+= 0x30;
	}
	return IntegerConstructor(r);
}

/**
	* Functions -> Print
	*/
void printIntegerStruct(struct IntegerStruct* i){
	printf("IntegerStruct = %x\n",i);
	printf("IntegerStruct->raw = {value:%s,length:%lu}\n",i->raw->value,i->raw->length);
	printf("IntegerStruct->sign = %s\n",i->sign);
	printf("IntegerStruct->number = {value:%s,length:%lu}\n",i->number->value,i->number->length);
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

