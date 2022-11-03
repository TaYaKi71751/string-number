#include "./integer_def_number.h"

char __CHARSET_AT__(size_t index){
	if(index > strlen_runtime(__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__())) __OUT_OF_INDEX_ABORT__();
	return __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()[index];
}

bool __IS_CURRENT_NUMBER_CHARSET__(size_t charset_index,char current){
 __CHARSET_LEN_CHECK__();
 return (charset_index) < strlen_runtime(__CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()) ? (
  __CUSTOM_INTEGER_DEF_NUMBER_CHARSET__()[charset_index] != current ?
   __IS_CURRENT_NUMBER_CHARSET__(charset_index + 1,current) :
   true
 ) : false;
}
bool __IS_CURRENT_CHARSET_ZERO__(char current){
 return current == __CHARSET_AT__(0);
}

char* __START_NUMBER__(size_t index, size_t length, char* n){
 __CHARSET_LEN_CHECK__();
 return index < (index + 1) && (index + 1) < length ? (
  __IS_CURRENT_CHARSET_ZERO__(n[index]) || !__IS_CURRENT_NUMBER_CHARSET__(0,n[index]) ?
   __START_NUMBER__(index + 1,length,n) :
   n + index
 ) : (
  __IS_CURRENT_NUMBER_CHARSET__(0,n[index]) ?
   n + index :
   0x00
 );
}

char* __END_NUMBER__(size_t index, size_t length, char* n){
 __CHARSET_LEN_CHECK__();
 return index < (index + 1) && (index + 1) < length ? (
  __IS_CURRENT_NUMBER_CHARSET__(0,n[index]) ?
   __END_NUMBER__(index + 1,length,n) :
   n + index
 ) : (
  __IS_CURRENT_NUMBER_CHARSET__(0,n[index]) ?
   n + index :
   0x00
 );
}

size_t __INDEX_OF_CURRENT_CHARSET__(size_t charset_index,char current){
	__CHARSET_LEN_CHECK__();
	if(!__IS_CURRENT_NUMBER_CHARSET__(0,current)) abort();
	if(!(charset_index < (charset_index + 1))) abort();
	return (
		current == __CHARSET_AT__(charset_index) ?
			charset_index :
			__INDEX_OF_CURRENT_CHARSET__(charset_index + 1,current)
	);
}

int __CMP_CURRENT_CHARSET__(char a_current,char b_current){
	__CHARSET_LEN_CHECK__();
	size_t a_index = __INDEX_OF_CURRENT_CHARSET__(0,a_current);
	size_t b_index = __INDEX_OF_CURRENT_CHARSET__(0,b_current);
	if(a_index == b_index) return 0;
	if(a_index > b_index) return 1;
	if(a_index < b_index) return -1;
	abort();
}

int __CMP_CHARSET__(char *a,char *b){
	__CHARSET_LEN_CHECK__();
	size_t a_length = 0x00,b_length = 0x00;
	char *a_start = 0x00,*b_start = 0x00,*a_end = 0x00,*b_end = 0x00;
	((a_length = strlen_runtime(a)),(b_length = strlen_runtime(b)));
	((a_start = __START_NUMBER__(0,a_length,a)),(b_start = __START_NUMBER__(0,b_length,b)));
	if(!a_start || !b_start) abort();
	((a_end = __END_NUMBER__(a_start - a,a_length,a)),(b_end = __END_NUMBER__(b_start - b,b_length,b)));
	if(!a_end || !b_end) abort();
	((a_length = a_end + 1 - a_start),(b_length = b_end + 1 - b_start));
	if(a_length > b_length) return 1;
	if(a_length < b_length) return -1;
	if(a_length == b_length){
		int __CURRENT_CMP_RESULT__ = 0x00;
		for(size_t index = 0;index < a_length && index < (index + 1);index++){
			__CURRENT_CMP_RESULT__ = __CMP_CURRENT_CHARSET__(a_start[index],b_start[index]);
			if(!__CURRENT_CMP_RESULT__) continue;
			return __CURRENT_CMP_RESULT__;
		}
		return __CURRENT_CMP_RESULT__;
	}
	abort();
}