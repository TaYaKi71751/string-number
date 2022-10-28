#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<stddef.h>
#include<stdbool.h>

#include "./string_function.h"

#ifndef __CUSTOM_INTEGER_DEF_NUMBER_H__
#include "./integer_def_decimal.h"

/** START DEFINE INT_NUM_CHARSET **/
#ifndef __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__
#define __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__() (__CUSTOM_INTEGER_DEF_DECIMAL_CHARSET__())
#endif
/** END DEFINE INT_NUM_CHARSET **/

#ifndef __CHARSET_LEN_ZERO_ABORT__
#define __CHARSET_LEN_ZERO_ABORT__() (\
	perror(""),\
	abort()\
)
#endif
#ifndef __OUT_OF_INDEX_ABORT__
#define __OUT_OF_INDEX_ABORT__() (\
	perror(""),\
	abort()\
)
#endif

#ifndef __CHARSET_LEN_CHECK__
#define __CHARSET_LEN_CHECK__() (\
	strlen_runtime(__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()) ? \
		true : \
		(__CHARSET_LEN_ZERO_ABORT__(),false)\
)
#endif

// #ifndef __IS_CURRENT_NUMBER_CHARSET__
// #define __IS_CURRENT_NUMBER_CHARSET__(charset_index,current) (\
// 	(charset_index + 1) < strlen_runtime(__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()) ? (\
// 		__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()[charset_index] != current ? \
// 			__IS_CURRENT_NUMBER_CHARSET__(charset_index + 1,current) : \
// 			true\
// 		) : false\
// )
// #endif

// #ifndef __START_NUMBER__
// #define __START_NUMBER__(index,length,n) (\
// 	(index + 1) < length ? (\
// 		__IS_CURRENT_NUMBER_CHARSET__(0,n + index) ? \
// 			n + index :\
// 			__START_NUMBER__(index + 1,length,n)\
// 	) : (\
// 		__IS_CURRENT_NUMBER_CHARSET__(0,n + index) ? \
// 			n + index : \
// 			0x00\
// 	)\
// )
// #endif

// #ifndef __END_NUMBER__
// #define __END_NUMBER__(index,length,n) (\
// 	(index + 1) < length ? (\
// 		__IS_CURRENT_NUMBER_CHARSET__(0,n + index) ? \
// 			__END_NUMBER__(index + 1,length,n) : \
// 			n + index\
// 	) : (\
// 		__IS_CURRENT_NUMBER_CHARSET__(0,n + index) ? \
// 			n + index : \
// 			0x00\
// 	)\
// )
// #endif

// #ifndef __CHARSET_AT__
// #define __CHARSET_AT__(index) (\
// 	index < strlen_runtime(__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()) ? \
// 		__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()[index] : \
// 		(__OUT_OF_INDEX_ABORT__(),false)\
// )
// #endif

// #ifndef __IS_CURRENT_CHARSET_ZERO__
// #define __IS_CURRENT_CHARSET_ZERO__(current) (\
// 	current == __CHARSET_AT__(0)\
// )
// #endif

// #ifndef IS_NUMBER_ZERO
// #define IS_NUMBER_ZERO(index,length,str) (\
//  __IS_CURRENT_CHARSET_ZERO__(0,__TRIM_NUMBER__(index,length,str))\
// )
// #endif

char __CHARSET_AT__(size_t index);

bool __IS_CURRENT_NUMBER_CHARSET__(size_t charset_index,char current);
bool __IS_CURRENT_CHARSET_ZERO__(char current);

char* __START_NUMBER__(size_t index, size_t length, char* n);

char* __END_NUMBER__(size_t index, size_t length, char* n);

size_t __INDEX_OF_CURRENT_CHARSET__(size_t charset_index,char current);
int __CMP_CURRENT_CHARSET__(char a_current,char b_current);
int __CMP_CHARSET__(char *a,char *b);

#endif
