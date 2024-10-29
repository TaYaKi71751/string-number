async function add(a,b){
	return await new Promise((resolve,reject) => {
		require('../wasm/index.cjs')()
			.then((Module)=>{
				const _init = Module.cwrap('__SAFE_CALC_INIT__','undefined',['string','string','string']);
				const _add = Module.cwrap('__ADD_INTEGER__','string',['string','string']);
				const _sub = Module.cwrap('__SUB_INTEGER__','string',['string','string']);
				const _mul = Module.cwrap('__MUL_INTEGER__','string',['string','string']);
				_init('-','','0123456789abcdef')
				const r = _add(a,b);
				resolve(r);
			})
	});
}

async function sub(a,b){
	return await new Promise((resolve,reject) => {
		require('../wasm/index.cjs')()
			.then((Module)=>{
				const _init = Module.cwrap('__SAFE_CALC_INIT__','undefined',['string','string','string']);
				const _add = Module.cwrap('__ADD_INTEGER__','string',['string','string']);
				const _sub = Module.cwrap('__SUB_INTEGER__','string',['string','string']);
				const _mul = Module.cwrap('__MUL_INTEGER__','string',['string','string']);
				_init('-','','0123456789abcdef')

				const r = _sub(a,b);
				resolve(r);
			})
	});
}

async function mul(a,b){
	return await new Promise((resolve,reject) => {
		require('../wasm/index.cjs')()
			.then((Module)=>{
				const _init = Module.cwrap('__SAFE_CALC_INIT__','undefined',['string','string','string']);
				const _add = Module.cwrap('__ADD_INTEGER__','string',['string','string']);
				const _sub = Module.cwrap('__SUB_INTEGER__','string',['string','string']);
				const _mul = Module.cwrap('__MUL_INTEGER__','string',['string','string']);
				_init('-','','0123456789abcdef')
				const r = _mul(a,b);
				resolve(r);
			})
	});
}
// require('../wasm/index.cjs')()
// 	.then(async (Module)=>{
// 		const init = Module.cwrap('__SAFE_CALC_INIT__','undefined',['string','string','string']);
// 		const add = Module.cwrap('__ADD_INTEGER__','string',['string','string']);
// 		const sub = Module.cwrap('__SUB_INTEGER__','string',['string','string']);
// 		const mul = Module.cwrap('__MUL_INTEGER__','string',['string','string']);
// 		const free = Module.cwrap('free','');
// 		await init('-','','0123456789abcdef');
// 		await init('-','','0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
// 		let r = "0";
// 		try {
// 			while(r.length != 50){
// 				let _ = add('1',r);
// 				r = _;
// 				console.log(r);
// 			}
// 		} catch(e){
// 			console.log({e,r});
// 		}
// 		console.log(r);
// 		const result = await [
// 			await add('1','18446744073709551615'),
// 			await sub('1','2'),
// 			await mul('2','18446744073709551615')
// 		];
// 		console.log(result);
// 	})
(async() => {
	
		let r = "2";
		let l = r.length;
		try {
			while(r.length != 50){
				let _ = await mul('2',r);
				r = _;
				if(l != r.length){
					console.log(`length: ${l}`);
				}
				l = r.length;
				console.log(r);
			}
		} catch(e){
			console.log({e,r});
		}
})()
