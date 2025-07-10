#include "../test/main.h"
int main(){
	__SAFE_SET_SIGN_NEGATIVE__("-");
	__SAFE_SET_SIGN_POSITIVE__("");
	__SAFE_SET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__("0123456789");
	char *minus = "-12";
	char *plus = "12";
	char* result = __MUL_INTEGER__(minus,plus);
	printf("%s * %s = %s\n",minus,plus,result);
	free(result);
	minus = "-0";
	plus = "12";
	result = __MUL_INTEGER__(minus,plus);
	printf("%s * %s = %s\n",minus,plus,result);
	free(result);
	__TEST_ADD_INTEGER_LOOP__();
	__TEST_SUB_INTEGER_LOOP__();
	__TEST_MUL_INTEGER_LOOP__();
	__TEST_PARSE__();
	__SAFE_SET_SIGN_NEGATIVE__(0x00);
	__SAFE_SET_SIGN_POSITIVE__(0x00);
	__SAFE_SET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__(0x00);
	return 0;
}
