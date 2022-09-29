#include "./calculate.h"

void testCalculate(struct IntegerStruct* a,struct IntegerStruct* b){
	struct IntegerStruct* result = IntegerConstructor("0");
	int result_int = 0;
	int a_int = atoi(a->toString(a)->value);
	int b_int = atoi(b->toString(b)->value);
	result = result->add(a,b);
	result_int = a_int + b_int;

	if(atoi(result->toString(result)->value) != result_int){
		printf("( a = %s%s ) + ( b = %s%s ) = ( result = %s%s )\n",
		 &(a->sign),a->number->value,
			&(b->sign),b->number->value,
			&(result->sign),result->number->value
		);
	}
	result = result->sub(a,b);
	result_int = a_int - b_int;
	if(atoi(result->toString(result)->value) != result_int){
		printf("( a = %s%s ) - ( b = %s%s ) = ( result = %s%s )\n",
		 &(a->sign),a->number->value,
			&(b->sign),b->number->value,
			&(result->sign),result->number->value
		);
	}
}

void testCalculateMatrix(struct IntegerStruct* min,struct IntegerStruct* max){
	char* signs = "---++-++";
	for(
		struct IntegerStruct* _a = min;
		max->max(_a,max) == max;
		_a=_a->add(_a,IntegerConstructor("1"))
	){
		for(
			struct IntegerStruct* _b = min;
			max->max(_b,max) == max;
			_b=_b->add(_b,IntegerConstructor("1"))
		){
			struct IntegerStruct* a = _a;
			struct IntegerStruct* b = _b;
			for(int i = 0;i < strlen(signs);i+=2){
				a->sign = signs[i];
				b->sign = signs[i + 1];
				testCalculate(a,b);
			}
		}
	}
}

