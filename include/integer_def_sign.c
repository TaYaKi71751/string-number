#include "./integer_def_sign.h"

char *__SIGN_NEGATIVE__ = "-";
char *__GET_SIGN_NEGATIVE__(){ return __SIGN_NEGATIVE__; }
void __SET_SIGN_NEGATIVE__(char *negative){ __SIGN_NEGATIVE__ = negative; }

char *__SIGN_POSITIVE__ = "";
char *__GET_SIGN_POSITIVE__(){ return __SIGN_POSITIVE__; }
void __SET_SIGN_POSITIVE__(char *positive){ __SIGN_POSITIVE__ = positive; }

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

bool __IS_SIGN_NULL__(size_t sign_index,size_t sign_length,char* sign){
 return (
	!__IS_SIGN_NEGATIVE__(sign_index,sign_length,sign) &&
	!__IS_SIGN_POSITIVE__(sign_index,sign_length,sign)
 );
}
