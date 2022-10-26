#ifndef __CUSTOM_INTEGER_DEF_NUMBER_H__
#include "./integer_def_decimal.h"

/** START DEFINE INT_NUM_CHARSET **/
#ifndef __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__
#define __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__() (__CUSTOM_INTEGER_DEF_DECIMAL_CHARSET__())
#endif
/** END DEFINE INT_NUM_CHARSET **/

#ifndef __NUMBER_CUSTOM__
#define __NUMBER_CUSTOM__(i) (\
 (&(__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()))[i]\
)
#endif

#ifndef __IS_CURRENT_ZERO
#define __IS_CURRENT_ZERO(index,n) (\
 n[index] == __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()[0]\
)
#endif

#ifndef __TRIM_NUMBER__
#define __TRIM_NUMBER__(index,length,n) (\
 (index + 1) < length ? (\
  __IS_CURRENT_ZERO(index,n) ?\
   __TRIM_NUMBER__(index + 1,length,n) :\
   n + index\
 ) : n + index\
)
#endif

#ifndef __IS_NUMBER_ZERO__
#define __IS_NUMBER_ZERO__(index,length,n) (\
 __IS_CURRENT_ZERO(0,__TRIM_NUMBER__(index,length,n))\
)
#endif

#endif