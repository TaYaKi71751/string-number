#include "./string_function.h"

/** STRLEN_RUNTIME_START **/
size_t strlen_runtime(char* s){
	size_t i = 0;
	while(s[i] != 0){
		i++;
	}
	return i;
}
/** STRLEN_RUNTIME_END **/