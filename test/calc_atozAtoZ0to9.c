#include "./calc_atozAtoZ0to9.h"

void __TEST_ATOZ0TO9__(){
	__SET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__(((char*)(__CUSTOM_INTEGER_DEF_ATOZ0TO9_CHARSET__())));
	char *result = calloc(2,sizeof(char)),*result_tmp = NULL;
	result[0] = 'a';
	while(__CMP_CHARSET__(result, "99") != 0){
		puts(result);
		result_tmp = __ADD_INTEGER__(result, "b");
		free(result);
		result = result_tmp;
	}
	puts(result);
	free(result);
}
