#include "./integer_function_sub.h"
/** SUB_INTEGER_START **/
struct IntegerClassStruct* subInteger(struct IntegerClassStruct* a,struct IntegerClassStruct* b){
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

	bool negative = false;
	char sign = 0x00;

	(an = getNumberInteger(a),bn = getNumberInteger(b));
	((anl = strlen_runtime(an)),(bnl = strlen_runtime(bn)),(rnl = anl > bnl ? anl : bnl));

		api = (IntegerClassStruct*)MemoryClassConstructor(an,strlen_runtime(an));
		bpi = (IntegerClassStruct*)MemoryClassConstructor(bn,strlen_runtime(bn));
		mxi = maxInteger(a,b);
		mni = minInteger(a,b);

	if(az || bz) goto ZERO;
	if(am || bm) goto NEGATIVE;
	if(ap && bp) goto POSITIVE;
ZERO:
	/** subInteger(a,b) **/ /** a - b **/
	if(az && bz) { /** (a = 0,b = 0) **/
RESULT_ZERO:
		rn = zst;
		rs = '+';
	}
	/** addInteger(a,b) **/ /** a - b **/
	if(az && bp) { /** (a = 0,b > 0) **/
		rn = bn;
		rs = '-'; /** (r < 0) **/
	}
	/** addInteger(a,b) **/ /** a - b **/
	if(az && bm) { /** (a = 0,b < 0) **/
		rn = bn;
		rs = '+'; /** (r > 0) **/
	}
	/** addInteger(a,b) **/ /** a - b **/
	if(bz && am) { /** (a < 0,b = 0) **/
		rn = an;
		rs = as; /** (r < 0) **/
	}
	/** addInteger(a,b) **/ /** a - b **/
	if(bz && ap) { /** (a > 0,b = 0) **/
		rn = an;
		rs = as; /** (r > 0) **/
	}
	rnl = FIRST_SIGN_BYTE_SIZE + strlen_runtime(rn);
	tn = calloc(rnl + END_BYTE_SIZE,sizeof(char));
	memcpy(tn,&rs,FIRST_SIGN_BYTE_SIZE);
	memcpy(tn + FIRST_SIGN_BYTE_SIZE,rn,strlen_runtime(rn));
	if(ri != NULL && ri != a && ri != b) (freeMemory(ri),					(ri = NULL));
	ri = (IntegerClassStruct*) MemoryClassConstructor(tn,rnl);
	goto VALUE_END;
NEGATIVE:
		/** subInteger(a,b) **/ /** a - b **/
		if(ap && bm) { /** (a > 0,b < 0) **/
			ri = addInteger(api,bpi);
			rs = '+';
		}
		/** subInteger(a,b) **/ /** a - b **/
		if(am && bp){ /**(a < 0,b > 0) **/
			ri = addInteger(api,bpi);
			rs = '-';
		}
		/** subInteger(a,b) **/ /** a - b **/
		if(am && bm){ /** (a < 0,b < 0) **/
			mxi = maxInteger(api,bpi);
			if(mxi == 0) /** (|a| = |b|) **/ goto RESULT_ZERO; /** (r = 0) **/
			
			if(mxi == api){ /** (|a| > |b|) **/
				ri = subInteger(api,bpi);
				rs = '-'; /** (r < 0) **/
			}
			if(mxi == bpi){ /** (|a| < |b|) **/
				ri = subInteger(api,bpi);
				rs = '+'; /** (r > 0) **/
			}
		}
		rn = getNumberInteger(ri);
		rnl = FIRST_SIGN_BYTE_SIZE + strlen_runtime(rn);
		tn = calloc(rnl + END_BYTE_SIZE,sizeof(char));
		memcpy(tn,&rs,FIRST_SIGN_BYTE_SIZE);
		memcpy(tn+FIRST_SIGN_BYTE_SIZE,rn,strlen_runtime(rn));
		((freeMemory(ri->raw)),																																							(ri->raw = NULL),(rn = NULL));
		((freeMemory(ri)),																																							(ri = NULL));
		ri = (IntegerClassStruct*)MemoryClassConstructor(tn,rnl);
		goto VALUE_END;	
POSITIVE:
	(rn = calloc(rnl + 1,sizeof(char)));
	for(long i = rnl - 1;i >= 0;i--){
		char ai = (anl - (rnl - (i + 1)) - 1 <= anl - 1) ? (an[anl - (rnl - (i + 1)) - 1]) : 0x00;
		char bi = (bnl - (rnl - (i + 1)) - 1 <= bnl - 1) ? (bn[bnl - (rnl - (i + 1)) - 1]) : 0x00;

		ai = '0' <= ai && ai <= '9' ? ai - 0x30 : 0x00;
		bi = '0' <= bi && bi <= '9' ? bi - 0x30 : 0x00;

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
VALUE_END:
FREE:
	if(api != a && api != NULL) ((freeMemory(api)),											(api = NULL));
	if(bpi != b && bpi != NULL) ((freeMemory(bpi)),											(bpi = NULL));
RETURN:
	return ri;
}
/** SUB_INTEGER_END **/
