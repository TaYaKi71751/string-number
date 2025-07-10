#include "./integer_def_sign.h"

#ifdef __EMSCRIPTEN__
#include <emscripten/emscripten.h>
#endif

char *__SIGN_NEGATIVE__ = 0x00; 
#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
char *__GET_SIGN_NEGATIVE__(){ return __SIGN_NEGATIVE__; }
#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
void __SAFE_SET_SIGN_NEGATIVE__(char *negative){
	if(__SIGN_NEGATIVE__)(
		(free(__SIGN_NEGATIVE__)),
		(__SIGN_NEGATIVE__ = 0x00)
	);
	if(negative)(
	 (__SIGN_NEGATIVE__ = calloc(strlen_runtime(negative) + 1,sizeof(char)))
	);
	if(negative && strlen_runtime(negative)) (
		(memcpy(__SIGN_NEGATIVE__,negative,strlen_runtime(negative)))
	);
}
void __SET_SIGN_NEGATIVE__(char *negative){ __SIGN_NEGATIVE__ = negative; }

char *__SIGN_POSITIVE__ = 0x00;
char *__GET_SIGN_POSITIVE__(){ return __SIGN_POSITIVE__; }
#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
void __SAFE_SET_SIGN_POSITIVE__(char *positive){
	if(__SIGN_POSITIVE__)(
		(free(__SIGN_POSITIVE__)),
		(__SIGN_POSITIVE__ = 0x00)
	);
	if(positive)(
	 (__SIGN_POSITIVE__ = calloc(strlen_runtime(positive) + 1,sizeof(char)))
	);
	if(positive && strlen_runtime(positive)) (
		(memcpy(__SIGN_POSITIVE__,positive,strlen_runtime(positive)))
	);
}
#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
void __SET_SIGN_POSITIVE__(char *positive){ __SIGN_POSITIVE__ = positive; }

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
bool __IS_SIGN_NEGATIVE__(size_t sign_index,size_t sign_length,char* sign){
 return (
	sign_length && 
	strlen_runtime(__GET_SIGN_NEGATIVE__()) &&
	(sign_index + strlen_runtime(__GET_SIGN_NEGATIVE__())) <= sign_length &&
	 sign_index <= strlen_runtime(__GET_SIGN_NEGATIVE__()) ? (
		strncmp(__GET_SIGN_NEGATIVE__(),sign + sign_index,strlen_runtime(__GET_SIGN_NEGATIVE__())) == 0 ?
		 true :
		 __IS_SIGN_NEGATIVE__(sign_index + 1,sign_length,sign)
	) : false
 );
}

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
bool __IS_SIGN_POSITIVE__(size_t sign_index,size_t sign_length,char* sign){
 return (
	sign_length && 
	strlen_runtime(__GET_SIGN_POSITIVE__()) &&
	(sign_index + strlen_runtime(__GET_SIGN_POSITIVE__())) <= sign_length &&
	sign_index <= strlen_runtime(__GET_SIGN_POSITIVE__()) ? (
		strncmp(__GET_SIGN_POSITIVE__(),sign + sign_index,strlen_runtime(__GET_SIGN_POSITIVE__())) == 0 ?
		 true :
		 __IS_SIGN_POSITIVE__(sign_index + 1,sign_length,sign)
	) : false
 );
}

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
bool __IS_SIGN_NULL__(size_t sign_index,size_t sign_length,char* sign){
 return (
	!__IS_SIGN_NEGATIVE__(sign_index,sign_length,sign) &&
	!__IS_SIGN_POSITIVE__(sign_index,sign_length,sign)
 );
}

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
size_t __INDEX_OF_SIGN_NEGATIVE__(size_t sign_index,size_t sign_length,char* sign){
 if(__IS_SIGN_NEGATIVE__(sign_index,sign_length,sign)) return sign_index;
 if(sign_index >= sign_length) return (size_t)-1;
 return __INDEX_OF_SIGN_NEGATIVE__(sign_index + 1,sign_length,sign);
}
#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
size_t __INDEX_OF_SIGN_POSITIVE__(size_t sign_index,size_t sign_length,char* sign){
 if(__IS_SIGN_POSITIVE__(sign_index,sign_length,sign)) return sign_index;
 if(sign_index >= sign_length) return (size_t)-1;
 return __INDEX_OF_SIGN_POSITIVE__(sign_index + 1,sign_length,sign);
}