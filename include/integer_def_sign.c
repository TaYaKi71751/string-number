#include "./integer_def_sign.h"

bool __IS_SIGN_NEGATIVE__(size_t sign_index,size_t sign_length,char* sign){
 return (
	sign_length && 
	strlen_runtime(__SIGN_NEGATIVE__()) &&
	(sign_index + strlen_runtime(__SIGN_NEGATIVE__())) <= sign_length &&
	 sign_index <= strlen_runtime(__SIGN_NEGATIVE__()) ? (
		strncmp(__SIGN_NEGATIVE__(),sign + sign_index,strlen_runtime(__SIGN_NEGATIVE__())) == 0 ?
		 true :
		 __IS_SIGN_NEGATIVE__(sign_index + 1,sign_length,sign)
	) : false
 );
}

bool __IS_SIGN_POSITIVE__(size_t sign_index,size_t sign_length,char* sign){
 return (
	sign_length && 
	strlen_runtime(__SIGN_POSITIVE__()) &&
	(sign_index + strlen_runtime(__SIGN_POSITIVE__())) <= sign_length &&
	sign_index <= strlen_runtime(__SIGN_POSITIVE__()) ? (
		strncmp(__SIGN_POSITIVE__(),sign + sign_index,strlen_runtime(__SIGN_POSITIVE__())) == 0 ?
		 true :
		 __IS_SIGN_POSITIVE__(sign_index + 1,sign_length,sign)
	) : false
 );
}

bool __IS_SIGN_NULL__(size_t sign_index,size_t sign_length,char* sign){
 return (
	!__IS_SIGN_NEGATIVE__(sign_index,sign_length,sign) &&
	!__IS_SIGN_POSITIVE__(sign_index,sign_length,sign)
 );
}
