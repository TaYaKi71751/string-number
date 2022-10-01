#include "./memory_class.h"
#include "./memory_function.h"

/** MEMORY_FUNCTION_CONSTRUCTOR_START **/
struct MemoryFunctionStruct* MemoryFunctionConstructor(){
	/** MEMORY_FUNCTION_CONSTRUCTOR_ALLOC_START **/
	struct MemoryFunctionStruct* s = calloc(1,sizeof(MemoryFunctionStruct)); 
	/** MEMORY_FUNCTION_CONSTRUCTOR_ALLOC_END **/
	/** MEMORY_FUNCTION_CONSTRUCTOR_ASSIGN_FUNCTION_START **/
	s->free = freeMemory;
	s->alloc = allocMemory;
	s->clone = cloneMemory;
	s->swap = swapMemory;
	/** MEMORY_FUNCTION_CONSTRUCTOR_ASSIGN_FUNCTION_END **/
	/** MEMORY_FUNCTION_CONSTRUCTOR_RETURN **/
	return s;
}
/** MEMORY_FUNCTION_CONSTRUCTOR_END **/

/** FREE_MEMORY_START **/
void* freeMemory(void* target){
	if(target == NULL){ /** IF_TARGET_WAS_NULL **/
		/** DO_NOT_ANYTHING **/
	} else { /** IF_TARGET_WAS_NOT_NULL **/
		free(target); /** FREE_TARGET_IMPLICIT **/
		target = NULL; /** SET_TARGET_TO_NULL_IMPLICIT **/
	}
	/** RETURN_TARGET **/
	return target;
}
void* cloneMemory(void* from,size_t size){
	void* v = calloc(size,sizeof(char));
	memcpy(v,from,size);
	return v;
}
/** FREE_MEMORY_END **/
/** ALLOC_MEMORY_START **/
struct MemoryClassStruct* allocMemory(struct MemoryClassStruct* s,void* target,size_t size){
	if(s == NULL){
		s = MemoryClassConstructor(target,size);
	} else {
		s->target = target;
		s->size = size;
	}
	return s;
}
/** ALLOC_MEMORY_END **/

/**  VALID_SWAP_MEMORY_INPUT_START **/
bool validSwapMemoryInput(
	struct MemoryClassStruct* a,struct MemoryClassStruct* a_swap,
	struct MemoryClassStruct* b,struct MemoryClassStruct* b_swap
){
	bool r = true;
	size_t al = a->size;
	size_t bl = b->size;
	size_t asl = a_swap->size;
	size_t bsl = b_swap->size;

	void* at = a->target;
	void* bt = b->target;
	void* ast = a_swap->target;
	void* bst = b_swap->target;

	size_t asi = ast - at;
	size_t bsi = bst - bt;

	r = r && (at + al > ast) && (at + al >= ast + asl) && (al >= asl) && (at <= ast);
	r = r && (bt + bl > bst) && (bt + bl >= bst + bsl) && (bl >= bsl) && (bt <= bst);

	return r;
}
/** VALID_SWAP_MEMORY_INPUT_END **/
/** SWAP_MEMORY_START **/
bool swapMemory(
	struct MemoryClassStruct* a,struct MemoryClassStruct* a_swap,
	struct MemoryClassStruct* b,struct MemoryClassStruct* b_swap
){
	size_t al = a->size;
	size_t bl = b->size;
	size_t asl = a_swap->size;
	size_t bsl = b_swap->size;

	void* at = a->target;
	void* bt = b->target;
	void* ast = a_swap->target;
	void* bst = b_swap->target;

	size_t asi = ast - at;
	size_t bsi = bst - bt;

	bool r = validSwapMemoryInput(a,a_swap,b,b_swap);

	if(r){
		size_t asr_length = al - asl + bsl;
		size_t bsr_length = bl - bsl + asl;
		void* asr = calloc(asr_length + 1,sizeof(char));
		void* bsr = calloc(bsr_length + 1,sizeof(char));

		if(asi) memcpy(asr,at,asi);
		if(bsl) memcpy(asr + asi,bst,bsl);
		memcpy(asr + asi + bsl,at + asi + asl,al - asi - asl);

		if(bsi) memcpy(bsr,bt,bsi);
		if(asl) memcpy(bsr + bsi,ast,asl);
		memcpy(bsr + bsi + asl,bt + bsi + bsl,bl - bsi - bsl);

		allocMemory(a_swap,asr,asr_length);
		allocMemory(b_swap,bsr,bsr_length);
	}
	return r;
}
/** SWAP_MEMORY_END **/
