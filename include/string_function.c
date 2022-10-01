#include "./string_function.h"

/** STRING_FUNCTION_CONSTRUCTOR_START **/
struct StringFunctionStruct* StringFunctionConstructor(){
 /** STRING_FUNCTION_CONSTRUCTOR_ALLOC_START **/
 struct StringFunctionStruct* s = calloc(1,sizeof(StringFunctionConstructor));
 /** STRING_FUNCTION_CONSTRUCTOR_ALLOC_END **/
	s->charAt = charAtString;
	s->length = strlen_runtime;
 /** STRING_FUNCTION_CONSTRUCTOR_RETURN **/
	return s; 
}
/** STRING_FUNCTION_CONSTRUCTOR_END **/
/** STRLEN_RUNTIME_START **/
size_t strlen_runtime(char* s){
	size_t i = 0;
	while(s[i] != 0){
		i++;
	}
	return i;
}
/** STRLEN_RUNTIME_END **/
/** CHAR_AT_STRING_START **/
char charAtString(struct StringClassStruct* s,size_t i){
	bool state = s->length > i && s->length > 0;
	return (state ? ((char*)(s->target))[i] : (char)0x00);
}
/** CHAR_AT_STRING_END **/