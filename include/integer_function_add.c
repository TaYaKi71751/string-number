#include "./integer_function_add.h"

/** ADD_INTEGER_START **/
struct IntegerClassStruct* addInteger(struct IntegerClassStruct* a,struct IntegerClassStruct* b){
	const size_t FIRST_SIGN_BYTE_SIZE = 0x01;
	const size_t END_BYTE_SIZE = 0x01;

	char *an = NULL,*bn = NULL,*rn = NULL,*tn = NULL,*zst = "0";
	char as = 0x00,bs = 0x00,rs = 0x00;
	size_t anl = 0x00,bnl = 0x00,rnl = 0x00,tnl = 0x00;
	bool az = false,bz = false,am = false,bm = false,ap = false,bp = false;
	struct IntegerClassStruct *ri = NULL,*api = NULL,*bpi = NULL,*mxi = NULL,*mni = NULL;

 ((an = getNumberInteger(a)),(bn = getNumberInteger(b)));
	((anl = strlen_runtime(an)),(bnl = strlen_runtime(bn)),(rnl = (anl > bnl ? anl : bnl) + 1));
	((as = getSignInteger(a)),(bs = getSignInteger(b)));

	((az = an[0] == 0x30),(bz = bn[0] == 0x30));
	((am = as == '-' && !az),(bm = bs == '-' && !bz));
	((ap = as != '-' && !az),(bp = bs != '-' && !bz));

 char over = 0x00,current = 0x00;
		api = (IntegerClassStruct*)MemoryClassConstructor(an,strlen_runtime(an));
		bpi = (IntegerClassStruct*)MemoryClassConstructor(bn,strlen_runtime(bn));
		mxi = maxInteger(a,b);
		mni = minInteger(a,b);
	if((az && bz)) goto RESULT_ZERO; 
	if(az || bz) goto ZERO;
	if(am || bm) goto NEGATIVE;
	if(ap && bp) goto POSITIVE;
ZERO:
	/** addInteger(a,b) **/ /** a + b **/
	if(az && bz) { // (a = 0) + (b = 0) = (r = 0)
RESULT_ZERO:
		rn = zst;
		rs = 0x00;
	}
	/** addInteger(a,b) **/ /** a + b **/
	if(az && bp) { // (a = 0) + (b = 7) = (b = 7)
		rn = bn;
		rs = bs;
	}
	/** addInteger(a,b) **/ /** a + b **/
	if(bz && am) { // (a = -5) + (b = 0) = (a = -5)
		rn = an;
		rs = as;
	}
	/** addInteger(a,b) **/ /** a + b **/
	if(az && bm) { // (a = 0) + (b = -7) = (b = -7)
		rn = bn;
		rs = bs;
	}
	/** addInteger(a,b) **/ /** a + b **/
	if(bz && ap) { // (a = 7) + (b = 0) = (a = 7)
		rn = an;
		rs = as;
	}
	tnl = FIRST_SIGN_BYTE_SIZE + strlen_runtime(rn);
	tn = calloc(rnl + END_BYTE_SIZE,sizeof(char));
	memcpy(tn,&rs,FIRST_SIGN_BYTE_SIZE);
	memcpy(tn + FIRST_SIGN_BYTE_SIZE,rn,strlen_runtime(rn));
	if(ri != NULL && ri != a && ri != b) (freeMemory(ri),					(ri = NULL));
	ri = (IntegerClassStruct*) MemoryClassConstructor(tn,tnl);
	goto VALUE_END;
NEGATIVE:
		/** addInteger(a,b) **/ /** a + b **/
		if(ap && bm) { /** (a > 0,b < 0) **/
			mxi = maxInteger(api,bpi);
			if(mxi == 0x00) /** (|a| = |b|) **/ goto RESULT_ZERO; /** (r = 0) **/
			if(mxi == api){ /** (|a| > |b|) **/
				ri = subInteger(api,bpi); /** r = (|a| - |b|) **/
				rs = 0x00; /** (r > 0) **/
			}
			if(mxi == bpi){ /** (|a| < |b|) **/
				ri = subInteger(bpi,api);
				rs = '-'; /** (r < 0) **/
			}
		}
		/** addInteger(a,b) **/ /** a + b **/
		if(am && bp){ /**(a < 0,b > 0) **/
			mxi = maxInteger(api,bpi);
			if(mxi == 0x00) /** (|a| = |b|) **/ goto RESULT_ZERO; /** (r = 0) **/
			if(mxi == api){ /** (|a| > |b|) **/
				ri = subInteger(api,bpi); /**  **/
				rs = '-'; /** (r < 0) **/
			}
			if(mxi == bpi){
				ri = subInteger(bpi,api);
				rs = 0x00; /** (r > 0) **/
			}
		}
		/** addInteger(a,b) **/ /** a + b **/
		if(am && bm){ /** (a < 0,b < 0) **/
			mxi = maxInteger(api,bpi);
			if(mxi == 0){ /** (|a| = |b|) **/
				ri = addInteger(api,bpi);
				rs = '-'; /** (r < 0) **/
			}
			
			if(mxi == api){ /** (|a| > |b|) **/
				ri = addInteger(api,bpi);
				rs = '-'; /** (r < 0) **/
			}
			if(mxi == bpi){ /** (|a| < |b|) **/
				ri = addInteger(api,bpi);
				rs = '-'; /** (r < 0) **/
			}
		}
		rn = getNumberInteger(ri);
		tnl = FIRST_SIGN_BYTE_SIZE + strlen_runtime(rn);
		tn = calloc(rnl + END_BYTE_SIZE,sizeof(char));
		memcpy(tn,&rs,FIRST_SIGN_BYTE_SIZE);
		memcpy(tn+FIRST_SIGN_BYTE_SIZE,rn,strlen_runtime(rn));
		((freeMemory(rn)),																																							(rn = NULL));
		((freeMemory(ri)),																																							(ri = NULL));
		ri = (IntegerClassStruct*)MemoryClassConstructor(tn,tnl);
		goto VALUE_END;	
POSITIVE:
	/** addInteger(a,b) **/ /** a + b **/
	/** (a > 0,b > 0) **/
 rn = calloc(rnl + END_BYTE_SIZE,sizeof(char));
	for(long i = rnl - 1;i > 0;i--){
		char ai = (anl - (rnl - (i + 1)) - 1 <= anl - 1) ? (an[anl - (rnl - (i + 1)) - 1]) : 0x00;
		char bi = (bnl - (rnl - (i + 1)) - 1 <= bnl - 1) ? (bn[bnl - (rnl - (i + 1)) - 1]) : 0x00;

		ai = 0x29 < ai && ai < 0x40 ? ai - 0x30 : 0x00;
		bi = 0x29 < bi && bi < 0x40 ? bi - 0x30 : 0x00;

		rn[i - 1] += ((ai + bi + rn[i]) / 10);
		rn[i] += ((ai + bi) % 10);
	}
	over = 0;
	for(long i = 0;i < rnl;i++){
		over = rn[i] / 10;
		rn[i] = rn[i] % 10;
		if(over && !(rnl - (i + 1))) rn[rnl - (i + 1)] += over;
	}
 for(long i = 0;i < rnl;i++) rn[i]+= 0x30; /** itoa **/
 for(long i = 0;i < rnl;i++){ /** TRIM **/
		tnl = rnl - i;
		if(rn[i] == 0x30 && (rnl > 0)) continue;
		tn = calloc(FIRST_SIGN_BYTE_SIZE + tnl + END_BYTE_SIZE,sizeof(char));
		memcpy(tn,&rs,strlen_runtime(&rs));
		memcpy(tn + FIRST_SIGN_BYTE_SIZE,rn + i,tnl);
		((freeMemory(rn)),																																							(rn = NULL));
		ri = (IntegerClassStruct*)MemoryClassConstructor(tn,FIRST_SIGN_BYTE_SIZE + tnl);
		break;
	}
VALUE_END:
FREE:
	if(api != a && api != NULL) ((freeMemory(api)),											(api = NULL));
	if(bpi != b && bpi != NULL) ((freeMemory(bpi)),											(bpi = NULL));
RETURN:
	return ri;
}
/** ADD_INTEGER_END **/
