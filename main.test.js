require('./main.js')()
	.then(async (Module)=>{
		const init = Module.cwrap('__SAFE_CALC_INIT__','undefined',['string','string','string']);
		const add = Module.cwrap('__ADD_INTEGER__','string',['string','string']);
		const sub = Module.cwrap('__SUB_INTEGER__','string',['string','string']);
		const mul = Module.cwrap('__MUL_INTEGER__','string',['string','string']);
		const free = Module.cwrap('free','')
		await init('-','','0123456789abcdef');
		await init('-','','0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
		let r = "0";
		try {
			while(r.length != 50){
				let _ = add('1',r);
				r = _;
			}
		} catch(e){
			console.log({e,r});
		}
		console.log(r);
		const result = await [
			await add('1','18446744073709551615'),
			await sub('1','2'),
			await mul('2','18446744073709551615')
		];
		console.log(result);
	})