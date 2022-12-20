#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<stddef.h>
#include<stdbool.h>

#include "./string_function.h"
#include "./string_def.h"

#ifndef __CUSTOM_INTEGER_DEF_NUMBER_H__
#include "./integer_def_atozAtoZ0to9.h"

/** START DEFINE INT_NUM_CHARSET **/
#ifndef __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__
#define __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__() (__CUSTOM_INTEGER_DEF_ATOZ0TO9_CHARSET__())
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

char __CHARSET_AT__(size_t index);

bool __IS_CURRENT_NUMBER_CHARSET__(size_t charset_index,char current);
bool __IS_CURRENT_CHARSET_ZERO__(char current);

char* __START_NUMBER__(size_t index, size_t length, char* n);

char* __END_NUMBER__(size_t index, size_t length, char* n);

size_t __INDEX_OF_CURRENT_CHARSET__(size_t charset_index,char current);
int __CMP_CURRENT_CHARSET__(char a_current,char b_current);
int __CMP_CHARSET__(char *a,char *b);

char *ctoa(char c);
char *uctoa(unsigned char uc);
char *stoa(short s);
char *ustoa(unsigned short us);
char *itoa(int i);
char *uitoa(unsigned int ui);
char *ltoa(long l);
char *ultoa(unsigned long ul);
char *lltoa(long long);
char *ulltoa(unsigned long long ull);

#endif
