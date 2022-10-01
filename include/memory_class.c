#include "./memory_class.h"

/** MEMORY_CLASS_CONSTRUCTOR_START **/
struct MemoryClassStruct* MemoryClassConstructor(void* target,size_t size){
	/** MEMORY_CLASS_CONSTRUCTOR_ALLOC_START **/
	struct MemoryClassStruct* s = calloc(1,sizeof(MemoryClassStruct));
	/** MEMORY_CLASS_CONSTRUCTOR_ALLOC_END **/
	/** MEMORY_CLASS_CONSTRUCTOR_ASSIGN_VARIABLE_START **/
	s->target = target;
	s->size = size;
	/** MEMORY_CLASS_CONSTRUCTOR_ASSIGN_VARIABLE_END **/
	/** MEMORY_CLASS_CONSTRUCTOR_RETURN **/
	return s;
}
/** MEMORY_CLASS_CONSTRUCTOR_END **/
