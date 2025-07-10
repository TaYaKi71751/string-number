#include "./integer_def_calc.h"

#ifdef __EMSCRIPTEN__
#include <emscripten/emscripten.h>
#endif

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
char *__SUB_INTEGER_OR_NEGATIVE__(char *a_negativable,char *b_negativable){
char *a_start = 0x00,*a_end = 0x00,*b_start = 0x00,*b_end = 0x00,*a_sign_start = 0x00,*a_sign_end = 0x00,*b_sign_start = 0x00,*b_sign_end = 0x00;
size_t a_length = 0x00,b_length = 0x00,a_start_length = 0x00,b_start_length = 0x00,a_sign_length = 0x00,b_sign_length = 0x00;

if(!a_negativable || !b_negativable) abort();

a_length = strlen_runtime(a_negativable);
b_length = strlen_runtime(b_negativable);
if(!a_length || !b_length) abort();

a_start = __START_NUMBER__(0,a_length,a_negativable);
b_start = __START_NUMBER__(0,b_length,b_negativable);
if(!a_start || !b_start) abort();

a_end = __END_NUMBER__((size_t)(a_start - a_negativable),a_length,a_negativable);
b_end = __END_NUMBER__((size_t)(b_start - b_negativable),b_length,b_negativable);
if(!a_end || !b_end) abort();

a_start_length = a_end + 1 - a_start;
b_start_length = b_end + 1 - b_start;
if(!a_start_length || !b_start_length) abort();

a_sign_start = a_negativable;
b_sign_start = b_negativable;

a_sign_end = a_start - 1;
b_sign_end = b_start - 1;

a_sign_length = a_sign_end + 1 - a_sign_start;
b_sign_length = b_sign_end + 1 - b_sign_start;

bool a_negative = false,b_negative = false,a_zero = false,b_zero = false;

a_zero = __IS_CURRENT_CHARSET_ZERO__(a_start[0]);
b_zero = __IS_CURRENT_CHARSET_ZERO__(b_start[0]);

a_negative = !a_zero && __IS_SIGN_NEGATIVE__(0,a_sign_length,a_sign_start);
b_negative = !b_zero && __IS_SIGN_NEGATIVE__(0,b_sign_length,b_sign_start);
if(!a_negative && !b_negative) abort();

char *result = 0x00,*result_start = 0x00,*result_end = 0x00,*result_sign = 0x00,*result_tmp = 0x00;
size_t result_length = 0x00,result_start_length = 0x00,result_sign_length = 0x00;
bool result_zero = false;
int __A_B_CMP__ = -2;
if(!a_negative && b_negative) goto __A_POSITIVE_B_NEGATIVE_START__;
if(a_negative && !b_negative) goto __A_NEGATIVE_B_POSITIVE_START__;
if(a_negative && b_negative)  goto __A_NEGATIVE_B_NEGATIVE_START__;

__A_POSITIVE_B_NEGATIVE_START__:
result = __ADD_INTEGER_AND_POSITIVE__(a_start,b_start);
result_sign = __GET_SIGN_POSITIVE__();
goto __VALCPY__;

__A_NEGATIVE_B_POSITIVE_START__:
result = __ADD_INTEGER_AND_POSITIVE__(a_start,b_start);
result_sign = __GET_SIGN_NEGATIVE__();
goto __VALCPY__;

__A_NEGATIVE_B_NEGATIVE_START__:
__A_B_CMP__ = __CMP_CHARSET__(a_start,b_start);
if(__A_B_CMP__ > 0){ /* (|a| > |b|) */
 result = __SUB_INTEGER_AND_POSITIVE__(a_start,b_start);
 result_sign = __GET_SIGN_NEGATIVE__();
} else if (__A_B_CMP__ < 0){ /* (|a| < |b|) */
 result = __SUB_INTEGER_AND_POSITIVE__(b_start,a_start);
 result_sign = __GET_SIGN_POSITIVE__();
} else if (!__A_B_CMP__) { /* (|a| == |b|) */
 result = __SUB_INTEGER_AND_POSITIVE__(a_start,b_start);
 result_sign = __GET_SIGN_POSITIVE__();
}
goto __VALCPY__;

__VALCPY__:
if(!result) abort();
result_length = strlen_runtime(result);
result_start = __START_NUMBER__(0,result_length,result);
if(!result_start) abort();
result_end = __END_NUMBER__((size_t)(result_start - result),result_length,result);
if(!result_end) abort();
result_start_length = result_end + 1 - result_start;
result_zero = __IS_CURRENT_CHARSET_ZERO__(result_start[0]);
if(!result_zero) result_sign_length = strlen_runtime(result_sign);
else result_sign_length = 0x00;

result_tmp = calloc(result_sign_length + result_start_length + __STRING_END_NULL_BYTE_SIZE__,sizeof(char));
if(result_sign_length) memcpy(result_tmp,result_sign,result_sign_length);
memcpy(result_tmp + result_sign_length,result_start,result_start_length);
result_tmp[result_sign_length + result_start_length] = 0x00;

(free(result),result = NULL);
result = result_tmp;

return result;
}

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
char *__SUB_INTEGER_AND_POSITIVE__(char *a_positive,char *b_positive){
char *charset = __GET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__();
size_t charset_length = strlen_runtime(charset);
char *a_start = 0x00,*b_start = 0x00,*a_end = 0x00,*b_end = 0x00,*a_current = 0x00,*b_current = 0x00;
size_t a_length = 0x00,b_length = 0x00,a_start_length = 0x00,b_start_length = 0x00;

if(!a_positive || !b_positive) abort();

a_length = strlen_runtime(a_positive);
b_length = strlen_runtime(b_positive);
if(!a_length || !b_length) abort();

a_start = __START_NUMBER__(0,a_length,a_positive);
b_start = __START_NUMBER__(0,b_length,b_positive);
if(!a_start || !b_start) abort();

a_end = __END_NUMBER__((size_t)(a_start - a_positive),a_length,a_positive);
b_end = __END_NUMBER__((size_t)(b_start - b_positive),b_length,b_positive);
if(!a_end || !b_end) abort();

a_start_length = a_end + 1 - a_start;
b_start_length = b_end + 1 - b_start;
if(!a_start_length || !b_start_length) abort();

size_t result_length = 0x00,result_sign_length = 0x00;
char *result = 0x00, *result_start = 0x00, *result_end = 0x00,*result_current = 0x00,*result_sign = 0x00,*result_tmp = 0x00;
result_length = a_start_length > b_start_length ? a_start_length : b_start_length;
result = calloc(result_length + __STRING_END_NULL_BYTE_SIZE__,sizeof(char));
char a_current_index = 0x00, b_current_index = 0x00;

SUB_CALC_LOOP_START:
result_start = result;
result_end = result + result_length;
result_current = result_end;
a_current = a_end;
b_current = b_end;
SUB_CALC_LOOP_INDEX:
a_current_index = a_current >= a_start ? __INDEX_OF_CURRENT_CHARSET__(0,*a_current) : 0x00;
b_current_index = b_current >= b_start ? __INDEX_OF_CURRENT_CHARSET__(0,*b_current) : 0x00;
SUB_CALC_LOOP_CALC:
(*result_current) = (a_current_index - b_current_index);
SUB_CALC_LOOP_NEXT:
if(result_start < result_current){
 result_current--;
 a_current--;
 b_current--;
 goto SUB_CALC_LOOP_INDEX;
}
goto SUB_CALC_LOOP_END;
SUB_CALC_LOOP_END:

SUB_TRIM_LOOP_START:
result_end = result + result_length;
result_current = result;
SUB_TRIM_LOOP_TRIM:
if((*result_current) == 0x00) goto SUB_TRIM_LOOP_NEXT;
else   goto SUB_TRIM_LOOP_BREAK;
SUB_TRIM_LOOP_NEXT:
if(result_current < result_end){
 result_current++;
 goto SUB_TRIM_LOOP_TRIM;
}
goto SUB_TRIM_LOOP_BREAK;
SUB_TRIM_LOOP_BREAK:
result_start = result_current;
goto SUB_TRIM_LOOP_END;
SUB_TRIM_LOOP_END:

if((*result_start) < 0x00) goto SUB_RESOLVE_NEGATIVE_LOOP_START;
if((*result_start) > 0x00) goto SUB_RESOLVE_POSITIVE_LOOP_START;
if((*result_start) == 0x00) goto SUB_RESOLVE_END;

SUB_RESOLVE_NEGATIVE_LOOP_START:
result_sign = __GET_SIGN_NEGATIVE__();
result_sign_length = strlen_runtime(result_sign);
result_end = result + result_length;
result_current = result_end;
SUB_RESOLVE_NEGATIVE_LOOP_RESOLVE:
if(result_current > result_start){
 if((*result_current) > 0x00){
  *result_current = charset_length - (*result_current);
  *(result_current - 1) = ((*(result_current - 1)) + 0x01);
  goto SUB_RESOLVE_NEGATIVE_LOOP_NEXT;
 }
 if((*result_current) < 0x00){
  *result_current = ((*result_current) * 0xFF);
  goto SUB_RESOLVE_NEGATIVE_LOOP_NEXT;
 }
}
if(result_current == result_start){
 *result_current = (*result_current) * 0xFF;
 goto SUB_RESOLVE_NEGATIVE_LOOP_END;
}
SUB_RESOLVE_NEGATIVE_LOOP_NEXT:
if(result_current > result_start){
 result_current--;
 goto SUB_RESOLVE_NEGATIVE_LOOP_RESOLVE;
}
goto SUB_RESOLVE_NEGATIVE_LOOP_END;
SUB_RESOLVE_NEGATIVE_LOOP_END:
goto SUB_RESOLVE_END;

SUB_RESOLVE_POSITIVE_LOOP_START:
result_sign = __GET_SIGN_POSITIVE__();
result_sign_length = strlen_runtime(result_sign);
result_end = result + result_length;
result_current = result_end;
SUB_RESOLVE_POSITIVE_LOOP_RESOLVE:
if(result_current > result_start){
 if((*result_current) < 0x00){
  *result_current = (*result_current) + charset_length;
  *(result_current - 1) = (*(result_current - 1)) - 0x01;
 }
 goto SUB_RESOLVE_POSITIVE_LOOP_NEXT;
}
goto SUB_RESOLVE_POSITIVE_LOOP_END;
SUB_RESOLVE_POSITIVE_LOOP_NEXT:
if(result_current > result_start){
 result_current--;
 goto SUB_RESOLVE_POSITIVE_LOOP_RESOLVE;
}
goto SUB_RESOLVE_POSITIVE_LOOP_END;
SUB_RESOLVE_POSITIVE_LOOP_END:
goto SUB_RESOLVE_END;

SUB_RESOLVE_END:
if(!result_sign) result_sign_length = 0x00;
if(result_sign) result_sign_length = strlen_runtime(result_sign);

SUB_TRIM_LOOP_START_:
result_end = result + result_length;
result_current = result;
SUB_TRIM_LOOP_TRIM_:
if((*result_current) == 0x00) goto SUB_TRIM_LOOP_NEXT_;
else   goto SUB_TRIM_LOOP_BREAK_;
SUB_TRIM_LOOP_NEXT_:
if(result_current < result_end){
 result_current++;
 goto SUB_TRIM_LOOP_TRIM_;
}
goto SUB_TRIM_LOOP_BREAK_;
SUB_TRIM_LOOP_BREAK_:
result_start = result_current;
goto SUB_TRIM_LOOP_END_;
SUB_TRIM_LOOP_END_:

/** SUB_TRIM here **/

SUB_TO_STRING_LOOP_START:
result_current = result_start;
result_end = result + result_length;
SUB_TO_STRING_LOOP_TO_STRING:
if(result_current <= result_end){
 *result_current = __CHARSET_AT__((size_t)(*(char*)result_current));
 goto SUB_TO_STRING_LOOP_NEXT;
}
goto SUB_TO_STRING_LOOP_END;
SUB_TO_STRING_LOOP_NEXT:
if(result_current < result_end){
 result_current++;
 goto SUB_TO_STRING_LOOP_TO_STRING;
}
goto SUB_TO_STRING_LOOP_END;
SUB_TO_STRING_LOOP_END:

SUB_CONCAT_SIGN:
result_tmp = calloc(result_sign_length + (result_end + 1 - result_start) + __STRING_END_NULL_BYTE_SIZE__,sizeof(char));
if(result_sign_length) memcpy(result_tmp,result_sign,result_sign_length);
memcpy(result_tmp + result_sign_length,result_start,(result_end + 1 - result_start));
result_tmp[result_sign_length + (result_end + 1 - result_start)] = 0x00;
result_length = result_sign_length + result_end + 1 - result_start;

(free(result),result = NULL);

result = result_tmp;

return result;
}

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
char *__ADD_INTEGER_OR_NEGATIVE__(char *a_negativable,char *b_negativable){
char *a_start = 0x00,*a_end = 0x00,*b_start = 0x00,*b_end = 0x00,*a_sign_start = 0x00,*a_sign_end = 0x00,*b_sign_start = 0x00,*b_sign_end = 0x00;
size_t a_length = 0x00,b_length = 0x00,a_start_length = 0x00,b_start_length = 0x00,a_sign_length = 0x00,b_sign_length = 0x00;

if(!a_negativable || !b_negativable) abort();

a_length = strlen_runtime(a_negativable);
b_length = strlen_runtime(b_negativable);
if(!a_length || !b_length) abort();

a_start = __START_NUMBER__(0,a_length,a_negativable);
b_start = __START_NUMBER__(0,b_length,b_negativable);
if(!a_start || !b_start) abort();

a_end = __END_NUMBER__((size_t)(a_start - a_negativable),a_length,a_negativable);
b_end = __END_NUMBER__((size_t)(b_start - b_negativable),b_length,b_negativable);
if(!a_end || !b_end) abort();

a_start_length = a_end + 1 - a_start;
b_start_length = b_end + 1 - b_start;
if(!a_start_length || !b_start_length) abort();

a_sign_start = a_negativable;
b_sign_start = b_negativable;

a_sign_end = a_start - 1;
b_sign_end = b_start - 1;

a_sign_length = a_sign_end + 1 - a_sign_start;
b_sign_length = b_sign_end + 1 - b_sign_start;

bool a_negative = false,b_negative = false,a_zero = false,b_zero = false;

a_zero = __IS_CURRENT_CHARSET_ZERO__(a_start[0]);
b_zero = __IS_CURRENT_CHARSET_ZERO__(b_start[0]);

a_negative = !a_zero && __IS_SIGN_NEGATIVE__(0,a_sign_length,a_sign_start);
b_negative = !b_zero && __IS_SIGN_NEGATIVE__(0,b_sign_length,b_sign_start);
if(!a_negative && !b_negative) abort();

char *result = 0x00,*result_start = 0x00,*result_end = 0x00,*result_sign = 0x00,*result_tmp = 0x00;
size_t result_length = 0x00,result_start_length = 0x00,result_sign_length = 0x00;
bool result_zero = false;
int __A_B_CMP__ = -2;
if(!a_negative && b_negative) goto __A_POSITIVE_B_NEGATIVE_START__;
if(a_negative && !b_negative) goto __A_NEGATIVE_B_POSITIVE_START__;
if(a_negative && b_negative)  goto __A_NEGATIVE_B_NEGATIVE_START__;

__A_POSITIVE_B_NEGATIVE_START__:
__A_B_CMP__ = __CMP_CHARSET__(a_start,b_start);
if(__A_B_CMP__ > 0){ /* |a| > |b| */
 result = __SUB_INTEGER_AND_POSITIVE__(a_start,b_start);
 result_sign = __GET_SIGN_POSITIVE__();
} else if(__A_B_CMP__ < 0){
 result = __SUB_INTEGER_AND_POSITIVE__(b_start,a_start);
 result_sign = __GET_SIGN_NEGATIVE__();
} else if(__A_B_CMP__ == 0){
 result = __SUB_INTEGER_AND_POSITIVE__(a_start,b_start);
 result_sign = __GET_SIGN_POSITIVE__();
}
goto __VALCPY__;

__A_NEGATIVE_B_POSITIVE_START__:
__A_B_CMP__ = __CMP_CHARSET__(a_start,b_start);
if(__A_B_CMP__ > 0){
 result = __SUB_INTEGER_AND_POSITIVE__(a_start,b_start);
 result_sign = __GET_SIGN_NEGATIVE__();
} else if(__A_B_CMP__ < 0){
 result = __SUB_INTEGER_AND_POSITIVE__(b_start,a_start);
 result_sign = __GET_SIGN_POSITIVE__();
} else if(__A_B_CMP__ == 0){
 result = __SUB_INTEGER_AND_POSITIVE__(b_start,a_start);
 result_sign = __GET_SIGN_POSITIVE__();
}
goto __VALCPY__;

__A_NEGATIVE_B_NEGATIVE_START__:
__A_B_CMP__ = __CMP_CHARSET__(a_start,b_start);
result = __ADD_INTEGER_AND_POSITIVE__(a_start,b_start);
result_sign = __GET_SIGN_NEGATIVE__();
goto __VALCPY__;

__VALCPY__:
if(!result) abort();
result_length = strlen_runtime(result);
result_start = __START_NUMBER__(0,result_length,result);
if(!result_start) abort();
result_end = __END_NUMBER__((size_t)(result_start - result),result_length,result);
if(!result_end) abort();
result_start_length = result_end + 1 - result_start;
result_zero = __IS_CURRENT_CHARSET_ZERO__(result_start[0]);
if(!result_zero) result_sign_length = strlen_runtime(result_sign);
else result_sign_length = 0x00;

result_tmp = calloc(result_sign_length + result_start_length + __STRING_END_NULL_BYTE_SIZE__,sizeof(char));
if(result_sign_length) memcpy(result_tmp,result_sign,result_sign_length);
memcpy(result_tmp + result_sign_length,result_start,result_start_length);
result_tmp[result_sign_length + result_start_length] = 0x00;

(free(result),result = NULL);
result = result_tmp;

return result;
}

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
char *__ADD_INTEGER_AND_POSITIVE__(char *a_positive,char *b_positive){
// .__ADD_INTEGER_AND_POSITIVE__ __CHAR_PTR__
// char *a = "1234567890",*b = "0987654321";

char *charset = 0x00;
size_t charset_length = 0x00;

char *a_start = 0x00,*b_start = 0x00,*a_end = 0x00,*b_end = 0x00,*a_current = 0x00,*b_current = 0x00;
size_t a_length = 0x00,b_length = 0x00,a_start_length = 0x00,b_start_length = 0x00;

if(!a_positive || !b_positive) abort();

a_length = strlen_runtime(a_positive);
b_length = strlen_runtime(b_positive);
if(!a_length || !b_length) abort();

a_start = __START_NUMBER__(0,a_length,a_positive);
b_start = __START_NUMBER__(0,b_length,b_positive);
if(!a_start || !b_start) abort();

a_end = __END_NUMBER__((size_t)(a_start - a_positive),a_length,a_positive);
b_end = __END_NUMBER__((size_t)(b_start - b_positive),b_length,b_positive);
if(!a_end || !b_end) abort();

a_start_length = a_end + 1 - a_start;
b_start_length = b_end + 1 - b_start;
if(!a_start_length || !b_start_length) abort();

char *result = 0x00,*result_start = 0x00,*result_end = 0x00,*result_current = 0x00,*result_sign = 0x00,*result_tmp = 0x00;
size_t result_length = 0x00,result_sign_length = 0x00;


result_length = (a_start_length > b_start_length ? a_start_length : b_start_length) + __SAFE_OVER_SIZE__;
result = calloc(result_length + __STRING_END_NULL_BYTE_SIZE__,sizeof(char));

char a_current_index = 0x00,b_current_index = 0x00;

charset = __GET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__();
charset_length = strlen_runtime(charset);

__ADD_INTEGER_AND_POSITIVE_CALC_LOOP_START__:
result_start = result;
result_end = result + result_length - 1;
result_current = result_end;
a_current = a_end;
b_current = b_end;
__ADD_INTEGER_AND_POSITIVE_CALC_LOOP_INDEX__:
a_current_index = a_current >= a_start ? __INDEX_OF_CURRENT_CHARSET__(0,*a_current) : 0x00;
b_current_index = b_current >= b_start ? __INDEX_OF_CURRENT_CHARSET__(0,*b_current) : 0x00;
__ADD_INTEGER_AND_POSITIVE_CALC_LOOP_CALC__:
(*result_current) = (a_current_index + b_current_index);
__ADD_INTEGER_AND_POSITIVE_CALC_LOOP_NEXT__:
if(result_current > result_start){
 a_current--;
 b_current--;
 result_current--;
 goto __ADD_INTEGER_AND_POSITIVE_CALC_LOOP_INDEX__;
}
goto __ADD_INTEGER_AND_POSITIVE_CALC_LOOP_END__;
__ADD_INTEGER_AND_POSITIVE_CALC_LOOP_END__:


__ADD_INTEGER_AND_POSITIVE_RESOLVE_LOOP_START__:
result_sign = __GET_SIGN_POSITIVE__();
result_current = result_end;
__ADD_INTEGER_AND_POSITIVE_RESOLVE_LOOP_RESOLVE__:
(*(result_current - 1)) += ((*result_current) / charset_length);
(*result_current) = ((*result_current) % charset_length);
__ADD_INTEGER_AND_POSITIVE_RESOLVE_LOOP_NEXT__:
if(result_current > (result_start + 1)){
 result_current--;
 goto __ADD_INTEGER_AND_POSITIVE_RESOLVE_LOOP_RESOLVE__;
}
goto __ADD_INTEGER_AND_POSITIVE_RESOLVE_LOOP_END__;
__ADD_INTEGER_AND_POSITIVE_RESOLVE_LOOP_END__:


__ADD_INTEGER_AND_POSITIVE_TRIM_LOOP_START__:
result_current = result_start;
__ADD_INTEGER_AND_POSITIVE_TRIM_LOOP_TRIM__:
if(result_current != result_end && (*result_current) == 0x00) goto __ADD_INTEGER_AND_POSITIVE_TRIM_LOOP_NEXT__;
goto __ADD_INTEGER_AND_POSITIVE_TRIM_LOOP_BREAK__;
__ADD_INTEGER_AND_POSITIVE_TRIM_LOOP_NEXT__:
if(result_current < result_end){
 result_current++;
 goto __ADD_INTEGER_AND_POSITIVE_TRIM_LOOP_TRIM__;/** continue; **/
}
goto __ADD_INTEGER_AND_POSITIVE_TRIM_LOOP_BREAK__;
__ADD_INTEGER_AND_POSITIVE_TRIM_LOOP_BREAK__:
result_start = result_current;
goto __ADD_INTEGER_AND_POSITIVE_TRIM_LOOP_END__;
__ADD_INTEGER_AND_POSITIVE_TRIM_LOOP_END__:

__ADD_INTEGER_AND_POSITIVE_TO_STRING_LOOP_START__:
result_current = result_end;
__ADD_INTEGER_AND_POSITIVE_TO_STRING_LOOP_TO_STRING__:
(*result_current) = __CHARSET_AT__((size_t)(*(char*)result_current));
__ADD_INTEGER_AND_POSITIVE_TO_STRING_LOOP_NEXT__:
if(result_current > result_start){
 result_current--;
 goto __ADD_INTEGER_AND_POSITIVE_TO_STRING_LOOP_TO_STRING__;
}
goto __ADD_INTEGER_AND_POSITIVE_TO_STRING_LOOP_END__;
__ADD_INTEGER_AND_POSITIVE_TO_STRING_LOOP_END__:

if(result_sign) result_sign_length = strlen_runtime(result_sign);
else result_sign_length = 0x00;


__ADD_INTEGER_AND_POSITIVE_STRCAT_START__:
result_length = result_sign_length + (result_end + 1 - result_start) + __STRING_END_NULL_BYTE_SIZE__;
result_tmp = calloc(result_length,sizeof(char));
if(result_length) memcpy(result_tmp,result_sign,result_sign_length);
memcpy(result_tmp + result_sign_length,result_start,(result_end + 1 - result_start));
result_tmp[result_sign_length + (result_end + 1 - result_start)] = 0x00;

(free(result),result = NULL);
result = result_tmp;
__ADD_INTEGER_AND_POSITIVE_STRCAT_END:


return result;
}

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
char *__SUB_INTEGER__(char *a,char *b){
char *a_start = 0x00,*b_start = 0x00,*a_end = 0x00,*b_end = 0x00,*a_sign_start = 0x00,*b_sign_start = 0x00,*a_sign_end = 0x00,*b_sign_end = 0x00;
size_t a_length = 0x00,b_length = 0x00,a_start_length = 0x00,b_start_length = 0x00,a_sign_length = 0x00,b_sign_length = 0x00;
bool a_negative = false,b_negative = false,a_zero = false,b_zero = false;

if(!a || !b) abort();

a_length = strlen_runtime(a);
b_length = strlen_runtime(b);
if(!a_length || !b_length) abort();

a_start = __START_NUMBER__(0,a_length,a);
b_start = __START_NUMBER__(0,b_length,b);
if(!a_start || !b_start) abort();

a_end = __END_NUMBER__((size_t)(a_start - a),a_length,a);
b_end = __END_NUMBER__((size_t)(b_start - b),b_length,b);
if(!a_end || !b_end) abort();

a_start_length = a_end + 1 - a_start;
b_start_length = b_end + 1 - b_start;

a_sign_start = a;
b_sign_start = b;

a_sign_end = a_start - 1;
b_sign_end = b_start - 1;

a_sign_length = a_sign_end + 1 - a_sign_start;
b_sign_length = b_sign_end + 1 - b_sign_start;

a_zero = __IS_CURRENT_CHARSET_ZERO__(a_start[0]);
b_zero = __IS_CURRENT_CHARSET_ZERO__(b_start[0]);

a_negative = !a_zero && __IS_SIGN_NEGATIVE__(0,a_sign_length,a_sign_start);
b_negative = !b_zero && __IS_SIGN_NEGATIVE__(0,b_sign_length,b_sign_start);

if(a_negative || b_negative) return __SUB_INTEGER_OR_NEGATIVE__(a,b);
else if((a_zero || !a_negative) && (b_zero || !b_negative)) return __SUB_INTEGER_AND_POSITIVE__(a,b);

abort();
}

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
char *__ADD_INTEGER__(char *a,char *b){
char *a_start = 0x00,*b_start = 0x00,*a_end = 0x00,*b_end = 0x00,*a_sign_start = 0x00,*b_sign_start = 0x00,*a_sign_end = 0x00,*b_sign_end = 0x00;
size_t a_length = 0x00,b_length = 0x00,a_start_length = 0x00,b_start_length = 0x00,a_sign_length = 0x00,b_sign_length = 0x00;
bool a_negative = false,b_negative = false,a_zero = false,b_zero = false;

if(!a || !b) abort();

a_length = strlen_runtime(a);
b_length = strlen_runtime(b);
if(!a_length || !b_length) abort();

a_start = __START_NUMBER__(0,a_length,a);
b_start = __START_NUMBER__(0,b_length,b);
if(!a_start || !b_start) abort();

a_end = __END_NUMBER__((size_t)(a_start - a),a_length,a);
b_end = __END_NUMBER__((size_t)(b_start - b),b_length,b);
if(!a_end || !b_end) abort();

a_start_length = a_end + 1 - a_start;
b_start_length = b_end + 1 - b_start;

a_sign_start = a;
b_sign_start = b;

a_sign_end = a_start - 1;
b_sign_end = b_start - 1;

a_sign_length = a_sign_end + 1 - a_sign_start;
b_sign_length = b_sign_end + 1 - b_sign_start;

a_zero = __IS_CURRENT_CHARSET_ZERO__(a_start[0]);
b_zero = __IS_CURRENT_CHARSET_ZERO__(b_start[0]);

a_negative = !a_zero && __IS_SIGN_NEGATIVE__(0,a_sign_length,a_sign_start);
b_negative = !b_zero && __IS_SIGN_NEGATIVE__(0,b_sign_length,b_sign_start);

if(a_negative || b_negative) return __ADD_INTEGER_OR_NEGATIVE__(a,b);
else if((a_zero || !a_negative) && (b_zero || !b_negative)) return __ADD_INTEGER_AND_POSITIVE__(a,b);

abort();
}


#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
char *__ADD_REP_INTEGER__(char *a, size_t rep){
char *_z = "0\0",*_t=0x00,*_r=calloc(2,sizeof(char));
memcpy(_r,_z,1);
for(size_t i = 0;i < rep;i++){
_t=__ADD_INTEGER__(_r,a);
free(_r);
_r=0x00;
_r=_t;
}
return _r;
}


#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
#endif
char *__MUL_INTEGER__(char *a, char *b){
size_t \
al=strlen_runtime(a),\
bl=strlen_runtime(b),\
anl=0x00,\
bnl=0x00;
char \
*a_start=0x00,\
*a_end=0x00,\
*b_start=0x00,\
*b_end=0x00;

size_t a_sign_negative_index = __INDEX_OF_SIGN_NEGATIVE__(0,al,a);
size_t a_sign_positive_index = __INDEX_OF_SIGN_POSITIVE__(0,al,a);
size_t b_sign_negative_index = __INDEX_OF_SIGN_NEGATIVE__(0,bl,b);
size_t b_sign_positive_index = __INDEX_OF_SIGN_POSITIVE__(0,bl,b);
char *a_sign = 0x00,*b_sign = 0x00;
char *result_sign = 0x00;

if(a_sign_negative_index!= (size_t)-1 && a_sign_positive_index!= (size_t)-1) a_sign = __GET_SIGN_POSITIVE__();
else if(a_sign_negative_index!= (size_t)-1) a_sign = __GET_SIGN_POSITIVE__();
else if(a_sign_positive_index!= (size_t)-1) a_sign = __GET_SIGN_POSITIVE__();
else if(a_sign_negative_index < a_sign_positive_index) a_sign = __GET_SIGN_NEGATIVE__();
else if(a_sign_positive_index < a_sign_negative_index) a_sign = __GET_SIGN_POSITIVE__();
else a_sign = __GET_SIGN_POSITIVE__();

if(b_sign_negative_index!= (size_t)-1 && b_sign_positive_index!= (size_t)-1) b_sign = __GET_SIGN_POSITIVE__();
else if(b_sign_negative_index!= (size_t)-1) b_sign = __GET_SIGN_POSITIVE__();
else if(b_sign_positive_index!= (size_t)-1) b_sign = __GET_SIGN_POSITIVE__();
else if(b_sign_negative_index < b_sign_positive_index) b_sign = __GET_SIGN_NEGATIVE__();
else if(b_sign_positive_index < b_sign_negative_index) b_sign = __GET_SIGN_POSITIVE__();
else b_sign = __GET_SIGN_POSITIVE__();

if(a_sign == 0x00 || b_sign == 0x00) abort();
if(a_sign == b_sign) result_sign = __GET_SIGN_POSITIVE__();
if(a_sign != b_sign) result_sign = __GET_SIGN_NEGATIVE__();


a_start=__START_NUMBER__(0,al,a);
a_end=__END_NUMBER__(a_start - a,al,a);
anl=((size_t)a_end - (size_t)a_start) + 1;

b_start=__START_NUMBER__(0,bl,b);
b_end=__END_NUMBER__(b_start - b,bl,b);
bnl=((size_t)b_end - (size_t)b_start) + 1;
	
char *_z="0\0",\
*_r=calloc(2,sizeof(char)),\
*_t=0x00,\
*_tt=0x00;
memcpy(_r,_z,1);
for(size_t i=bnl;i>0;i--){
size_t _ZC=bnl-i,_C=__INDEX_OF_CURRENT_CHARSET__(0,b_start[i - 1]),_tl=0x00;
_t=__ADD_REP_INTEGER__(a_start,_C);
_tl=strlen_runtime(_t);
_tt=calloc(_tl+_ZC+1,sizeof(char));
memcpy(_tt,_t,_tl);
free(_t);
for(size_t j=0;j<_ZC;j++){memcpy(_tt+_tl+j,_z,1);}
char *_rt=__ADD_INTEGER__(_r,_tt);
free(_tt);
free(_r);
_r=_rt;
}
if(result_sign == __GET_SIGN_NEGATIVE__()){
	size_t rl = strlen_runtime(_r);
	char *tmp = calloc(strlen_runtime(__GET_SIGN_NEGATIVE__()) + rl + 1, sizeof(char));
	memcpy(tmp, __GET_SIGN_NEGATIVE__(),strlen_runtime(__GET_SIGN_NEGATIVE__()));
	memcpy(tmp + strlen_runtime(__GET_SIGN_NEGATIVE__()), _r, strlen_runtime(_r));
	free(_r);
	_r = tmp;
}
return _r;
}
