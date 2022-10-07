#include "./integer_function_sub.h"

struct IntegerClassStruct* subInteger(struct IntegerClassStruct* a,struct IntegerClassStruct* b){
	const size_t FIRST_SIGN_BYTE_SIZE = 0x01;
	const size_t END_BYTE_SIZE = 0x01;

	struct IntegerClassStruct* ri = NULL;
	char *an = NULL,*bn = NULL,*rn = NULL,*tn = NULL;
	size_t anl = 0x00,bnl = 0x00,rnl = 0x00,tnl = 0x00;
	bool negative = false;
	char sign = 0x00;

	(an = getNumberInteger(a),bn = getNumberInteger(b));
	((anl = strlen_runtime(an)),(bnl = strlen_runtime(bn)),(rnl = anl > bnl ? anl : bnl));
	(rn = calloc(rnl + 1,sizeof(char)));
	for(long i = rnl - 1;i >= 0;i--){
		char ai = (anl - (rnl - (i + 1)) - 1 <= anl - 1) ? (an[anl - (rnl - (i + 1)) - 1]) : 0x00;
		char bi = (bnl - (rnl - (i + 1)) - 1 <= bnl - 1) ? (bn[bnl - (rnl - (i + 1)) - 1]) : 0x00;

		ai = 0x29 < ai && ai < 0x40 ? ai - 0x30 : 0x00;
		bi = 0x29 < bi && bi < 0x40 ? bi - 0x30 : 0x00;

		rn[i] += (ai - bi);
	}
	for(long i = 0;i < rnl;i++){
		if(rn[i] == 0x00 && (rnl - (i + 1))) continue;
		((tnl = (rnl - i)),(tn = calloc(tnl + 1,sizeof(char))),(memcpy(tn,rn + i,tnl)));
		((freeMemory(rn)), (rn = NULL));
		break;
	}
	if(tn[0] < 0x00) negative = true;
	if(negative){
		for(long i = tnl - 1;i > 0;i--){
			if(negative && tn[i] > 0x00){
				tn[i] = 0x0a - tn[i];
				tn[i - 1] = tn[i - 1] + 0x01;
				continue;
			}
			if(negative && tn[i] < 0x00){
				tn[i] = (tn[i] * 0xFF);
				// tn[i] = 0x0a - (tn[i] * 0xFF);
				// tn[i - 1] = tn[i - 1] - 0x01;
				continue;
			}
		}
		if(negative){
			(tn[0] = ((tn[0]) * 0xFF));
		}
	}
	if(!negative){
		for(long i = tnl - 1;i > 0;i--){
			if(!negative && tn[i] < 0x00){
				tn[i] += 0x0a;
				tn[i - 1] -= 0x01;
			}
		}
	}
	sign = negative ? '-' : '+';
	for(long i = 0;i < tnl;i++){
		if(tn[i] == 0x00 && (tnl - (i + 1))) continue;
		((rnl = FIRST_SIGN_BYTE_SIZE + (tnl - i)),(rn = calloc(rnl + END_BYTE_SIZE,sizeof(char))));
		((memcpy(rn,&sign,strlen_runtime(&sign))),(memcpy(rn + FIRST_SIGN_BYTE_SIZE,tn + i,rnl)));
		(freeMemory(tn), tn = NULL);
		break;
	}
	for(long i = 1;i < rnl;i++) rn[i] += 0x30;
	ri = (IntegerClassStruct*)MemoryClassConstructor(rn, rnl);
	return ri;
}
