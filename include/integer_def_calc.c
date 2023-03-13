#include "./integer_def_calc.h"

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
result_sign = __SIGN_POSITIVE__();
goto __VALCPY__;

__A_NEGATIVE_B_POSITIVE_START__:
result = __ADD_INTEGER_AND_POSITIVE__(a_start,b_start);
result_sign = __SIGN_NEGATIVE__();
goto __VALCPY__;

__A_NEGATIVE_B_NEGATIVE_START__:
__A_B_CMP__ = __CMP_CHARSET__(a_start,b_start);
if(__A_B_CMP__ > 0){ /* (|a| > |b|) */
 result = __SUB_INTEGER_AND_POSITIVE__(a_start,b_start);
 result_sign = __SIGN_NEGATIVE__();
} else if (__A_B_CMP__ < 0){ /* (|a| < |b|) */
 result = __SUB_INTEGER_AND_POSITIVE__(b_start,a_start);
 result_sign = __SIGN_POSITIVE__();
} else if (!__A_B_CMP__) { /* (|a| == |b|) */
 result = __SUB_INTEGER_AND_POSITIVE__(a_start,b_start);
 result_sign = __SIGN_POSITIVE__();
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

char *__SUB_INTEGER_AND_POSITIVE__(char *a_positive,char *b_positive){
char *charset = __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__();
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
result_sign = __SIGN_NEGATIVE__();
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
result_sign = __SIGN_POSITIVE__();
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
 result_sign = __SIGN_POSITIVE__();
} else if(__A_B_CMP__ < 0){
 result = __SUB_INTEGER_AND_POSITIVE__(b_start,a_start);
 result_sign = __SIGN_NEGATIVE__();
} else if(__A_B_CMP__ == 0){
 result = __SUB_INTEGER_AND_POSITIVE__(a_start,b_start);
 result_sign = __SIGN_POSITIVE__();
}
goto __VALCPY__;

__A_NEGATIVE_B_POSITIVE_START__:
__A_B_CMP__ = __CMP_CHARSET__(a_start,b_start);
if(__A_B_CMP__ > 0){
 result = __SUB_INTEGER_AND_POSITIVE__(a_start,b_start);
 result_sign = __SIGN_NEGATIVE__();
} else if(__A_B_CMP__ < 0){
 result = __SUB_INTEGER_AND_POSITIVE__(b_start,a_start);
 result_sign = __SIGN_POSITIVE__();
} else if(__A_B_CMP__ == 0){
 result = __SUB_INTEGER_AND_POSITIVE__(b_start,a_start);
 result_sign = __SIGN_POSITIVE__();
}
goto __VALCPY__;

__A_NEGATIVE_B_NEGATIVE_START__:
__A_B_CMP__ = __CMP_CHARSET__(a_start,b_start);
result = __ADD_INTEGER_AND_POSITIVE__(a_start,b_start);
result_sign = __SIGN_NEGATIVE__();
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

charset = __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__();
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
result_sign = __SIGN_POSITIVE__();
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

char *__MUL_INTEGER__(char *a,char *b){
char *charset = __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__();
size_t charset_length = strlen_runtime(charset);
char *a_start = 0x00,*b_start = 0x00,*a_end = 0x00,*b_end = 0x00,*a_current = 0x00,*b_current = 0x00;
size_t a_length = 0x00,b_length = 0x00,a_start_length = 0x00,b_start_length = 0x00;

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
if(!a_start_length || !b_start_length) abort();

char \
 *mul_buf_a = 0x00,\
 *mul_buf_b = 0x00,\
 *mul_buf_c = 0x00;
char \
 *mul_buf_a_current = 0x00,\
 *mul_buf_b_current = 0x00,\
 *mul_buf_c_current = 0x00;
char \
 *mul_buf_a_start = 0x00,\
 *mul_buf_b_start = 0x00,\
 *mul_buf_c_start = 0x00;
char \
 *mul_buf_a_end = 0x00,\
 *mul_buf_b_end = 0x00,\
 *mul_buf_c_end = 0x00;
size_t \
 mul_buf_a_length = 0x00,\
 mul_buf_b_length = 0x00,\
 mul_buf_c_length = 0x00;

char \
 a_current_index = 0x00,\
 b_current_index = 0x00;

char \
 *result_start = 0x00,\
 *result_end = 0x00,\
 *result_current= 0x00,\
 *result = 0x00;

MUL_BUF_LOOP_START:
a_current = a_end;
b_current = b_end;
MUL_BUF_LOOP_ADD:
mul_buf_a_length = 1 + (b_end - b_current) + a_start_length;
mul_buf_a = calloc(mul_buf_a_length + __STRING_END_NULL_BYTE_SIZE__,sizeof(char));
mul_buf_a_current = mul_buf_a + mul_buf_a_length - (b_end - b_current);
// MUL_BUF_LOOP_ADD:
a_current_index = a_current >= a_start ? __INDEX_OF_CURRENT_CHARSET__(0,*a_current) : 0x00;
b_current_index = b_current >= b_start ? __INDEX_OF_CURRENT_CHARSET__(0,*b_current) : 0x00;
(*((char*)mul_buf_a_current)) = (
  ((char)a_current_index) *
  ((char)b_current_index)
);
MUL_BUF_LOOP_JMP:
if(a_start < a_current){
 a_current--;
 mul_buf_a_current--;
 goto MUL_BUF_LOOP_ADD;
} else if(a_start == a_current && b_start <= b_current){
 if(mul_buf_a && !mul_buf_b){
  mul_buf_b = mul_buf_a;
  mul_buf_b_length = mul_buf_a_length;
  mul_buf_a_length = 1 + (b_end - b_current + 1) + a_start_length;
  mul_buf_a = calloc(mul_buf_a_length + __STRING_END_NULL_BYTE_SIZE__,sizeof(char));
 } 
 if(!mul_buf_c && mul_buf_a && mul_buf_b){
  result_start = mul_buf_a;
  result_end = mul_buf_a + mul_buf_a_length;
  result_current = result_end;
__MUL_INTEGER_AND_POSITIVE_RESOLVE_LOOP_RESOLVE__A:
(*(result_current - 1)) += ((*result_current) / charset_length);
(*result_current) = ((*result_current) % charset_length);
__MUL_INTEGER_AND_POSITIVE_RESOLVE_LOOP_NEXT__A:
if(result_current >= (result_start + 1)){
 result_current--;
 goto __MUL_INTEGER_AND_POSITIVE_RESOLVE_LOOP_RESOLVE__A;
}
goto __MUL_INTEGER_AND_POSITIVE_RESOLVE_LOOP_END__A;
__MUL_INTEGER_AND_POSITIVE_RESOLVE_LOOP_END__A:
result_start = result_current;



__MUL_INTEGER_AND_POSITIVE_TO_STRING_LOOP_START__A:
result_current = result_end;
__MUL_INTEGER_AND_POSITIVE_TO_STRING_LOOP_TO_STRING__A:
(*result_current) = __CHARSET_AT__((size_t)(*(char*)result_current));
__MUL_INTEGER_AND_POSITIVE_TO_STRING_LOOP_NEXT__A:
if(result_current >= result_start){
 result_current--;
 goto __MUL_INTEGER_AND_POSITIVE_TO_STRING_LOOP_TO_STRING__A;
}
goto __MUL_INTEGER_AND_POSITIVE_TO_STRING_LOOP_END__A;
__MUL_INTEGER_AND_POSITIVE_TO_STRING_LOOP_END__A:

mul_buf_a_current = result_current;

  result_start = mul_buf_b;
  result_end = mul_buf_b + mul_buf_b_length;
  result_current = result_end;
__MUL_INTEGER_AND_POSITIVE_RESOLVE_LOOP_RESOLVE__B:
(*(result_current - 1)) += ((*result_current) / charset_length);
(*result_current) = ((*result_current) % charset_length);
__ADD_INTEGER_AND_POSITIVE_RESOLVE_LOOP_NEXT__B:
if(result_current > (result_start - 1)){
 result_current--;
 goto __MUL_INTEGER_AND_POSITIVE_RESOLVE_LOOP_RESOLVE__B;
}
goto __MUL_INTEGER_AND_POSITIVE_RESOLVE_LOOP_END__B;
__MUL_INTEGER_AND_POSITIVE_RESOLVE_LOOP_END__B:

__MUL_INTEGER_AND_POSITIVE_TO_STRING_LOOP_START__B:
result_current = result_end;
__MUL_INTEGER_AND_POSITIVE_TO_STRING_LOOP_TO_STRING__B:
(*result_current) = __CHARSET_AT__((size_t)(*(char*)result_current));
__MUL_INTEGER_AND_POSITIVE_TO_STRING_LOOP_NEXT__B:
if(result_current > result_start){
 result_current--;
 goto __MUL_INTEGER_AND_POSITIVE_TO_STRING_LOOP_TO_STRING__B;
}
goto __MUL_INTEGER_AND_POSITIVE_TO_STRING_LOOP_END__B;
__MUL_INTEGER_AND_POSITIVE_TO_STRING_LOOP_END__B:
mul_buf_b_current = result_current;

  mul_buf_c = __ADD_INTEGER__(mul_buf_a_current,mul_buf_b_current);
  // free(mul_buf_b);
  mul_buf_b = 0x00;
  mul_buf_b_current = 0x00;
  mul_buf_b_length = 0x00;

  // free(mul_buf_a);
  mul_buf_a = 0x00;
  mul_buf_a_current = 0x00;
  mul_buf_a_length = 0x00;

  mul_buf_b = mul_buf_c;
  mul_buf_b_length = strlen_runtime(mul_buf_b);
  mul_buf_c = 0x00;
 }
 if(b_start > b_current){
  result = mul_buf_b;
  goto MUL_BUF_LOOP_END;
 }
 if(b_start < b_current){
  a_current = a_end;
  b_current--;
 }
goto MUL_BUF_LOOP_ADD;
}
goto MUL_BUF_LOOP_END;
MUL_BUF_LOOP_END:
return result;
}
