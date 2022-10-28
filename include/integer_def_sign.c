#include "./integer_def_sign.h"

bool __IS_SIGN_NEGATIVE__(char* sign){
 return (
  strlen_runtime(__SIGN_NEGATIVE__()) &&
  strlen_runtime(sign) &&
  strlen_runtime(sign) >= strlen_runtime(__SIGN_NEGATIVE__()) ? (
   strncmp(__SIGN_NEGATIVE__(),sign,strlen_runtime(__SIGN_NEGATIVE__())) == 0
  ) : false
 );
}

bool __IS_SIGN_POSITIVE__(char* sign){
 return (
  strlen_runtime(__SIGN_PLUS__()) &&
  strlen_runtime(sign) &&
  strlen_runtime(sign) >= strlen_runtime(__SIGN_POSITIVE__()) ? (
   strncmp(__SIGN_POSITIVE__(),sign,strlen_runtime(__SIGN_POSITIVE__())) == 0
  ) : false
 );
}

bool __IS_SIGN_NULL__(char* sign){
 if(strlen_runtime(sign) <= strlen_runtime(__SIGN_NEGATIVE__()) && strlen_runtime(sign) <= strlen_runtime(__SIGN_POSITIVE__())) return true;
 return (
  !__IS_SIGN_NEGATIVE__(sign) ||
  !__IS_SIGN_POSITIVE__(sign)
 );
}