#include "./string_function.h"

#ifdef __EMSCRIPTEN__
#include <emscripten/emscripten.h>
#endif

/** STRLEN_RUNTIME_START **/
#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
size_t strlen_runtime(char* s){
	size_t i = 0;
	while(s[i] != 0){
		i++;
	}
	return i;
}
/** STRLEN_RUNTIME_END **/
