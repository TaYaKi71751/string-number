#include "./integer_def_init.h"

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
void __SAFE_CALC_INIT__(char *__SIGN_NEGATIVE__,char *__SIGN_POSITIVE__,char *__NUMBER__){
	__SAFE_SET_SIGN_NEGATIVE__(__SIGN_NEGATIVE__);
	__SAFE_SET_SIGN_POSITIVE__(__SIGN_POSITIVE__);
	if(__NUMBER__ && !strlen_runtime(__NUMBER__)) (
		(__NUMBER__ = "0123456789")
	);
	__SAFE_SET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__(__NUMBER__);
}

void __CALC_INIT__(char *__SIGN_NEGATIVE__,char *__SIGN_POSITIVE__,char *__NUMBER__){
	__SAFE_SET_SIGN_NEGATIVE__(__SIGN_NEGATIVE__);
	__SAFE_SET_SIGN_POSITIVE__(__SIGN_POSITIVE__);
	__SAFE_SET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__(__NUMBER__);
}