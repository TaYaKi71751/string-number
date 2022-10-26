#include <stdio.h>
#include <stdlib.h>
#include <stddef.h>
#include <stdbool.h>
#include <string.h>

#ifndef __CUSTOM_INTEGER_DEF_SIGN_H__
#define __CUSTOM_INTEGER_DEF_SIGN_H__


/** START DEFINE SIGN_MINUS **/
#ifndef __CUSTOM_INTEGER_DEF_SIGN_MINUS__
#define __CUSTOM_INTEGER_DEF_SIGN_MINUS__() ("-")
#endif 
/** END DEFINE SIGN_MINUS **/

/** START DEFINE SIGN_PLUS **/
#ifndef __CUSTOM_INTEGER_DEF_SIGN_PLUS__
#define __CUSTOM_INTEGER_DEF_SIGN_PLUS__() ("")
#endif
/** END DEFINE SIGN_PLUS **/

#ifndef __IS_SIGN_MINUS__
#define __IS_SIGN_MINUS__(sign) (\
 strlen_runtime(sign) && strlen_runtime(__CUSTOM_INTEGER_DEF_SIGN_MINUS__()) && strlen_runtime(sign) >= strlen_runtime(__CUSTOM_INTEGER_DEF_SIGN_MINUS__()) ?\
  strncmp(sign,__CUSTOM_INTEGER_DEF_SIGN_MINUS__(),strlen_runtime(__CUSTOM_INTEGER_DEF_SIGN_MINUS__())) == 0 :\
  false\
)
#endif

#ifndef __IS_SIGN_PLUS__
#define __IS_SIGN_PLUS__(sign) (\
	strlen_runtime(sign) && strlen_runtime(__CUSTOM_INTEGER_DEF_SIGN_PLUS__()) && strlen_runtime(sign) >= strlen_runtime(__CUSTOM_INTEGER_DEF_SIGN_PLUS__()) ?\
		strncmp(sign,__CUSTOM_INTEGER_DEF_SIGN_PLUS__(),strlen_runtime(__CUSTOM_INTEGER_DEF_SIGN_PLUS__())) == 0 :\
		false\
)
#endif

#ifndef __IS_SIGN_NULL__
#define __IS_SIGN_NULL__(index,sign) (\
	index < strlen_runtime(__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()) ? (\
		sign[0] == __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()[index] ? \
			true : \
			__IS_SIGN_NULL(index + 1,sign)\
	) : false\
)

#endif

#endif