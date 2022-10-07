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
 // s->sub = subInteger;
 /** INTEGER_FUNCTION_COSNTRUCTOR_ASSIGN_FUNCTION_END **/
 /** INTEGER_FUNCTION_COSNTRUCTOR_RETURN **/
 return s;
}
/** INTEGER_FUNCTION_CONSTRUCTOR_END **/