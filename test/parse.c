#include "./parse.h"

char* parseCustomString(char *str) {
	size_t str_length =	strlen_runtime(str);
	char *str_tmp = 0x00,*str_start = 0x00, *str_end = 0x00;
	str_start = __START_NUMBER__(0,str_length,str);
	if(!str_start) abort();
	str_end = __END_NUMBER__(str_start - str,str_length,str);
	if(!str_end) abort();
	str_length = str_end - str_start;
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
	sign[sign_length] = 0x00;
	return sign;
}

int main(int argc, char **argv){
	char *orig = "+_+__-_2312))@!#)@!#$&^\%!@*))_!@#!@$!@\0@$#!",*parsed = 0x00,*sign = 0x00;
	parsed = parseCustomString(orig);
	sign = parseCustomSign(orig);
	printf("orig = \"%s\"\r\n",orig);
	printf("parsed = \"%s\"\r\n",parsed);
	printf("sign = \"%s\"\r\n",sign);
}