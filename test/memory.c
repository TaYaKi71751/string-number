#include "./memory.h"

bool testMemorySwap(
 struct MemoryClassStruct* a,struct MemoryClassStruct* a_swap,
 struct MemoryClassStruct* b,struct MemoryClassStruct* b_swap
){
 struct MemoryFunctionStruct* Memory = MemoryFunctionConstructor();
 bool r = Memory->swap(a,a_swap,b,b_swap);
 printf("return = %d,\n",r);
 printf("a_swap = %s,",a_swap->target);
 printf("a_swap->size = %d,\n",a_swap->size);
 printf("b_swap = %s,",b_swap->target);
 printf("b_swap->size = %d,\n",b_swap->size);
}

// int main(){
//  struct MemoryFunctionStruct* Memory = MemoryFunctionConstructor();
//  char* _a = "abcd";
//  char* _b = "ef";
//  _a = Memory->clone(_a,strlen(_a));
//  _b = Memory->clone(_b,strlen(_b));

//  struct MemoryClassStruct* a = Memory->alloc(NULL,_a,strlen(_a));
//  struct MemoryClassStruct* b = Memory->alloc(NULL,_b,strlen(_b));

//  struct MemoryClassStruct* a_swap = Memory->alloc(NULL,_a + 1,strlen(_a) - 2);
//  struct MemoryClassStruct* b_swap = Memory->alloc(NULL,_b + 1,strlen(_b) - 1);

//  testMemorySwap(a,a_swap,b,b_swap);
// }