#include <stdio.h>
#include <stdlib.h>
#include <stddef.h>
#include <stdbool.h>
#include <string.h>

#include "./string_function.h"

#ifndef __CUSTOM_INTEGER_DEF_SIGN_H__
#define __CUSTOM_INTEGER_DEF_SIGN_H__
#include "./integer_def_decimal.h"


/** START DEFINE SIGN_MINUS **/
#ifndef __CUSTOM_INTEGER_DEF_SIGN_MINUS__
#define __CUSTOM_INTEGER_DEF_SIGN_MINUS__() ("-")
#endif 
#ifndef __SIGN_MINUS__
#define __SIGN_MINUS__() (__CUSTOM_INTEGER_DEF_SIGN_MINUS__())
#endif
#ifndef __SIGN_NEGATIVE__
#define __SIGN_NEGATIVE__() (__CUSTOM_INTEGER_DEF_SIGN_MINUS__())
#endif
// #ifndef __IS_SIGN_MINUS__
// #define __IS_SIGN_MINUS__(sign) (\
//  strlen_runtime(sign) && \
// 	strlen_runtime(__CUSTOM_INTEGER_DEF_SIGN_MINUS__()) && \
// 	strlen_runtime(sign) >= strlen_runtime(__CUSTOM_INTEGER_DEF_SIGN_MINUS__()) ? \
//   strncmp(sign,__CUSTOM_INTEGER_DEF_SIGN_MINUS__(),strlen_runtime(__CUSTOM_INTEGER_DEF_SIGN_MINUS__())) == 0 : \
//   false\
// )
// #endif
/** END DEFINE SIGN_MINUS **/

/** START DEFINE SIGN_PLUS **/
#ifndef __CUSTOM_INTEGER_DEF_SIGN_PLUS__
#define __CUSTOM_INTEGER_DEF_SIGN_PLUS__() ("")
#endif
#ifndef __SIGN_PLUS__
#define __SIGN_PLUS__() (__CUSTOM_INTEGER_DEF_SIGN_PLUS__())
#endif
#ifndef __SIGN_POSITIVE__
#define __SIGN_POSITIVE__() (__CUSTOM_INTEGER_DEF_SIGN_PLUS__())
#endif
// #ifndef __IS_SIGN_PLUS__
// #define __IS_SIGN_PLUS__(sign) (\
// 	strlen_runtime(sign) && \
// 	strlen_runtime(__CUSTOM_INTEGER_DEF_SIGN_PLUS__()) && \
// 	strlen_runtime(sign) >= strlen_runtime(__CUSTOM_INTEGER_DEF_SIGN_PLUS__()) ? \
// 		strncmp(sign,__CUSTOM_INTEGER_DEF_SIGN_PLUS__(),strlen_runtime(__CUSTOM_INTEGER_DEF_SIGN_PLUS__())) == 0 : \
// 		false\
// )
// #endif
/** END DEFINE SIGN_PLUS **/

// #ifndef __IS_SIGN_NULL__
// #define __IS_SIGN_NULL__(index,sign) (\
// 	index < strlen_runtime(__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()) ? (\
// 		sign[0] == __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()[index] ? \
// 			true : \
// 			__IS_SIGN_NULL__(index + 1,sign)\
// 	) : false\
// )

// #endif

bool __IS_SIGN_NEGATIVE__(char *sign);
bool __IS_SIGN_POSITIVE__(char *sign);
bool __IS_SIGN_NULL__(char *sign);

#ifndef __IS_SIGN_MINUS__
#define __IS_SIGN_MINUS__(sign) __IS_SIGN_NEGATIVE__(sign)
#endif
#ifndef __IS_SIGN_PLUS__
#define __IS_SIGN_PLUS__(sign) __IS_SIGN_POSITIVE__(sign)
#endif
#ifndef __IS_SIGN_UNSIGNED__
#define __IS_SIGN_UNSIGNED__(sign) __IS_SIGN_NULL__(sign)
#endif
#ifndef __IS_UNSIGNED__
#define __IS_UNSIGNED__(sign) __IS_SIGN_NULL__(sign)
#endif

#endif
