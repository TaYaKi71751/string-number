#include "./parse.h"

char* parseCustomString(char *str) {
	size_t str_length =	strlen_runtime(str);
	char *str_tmp = 0x00,*str_start = 0x00, *str_end = 0x00;
	str_start = __START_NUMBER__(0,str_length,str);
	if(!str_start) abort();
	str_end = __END_NUMBER__(str_start - str,str_length,str);
	if(!str_end) abort();
	str_length = str_end + 1 - str_start;
	str_tmp = calloc(str_length + 1,sizeof(char));
	memcpy(str_tmp,str_start,str_length);
	str_tmp[str_length] = 0x00;
	return str_tmp;
}
char* parseCustomSign(char *str) {
	size_t str_length = 0x00,sign_length = 0x00;
	char *sign = 0x00,*str_start = 0x00;
	str_length = strlen_runtime(str);
	str_start = __START_NUMBER__(0,str_length,str);
	if(!str_start) abort();
	sign_length = str_start - str;
	sign = calloc(sign_length + 1,sizeof(char));
	memcpy(sign,str,sign_length);
	size_t negative_sign_index = __INDEX_OF_SIGN_NEGATIVE__(0,sign_length,sign);
	size_t positive_sign_index = __INDEX_OF_SIGN_POSITIVE__(0,sign_length,sign);
	free(sign);
	if(negative_sign_index == (size_t)-1 && positive_sign_index == (size_t)-1) return __GET_SIGN_POSITIVE__();
	if(negative_sign_index == (size_t)-1) return __GET_SIGN_POSITIVE__();
	if(positive_sign_index == (size_t)-1) return __GET_SIGN_NEGATIVE__();
	if(negative_sign_index > positive_sign_index) return __GET_SIGN_NEGATIVE__();
}

void __TEST_PARSE__(){
	__SAFE_SET_SIGN_NEGATIVE__("_");
	__SAFE_SET_SIGN_NEGATIVE__("+");
	__SAFE_SET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__(")!@#$\%^&*(");
	char *orig = "+_+__-_2312))@!#)@!#$&^\%!@*))_!@#!@$!@\0@$#!",*parsed = 0x00,*sign = 0x00;
	parsed = parseCustomString(orig);
	sign = parseCustomSign(orig);
	printf("orig = \"%s\"\r\n",orig);
	printf("parsed = \"%s\"\r\n",parsed);
	free(parsed);
	printf("sign = \"%s\"\r\n",sign);
}