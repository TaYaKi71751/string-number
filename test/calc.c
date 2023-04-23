#include "./calc.h"


int __TEST_ADD_INTEGER_LOOP__(){
 int _r = 0x00;
 char *a = 0x00,*b = 0x00,*r = 0x00,*_rtoa = 0x00;
 for(int i = (((int)__UINT8_MAX__) * -1);i < ((int)__UINT8_MAX__);i++){
  for(int j = (((int)__UINT8_MAX__) * -1);j < ((int)__UINT8_MAX__);j++){
   _r = i + j;
   _rtoa = itoa(_r);
   a = itoa(i);
   b = itoa(j);
   r = (char*)__ADD_INTEGER__(a,b);
   if(strcmp(r,_rtoa) != 0)(
    printf("\"%s\",\"%s\"",r,_rtoa),
    abort()
   );
   (free(a),free(b),a = 0x00,b = 0x00);
   (free(r),free(_rtoa),r = 0x00,_rtoa = 0x00);
  }
 }
 puts("OK with __TEST_ADD_INTEGER_LOOP__");
 return 0;
}

int __TEST_SUB_INTEGER_LOOP__(){
 int _r = 0x00;
 char *a = 0x00,*b = 0x00,*r = 0x00,*_rtoa = 0x00;
 for(int i = (((int)__UINT8_MAX__) * -1);i < ((int)__UINT8_MAX__);i++){
  for(int j = (((int)__UINT8_MAX__) * -1);j < ((int)__UINT8_MAX__);j++){
   _r = i - j;
   _rtoa = itoa(_r);
   a = itoa(i);
   b = itoa(j);
   r = __SUB_INTEGER__(a,b);
   if(strcmp(r,_rtoa) != 0)(
    printf("\"%s\",\"%s\"",r,_rtoa),
    abort()
   );
   (free(a),free(b),a = 0x00,b = 0x00);
   (free(r),free(_rtoa),r = 0x00,_rtoa = 0x00);
  }
 }
 puts("OK with __TEST_SUB_INTEGER_LOOP__");
 return 0;
}


int __TEST_MUL_INTEGER_LOOP__(){
 int _r = 0x00;
 char *a = 0x00,*b = 0x00,*r = 0x00,*_rtoa = 0x00;
 for(int i = (((int)__UINT8_MAX__) * 1);i >= ((int)0);i--){
  for(int j = (((int)__UINT8_MAX__) * 1);j >= ((int)0);j--){
   _r = i * j;
   _rtoa = itoa(_r);
   a = itoa(i);
   b = itoa(j);
   r = __MUL_INTEGER__(a,b);
   if(strcmp(r,_rtoa) != 0)(
    printf("\"%s\",\"%s\"",r,_rtoa),
    abort()
   );
   (free(a),free(b),a = 0x00,b = 0x00);
   (free(r),free(_rtoa),r = 0x00,_rtoa = 0x00);
  }
 }
 puts("OK with __TEST_MUL_INTEGER_LOOP__");
 return 0;
}

int __TEST_ADD_INTEGER__(long _a,long _b){
 long _r = 0x00;
 size_t input_size = 0x00;
 char *a = 0x00,*b = 0x00,*r = 0x00,*_rtoa = 0x00;
 size_t a_length = 0x00,b_length = 0x00;
 _r = _a + _b;
 _rtoa = ltoa(_r);
 a = ltoa(_a);
 b = ltoa(_b);
 r = __ADD_INTEGER__(a,b);
 if(strcmp(r,_rtoa) != 0)(
  printf("\"%s\",\"%s\"",r,_rtoa),
  abort()
 );
 (free(a),free(b),a = 0x00,b = 0x00);
 (free(r),free(_rtoa),r = 0x00,_rtoa = NULL);
 puts("OK with __TEST_ADD_INTEGER__");
}

int __TEST_SUB_INTEGER__(long _a,long _b){
 long _r = 0x00;
 size_t input_size = 0x00;
 char *a = 0x00,*b = 0x00,*r = 0x00,*_rtoa = 0x00;
 size_t a_length = 0x00,b_length = 0x00;
 _r = _a - _b;
 _rtoa = ltoa(_r);
 a = ltoa(_a);
 b = ltoa(_b);
 r = (char*)__SUB_INTEGER__(a,b);
 if(strcmp(r,_rtoa) != 0)(
  printf("\"%s\",\"%s\"",r,_rtoa),
  abort()
 );
 (free(a),free(b),a = 0x00,b = 0x00);
 (free(r),free(_rtoa),r = 0x00,_rtoa = NULL);
 puts("OK with __TEST_SUB_INTEGER__");
}