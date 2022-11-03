#include<stdio.h>
#include<stdlib.h>
#include<stddef.h>
#include<stdbool.h>
#include<string.h>

#ifndef __CUSTOM_STRING_DEF_H__
#define __CUSTOM_STRING_DEF_H__

#ifndef __STRING_END_NULL_BYTE_SIZE__
#define __STRING_END_NULL_BYTE_SIZE__ 1
#endif

#define __STRLEN__(index,str) (\
 str[index] == 0x00 ? \
  index : (\
   (index < (index + 1)) ? \
    __STRLEN__(index + 1,str) : \
    (abort(),0)\
  )\
)

#define __CMP_STRLEN__(a,b) (\
 a && b && \
 __STRLEN__(0,a) == __STRLEN__(0,b) ? \
  0 : (\
   __STRLEN__(0,a) > __STRLEN__(0,b) ? \
    1 : (\
     __STRLEN__(0,a) < __STRLEN__(0,b) ? \
      -1 : (abort(),0)\
    )\
  )\
)

#define __STRCMP__(a,b) (\
 a && b && \
 __STRLEN__(a) && __STRLEN__(b) && \
 __STRLEN__(a) == __STRLEN__(b) ? (\
  a[0] == b[0] ? \
   __STRCMP__(a + 1,b + 1) : (\
    a[0] > b[0] ? \
     1 : (\
      a[0] < b[0] ? \
       -1 : (abort(),0)\
     )\
   )\
 ) : (\
  a && b ? (\
   __CMP_STRLEN__(a,b)\
  ) : (abort(),0)\
 )\
)

#endif