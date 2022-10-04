#include<stdlib.h>
#include "./calculate.h"

const size_t FIRST_SIGN_BYTE_SIZE = 0x01;
const size_t END_BYTE_SIZE = 0x01;

void testCalculate(struct IntegerClassStruct* a,struct IntegerClassStruct* b,bool printAny){
	struct IntegerFunctionStruct* Integer = IntegerFunctionConstructor();
	struct IntegerClassStruct* r = NULL;

	int ai = atoi(Integer->getSign(a) == '-' ? a->raw : Integer->getNumber(a));
	int bi = atoi(Integer->getSign(b) == '-' ? b->raw : Integer->getNumber(b));
	int ri = ai + bi;
	bool mi = false;

	long al = atol(Integer->getSign(a) == '-' ? a->raw : Integer->getNumber(a));
	long bl = atol(Integer->getSign(b) == '-' ? b->raw : Integer->getNumber(b));
	long rl = al + bl;
	bool ml = false;

	long long all = atoll(Integer->getSign(a) == '-' ? a->raw : Integer->getNumber(a));
	long long bll = atoll(Integer->getSign(b) == '-' ? b->raw : Integer->getNumber(b));
	long long rll = all + bll;
	bool mll = false;

	r = Integer->add(a,b);
	ri = ai + bi;
	rl = al + bl;
	rll = all + bll;

	mi = atoi(Integer->getSign(r) == '-' ? r->raw : Integer->getNumber(r)) == ri;
	ml = atol(Integer->getSign(r) == '-' ? r->raw : Integer->getNumber(r)) == rl;
	mll = atoll(Integer->getSign(r) == '-' ? r->raw : Integer->getNumber(r)) == rll;

	if(!mi || !ml || !mll || printAny){
		printf("[string][int = %s][long = %s][long long = %s] ( a = \"%s\" ) + ( b = \"%s\" ) = ( r = \"%s\" )\n",
			mi ? "true" : "false",
			ml ? "true" : "false",
			mll ? "true" : "false",
			Integer->getSign(a) == '-' ? a->raw : Integer->getNumber(a),
			Integer->getSign(b) == '-' ? b->raw : Integer->getNumber(b),
			Integer->getSign(r) == '-' ? r->raw : Integer->getNumber(r)
		);
		printf("[int][%s] ( ai = %d ) + ( bi = %d ) = ( ri = %d )\n",mi?"true":"false",ai,bi,ri);
		printf("[long][%s] ( al = %ld ) + ( bl = %ld ) = ( rl = %ld )\n",ml?"true":"false",al,bl,rl);
		printf("[long long][%s] ( all = %lld ) + ( bll = %lld ) = ( rll = %lld )\n",mll?"true":"false",all,bll,rll);
	}
	freeMemory(r->raw);
	freeMemory(r);

	// r = Integer->sub(a,b);
	// ri = ai - bi;
	// rl = al - bl;
	// rll = all - bll;

	// mi = atoi(Integer->getSign(r) == '-' ? r->raw : Integer->getNumber(r)) == ri;
	// ml = atol(Integer->getSign(r) == '-' ? r->raw : Integer->getNumber(r)) == rl;
	// mll = atoll(Integer->getSign(r) == '-' ? r->raw : Integer->getNumber(r)) == rll;

	// if(!mi || !ml || !mll || printAny){
	// 	printf("[string][int = %s][long = %s][long long = %s] ( a = \"%s\" ) - ( b = \"%s\" ) = ( r = \"%s\" )\n",
	// 		mi ? "true" : "false",
	// 		ml ? "true" : "false",
	// 		mll ? "true" : "false",
	// 		Integer->getSign(a) == '-' ? a->raw : Integer->getNumber(a),
	// 		Integer->getSign(b) == '-' ? b->raw : Integer->getNumber(b),
	// 		Integer->getSign(r) == '-' ? r->raw : Integer->getNumber(r)
	// 	);
	// 	printf("[int][%s] ( ai = %d ) - ( bi = %d ) = ( ri = %d )\n",mi?"true":"false",ai,bi,ri);
	// 	printf("[long][%s] ( al = %ld ) - ( bl = %ld ) = ( rl = %ld )\n",ml?"true":"false",al,bl,rl);
	// 	printf("[long long][%s] ( all = %lld ) - ( bll = %lld ) = ( rll = %lld )\n",mll?"true":"false",all,bll,rll);
	// }
	// freeMemory(r->raw);
	// freeMemory(r);

	freeMemory(Integer);
}

void testCalculateMatrix(struct IntegerClassStruct* min,struct IntegerClassStruct* max){
	char* signs = "++";
	char* one_string = "1";
	one_string = cloneMemory(one_string,strlen_runtime(one_string));
	struct IntegerClassStruct* one = (IntegerClassStruct*) MemoryClassConstructor(one_string,strlen_runtime(one_string));

	char* a_ = cloneMemory(min->raw,min->length);
	char* b_ = cloneMemory(min->raw,min->length);

	struct IntegerClassStruct* _a = (IntegerClassStruct*) MemoryClassConstructor(a_,strlen_runtime(a_));
	struct IntegerClassStruct* _b = (IntegerClassStruct*) MemoryClassConstructor(b_,strlen_runtime(b_));
	struct IntegerClassStruct* _a_tmp = (IntegerClassStruct*) MemoryClassConstructor(NULL,0x00);
	struct IntegerClassStruct* _b_tmp = (IntegerClassStruct*) MemoryClassConstructor(NULL,0x00);

	char* _an = NULL;
	char* _bn = NULL;
	char* _an_tmp = NULL;
	char* _bn_tmp = NULL;

	size_t _anl = 0x00;
	size_t _bnl = 0x00;


	for(
		_a = _a;
		maxInteger(_a,max) == max;

		(

			(_an = getNumberInteger(_a)),
			(_anl = strlen_runtime(_an)),

			(_a_tmp->raw = cloneMemory(_an,_anl)),
			(_a_tmp->length = _anl),

			(freeMemory(_a->raw)),
			(_a->length = 0),
			(freeMemory(_a)),

			(_a = addInteger(_a_tmp,one)),

			(freeMemory(_a_tmp->raw)),
			(_a_tmp->length = 0),

			(NULL)
		)
	){
		for(
			_b = _b;
			maxInteger(_b,max) == max;
		(
			// (freeMemory(_b_tmp->raw)),
			// (_b_tmp->length = 0),

			(_bn = getNumberInteger(_b)),
			(_bnl = strlen_runtime(_bn)),

			(_b_tmp->raw = cloneMemory(_bn,_bnl)),
			(_b_tmp->length = _bnl),

			(freeMemory(_b->raw)),
			(_b->length = 0),
			(freeMemory(_b)),

			(_b = addInteger(_b_tmp,one)),

			(freeMemory(_b_tmp->raw)),
			(_b_tmp->length = 0),

			(NULL)
		)
		){
			struct IntegerClassStruct* a = NULL;
			struct IntegerClassStruct* b = NULL;
			for(long i = 0;i < strlen_runtime(signs);i+=2){
				char* an = getNumberInteger(_a);
				char* bn = getNumberInteger(_b);

				size_t anl = strlen_runtime(an);
				size_t bnl = strlen_runtime(bn);

				char* an_tmp = calloc(FIRST_SIGN_BYTE_SIZE + anl + END_BYTE_SIZE,sizeof(char));
				char* bn_tmp = calloc(FIRST_SIGN_BYTE_SIZE + bnl + END_BYTE_SIZE,sizeof(char));
				// an = cloneMemory(an,strlen_runtime(an));
				// bn = cloneMemory(bn,strlen_runtime(bn));
				memcpy(an_tmp,signs + i,1);
				memcpy(bn_tmp,signs + i + 1,1);
				memcpy(an_tmp + 1,an,anl);
				memcpy(bn_tmp + 1,bn,bnl);
				a =(IntegerClassStruct*) MemoryClassConstructor(an_tmp,FIRST_SIGN_BYTE_SIZE + anl);
				b =(IntegerClassStruct*) MemoryClassConstructor(bn_tmp,FIRST_SIGN_BYTE_SIZE + bnl);

				// freeMemory(an);
				// freeMemory(bn);

				testCalculate(a,b,false);

				freeMemory(a->raw);
				freeMemory(b->raw);

				freeMemory(a);
				freeMemory(b);
			}
		}
		freeMemory(_b->raw);
		freeMemory(b_);
		b_ = cloneMemory(min->raw,min->length);
  _b = (IntegerClassStruct*) MemoryClassConstructor(b_,strlen_runtime(b_));
	}
	freeMemory(_a->raw);
	freeMemory(a_);
}

int main(){
	char* mins = "0";
	char* maxs = "2147483647";

	mins = cloneMemory(mins,strlen_runtime(mins));
	maxs = cloneMemory(maxs,strlen_runtime(maxs));

	struct IntegerClassStruct* mini = (IntegerClassStruct*)MemoryClassConstructor(mins,strlen_runtime(mins));
	struct IntegerClassStruct* maxi = (IntegerClassStruct*)MemoryClassConstructor(maxs,strlen_runtime(maxs));

	testCalculateMatrix(mini, maxi);

	return 0;
}

//int main(){
//	char* ac = "9223372036854775807";
//	char* bc = "9223372036854775808";
//
//	struct IntegerClassStruct* a = NULL;
//	struct IntegerClassStruct* b = NULL;
//
//	ac = cloneMemory(ac, strlen_runtime(ac));
//	bc = cloneMemory(bc, strlen_runtime(bc));
//
//	a = (IntegerClassStruct*) MemoryClassConstructor(ac, strlen_runtime(ac));
//	b = (IntegerClassStruct*) MemoryClassConstructor(bc, strlen_runtime(bc));
//
//	testCalculate(a, b);
//}
