
var Module = (() => {
  var _scriptName = typeof document != 'undefined' ? document.currentScript?.src : undefined;
  if (typeof __filename != 'undefined') _scriptName = _scriptName || __filename;
  return (
function(moduleArg = {}) {
  var moduleRtn;

// include: shell.js
// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(moduleArg) => Promise<Module>
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = moduleArg;

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
var readyPromise = new Promise((resolve, reject) => {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});
["_memory","___SUB_INTEGER_OR_NEGATIVE__","_strlen_runtime","___START_NUMBER__","___END_NUMBER__","___IS_CURRENT_CHARSET_ZERO__","___IS_SIGN_NEGATIVE__","___ADD_INTEGER_AND_POSITIVE__","___GET_SIGN_NEGATIVE__","___CMP_CHARSET__","___SUB_INTEGER_AND_POSITIVE__","___GET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__","___INDEX_OF_CURRENT_CHARSET__","___CHARSET_AT__","___ADD_INTEGER_OR_NEGATIVE__","___SUB_INTEGER__","___ADD_INTEGER__","___ADD_REP_INTEGER__","___MUL_INTEGER__","___indirect_function_table","___SAFE_CALC_INIT__","___SAFE_SET_SIGN_NEGATIVE__","___SAFE_SET_SIGN_POSITIVE__","___SAFE_SET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__","___SET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__","___IS_CURRENT_NUMBER_CHARSET__","___CMP_CURRENT_CHARSET__","_ctoa","_uctoa","_stoa","_ustoa","_itoa","_uitoa","_ltoa","_ultoa","_lltoa","_ulltoa","___SET_SIGN_POSITIVE__","___IS_SIGN_POSITIVE__","___IS_SIGN_NULL__","onRuntimeInitialized"].forEach((prop) => {
  if (!Object.getOwnPropertyDescriptor(readyPromise, prop)) {
    Object.defineProperty(readyPromise, prop, {
      get: () => abort('You are getting ' + prop + ' on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'),
      set: () => abort('You are setting ' + prop + ' on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'),
    });
  }
});

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = typeof window == 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts == 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = typeof process == 'object' && typeof process.versions == 'object' && typeof process.versions.node == 'string' && process.type != 'renderer';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (ENVIRONMENT_IS_NODE) {
  // `require()` is no-op in an ESM module, use `createRequire()` to construct
  // the require()` function.  This is only necessary for multi-environment
  // builds, `-sENVIRONMENT=node` emits a static import declaration instead.
  // TODO: Swap all `require()`'s with `import()`'s?

}

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var readAsync, readBinary;

if (ENVIRONMENT_IS_NODE) {
  if (typeof process == 'undefined' || !process.release || process.release.name !== 'node') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  var nodeVersion = process.versions.node;
  var numericVersion = nodeVersion.split('.').slice(0, 3);
  numericVersion = (numericVersion[0] * 10000) + (numericVersion[1] * 100) + (numericVersion[2].split('-')[0] * 1);
  var minVersion = 160000;
  if (numericVersion < 160000) {
    throw new Error('This emscripten-generated code requires node v16.0.0 (detected v' + nodeVersion + ')');
  }

  // These modules will usually be used on Node.js. Load them eagerly to avoid
  // the complexity of lazy-loading.
  var fs = require('fs');
  var nodePath = require('path');

  scriptDirectory = __dirname + '/';

// include: node_shell_read.js
readBinary = (filename) => {
  // We need to re-wrap `file://` strings to URLs. Normalizing isn't
  // necessary in that case, the path should already be absolute.
  filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
  var ret = fs.readFileSync(filename);
  assert(ret.buffer);
  return ret;
};

readAsync = (filename, binary = true) => {
  // See the comment in the `readBinary` function.
  filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
  return new Promise((resolve, reject) => {
    fs.readFile(filename, binary ? undefined : 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(binary ? data.buffer : data);
    });
  });
};
// end include: node_shell_read.js
  if (!Module['thisProgram'] && process.argv.length > 1) {
    thisProgram = process.argv[1].replace(/\\/g, '/');
  }

  arguments_ = process.argv.slice(2);

  // MODULARIZE will export the module in the proper place outside, we don't need to export here

  quit_ = (status, toThrow) => {
    process.exitCode = status;
    throw toThrow;
  };

} else
if (ENVIRONMENT_IS_SHELL) {

  if ((typeof process == 'object' && typeof require === 'function') || typeof window == 'object' || typeof importScripts == 'function') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document != 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptName) {
    scriptDirectory = _scriptName;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.startsWith('blob:')) {
    scriptDirectory = '';
  } else {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, '').lastIndexOf('/')+1);
  }

  if (!(typeof window == 'object' || typeof importScripts == 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  {
// include: web_or_worker_shell_read.js
if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.responseType = 'arraybuffer';
      xhr.send(null);
      return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = (url) => {
    // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
    // See https://github.com/github/fetch/pull/92#issuecomment-140665932
    // Cordova or Electron apps are typically loaded from a file:// url.
    // So use XHR on webview if URL is a file URL.
    if (isFileURI(url)) {
      return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = () => {
          if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            resolve(xhr.response);
            return;
          }
          reject(xhr.status);
        };
        xhr.onerror = reject;
        xhr.send(null);
      });
    }
    return fetch(url, { credentials: 'same-origin' })
      .then((response) => {
        if (response.ok) {
          return response.arrayBuffer();
        }
        return Promise.reject(new Error(response.status + ' : ' + response.url));
      })
  };
// end include: web_or_worker_shell_read.js
  }
} else
{
  throw new Error('environment detection error');
}

var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.error.bind(console);

// Merge back in the overrides
Object.assign(Module, moduleOverrides);
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used.
moduleOverrides = null;
checkIncomingModuleAPI();

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];legacyModuleProp('arguments', 'arguments_');

if (Module['thisProgram']) thisProgram = Module['thisProgram'];legacyModuleProp('thisProgram', 'thisProgram');

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] == 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] == 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] == 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] == 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] == 'undefined', 'Module.read option was removed');
assert(typeof Module['readAsync'] == 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] == 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] == 'undefined', 'Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)');
assert(typeof Module['TOTAL_MEMORY'] == 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
legacyModuleProp('asm', 'wasmExports');
legacyModuleProp('readAsync', 'readAsync');
legacyModuleProp('readBinary', 'readBinary');
legacyModuleProp('setWindowTitle', 'setWindowTitle');
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var FETCHFS = 'FETCHFS is no longer included by default; build with -lfetchfs.js';
var ICASEFS = 'ICASEFS is no longer included by default; build with -licasefs.js';
var JSFILEFS = 'JSFILEFS is no longer included by default; build with -ljsfilefs.js';
var OPFS = 'OPFS is no longer included by default; build with -lopfs.js';

var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';

assert(!ENVIRONMENT_IS_SHELL, 'shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.');

// end include: shell.js

// include: preamble.js
// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary = Module['wasmBinary'];legacyModuleProp('wasmBinary', 'wasmBinary');

// include: wasm2js.js
// wasm2js.js - enough of a polyfill for the WebAssembly object so that we can load
// wasm2js code that way.

// Emit "var WebAssembly" if definitely using wasm2js. Otherwise, in MAYBE_WASM2JS
// mode, we can't use a "var" since it would prevent normal wasm from working.
/** @suppress{duplicate, const} */
var
WebAssembly = {
  // Note that we do not use closure quoting (this['buffer'], etc.) on these
  // functions, as they are just meant for internal use. In other words, this is
  // not a fully general polyfill.
  /** @constructor */
  Memory: function(opts) {
    this.buffer = new ArrayBuffer(opts['initial'] * 65536);
  },

  Module: function(binary) {
    // TODO: use the binary and info somehow - right now the wasm2js output is embedded in
    // the main JS
  },

  /** @constructor */
  Instance: function(module, info) {
    // TODO: use the module somehow - right now the wasm2js output is embedded in
    // the main JS
    // This will be replaced by the actual wasm2js code.
    this.exports = (
function instantiate(info) {
function Table(ret) {
  // grow method not included; table is not growable
  ret.set = function(i, func) {
    this[i] = func;
  };
  ret.get = function(i) {
    return this[i];
  };
  return ret;
}

  var bufferView;
  var base64ReverseLookup = new Uint8Array(123/*'z'+1*/);
  for (var i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
  }
function initActiveSegments(imports) {
  base64DecodeToExistingUint8Array(bufferView, 65536, "MAAALSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweABuYW4AaW5mAE5BTgBJTkYAMDEyMzQ1Njc4OQAuAChudWxsKQAlZAAAJXUAACVsZAAAJWx1AAAlbGxkAAAlbGx1AABObyBlcnJvciBpbmZvcm1hdGlvbgBJbGxlZ2FsIGJ5dGUgc2VxdWVuY2UARG9tYWluIGVycm9yAFJlc3VsdCBub3QgcmVwcmVzZW50YWJsZQBOb3QgYSB0dHkAUGVybWlzc2lvbiBkZW5pZWQAT3BlcmF0aW9uIG5vdCBwZXJtaXR0ZWQATm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeQBObyBzdWNoIHByb2Nlc3MARmlsZSBleGlzdHMAVmFsdWUgdG9vIGxhcmdlIGZvciBkYXRhIHR5cGUATm8gc3BhY2UgbGVmdCBvbiBkZXZpY2UAT3V0IG9mIG1lbW9yeQBSZXNvdXJjZSBidXN5AEludGVycnVwdGVkIHN5c3RlbSBjYWxsAFJlc291cmNlIHRlbXBvcmFyaWx5IHVuYXZhaWxhYmxlAEludmFsaWQgc2VlawBDcm9zcy1kZXZpY2UgbGluawBSZWFkLW9ubHkgZmlsZSBzeXN0ZW0ARGlyZWN0b3J5IG5vdCBlbXB0eQBDb25uZWN0aW9uIHJlc2V0IGJ5IHBlZXIAT3BlcmF0aW9uIHRpbWVkIG91dABDb25uZWN0aW9uIHJlZnVzZWQASG9zdCBpcyBkb3duAEhvc3QgaXMgdW5yZWFjaGFibGUAQWRkcmVzcyBpbiB1c2UAQnJva2VuIHBpcGUASS9PIGVycm9yAE5vIHN1Y2ggZGV2aWNlIG9yIGFkZHJlc3MAQmxvY2sgZGV2aWNlIHJlcXVpcmVkAE5vIHN1Y2ggZGV2aWNlAE5vdCBhIGRpcmVjdG9yeQBJcyBhIGRpcmVjdG9yeQBUZXh0IGZpbGUgYnVzeQBFeGVjIGZvcm1hdCBlcnJvcgBJbnZhbGlkIGFyZ3VtZW50AEFyZ3VtZW50IGxpc3QgdG9vIGxvbmcAU3ltYm9saWMgbGluayBsb29wAEZpbGVuYW1lIHRvbyBsb25nAFRvbyBtYW55IG9wZW4gZmlsZXMgaW4gc3lzdGVtAE5vIGZpbGUgZGVzY3JpcHRvcnMgYXZhaWxhYmxlAEJhZCBmaWxlIGRlc2NyaXB0b3IATm8gY2hpbGQgcHJvY2VzcwBCYWQgYWRkcmVzcwBGaWxlIHRvbyBsYXJnZQBUb28gbWFueSBsaW5rcwBObyBsb2NrcyBhdmFpbGFibGUAUmVzb3VyY2UgZGVhZGxvY2sgd291bGQgb2NjdXIAU3RhdGUgbm90IHJlY292ZXJhYmxlAFByZXZpb3VzIG93bmVyIGRpZWQAT3BlcmF0aW9uIGNhbmNlbGVkAEZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZABObyBtZXNzYWdlIG9mIGRlc2lyZWQgdHlwZQBJZGVudGlmaWVyIHJlbW92ZWQARGV2aWNlIG5vdCBhIHN0cmVhbQBObyBkYXRhIGF2YWlsYWJsZQBEZXZpY2UgdGltZW91dABPdXQgb2Ygc3RyZWFtcyByZXNvdXJjZXMATGluayBoYXMgYmVlbiBzZXZlcmVkAFByb3RvY29sIGVycm9yAEJhZCBtZXNzYWdlAEZpbGUgZGVzY3JpcHRvciBpbiBiYWQgc3RhdGUATm90IGEgc29ja2V0AERlc3RpbmF0aW9uIGFkZHJlc3MgcmVxdWlyZWQATWVzc2FnZSB0b28gbGFyZ2UAUHJvdG9jb2wgd3JvbmcgdHlwZSBmb3Igc29ja2V0AFByb3RvY29sIG5vdCBhdmFpbGFibGUAUHJvdG9jb2wgbm90IHN1cHBvcnRlZABTb2NrZXQgdHlwZSBub3Qgc3VwcG9ydGVkAE5vdCBzdXBwb3J0ZWQAUHJvdG9jb2wgZmFtaWx5IG5vdCBzdXBwb3J0ZWQAQWRkcmVzcyBmYW1pbHkgbm90IHN1cHBvcnRlZCBieSBwcm90b2NvbABBZGRyZXNzIG5vdCBhdmFpbGFibGUATmV0d29yayBpcyBkb3duAE5ldHdvcmsgdW5yZWFjaGFibGUAQ29ubmVjdGlvbiByZXNldCBieSBuZXR3b3JrAENvbm5lY3Rpb24gYWJvcnRlZABObyBidWZmZXIgc3BhY2UgYXZhaWxhYmxlAFNvY2tldCBpcyBjb25uZWN0ZWQAU29ja2V0IG5vdCBjb25uZWN0ZWQAQ2Fubm90IHNlbmQgYWZ0ZXIgc29ja2V0IHNodXRkb3duAE9wZXJhdGlvbiBhbHJlYWR5IGluIHByb2dyZXNzAE9wZXJhdGlvbiBpbiBwcm9ncmVzcwBTdGFsZSBmaWxlIGhhbmRsZQBSZW1vdGUgSS9PIGVycm9yAFF1b3RhIGV4Y2VlZGVkAE5vIG1lZGl1bSBmb3VuZABXcm9uZyBtZWRpdW0gdHlwZQBNdWx0aWhvcCBhdHRlbXB0ZWQAUmVxdWlyZWQga2V5IG5vdCBhdmFpbGFibGUAS2V5IGhhcyBleHBpcmVkAEtleSBoYXMgYmVlbiByZXZva2VkAEtleSB3YXMgcmVqZWN0ZWQgYnkgc2VydmljZQAAAAAAAAClAlsA8AG1BYwFJQGDBh0DlAT/AMcDMQMLBrwBjwF/A8oEKwDaBq8AQgNOA9wBDgQVAKEGDQGUAgsCOAZkArwC/wJdA+cECwfPAssF7wXbBeECHgZFAoUAggJsA28E8QDzAxgF2QDaA0wGVAJ7AZ0DvQQAAFEAFQK7ALMDbQD/AYUELwX5BDgAZQFGAZ8AtwaoAXMCUwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhBAAAAAAAAAAALwIAAAAAAAAAAAAAAAAAAAAAAAAAADUERwRWBAAAAAAAAAAAAAAAAAAAAACgBAAAAAAAAAAAAAAAAAAAAAAAAEYFYAVuBWEGAADPAQAAAAAAAAAAyQbpBvkGHgc5B0kHXgcAAAAAAAAAAAAAAAAZAAsAGRkZAAAAAAUAAAAAAAAJAAAAAAsAAAAAAAAAABkACgoZGRkDCgcAAQAJCxgAAAkGCwAACwAGGQAAABkZGQAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAZAAsNGRkZAA0AAAIACQ4AAAAJAA4AAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAEwAAAAATAAAAAAkMAAAAAAAMAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAA8AAAAEDwAAAAAJEAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAARAAAAABEAAAAACRIAAAAAABIAABIAABoAAAAaGhoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgAAABoaGgAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAABcAAAAAFwAAAAAJFAAAAAAAFAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAAAAAAAAAAAAAAAVAAAAABUAAAAACRYAAAAAABYAABYAADAxMjM0NTY3ODlBQkNERUY=");
  base64DecodeToExistingUint8Array(bufferView, 68352, "BQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAMAAAB4DAEAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAP//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsBAHAOAQA=");
}

  var scratchBuffer = new ArrayBuffer(16);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function wasm2js_scratch_load_i32(index) {
    return i32ScratchView[index];
  }
      
  function wasm2js_scratch_store_i32(index, value) {
    i32ScratchView[index] = value;
  }
      
  function wasm2js_scratch_load_f64() {
    return f64ScratchView[0];
  }
      
  function wasm2js_scratch_store_f64(value) {
    f64ScratchView[0] = value;
  }
      function wasm2js_trap() { throw new Error('abort'); }

function asmFunc(imports) {
 var buffer = new ArrayBuffer(16908288);
 var HEAP8 = new Int8Array(buffer);
 var HEAP16 = new Int16Array(buffer);
 var HEAP32 = new Int32Array(buffer);
 var HEAPU8 = new Uint8Array(buffer);
 var HEAPU16 = new Uint16Array(buffer);
 var HEAPU32 = new Uint32Array(buffer);
 var HEAPF32 = new Float32Array(buffer);
 var HEAPF64 = new Float64Array(buffer);
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var env = imports.env;
 var fimport$0 = env._abort_js;
 var fimport$1 = env._emscripten_memcpy_js;
 var wasi_snapshot_preview1 = imports.wasi_snapshot_preview1;
 var fimport$2 = wasi_snapshot_preview1.fd_close;
 var fimport$3 = wasi_snapshot_preview1.fd_write;
 var fimport$4 = env.emscripten_resize_heap;
 var fimport$5 = wasi_snapshot_preview1.fd_seek;
 var global$0 = 65536;
 var global$1 = 0;
 var global$2 = 0;
 var global$3 = 0;
 var __wasm_intrinsics_temp_i64 = 0;
 var __wasm_intrinsics_temp_i64$hi = 0;
 var i64toi32_i32$HIGH_BITS = 0;
 // EMSCRIPTEN_START_FUNCS
;
 function $0() {
  $110();
  $65();
 }
 
 function $1($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $111_1 = 0, $119_1 = 0, $129 = 0, $141 = 0, $251 = 0, $288 = 0;
  $4_1 = global$0 - 112 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 108 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 104 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 100 | 0) >> 2] = 0;
  HEAP32[($4_1 + 96 | 0) >> 2] = 0;
  HEAP32[($4_1 + 92 | 0) >> 2] = 0;
  HEAP32[($4_1 + 88 | 0) >> 2] = 0;
  HEAP32[($4_1 + 84 | 0) >> 2] = 0;
  HEAP32[($4_1 + 80 | 0) >> 2] = 0;
  HEAP32[($4_1 + 76 | 0) >> 2] = 0;
  HEAP32[($4_1 + 72 | 0) >> 2] = 0;
  HEAP32[($4_1 + 68 | 0) >> 2] = 0;
  HEAP32[($4_1 + 64 | 0) >> 2] = 0;
  HEAP32[($4_1 + 60 | 0) >> 2] = 0;
  HEAP32[($4_1 + 56 | 0) >> 2] = 0;
  HEAP32[($4_1 + 52 | 0) >> 2] = 0;
  HEAP32[($4_1 + 48 | 0) >> 2] = 0;
  label$1 : {
   label$2 : {
    if (!((HEAP32[($4_1 + 108 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$2
    }
    if ((HEAP32[($4_1 + 104 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$1
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 68 | 0) >> 2] = $39(HEAP32[($4_1 + 108 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 64 | 0) >> 2] = $39(HEAP32[($4_1 + 104 | 0) >> 2] | 0 | 0) | 0;
  label$3 : {
   label$4 : {
    if (!(HEAP32[($4_1 + 68 | 0) >> 2] | 0)) {
     break label$4
    }
    if (HEAP32[($4_1 + 64 | 0) >> 2] | 0) {
     break label$3
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 100 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 108 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 92 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 64 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 104 | 0) >> 2] | 0 | 0) | 0;
  label$5 : {
   label$6 : {
    if (!((HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$6
    }
    if ((HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$5
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 96 | 0) >> 2] = $17((HEAP32[($4_1 + 100 | 0) >> 2] | 0) - (HEAP32[($4_1 + 108 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 108 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 88 | 0) >> 2] = $17((HEAP32[($4_1 + 92 | 0) >> 2] | 0) - (HEAP32[($4_1 + 104 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 64 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 104 | 0) >> 2] | 0 | 0) | 0;
  label$7 : {
   label$8 : {
    if (!((HEAP32[($4_1 + 96 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$8
    }
    if ((HEAP32[($4_1 + 88 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$7
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 60 | 0) >> 2] = ((HEAP32[($4_1 + 96 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 100 | 0) >> 2] | 0) | 0;
  HEAP32[($4_1 + 56 | 0) >> 2] = ((HEAP32[($4_1 + 88 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 92 | 0) >> 2] | 0) | 0;
  label$9 : {
   label$10 : {
    if (!(HEAP32[($4_1 + 60 | 0) >> 2] | 0)) {
     break label$10
    }
    if (HEAP32[($4_1 + 56 | 0) >> 2] | 0) {
     break label$9
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 84 | 0) >> 2] = HEAP32[($4_1 + 108 | 0) >> 2] | 0;
  HEAP32[($4_1 + 76 | 0) >> 2] = HEAP32[($4_1 + 104 | 0) >> 2] | 0;
  HEAP32[($4_1 + 80 | 0) >> 2] = (HEAP32[($4_1 + 100 | 0) >> 2] | 0) + -1 | 0;
  HEAP32[($4_1 + 72 | 0) >> 2] = (HEAP32[($4_1 + 92 | 0) >> 2] | 0) + -1 | 0;
  HEAP32[($4_1 + 52 | 0) >> 2] = ((HEAP32[($4_1 + 80 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 84 | 0) >> 2] | 0) | 0;
  HEAP32[($4_1 + 48 | 0) >> 2] = ((HEAP32[($4_1 + 72 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 76 | 0) >> 2] | 0) | 0;
  HEAP8[($4_1 + 47 | 0) >> 0] = 0;
  HEAP8[($4_1 + 46 | 0) >> 0] = 0;
  HEAP8[($4_1 + 45 | 0) >> 0] = 0;
  HEAP8[($4_1 + 44 | 0) >> 0] = 0;
  $111_1 = 24;
  HEAP8[($4_1 + 45 | 0) >> 0] = ($15(((HEAPU8[(HEAP32[($4_1 + 100 | 0) >> 2] | 0) >> 0] | 0) << $111_1 | 0) >> $111_1 | 0 | 0) | 0) & 1 | 0;
  $119_1 = 24;
  HEAP8[($4_1 + 44 | 0) >> 0] = ($15(((HEAPU8[(HEAP32[($4_1 + 92 | 0) >> 2] | 0) >> 0] | 0) << $119_1 | 0) >> $119_1 | 0 | 0) | 0) & 1 | 0;
  $129 = 0;
  label$11 : {
   if ((HEAPU8[($4_1 + 45 | 0) >> 0] | 0) & 1 | 0) {
    break label$11
   }
   $129 = $36(0 | 0, HEAP32[($4_1 + 52 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 84 | 0) >> 2] | 0 | 0) | 0;
  }
  HEAP8[($4_1 + 47 | 0) >> 0] = $129 & 1 | 0;
  $141 = 0;
  label$12 : {
   if ((HEAPU8[($4_1 + 44 | 0) >> 0] | 0) & 1 | 0) {
    break label$12
   }
   $141 = $36(0 | 0, HEAP32[($4_1 + 48 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 76 | 0) >> 2] | 0 | 0) | 0;
  }
  HEAP8[($4_1 + 46 | 0) >> 0] = $141 & 1 | 0;
  label$13 : {
   if ((HEAPU8[($4_1 + 47 | 0) >> 0] | 0) & 1 | 0) {
    break label$13
   }
   if ((HEAPU8[($4_1 + 46 | 0) >> 0] | 0) & 1 | 0) {
    break label$13
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 40 | 0) >> 2] = 0;
  HEAP32[($4_1 + 36 | 0) >> 2] = 0;
  HEAP32[($4_1 + 32 | 0) >> 2] = 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = 0;
  HEAP32[($4_1 + 20 | 0) >> 2] = 0;
  HEAP32[($4_1 + 16 | 0) >> 2] = 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = 0;
  HEAP8[($4_1 + 11 | 0) >> 0] = 0;
  HEAP32[($4_1 + 4 | 0) >> 2] = -2;
  label$14 : {
   label$15 : {
    label$16 : {
     label$17 : {
      label$18 : {
       if ((HEAPU8[($4_1 + 47 | 0) >> 0] | 0) & 1 | 0) {
        break label$18
       }
       if (!((HEAPU8[($4_1 + 46 | 0) >> 0] | 0) & 1 | 0)) {
        break label$18
       }
       break label$17;
      }
      label$19 : {
       if (!((HEAPU8[($4_1 + 47 | 0) >> 0] | 0) & 1 | 0)) {
        break label$19
       }
       if ((HEAPU8[($4_1 + 46 | 0) >> 0] | 0) & 1 | 0) {
        break label$19
       }
       break label$16;
      }
      label$20 : {
       if (!((HEAPU8[($4_1 + 47 | 0) >> 0] | 0) & 1 | 0)) {
        break label$20
       }
       if (!((HEAPU8[($4_1 + 46 | 0) >> 0] | 0) & 1 | 0)) {
        break label$20
       }
       break label$15;
      }
     }
     HEAP32[($4_1 + 40 | 0) >> 2] = $2(HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
     HEAP32[($4_1 + 28 | 0) >> 2] = $33() | 0;
     break label$14;
    }
    HEAP32[($4_1 + 40 | 0) >> 2] = $2(HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
    HEAP32[($4_1 + 28 | 0) >> 2] = $31() | 0;
    break label$14;
   }
   HEAP32[($4_1 + 4 | 0) >> 2] = $20(HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
   label$21 : {
    label$22 : {
     if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) > (0 | 0) & 1 | 0)) {
      break label$22
     }
     HEAP32[($4_1 + 40 | 0) >> 2] = $3(HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
     HEAP32[($4_1 + 28 | 0) >> 2] = $31() | 0;
     break label$21;
    }
    label$23 : {
     label$24 : {
      if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) < (0 | 0) & 1 | 0)) {
       break label$24
      }
      HEAP32[($4_1 + 40 | 0) >> 2] = $3(HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0) | 0;
      HEAP32[($4_1 + 28 | 0) >> 2] = $33() | 0;
      break label$23;
     }
     label$25 : {
      if (HEAP32[($4_1 + 4 | 0) >> 2] | 0) {
       break label$25
      }
      HEAP32[($4_1 + 40 | 0) >> 2] = $3(HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
      HEAP32[($4_1 + 28 | 0) >> 2] = $33() | 0;
     }
    }
   }
  }
  label$26 : {
   if ((HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
    break label$26
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 20 | 0) >> 2] = $39(HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 36 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0;
  label$27 : {
   if ((HEAP32[($4_1 + 36 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
    break label$27
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 32 | 0) >> 2] = $17((HEAP32[($4_1 + 36 | 0) >> 2] | 0) - (HEAP32[($4_1 + 40 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0;
  label$28 : {
   if ((HEAP32[($4_1 + 32 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
    break label$28
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 16 | 0) >> 2] = ((HEAP32[($4_1 + 32 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 36 | 0) >> 2] | 0) | 0;
  $251 = 24;
  HEAP8[($4_1 + 11 | 0) >> 0] = ($15(((HEAPU8[(HEAP32[($4_1 + 36 | 0) >> 2] | 0) >> 0] | 0) << $251 | 0) >> $251 | 0 | 0) | 0) & 1 | 0;
  label$29 : {
   label$30 : {
    if ((HEAPU8[($4_1 + 11 | 0) >> 0] | 0) & 1 | 0) {
     break label$30
    }
    HEAP32[($4_1 + 12 | 0) >> 2] = $39(HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0) | 0;
    break label$29;
   }
   HEAP32[($4_1 + 12 | 0) >> 2] = 0;
  }
  HEAP32[($4_1 + 24 | 0) >> 2] = $104(((HEAP32[($4_1 + 12 | 0) >> 2] | 0) + (HEAP32[($4_1 + 16 | 0) >> 2] | 0) | 0) + 1 | 0 | 0, 1 | 0) | 0;
  label$31 : {
   if (!(HEAP32[($4_1 + 12 | 0) >> 2] | 0)) {
    break label$31
   }
   $41(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  }
  $41((HEAP32[($4_1 + 24 | 0) >> 2] | 0) + (HEAP32[($4_1 + 12 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 36 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 16 | 0) >> 2] | 0 | 0) | 0;
  HEAP8[((HEAP32[($4_1 + 24 | 0) >> 2] | 0) + ((HEAP32[($4_1 + 12 | 0) >> 2] | 0) + (HEAP32[($4_1 + 16 | 0) >> 2] | 0) | 0) | 0) >> 0] = 0;
  $103(HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0);
  HEAP32[($4_1 + 40 | 0) >> 2] = 0;
  HEAP32[($4_1 + 40 | 0) >> 2] = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $288 = HEAP32[($4_1 + 40 | 0) >> 2] | 0;
  global$0 = $4_1 + 112 | 0;
  return $288 | 0;
 }
 
 function $2($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $99_1 = 0, $131 = 0, $135 = 0, $146 = 0, $150 = 0, $154 = 0, $158 = 0, $181 = 0, $188 = 0, $190 = 0, $196 = 0, $220 = 0, $235 = 0, $238 = 0, $294 = 0;
  $4_1 = global$0 - 96 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 92 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 88 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 84 | 0) >> 2] = 0;
  HEAP32[($4_1 + 80 | 0) >> 2] = 0;
  HEAP32[($4_1 + 76 | 0) >> 2] = 0;
  HEAP32[($4_1 + 72 | 0) >> 2] = 0;
  HEAP32[($4_1 + 68 | 0) >> 2] = 0;
  HEAP32[($4_1 + 64 | 0) >> 2] = 0;
  HEAP32[($4_1 + 60 | 0) >> 2] = 0;
  HEAP32[($4_1 + 56 | 0) >> 2] = 0;
  HEAP32[($4_1 + 52 | 0) >> 2] = 0;
  HEAP32[($4_1 + 48 | 0) >> 2] = 0;
  HEAP32[($4_1 + 44 | 0) >> 2] = 0;
  HEAP32[($4_1 + 40 | 0) >> 2] = 0;
  label$1 : {
   label$2 : {
    if (!((HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$2
    }
    if ((HEAP32[($4_1 + 88 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$1
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 52 | 0) >> 2] = $39(HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 48 | 0) >> 2] = $39(HEAP32[($4_1 + 88 | 0) >> 2] | 0 | 0) | 0;
  label$3 : {
   label$4 : {
    if (!(HEAP32[($4_1 + 52 | 0) >> 2] | 0)) {
     break label$4
    }
    if (HEAP32[($4_1 + 48 | 0) >> 2] | 0) {
     break label$3
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 76 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 52 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 72 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 48 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 88 | 0) >> 2] | 0 | 0) | 0;
  label$5 : {
   label$6 : {
    if (!((HEAP32[($4_1 + 76 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$6
    }
    if ((HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$5
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 68 | 0) >> 2] = $17((HEAP32[($4_1 + 76 | 0) >> 2] | 0) - (HEAP32[($4_1 + 92 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 52 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 64 | 0) >> 2] = $17((HEAP32[($4_1 + 72 | 0) >> 2] | 0) - (HEAP32[($4_1 + 88 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 48 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 88 | 0) >> 2] | 0 | 0) | 0;
  label$7 : {
   label$8 : {
    if (!((HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$8
    }
    if ((HEAP32[($4_1 + 64 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$7
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 44 | 0) >> 2] = ((HEAP32[($4_1 + 68 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 76 | 0) >> 2] | 0) | 0;
  HEAP32[($4_1 + 40 | 0) >> 2] = ((HEAP32[($4_1 + 64 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 72 | 0) >> 2] | 0) | 0;
  label$9 : {
   label$10 : {
    if (!(HEAP32[($4_1 + 44 | 0) >> 2] | 0)) {
     break label$10
    }
    if (HEAP32[($4_1 + 40 | 0) >> 2] | 0) {
     break label$9
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 36 | 0) >> 2] = 0;
  HEAP32[($4_1 + 32 | 0) >> 2] = 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = 0;
  HEAP32[($4_1 + 20 | 0) >> 2] = 0;
  HEAP32[($4_1 + 16 | 0) >> 2] = 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = 0;
  HEAP32[($4_1 + 8 | 0) >> 2] = 0;
  label$11 : {
   label$12 : {
    if (!((HEAP32[($4_1 + 44 | 0) >> 2] | 0) >>> 0 > (HEAP32[($4_1 + 40 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
     break label$12
    }
    $99_1 = HEAP32[($4_1 + 44 | 0) >> 2] | 0;
    break label$11;
   }
   $99_1 = HEAP32[($4_1 + 40 | 0) >> 2] | 0;
  }
  HEAP32[($4_1 + 12 | 0) >> 2] = $99_1 + 1 | 0;
  HEAP32[($4_1 + 36 | 0) >> 2] = $104((HEAP32[($4_1 + 12 | 0) >> 2] | 0) + 1 | 0 | 0, 1 | 0) | 0;
  HEAP8[($4_1 + 7 | 0) >> 0] = 0;
  HEAP8[($4_1 + 6 | 0) >> 0] = 0;
  HEAP32[($4_1 + 84 | 0) >> 2] = $10() | 0;
  HEAP32[($4_1 + 80 | 0) >> 2] = $39(HEAP32[($4_1 + 84 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 32 | 0) >> 2] = HEAP32[($4_1 + 36 | 0) >> 2] | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = ((HEAP32[($4_1 + 36 | 0) >> 2] | 0) + (HEAP32[($4_1 + 12 | 0) >> 2] | 0) | 0) + -1 | 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  HEAP32[($4_1 + 60 | 0) >> 2] = HEAP32[($4_1 + 68 | 0) >> 2] | 0;
  HEAP32[($4_1 + 56 | 0) >> 2] = HEAP32[($4_1 + 64 | 0) >> 2] | 0;
  label$13 : while (1) {
   label$14 : {
    label$15 : {
     if (!((HEAP32[($4_1 + 60 | 0) >> 2] | 0) >>> 0 >= (HEAP32[($4_1 + 76 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
      break label$15
     }
     $131 = 24;
     $135 = $18(0 | 0, ((HEAPU8[(HEAP32[($4_1 + 60 | 0) >> 2] | 0) >> 0] | 0) << $131 | 0) >> $131 | 0 | 0) | 0;
     break label$14;
    }
    $135 = 0;
   }
   HEAP8[($4_1 + 7 | 0) >> 0] = $135;
   label$16 : {
    label$17 : {
     if (!((HEAP32[($4_1 + 56 | 0) >> 2] | 0) >>> 0 >= (HEAP32[($4_1 + 72 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
      break label$17
     }
     $146 = 24;
     $150 = $18(0 | 0, ((HEAPU8[(HEAP32[($4_1 + 56 | 0) >> 2] | 0) >> 0] | 0) << $146 | 0) >> $146 | 0 | 0) | 0;
     break label$16;
    }
    $150 = 0;
   }
   HEAP8[($4_1 + 6 | 0) >> 0] = $150;
   $154 = 24;
   $158 = 24;
   HEAP8[(HEAP32[($4_1 + 24 | 0) >> 2] | 0) >> 0] = (((HEAPU8[($4_1 + 7 | 0) >> 0] | 0) << $154 | 0) >> $154 | 0) + (((HEAPU8[($4_1 + 6 | 0) >> 0] | 0) << $158 | 0) >> $158 | 0) | 0;
   label$18 : {
    if (!((HEAP32[($4_1 + 24 | 0) >> 2] | 0) >>> 0 > (HEAP32[($4_1 + 32 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
     break label$18
    }
    HEAP32[($4_1 + 60 | 0) >> 2] = (HEAP32[($4_1 + 60 | 0) >> 2] | 0) + -1 | 0;
    HEAP32[($4_1 + 56 | 0) >> 2] = (HEAP32[($4_1 + 56 | 0) >> 2] | 0) + -1 | 0;
    HEAP32[($4_1 + 24 | 0) >> 2] = (HEAP32[($4_1 + 24 | 0) >> 2] | 0) + -1 | 0;
    continue label$13;
   }
   break label$13;
  };
  HEAP32[($4_1 + 20 | 0) >> 2] = $33() | 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  label$19 : while (1) {
   $181 = 24;
   $188 = (HEAP32[($4_1 + 24 | 0) >> 2] | 0) + -1 | 0;
   $190 = 24;
   HEAP8[$188 >> 0] = (((HEAPU8[$188 >> 0] | 0) << $190 | 0) >> $190 | 0) + (((((HEAPU8[(HEAP32[($4_1 + 24 | 0) >> 2] | 0) >> 0] | 0) << $181 | 0) >> $181 | 0) >>> 0) / ((HEAP32[($4_1 + 80 | 0) >> 2] | 0) >>> 0) | 0) | 0;
   $196 = 24;
   HEAP8[(HEAP32[($4_1 + 24 | 0) >> 2] | 0) >> 0] = ((((HEAPU8[(HEAP32[($4_1 + 24 | 0) >> 2] | 0) >> 0] | 0) << $196 | 0) >> $196 | 0) >>> 0) % ((HEAP32[($4_1 + 80 | 0) >> 2] | 0) >>> 0) | 0;
   label$20 : {
    if (!((HEAP32[($4_1 + 24 | 0) >> 2] | 0) >>> 0 > ((HEAP32[($4_1 + 32 | 0) >> 2] | 0) + 1 | 0) >>> 0 & 1 | 0)) {
     break label$20
    }
    HEAP32[($4_1 + 24 | 0) >> 2] = (HEAP32[($4_1 + 24 | 0) >> 2] | 0) + -1 | 0;
    continue label$19;
   }
   break label$19;
  };
  HEAP32[($4_1 + 24 | 0) >> 2] = HEAP32[($4_1 + 32 | 0) >> 2] | 0;
  label$21 : {
   label$22 : while (1) {
    label$23 : {
     label$24 : {
      if (!((HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0) != (HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0) & 1 | 0)) {
       break label$24
      }
      $220 = 24;
      if (((HEAPU8[(HEAP32[($4_1 + 24 | 0) >> 2] | 0) >> 0] | 0) << $220 | 0) >> $220 | 0) {
       break label$24
      }
      break label$23;
     }
     break label$21;
    }
    label$25 : {
     if (!((HEAP32[($4_1 + 24 | 0) >> 2] | 0) >>> 0 < (HEAP32[($4_1 + 28 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
      break label$25
     }
     HEAP32[($4_1 + 24 | 0) >> 2] = (HEAP32[($4_1 + 24 | 0) >> 2] | 0) + 1 | 0;
     continue label$22;
    }
    break label$22;
   };
  }
  HEAP32[($4_1 + 32 | 0) >> 2] = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  label$26 : while (1) {
   $235 = 24;
   $238 = $13(((HEAPU8[(HEAP32[($4_1 + 24 | 0) >> 2] | 0) >> 0] | 0) << $235 | 0) >> $235 | 0 | 0) | 0;
   HEAP8[(HEAP32[($4_1 + 24 | 0) >> 2] | 0) >> 0] = $238;
   label$27 : {
    if (!((HEAP32[($4_1 + 24 | 0) >> 2] | 0) >>> 0 > (HEAP32[($4_1 + 32 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
     break label$27
    }
    HEAP32[($4_1 + 24 | 0) >> 2] = (HEAP32[($4_1 + 24 | 0) >> 2] | 0) + -1 | 0;
    continue label$26;
   }
   break label$26;
  };
  label$28 : {
   label$29 : {
    if (!((HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$29
    }
    HEAP32[($4_1 + 8 | 0) >> 2] = $39(HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0) | 0;
    break label$28;
   }
   HEAP32[($4_1 + 8 | 0) >> 2] = 0;
  }
  HEAP32[($4_1 + 12 | 0) >> 2] = ((HEAP32[($4_1 + 8 | 0) >> 2] | 0) + (((HEAP32[($4_1 + 28 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 32 | 0) >> 2] | 0) | 0) | 0) + 1 | 0;
  HEAP32[($4_1 + 16 | 0) >> 2] = $104(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, 1 | 0) | 0;
  label$30 : {
   if (!(HEAP32[($4_1 + 12 | 0) >> 2] | 0)) {
    break label$30
   }
   $41(HEAP32[($4_1 + 16 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0;
  }
  $41((HEAP32[($4_1 + 16 | 0) >> 2] | 0) + (HEAP32[($4_1 + 8 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 32 | 0) >> 2] | 0 | 0, ((HEAP32[($4_1 + 28 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 32 | 0) >> 2] | 0) | 0 | 0) | 0;
  HEAP8[((HEAP32[($4_1 + 16 | 0) >> 2] | 0) + ((HEAP32[($4_1 + 8 | 0) >> 2] | 0) + (((HEAP32[($4_1 + 28 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 32 | 0) >> 2] | 0) | 0) | 0) | 0) >> 0] = 0;
  $103(HEAP32[($4_1 + 36 | 0) >> 2] | 0 | 0);
  HEAP32[($4_1 + 36 | 0) >> 2] = 0;
  HEAP32[($4_1 + 36 | 0) >> 2] = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
  $294 = HEAP32[($4_1 + 36 | 0) >> 2] | 0;
  global$0 = $4_1 + 96 | 0;
  return $294 | 0;
 }
 
 function $3($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $100_1 = 0, $125 = 0, $129 = 0, $140 = 0, $144 = 0, $148 = 0, $152 = 0, $177 = 0, $191 = 0, $200 = 0, $209 = 0, $226 = 0, $236 = 0, $245 = 0, $255 = 0, $264 = 0, $277 = 0, $305 = 0, $314 = 0, $324 = 0, $359 = 0, $382 = 0, $385 = 0, $439 = 0;
  $4_1 = global$0 - 96 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 92 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 88 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 84 | 0) >> 2] = $10() | 0;
  HEAP32[($4_1 + 80 | 0) >> 2] = $39(HEAP32[($4_1 + 84 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 76 | 0) >> 2] = 0;
  HEAP32[($4_1 + 72 | 0) >> 2] = 0;
  HEAP32[($4_1 + 68 | 0) >> 2] = 0;
  HEAP32[($4_1 + 64 | 0) >> 2] = 0;
  HEAP32[($4_1 + 60 | 0) >> 2] = 0;
  HEAP32[($4_1 + 56 | 0) >> 2] = 0;
  HEAP32[($4_1 + 52 | 0) >> 2] = 0;
  HEAP32[($4_1 + 48 | 0) >> 2] = 0;
  HEAP32[($4_1 + 44 | 0) >> 2] = 0;
  HEAP32[($4_1 + 40 | 0) >> 2] = 0;
  label$1 : {
   label$2 : {
    if (!((HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$2
    }
    if ((HEAP32[($4_1 + 88 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$1
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 52 | 0) >> 2] = $39(HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 48 | 0) >> 2] = $39(HEAP32[($4_1 + 88 | 0) >> 2] | 0 | 0) | 0;
  label$3 : {
   label$4 : {
    if (!(HEAP32[($4_1 + 52 | 0) >> 2] | 0)) {
     break label$4
    }
    if (HEAP32[($4_1 + 48 | 0) >> 2] | 0) {
     break label$3
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 76 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 52 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 72 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 48 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 88 | 0) >> 2] | 0 | 0) | 0;
  label$5 : {
   label$6 : {
    if (!((HEAP32[($4_1 + 76 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$6
    }
    if ((HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$5
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 68 | 0) >> 2] = $17((HEAP32[($4_1 + 76 | 0) >> 2] | 0) - (HEAP32[($4_1 + 92 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 52 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 64 | 0) >> 2] = $17((HEAP32[($4_1 + 72 | 0) >> 2] | 0) - (HEAP32[($4_1 + 88 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 48 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 88 | 0) >> 2] | 0 | 0) | 0;
  label$7 : {
   label$8 : {
    if (!((HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$8
    }
    if ((HEAP32[($4_1 + 64 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$7
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 44 | 0) >> 2] = ((HEAP32[($4_1 + 68 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 76 | 0) >> 2] | 0) | 0;
  HEAP32[($4_1 + 40 | 0) >> 2] = ((HEAP32[($4_1 + 64 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 72 | 0) >> 2] | 0) | 0;
  label$9 : {
   label$10 : {
    if (!(HEAP32[($4_1 + 44 | 0) >> 2] | 0)) {
     break label$10
    }
    if (HEAP32[($4_1 + 40 | 0) >> 2] | 0) {
     break label$9
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 36 | 0) >> 2] = 0;
  HEAP32[($4_1 + 32 | 0) >> 2] = 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = 0;
  HEAP32[($4_1 + 20 | 0) >> 2] = 0;
  HEAP32[($4_1 + 16 | 0) >> 2] = 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = 0;
  HEAP32[($4_1 + 8 | 0) >> 2] = 0;
  label$11 : {
   label$12 : {
    if (!((HEAP32[($4_1 + 44 | 0) >> 2] | 0) >>> 0 > (HEAP32[($4_1 + 40 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
     break label$12
    }
    $100_1 = HEAP32[($4_1 + 44 | 0) >> 2] | 0;
    break label$11;
   }
   $100_1 = HEAP32[($4_1 + 40 | 0) >> 2] | 0;
  }
  HEAP32[($4_1 + 36 | 0) >> 2] = $100_1;
  HEAP32[($4_1 + 28 | 0) >> 2] = $104((HEAP32[($4_1 + 36 | 0) >> 2] | 0) + 1 | 0 | 0, 1 | 0) | 0;
  HEAP8[($4_1 + 7 | 0) >> 0] = 0;
  HEAP8[($4_1 + 6 | 0) >> 0] = 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  HEAP32[($4_1 + 20 | 0) >> 2] = (HEAP32[($4_1 + 28 | 0) >> 2] | 0) + (HEAP32[($4_1 + 36 | 0) >> 2] | 0) | 0;
  HEAP32[($4_1 + 16 | 0) >> 2] = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
  HEAP32[($4_1 + 60 | 0) >> 2] = HEAP32[($4_1 + 68 | 0) >> 2] | 0;
  HEAP32[($4_1 + 56 | 0) >> 2] = HEAP32[($4_1 + 64 | 0) >> 2] | 0;
  label$13 : while (1) {
   label$14 : {
    label$15 : {
     if (!((HEAP32[($4_1 + 60 | 0) >> 2] | 0) >>> 0 >= (HEAP32[($4_1 + 76 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
      break label$15
     }
     $125 = 24;
     $129 = $18(0 | 0, ((HEAPU8[(HEAP32[($4_1 + 60 | 0) >> 2] | 0) >> 0] | 0) << $125 | 0) >> $125 | 0 | 0) | 0;
     break label$14;
    }
    $129 = 0;
   }
   HEAP8[($4_1 + 7 | 0) >> 0] = $129;
   label$16 : {
    label$17 : {
     if (!((HEAP32[($4_1 + 56 | 0) >> 2] | 0) >>> 0 >= (HEAP32[($4_1 + 72 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
      break label$17
     }
     $140 = 24;
     $144 = $18(0 | 0, ((HEAPU8[(HEAP32[($4_1 + 56 | 0) >> 2] | 0) >> 0] | 0) << $140 | 0) >> $140 | 0 | 0) | 0;
     break label$16;
    }
    $144 = 0;
   }
   HEAP8[($4_1 + 6 | 0) >> 0] = $144;
   $148 = 24;
   $152 = 24;
   HEAP8[(HEAP32[($4_1 + 16 | 0) >> 2] | 0) >> 0] = (((HEAPU8[($4_1 + 7 | 0) >> 0] | 0) << $148 | 0) >> $148 | 0) - (((HEAPU8[($4_1 + 6 | 0) >> 0] | 0) << $152 | 0) >> $152 | 0) | 0;
   label$18 : {
    if (!((HEAP32[($4_1 + 24 | 0) >> 2] | 0) >>> 0 < (HEAP32[($4_1 + 16 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
     break label$18
    }
    HEAP32[($4_1 + 16 | 0) >> 2] = (HEAP32[($4_1 + 16 | 0) >> 2] | 0) + -1 | 0;
    HEAP32[($4_1 + 60 | 0) >> 2] = (HEAP32[($4_1 + 60 | 0) >> 2] | 0) + -1 | 0;
    HEAP32[($4_1 + 56 | 0) >> 2] = (HEAP32[($4_1 + 56 | 0) >> 2] | 0) + -1 | 0;
    continue label$13;
   }
   break label$13;
  };
  HEAP32[($4_1 + 20 | 0) >> 2] = (HEAP32[($4_1 + 28 | 0) >> 2] | 0) + (HEAP32[($4_1 + 36 | 0) >> 2] | 0) | 0;
  HEAP32[($4_1 + 16 | 0) >> 2] = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  label$19 : {
   label$20 : while (1) {
    $177 = 24;
    label$21 : {
     label$22 : {
      if (((HEAPU8[(HEAP32[($4_1 + 16 | 0) >> 2] | 0) >> 0] | 0) << $177 | 0) >> $177 | 0) {
       break label$22
      }
      break label$21;
     }
     break label$19;
    }
    label$23 : {
     if (!((HEAP32[($4_1 + 16 | 0) >> 2] | 0) >>> 0 < (HEAP32[($4_1 + 20 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
      break label$23
     }
     HEAP32[($4_1 + 16 | 0) >> 2] = (HEAP32[($4_1 + 16 | 0) >> 2] | 0) + 1 | 0;
     continue label$20;
    }
    break label$20;
   };
  }
  HEAP32[($4_1 + 24 | 0) >> 2] = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
  $191 = 24;
  label$24 : {
   label$25 : {
    label$26 : {
     label$27 : {
      if (!((((HEAPU8[(HEAP32[($4_1 + 24 | 0) >> 2] | 0) >> 0] | 0) << $191 | 0) >> $191 | 0 | 0) < (0 | 0) & 1 | 0)) {
       break label$27
      }
      break label$26;
     }
     $200 = 24;
     label$28 : {
      if (!((((HEAPU8[(HEAP32[($4_1 + 24 | 0) >> 2] | 0) >> 0] | 0) << $200 | 0) >> $200 | 0 | 0) > (0 | 0) & 1 | 0)) {
       break label$28
      }
      break label$25;
     }
     $209 = 24;
     label$29 : {
      if (((HEAPU8[(HEAP32[($4_1 + 24 | 0) >> 2] | 0) >> 0] | 0) << $209 | 0) >> $209 | 0) {
       break label$29
      }
      break label$24;
     }
    }
    HEAP32[($4_1 + 12 | 0) >> 2] = $31() | 0;
    HEAP32[($4_1 + 32 | 0) >> 2] = $39(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) | 0;
    HEAP32[($4_1 + 20 | 0) >> 2] = (HEAP32[($4_1 + 28 | 0) >> 2] | 0) + (HEAP32[($4_1 + 36 | 0) >> 2] | 0) | 0;
    HEAP32[($4_1 + 16 | 0) >> 2] = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
    label$30 : {
     label$31 : while (1) {
      label$32 : {
       label$33 : {
        if (!((HEAP32[($4_1 + 16 | 0) >> 2] | 0) >>> 0 > (HEAP32[($4_1 + 24 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
         break label$33
        }
        $226 = 24;
        label$34 : {
         if (!((((HEAPU8[(HEAP32[($4_1 + 16 | 0) >> 2] | 0) >> 0] | 0) << $226 | 0) >> $226 | 0 | 0) > (0 | 0) & 1 | 0)) {
          break label$34
         }
         $236 = 24;
         HEAP8[(HEAP32[($4_1 + 16 | 0) >> 2] | 0) >> 0] = (HEAP32[($4_1 + 80 | 0) >> 2] | 0) - (((HEAPU8[(HEAP32[($4_1 + 16 | 0) >> 2] | 0) >> 0] | 0) << $236 | 0) >> $236 | 0) | 0;
         $245 = 24;
         HEAP8[((HEAP32[($4_1 + 16 | 0) >> 2] | 0) + -1 | 0) >> 0] = (((HEAPU8[((HEAP32[($4_1 + 16 | 0) >> 2] | 0) + -1 | 0) >> 0] | 0) << $245 | 0) >> $245 | 0) + 1 | 0;
         break label$32;
        }
        $255 = 24;
        label$35 : {
         if (!((((HEAPU8[(HEAP32[($4_1 + 16 | 0) >> 2] | 0) >> 0] | 0) << $255 | 0) >> $255 | 0 | 0) < (0 | 0) & 1 | 0)) {
          break label$35
         }
         $264 = 24;
         HEAP8[(HEAP32[($4_1 + 16 | 0) >> 2] | 0) >> 0] = Math_imul(((HEAPU8[(HEAP32[($4_1 + 16 | 0) >> 2] | 0) >> 0] | 0) << $264 | 0) >> $264 | 0, 255);
         break label$32;
        }
       }
       label$36 : {
        if (!((HEAP32[($4_1 + 16 | 0) >> 2] | 0 | 0) == (HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0) & 1 | 0)) {
         break label$36
        }
        $277 = 24;
        HEAP8[(HEAP32[($4_1 + 16 | 0) >> 2] | 0) >> 0] = Math_imul(((HEAPU8[(HEAP32[($4_1 + 16 | 0) >> 2] | 0) >> 0] | 0) << $277 | 0) >> $277 | 0, 255);
        break label$30;
       }
      }
      label$37 : {
       if (!((HEAP32[($4_1 + 16 | 0) >> 2] | 0) >>> 0 > (HEAP32[($4_1 + 24 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
        break label$37
       }
       HEAP32[($4_1 + 16 | 0) >> 2] = (HEAP32[($4_1 + 16 | 0) >> 2] | 0) + -1 | 0;
       continue label$31;
      }
      break label$31;
     };
    }
    break label$24;
   }
   HEAP32[($4_1 + 12 | 0) >> 2] = $33() | 0;
   HEAP32[($4_1 + 32 | 0) >> 2] = $39(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) | 0;
   HEAP32[($4_1 + 20 | 0) >> 2] = (HEAP32[($4_1 + 28 | 0) >> 2] | 0) + (HEAP32[($4_1 + 36 | 0) >> 2] | 0) | 0;
   HEAP32[($4_1 + 16 | 0) >> 2] = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
   label$38 : {
    label$39 : while (1) {
     label$40 : {
      label$41 : {
       if (!((HEAP32[($4_1 + 16 | 0) >> 2] | 0) >>> 0 > (HEAP32[($4_1 + 24 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
        break label$41
       }
       $305 = 24;
       label$42 : {
        if (!((((HEAPU8[(HEAP32[($4_1 + 16 | 0) >> 2] | 0) >> 0] | 0) << $305 | 0) >> $305 | 0 | 0) < (0 | 0) & 1 | 0)) {
         break label$42
        }
        $314 = 24;
        HEAP8[(HEAP32[($4_1 + 16 | 0) >> 2] | 0) >> 0] = (((HEAPU8[(HEAP32[($4_1 + 16 | 0) >> 2] | 0) >> 0] | 0) << $314 | 0) >> $314 | 0) + (HEAP32[($4_1 + 80 | 0) >> 2] | 0) | 0;
        $324 = 24;
        HEAP8[((HEAP32[($4_1 + 16 | 0) >> 2] | 0) + -1 | 0) >> 0] = (((HEAPU8[((HEAP32[($4_1 + 16 | 0) >> 2] | 0) + -1 | 0) >> 0] | 0) << $324 | 0) >> $324 | 0) - 1 | 0;
       }
       break label$40;
      }
      break label$38;
     }
     label$43 : {
      if (!((HEAP32[($4_1 + 16 | 0) >> 2] | 0) >>> 0 > (HEAP32[($4_1 + 24 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
       break label$43
      }
      HEAP32[($4_1 + 16 | 0) >> 2] = (HEAP32[($4_1 + 16 | 0) >> 2] | 0) + -1 | 0;
      continue label$39;
     }
     break label$39;
    };
   }
  }
  label$44 : {
   if ((HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
    break label$44
   }
   HEAP32[($4_1 + 32 | 0) >> 2] = 0;
  }
  label$45 : {
   if (!((HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
    break label$45
   }
   HEAP32[($4_1 + 32 | 0) >> 2] = $39(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  }
  HEAP32[($4_1 + 20 | 0) >> 2] = (HEAP32[($4_1 + 28 | 0) >> 2] | 0) + (HEAP32[($4_1 + 36 | 0) >> 2] | 0) | 0;
  HEAP32[($4_1 + 16 | 0) >> 2] = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  label$46 : {
   label$47 : while (1) {
    $359 = 24;
    label$48 : {
     label$49 : {
      if (((HEAPU8[(HEAP32[($4_1 + 16 | 0) >> 2] | 0) >> 0] | 0) << $359 | 0) >> $359 | 0) {
       break label$49
      }
      break label$48;
     }
     break label$46;
    }
    label$50 : {
     if (!((HEAP32[($4_1 + 16 | 0) >> 2] | 0) >>> 0 < (HEAP32[($4_1 + 20 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
      break label$50
     }
     HEAP32[($4_1 + 16 | 0) >> 2] = (HEAP32[($4_1 + 16 | 0) >> 2] | 0) + 1 | 0;
     continue label$47;
    }
    break label$47;
   };
  }
  HEAP32[($4_1 + 24 | 0) >> 2] = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
  HEAP32[($4_1 + 16 | 0) >> 2] = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  HEAP32[($4_1 + 20 | 0) >> 2] = (HEAP32[($4_1 + 28 | 0) >> 2] | 0) + (HEAP32[($4_1 + 36 | 0) >> 2] | 0) | 0;
  label$51 : {
   label$52 : while (1) {
    label$53 : {
     label$54 : {
      if (!((HEAP32[($4_1 + 16 | 0) >> 2] | 0) >>> 0 <= (HEAP32[($4_1 + 20 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
       break label$54
      }
      $382 = 24;
      $385 = $13(((HEAPU8[(HEAP32[($4_1 + 16 | 0) >> 2] | 0) >> 0] | 0) << $382 | 0) >> $382 | 0 | 0) | 0;
      HEAP8[(HEAP32[($4_1 + 16 | 0) >> 2] | 0) >> 0] = $385;
      break label$53;
     }
     break label$51;
    }
    label$55 : {
     if (!((HEAP32[($4_1 + 16 | 0) >> 2] | 0) >>> 0 < (HEAP32[($4_1 + 20 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
      break label$55
     }
     HEAP32[($4_1 + 16 | 0) >> 2] = (HEAP32[($4_1 + 16 | 0) >> 2] | 0) + 1 | 0;
     continue label$52;
    }
    break label$52;
   };
  }
  HEAP32[($4_1 + 8 | 0) >> 2] = $104(((HEAP32[($4_1 + 32 | 0) >> 2] | 0) + (((HEAP32[($4_1 + 20 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 24 | 0) >> 2] | 0) | 0) | 0) + 1 | 0 | 0, 1 | 0) | 0;
  label$56 : {
   if (!(HEAP32[($4_1 + 32 | 0) >> 2] | 0)) {
    break label$56
   }
   $41(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 32 | 0) >> 2] | 0 | 0) | 0;
  }
  $41((HEAP32[($4_1 + 8 | 0) >> 2] | 0) + (HEAP32[($4_1 + 32 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0, ((HEAP32[($4_1 + 20 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 24 | 0) >> 2] | 0) | 0 | 0) | 0;
  HEAP8[((HEAP32[($4_1 + 8 | 0) >> 2] | 0) + ((HEAP32[($4_1 + 32 | 0) >> 2] | 0) + (((HEAP32[($4_1 + 20 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 24 | 0) >> 2] | 0) | 0) | 0) | 0) >> 0] = 0;
  HEAP32[($4_1 + 36 | 0) >> 2] = (((HEAP32[($4_1 + 20 | 0) >> 2] | 0) + (HEAP32[($4_1 + 32 | 0) >> 2] | 0) | 0) + 1 | 0) - (HEAP32[($4_1 + 24 | 0) >> 2] | 0) | 0;
  $103(HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0);
  HEAP32[($4_1 + 28 | 0) >> 2] = 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  $439 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  global$0 = $4_1 + 96 | 0;
  return $439 | 0;
 }
 
 function $4($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $111_1 = 0, $119_1 = 0, $129 = 0, $141 = 0, $276 = 0, $313 = 0;
  $4_1 = global$0 - 112 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 108 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 104 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 100 | 0) >> 2] = 0;
  HEAP32[($4_1 + 96 | 0) >> 2] = 0;
  HEAP32[($4_1 + 92 | 0) >> 2] = 0;
  HEAP32[($4_1 + 88 | 0) >> 2] = 0;
  HEAP32[($4_1 + 84 | 0) >> 2] = 0;
  HEAP32[($4_1 + 80 | 0) >> 2] = 0;
  HEAP32[($4_1 + 76 | 0) >> 2] = 0;
  HEAP32[($4_1 + 72 | 0) >> 2] = 0;
  HEAP32[($4_1 + 68 | 0) >> 2] = 0;
  HEAP32[($4_1 + 64 | 0) >> 2] = 0;
  HEAP32[($4_1 + 60 | 0) >> 2] = 0;
  HEAP32[($4_1 + 56 | 0) >> 2] = 0;
  HEAP32[($4_1 + 52 | 0) >> 2] = 0;
  HEAP32[($4_1 + 48 | 0) >> 2] = 0;
  label$1 : {
   label$2 : {
    if (!((HEAP32[($4_1 + 108 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$2
    }
    if ((HEAP32[($4_1 + 104 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$1
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 68 | 0) >> 2] = $39(HEAP32[($4_1 + 108 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 64 | 0) >> 2] = $39(HEAP32[($4_1 + 104 | 0) >> 2] | 0 | 0) | 0;
  label$3 : {
   label$4 : {
    if (!(HEAP32[($4_1 + 68 | 0) >> 2] | 0)) {
     break label$4
    }
    if (HEAP32[($4_1 + 64 | 0) >> 2] | 0) {
     break label$3
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 100 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 108 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 92 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 64 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 104 | 0) >> 2] | 0 | 0) | 0;
  label$5 : {
   label$6 : {
    if (!((HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$6
    }
    if ((HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$5
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 96 | 0) >> 2] = $17((HEAP32[($4_1 + 100 | 0) >> 2] | 0) - (HEAP32[($4_1 + 108 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 108 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 88 | 0) >> 2] = $17((HEAP32[($4_1 + 92 | 0) >> 2] | 0) - (HEAP32[($4_1 + 104 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 64 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 104 | 0) >> 2] | 0 | 0) | 0;
  label$7 : {
   label$8 : {
    if (!((HEAP32[($4_1 + 96 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$8
    }
    if ((HEAP32[($4_1 + 88 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$7
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 60 | 0) >> 2] = ((HEAP32[($4_1 + 96 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 100 | 0) >> 2] | 0) | 0;
  HEAP32[($4_1 + 56 | 0) >> 2] = ((HEAP32[($4_1 + 88 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 92 | 0) >> 2] | 0) | 0;
  label$9 : {
   label$10 : {
    if (!(HEAP32[($4_1 + 60 | 0) >> 2] | 0)) {
     break label$10
    }
    if (HEAP32[($4_1 + 56 | 0) >> 2] | 0) {
     break label$9
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 84 | 0) >> 2] = HEAP32[($4_1 + 108 | 0) >> 2] | 0;
  HEAP32[($4_1 + 76 | 0) >> 2] = HEAP32[($4_1 + 104 | 0) >> 2] | 0;
  HEAP32[($4_1 + 80 | 0) >> 2] = (HEAP32[($4_1 + 100 | 0) >> 2] | 0) + -1 | 0;
  HEAP32[($4_1 + 72 | 0) >> 2] = (HEAP32[($4_1 + 92 | 0) >> 2] | 0) + -1 | 0;
  HEAP32[($4_1 + 52 | 0) >> 2] = ((HEAP32[($4_1 + 80 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 84 | 0) >> 2] | 0) | 0;
  HEAP32[($4_1 + 48 | 0) >> 2] = ((HEAP32[($4_1 + 72 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 76 | 0) >> 2] | 0) | 0;
  HEAP8[($4_1 + 47 | 0) >> 0] = 0;
  HEAP8[($4_1 + 46 | 0) >> 0] = 0;
  HEAP8[($4_1 + 45 | 0) >> 0] = 0;
  HEAP8[($4_1 + 44 | 0) >> 0] = 0;
  $111_1 = 24;
  HEAP8[($4_1 + 45 | 0) >> 0] = ($15(((HEAPU8[(HEAP32[($4_1 + 100 | 0) >> 2] | 0) >> 0] | 0) << $111_1 | 0) >> $111_1 | 0 | 0) | 0) & 1 | 0;
  $119_1 = 24;
  HEAP8[($4_1 + 44 | 0) >> 0] = ($15(((HEAPU8[(HEAP32[($4_1 + 92 | 0) >> 2] | 0) >> 0] | 0) << $119_1 | 0) >> $119_1 | 0 | 0) | 0) & 1 | 0;
  $129 = 0;
  label$11 : {
   if ((HEAPU8[($4_1 + 45 | 0) >> 0] | 0) & 1 | 0) {
    break label$11
   }
   $129 = $36(0 | 0, HEAP32[($4_1 + 52 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 84 | 0) >> 2] | 0 | 0) | 0;
  }
  HEAP8[($4_1 + 47 | 0) >> 0] = $129 & 1 | 0;
  $141 = 0;
  label$12 : {
   if ((HEAPU8[($4_1 + 44 | 0) >> 0] | 0) & 1 | 0) {
    break label$12
   }
   $141 = $36(0 | 0, HEAP32[($4_1 + 48 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 76 | 0) >> 2] | 0 | 0) | 0;
  }
  HEAP8[($4_1 + 46 | 0) >> 0] = $141 & 1 | 0;
  label$13 : {
   if ((HEAPU8[($4_1 + 47 | 0) >> 0] | 0) & 1 | 0) {
    break label$13
   }
   if ((HEAPU8[($4_1 + 46 | 0) >> 0] | 0) & 1 | 0) {
    break label$13
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 40 | 0) >> 2] = 0;
  HEAP32[($4_1 + 36 | 0) >> 2] = 0;
  HEAP32[($4_1 + 32 | 0) >> 2] = 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = 0;
  HEAP32[($4_1 + 20 | 0) >> 2] = 0;
  HEAP32[($4_1 + 16 | 0) >> 2] = 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = 0;
  HEAP8[($4_1 + 11 | 0) >> 0] = 0;
  HEAP32[($4_1 + 4 | 0) >> 2] = -2;
  label$14 : {
   label$15 : {
    label$16 : {
     label$17 : {
      label$18 : {
       if ((HEAPU8[($4_1 + 47 | 0) >> 0] | 0) & 1 | 0) {
        break label$18
       }
       if (!((HEAPU8[($4_1 + 46 | 0) >> 0] | 0) & 1 | 0)) {
        break label$18
       }
       break label$17;
      }
      label$19 : {
       if (!((HEAPU8[($4_1 + 47 | 0) >> 0] | 0) & 1 | 0)) {
        break label$19
       }
       if ((HEAPU8[($4_1 + 46 | 0) >> 0] | 0) & 1 | 0) {
        break label$19
       }
       break label$16;
      }
      label$20 : {
       if (!((HEAPU8[($4_1 + 47 | 0) >> 0] | 0) & 1 | 0)) {
        break label$20
       }
       if (!((HEAPU8[($4_1 + 46 | 0) >> 0] | 0) & 1 | 0)) {
        break label$20
       }
       break label$15;
      }
     }
     HEAP32[($4_1 + 4 | 0) >> 2] = $20(HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
     label$21 : {
      label$22 : {
       if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) > (0 | 0) & 1 | 0)) {
        break label$22
       }
       HEAP32[($4_1 + 40 | 0) >> 2] = $3(HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
       HEAP32[($4_1 + 28 | 0) >> 2] = $33() | 0;
       break label$21;
      }
      label$23 : {
       label$24 : {
        if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) < (0 | 0) & 1 | 0)) {
         break label$24
        }
        HEAP32[($4_1 + 40 | 0) >> 2] = $3(HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0) | 0;
        HEAP32[($4_1 + 28 | 0) >> 2] = $31() | 0;
        break label$23;
       }
       label$25 : {
        if (HEAP32[($4_1 + 4 | 0) >> 2] | 0) {
         break label$25
        }
        HEAP32[($4_1 + 40 | 0) >> 2] = $3(HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
        HEAP32[($4_1 + 28 | 0) >> 2] = $33() | 0;
       }
      }
     }
     break label$14;
    }
    HEAP32[($4_1 + 4 | 0) >> 2] = $20(HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
    label$26 : {
     label$27 : {
      if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) > (0 | 0) & 1 | 0)) {
       break label$27
      }
      HEAP32[($4_1 + 40 | 0) >> 2] = $3(HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
      HEAP32[($4_1 + 28 | 0) >> 2] = $31() | 0;
      break label$26;
     }
     label$28 : {
      label$29 : {
       if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) < (0 | 0) & 1 | 0)) {
        break label$29
       }
       HEAP32[($4_1 + 40 | 0) >> 2] = $3(HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0) | 0;
       HEAP32[($4_1 + 28 | 0) >> 2] = $33() | 0;
       break label$28;
      }
      label$30 : {
       if (HEAP32[($4_1 + 4 | 0) >> 2] | 0) {
        break label$30
       }
       HEAP32[($4_1 + 40 | 0) >> 2] = $3(HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0) | 0;
       HEAP32[($4_1 + 28 | 0) >> 2] = $33() | 0;
      }
     }
    }
    break label$14;
   }
   HEAP32[($4_1 + 4 | 0) >> 2] = $20(HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
   HEAP32[($4_1 + 40 | 0) >> 2] = $2(HEAP32[($4_1 + 100 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 92 | 0) >> 2] | 0 | 0) | 0;
   HEAP32[($4_1 + 28 | 0) >> 2] = $31() | 0;
  }
  label$31 : {
   if ((HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
    break label$31
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 20 | 0) >> 2] = $39(HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 36 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0;
  label$32 : {
   if ((HEAP32[($4_1 + 36 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
    break label$32
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 32 | 0) >> 2] = $17((HEAP32[($4_1 + 36 | 0) >> 2] | 0) - (HEAP32[($4_1 + 40 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0;
  label$33 : {
   if ((HEAP32[($4_1 + 32 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
    break label$33
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 16 | 0) >> 2] = ((HEAP32[($4_1 + 32 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 36 | 0) >> 2] | 0) | 0;
  $276 = 24;
  HEAP8[($4_1 + 11 | 0) >> 0] = ($15(((HEAPU8[(HEAP32[($4_1 + 36 | 0) >> 2] | 0) >> 0] | 0) << $276 | 0) >> $276 | 0 | 0) | 0) & 1 | 0;
  label$34 : {
   label$35 : {
    if ((HEAPU8[($4_1 + 11 | 0) >> 0] | 0) & 1 | 0) {
     break label$35
    }
    HEAP32[($4_1 + 12 | 0) >> 2] = $39(HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0) | 0;
    break label$34;
   }
   HEAP32[($4_1 + 12 | 0) >> 2] = 0;
  }
  HEAP32[($4_1 + 24 | 0) >> 2] = $104(((HEAP32[($4_1 + 12 | 0) >> 2] | 0) + (HEAP32[($4_1 + 16 | 0) >> 2] | 0) | 0) + 1 | 0 | 0, 1 | 0) | 0;
  label$36 : {
   if (!(HEAP32[($4_1 + 12 | 0) >> 2] | 0)) {
    break label$36
   }
   $41(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  }
  $41((HEAP32[($4_1 + 24 | 0) >> 2] | 0) + (HEAP32[($4_1 + 12 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 36 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 16 | 0) >> 2] | 0 | 0) | 0;
  HEAP8[((HEAP32[($4_1 + 24 | 0) >> 2] | 0) + ((HEAP32[($4_1 + 12 | 0) >> 2] | 0) + (HEAP32[($4_1 + 16 | 0) >> 2] | 0) | 0) | 0) >> 0] = 0;
  $103(HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0);
  HEAP32[($4_1 + 40 | 0) >> 2] = 0;
  HEAP32[($4_1 + 40 | 0) >> 2] = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $313 = HEAP32[($4_1 + 40 | 0) >> 2] | 0;
  global$0 = $4_1 + 112 | 0;
  return $313 | 0;
 }
 
 function $5($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $109 = 0, $117_1 = 0, $127 = 0, $139 = 0, $171 = 0;
  $4_1 = global$0 - 80 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 72 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 68 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 64 | 0) >> 2] = 0;
  HEAP32[($4_1 + 60 | 0) >> 2] = 0;
  HEAP32[($4_1 + 56 | 0) >> 2] = 0;
  HEAP32[($4_1 + 52 | 0) >> 2] = 0;
  HEAP32[($4_1 + 48 | 0) >> 2] = 0;
  HEAP32[($4_1 + 44 | 0) >> 2] = 0;
  HEAP32[($4_1 + 40 | 0) >> 2] = 0;
  HEAP32[($4_1 + 36 | 0) >> 2] = 0;
  HEAP32[($4_1 + 32 | 0) >> 2] = 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = 0;
  HEAP32[($4_1 + 20 | 0) >> 2] = 0;
  HEAP32[($4_1 + 16 | 0) >> 2] = 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = 0;
  HEAP8[($4_1 + 11 | 0) >> 0] = 0;
  HEAP8[($4_1 + 10 | 0) >> 0] = 0;
  HEAP8[($4_1 + 9 | 0) >> 0] = 0;
  HEAP8[($4_1 + 8 | 0) >> 0] = 0;
  label$1 : {
   label$2 : {
    if (!((HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$2
    }
    if ((HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$1
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 32 | 0) >> 2] = $39(HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = $39(HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0) | 0;
  label$3 : {
   label$4 : {
    if (!(HEAP32[($4_1 + 32 | 0) >> 2] | 0)) {
     break label$4
    }
    if (HEAP32[($4_1 + 28 | 0) >> 2] | 0) {
     break label$3
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 64 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 32 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 60 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0) | 0;
  label$5 : {
   label$6 : {
    if (!((HEAP32[($4_1 + 64 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$6
    }
    if ((HEAP32[($4_1 + 60 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$5
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 56 | 0) >> 2] = $17((HEAP32[($4_1 + 64 | 0) >> 2] | 0) - (HEAP32[($4_1 + 72 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 32 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 52 | 0) >> 2] = $17((HEAP32[($4_1 + 60 | 0) >> 2] | 0) - (HEAP32[($4_1 + 68 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0) | 0;
  label$7 : {
   label$8 : {
    if (!((HEAP32[($4_1 + 56 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$8
    }
    if ((HEAP32[($4_1 + 52 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$7
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 24 | 0) >> 2] = ((HEAP32[($4_1 + 56 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 64 | 0) >> 2] | 0) | 0;
  HEAP32[($4_1 + 20 | 0) >> 2] = ((HEAP32[($4_1 + 52 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 60 | 0) >> 2] | 0) | 0;
  HEAP32[($4_1 + 48 | 0) >> 2] = HEAP32[($4_1 + 72 | 0) >> 2] | 0;
  HEAP32[($4_1 + 44 | 0) >> 2] = HEAP32[($4_1 + 68 | 0) >> 2] | 0;
  HEAP32[($4_1 + 40 | 0) >> 2] = (HEAP32[($4_1 + 64 | 0) >> 2] | 0) + -1 | 0;
  HEAP32[($4_1 + 36 | 0) >> 2] = (HEAP32[($4_1 + 60 | 0) >> 2] | 0) + -1 | 0;
  HEAP32[($4_1 + 16 | 0) >> 2] = ((HEAP32[($4_1 + 40 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 48 | 0) >> 2] | 0) | 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = ((HEAP32[($4_1 + 36 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 44 | 0) >> 2] | 0) | 0;
  $109 = 24;
  HEAP8[($4_1 + 9 | 0) >> 0] = ($15(((HEAPU8[(HEAP32[($4_1 + 64 | 0) >> 2] | 0) >> 0] | 0) << $109 | 0) >> $109 | 0 | 0) | 0) & 1 | 0;
  $117_1 = 24;
  HEAP8[($4_1 + 8 | 0) >> 0] = ($15(((HEAPU8[(HEAP32[($4_1 + 60 | 0) >> 2] | 0) >> 0] | 0) << $117_1 | 0) >> $117_1 | 0 | 0) | 0) & 1 | 0;
  $127 = 0;
  label$9 : {
   if ((HEAPU8[($4_1 + 9 | 0) >> 0] | 0) & 1 | 0) {
    break label$9
   }
   $127 = $36(0 | 0, HEAP32[($4_1 + 16 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 48 | 0) >> 2] | 0 | 0) | 0;
  }
  HEAP8[($4_1 + 11 | 0) >> 0] = $127 & 1 | 0;
  $139 = 0;
  label$10 : {
   if ((HEAPU8[($4_1 + 8 | 0) >> 0] | 0) & 1 | 0) {
    break label$10
   }
   $139 = $36(0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 44 | 0) >> 2] | 0 | 0) | 0;
  }
  HEAP8[($4_1 + 10 | 0) >> 0] = $139 & 1 | 0;
  label$11 : {
   label$12 : {
    label$13 : {
     if ((HEAPU8[($4_1 + 11 | 0) >> 0] | 0) & 1 | 0) {
      break label$13
     }
     if (!((HEAPU8[($4_1 + 10 | 0) >> 0] | 0) & 1 | 0)) {
      break label$12
     }
    }
    HEAP32[($4_1 + 76 | 0) >> 2] = $1(HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0) | 0;
    break label$11;
   }
   label$14 : {
    label$15 : {
     if ((HEAPU8[($4_1 + 9 | 0) >> 0] | 0) & 1 | 0) {
      break label$15
     }
     if ((HEAPU8[($4_1 + 11 | 0) >> 0] | 0) & 1 | 0) {
      break label$14
     }
    }
    label$16 : {
     if ((HEAPU8[($4_1 + 8 | 0) >> 0] | 0) & 1 | 0) {
      break label$16
     }
     if ((HEAPU8[($4_1 + 10 | 0) >> 0] | 0) & 1 | 0) {
      break label$14
     }
    }
    HEAP32[($4_1 + 76 | 0) >> 2] = $3(HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0) | 0;
    break label$11;
   }
   $40();
   wasm2js_trap();
  }
  $171 = HEAP32[($4_1 + 76 | 0) >> 2] | 0;
  global$0 = $4_1 + 80 | 0;
  return $171 | 0;
 }
 
 function $6($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $109 = 0, $117_1 = 0, $127 = 0, $139 = 0, $171 = 0;
  $4_1 = global$0 - 80 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 72 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 68 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 64 | 0) >> 2] = 0;
  HEAP32[($4_1 + 60 | 0) >> 2] = 0;
  HEAP32[($4_1 + 56 | 0) >> 2] = 0;
  HEAP32[($4_1 + 52 | 0) >> 2] = 0;
  HEAP32[($4_1 + 48 | 0) >> 2] = 0;
  HEAP32[($4_1 + 44 | 0) >> 2] = 0;
  HEAP32[($4_1 + 40 | 0) >> 2] = 0;
  HEAP32[($4_1 + 36 | 0) >> 2] = 0;
  HEAP32[($4_1 + 32 | 0) >> 2] = 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = 0;
  HEAP32[($4_1 + 20 | 0) >> 2] = 0;
  HEAP32[($4_1 + 16 | 0) >> 2] = 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = 0;
  HEAP8[($4_1 + 11 | 0) >> 0] = 0;
  HEAP8[($4_1 + 10 | 0) >> 0] = 0;
  HEAP8[($4_1 + 9 | 0) >> 0] = 0;
  HEAP8[($4_1 + 8 | 0) >> 0] = 0;
  label$1 : {
   label$2 : {
    if (!((HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$2
    }
    if ((HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$1
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 32 | 0) >> 2] = $39(HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = $39(HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0) | 0;
  label$3 : {
   label$4 : {
    if (!(HEAP32[($4_1 + 32 | 0) >> 2] | 0)) {
     break label$4
    }
    if (HEAP32[($4_1 + 28 | 0) >> 2] | 0) {
     break label$3
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 64 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 32 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 60 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0) | 0;
  label$5 : {
   label$6 : {
    if (!((HEAP32[($4_1 + 64 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$6
    }
    if ((HEAP32[($4_1 + 60 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$5
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 56 | 0) >> 2] = $17((HEAP32[($4_1 + 64 | 0) >> 2] | 0) - (HEAP32[($4_1 + 72 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 32 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 52 | 0) >> 2] = $17((HEAP32[($4_1 + 60 | 0) >> 2] | 0) - (HEAP32[($4_1 + 68 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0) | 0;
  label$7 : {
   label$8 : {
    if (!((HEAP32[($4_1 + 56 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$8
    }
    if ((HEAP32[($4_1 + 52 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$7
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 24 | 0) >> 2] = ((HEAP32[($4_1 + 56 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 64 | 0) >> 2] | 0) | 0;
  HEAP32[($4_1 + 20 | 0) >> 2] = ((HEAP32[($4_1 + 52 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 60 | 0) >> 2] | 0) | 0;
  HEAP32[($4_1 + 48 | 0) >> 2] = HEAP32[($4_1 + 72 | 0) >> 2] | 0;
  HEAP32[($4_1 + 44 | 0) >> 2] = HEAP32[($4_1 + 68 | 0) >> 2] | 0;
  HEAP32[($4_1 + 40 | 0) >> 2] = (HEAP32[($4_1 + 64 | 0) >> 2] | 0) + -1 | 0;
  HEAP32[($4_1 + 36 | 0) >> 2] = (HEAP32[($4_1 + 60 | 0) >> 2] | 0) + -1 | 0;
  HEAP32[($4_1 + 16 | 0) >> 2] = ((HEAP32[($4_1 + 40 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 48 | 0) >> 2] | 0) | 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = ((HEAP32[($4_1 + 36 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 44 | 0) >> 2] | 0) | 0;
  $109 = 24;
  HEAP8[($4_1 + 9 | 0) >> 0] = ($15(((HEAPU8[(HEAP32[($4_1 + 64 | 0) >> 2] | 0) >> 0] | 0) << $109 | 0) >> $109 | 0 | 0) | 0) & 1 | 0;
  $117_1 = 24;
  HEAP8[($4_1 + 8 | 0) >> 0] = ($15(((HEAPU8[(HEAP32[($4_1 + 60 | 0) >> 2] | 0) >> 0] | 0) << $117_1 | 0) >> $117_1 | 0 | 0) | 0) & 1 | 0;
  $127 = 0;
  label$9 : {
   if ((HEAPU8[($4_1 + 9 | 0) >> 0] | 0) & 1 | 0) {
    break label$9
   }
   $127 = $36(0 | 0, HEAP32[($4_1 + 16 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 48 | 0) >> 2] | 0 | 0) | 0;
  }
  HEAP8[($4_1 + 11 | 0) >> 0] = $127 & 1 | 0;
  $139 = 0;
  label$10 : {
   if ((HEAPU8[($4_1 + 8 | 0) >> 0] | 0) & 1 | 0) {
    break label$10
   }
   $139 = $36(0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 44 | 0) >> 2] | 0 | 0) | 0;
  }
  HEAP8[($4_1 + 10 | 0) >> 0] = $139 & 1 | 0;
  label$11 : {
   label$12 : {
    label$13 : {
     if ((HEAPU8[($4_1 + 11 | 0) >> 0] | 0) & 1 | 0) {
      break label$13
     }
     if (!((HEAPU8[($4_1 + 10 | 0) >> 0] | 0) & 1 | 0)) {
      break label$12
     }
    }
    HEAP32[($4_1 + 76 | 0) >> 2] = $4(HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0) | 0;
    break label$11;
   }
   label$14 : {
    label$15 : {
     if ((HEAPU8[($4_1 + 9 | 0) >> 0] | 0) & 1 | 0) {
      break label$15
     }
     if ((HEAPU8[($4_1 + 11 | 0) >> 0] | 0) & 1 | 0) {
      break label$14
     }
    }
    label$16 : {
     if ((HEAPU8[($4_1 + 8 | 0) >> 0] | 0) & 1 | 0) {
      break label$16
     }
     if ((HEAPU8[($4_1 + 10 | 0) >> 0] | 0) & 1 | 0) {
      break label$14
     }
    }
    HEAP32[($4_1 + 76 | 0) >> 2] = $2(HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0) | 0;
    break label$11;
   }
   $40();
   wasm2js_trap();
  }
  $171 = HEAP32[($4_1 + 76 | 0) >> 2] | 0;
  global$0 = $4_1 + 80 | 0;
  return $171 | 0;
 }
 
 function $7($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $28_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = 65536;
  HEAP32[($4_1 + 16 | 0) >> 2] = 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = $104(2 | 0, 1 | 0) | 0;
  HEAP8[(HEAP32[($4_1 + 12 | 0) >> 2] | 0) >> 0] = HEAPU8[(HEAP32[($4_1 + 20 | 0) >> 2] | 0) >> 0] | 0;
  HEAP32[($4_1 + 8 | 0) >> 2] = 0;
  label$1 : {
   label$2 : while (1) {
    if (!((HEAP32[($4_1 + 8 | 0) >> 2] | 0) >>> 0 < (HEAP32[($4_1 + 24 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
     break label$1
    }
    HEAP32[($4_1 + 16 | 0) >> 2] = $6(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0) | 0;
    $103(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0);
    HEAP32[($4_1 + 12 | 0) >> 2] = 0;
    HEAP32[($4_1 + 12 | 0) >> 2] = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
    HEAP32[($4_1 + 8 | 0) >> 2] = (HEAP32[($4_1 + 8 | 0) >> 2] | 0) + 1 | 0;
    continue label$2;
   };
  }
  $28_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  global$0 = $4_1 + 32 | 0;
  return $28_1 | 0;
 }
 
 function $8($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $70_1 = 0, $116_1 = 0;
  $4_1 = global$0 - 80 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 76 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 72 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 68 | 0) >> 2] = $39(HEAP32[($4_1 + 76 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 64 | 0) >> 2] = $39(HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 60 | 0) >> 2] = 0;
  HEAP32[($4_1 + 56 | 0) >> 2] = 0;
  HEAP32[($4_1 + 52 | 0) >> 2] = 0;
  HEAP32[($4_1 + 48 | 0) >> 2] = 0;
  HEAP32[($4_1 + 44 | 0) >> 2] = 0;
  HEAP32[($4_1 + 40 | 0) >> 2] = 0;
  HEAP32[($4_1 + 52 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 76 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 48 | 0) >> 2] = $17((HEAP32[($4_1 + 52 | 0) >> 2] | 0) - (HEAP32[($4_1 + 76 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 68 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 76 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 60 | 0) >> 2] = ((HEAP32[($4_1 + 48 | 0) >> 2] | 0) - (HEAP32[($4_1 + 52 | 0) >> 2] | 0) | 0) + 1 | 0;
  HEAP32[($4_1 + 44 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 64 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 40 | 0) >> 2] = $17((HEAP32[($4_1 + 44 | 0) >> 2] | 0) - (HEAP32[($4_1 + 72 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 64 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 56 | 0) >> 2] = ((HEAP32[($4_1 + 40 | 0) >> 2] | 0) - (HEAP32[($4_1 + 44 | 0) >> 2] | 0) | 0) + 1 | 0;
  HEAP32[($4_1 + 36 | 0) >> 2] = 65536;
  HEAP32[($4_1 + 32 | 0) >> 2] = $104(2 | 0, 1 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = 0;
  HEAP8[(HEAP32[($4_1 + 32 | 0) >> 2] | 0) >> 0] = HEAPU8[(HEAP32[($4_1 + 36 | 0) >> 2] | 0) >> 0] | 0;
  HEAP32[($4_1 + 20 | 0) >> 2] = HEAP32[($4_1 + 56 | 0) >> 2] | 0;
  label$1 : {
   label$2 : while (1) {
    if (!((HEAP32[($4_1 + 20 | 0) >> 2] | 0) >>> 0 > 0 >>> 0 & 1 | 0)) {
     break label$1
    }
    HEAP32[($4_1 + 16 | 0) >> 2] = (HEAP32[($4_1 + 56 | 0) >> 2] | 0) - (HEAP32[($4_1 + 20 | 0) >> 2] | 0) | 0;
    $70_1 = 24;
    HEAP32[($4_1 + 12 | 0) >> 2] = $18(0 | 0, ((HEAPU8[((HEAP32[($4_1 + 44 | 0) >> 2] | 0) + ((HEAP32[($4_1 + 20 | 0) >> 2] | 0) - 1 | 0) | 0) >> 0] | 0) << $70_1 | 0) >> $70_1 | 0 | 0) | 0;
    HEAP32[($4_1 + 8 | 0) >> 2] = 0;
    HEAP32[($4_1 + 28 | 0) >> 2] = $7(HEAP32[($4_1 + 52 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) | 0;
    HEAP32[($4_1 + 8 | 0) >> 2] = $39(HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0) | 0;
    HEAP32[($4_1 + 24 | 0) >> 2] = $104(((HEAP32[($4_1 + 8 | 0) >> 2] | 0) + (HEAP32[($4_1 + 16 | 0) >> 2] | 0) | 0) + 1 | 0 | 0, 1 | 0) | 0;
    $41(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0;
    $103(HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0);
    HEAP32[($4_1 + 4 | 0) >> 2] = 0;
    label$3 : {
     label$4 : while (1) {
      if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0) >>> 0 < (HEAP32[($4_1 + 16 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
       break label$3
      }
      HEAP8[(((HEAP32[($4_1 + 24 | 0) >> 2] | 0) + (HEAP32[($4_1 + 8 | 0) >> 2] | 0) | 0) + (HEAP32[($4_1 + 4 | 0) >> 2] | 0) | 0) >> 0] = HEAPU8[(HEAP32[($4_1 + 36 | 0) >> 2] | 0) >> 0] | 0;
      HEAP32[($4_1 + 4 | 0) >> 2] = (HEAP32[($4_1 + 4 | 0) >> 2] | 0) + 1 | 0;
      continue label$4;
     };
    }
    HEAP32[$4_1 >> 2] = $6(HEAP32[($4_1 + 32 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0) | 0;
    $103(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0);
    $103(HEAP32[($4_1 + 32 | 0) >> 2] | 0 | 0);
    HEAP32[($4_1 + 32 | 0) >> 2] = HEAP32[$4_1 >> 2] | 0;
    HEAP32[($4_1 + 20 | 0) >> 2] = (HEAP32[($4_1 + 20 | 0) >> 2] | 0) + -1 | 0;
    continue label$2;
   };
  }
  $116_1 = HEAP32[($4_1 + 32 | 0) >> 2] | 0;
  global$0 = $4_1 + 80 | 0;
  return $116_1 | 0;
 }
 
 function $9($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0;
  $5_1 = global$0 - 16 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 4 | 0) >> 2] = $2_1;
  $32(HEAP32[($5_1 + 12 | 0) >> 2] | 0 | 0);
  $34(HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0);
  label$1 : {
   if (!((HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
    break label$1
   }
   if ($39(HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0) | 0) {
    break label$1
   }
   HEAP32[($5_1 + 4 | 0) >> 2] = 65584;
  }
  $11(HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0);
  global$0 = $5_1 + 16 | 0;
  return;
 }
 
 function $10() {
  return HEAP32[(0 + 68504 | 0) >> 2] | 0 | 0;
 }
 
 function $11($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  label$1 : {
   if (!((HEAP32[(0 + 68504 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
    break label$1
   }
   $103(HEAP32[(0 + 68504 | 0) >> 2] | 0 | 0);
   HEAP32[(0 + 68504 | 0) >> 2] = 0;
  }
  label$2 : {
   if (!((HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
    break label$2
   }
   HEAP32[(0 + 68504 | 0) >> 2] = $104(($39(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0) + 1 | 0 | 0, 1 | 0) | 0;
  }
  label$3 : {
   if (!((HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
    break label$3
   }
   if (!($39(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0)) {
    break label$3
   }
   $41(HEAP32[(0 + 68504 | 0) >> 2] | 0 | 0, HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0, $39(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0 | 0) | 0;
  }
  global$0 = $3_1 + 16 | 0;
  return;
 }
 
 function $12($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[(0 + 68504 | 0) >> 2] = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  return;
 }
 
 function $13($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $15_1 = 0, $17_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  label$1 : {
   if (!((HEAP32[($3_1 + 12 | 0) >> 2] | 0) >>> 0 > ($39($10() | 0 | 0) | 0) >>> 0 & 1 | 0)) {
    break label$1
   }
   $60(65603 | 0);
   $40();
   wasm2js_trap();
  }
  $15_1 = 24;
  $17_1 = ((HEAPU8[(($10() | 0) + (HEAP32[($3_1 + 12 | 0) >> 2] | 0) | 0) >> 0] | 0) << $15_1 | 0) >> $15_1 | 0;
  global$0 = $3_1 + 16 | 0;
  return $17_1 | 0;
 }
 
 function $14($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $18_1 = 0, $22_1 = 0, $32_1 = 0, $38_1 = 0, $41_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP8[($4_1 + 11 | 0) >> 0] = $1_1;
  label$1 : {
   label$2 : {
    if (!($39($10() | 0 | 0) | 0)) {
     break label$2
    }
    break label$1;
   }
   $60(65603 | 0);
   $40();
   wasm2js_trap();
  }
  label$3 : {
   label$4 : {
    if (!((HEAP32[($4_1 + 12 | 0) >> 2] | 0) >>> 0 < ($39($10() | 0 | 0) | 0) >>> 0 & 1 | 0)) {
     break label$4
    }
    $18_1 = 24;
    $22_1 = 24;
    label$5 : {
     label$6 : {
      if (!((((HEAPU8[(($10() | 0) + (HEAP32[($4_1 + 12 | 0) >> 2] | 0) | 0) >> 0] | 0) << $18_1 | 0) >> $18_1 | 0 | 0) != (((HEAPU8[($4_1 + 11 | 0) >> 0] | 0) << $22_1 | 0) >> $22_1 | 0 | 0) & 1 | 0)) {
       break label$6
      }
      $32_1 = 24;
      $38_1 = ($14((HEAP32[($4_1 + 12 | 0) >> 2] | 0) + 1 | 0 | 0, ((HEAPU8[($4_1 + 11 | 0) >> 0] | 0) << $32_1 | 0) >> $32_1 | 0 | 0) | 0) & 1 | 0;
      break label$5;
     }
     $38_1 = 1;
    }
    $41_1 = $38_1;
    break label$3;
   }
   $41_1 = 0;
  }
  global$0 = $4_1 + 16 | 0;
  return ($41_1 | 0) != (0 | 0) & 1 | 0 | 0;
 }
 
 function $15($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $10_1 = 0, $15_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP8[($3_1 + 15 | 0) >> 0] = $0_1;
  $5_1 = 24;
  $10_1 = 24;
  $15_1 = (((HEAPU8[($3_1 + 15 | 0) >> 0] | 0) << $5_1 | 0) >> $5_1 | 0 | 0) == ((($13(0 | 0) | 0) << $10_1 | 0) >> $10_1 | 0 | 0) & 1 | 0;
  global$0 = $3_1 + 16 | 0;
  return $15_1 | 0;
 }
 
 function $16($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $27_1 = 0, $38_1 = 0, $50_1 = 0, $55_1 = 0, $61_1 = 0, $70_1 = 0;
  $5_1 = global$0 - 16 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 4 | 0) >> 2] = $2_1;
  label$1 : {
   label$2 : {
    if (!($39($10() | 0 | 0) | 0)) {
     break label$2
    }
    break label$1;
   }
   $60(65603 | 0);
   $40();
   wasm2js_trap();
  }
  label$3 : {
   label$4 : {
    if (!((HEAP32[($5_1 + 12 | 0) >> 2] | 0) >>> 0 < ((HEAP32[($5_1 + 12 | 0) >> 2] | 0) + 1 | 0) >>> 0 & 1 | 0)) {
     break label$4
    }
    if (!(((HEAP32[($5_1 + 12 | 0) >> 2] | 0) + 1 | 0) >>> 0 < (HEAP32[($5_1 + 8 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
     break label$4
    }
    $27_1 = 24;
    label$5 : {
     label$6 : {
      label$7 : {
       if (($15(((HEAPU8[((HEAP32[($5_1 + 4 | 0) >> 2] | 0) + (HEAP32[($5_1 + 12 | 0) >> 2] | 0) | 0) >> 0] | 0) << $27_1 | 0) >> $27_1 | 0 | 0) | 0) & 1 | 0) {
        break label$7
       }
       $38_1 = 24;
       if (($14(0 | 0, ((HEAPU8[((HEAP32[($5_1 + 4 | 0) >> 2] | 0) + (HEAP32[($5_1 + 12 | 0) >> 2] | 0) | 0) >> 0] | 0) << $38_1 | 0) >> $38_1 | 0 | 0) | 0) & 1 | 0) {
        break label$6
       }
      }
      $50_1 = $16((HEAP32[($5_1 + 12 | 0) >> 2] | 0) + 1 | 0 | 0, HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0) | 0;
      break label$5;
     }
     $50_1 = (HEAP32[($5_1 + 4 | 0) >> 2] | 0) + (HEAP32[($5_1 + 12 | 0) >> 2] | 0) | 0;
    }
    $55_1 = $50_1;
    break label$3;
   }
   $61_1 = 24;
   label$8 : {
    label$9 : {
     if (!(($14(0 | 0, ((HEAPU8[((HEAP32[($5_1 + 4 | 0) >> 2] | 0) + (HEAP32[($5_1 + 12 | 0) >> 2] | 0) | 0) >> 0] | 0) << $61_1 | 0) >> $61_1 | 0 | 0) | 0) & 1 | 0)) {
      break label$9
     }
     $70_1 = (HEAP32[($5_1 + 4 | 0) >> 2] | 0) + (HEAP32[($5_1 + 12 | 0) >> 2] | 0) | 0;
     break label$8;
    }
    $70_1 = 0;
   }
   $55_1 = $70_1;
  }
  global$0 = $5_1 + 16 | 0;
  return $55_1 | 0;
 }
 
 function $17($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $28_1 = 0, $40_1 = 0, $45_1 = 0, $51_1 = 0, $60_1 = 0;
  $5_1 = global$0 - 16 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 4 | 0) >> 2] = $2_1;
  label$1 : {
   label$2 : {
    if (!($39($10() | 0 | 0) | 0)) {
     break label$2
    }
    break label$1;
   }
   $60(65603 | 0);
   $40();
   wasm2js_trap();
  }
  label$3 : {
   label$4 : {
    if (!((HEAP32[($5_1 + 12 | 0) >> 2] | 0) >>> 0 < ((HEAP32[($5_1 + 12 | 0) >> 2] | 0) + 1 | 0) >>> 0 & 1 | 0)) {
     break label$4
    }
    if (!(((HEAP32[($5_1 + 12 | 0) >> 2] | 0) + 1 | 0) >>> 0 < (HEAP32[($5_1 + 8 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
     break label$4
    }
    $28_1 = 24;
    label$5 : {
     label$6 : {
      if (!(($14(0 | 0, ((HEAPU8[((HEAP32[($5_1 + 4 | 0) >> 2] | 0) + (HEAP32[($5_1 + 12 | 0) >> 2] | 0) | 0) >> 0] | 0) << $28_1 | 0) >> $28_1 | 0 | 0) | 0) & 1 | 0)) {
       break label$6
      }
      $40_1 = $17((HEAP32[($5_1 + 12 | 0) >> 2] | 0) + 1 | 0 | 0, HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0) | 0;
      break label$5;
     }
     $40_1 = (HEAP32[($5_1 + 4 | 0) >> 2] | 0) + (HEAP32[($5_1 + 12 | 0) >> 2] | 0) | 0;
    }
    $45_1 = $40_1;
    break label$3;
   }
   $51_1 = 24;
   label$7 : {
    label$8 : {
     if (!(($14(0 | 0, ((HEAPU8[((HEAP32[($5_1 + 4 | 0) >> 2] | 0) + (HEAP32[($5_1 + 12 | 0) >> 2] | 0) | 0) >> 0] | 0) << $51_1 | 0) >> $51_1 | 0 | 0) | 0) & 1 | 0)) {
      break label$8
     }
     $60_1 = (HEAP32[($5_1 + 4 | 0) >> 2] | 0) + (HEAP32[($5_1 + 12 | 0) >> 2] | 0) | 0;
     break label$7;
    }
    $60_1 = ((HEAP32[($5_1 + 4 | 0) >> 2] | 0) + (HEAP32[($5_1 + 12 | 0) >> 2] | 0) | 0) + -1 | 0;
   }
   $45_1 = $60_1;
  }
  global$0 = $5_1 + 16 | 0;
  return $45_1 | 0;
 }
 
 function $18($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $10_1 = 0, $24_1 = 0, $29_1 = 0, $36_1 = 0, $41_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP8[($4_1 + 11 | 0) >> 0] = $1_1;
  label$1 : {
   label$2 : {
    if (!($39($10() | 0 | 0) | 0)) {
     break label$2
    }
    break label$1;
   }
   $60(65603 | 0);
   $40();
   wasm2js_trap();
  }
  $10_1 = 24;
  label$3 : {
   if (($14(0 | 0, ((HEAPU8[($4_1 + 11 | 0) >> 0] | 0) << $10_1 | 0) >> $10_1 | 0 | 0) | 0) & 1 | 0) {
    break label$3
   }
   $40();
   wasm2js_trap();
  }
  label$4 : {
   if ((HEAP32[($4_1 + 12 | 0) >> 2] | 0) >>> 0 < ((HEAP32[($4_1 + 12 | 0) >> 2] | 0) + 1 | 0) >>> 0 & 1 | 0) {
    break label$4
   }
   $40();
   wasm2js_trap();
  }
  $24_1 = 24;
  $29_1 = 24;
  label$5 : {
   label$6 : {
    if (!((((HEAPU8[($4_1 + 11 | 0) >> 0] | 0) << $24_1 | 0) >> $24_1 | 0 | 0) == ((($13(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) | 0) << $29_1 | 0) >> $29_1 | 0 | 0) & 1 | 0)) {
     break label$6
    }
    $36_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
    break label$5;
   }
   $41_1 = 24;
   $36_1 = $18((HEAP32[($4_1 + 12 | 0) >> 2] | 0) + 1 | 0 | 0, ((HEAPU8[($4_1 + 11 | 0) >> 0] | 0) << $41_1 | 0) >> $41_1 | 0 | 0) | 0;
  }
  global$0 = $4_1 + 16 | 0;
  return $36_1 | 0;
 }
 
 function $19($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $10_1 = 0, $16_1 = 0, $38_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP8[($4_1 + 11 | 0) >> 0] = $0_1;
  HEAP8[($4_1 + 10 | 0) >> 0] = $1_1;
  label$1 : {
   label$2 : {
    if (!($39($10() | 0 | 0) | 0)) {
     break label$2
    }
    break label$1;
   }
   $60(65603 | 0);
   $40();
   wasm2js_trap();
  }
  $10_1 = 24;
  HEAP32[($4_1 + 4 | 0) >> 2] = $18(0 | 0, ((HEAPU8[($4_1 + 11 | 0) >> 0] | 0) << $10_1 | 0) >> $10_1 | 0 | 0) | 0;
  $16_1 = 24;
  HEAP32[$4_1 >> 2] = $18(0 | 0, ((HEAPU8[($4_1 + 10 | 0) >> 0] | 0) << $16_1 | 0) >> $16_1 | 0 | 0) | 0;
  label$3 : {
   label$4 : {
    if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) == (HEAP32[$4_1 >> 2] | 0 | 0) & 1 | 0)) {
     break label$4
    }
    HEAP32[($4_1 + 12 | 0) >> 2] = 0;
    break label$3;
   }
   label$5 : {
    if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0) >>> 0 > (HEAP32[$4_1 >> 2] | 0) >>> 0 & 1 | 0)) {
     break label$5
    }
    HEAP32[($4_1 + 12 | 0) >> 2] = 1;
    break label$3;
   }
   label$6 : {
    if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0) >>> 0 < (HEAP32[$4_1 >> 2] | 0) >>> 0 & 1 | 0)) {
     break label$6
    }
    HEAP32[($4_1 + 12 | 0) >> 2] = -1;
    break label$3;
   }
   $40();
   wasm2js_trap();
  }
  $38_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  global$0 = $4_1 + 16 | 0;
  return $38_1 | 0;
 }
 
 function $20($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $93_1 = 0, $110_1 = 0, $113_1 = 0, $123 = 0;
  $4_1 = global$0 - 48 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 40 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 36 | 0) >> 2] = $1_1;
  label$1 : {
   label$2 : {
    if (!($39($10() | 0 | 0) | 0)) {
     break label$2
    }
    break label$1;
   }
   $60(65603 | 0);
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 32 | 0) >> 2] = 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = 0;
  HEAP32[($4_1 + 20 | 0) >> 2] = 0;
  HEAP32[($4_1 + 16 | 0) >> 2] = 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = 0;
  HEAP32[($4_1 + 32 | 0) >> 2] = $39(HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = $39(HEAP32[($4_1 + 36 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 32 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 20 | 0) >> 2] = $16(0 | 0, HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 36 | 0) >> 2] | 0 | 0) | 0;
  label$3 : {
   label$4 : {
    if (!((HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$4
    }
    if ((HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$3
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 16 | 0) >> 2] = $17((HEAP32[($4_1 + 24 | 0) >> 2] | 0) - (HEAP32[($4_1 + 40 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 32 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = $17((HEAP32[($4_1 + 20 | 0) >> 2] | 0) - (HEAP32[($4_1 + 36 | 0) >> 2] | 0) | 0 | 0, HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 36 | 0) >> 2] | 0 | 0) | 0;
  label$5 : {
   label$6 : {
    if (!((HEAP32[($4_1 + 16 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
     break label$6
    }
    if ((HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0) {
     break label$5
    }
   }
   $40();
   wasm2js_trap();
  }
  HEAP32[($4_1 + 32 | 0) >> 2] = ((HEAP32[($4_1 + 16 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 24 | 0) >> 2] | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = ((HEAP32[($4_1 + 12 | 0) >> 2] | 0) + 1 | 0) - (HEAP32[($4_1 + 20 | 0) >> 2] | 0) | 0;
  label$7 : {
   label$8 : {
    if (!((HEAP32[($4_1 + 32 | 0) >> 2] | 0) >>> 0 > (HEAP32[($4_1 + 28 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
     break label$8
    }
    HEAP32[($4_1 + 44 | 0) >> 2] = 1;
    break label$7;
   }
   label$9 : {
    if (!((HEAP32[($4_1 + 32 | 0) >> 2] | 0) >>> 0 < (HEAP32[($4_1 + 28 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
     break label$9
    }
    HEAP32[($4_1 + 44 | 0) >> 2] = -1;
    break label$7;
   }
   label$10 : {
    if (!((HEAP32[($4_1 + 32 | 0) >> 2] | 0 | 0) == (HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0) & 1 | 0)) {
     break label$10
    }
    HEAP32[($4_1 + 8 | 0) >> 2] = 0;
    HEAP32[($4_1 + 4 | 0) >> 2] = 0;
    label$11 : while (1) {
     $93_1 = 0;
     label$12 : {
      if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0) >>> 0 < (HEAP32[($4_1 + 32 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
       break label$12
      }
      $93_1 = (HEAP32[($4_1 + 4 | 0) >> 2] | 0) >>> 0 < ((HEAP32[($4_1 + 4 | 0) >> 2] | 0) + 1 | 0) >>> 0;
     }
     label$13 : {
      if (!($93_1 & 1 | 0)) {
       break label$13
      }
      $110_1 = 24;
      $113_1 = 24;
      HEAP32[($4_1 + 8 | 0) >> 2] = $19(((HEAPU8[((HEAP32[($4_1 + 24 | 0) >> 2] | 0) + (HEAP32[($4_1 + 4 | 0) >> 2] | 0) | 0) >> 0] | 0) << $110_1 | 0) >> $110_1 | 0 | 0, ((HEAPU8[((HEAP32[($4_1 + 20 | 0) >> 2] | 0) + (HEAP32[($4_1 + 4 | 0) >> 2] | 0) | 0) >> 0] | 0) << $113_1 | 0) >> $113_1 | 0 | 0) | 0;
      label$14 : {
       label$15 : {
        if (HEAP32[($4_1 + 8 | 0) >> 2] | 0) {
         break label$15
        }
        break label$14;
       }
       HEAP32[($4_1 + 44 | 0) >> 2] = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
       break label$7;
      }
      HEAP32[($4_1 + 4 | 0) >> 2] = (HEAP32[($4_1 + 4 | 0) >> 2] | 0) + 1 | 0;
      continue label$11;
     }
     break label$11;
    };
    HEAP32[($4_1 + 44 | 0) >> 2] = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
    break label$7;
   }
   $40();
   wasm2js_trap();
  }
  $123 = HEAP32[($4_1 + 44 | 0) >> 2] | 0;
  global$0 = $4_1 + 48 | 0;
  return $123 | 0;
 }
 
 function $21($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $7_1 = 0, $11_1 = 0, $20_1 = 0, $18_1 = 0, $26_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  HEAP8[($3_1 + 31 | 0) >> 0] = $0_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = 0;
  $7_1 = 24;
  HEAP32[$3_1 >> 2] = ((HEAPU8[($3_1 + 31 | 0) >> 0] | 0) << $7_1 | 0) >> $7_1 | 0;
  $11_1 = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = $66($11_1 | 0, $11_1 | 0, 65604 | 0, $3_1 | 0) | 0;
  HEAP32[($3_1 + 24 | 0) >> 2] = $104((HEAP32[($3_1 + 20 | 0) >> 2] | 0) + 1 | 0 | 0, 1 | 0) | 0;
  $18_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
  $20_1 = 24;
  HEAP32[($3_1 + 16 | 0) >> 2] = ((HEAPU8[($3_1 + 31 | 0) >> 0] | 0) << $20_1 | 0) >> $20_1 | 0;
  $67($18_1 | 0, 65604 | 0, $3_1 + 16 | 0 | 0) | 0;
  $26_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
  global$0 = $3_1 + 32 | 0;
  return $26_1 | 0;
 }
 
 function $22($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $10_1 = 0, $17_1 = 0, $24_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  HEAP8[($3_1 + 31 | 0) >> 0] = $0_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = 0;
  HEAP32[$3_1 >> 2] = (HEAPU8[($3_1 + 31 | 0) >> 0] | 0) & 255 | 0;
  $10_1 = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = $66($10_1 | 0, $10_1 | 0, 65608 | 0, $3_1 | 0) | 0;
  HEAP32[($3_1 + 24 | 0) >> 2] = $104((HEAP32[($3_1 + 20 | 0) >> 2] | 0) + 1 | 0 | 0, 1 | 0) | 0;
  $17_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
  HEAP32[($3_1 + 16 | 0) >> 2] = (HEAPU8[($3_1 + 31 | 0) >> 0] | 0) & 255 | 0;
  $67($17_1 | 0, 65608 | 0, $3_1 + 16 | 0 | 0) | 0;
  $24_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
  global$0 = $3_1 + 32 | 0;
  return $24_1 | 0;
 }
 
 function $23($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $7_1 = 0, $11_1 = 0, $20_1 = 0, $18_1 = 0, $26_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  HEAP16[($3_1 + 30 | 0) >> 1] = $0_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = 0;
  $7_1 = 16;
  HEAP32[$3_1 >> 2] = ((HEAPU16[($3_1 + 30 | 0) >> 1] | 0) << $7_1 | 0) >> $7_1 | 0;
  $11_1 = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = $66($11_1 | 0, $11_1 | 0, 65604 | 0, $3_1 | 0) | 0;
  HEAP32[($3_1 + 24 | 0) >> 2] = $104((HEAP32[($3_1 + 20 | 0) >> 2] | 0) + 1 | 0 | 0, 1 | 0) | 0;
  $18_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
  $20_1 = 16;
  HEAP32[($3_1 + 16 | 0) >> 2] = ((HEAPU16[($3_1 + 30 | 0) >> 1] | 0) << $20_1 | 0) >> $20_1 | 0;
  $67($18_1 | 0, 65604 | 0, $3_1 + 16 | 0 | 0) | 0;
  $26_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
  global$0 = $3_1 + 32 | 0;
  return $26_1 | 0;
 }
 
 function $24($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $10_1 = 0, $17_1 = 0, $24_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  HEAP16[($3_1 + 30 | 0) >> 1] = $0_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = 0;
  HEAP32[$3_1 >> 2] = (HEAPU16[($3_1 + 30 | 0) >> 1] | 0) & 65535 | 0;
  $10_1 = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = $66($10_1 | 0, $10_1 | 0, 65608 | 0, $3_1 | 0) | 0;
  HEAP32[($3_1 + 24 | 0) >> 2] = $104((HEAP32[($3_1 + 20 | 0) >> 2] | 0) + 1 | 0 | 0, 1 | 0) | 0;
  $17_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
  HEAP32[($3_1 + 16 | 0) >> 2] = (HEAPU16[($3_1 + 30 | 0) >> 1] | 0) & 65535 | 0;
  $67($17_1 | 0, 65608 | 0, $3_1 + 16 | 0 | 0) | 0;
  $24_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
  global$0 = $3_1 + 32 | 0;
  return $24_1 | 0;
 }
 
 function $25($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $8_1 = 0, $15_1 = 0, $20_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = 0;
  HEAP32[$3_1 >> 2] = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
  $8_1 = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = $66($8_1 | 0, $8_1 | 0, 65604 | 0, $3_1 | 0) | 0;
  HEAP32[($3_1 + 24 | 0) >> 2] = $104((HEAP32[($3_1 + 20 | 0) >> 2] | 0) + 1 | 0 | 0, 1 | 0) | 0;
  $15_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
  HEAP32[($3_1 + 16 | 0) >> 2] = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
  $67($15_1 | 0, 65604 | 0, $3_1 + 16 | 0 | 0) | 0;
  $20_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
  global$0 = $3_1 + 32 | 0;
  return $20_1 | 0;
 }
 
 function $26($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $8_1 = 0, $15_1 = 0, $20_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = 0;
  HEAP32[$3_1 >> 2] = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
  $8_1 = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = $66($8_1 | 0, $8_1 | 0, 65608 | 0, $3_1 | 0) | 0;
  HEAP32[($3_1 + 24 | 0) >> 2] = $104((HEAP32[($3_1 + 20 | 0) >> 2] | 0) + 1 | 0 | 0, 1 | 0) | 0;
  $15_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
  HEAP32[($3_1 + 16 | 0) >> 2] = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
  $67($15_1 | 0, 65608 | 0, $3_1 + 16 | 0 | 0) | 0;
  $20_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
  global$0 = $3_1 + 32 | 0;
  return $20_1 | 0;
 }
 
 function $27($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $8_1 = 0, $15_1 = 0, $20_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = 0;
  HEAP32[$3_1 >> 2] = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
  $8_1 = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = $66($8_1 | 0, $8_1 | 0, 65612 | 0, $3_1 | 0) | 0;
  HEAP32[($3_1 + 24 | 0) >> 2] = $104((HEAP32[($3_1 + 20 | 0) >> 2] | 0) + 1 | 0 | 0, 1 | 0) | 0;
  $15_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
  HEAP32[($3_1 + 16 | 0) >> 2] = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
  $67($15_1 | 0, 65612 | 0, $3_1 + 16 | 0 | 0) | 0;
  $20_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
  global$0 = $3_1 + 32 | 0;
  return $20_1 | 0;
 }
 
 function $28($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $8_1 = 0, $15_1 = 0, $20_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = 0;
  HEAP32[$3_1 >> 2] = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
  $8_1 = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = $66($8_1 | 0, $8_1 | 0, 65617 | 0, $3_1 | 0) | 0;
  HEAP32[($3_1 + 24 | 0) >> 2] = $104((HEAP32[($3_1 + 20 | 0) >> 2] | 0) + 1 | 0 | 0, 1 | 0) | 0;
  $15_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
  HEAP32[($3_1 + 16 | 0) >> 2] = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
  $67($15_1 | 0, 65617 | 0, $3_1 + 16 | 0 | 0) | 0;
  $20_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
  global$0 = $3_1 + 32 | 0;
  return $20_1 | 0;
 }
 
 function $29($0_1, $0$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  var $3_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $7_1 = 0, $37_1 = 0, $14_1 = 0, $60_1 = 0, $18_1 = 0;
  $3_1 = global$0 - 48 | 0;
  global$0 = $3_1;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 40 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 44 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($3_1 + 36 | 0) >> 2] = 0;
  HEAP32[($3_1 + 32 | 0) >> 2] = 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 40 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 44 | 0) >> 2] | 0;
  $37_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[$3_1 >> 2] = $37_1;
  HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $7_1 = 0;
  HEAP32[($3_1 + 32 | 0) >> 2] = $66($7_1 | 0, $7_1 | 0, 65622 | 0, $3_1 | 0) | 0;
  HEAP32[($3_1 + 36 | 0) >> 2] = $104((HEAP32[($3_1 + 32 | 0) >> 2] | 0) + 1 | 0 | 0, 1 | 0) | 0;
  $14_1 = HEAP32[($3_1 + 36 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 40 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 44 | 0) >> 2] | 0;
  $60_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 16 | 0) >> 2] = $60_1;
  HEAP32[($3_1 + 20 | 0) >> 2] = i64toi32_i32$0;
  $67($14_1 | 0, 65622 | 0, $3_1 + 16 | 0 | 0) | 0;
  $18_1 = HEAP32[($3_1 + 36 | 0) >> 2] | 0;
  global$0 = $3_1 + 48 | 0;
  return $18_1 | 0;
 }
 
 function $30($0_1, $0$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  var $3_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $7_1 = 0, $37_1 = 0, $14_1 = 0, $60_1 = 0, $18_1 = 0;
  $3_1 = global$0 - 48 | 0;
  global$0 = $3_1;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 40 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 44 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($3_1 + 36 | 0) >> 2] = 0;
  HEAP32[($3_1 + 32 | 0) >> 2] = 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 40 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 44 | 0) >> 2] | 0;
  $37_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  HEAP32[$3_1 >> 2] = $37_1;
  HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $7_1 = 0;
  HEAP32[($3_1 + 32 | 0) >> 2] = $66($7_1 | 0, $7_1 | 0, 65628 | 0, $3_1 | 0) | 0;
  HEAP32[($3_1 + 36 | 0) >> 2] = $104((HEAP32[($3_1 + 32 | 0) >> 2] | 0) + 1 | 0 | 0, 1 | 0) | 0;
  $14_1 = HEAP32[($3_1 + 36 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 40 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 44 | 0) >> 2] | 0;
  $60_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 16 | 0) >> 2] = $60_1;
  HEAP32[($3_1 + 20 | 0) >> 2] = i64toi32_i32$0;
  $67($14_1 | 0, 65628 | 0, $3_1 + 16 | 0 | 0) | 0;
  $18_1 = HEAP32[($3_1 + 36 | 0) >> 2] | 0;
  global$0 = $3_1 + 48 | 0;
  return $18_1 | 0;
 }
 
 function $31() {
  return HEAP32[(0 + 68508 | 0) >> 2] | 0 | 0;
 }
 
 function $32($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  label$1 : {
   if (!((HEAP32[(0 + 68508 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
    break label$1
   }
   $103(HEAP32[(0 + 68508 | 0) >> 2] | 0 | 0);
   HEAP32[(0 + 68508 | 0) >> 2] = 0;
  }
  label$2 : {
   if (!((HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
    break label$2
   }
   HEAP32[(0 + 68508 | 0) >> 2] = $104(($39(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0) + 1 | 0 | 0, 1 | 0) | 0;
  }
  label$3 : {
   if (!((HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
    break label$3
   }
   if (!($39(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0)) {
    break label$3
   }
   $41(HEAP32[(0 + 68508 | 0) >> 2] | 0 | 0, HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0, $39(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0 | 0) | 0;
  }
  global$0 = $3_1 + 16 | 0;
  return;
 }
 
 function $33() {
  return HEAP32[(0 + 68512 | 0) >> 2] | 0 | 0;
 }
 
 function $34($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  label$1 : {
   if (!((HEAP32[(0 + 68512 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
    break label$1
   }
   $103(HEAP32[(0 + 68512 | 0) >> 2] | 0 | 0);
   HEAP32[(0 + 68512 | 0) >> 2] = 0;
  }
  label$2 : {
   if (!((HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
    break label$2
   }
   HEAP32[(0 + 68512 | 0) >> 2] = $104(($39(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0) + 1 | 0 | 0, 1 | 0) | 0;
  }
  label$3 : {
   if (!((HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) != (0 | 0) & 1 | 0)) {
    break label$3
   }
   if (!($39(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0)) {
    break label$3
   }
   $41(HEAP32[(0 + 68512 | 0) >> 2] | 0 | 0, HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0, $39(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0 | 0) | 0;
  }
  global$0 = $3_1 + 16 | 0;
  return;
 }
 
 function $35($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[(0 + 68512 | 0) >> 2] = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  return;
 }
 
 function $36($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $31_1 = 0, $41_1 = 0;
  $5_1 = global$0 - 16 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 4 | 0) >> 2] = $2_1;
  label$1 : {
   label$2 : {
    if (!(HEAP32[($5_1 + 8 | 0) >> 2] | 0)) {
     break label$2
    }
    if (!($39($31() | 0 | 0) | 0)) {
     break label$2
    }
    if (!(((HEAP32[($5_1 + 12 | 0) >> 2] | 0) + ($39($31() | 0 | 0) | 0) | 0) >>> 0 <= (HEAP32[($5_1 + 8 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
     break label$2
    }
    if (!((HEAP32[($5_1 + 12 | 0) >> 2] | 0) >>> 0 <= ($39($31() | 0 | 0) | 0) >>> 0 & 1 | 0)) {
     break label$2
    }
    label$3 : {
     label$4 : {
      if ($76($31() | 0 | 0, (HEAP32[($5_1 + 4 | 0) >> 2] | 0) + (HEAP32[($5_1 + 12 | 0) >> 2] | 0) | 0 | 0, $39($31() | 0 | 0) | 0 | 0) | 0) {
       break label$4
      }
      $31_1 = 1;
      break label$3;
     }
     $31_1 = ($36((HEAP32[($5_1 + 12 | 0) >> 2] | 0) + 1 | 0 | 0, HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0) | 0) & 1 | 0;
    }
    $41_1 = $31_1;
    break label$1;
   }
   $41_1 = 0;
  }
  global$0 = $5_1 + 16 | 0;
  return ($41_1 | 0) != (0 | 0) & 1 | 0 | 0;
 }
 
 function $37($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $31_1 = 0, $41_1 = 0;
  $5_1 = global$0 - 16 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 4 | 0) >> 2] = $2_1;
  label$1 : {
   label$2 : {
    if (!(HEAP32[($5_1 + 8 | 0) >> 2] | 0)) {
     break label$2
    }
    if (!($39($33() | 0 | 0) | 0)) {
     break label$2
    }
    if (!(((HEAP32[($5_1 + 12 | 0) >> 2] | 0) + ($39($33() | 0 | 0) | 0) | 0) >>> 0 <= (HEAP32[($5_1 + 8 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
     break label$2
    }
    if (!((HEAP32[($5_1 + 12 | 0) >> 2] | 0) >>> 0 <= ($39($33() | 0 | 0) | 0) >>> 0 & 1 | 0)) {
     break label$2
    }
    label$3 : {
     label$4 : {
      if ($76($33() | 0 | 0, (HEAP32[($5_1 + 4 | 0) >> 2] | 0) + (HEAP32[($5_1 + 12 | 0) >> 2] | 0) | 0 | 0, $39($33() | 0 | 0) | 0 | 0) | 0) {
       break label$4
      }
      $31_1 = 1;
      break label$3;
     }
     $31_1 = ($37((HEAP32[($5_1 + 12 | 0) >> 2] | 0) + 1 | 0 | 0, HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0) | 0) & 1 | 0;
    }
    $41_1 = $31_1;
    break label$1;
   }
   $41_1 = 0;
  }
  global$0 = $5_1 + 16 | 0;
  return ($41_1 | 0) != (0 | 0) & 1 | 0 | 0;
 }
 
 function $38($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $13_1 = 0;
  $5_1 = global$0 - 16 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 4 | 0) >> 2] = $2_1;
  $13_1 = 0;
  label$1 : {
   if (($36(HEAP32[($5_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0) | 0) & 1 | 0) {
    break label$1
   }
   $13_1 = ($37(HEAP32[($5_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0) | 0) ^ -1 | 0;
  }
  global$0 = $5_1 + 16 | 0;
  return $13_1 & 1 | 0 | 0;
 }
 
 function $39($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = 0;
  label$1 : {
   label$2 : while (1) {
    $9_1 = 24;
    if (!(((HEAPU8[((HEAP32[($3_1 + 12 | 0) >> 2] | 0) + (HEAP32[($3_1 + 8 | 0) >> 2] | 0) | 0) >> 0] | 0) << $9_1 | 0) >> $9_1 | 0)) {
     break label$1
    }
    HEAP32[($3_1 + 8 | 0) >> 2] = (HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 1 | 0;
    continue label$2;
   };
  }
  return HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0;
 }
 
 function $40() {
  fimport$0();
  wasm2js_trap();
 }
 
 function $41($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0;
  label$1 : {
   if ($2_1 >>> 0 < 512 >>> 0) {
    break label$1
   }
   fimport$1($0_1 | 0, $1_1 | 0, $2_1 | 0);
   return $0_1 | 0;
  }
  $3_1 = $0_1 + $2_1 | 0;
  label$2 : {
   label$3 : {
    if (($1_1 ^ $0_1 | 0) & 3 | 0) {
     break label$3
    }
    label$4 : {
     label$5 : {
      if ($0_1 & 3 | 0) {
       break label$5
      }
      $2_1 = $0_1;
      break label$4;
     }
     label$6 : {
      if ($2_1) {
       break label$6
      }
      $2_1 = $0_1;
      break label$4;
     }
     $2_1 = $0_1;
     label$7 : while (1) {
      HEAP8[$2_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
      $1_1 = $1_1 + 1 | 0;
      $2_1 = $2_1 + 1 | 0;
      if (!($2_1 & 3 | 0)) {
       break label$4
      }
      if ($2_1 >>> 0 < $3_1 >>> 0) {
       continue label$7
      }
      break label$7;
     };
    }
    $4_1 = $3_1 & -4 | 0;
    label$8 : {
     if ($3_1 >>> 0 < 64 >>> 0) {
      break label$8
     }
     $5_1 = $4_1 + -64 | 0;
     if ($2_1 >>> 0 > $5_1 >>> 0) {
      break label$8
     }
     label$9 : while (1) {
      HEAP32[$2_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
      HEAP32[($2_1 + 4 | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
      HEAP32[($2_1 + 8 | 0) >> 2] = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
      HEAP32[($2_1 + 12 | 0) >> 2] = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
      HEAP32[($2_1 + 16 | 0) >> 2] = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
      HEAP32[($2_1 + 20 | 0) >> 2] = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
      HEAP32[($2_1 + 24 | 0) >> 2] = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
      HEAP32[($2_1 + 28 | 0) >> 2] = HEAP32[($1_1 + 28 | 0) >> 2] | 0;
      HEAP32[($2_1 + 32 | 0) >> 2] = HEAP32[($1_1 + 32 | 0) >> 2] | 0;
      HEAP32[($2_1 + 36 | 0) >> 2] = HEAP32[($1_1 + 36 | 0) >> 2] | 0;
      HEAP32[($2_1 + 40 | 0) >> 2] = HEAP32[($1_1 + 40 | 0) >> 2] | 0;
      HEAP32[($2_1 + 44 | 0) >> 2] = HEAP32[($1_1 + 44 | 0) >> 2] | 0;
      HEAP32[($2_1 + 48 | 0) >> 2] = HEAP32[($1_1 + 48 | 0) >> 2] | 0;
      HEAP32[($2_1 + 52 | 0) >> 2] = HEAP32[($1_1 + 52 | 0) >> 2] | 0;
      HEAP32[($2_1 + 56 | 0) >> 2] = HEAP32[($1_1 + 56 | 0) >> 2] | 0;
      HEAP32[($2_1 + 60 | 0) >> 2] = HEAP32[($1_1 + 60 | 0) >> 2] | 0;
      $1_1 = $1_1 + 64 | 0;
      $2_1 = $2_1 + 64 | 0;
      if ($2_1 >>> 0 <= $5_1 >>> 0) {
       continue label$9
      }
      break label$9;
     };
    }
    if ($2_1 >>> 0 >= $4_1 >>> 0) {
     break label$2
    }
    label$10 : while (1) {
     HEAP32[$2_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
     $1_1 = $1_1 + 4 | 0;
     $2_1 = $2_1 + 4 | 0;
     if ($2_1 >>> 0 < $4_1 >>> 0) {
      continue label$10
     }
     break label$2;
    };
   }
   label$11 : {
    if ($3_1 >>> 0 >= 4 >>> 0) {
     break label$11
    }
    $2_1 = $0_1;
    break label$2;
   }
   label$12 : {
    $4_1 = $3_1 + -4 | 0;
    if ($0_1 >>> 0 <= $4_1 >>> 0) {
     break label$12
    }
    $2_1 = $0_1;
    break label$2;
   }
   $2_1 = $0_1;
   label$13 : while (1) {
    HEAP8[$2_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
    HEAP8[($2_1 + 1 | 0) >> 0] = HEAPU8[($1_1 + 1 | 0) >> 0] | 0;
    HEAP8[($2_1 + 2 | 0) >> 0] = HEAPU8[($1_1 + 2 | 0) >> 0] | 0;
    HEAP8[($2_1 + 3 | 0) >> 0] = HEAPU8[($1_1 + 3 | 0) >> 0] | 0;
    $1_1 = $1_1 + 4 | 0;
    $2_1 = $2_1 + 4 | 0;
    if ($2_1 >>> 0 <= $4_1 >>> 0) {
     continue label$13
    }
    break label$13;
   };
  }
  label$14 : {
   if ($2_1 >>> 0 >= $3_1 >>> 0) {
    break label$14
   }
   label$15 : while (1) {
    HEAP8[$2_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
    $1_1 = $1_1 + 1 | 0;
    $2_1 = $2_1 + 1 | 0;
    if (($2_1 | 0) != ($3_1 | 0)) {
     continue label$15
    }
    break label$15;
   };
  }
  return $0_1 | 0;
 }
 
 function $42() {
  return 68516 | 0;
 }
 
 function $43($0_1) {
  $0_1 = $0_1 | 0;
  return 1 | 0;
 }
 
 function $44($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $45($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return 0 | 0;
 }
 
 function $46($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $47($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $48() {
  $46(68520 | 0);
  return 68524 | 0;
 }
 
 function $49() {
  $47(68520 | 0);
 }
 
 function $50($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[($0_1 + 72 | 0) >> 2] | 0;
  HEAP32[($0_1 + 72 | 0) >> 2] = $1_1 + -1 | 0 | $1_1 | 0;
  label$1 : {
   $1_1 = HEAP32[$0_1 >> 2] | 0;
   if (!($1_1 & 8 | 0)) {
    break label$1
   }
   HEAP32[$0_1 >> 2] = $1_1 | 32 | 0;
   return -1 | 0;
  }
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = 0;
  $1_1 = HEAP32[($0_1 + 44 | 0) >> 2] | 0;
  HEAP32[($0_1 + 28 | 0) >> 2] = $1_1;
  HEAP32[($0_1 + 20 | 0) >> 2] = $1_1;
  HEAP32[($0_1 + 16 | 0) >> 2] = $1_1 + (HEAP32[($0_1 + 48 | 0) >> 2] | 0) | 0;
  return 0 | 0;
 }
 
 function $51($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0;
  label$1 : {
   label$2 : {
    $3_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
    if ($3_1) {
     break label$2
    }
    $4_1 = 0;
    if ($50($2_1 | 0) | 0) {
     break label$1
    }
    $3_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
   }
   label$3 : {
    $4_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
    if ($1_1 >>> 0 <= ($3_1 - $4_1 | 0) >>> 0) {
     break label$3
    }
    return FUNCTION_TABLE[HEAP32[($2_1 + 36 | 0) >> 2] | 0 | 0]($2_1, $0_1, $1_1) | 0 | 0;
   }
   label$4 : {
    label$5 : {
     if ((HEAP32[($2_1 + 80 | 0) >> 2] | 0 | 0) < (0 | 0)) {
      break label$5
     }
     if (!$1_1) {
      break label$5
     }
     $3_1 = $1_1;
     label$6 : {
      label$7 : while (1) {
       $5_1 = $0_1 + $3_1 | 0;
       if ((HEAPU8[($5_1 + -1 | 0) >> 0] | 0 | 0) == (10 | 0)) {
        break label$6
       }
       $3_1 = $3_1 + -1 | 0;
       if (!$3_1) {
        break label$5
       }
       continue label$7;
      };
     }
     $4_1 = FUNCTION_TABLE[HEAP32[($2_1 + 36 | 0) >> 2] | 0 | 0]($2_1, $0_1, $3_1) | 0;
     if ($4_1 >>> 0 < $3_1 >>> 0) {
      break label$1
     }
     $1_1 = $1_1 - $3_1 | 0;
     $4_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
     break label$4;
    }
    $5_1 = $0_1;
    $3_1 = 0;
   }
   $41($4_1 | 0, $5_1 | 0, $1_1 | 0) | 0;
   HEAP32[($2_1 + 20 | 0) >> 2] = (HEAP32[($2_1 + 20 | 0) >> 2] | 0) + $1_1 | 0;
   $4_1 = $3_1 + $1_1 | 0;
  }
  return $4_1 | 0;
 }
 
 function $52($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  $4_1 = Math_imul($2_1, $1_1);
  label$1 : {
   label$2 : {
    if ((HEAP32[($3_1 + 76 | 0) >> 2] | 0 | 0) > (-1 | 0)) {
     break label$2
    }
    $0_1 = $51($0_1 | 0, $4_1 | 0, $3_1 | 0) | 0;
    break label$1;
   }
   $5_1 = $43($3_1 | 0) | 0;
   $0_1 = $51($0_1 | 0, $4_1 | 0, $3_1 | 0) | 0;
   if (!$5_1) {
    break label$1
   }
   $44($3_1 | 0);
  }
  label$3 : {
   if (($0_1 | 0) != ($4_1 | 0)) {
    break label$3
   }
   return ($1_1 ? $2_1 : 0) | 0;
  }
  return ($0_1 >>> 0) / ($1_1 >>> 0) | 0 | 0;
 }
 
 function $53($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $3_1 = 0, $2_1 = 0, $4_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  HEAP8[($2_1 + 15 | 0) >> 0] = $1_1;
  label$1 : {
   label$2 : {
    $3_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($3_1) {
     break label$2
    }
    label$3 : {
     if (!($50($0_1 | 0) | 0)) {
      break label$3
     }
     $3_1 = -1;
     break label$1;
    }
    $3_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
   }
   label$4 : {
    $4_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
    if (($4_1 | 0) == ($3_1 | 0)) {
     break label$4
    }
    $3_1 = $1_1 & 255 | 0;
    if ((HEAP32[($0_1 + 80 | 0) >> 2] | 0 | 0) == ($3_1 | 0)) {
     break label$4
    }
    HEAP32[($0_1 + 20 | 0) >> 2] = $4_1 + 1 | 0;
    HEAP8[$4_1 >> 0] = $1_1;
    break label$1;
   }
   label$5 : {
    if ((FUNCTION_TABLE[HEAP32[($0_1 + 36 | 0) >> 2] | 0 | 0]($0_1, $2_1 + 15 | 0, 1) | 0 | 0) == (1 | 0)) {
     break label$5
    }
    $3_1 = -1;
    break label$1;
   }
   $3_1 = HEAPU8[($2_1 + 15 | 0) >> 0] | 0;
  }
  global$0 = $2_1 + 16 | 0;
  return $3_1 | 0;
 }
 
 function $54($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $55($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $55($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  label$1 : {
   label$2 : {
    $2_1 = HEAP32[($1_1 + 76 | 0) >> 2] | 0;
    if (($2_1 | 0) < (0 | 0)) {
     break label$2
    }
    if (!$2_1) {
     break label$1
    }
    if (($2_1 & 1073741823 | 0 | 0) != (HEAP32[(($64() | 0) + 24 | 0) >> 2] | 0 | 0)) {
     break label$1
    }
   }
   label$3 : {
    $2_1 = $0_1 & 255 | 0;
    if (($2_1 | 0) == (HEAP32[($1_1 + 80 | 0) >> 2] | 0 | 0)) {
     break label$3
    }
    $3_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
    if (($3_1 | 0) == (HEAP32[($1_1 + 16 | 0) >> 2] | 0 | 0)) {
     break label$3
    }
    HEAP32[($1_1 + 20 | 0) >> 2] = $3_1 + 1 | 0;
    HEAP8[$3_1 >> 0] = $0_1;
    return $2_1 | 0;
   }
   return $53($1_1 | 0, $2_1 | 0) | 0 | 0;
  }
  return $56($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $56($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $3_1 = 0, $2_1 = 0, $4_1 = 0;
  label$1 : {
   $2_1 = $1_1 + 76 | 0;
   if (!($57($2_1 | 0) | 0)) {
    break label$1
   }
   $43($1_1 | 0) | 0;
  }
  label$2 : {
   label$3 : {
    $3_1 = $0_1 & 255 | 0;
    if (($3_1 | 0) == (HEAP32[($1_1 + 80 | 0) >> 2] | 0 | 0)) {
     break label$3
    }
    $4_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
    if (($4_1 | 0) == (HEAP32[($1_1 + 16 | 0) >> 2] | 0 | 0)) {
     break label$3
    }
    HEAP32[($1_1 + 20 | 0) >> 2] = $4_1 + 1 | 0;
    HEAP8[$4_1 >> 0] = $0_1;
    break label$2;
   }
   $3_1 = $53($1_1 | 0, $3_1 | 0) | 0;
  }
  label$4 : {
   if (!(($58($2_1 | 0) | 0) & 1073741824 | 0)) {
    break label$4
   }
   $59($2_1 | 0);
  }
  return $3_1 | 0;
 }
 
 function $57($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  HEAP32[$0_1 >> 2] = $1_1 ? $1_1 : 1073741823;
  return $1_1 | 0;
 }
 
 function $58($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  HEAP32[$0_1 >> 2] = 0;
  return $1_1 | 0;
 }
 
 function $59($0_1) {
  $0_1 = $0_1 | 0;
  $45($0_1 | 0, 1 | 0) | 0;
 }
 
 function $60($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = 0;
  $1_1 = $74(HEAP32[($42() | 0) >> 2] | 0 | 0) | 0;
  label$1 : {
   label$2 : {
    if ((HEAP32[(0 + 68428 | 0) >> 2] | 0 | 0) >= (0 | 0)) {
     break label$2
    }
    $2_1 = 1;
    break label$1;
   }
   $2_1 = !($43(68352 | 0) | 0);
  }
  $3_1 = HEAP32[(0 + 68424 | 0) >> 2] | 0;
  $4_1 = HEAP32[(0 + 68488 | 0) >> 2] | 0;
  label$3 : {
   if (!$0_1) {
    break label$3
   }
   if (!(HEAPU8[$0_1 >> 0] | 0)) {
    break label$3
   }
   $52($0_1 | 0, $75($0_1 | 0) | 0 | 0, 1 | 0, 68352 | 0) | 0;
   $54(58 | 0, 68352 | 0) | 0;
   $54(32 | 0, 68352 | 0) | 0;
  }
  $52($1_1 | 0, $75($1_1 | 0) | 0 | 0, 1 | 0, 68352 | 0) | 0;
  $54(10 | 0, 68352 | 0) | 0;
  HEAP32[(0 + 68488 | 0) >> 2] = $4_1;
  HEAP32[(0 + 68424 | 0) >> 2] = $3_1;
  label$4 : {
   if ($2_1) {
    break label$4
   }
   $44(68352 | 0);
  }
 }
 
 function $61($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, i64toi32_i32$0 = 0, $4_1 = 0, i64toi32_i32$1 = 0, $6_1 = 0, $5_1 = 0, $6$hi = 0;
  label$1 : {
   if (!$2_1) {
    break label$1
   }
   HEAP8[$0_1 >> 0] = $1_1;
   $3_1 = $0_1 + $2_1 | 0;
   HEAP8[($3_1 + -1 | 0) >> 0] = $1_1;
   if ($2_1 >>> 0 < 3 >>> 0) {
    break label$1
   }
   HEAP8[($0_1 + 2 | 0) >> 0] = $1_1;
   HEAP8[($0_1 + 1 | 0) >> 0] = $1_1;
   HEAP8[($3_1 + -3 | 0) >> 0] = $1_1;
   HEAP8[($3_1 + -2 | 0) >> 0] = $1_1;
   if ($2_1 >>> 0 < 7 >>> 0) {
    break label$1
   }
   HEAP8[($0_1 + 3 | 0) >> 0] = $1_1;
   HEAP8[($3_1 + -4 | 0) >> 0] = $1_1;
   if ($2_1 >>> 0 < 9 >>> 0) {
    break label$1
   }
   $4_1 = (0 - $0_1 | 0) & 3 | 0;
   $3_1 = $0_1 + $4_1 | 0;
   $1_1 = Math_imul($1_1 & 255 | 0, 16843009);
   HEAP32[$3_1 >> 2] = $1_1;
   $4_1 = ($2_1 - $4_1 | 0) & -4 | 0;
   $2_1 = $3_1 + $4_1 | 0;
   HEAP32[($2_1 + -4 | 0) >> 2] = $1_1;
   if ($4_1 >>> 0 < 9 >>> 0) {
    break label$1
   }
   HEAP32[($3_1 + 8 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 4 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -8 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -12 | 0) >> 2] = $1_1;
   if ($4_1 >>> 0 < 25 >>> 0) {
    break label$1
   }
   HEAP32[($3_1 + 24 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 20 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 16 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 12 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -16 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -20 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -24 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -28 | 0) >> 2] = $1_1;
   $5_1 = $3_1 & 4 | 0 | 24 | 0;
   $2_1 = $4_1 - $5_1 | 0;
   if ($2_1 >>> 0 < 32 >>> 0) {
    break label$1
   }
   i64toi32_i32$0 = 0;
   i64toi32_i32$1 = 1;
   i64toi32_i32$1 = __wasm_i64_mul($1_1 | 0, i64toi32_i32$0 | 0, 1 | 0, i64toi32_i32$1 | 0) | 0;
   i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
   $6_1 = i64toi32_i32$1;
   $6$hi = i64toi32_i32$0;
   $1_1 = $3_1 + $5_1 | 0;
   label$2 : while (1) {
    i64toi32_i32$0 = $6$hi;
    i64toi32_i32$1 = $1_1;
    HEAP32[($1_1 + 24 | 0) >> 2] = $6_1;
    HEAP32[($1_1 + 28 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $1_1;
    HEAP32[($1_1 + 16 | 0) >> 2] = $6_1;
    HEAP32[($1_1 + 20 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $1_1;
    HEAP32[($1_1 + 8 | 0) >> 2] = $6_1;
    HEAP32[($1_1 + 12 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $1_1;
    HEAP32[$1_1 >> 2] = $6_1;
    HEAP32[($1_1 + 4 | 0) >> 2] = i64toi32_i32$0;
    $1_1 = $1_1 + 32 | 0;
    $2_1 = $2_1 + -32 | 0;
    if ($2_1 >>> 0 > 31 >>> 0) {
     continue label$2
    }
    break label$2;
   };
  }
  return $0_1 | 0;
 }
 
 function $62() {
  return 42 | 0;
 }
 
 function $63() {
  return $62() | 0 | 0;
 }
 
 function $64() {
  return 68588 | 0;
 }
 
 function $65() {
  HEAP32[(0 + 68684 | 0) >> 2] = 68564;
  HEAP32[(0 + 68612 | 0) >> 2] = $63() | 0;
 }
 
 function $66($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $3_1;
  $3_1 = $93($0_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return $3_1 | 0;
 }
 
 function $67($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $2_1;
  $2_1 = $95($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $2_1 | 0;
 }
 
 function $68($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $69($0_1) {
  $0_1 = $0_1 | 0;
  return $96(fimport$2($68(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0) | 0 | 0) | 0 | 0) | 0 | 0;
 }
 
 function $70($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $3_1 = 0, $5_1 = 0, $8_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[($0_1 + 28 | 0) >> 2] | 0;
  HEAP32[($3_1 + 16 | 0) >> 2] = $4_1;
  $5_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
  HEAP32[($3_1 + 28 | 0) >> 2] = $2_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = $1_1;
  $1_1 = $5_1 - $4_1 | 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = $1_1;
  $6_1 = $1_1 + $2_1 | 0;
  $4_1 = $3_1 + 16 | 0;
  $7_1 = 2;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       if (!($96(fimport$3(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0, $3_1 + 16 | 0 | 0, 2 | 0, $3_1 + 12 | 0 | 0) | 0 | 0) | 0)) {
        break label$5
       }
       $5_1 = $4_1;
       break label$4;
      }
      label$6 : while (1) {
       $1_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
       if (($6_1 | 0) == ($1_1 | 0)) {
        break label$3
       }
       label$7 : {
        if (($1_1 | 0) > (-1 | 0)) {
         break label$7
        }
        $5_1 = $4_1;
        break label$2;
       }
       $8_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
       $9_1 = $1_1 >>> 0 > $8_1 >>> 0;
       $5_1 = $4_1 + ($9_1 << 3 | 0) | 0;
       $8_1 = $1_1 - ($9_1 ? $8_1 : 0) | 0;
       HEAP32[$5_1 >> 2] = (HEAP32[$5_1 >> 2] | 0) + $8_1 | 0;
       $4_1 = $4_1 + ($9_1 ? 12 : 4) | 0;
       HEAP32[$4_1 >> 2] = (HEAP32[$4_1 >> 2] | 0) - $8_1 | 0;
       $6_1 = $6_1 - $1_1 | 0;
       $4_1 = $5_1;
       $7_1 = $7_1 - $9_1 | 0;
       if (!($96(fimport$3(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0, $4_1 | 0, $7_1 | 0, $3_1 + 12 | 0 | 0) | 0 | 0) | 0)) {
        continue label$6
       }
       break label$6;
      };
     }
     if (($6_1 | 0) != (-1 | 0)) {
      break label$2
     }
    }
    $1_1 = HEAP32[($0_1 + 44 | 0) >> 2] | 0;
    HEAP32[($0_1 + 28 | 0) >> 2] = $1_1;
    HEAP32[($0_1 + 20 | 0) >> 2] = $1_1;
    HEAP32[($0_1 + 16 | 0) >> 2] = $1_1 + (HEAP32[($0_1 + 48 | 0) >> 2] | 0) | 0;
    $1_1 = $2_1;
    break label$1;
   }
   $1_1 = 0;
   HEAP32[($0_1 + 28 | 0) >> 2] = 0;
   HEAP32[($0_1 + 16 | 0) >> 2] = 0;
   HEAP32[($0_1 + 20 | 0) >> 2] = 0;
   HEAP32[$0_1 >> 2] = HEAP32[$0_1 >> 2] | 0 | 32 | 0;
   if (($7_1 | 0) == (2 | 0)) {
    break label$1
   }
   $1_1 = $2_1 - (HEAP32[($5_1 + 4 | 0) >> 2] | 0) | 0;
  }
  global$0 = $3_1 + 32 | 0;
  return $1_1 | 0;
 }
 
 function $71($0_1, $1_1, $1$hi, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, $3_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  i64toi32_i32$0 = $1$hi;
  $2_1 = $96($122($0_1 | 0, $1_1 | 0, i64toi32_i32$0 | 0, $2_1 & 255 | 0 | 0, $3_1 + 8 | 0 | 0) | 0 | 0) | 0;
  i64toi32_i32$2 = $3_1;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 12 | 0) >> 2] | 0;
  $1_1 = i64toi32_i32$0;
  $1$hi = i64toi32_i32$1;
  global$0 = i64toi32_i32$2 + 16 | 0;
  i64toi32_i32$1 = -1;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$3 = $2_1 ? -1 : $1_1;
  i64toi32_i32$2 = $2_1 ? i64toi32_i32$1 : i64toi32_i32$0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
  return i64toi32_i32$3 | 0;
 }
 
 function $72($0_1, $1_1, $1$hi, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$0 = $71(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0, $1_1 | 0, i64toi32_i32$0 | 0, $2_1 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function $73($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return (HEAPU16[((($0_1 >>> 0 > 153 >>> 0 ? 0 : $0_1) << 1 | 0) + 67552 | 0) >> 1] | 0) + 65634 | 0 | 0;
 }
 
 function $74($0_1) {
  $0_1 = $0_1 | 0;
  return $73($0_1 | 0, $0_1 | 0) | 0 | 0;
 }
 
 function $75($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0;
  $1_1 = $0_1;
  label$1 : {
   label$2 : {
    if (!($1_1 & 3 | 0)) {
     break label$2
    }
    label$3 : {
     if (HEAPU8[$1_1 >> 0] | 0) {
      break label$3
     }
     return $1_1 - $1_1 | 0 | 0;
    }
    $1_1 = $0_1;
    label$4 : while (1) {
     $1_1 = $1_1 + 1 | 0;
     if (!($1_1 & 3 | 0)) {
      break label$2
     }
     if (HEAPU8[$1_1 >> 0] | 0) {
      continue label$4
     }
     break label$1;
    };
   }
   label$5 : while (1) {
    $2_1 = $1_1;
    $1_1 = $1_1 + 4 | 0;
    $3_1 = HEAP32[$2_1 >> 2] | 0;
    if (((16843008 - $3_1 | 0 | $3_1 | 0) & -2139062144 | 0 | 0) == (-2139062144 | 0)) {
     continue label$5
    }
    break label$5;
   };
   label$6 : while (1) {
    $1_1 = $2_1;
    $2_1 = $1_1 + 1 | 0;
    if (HEAPU8[$1_1 >> 0] | 0) {
     continue label$6
    }
    break label$6;
   };
  }
  return $1_1 - $0_1 | 0 | 0;
 }
 
 function $76($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  label$1 : {
   if ($2_1) {
    break label$1
   }
   return 0 | 0;
  }
  label$2 : {
   label$3 : {
    $3_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($3_1) {
     break label$3
    }
    $0_1 = 0;
    break label$2;
   }
   label$4 : {
    label$5 : while (1) {
     $4_1 = HEAPU8[$1_1 >> 0] | 0;
     if (($3_1 & 255 | 0 | 0) != ($4_1 | 0)) {
      break label$4
     }
     if (!$4_1) {
      break label$4
     }
     $2_1 = $2_1 + -1 | 0;
     if (!$2_1) {
      break label$4
     }
     $1_1 = $1_1 + 1 | 0;
     $3_1 = HEAPU8[($0_1 + 1 | 0) >> 0] | 0;
     $0_1 = $0_1 + 1 | 0;
     if ($3_1) {
      continue label$5
     }
     break label$5;
    };
    $3_1 = 0;
   }
   $0_1 = $3_1 & 255 | 0;
  }
  return $0_1 - (HEAPU8[$1_1 >> 0] | 0) | 0 | 0;
 }
 
 function $77($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = ($2_1 | 0) != (0 | 0);
  label$1 : {
   label$2 : {
    label$3 : {
     if (!($0_1 & 3 | 0)) {
      break label$3
     }
     if (!$2_1) {
      break label$3
     }
     $4_1 = $1_1 & 255 | 0;
     label$4 : while (1) {
      if ((HEAPU8[$0_1 >> 0] | 0 | 0) == ($4_1 | 0)) {
       break label$2
      }
      $2_1 = $2_1 + -1 | 0;
      $3_1 = ($2_1 | 0) != (0 | 0);
      $0_1 = $0_1 + 1 | 0;
      if (!($0_1 & 3 | 0)) {
       break label$3
      }
      if ($2_1) {
       continue label$4
      }
      break label$4;
     };
    }
    if (!$3_1) {
     break label$1
    }
    label$5 : {
     if ((HEAPU8[$0_1 >> 0] | 0 | 0) == ($1_1 & 255 | 0 | 0)) {
      break label$5
     }
     if ($2_1 >>> 0 < 4 >>> 0) {
      break label$5
     }
     $4_1 = Math_imul($1_1 & 255 | 0, 16843009);
     label$6 : while (1) {
      $3_1 = (HEAP32[$0_1 >> 2] | 0) ^ $4_1 | 0;
      if (((16843008 - $3_1 | 0 | $3_1 | 0) & -2139062144 | 0 | 0) != (-2139062144 | 0)) {
       break label$2
      }
      $0_1 = $0_1 + 4 | 0;
      $2_1 = $2_1 + -4 | 0;
      if ($2_1 >>> 0 > 3 >>> 0) {
       continue label$6
      }
      break label$6;
     };
    }
    if (!$2_1) {
     break label$1
    }
   }
   $3_1 = $1_1 & 255 | 0;
   label$7 : while (1) {
    label$8 : {
     if ((HEAPU8[$0_1 >> 0] | 0 | 0) != ($3_1 | 0)) {
      break label$8
     }
     return $0_1 | 0;
    }
    $0_1 = $0_1 + 1 | 0;
    $2_1 = $2_1 + -1 | 0;
    if ($2_1) {
     continue label$7
    }
    break label$7;
   };
  }
  return 0 | 0;
 }
 
 function $78($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = $77($0_1 | 0, 0 | 0, $1_1 | 0) | 0;
  return ($2_1 ? $2_1 - $0_1 | 0 : $1_1) | 0;
 }
 
 function $79($0_1, $1_1) {
  $0_1 = +$0_1;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $3_1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, $2_1 = 0, $10_1 = 0, $2$hi = 0;
  label$1 : {
   wasm2js_scratch_store_f64(+$0_1);
   i64toi32_i32$0 = wasm2js_scratch_load_i32(1 | 0) | 0;
   $2_1 = wasm2js_scratch_load_i32(0 | 0) | 0;
   $2$hi = i64toi32_i32$0;
   i64toi32_i32$2 = $2_1;
   i64toi32_i32$1 = 0;
   i64toi32_i32$3 = 52;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$1 = 0;
    $10_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   } else {
    i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    $10_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
   }
   $3_1 = $10_1 & 2047 | 0;
   if (($3_1 | 0) == (2047 | 0)) {
    break label$1
   }
   label$2 : {
    if ($3_1) {
     break label$2
    }
    label$3 : {
     label$4 : {
      if ($0_1 != 0.0) {
       break label$4
      }
      $3_1 = 0;
      break label$3;
     }
     $0_1 = +$79(+($0_1 * 18446744073709551615.0), $1_1 | 0);
     $3_1 = (HEAP32[$1_1 >> 2] | 0) + -64 | 0;
    }
    HEAP32[$1_1 >> 2] = $3_1;
    return +$0_1;
   }
   HEAP32[$1_1 >> 2] = $3_1 + -1022 | 0;
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$0 = $2_1;
   i64toi32_i32$2 = -2146435073;
   i64toi32_i32$3 = -1;
   i64toi32_i32$2 = i64toi32_i32$1 & i64toi32_i32$2 | 0;
   i64toi32_i32$1 = i64toi32_i32$0 & i64toi32_i32$3 | 0;
   i64toi32_i32$0 = 1071644672;
   i64toi32_i32$3 = 0;
   i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
   wasm2js_scratch_store_i32(0 | 0, i64toi32_i32$1 | i64toi32_i32$3 | 0 | 0);
   wasm2js_scratch_store_i32(1 | 0, i64toi32_i32$0 | 0);
   $0_1 = +wasm2js_scratch_load_f64();
  }
  return +$0_1;
 }
 
 function $80($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0, i64toi32_i32$0 = 0, $8_1 = 0, $6_1 = 0, $7_1 = 0;
  $5_1 = global$0 - 208 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 204 | 0) >> 2] = $2_1;
  $61($5_1 + 160 | 0 | 0, 0 | 0, 40 | 0) | 0;
  HEAP32[($5_1 + 200 | 0) >> 2] = HEAP32[($5_1 + 204 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    if (($81(0 | 0, $1_1 | 0, $5_1 + 200 | 0 | 0, $5_1 + 80 | 0 | 0, $5_1 + 160 | 0 | 0, $3_1 | 0, $4_1 | 0) | 0 | 0) >= (0 | 0)) {
     break label$2
    }
    $4_1 = -1;
    break label$1;
   }
   label$3 : {
    label$4 : {
     if ((HEAP32[($0_1 + 76 | 0) >> 2] | 0 | 0) >= (0 | 0)) {
      break label$4
     }
     $6_1 = 1;
     break label$3;
    }
    $6_1 = !($43($0_1 | 0) | 0);
   }
   $7_1 = HEAP32[$0_1 >> 2] | 0;
   HEAP32[$0_1 >> 2] = $7_1 & -33 | 0;
   label$5 : {
    label$6 : {
     label$7 : {
      label$8 : {
       if (HEAP32[($0_1 + 48 | 0) >> 2] | 0) {
        break label$8
       }
       HEAP32[($0_1 + 48 | 0) >> 2] = 80;
       HEAP32[($0_1 + 28 | 0) >> 2] = 0;
       i64toi32_i32$0 = 0;
       HEAP32[($0_1 + 16 | 0) >> 2] = 0;
       HEAP32[($0_1 + 20 | 0) >> 2] = i64toi32_i32$0;
       $8_1 = HEAP32[($0_1 + 44 | 0) >> 2] | 0;
       HEAP32[($0_1 + 44 | 0) >> 2] = $5_1;
       break label$7;
      }
      $8_1 = 0;
      if (HEAP32[($0_1 + 16 | 0) >> 2] | 0) {
       break label$6
      }
     }
     $2_1 = -1;
     if ($50($0_1 | 0) | 0) {
      break label$5
     }
    }
    $2_1 = $81($0_1 | 0, $1_1 | 0, $5_1 + 200 | 0 | 0, $5_1 + 80 | 0 | 0, $5_1 + 160 | 0 | 0, $3_1 | 0, $4_1 | 0) | 0;
   }
   $4_1 = $7_1 & 32 | 0;
   label$9 : {
    if (!$8_1) {
     break label$9
    }
    FUNCTION_TABLE[HEAP32[($0_1 + 36 | 0) >> 2] | 0 | 0]($0_1, 0, 0) | 0;
    HEAP32[($0_1 + 48 | 0) >> 2] = 0;
    HEAP32[($0_1 + 44 | 0) >> 2] = $8_1;
    HEAP32[($0_1 + 28 | 0) >> 2] = 0;
    $3_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
    i64toi32_i32$0 = 0;
    HEAP32[($0_1 + 16 | 0) >> 2] = 0;
    HEAP32[($0_1 + 20 | 0) >> 2] = i64toi32_i32$0;
    $2_1 = $3_1 ? $2_1 : -1;
   }
   $3_1 = HEAP32[$0_1 >> 2] | 0;
   HEAP32[$0_1 >> 2] = $3_1 | $4_1 | 0;
   $4_1 = $3_1 & 32 | 0 ? -1 : $2_1;
   if ($6_1) {
    break label$1
   }
   $44($0_1 | 0);
  }
  global$0 = $5_1 + 208 | 0;
  return $4_1 | 0;
 }
 
 function $81($0_1, $1_1, $2_1, $3_1, $4_1, $5_1, $6_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  $6_1 = $6_1 | 0;
  var $12_1 = 0, $7_1 = 0, $15_1 = 0, $20_1 = 0, $17_1 = 0, $14_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $13_1 = 0, $11_1 = 0, i64toi32_i32$2 = 0, $16_1 = 0, $19_1 = 0, $22_1 = 0, i64toi32_i32$5 = 0, $25_1 = 0, $25$hi = 0, $9_1 = 0, $18_1 = 0, $24_1 = 0, $10_1 = 0, i64toi32_i32$3 = 0, $21_1 = 0, $23_1 = 0, $33_1 = 0, $34_1 = 0, $35_1 = 0, $8_1 = 0, $266 = 0;
  $7_1 = global$0 - 64 | 0;
  global$0 = $7_1;
  HEAP32[($7_1 + 60 | 0) >> 2] = $1_1;
  $8_1 = $7_1 + 39 | 0;
  $9_1 = $7_1 + 40 | 0;
  $10_1 = 0;
  $11_1 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : while (1) {
       $12_1 = 0;
       label$6 : while (1) {
        $13_1 = $1_1;
        if (($12_1 | 0) > ($11_1 ^ 2147483647 | 0 | 0)) {
         break label$4
        }
        $11_1 = $12_1 + $11_1 | 0;
        $12_1 = $1_1;
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             label$12 : {
              $14_1 = HEAPU8[$12_1 >> 0] | 0;
              if (!$14_1) {
               break label$12
              }
              label$13 : while (1) {
               label$14 : {
                label$15 : {
                 label$16 : {
                  $14_1 = $14_1 & 255 | 0;
                  if ($14_1) {
                   break label$16
                  }
                  $1_1 = $12_1;
                  break label$15;
                 }
                 if (($14_1 | 0) != (37 | 0)) {
                  break label$14
                 }
                 $14_1 = $12_1;
                 label$17 : while (1) {
                  label$18 : {
                   if ((HEAPU8[($14_1 + 1 | 0) >> 0] | 0 | 0) == (37 | 0)) {
                    break label$18
                   }
                   $1_1 = $14_1;
                   break label$15;
                  }
                  $12_1 = $12_1 + 1 | 0;
                  $15_1 = HEAPU8[($14_1 + 2 | 0) >> 0] | 0;
                  $1_1 = $14_1 + 2 | 0;
                  $14_1 = $1_1;
                  if (($15_1 | 0) == (37 | 0)) {
                   continue label$17
                  }
                  break label$17;
                 };
                }
                $12_1 = $12_1 - $13_1 | 0;
                $14_1 = $11_1 ^ 2147483647 | 0;
                if (($12_1 | 0) > ($14_1 | 0)) {
                 break label$4
                }
                label$19 : {
                 if (!$0_1) {
                  break label$19
                 }
                 $82($0_1 | 0, $13_1 | 0, $12_1 | 0);
                }
                if ($12_1) {
                 continue label$6
                }
                HEAP32[($7_1 + 60 | 0) >> 2] = $1_1;
                $12_1 = $1_1 + 1 | 0;
                $16_1 = -1;
                label$20 : {
                 $15_1 = (HEAP8[($1_1 + 1 | 0) >> 0] | 0) + -48 | 0;
                 if ($15_1 >>> 0 > 9 >>> 0) {
                  break label$20
                 }
                 if ((HEAPU8[($1_1 + 2 | 0) >> 0] | 0 | 0) != (36 | 0)) {
                  break label$20
                 }
                 $12_1 = $1_1 + 3 | 0;
                 $10_1 = 1;
                 $16_1 = $15_1;
                }
                HEAP32[($7_1 + 60 | 0) >> 2] = $12_1;
                $17_1 = 0;
                label$21 : {
                 label$22 : {
                  $18_1 = HEAP8[$12_1 >> 0] | 0;
                  $1_1 = $18_1 + -32 | 0;
                  if ($1_1 >>> 0 <= 31 >>> 0) {
                   break label$22
                  }
                  $15_1 = $12_1;
                  break label$21;
                 }
                 $17_1 = 0;
                 $15_1 = $12_1;
                 $1_1 = 1 << $1_1 | 0;
                 if (!($1_1 & 75913 | 0)) {
                  break label$21
                 }
                 label$23 : while (1) {
                  $15_1 = $12_1 + 1 | 0;
                  HEAP32[($7_1 + 60 | 0) >> 2] = $15_1;
                  $17_1 = $1_1 | $17_1 | 0;
                  $18_1 = HEAP8[($12_1 + 1 | 0) >> 0] | 0;
                  $1_1 = $18_1 + -32 | 0;
                  if ($1_1 >>> 0 >= 32 >>> 0) {
                   break label$21
                  }
                  $12_1 = $15_1;
                  $1_1 = 1 << $1_1 | 0;
                  if ($1_1 & 75913 | 0) {
                   continue label$23
                  }
                  break label$23;
                 };
                }
                label$24 : {
                 label$25 : {
                  if (($18_1 | 0) != (42 | 0)) {
                   break label$25
                  }
                  label$26 : {
                   label$27 : {
                    $12_1 = (HEAP8[($15_1 + 1 | 0) >> 0] | 0) + -48 | 0;
                    if ($12_1 >>> 0 > 9 >>> 0) {
                     break label$27
                    }
                    if ((HEAPU8[($15_1 + 2 | 0) >> 0] | 0 | 0) != (36 | 0)) {
                     break label$27
                    }
                    label$28 : {
                     label$29 : {
                      if ($0_1) {
                       break label$29
                      }
                      HEAP32[($4_1 + ($12_1 << 2 | 0) | 0) >> 2] = 10;
                      $19_1 = 0;
                      break label$28;
                     }
                     $19_1 = HEAP32[($3_1 + ($12_1 << 3 | 0) | 0) >> 2] | 0;
                    }
                    $1_1 = $15_1 + 3 | 0;
                    $10_1 = 1;
                    break label$26;
                   }
                   if ($10_1) {
                    break label$11
                   }
                   $1_1 = $15_1 + 1 | 0;
                   label$30 : {
                    if ($0_1) {
                     break label$30
                    }
                    HEAP32[($7_1 + 60 | 0) >> 2] = $1_1;
                    $10_1 = 0;
                    $19_1 = 0;
                    break label$24;
                   }
                   $12_1 = HEAP32[$2_1 >> 2] | 0;
                   HEAP32[$2_1 >> 2] = $12_1 + 4 | 0;
                   $19_1 = HEAP32[$12_1 >> 2] | 0;
                   $10_1 = 0;
                  }
                  HEAP32[($7_1 + 60 | 0) >> 2] = $1_1;
                  if (($19_1 | 0) > (-1 | 0)) {
                   break label$24
                  }
                  $19_1 = 0 - $19_1 | 0;
                  $17_1 = $17_1 | 8192 | 0;
                  break label$24;
                 }
                 $19_1 = $83($7_1 + 60 | 0 | 0) | 0;
                 if (($19_1 | 0) < (0 | 0)) {
                  break label$4
                 }
                 $1_1 = HEAP32[($7_1 + 60 | 0) >> 2] | 0;
                }
                $12_1 = 0;
                $20_1 = -1;
                label$31 : {
                 label$32 : {
                  if ((HEAPU8[$1_1 >> 0] | 0 | 0) == (46 | 0)) {
                   break label$32
                  }
                  $21_1 = 0;
                  break label$31;
                 }
                 label$33 : {
                  if ((HEAPU8[($1_1 + 1 | 0) >> 0] | 0 | 0) != (42 | 0)) {
                   break label$33
                  }
                  label$34 : {
                   label$35 : {
                    $15_1 = (HEAP8[($1_1 + 2 | 0) >> 0] | 0) + -48 | 0;
                    if ($15_1 >>> 0 > 9 >>> 0) {
                     break label$35
                    }
                    if ((HEAPU8[($1_1 + 3 | 0) >> 0] | 0 | 0) != (36 | 0)) {
                     break label$35
                    }
                    label$36 : {
                     label$37 : {
                      if ($0_1) {
                       break label$37
                      }
                      HEAP32[($4_1 + ($15_1 << 2 | 0) | 0) >> 2] = 10;
                      $20_1 = 0;
                      break label$36;
                     }
                     $20_1 = HEAP32[($3_1 + ($15_1 << 3 | 0) | 0) >> 2] | 0;
                    }
                    $1_1 = $1_1 + 4 | 0;
                    break label$34;
                   }
                   if ($10_1) {
                    break label$11
                   }
                   $1_1 = $1_1 + 2 | 0;
                   label$38 : {
                    if ($0_1) {
                     break label$38
                    }
                    $20_1 = 0;
                    break label$34;
                   }
                   $15_1 = HEAP32[$2_1 >> 2] | 0;
                   HEAP32[$2_1 >> 2] = $15_1 + 4 | 0;
                   $20_1 = HEAP32[$15_1 >> 2] | 0;
                  }
                  HEAP32[($7_1 + 60 | 0) >> 2] = $1_1;
                  $21_1 = ($20_1 | 0) > (-1 | 0);
                  break label$31;
                 }
                 HEAP32[($7_1 + 60 | 0) >> 2] = $1_1 + 1 | 0;
                 $21_1 = 1;
                 $20_1 = $83($7_1 + 60 | 0 | 0) | 0;
                 $1_1 = HEAP32[($7_1 + 60 | 0) >> 2] | 0;
                }
                label$39 : while (1) {
                 $15_1 = $12_1;
                 $22_1 = 28;
                 $18_1 = $1_1;
                 $12_1 = HEAP8[$1_1 >> 0] | 0;
                 if (($12_1 + -123 | 0) >>> 0 < -58 >>> 0) {
                  break label$3
                 }
                 $1_1 = $1_1 + 1 | 0;
                 $12_1 = HEAPU8[(($12_1 + Math_imul($15_1, 58) | 0) + 67807 | 0) >> 0] | 0;
                 if (($12_1 + -1 | 0) >>> 0 < 8 >>> 0) {
                  continue label$39
                 }
                 break label$39;
                };
                HEAP32[($7_1 + 60 | 0) >> 2] = $1_1;
                label$40 : {
                 label$41 : {
                  if (($12_1 | 0) == (27 | 0)) {
                   break label$41
                  }
                  if (!$12_1) {
                   break label$3
                  }
                  label$42 : {
                   if (($16_1 | 0) < (0 | 0)) {
                    break label$42
                   }
                   label$43 : {
                    if ($0_1) {
                     break label$43
                    }
                    HEAP32[($4_1 + ($16_1 << 2 | 0) | 0) >> 2] = $12_1;
                    continue label$5;
                   }
                   i64toi32_i32$2 = $3_1 + ($16_1 << 3 | 0) | 0;
                   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                   $266 = i64toi32_i32$0;
                   i64toi32_i32$0 = $7_1;
                   HEAP32[($7_1 + 48 | 0) >> 2] = $266;
                   HEAP32[($7_1 + 52 | 0) >> 2] = i64toi32_i32$1;
                   break label$40;
                  }
                  if (!$0_1) {
                   break label$7
                  }
                  $84($7_1 + 48 | 0 | 0, $12_1 | 0, $2_1 | 0, $6_1 | 0);
                  break label$40;
                 }
                 if (($16_1 | 0) > (-1 | 0)) {
                  break label$3
                 }
                 $12_1 = 0;
                 if (!$0_1) {
                  continue label$6
                 }
                }
                if ((HEAPU8[$0_1 >> 0] | 0) & 32 | 0) {
                 break label$2
                }
                $23_1 = $17_1 & -65537 | 0;
                $17_1 = $17_1 & 8192 | 0 ? $23_1 : $17_1;
                $16_1 = 0;
                $24_1 = 65539;
                $22_1 = $9_1;
                label$44 : {
                 label$45 : {
                  label$46 : {
                   label$47 : {
                    label$48 : {
                     label$49 : {
                      label$50 : {
                       label$51 : {
                        label$52 : {
                         label$53 : {
                          label$54 : {
                           label$55 : {
                            label$56 : {
                             label$57 : {
                              label$58 : {
                               label$59 : {
                                label$60 : {
                                 $12_1 = HEAP8[$18_1 >> 0] | 0;
                                 $12_1 = $15_1 ? (($12_1 & 15 | 0 | 0) == (3 | 0) ? $12_1 & -45 | 0 : $12_1) : $12_1;
                                 switch ($12_1 + -88 | 0 | 0) {
                                 case 9:
                                 case 13:
                                 case 14:
                                 case 15:
                                  break label$44;
                                 case 27:
                                  break label$50;
                                 case 11:
                                  break label$51;
                                 case 12:
                                 case 17:
                                  break label$54;
                                 case 23:
                                  break label$55;
                                 case 0:
                                 case 32:
                                  break label$56;
                                 case 24:
                                  break label$57;
                                 case 22:
                                  break label$58;
                                 case 29:
                                  break label$59;
                                 case 1:
                                 case 2:
                                 case 3:
                                 case 4:
                                 case 5:
                                 case 6:
                                 case 7:
                                 case 8:
                                 case 10:
                                 case 16:
                                 case 18:
                                 case 19:
                                 case 20:
                                 case 21:
                                 case 25:
                                 case 26:
                                 case 28:
                                 case 30:
                                 case 31:
                                  break label$8;
                                 default:
                                  break label$60;
                                 };
                                }
                                $22_1 = $9_1;
                                label$61 : {
                                 switch ($12_1 + -65 | 0 | 0) {
                                 case 0:
                                 case 4:
                                 case 5:
                                 case 6:
                                  break label$44;
                                 case 2:
                                  break label$49;
                                 case 1:
                                 case 3:
                                  break label$8;
                                 default:
                                  break label$61;
                                 };
                                }
                                if (($12_1 | 0) == (83 | 0)) {
                                 break label$48
                                }
                                break label$9;
                               }
                               $16_1 = 0;
                               $24_1 = 65539;
                               i64toi32_i32$2 = $7_1;
                               i64toi32_i32$1 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                               i64toi32_i32$0 = HEAP32[($7_1 + 52 | 0) >> 2] | 0;
                               $25_1 = i64toi32_i32$1;
                               $25$hi = i64toi32_i32$0;
                               break label$53;
                              }
                              $12_1 = 0;
                              label$62 : {
                               switch ($15_1 & 255 | 0 | 0) {
                               case 0:
                                HEAP32[(HEAP32[($7_1 + 48 | 0) >> 2] | 0) >> 2] = $11_1;
                                continue label$6;
                               case 1:
                                HEAP32[(HEAP32[($7_1 + 48 | 0) >> 2] | 0) >> 2] = $11_1;
                                continue label$6;
                               case 2:
                                i64toi32_i32$1 = $11_1;
                                i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
                                i64toi32_i32$1 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                                HEAP32[i64toi32_i32$1 >> 2] = $11_1;
                                HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
                                continue label$6;
                               case 3:
                                HEAP16[(HEAP32[($7_1 + 48 | 0) >> 2] | 0) >> 1] = $11_1;
                                continue label$6;
                               case 4:
                                HEAP8[(HEAP32[($7_1 + 48 | 0) >> 2] | 0) >> 0] = $11_1;
                                continue label$6;
                               case 6:
                                HEAP32[(HEAP32[($7_1 + 48 | 0) >> 2] | 0) >> 2] = $11_1;
                                continue label$6;
                               case 7:
                                break label$62;
                               default:
                                continue label$6;
                               };
                              }
                              i64toi32_i32$1 = $11_1;
                              i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
                              i64toi32_i32$1 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                              HEAP32[i64toi32_i32$1 >> 2] = $11_1;
                              HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
                              continue label$6;
                             }
                             $20_1 = $20_1 >>> 0 > 8 >>> 0 ? $20_1 : 8;
                             $17_1 = $17_1 | 8 | 0;
                             $12_1 = 120;
                            }
                            $16_1 = 0;
                            $24_1 = 65539;
                            i64toi32_i32$2 = $7_1;
                            i64toi32_i32$0 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                            i64toi32_i32$1 = HEAP32[($7_1 + 52 | 0) >> 2] | 0;
                            $25_1 = i64toi32_i32$0;
                            $25$hi = i64toi32_i32$1;
                            $13_1 = $85(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, $9_1 | 0, $12_1 & 32 | 0 | 0) | 0;
                            if (!(i64toi32_i32$0 | i64toi32_i32$1 | 0)) {
                             break label$52
                            }
                            if (!($17_1 & 8 | 0)) {
                             break label$52
                            }
                            $24_1 = ($12_1 >>> 4 | 0) + 65539 | 0;
                            $16_1 = 2;
                            break label$52;
                           }
                           $16_1 = 0;
                           $24_1 = 65539;
                           i64toi32_i32$2 = $7_1;
                           i64toi32_i32$1 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                           i64toi32_i32$0 = HEAP32[($7_1 + 52 | 0) >> 2] | 0;
                           $25_1 = i64toi32_i32$1;
                           $25$hi = i64toi32_i32$0;
                           $13_1 = $86(i64toi32_i32$1 | 0, i64toi32_i32$0 | 0, $9_1 | 0) | 0;
                           if (!($17_1 & 8 | 0)) {
                            break label$52
                           }
                           $12_1 = $9_1 - $13_1 | 0;
                           $20_1 = ($20_1 | 0) > ($12_1 | 0) ? $20_1 : $12_1 + 1 | 0;
                           break label$52;
                          }
                          label$69 : {
                           i64toi32_i32$2 = $7_1;
                           i64toi32_i32$0 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                           i64toi32_i32$1 = HEAP32[($7_1 + 52 | 0) >> 2] | 0;
                           $25_1 = i64toi32_i32$0;
                           $25$hi = i64toi32_i32$1;
                           i64toi32_i32$2 = i64toi32_i32$0;
                           i64toi32_i32$0 = -1;
                           i64toi32_i32$3 = -1;
                           if ((i64toi32_i32$1 | 0) > (i64toi32_i32$0 | 0)) {
                            $33_1 = 1
                           } else {
                            if ((i64toi32_i32$1 | 0) >= (i64toi32_i32$0 | 0)) {
                             if (i64toi32_i32$2 >>> 0 <= i64toi32_i32$3 >>> 0) {
                              $34_1 = 0
                             } else {
                              $34_1 = 1
                             }
                             $35_1 = $34_1;
                            } else {
                             $35_1 = 0
                            }
                            $33_1 = $35_1;
                           }
                           if ($33_1) {
                            break label$69
                           }
                           i64toi32_i32$2 = $25$hi;
                           i64toi32_i32$2 = 0;
                           i64toi32_i32$3 = 0;
                           i64toi32_i32$1 = $25$hi;
                           i64toi32_i32$0 = $25_1;
                           i64toi32_i32$5 = (i64toi32_i32$3 >>> 0 < i64toi32_i32$0 >>> 0) + i64toi32_i32$1 | 0;
                           i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
                           $25_1 = i64toi32_i32$3 - i64toi32_i32$0 | 0;
                           $25$hi = i64toi32_i32$5;
                           i64toi32_i32$3 = $7_1;
                           HEAP32[($7_1 + 48 | 0) >> 2] = $25_1;
                           HEAP32[($7_1 + 52 | 0) >> 2] = i64toi32_i32$5;
                           $16_1 = 1;
                           $24_1 = 65539;
                           break label$53;
                          }
                          label$70 : {
                           if (!($17_1 & 2048 | 0)) {
                            break label$70
                           }
                           $16_1 = 1;
                           $24_1 = 65540;
                           break label$53;
                          }
                          $16_1 = $17_1 & 1 | 0;
                          $24_1 = $16_1 ? 65541 : 65539;
                         }
                         i64toi32_i32$5 = $25$hi;
                         $13_1 = $87($25_1 | 0, i64toi32_i32$5 | 0, $9_1 | 0) | 0;
                        }
                        if ($21_1 & ($20_1 | 0) < (0 | 0) | 0) {
                         break label$4
                        }
                        $17_1 = $21_1 ? $17_1 & -65537 | 0 : $17_1;
                        label$71 : {
                         i64toi32_i32$5 = $25$hi;
                         i64toi32_i32$2 = $25_1;
                         i64toi32_i32$3 = 0;
                         i64toi32_i32$0 = 0;
                         if ((i64toi32_i32$2 | 0) != (i64toi32_i32$0 | 0) | (i64toi32_i32$5 | 0) != (i64toi32_i32$3 | 0) | 0) {
                          break label$71
                         }
                         if ($20_1) {
                          break label$71
                         }
                         $13_1 = $9_1;
                         $22_1 = $13_1;
                         $20_1 = 0;
                         break label$8;
                        }
                        i64toi32_i32$2 = $25$hi;
                        $12_1 = ($9_1 - $13_1 | 0) + !($25_1 | i64toi32_i32$2 | 0) | 0;
                        $20_1 = ($20_1 | 0) > ($12_1 | 0) ? $20_1 : $12_1;
                        break label$9;
                       }
                       $12_1 = HEAPU8[($7_1 + 48 | 0) >> 0] | 0;
                       break label$10;
                      }
                      $12_1 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                      $13_1 = $12_1 ? $12_1 : 65597;
                      $12_1 = $78($13_1 | 0, ($20_1 >>> 0 < 2147483647 >>> 0 ? $20_1 : 2147483647) | 0) | 0;
                      $22_1 = $13_1 + $12_1 | 0;
                      label$72 : {
                       if (($20_1 | 0) <= (-1 | 0)) {
                        break label$72
                       }
                       $17_1 = $23_1;
                       $20_1 = $12_1;
                       break label$8;
                      }
                      $17_1 = $23_1;
                      $20_1 = $12_1;
                      if (HEAPU8[$22_1 >> 0] | 0) {
                       break label$4
                      }
                      break label$8;
                     }
                     i64toi32_i32$0 = $7_1;
                     i64toi32_i32$2 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                     i64toi32_i32$5 = HEAP32[($7_1 + 52 | 0) >> 2] | 0;
                     $25_1 = i64toi32_i32$2;
                     $25$hi = i64toi32_i32$5;
                     if (!!(i64toi32_i32$2 | i64toi32_i32$5 | 0)) {
                      break label$47
                     }
                     $12_1 = 0;
                     break label$10;
                    }
                    label$73 : {
                     if (!$20_1) {
                      break label$73
                     }
                     $14_1 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                     break label$46;
                    }
                    $12_1 = 0;
                    $88($0_1 | 0, 32 | 0, $19_1 | 0, 0 | 0, $17_1 | 0);
                    break label$45;
                   }
                   HEAP32[($7_1 + 12 | 0) >> 2] = 0;
                   i64toi32_i32$5 = $25$hi;
                   HEAP32[($7_1 + 8 | 0) >> 2] = $25_1;
                   HEAP32[($7_1 + 48 | 0) >> 2] = $7_1 + 8 | 0;
                   $14_1 = $7_1 + 8 | 0;
                   $20_1 = -1;
                  }
                  $12_1 = 0;
                  label$74 : {
                   label$75 : while (1) {
                    $15_1 = HEAP32[$14_1 >> 2] | 0;
                    if (!$15_1) {
                     break label$74
                    }
                    $15_1 = $98($7_1 + 4 | 0 | 0, $15_1 | 0) | 0;
                    if (($15_1 | 0) < (0 | 0)) {
                     break label$2
                    }
                    if ($15_1 >>> 0 > ($20_1 - $12_1 | 0) >>> 0) {
                     break label$74
                    }
                    $14_1 = $14_1 + 4 | 0;
                    $12_1 = $15_1 + $12_1 | 0;
                    if ($12_1 >>> 0 < $20_1 >>> 0) {
                     continue label$75
                    }
                    break label$75;
                   };
                  }
                  $22_1 = 61;
                  if (($12_1 | 0) < (0 | 0)) {
                   break label$3
                  }
                  $88($0_1 | 0, 32 | 0, $19_1 | 0, $12_1 | 0, $17_1 | 0);
                  label$76 : {
                   if ($12_1) {
                    break label$76
                   }
                   $12_1 = 0;
                   break label$45;
                  }
                  $15_1 = 0;
                  $14_1 = HEAP32[($7_1 + 48 | 0) >> 2] | 0;
                  label$77 : while (1) {
                   $13_1 = HEAP32[$14_1 >> 2] | 0;
                   if (!$13_1) {
                    break label$45
                   }
                   $13_1 = $98($7_1 + 4 | 0 | 0, $13_1 | 0) | 0;
                   $15_1 = $13_1 + $15_1 | 0;
                   if ($15_1 >>> 0 > $12_1 >>> 0) {
                    break label$45
                   }
                   $82($0_1 | 0, $7_1 + 4 | 0 | 0, $13_1 | 0);
                   $14_1 = $14_1 + 4 | 0;
                   if ($15_1 >>> 0 < $12_1 >>> 0) {
                    continue label$77
                   }
                   break label$77;
                  };
                 }
                 $88($0_1 | 0, 32 | 0, $19_1 | 0, $12_1 | 0, $17_1 ^ 8192 | 0 | 0);
                 $12_1 = ($19_1 | 0) > ($12_1 | 0) ? $19_1 : $12_1;
                 continue label$6;
                }
                if ($21_1 & ($20_1 | 0) < (0 | 0) | 0) {
                 break label$4
                }
                $22_1 = 61;
                $12_1 = FUNCTION_TABLE[$5_1 | 0]($0_1, +HEAPF64[($7_1 + 48 | 0) >> 3], $19_1, $20_1, $17_1, $12_1) | 0;
                if (($12_1 | 0) >= (0 | 0)) {
                 continue label$6
                }
                break label$3;
               }
               $14_1 = HEAPU8[($12_1 + 1 | 0) >> 0] | 0;
               $12_1 = $12_1 + 1 | 0;
               continue label$13;
              };
             }
             if ($0_1) {
              break label$1
             }
             if (!$10_1) {
              break label$7
             }
             $12_1 = 1;
             label$78 : {
              label$79 : while (1) {
               $14_1 = HEAP32[($4_1 + ($12_1 << 2 | 0) | 0) >> 2] | 0;
               if (!$14_1) {
                break label$78
               }
               $84($3_1 + ($12_1 << 3 | 0) | 0 | 0, $14_1 | 0, $2_1 | 0, $6_1 | 0);
               $11_1 = 1;
               $12_1 = $12_1 + 1 | 0;
               if (($12_1 | 0) != (10 | 0)) {
                continue label$79
               }
               break label$1;
              };
             }
             label$80 : {
              if ($12_1 >>> 0 < 10 >>> 0) {
               break label$80
              }
              $11_1 = 1;
              break label$1;
             }
             label$81 : while (1) {
              if (HEAP32[($4_1 + ($12_1 << 2 | 0) | 0) >> 2] | 0) {
               break label$11
              }
              $11_1 = 1;
              $12_1 = $12_1 + 1 | 0;
              if (($12_1 | 0) == (10 | 0)) {
               break label$1
              }
              continue label$81;
             };
            }
            $22_1 = 28;
            break label$3;
           }
           HEAP8[($7_1 + 39 | 0) >> 0] = $12_1;
           $20_1 = 1;
           $13_1 = $8_1;
           $22_1 = $9_1;
           $17_1 = $23_1;
           break label$8;
          }
          $22_1 = $9_1;
         }
         $1_1 = $22_1 - $13_1 | 0;
         $18_1 = ($20_1 | 0) > ($1_1 | 0) ? $20_1 : $1_1;
         if (($18_1 | 0) > ($16_1 ^ 2147483647 | 0 | 0)) {
          break label$4
         }
         $22_1 = 61;
         $15_1 = $16_1 + $18_1 | 0;
         $12_1 = ($19_1 | 0) > ($15_1 | 0) ? $19_1 : $15_1;
         if (($12_1 | 0) > ($14_1 | 0)) {
          break label$3
         }
         $88($0_1 | 0, 32 | 0, $12_1 | 0, $15_1 | 0, $17_1 | 0);
         $82($0_1 | 0, $24_1 | 0, $16_1 | 0);
         $88($0_1 | 0, 48 | 0, $12_1 | 0, $15_1 | 0, $17_1 ^ 65536 | 0 | 0);
         $88($0_1 | 0, 48 | 0, $18_1 | 0, $1_1 | 0, 0 | 0);
         $82($0_1 | 0, $13_1 | 0, $1_1 | 0);
         $88($0_1 | 0, 32 | 0, $12_1 | 0, $15_1 | 0, $17_1 ^ 8192 | 0 | 0);
         $1_1 = HEAP32[($7_1 + 60 | 0) >> 2] | 0;
         continue label$6;
        }
        break label$6;
       };
       break label$5;
      };
      $11_1 = 0;
      break label$1;
     }
     $22_1 = 61;
    }
    HEAP32[($42() | 0) >> 2] = $22_1;
   }
   $11_1 = -1;
  }
  global$0 = $7_1 + 64 | 0;
  return $11_1 | 0;
 }
 
 function $82($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  label$1 : {
   if ((HEAPU8[$0_1 >> 0] | 0) & 32 | 0) {
    break label$1
   }
   $51($1_1 | 0, $2_1 | 0, $0_1 | 0) | 0;
  }
 }
 
 function $83($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $1_1 = 0, $2_1 = 0, $4_1 = 0, $5_1 = 0;
  $1_1 = 0;
  label$1 : {
   $2_1 = HEAP32[$0_1 >> 2] | 0;
   $3_1 = (HEAP8[$2_1 >> 0] | 0) + -48 | 0;
   if ($3_1 >>> 0 <= 9 >>> 0) {
    break label$1
   }
   return 0 | 0;
  }
  label$2 : while (1) {
   $4_1 = -1;
   label$3 : {
    if ($1_1 >>> 0 > 214748364 >>> 0) {
     break label$3
    }
    $1_1 = Math_imul($1_1, 10);
    $4_1 = $3_1 >>> 0 > ($1_1 ^ 2147483647 | 0) >>> 0 ? -1 : $3_1 + $1_1 | 0;
   }
   $3_1 = $2_1 + 1 | 0;
   HEAP32[$0_1 >> 2] = $3_1;
   $5_1 = HEAP8[($2_1 + 1 | 0) >> 0] | 0;
   $1_1 = $4_1;
   $2_1 = $3_1;
   $3_1 = $5_1 + -48 | 0;
   if ($3_1 >>> 0 < 10 >>> 0) {
    continue label$2
   }
   break label$2;
  };
  return $1_1 | 0;
 }
 
 function $84($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $21_1 = 0, $29_1 = 0, $37_1 = 0, $45_1 = 0, $55_1 = 0, $63_1 = 0, $71_1 = 0, $79_1 = 0, $87_1 = 0, $97_1 = 0, $105_1 = 0, $115_1 = 0, $125 = 0, $133 = 0, $141 = 0;
  label$1 : {
   switch ($1_1 + -9 | 0 | 0) {
   case 0:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    HEAP32[$0_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
    return;
   case 1:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$1 = i64toi32_i32$0 >> 31 | 0;
    $21_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $21_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 2:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$0 = 0;
    $29_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[i64toi32_i32$1 >> 2] = $29_1;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 4:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$1 = i64toi32_i32$0 >> 31 | 0;
    $37_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $37_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 5:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$0 = 0;
    $45_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[i64toi32_i32$1 >> 2] = $45_1;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 3:
    $1_1 = ((HEAP32[$2_1 >> 2] | 0) + 7 | 0) & -8 | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 8 | 0;
    i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
    $55_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $55_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 6:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$1 = HEAP16[$1_1 >> 1] | 0;
    i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
    $63_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[i64toi32_i32$1 >> 2] = $63_1;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 7:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$0 = HEAPU16[$1_1 >> 1] | 0;
    i64toi32_i32$1 = 0;
    $71_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $71_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 8:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$1 = HEAP8[$1_1 >> 0] | 0;
    i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
    $79_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[i64toi32_i32$1 >> 2] = $79_1;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 9:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$0 = HEAPU8[$1_1 >> 0] | 0;
    i64toi32_i32$1 = 0;
    $87_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $87_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 10:
    $1_1 = ((HEAP32[$2_1 >> 2] | 0) + 7 | 0) & -8 | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 8 | 0;
    i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$0 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
    $97_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[i64toi32_i32$1 >> 2] = $97_1;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 11:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$1 = 0;
    $105_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $105_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 12:
    $1_1 = ((HEAP32[$2_1 >> 2] | 0) + 7 | 0) & -8 | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 8 | 0;
    i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$0 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
    $115_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[i64toi32_i32$1 >> 2] = $115_1;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 13:
    $1_1 = ((HEAP32[$2_1 >> 2] | 0) + 7 | 0) & -8 | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 8 | 0;
    i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
    $125 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $125;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 14:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
    $133 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[i64toi32_i32$1 >> 2] = $133;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    return;
   case 15:
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$1 = 0;
    $141 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $141;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   case 16:
    $1_1 = ((HEAP32[$2_1 >> 2] | 0) + 7 | 0) & -8 | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 8 | 0;
    HEAPF64[$0_1 >> 3] = +HEAPF64[$1_1 >> 3];
    return;
   case 17:
    FUNCTION_TABLE[$3_1 | 0]($0_1, $2_1);
    break;
   default:
    break label$1;
   };
  }
 }
 
 function $85($0_1, $0$hi, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $10_1 = 0, $3_1 = 0;
  label$1 : {
   i64toi32_i32$0 = $0$hi;
   if (!($0_1 | i64toi32_i32$0 | 0)) {
    break label$1
   }
   label$2 : while (1) {
    $1_1 = $1_1 + -1 | 0;
    i64toi32_i32$0 = $0$hi;
    HEAP8[$1_1 >> 0] = HEAPU8[(($0_1 & 15 | 0) + 68336 | 0) >> 0] | 0 | $2_1 | 0;
    i64toi32_i32$2 = $0_1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 15;
    $3_1 = i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$3 >>> 0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$0;
    i64toi32_i32$2 = i64toi32_i32$0;
    i64toi32_i32$3 = $0_1;
    i64toi32_i32$0 = 0;
    i64toi32_i32$1 = 4;
    i64toi32_i32$4 = i64toi32_i32$1 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$1 & 63 | 0) >>> 0) {
     i64toi32_i32$0 = 0;
     $10_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
     $10_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
    }
    $0_1 = $10_1;
    $0$hi = i64toi32_i32$0;
    if ($3_1) {
     continue label$2
    }
    break label$2;
   };
  }
  return $1_1 | 0;
 }
 
 function $86($0_1, $0$hi, $1_1) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $9_1 = 0, $2_1 = 0;
  label$1 : {
   i64toi32_i32$0 = $0$hi;
   if (!($0_1 | i64toi32_i32$0 | 0)) {
    break label$1
   }
   label$2 : while (1) {
    $1_1 = $1_1 + -1 | 0;
    i64toi32_i32$0 = $0$hi;
    HEAP8[$1_1 >> 0] = $0_1 & 7 | 0 | 48 | 0;
    i64toi32_i32$2 = $0_1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 7;
    $2_1 = i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$3 >>> 0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$0;
    i64toi32_i32$2 = i64toi32_i32$0;
    i64toi32_i32$3 = $0_1;
    i64toi32_i32$0 = 0;
    i64toi32_i32$1 = 3;
    i64toi32_i32$4 = i64toi32_i32$1 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$1 & 63 | 0) >>> 0) {
     i64toi32_i32$0 = 0;
     $9_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
     $9_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
    }
    $0_1 = $9_1;
    $0$hi = i64toi32_i32$0;
    if ($2_1) {
     continue label$2
    }
    break label$2;
   };
  }
  return $1_1 | 0;
 }
 
 function $87($0_1, $0$hi, $1_1) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$5 = 0, $3_1 = 0, i64toi32_i32$3 = 0, $2_1 = 0, $2$hi = 0, $4_1 = 0, $16_1 = 0, $16$hi = 0, $5_1 = 0;
  label$1 : {
   label$2 : {
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$2 = $0_1;
    i64toi32_i32$1 = 1;
    i64toi32_i32$3 = 0;
    if (i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) {
     break label$2
    }
    i64toi32_i32$2 = i64toi32_i32$0;
    $2_1 = $0_1;
    $2$hi = i64toi32_i32$2;
    break label$1;
   }
   label$3 : while (1) {
    $1_1 = $1_1 + -1 | 0;
    i64toi32_i32$2 = $0$hi;
    i64toi32_i32$0 = 0;
    i64toi32_i32$0 = __wasm_i64_udiv($0_1 | 0, i64toi32_i32$2 | 0, 10 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $2_1 = i64toi32_i32$0;
    $2$hi = i64toi32_i32$2;
    i64toi32_i32$0 = 0;
    i64toi32_i32$0 = __wasm_i64_mul($2_1 | 0, i64toi32_i32$2 | 0, 10 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $16_1 = i64toi32_i32$0;
    $16$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $0$hi;
    i64toi32_i32$3 = $0_1;
    i64toi32_i32$0 = $16$hi;
    i64toi32_i32$1 = $16_1;
    i64toi32_i32$5 = ($0_1 >>> 0 < i64toi32_i32$1 >>> 0) + i64toi32_i32$0 | 0;
    i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
    HEAP8[$1_1 >> 0] = $0_1 - i64toi32_i32$1 | 0 | 48 | 0;
    i64toi32_i32$5 = i64toi32_i32$2;
    i64toi32_i32$5 = i64toi32_i32$2;
    i64toi32_i32$2 = $0_1;
    i64toi32_i32$3 = 9;
    i64toi32_i32$1 = -1;
    $3_1 = i64toi32_i32$5 >>> 0 > i64toi32_i32$3 >>> 0 | ((i64toi32_i32$5 | 0) == (i64toi32_i32$3 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$1 >>> 0 | 0) | 0;
    i64toi32_i32$2 = $2$hi;
    $0_1 = $2_1;
    $0$hi = i64toi32_i32$2;
    if ($3_1) {
     continue label$3
    }
    break label$3;
   };
  }
  label$4 : {
   i64toi32_i32$2 = $2$hi;
   if (!($2_1 | i64toi32_i32$2 | 0)) {
    break label$4
   }
   $3_1 = $2_1;
   label$5 : while (1) {
    $1_1 = $1_1 + -1 | 0;
    $4_1 = ($3_1 >>> 0) / (10 >>> 0) | 0;
    HEAP8[$1_1 >> 0] = $3_1 - Math_imul($4_1, 10) | 0 | 48 | 0;
    $5_1 = $3_1 >>> 0 > 9 >>> 0;
    $3_1 = $4_1;
    if ($5_1) {
     continue label$5
    }
    break label$5;
   };
  }
  return $1_1 | 0;
 }
 
 function $88($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0;
  $5_1 = global$0 - 256 | 0;
  global$0 = $5_1;
  label$1 : {
   if (($2_1 | 0) <= ($3_1 | 0)) {
    break label$1
   }
   if ($4_1 & 73728 | 0) {
    break label$1
   }
   $3_1 = $2_1 - $3_1 | 0;
   $2_1 = $3_1 >>> 0 < 256 >>> 0;
   $61($5_1 | 0, $1_1 | 0, ($2_1 ? $3_1 : 256) | 0) | 0;
   label$2 : {
    if ($2_1) {
     break label$2
    }
    label$3 : while (1) {
     $82($0_1 | 0, $5_1 | 0, 256 | 0);
     $3_1 = $3_1 + -256 | 0;
     if ($3_1 >>> 0 > 255 >>> 0) {
      continue label$3
     }
     break label$3;
    };
   }
   $82($0_1 | 0, $5_1 | 0, $3_1 | 0);
  }
  global$0 = $5_1 + 256 | 0;
 }
 
 function $89($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return $80($0_1 | 0, $1_1 | 0, $2_1 | 0, 4 | 0, 5 | 0) | 0 | 0;
 }
 
 function $90($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  var $10_1 = 0, $11_1 = 0, $18_1 = 0, $19_1 = 0, $12_1 = 0, i64toi32_i32$1 = 0, $15_1 = 0, $6_1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, i64toi32_i32$3 = 0, $22_1 = 0, i64toi32_i32$2 = 0, $23_1 = 0, $20_1 = 0, $17_1 = 0, $8_1 = 0, $27_1 = 0.0, $13_1 = 0, $24_1 = 0, $14_1 = 0, $16_1 = 0, $24$hi = 0, $9_1 = 0, $21_1 = 0, $7_1 = 0, $44_1 = 0, $45_1 = 0, $46_1 = 0, $25$hi = 0, $47_1 = 0, $25_1 = 0, $168 = 0, $170$hi = 0, $172$hi = 0, $174 = 0, $174$hi = 0, $26$hi = 0, $180 = 0, $180$hi = 0, $388 = 0.0;
  $6_1 = global$0 - 560 | 0;
  global$0 = $6_1;
  $7_1 = 0;
  HEAP32[($6_1 + 44 | 0) >> 2] = 0;
  label$1 : {
   label$2 : {
    i64toi32_i32$0 = $92(+$1_1) | 0;
    i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
    $24_1 = i64toi32_i32$0;
    $24$hi = i64toi32_i32$1;
    i64toi32_i32$2 = i64toi32_i32$0;
    i64toi32_i32$0 = -1;
    i64toi32_i32$3 = -1;
    if ((i64toi32_i32$1 | 0) > (i64toi32_i32$0 | 0)) {
     $44_1 = 1
    } else {
     if ((i64toi32_i32$1 | 0) >= (i64toi32_i32$0 | 0)) {
      if (i64toi32_i32$2 >>> 0 <= i64toi32_i32$3 >>> 0) {
       $45_1 = 0
      } else {
       $45_1 = 1
      }
      $46_1 = $45_1;
     } else {
      $46_1 = 0
     }
     $44_1 = $46_1;
    }
    if ($44_1) {
     break label$2
    }
    $8_1 = 1;
    $9_1 = 65549;
    $1_1 = -$1_1;
    i64toi32_i32$2 = $92(+$1_1) | 0;
    i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
    $24_1 = i64toi32_i32$2;
    $24$hi = i64toi32_i32$1;
    break label$1;
   }
   label$3 : {
    if (!($4_1 & 2048 | 0)) {
     break label$3
    }
    $8_1 = 1;
    $9_1 = 65552;
    break label$1;
   }
   $8_1 = $4_1 & 1 | 0;
   $9_1 = $8_1 ? 65555 : 65550;
   $7_1 = !$8_1;
  }
  label$4 : {
   label$5 : {
    i64toi32_i32$1 = $24$hi;
    i64toi32_i32$3 = $24_1;
    i64toi32_i32$2 = 2146435072;
    i64toi32_i32$0 = 0;
    i64toi32_i32$2 = i64toi32_i32$1 & i64toi32_i32$2 | 0;
    i64toi32_i32$1 = i64toi32_i32$3 & i64toi32_i32$0 | 0;
    i64toi32_i32$3 = 2146435072;
    i64toi32_i32$0 = 0;
    if ((i64toi32_i32$1 | 0) != (i64toi32_i32$0 | 0) | (i64toi32_i32$2 | 0) != (i64toi32_i32$3 | 0) | 0) {
     break label$5
    }
    $10_1 = $8_1 + 3 | 0;
    $88($0_1 | 0, 32 | 0, $2_1 | 0, $10_1 | 0, $4_1 & -65537 | 0 | 0);
    $82($0_1 | 0, $9_1 | 0, $8_1 | 0);
    $11_1 = $5_1 & 32 | 0;
    $82($0_1 | 0, ($1_1 != $1_1 ? ($11_1 ? 65568 : 65576) : $11_1 ? 65572 : 65580) | 0, 3 | 0);
    $88($0_1 | 0, 32 | 0, $2_1 | 0, $10_1 | 0, $4_1 ^ 8192 | 0 | 0);
    $12_1 = ($2_1 | 0) > ($10_1 | 0) ? $2_1 : $10_1;
    break label$4;
   }
   $13_1 = $6_1 + 16 | 0;
   label$6 : {
    label$7 : {
     label$8 : {
      label$9 : {
       $1_1 = +$79(+$1_1, $6_1 + 44 | 0 | 0);
       $1_1 = $1_1 + $1_1;
       if ($1_1 == 0.0) {
        break label$9
       }
       $10_1 = HEAP32[($6_1 + 44 | 0) >> 2] | 0;
       HEAP32[($6_1 + 44 | 0) >> 2] = $10_1 + -1 | 0;
       $14_1 = $5_1 | 32 | 0;
       if (($14_1 | 0) != (97 | 0)) {
        break label$8
       }
       break label$6;
      }
      $14_1 = $5_1 | 32 | 0;
      if (($14_1 | 0) == (97 | 0)) {
       break label$6
      }
      $15_1 = ($3_1 | 0) < (0 | 0) ? 6 : $3_1;
      $16_1 = HEAP32[($6_1 + 44 | 0) >> 2] | 0;
      break label$7;
     }
     $16_1 = $10_1 + -29 | 0;
     HEAP32[($6_1 + 44 | 0) >> 2] = $16_1;
     $15_1 = ($3_1 | 0) < (0 | 0) ? 6 : $3_1;
     $1_1 = $1_1 * 268435456.0;
    }
    $17_1 = ($6_1 + 48 | 0) + (($16_1 | 0) < (0 | 0) ? 0 : 288) | 0;
    $11_1 = $17_1;
    label$10 : while (1) {
     label$11 : {
      label$12 : {
       if (!($1_1 < 4294967296.0 & $1_1 >= 0.0 | 0)) {
        break label$12
       }
       $10_1 = ~~$1_1 >>> 0;
       break label$11;
      }
      $10_1 = 0;
     }
     HEAP32[$11_1 >> 2] = $10_1;
     $11_1 = $11_1 + 4 | 0;
     $1_1 = ($1_1 - +($10_1 >>> 0)) * 1.0e9;
     if ($1_1 != 0.0) {
      continue label$10
     }
     break label$10;
    };
    label$13 : {
     label$14 : {
      if (($16_1 | 0) >= (1 | 0)) {
       break label$14
      }
      $18_1 = $16_1;
      $10_1 = $11_1;
      $19_1 = $17_1;
      break label$13;
     }
     $19_1 = $17_1;
     $18_1 = $16_1;
     label$15 : while (1) {
      $18_1 = $18_1 >>> 0 < 29 >>> 0 ? $18_1 : 29;
      label$16 : {
       $10_1 = $11_1 + -4 | 0;
       if ($10_1 >>> 0 < $19_1 >>> 0) {
        break label$16
       }
       i64toi32_i32$1 = 0;
       $25_1 = $18_1;
       $25$hi = i64toi32_i32$1;
       i64toi32_i32$1 = 0;
       $24_1 = 0;
       $24$hi = i64toi32_i32$1;
       label$17 : while (1) {
        $168 = $10_1;
        i64toi32_i32$0 = $10_1;
        i64toi32_i32$1 = HEAP32[$10_1 >> 2] | 0;
        i64toi32_i32$2 = 0;
        $170$hi = i64toi32_i32$2;
        i64toi32_i32$2 = $25$hi;
        i64toi32_i32$2 = $170$hi;
        i64toi32_i32$0 = i64toi32_i32$1;
        i64toi32_i32$1 = $25$hi;
        i64toi32_i32$3 = $25_1;
        i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
         $47_1 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
         $47_1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
        }
        $172$hi = i64toi32_i32$1;
        i64toi32_i32$1 = $24$hi;
        i64toi32_i32$2 = $24_1;
        i64toi32_i32$0 = 0;
        i64toi32_i32$3 = -1;
        i64toi32_i32$0 = i64toi32_i32$1 & i64toi32_i32$0 | 0;
        $174 = i64toi32_i32$2 & i64toi32_i32$3 | 0;
        $174$hi = i64toi32_i32$0;
        i64toi32_i32$0 = $172$hi;
        i64toi32_i32$1 = $47_1;
        i64toi32_i32$2 = $174$hi;
        i64toi32_i32$3 = $174;
        i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$3 | 0;
        i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$2 | 0;
        if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
         i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
        }
        $26$hi = i64toi32_i32$5;
        i64toi32_i32$1 = 0;
        i64toi32_i32$1 = __wasm_i64_udiv(i64toi32_i32$4 | 0, i64toi32_i32$5 | 0, 1e9 | 0, i64toi32_i32$1 | 0) | 0;
        i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
        $24_1 = i64toi32_i32$1;
        $24$hi = i64toi32_i32$5;
        i64toi32_i32$1 = 0;
        i64toi32_i32$1 = __wasm_i64_mul($24_1 | 0, i64toi32_i32$5 | 0, 1e9 | 0, i64toi32_i32$1 | 0) | 0;
        i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
        $180 = i64toi32_i32$1;
        $180$hi = i64toi32_i32$5;
        i64toi32_i32$5 = $26$hi;
        i64toi32_i32$0 = i64toi32_i32$4;
        i64toi32_i32$1 = $180$hi;
        i64toi32_i32$3 = $180;
        i64toi32_i32$2 = i64toi32_i32$4 - i64toi32_i32$3 | 0;
        i64toi32_i32$4 = (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) + i64toi32_i32$1 | 0;
        i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
        HEAP32[$168 >> 2] = i64toi32_i32$2;
        $10_1 = $10_1 + -4 | 0;
        if ($10_1 >>> 0 >= $19_1 >>> 0) {
         continue label$17
        }
        break label$17;
       };
       i64toi32_i32$4 = i64toi32_i32$5;
       i64toi32_i32$4 = i64toi32_i32$5;
       i64toi32_i32$5 = i64toi32_i32$0;
       i64toi32_i32$0 = 0;
       i64toi32_i32$3 = 1e9;
       if (i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0 | 0) | 0) {
        break label$16
       }
       $19_1 = $19_1 + -4 | 0;
       i64toi32_i32$5 = $24$hi;
       HEAP32[$19_1 >> 2] = $24_1;
      }
      label$18 : {
       label$19 : while (1) {
        $10_1 = $11_1;
        if ($10_1 >>> 0 <= $19_1 >>> 0) {
         break label$18
        }
        $11_1 = $10_1 + -4 | 0;
        if (!(HEAP32[$11_1 >> 2] | 0)) {
         continue label$19
        }
        break label$19;
       };
      }
      $18_1 = (HEAP32[($6_1 + 44 | 0) >> 2] | 0) - $18_1 | 0;
      HEAP32[($6_1 + 44 | 0) >> 2] = $18_1;
      $11_1 = $10_1;
      if (($18_1 | 0) > (0 | 0)) {
       continue label$15
      }
      break label$15;
     };
    }
    label$20 : {
     if (($18_1 | 0) > (-1 | 0)) {
      break label$20
     }
     $20_1 = ((($15_1 + 25 | 0) >>> 0) / (9 >>> 0) | 0) + 1 | 0;
     $21_1 = ($14_1 | 0) == (102 | 0);
     label$21 : while (1) {
      $11_1 = 0 - $18_1 | 0;
      $12_1 = $11_1 >>> 0 < 9 >>> 0 ? $11_1 : 9;
      label$22 : {
       label$23 : {
        if ($19_1 >>> 0 < $10_1 >>> 0) {
         break label$23
        }
        $11_1 = !(HEAP32[$19_1 >> 2] | 0) << 2 | 0;
        break label$22;
       }
       $22_1 = 1e9 >>> $12_1 | 0;
       $23_1 = (-1 << $12_1 | 0) ^ -1 | 0;
       $18_1 = 0;
       $11_1 = $19_1;
       label$24 : while (1) {
        $3_1 = HEAP32[$11_1 >> 2] | 0;
        HEAP32[$11_1 >> 2] = ($3_1 >>> $12_1 | 0) + $18_1 | 0;
        $18_1 = Math_imul($3_1 & $23_1 | 0, $22_1);
        $11_1 = $11_1 + 4 | 0;
        if ($11_1 >>> 0 < $10_1 >>> 0) {
         continue label$24
        }
        break label$24;
       };
       $11_1 = !(HEAP32[$19_1 >> 2] | 0) << 2 | 0;
       if (!$18_1) {
        break label$22
       }
       HEAP32[$10_1 >> 2] = $18_1;
       $10_1 = $10_1 + 4 | 0;
      }
      $18_1 = (HEAP32[($6_1 + 44 | 0) >> 2] | 0) + $12_1 | 0;
      HEAP32[($6_1 + 44 | 0) >> 2] = $18_1;
      $19_1 = $19_1 + $11_1 | 0;
      $11_1 = $21_1 ? $17_1 : $19_1;
      $10_1 = (($10_1 - $11_1 | 0) >> 2 | 0 | 0) > ($20_1 | 0) ? $11_1 + ($20_1 << 2 | 0) | 0 : $10_1;
      if (($18_1 | 0) < (0 | 0)) {
       continue label$21
      }
      break label$21;
     };
    }
    $18_1 = 0;
    label$25 : {
     if ($19_1 >>> 0 >= $10_1 >>> 0) {
      break label$25
     }
     $18_1 = Math_imul(($17_1 - $19_1 | 0) >> 2 | 0, 9);
     $11_1 = 10;
     $3_1 = HEAP32[$19_1 >> 2] | 0;
     if ($3_1 >>> 0 < 10 >>> 0) {
      break label$25
     }
     label$26 : while (1) {
      $18_1 = $18_1 + 1 | 0;
      $11_1 = Math_imul($11_1, 10);
      if ($3_1 >>> 0 >= $11_1 >>> 0) {
       continue label$26
      }
      break label$26;
     };
    }
    label$27 : {
     $11_1 = ($15_1 - (($14_1 | 0) == (102 | 0) ? 0 : $18_1) | 0) - (($15_1 | 0) != (0 | 0) & ($14_1 | 0) == (103 | 0) | 0) | 0;
     if (($11_1 | 0) >= (Math_imul(($10_1 - $17_1 | 0) >> 2 | 0, 9) + -9 | 0 | 0)) {
      break label$27
     }
     $3_1 = $11_1 + 9216 | 0;
     $22_1 = ($3_1 | 0) / (9 | 0) | 0;
     $12_1 = (($6_1 + 48 | 0) + (($16_1 | 0) < (0 | 0) ? -4092 : -3804) | 0) + ($22_1 << 2 | 0) | 0;
     $11_1 = 10;
     label$28 : {
      $3_1 = $3_1 - Math_imul($22_1, 9) | 0;
      if (($3_1 | 0) > (7 | 0)) {
       break label$28
      }
      label$29 : while (1) {
       $11_1 = Math_imul($11_1, 10);
       $3_1 = $3_1 + 1 | 0;
       if (($3_1 | 0) != (8 | 0)) {
        continue label$29
       }
       break label$29;
      };
     }
     $23_1 = $12_1 + 4 | 0;
     label$30 : {
      label$31 : {
       $3_1 = HEAP32[$12_1 >> 2] | 0;
       $20_1 = ($3_1 >>> 0) / ($11_1 >>> 0) | 0;
       $22_1 = $3_1 - Math_imul($20_1, $11_1) | 0;
       if ($22_1) {
        break label$31
       }
       if (($23_1 | 0) == ($10_1 | 0)) {
        break label$30
       }
      }
      label$32 : {
       label$33 : {
        if ($20_1 & 1 | 0) {
         break label$33
        }
        $1_1 = 9007199254740992.0;
        if (($11_1 | 0) != (1e9 | 0)) {
         break label$32
        }
        if ($12_1 >>> 0 <= $19_1 >>> 0) {
         break label$32
        }
        if (!((HEAPU8[($12_1 + -4 | 0) >> 0] | 0) & 1 | 0)) {
         break label$32
        }
       }
       $1_1 = 9007199254740994.0;
      }
      $388 = ($23_1 | 0) == ($10_1 | 0) ? 1.0 : 1.5;
      $23_1 = $11_1 >>> 1 | 0;
      $27_1 = $22_1 >>> 0 < $23_1 >>> 0 ? .5 : ($22_1 | 0) == ($23_1 | 0) ? $388 : 1.5;
      label$34 : {
       if ($7_1) {
        break label$34
       }
       if ((HEAPU8[$9_1 >> 0] | 0 | 0) != (45 | 0)) {
        break label$34
       }
       $27_1 = -$27_1;
       $1_1 = -$1_1;
      }
      $3_1 = $3_1 - $22_1 | 0;
      HEAP32[$12_1 >> 2] = $3_1;
      if ($1_1 + $27_1 == $1_1) {
       break label$30
      }
      $11_1 = $3_1 + $11_1 | 0;
      HEAP32[$12_1 >> 2] = $11_1;
      label$35 : {
       if ($11_1 >>> 0 < 1e9 >>> 0) {
        break label$35
       }
       label$36 : while (1) {
        HEAP32[$12_1 >> 2] = 0;
        label$37 : {
         $12_1 = $12_1 + -4 | 0;
         if ($12_1 >>> 0 >= $19_1 >>> 0) {
          break label$37
         }
         $19_1 = $19_1 + -4 | 0;
         HEAP32[$19_1 >> 2] = 0;
        }
        $11_1 = (HEAP32[$12_1 >> 2] | 0) + 1 | 0;
        HEAP32[$12_1 >> 2] = $11_1;
        if ($11_1 >>> 0 > 999999999 >>> 0) {
         continue label$36
        }
        break label$36;
       };
      }
      $18_1 = Math_imul(($17_1 - $19_1 | 0) >> 2 | 0, 9);
      $11_1 = 10;
      $3_1 = HEAP32[$19_1 >> 2] | 0;
      if ($3_1 >>> 0 < 10 >>> 0) {
       break label$30
      }
      label$38 : while (1) {
       $18_1 = $18_1 + 1 | 0;
       $11_1 = Math_imul($11_1, 10);
       if ($3_1 >>> 0 >= $11_1 >>> 0) {
        continue label$38
       }
       break label$38;
      };
     }
     $11_1 = $12_1 + 4 | 0;
     $10_1 = $10_1 >>> 0 > $11_1 >>> 0 ? $11_1 : $10_1;
    }
    label$39 : {
     label$40 : while (1) {
      $11_1 = $10_1;
      $3_1 = $10_1 >>> 0 <= $19_1 >>> 0;
      if ($3_1) {
       break label$39
      }
      $10_1 = $10_1 + -4 | 0;
      if (!(HEAP32[$10_1 >> 2] | 0)) {
       continue label$40
      }
      break label$40;
     };
    }
    label$41 : {
     label$42 : {
      if (($14_1 | 0) == (103 | 0)) {
       break label$42
      }
      $22_1 = $4_1 & 8 | 0;
      break label$41;
     }
     $10_1 = $15_1 ? $15_1 : 1;
     $12_1 = ($10_1 | 0) > ($18_1 | 0) & ($18_1 | 0) > (-5 | 0) | 0;
     $15_1 = ($12_1 ? $18_1 ^ -1 | 0 : -1) + $10_1 | 0;
     $5_1 = ($12_1 ? -1 : -2) + $5_1 | 0;
     $22_1 = $4_1 & 8 | 0;
     if ($22_1) {
      break label$41
     }
     $10_1 = -9;
     label$43 : {
      if ($3_1) {
       break label$43
      }
      $12_1 = HEAP32[($11_1 + -4 | 0) >> 2] | 0;
      if (!$12_1) {
       break label$43
      }
      $3_1 = 10;
      $10_1 = 0;
      if (($12_1 >>> 0) % (10 >>> 0) | 0) {
       break label$43
      }
      label$44 : while (1) {
       $22_1 = $10_1;
       $10_1 = $10_1 + 1 | 0;
       $3_1 = Math_imul($3_1, 10);
       if (!(($12_1 >>> 0) % ($3_1 >>> 0) | 0)) {
        continue label$44
       }
       break label$44;
      };
      $10_1 = $22_1 ^ -1 | 0;
     }
     $3_1 = Math_imul(($11_1 - $17_1 | 0) >> 2 | 0, 9);
     label$45 : {
      if (($5_1 & -33 | 0 | 0) != (70 | 0)) {
       break label$45
      }
      $22_1 = 0;
      $10_1 = ($3_1 + $10_1 | 0) + -9 | 0;
      $10_1 = ($10_1 | 0) > (0 | 0) ? $10_1 : 0;
      $15_1 = ($15_1 | 0) < ($10_1 | 0) ? $15_1 : $10_1;
      break label$41;
     }
     $22_1 = 0;
     $10_1 = (($18_1 + $3_1 | 0) + $10_1 | 0) + -9 | 0;
     $10_1 = ($10_1 | 0) > (0 | 0) ? $10_1 : 0;
     $15_1 = ($15_1 | 0) < ($10_1 | 0) ? $15_1 : $10_1;
    }
    $12_1 = -1;
    $23_1 = $15_1 | $22_1 | 0;
    if (($15_1 | 0) > (($23_1 ? 2147483645 : 2147483646) | 0)) {
     break label$4
    }
    $3_1 = ($15_1 + (($23_1 | 0) != (0 | 0)) | 0) + 1 | 0;
    label$46 : {
     label$47 : {
      $21_1 = $5_1 & -33 | 0;
      if (($21_1 | 0) != (70 | 0)) {
       break label$47
      }
      if (($18_1 | 0) > ($3_1 ^ 2147483647 | 0 | 0)) {
       break label$4
      }
      $10_1 = ($18_1 | 0) > (0 | 0) ? $18_1 : 0;
      break label$46;
     }
     label$48 : {
      $10_1 = $18_1 >> 31 | 0;
      i64toi32_i32$5 = 0;
      $10_1 = $87(($18_1 ^ $10_1 | 0) - $10_1 | 0 | 0, i64toi32_i32$5 | 0, $13_1 | 0) | 0;
      if (($13_1 - $10_1 | 0 | 0) > (1 | 0)) {
       break label$48
      }
      label$49 : while (1) {
       $10_1 = $10_1 + -1 | 0;
       HEAP8[$10_1 >> 0] = 48;
       if (($13_1 - $10_1 | 0 | 0) < (2 | 0)) {
        continue label$49
       }
       break label$49;
      };
     }
     $20_1 = $10_1 + -2 | 0;
     HEAP8[$20_1 >> 0] = $5_1;
     $12_1 = -1;
     HEAP8[($10_1 + -1 | 0) >> 0] = ($18_1 | 0) < (0 | 0) ? 45 : 43;
     $10_1 = $13_1 - $20_1 | 0;
     if (($10_1 | 0) > ($3_1 ^ 2147483647 | 0 | 0)) {
      break label$4
     }
    }
    $12_1 = -1;
    $10_1 = $10_1 + $3_1 | 0;
    if (($10_1 | 0) > ($8_1 ^ 2147483647 | 0 | 0)) {
     break label$4
    }
    $5_1 = $10_1 + $8_1 | 0;
    $88($0_1 | 0, 32 | 0, $2_1 | 0, $5_1 | 0, $4_1 | 0);
    $82($0_1 | 0, $9_1 | 0, $8_1 | 0);
    $88($0_1 | 0, 48 | 0, $2_1 | 0, $5_1 | 0, $4_1 ^ 65536 | 0 | 0);
    label$50 : {
     label$51 : {
      label$52 : {
       label$53 : {
        if (($21_1 | 0) != (70 | 0)) {
         break label$53
        }
        $18_1 = $6_1 + 16 | 0 | 9 | 0;
        $3_1 = $19_1 >>> 0 > $17_1 >>> 0 ? $17_1 : $19_1;
        $19_1 = $3_1;
        label$54 : while (1) {
         i64toi32_i32$3 = $19_1;
         i64toi32_i32$5 = HEAP32[$19_1 >> 2] | 0;
         i64toi32_i32$4 = 0;
         $10_1 = $87(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, $18_1 | 0) | 0;
         label$55 : {
          label$56 : {
           if (($19_1 | 0) == ($3_1 | 0)) {
            break label$56
           }
           if ($10_1 >>> 0 <= ($6_1 + 16 | 0) >>> 0) {
            break label$55
           }
           label$57 : while (1) {
            $10_1 = $10_1 + -1 | 0;
            HEAP8[$10_1 >> 0] = 48;
            if ($10_1 >>> 0 > ($6_1 + 16 | 0) >>> 0) {
             continue label$57
            }
            break label$55;
           };
          }
          if (($10_1 | 0) != ($18_1 | 0)) {
           break label$55
          }
          $10_1 = $10_1 + -1 | 0;
          HEAP8[$10_1 >> 0] = 48;
         }
         $82($0_1 | 0, $10_1 | 0, $18_1 - $10_1 | 0 | 0);
         $19_1 = $19_1 + 4 | 0;
         if ($19_1 >>> 0 <= $17_1 >>> 0) {
          continue label$54
         }
         break label$54;
        };
        label$58 : {
         if (!$23_1) {
          break label$58
         }
         $82($0_1 | 0, 65595 | 0, 1 | 0);
        }
        if ($19_1 >>> 0 >= $11_1 >>> 0) {
         break label$52
        }
        if (($15_1 | 0) < (1 | 0)) {
         break label$52
        }
        label$59 : while (1) {
         label$60 : {
          i64toi32_i32$3 = $19_1;
          i64toi32_i32$4 = HEAP32[$19_1 >> 2] | 0;
          i64toi32_i32$5 = 0;
          $10_1 = $87(i64toi32_i32$4 | 0, i64toi32_i32$5 | 0, $18_1 | 0) | 0;
          if ($10_1 >>> 0 <= ($6_1 + 16 | 0) >>> 0) {
           break label$60
          }
          label$61 : while (1) {
           $10_1 = $10_1 + -1 | 0;
           HEAP8[$10_1 >> 0] = 48;
           if ($10_1 >>> 0 > ($6_1 + 16 | 0) >>> 0) {
            continue label$61
           }
           break label$61;
          };
         }
         $82($0_1 | 0, $10_1 | 0, (($15_1 | 0) < (9 | 0) ? $15_1 : 9) | 0);
         $10_1 = $15_1 + -9 | 0;
         $19_1 = $19_1 + 4 | 0;
         if ($19_1 >>> 0 >= $11_1 >>> 0) {
          break label$51
         }
         $3_1 = ($15_1 | 0) > (9 | 0);
         $15_1 = $10_1;
         if ($3_1) {
          continue label$59
         }
         break label$51;
        };
       }
       label$62 : {
        if (($15_1 | 0) < (0 | 0)) {
         break label$62
        }
        $12_1 = $11_1 >>> 0 > $19_1 >>> 0 ? $11_1 : $19_1 + 4 | 0;
        $18_1 = $6_1 + 16 | 0 | 9 | 0;
        $11_1 = $19_1;
        label$63 : while (1) {
         label$64 : {
          i64toi32_i32$3 = $11_1;
          i64toi32_i32$5 = HEAP32[$11_1 >> 2] | 0;
          i64toi32_i32$4 = 0;
          $10_1 = $87(i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, $18_1 | 0) | 0;
          if (($10_1 | 0) != ($18_1 | 0)) {
           break label$64
          }
          $10_1 = $10_1 + -1 | 0;
          HEAP8[$10_1 >> 0] = 48;
         }
         label$65 : {
          label$66 : {
           if (($11_1 | 0) == ($19_1 | 0)) {
            break label$66
           }
           if ($10_1 >>> 0 <= ($6_1 + 16 | 0) >>> 0) {
            break label$65
           }
           label$67 : while (1) {
            $10_1 = $10_1 + -1 | 0;
            HEAP8[$10_1 >> 0] = 48;
            if ($10_1 >>> 0 > ($6_1 + 16 | 0) >>> 0) {
             continue label$67
            }
            break label$65;
           };
          }
          $82($0_1 | 0, $10_1 | 0, 1 | 0);
          $10_1 = $10_1 + 1 | 0;
          if (!($15_1 | $22_1 | 0)) {
           break label$65
          }
          $82($0_1 | 0, 65595 | 0, 1 | 0);
         }
         $3_1 = $18_1 - $10_1 | 0;
         $82($0_1 | 0, $10_1 | 0, (($15_1 | 0) > ($3_1 | 0) ? $3_1 : $15_1) | 0);
         $15_1 = $15_1 - $3_1 | 0;
         $11_1 = $11_1 + 4 | 0;
         if ($11_1 >>> 0 >= $12_1 >>> 0) {
          break label$62
         }
         if (($15_1 | 0) > (-1 | 0)) {
          continue label$63
         }
         break label$63;
        };
       }
       $88($0_1 | 0, 48 | 0, $15_1 + 18 | 0 | 0, 18 | 0, 0 | 0);
       $82($0_1 | 0, $20_1 | 0, $13_1 - $20_1 | 0 | 0);
       break label$50;
      }
      $10_1 = $15_1;
     }
     $88($0_1 | 0, 48 | 0, $10_1 + 9 | 0 | 0, 9 | 0, 0 | 0);
    }
    $88($0_1 | 0, 32 | 0, $2_1 | 0, $5_1 | 0, $4_1 ^ 8192 | 0 | 0);
    $12_1 = ($2_1 | 0) > ($5_1 | 0) ? $2_1 : $5_1;
    break label$4;
   }
   $20_1 = $9_1 + ((($5_1 << 26 | 0) >> 31 | 0) & 9 | 0) | 0;
   label$68 : {
    if ($3_1 >>> 0 > 11 >>> 0) {
     break label$68
    }
    $10_1 = 12 - $3_1 | 0;
    $27_1 = 16.0;
    label$69 : while (1) {
     $27_1 = $27_1 * 16.0;
     $10_1 = $10_1 + -1 | 0;
     if ($10_1) {
      continue label$69
     }
     break label$69;
    };
    label$70 : {
     if ((HEAPU8[$20_1 >> 0] | 0 | 0) != (45 | 0)) {
      break label$70
     }
     $1_1 = -($27_1 + (-$1_1 - $27_1));
     break label$68;
    }
    $1_1 = $1_1 + $27_1 - $27_1;
   }
   label$71 : {
    $11_1 = HEAP32[($6_1 + 44 | 0) >> 2] | 0;
    $10_1 = $11_1 >> 31 | 0;
    i64toi32_i32$4 = 0;
    $10_1 = $87(($11_1 ^ $10_1 | 0) - $10_1 | 0 | 0, i64toi32_i32$4 | 0, $13_1 | 0) | 0;
    if (($10_1 | 0) != ($13_1 | 0)) {
     break label$71
    }
    $10_1 = $10_1 + -1 | 0;
    HEAP8[$10_1 >> 0] = 48;
    $11_1 = HEAP32[($6_1 + 44 | 0) >> 2] | 0;
   }
   $22_1 = $8_1 | 2 | 0;
   $19_1 = $5_1 & 32 | 0;
   $23_1 = $10_1 + -2 | 0;
   HEAP8[$23_1 >> 0] = $5_1 + 15 | 0;
   HEAP8[($10_1 + -1 | 0) >> 0] = ($11_1 | 0) < (0 | 0) ? 45 : 43;
   $18_1 = ($3_1 | 0) < (1 | 0) & !($4_1 & 8 | 0) | 0;
   $11_1 = $6_1 + 16 | 0;
   label$72 : while (1) {
    $10_1 = $11_1;
    label$73 : {
     label$74 : {
      if (!(Math_abs($1_1) < 2147483648.0)) {
       break label$74
      }
      $11_1 = ~~$1_1;
      break label$73;
     }
     $11_1 = -2147483648;
    }
    HEAP8[$10_1 >> 0] = HEAPU8[($11_1 + 68336 | 0) >> 0] | 0 | $19_1 | 0;
    $1_1 = ($1_1 - +($11_1 | 0)) * 16.0;
    label$75 : {
     $11_1 = $10_1 + 1 | 0;
     if (($11_1 - ($6_1 + 16 | 0) | 0 | 0) != (1 | 0)) {
      break label$75
     }
     if ($1_1 == 0.0 & $18_1 | 0) {
      break label$75
     }
     HEAP8[($10_1 + 1 | 0) >> 0] = 46;
     $11_1 = $10_1 + 2 | 0;
    }
    if ($1_1 != 0.0) {
     continue label$72
    }
    break label$72;
   };
   $12_1 = -1;
   $19_1 = $13_1 - $23_1 | 0;
   $18_1 = $22_1 + $19_1 | 0;
   if (($3_1 | 0) > (2147483645 - $18_1 | 0 | 0)) {
    break label$4
   }
   $10_1 = $11_1 - ($6_1 + 16 | 0) | 0;
   $3_1 = $3_1 ? (($10_1 + -2 | 0 | 0) < ($3_1 | 0) ? $3_1 + 2 | 0 : $10_1) : $10_1;
   $11_1 = $18_1 + $3_1 | 0;
   $88($0_1 | 0, 32 | 0, $2_1 | 0, $11_1 | 0, $4_1 | 0);
   $82($0_1 | 0, $20_1 | 0, $22_1 | 0);
   $88($0_1 | 0, 48 | 0, $2_1 | 0, $11_1 | 0, $4_1 ^ 65536 | 0 | 0);
   $82($0_1 | 0, $6_1 + 16 | 0 | 0, $10_1 | 0);
   $88($0_1 | 0, 48 | 0, $3_1 - $10_1 | 0 | 0, 0 | 0, 0 | 0);
   $82($0_1 | 0, $23_1 | 0, $19_1 | 0);
   $88($0_1 | 0, 32 | 0, $2_1 | 0, $11_1 | 0, $4_1 ^ 8192 | 0 | 0);
   $12_1 = ($2_1 | 0) > ($11_1 | 0) ? $2_1 : $11_1;
  }
  global$0 = $6_1 + 560 | 0;
  return $12_1 | 0;
 }
 
 function $91($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $2_1 = 0, $12_1 = 0, $12$hi = 0, $15_1 = 0, $15$hi = 0;
  $2_1 = ((HEAP32[$1_1 >> 2] | 0) + 7 | 0) & -8 | 0;
  HEAP32[$1_1 >> 2] = $2_1 + 16 | 0;
  i64toi32_i32$2 = $2_1;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $12_1 = i64toi32_i32$0;
  $12$hi = i64toi32_i32$1;
  i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $15_1 = i64toi32_i32$1;
  $15$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $12$hi;
  i64toi32_i32$1 = $15$hi;
  HEAPF64[$0_1 >> 3] = +$107($12_1 | 0, i64toi32_i32$0 | 0, $15_1 | 0, i64toi32_i32$1 | 0);
 }
 
 function $92($0_1) {
  $0_1 = +$0_1;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  wasm2js_scratch_store_f64(+$0_1);
  i64toi32_i32$0 = wasm2js_scratch_load_i32(1 | 0) | 0;
  i64toi32_i32$1 = wasm2js_scratch_load_i32(0 | 0) | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function $93($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  $4_1 = global$0 - 160 | 0;
  global$0 = $4_1;
  $0_1 = $1_1 ? $0_1 : $4_1 + 158 | 0;
  HEAP32[($4_1 + 148 | 0) >> 2] = $0_1;
  $5_1 = $1_1 + -1 | 0;
  HEAP32[($4_1 + 152 | 0) >> 2] = $5_1 >>> 0 > $1_1 >>> 0 ? 0 : $5_1;
  $4_1 = $61($4_1 | 0, 0 | 0, 144 | 0) | 0;
  HEAP32[($4_1 + 76 | 0) >> 2] = -1;
  HEAP32[($4_1 + 36 | 0) >> 2] = 6;
  HEAP32[($4_1 + 80 | 0) >> 2] = -1;
  HEAP32[($4_1 + 44 | 0) >> 2] = $4_1 + 159 | 0;
  HEAP32[($4_1 + 84 | 0) >> 2] = $4_1 + 148 | 0;
  HEAP8[$0_1 >> 0] = 0;
  $1_1 = $89($4_1 | 0, $2_1 | 0, $3_1 | 0) | 0;
  global$0 = $4_1 + 160 | 0;
  return $1_1 | 0;
 }
 
 function $94($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $5_1 = 0, $4_1 = 0, $7_1 = 0, $6_1 = 0;
  $3_1 = HEAP32[($0_1 + 84 | 0) >> 2] | 0;
  $4_1 = HEAP32[$3_1 >> 2] | 0;
  label$1 : {
   $5_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
   $6_1 = HEAP32[($0_1 + 28 | 0) >> 2] | 0;
   $7_1 = (HEAP32[($0_1 + 20 | 0) >> 2] | 0) - $6_1 | 0;
   $7_1 = $5_1 >>> 0 < $7_1 >>> 0 ? $5_1 : $7_1;
   if (!$7_1) {
    break label$1
   }
   $41($4_1 | 0, $6_1 | 0, $7_1 | 0) | 0;
   $4_1 = (HEAP32[$3_1 >> 2] | 0) + $7_1 | 0;
   HEAP32[$3_1 >> 2] = $4_1;
   $5_1 = (HEAP32[($3_1 + 4 | 0) >> 2] | 0) - $7_1 | 0;
   HEAP32[($3_1 + 4 | 0) >> 2] = $5_1;
  }
  label$2 : {
   $5_1 = $5_1 >>> 0 < $2_1 >>> 0 ? $5_1 : $2_1;
   if (!$5_1) {
    break label$2
   }
   $41($4_1 | 0, $1_1 | 0, $5_1 | 0) | 0;
   $4_1 = (HEAP32[$3_1 >> 2] | 0) + $5_1 | 0;
   HEAP32[$3_1 >> 2] = $4_1;
   HEAP32[($3_1 + 4 | 0) >> 2] = (HEAP32[($3_1 + 4 | 0) >> 2] | 0) - $5_1 | 0;
  }
  HEAP8[$4_1 >> 0] = 0;
  $3_1 = HEAP32[($0_1 + 44 | 0) >> 2] | 0;
  HEAP32[($0_1 + 28 | 0) >> 2] = $3_1;
  HEAP32[($0_1 + 20 | 0) >> 2] = $3_1;
  return $2_1 | 0;
 }
 
 function $95($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return $93($0_1 | 0, 2147483647 | 0, $1_1 | 0, $2_1 | 0) | 0 | 0;
 }
 
 function $96($0_1) {
  $0_1 = $0_1 | 0;
  label$1 : {
   if ($0_1) {
    break label$1
   }
   return 0 | 0;
  }
  HEAP32[($42() | 0) >> 2] = $0_1;
  return -1 | 0;
 }
 
 function $97($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = 1;
  label$1 : {
   label$2 : {
    if (!$0_1) {
     break label$2
    }
    if ($1_1 >>> 0 <= 127 >>> 0) {
     break label$1
    }
    label$3 : {
     label$4 : {
      if (HEAP32[(HEAP32[(($64() | 0) + 96 | 0) >> 2] | 0) >> 2] | 0) {
       break label$4
      }
      if (($1_1 & -128 | 0 | 0) == (57216 | 0)) {
       break label$1
      }
      HEAP32[($42() | 0) >> 2] = 25;
      break label$3;
     }
     label$5 : {
      if ($1_1 >>> 0 > 2047 >>> 0) {
       break label$5
      }
      HEAP8[($0_1 + 1 | 0) >> 0] = $1_1 & 63 | 0 | 128 | 0;
      HEAP8[$0_1 >> 0] = $1_1 >>> 6 | 0 | 192 | 0;
      return 2 | 0;
     }
     label$6 : {
      label$7 : {
       if ($1_1 >>> 0 < 55296 >>> 0) {
        break label$7
       }
       if (($1_1 & -8192 | 0 | 0) != (57344 | 0)) {
        break label$6
       }
      }
      HEAP8[($0_1 + 2 | 0) >> 0] = $1_1 & 63 | 0 | 128 | 0;
      HEAP8[$0_1 >> 0] = $1_1 >>> 12 | 0 | 224 | 0;
      HEAP8[($0_1 + 1 | 0) >> 0] = ($1_1 >>> 6 | 0) & 63 | 0 | 128 | 0;
      return 3 | 0;
     }
     label$8 : {
      if (($1_1 + -65536 | 0) >>> 0 > 1048575 >>> 0) {
       break label$8
      }
      HEAP8[($0_1 + 3 | 0) >> 0] = $1_1 & 63 | 0 | 128 | 0;
      HEAP8[$0_1 >> 0] = $1_1 >>> 18 | 0 | 240 | 0;
      HEAP8[($0_1 + 2 | 0) >> 0] = ($1_1 >>> 6 | 0) & 63 | 0 | 128 | 0;
      HEAP8[($0_1 + 1 | 0) >> 0] = ($1_1 >>> 12 | 0) & 63 | 0 | 128 | 0;
      return 4 | 0;
     }
     HEAP32[($42() | 0) >> 2] = 25;
    }
    $3_1 = -1;
   }
   return $3_1 | 0;
  }
  HEAP8[$0_1 >> 0] = $1_1;
  return 1 | 0;
 }
 
 function $98($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  label$1 : {
   if ($0_1) {
    break label$1
   }
   return 0 | 0;
  }
  return $97($0_1 | 0, $1_1 | 0, 0 | 0) | 0 | 0;
 }
 
 function $99() {
  return __wasm_memory_size() << 16 | 0 | 0;
 }
 
 function $100($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0;
  $1_1 = HEAP32[(0 + 68500 | 0) >> 2] | 0;
  $2_1 = ($0_1 + 7 | 0) & -8 | 0;
  $0_1 = $1_1 + $2_1 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     if (!$2_1) {
      break label$3
     }
     if ($0_1 >>> 0 <= $1_1 >>> 0) {
      break label$2
     }
    }
    if ($0_1 >>> 0 <= ($99() | 0) >>> 0) {
     break label$1
    }
    if (fimport$4($0_1 | 0) | 0) {
     break label$1
    }
   }
   HEAP32[($42() | 0) >> 2] = 48;
   return -1 | 0;
  }
  HEAP32[(0 + 68500 | 0) >> 2] = $0_1;
  return $1_1 | 0;
 }
 
 function $101($0_1) {
  $0_1 = $0_1 | 0;
  var $5_1 = 0, $4_1 = 0, $7_1 = 0, $8_1 = 0, $3_1 = 0, $2_1 = 0, $6_1 = 0, $10_1 = 0, $11_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $1_1 = 0, $9_1 = 0, $79_1 = 0, $183 = 0, $774 = 0, $776 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             if ($0_1 >>> 0 > 244 >>> 0) {
              break label$11
             }
             label$12 : {
              $2_1 = HEAP32[(0 + 68728 | 0) >> 2] | 0;
              $3_1 = $0_1 >>> 0 < 11 >>> 0 ? 16 : ($0_1 + 11 | 0) & 504 | 0;
              $4_1 = $3_1 >>> 3 | 0;
              $0_1 = $2_1 >>> $4_1 | 0;
              if (!($0_1 & 3 | 0)) {
               break label$12
              }
              label$13 : {
               label$14 : {
                $3_1 = (($0_1 ^ -1 | 0) & 1 | 0) + $4_1 | 0;
                $4_1 = $3_1 << 3 | 0;
                $0_1 = $4_1 + 68768 | 0;
                $4_1 = HEAP32[($4_1 + 68776 | 0) >> 2] | 0;
                $5_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
                if (($0_1 | 0) != ($5_1 | 0)) {
                 break label$14
                }
                HEAP32[(0 + 68728 | 0) >> 2] = $2_1 & (__wasm_rotl_i32(-2 | 0, $3_1 | 0) | 0) | 0;
                break label$13;
               }
               HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
               HEAP32[($0_1 + 8 | 0) >> 2] = $5_1;
              }
              $0_1 = $4_1 + 8 | 0;
              $3_1 = $3_1 << 3 | 0;
              HEAP32[($4_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
              $4_1 = $4_1 + $3_1 | 0;
              HEAP32[($4_1 + 4 | 0) >> 2] = HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 1 | 0;
              break label$1;
             }
             $6_1 = HEAP32[(0 + 68736 | 0) >> 2] | 0;
             if ($3_1 >>> 0 <= $6_1 >>> 0) {
              break label$10
             }
             label$15 : {
              if (!$0_1) {
               break label$15
              }
              label$16 : {
               label$17 : {
                $79_1 = $0_1 << $4_1 | 0;
                $0_1 = 2 << $4_1 | 0;
                $4_1 = __wasm_ctz_i32($79_1 & ($0_1 | (0 - $0_1 | 0) | 0) | 0 | 0) | 0;
                $0_1 = $4_1 << 3 | 0;
                $5_1 = $0_1 + 68768 | 0;
                $0_1 = HEAP32[($0_1 + 68776 | 0) >> 2] | 0;
                $7_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
                if (($5_1 | 0) != ($7_1 | 0)) {
                 break label$17
                }
                $2_1 = $2_1 & (__wasm_rotl_i32(-2 | 0, $4_1 | 0) | 0) | 0;
                HEAP32[(0 + 68728 | 0) >> 2] = $2_1;
                break label$16;
               }
               HEAP32[($7_1 + 12 | 0) >> 2] = $5_1;
               HEAP32[($5_1 + 8 | 0) >> 2] = $7_1;
              }
              HEAP32[($0_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
              $7_1 = $0_1 + $3_1 | 0;
              $4_1 = $4_1 << 3 | 0;
              $3_1 = $4_1 - $3_1 | 0;
              HEAP32[($7_1 + 4 | 0) >> 2] = $3_1 | 1 | 0;
              HEAP32[($0_1 + $4_1 | 0) >> 2] = $3_1;
              label$18 : {
               if (!$6_1) {
                break label$18
               }
               $5_1 = ($6_1 & -8 | 0) + 68768 | 0;
               $4_1 = HEAP32[(0 + 68748 | 0) >> 2] | 0;
               label$19 : {
                label$20 : {
                 $8_1 = 1 << ($6_1 >>> 3 | 0) | 0;
                 if ($2_1 & $8_1 | 0) {
                  break label$20
                 }
                 HEAP32[(0 + 68728 | 0) >> 2] = $2_1 | $8_1 | 0;
                 $8_1 = $5_1;
                 break label$19;
                }
                $8_1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
               }
               HEAP32[($5_1 + 8 | 0) >> 2] = $4_1;
               HEAP32[($8_1 + 12 | 0) >> 2] = $4_1;
               HEAP32[($4_1 + 12 | 0) >> 2] = $5_1;
               HEAP32[($4_1 + 8 | 0) >> 2] = $8_1;
              }
              $0_1 = $0_1 + 8 | 0;
              HEAP32[(0 + 68748 | 0) >> 2] = $7_1;
              HEAP32[(0 + 68736 | 0) >> 2] = $3_1;
              break label$1;
             }
             $9_1 = HEAP32[(0 + 68732 | 0) >> 2] | 0;
             if (!$9_1) {
              break label$10
             }
             $7_1 = HEAP32[(((__wasm_ctz_i32($9_1 | 0) | 0) << 2 | 0) + 69032 | 0) >> 2] | 0;
             $4_1 = ((HEAP32[($7_1 + 4 | 0) >> 2] | 0) & -8 | 0) - $3_1 | 0;
             $5_1 = $7_1;
             label$21 : {
              label$22 : while (1) {
               label$23 : {
                $0_1 = HEAP32[($5_1 + 16 | 0) >> 2] | 0;
                if ($0_1) {
                 break label$23
                }
                $0_1 = HEAP32[($5_1 + 20 | 0) >> 2] | 0;
                if (!$0_1) {
                 break label$21
                }
               }
               $5_1 = ((HEAP32[($0_1 + 4 | 0) >> 2] | 0) & -8 | 0) - $3_1 | 0;
               $183 = $5_1;
               $5_1 = $5_1 >>> 0 < $4_1 >>> 0;
               $4_1 = $5_1 ? $183 : $4_1;
               $7_1 = $5_1 ? $0_1 : $7_1;
               $5_1 = $0_1;
               continue label$22;
              };
             }
             $10_1 = HEAP32[($7_1 + 24 | 0) >> 2] | 0;
             label$24 : {
              $0_1 = HEAP32[($7_1 + 12 | 0) >> 2] | 0;
              if (($0_1 | 0) == ($7_1 | 0)) {
               break label$24
              }
              $5_1 = HEAP32[($7_1 + 8 | 0) >> 2] | 0;
              HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
              HEAP32[($0_1 + 8 | 0) >> 2] = $5_1;
              break label$2;
             }
             label$25 : {
              label$26 : {
               $5_1 = HEAP32[($7_1 + 20 | 0) >> 2] | 0;
               if (!$5_1) {
                break label$26
               }
               $8_1 = $7_1 + 20 | 0;
               break label$25;
              }
              $5_1 = HEAP32[($7_1 + 16 | 0) >> 2] | 0;
              if (!$5_1) {
               break label$9
              }
              $8_1 = $7_1 + 16 | 0;
             }
             label$27 : while (1) {
              $11_1 = $8_1;
              $0_1 = $5_1;
              $8_1 = $0_1 + 20 | 0;
              $5_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
              if ($5_1) {
               continue label$27
              }
              $8_1 = $0_1 + 16 | 0;
              $5_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
              if ($5_1) {
               continue label$27
              }
              break label$27;
             };
             HEAP32[$11_1 >> 2] = 0;
             break label$2;
            }
            $3_1 = -1;
            if ($0_1 >>> 0 > -65 >>> 0) {
             break label$10
            }
            $4_1 = $0_1 + 11 | 0;
            $3_1 = $4_1 & -8 | 0;
            $10_1 = HEAP32[(0 + 68732 | 0) >> 2] | 0;
            if (!$10_1) {
             break label$10
            }
            $6_1 = 31;
            label$28 : {
             if ($0_1 >>> 0 > 16777204 >>> 0) {
              break label$28
             }
             $0_1 = Math_clz32($4_1 >>> 8 | 0);
             $6_1 = ((($3_1 >>> (38 - $0_1 | 0) | 0) & 1 | 0) - ($0_1 << 1 | 0) | 0) + 62 | 0;
            }
            $4_1 = 0 - $3_1 | 0;
            label$29 : {
             label$30 : {
              label$31 : {
               label$32 : {
                $5_1 = HEAP32[(($6_1 << 2 | 0) + 69032 | 0) >> 2] | 0;
                if ($5_1) {
                 break label$32
                }
                $0_1 = 0;
                $8_1 = 0;
                break label$31;
               }
               $0_1 = 0;
               $7_1 = $3_1 << (($6_1 | 0) == (31 | 0) ? 0 : 25 - ($6_1 >>> 1 | 0) | 0) | 0;
               $8_1 = 0;
               label$33 : while (1) {
                label$34 : {
                 $2_1 = ((HEAP32[($5_1 + 4 | 0) >> 2] | 0) & -8 | 0) - $3_1 | 0;
                 if ($2_1 >>> 0 >= $4_1 >>> 0) {
                  break label$34
                 }
                 $4_1 = $2_1;
                 $8_1 = $5_1;
                 if ($4_1) {
                  break label$34
                 }
                 $4_1 = 0;
                 $8_1 = $5_1;
                 $0_1 = $5_1;
                 break label$30;
                }
                $2_1 = HEAP32[($5_1 + 20 | 0) >> 2] | 0;
                $11_1 = HEAP32[(($5_1 + (($7_1 >>> 29 | 0) & 4 | 0) | 0) + 16 | 0) >> 2] | 0;
                $0_1 = $2_1 ? (($2_1 | 0) == ($11_1 | 0) ? $0_1 : $2_1) : $0_1;
                $7_1 = $7_1 << 1 | 0;
                $5_1 = $11_1;
                if ($5_1) {
                 continue label$33
                }
                break label$33;
               };
              }
              label$35 : {
               if ($0_1 | $8_1 | 0) {
                break label$35
               }
               $8_1 = 0;
               $0_1 = 2 << $6_1 | 0;
               $0_1 = ($0_1 | (0 - $0_1 | 0) | 0) & $10_1 | 0;
               if (!$0_1) {
                break label$10
               }
               $0_1 = HEAP32[(((__wasm_ctz_i32($0_1 | 0) | 0) << 2 | 0) + 69032 | 0) >> 2] | 0;
              }
              if (!$0_1) {
               break label$29
              }
             }
             label$36 : while (1) {
              $2_1 = ((HEAP32[($0_1 + 4 | 0) >> 2] | 0) & -8 | 0) - $3_1 | 0;
              $7_1 = $2_1 >>> 0 < $4_1 >>> 0;
              label$37 : {
               $5_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
               if ($5_1) {
                break label$37
               }
               $5_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
              }
              $4_1 = $7_1 ? $2_1 : $4_1;
              $8_1 = $7_1 ? $0_1 : $8_1;
              $0_1 = $5_1;
              if ($0_1) {
               continue label$36
              }
              break label$36;
             };
            }
            if (!$8_1) {
             break label$10
            }
            if ($4_1 >>> 0 >= ((HEAP32[(0 + 68736 | 0) >> 2] | 0) - $3_1 | 0) >>> 0) {
             break label$10
            }
            $11_1 = HEAP32[($8_1 + 24 | 0) >> 2] | 0;
            label$38 : {
             $0_1 = HEAP32[($8_1 + 12 | 0) >> 2] | 0;
             if (($0_1 | 0) == ($8_1 | 0)) {
              break label$38
             }
             $5_1 = HEAP32[($8_1 + 8 | 0) >> 2] | 0;
             HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
             HEAP32[($0_1 + 8 | 0) >> 2] = $5_1;
             break label$3;
            }
            label$39 : {
             label$40 : {
              $5_1 = HEAP32[($8_1 + 20 | 0) >> 2] | 0;
              if (!$5_1) {
               break label$40
              }
              $7_1 = $8_1 + 20 | 0;
              break label$39;
             }
             $5_1 = HEAP32[($8_1 + 16 | 0) >> 2] | 0;
             if (!$5_1) {
              break label$8
             }
             $7_1 = $8_1 + 16 | 0;
            }
            label$41 : while (1) {
             $2_1 = $7_1;
             $0_1 = $5_1;
             $7_1 = $0_1 + 20 | 0;
             $5_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
             if ($5_1) {
              continue label$41
             }
             $7_1 = $0_1 + 16 | 0;
             $5_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
             if ($5_1) {
              continue label$41
             }
             break label$41;
            };
            HEAP32[$2_1 >> 2] = 0;
            break label$3;
           }
           label$42 : {
            $0_1 = HEAP32[(0 + 68736 | 0) >> 2] | 0;
            if ($0_1 >>> 0 < $3_1 >>> 0) {
             break label$42
            }
            $4_1 = HEAP32[(0 + 68748 | 0) >> 2] | 0;
            label$43 : {
             label$44 : {
              $5_1 = $0_1 - $3_1 | 0;
              if ($5_1 >>> 0 < 16 >>> 0) {
               break label$44
              }
              $7_1 = $4_1 + $3_1 | 0;
              HEAP32[($7_1 + 4 | 0) >> 2] = $5_1 | 1 | 0;
              HEAP32[($4_1 + $0_1 | 0) >> 2] = $5_1;
              HEAP32[($4_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
              break label$43;
             }
             HEAP32[($4_1 + 4 | 0) >> 2] = $0_1 | 3 | 0;
             $0_1 = $4_1 + $0_1 | 0;
             HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 1 | 0;
             $7_1 = 0;
             $5_1 = 0;
            }
            HEAP32[(0 + 68736 | 0) >> 2] = $5_1;
            HEAP32[(0 + 68748 | 0) >> 2] = $7_1;
            $0_1 = $4_1 + 8 | 0;
            break label$1;
           }
           label$45 : {
            $7_1 = HEAP32[(0 + 68740 | 0) >> 2] | 0;
            if ($7_1 >>> 0 <= $3_1 >>> 0) {
             break label$45
            }
            $4_1 = $7_1 - $3_1 | 0;
            HEAP32[(0 + 68740 | 0) >> 2] = $4_1;
            $0_1 = HEAP32[(0 + 68752 | 0) >> 2] | 0;
            $5_1 = $0_1 + $3_1 | 0;
            HEAP32[(0 + 68752 | 0) >> 2] = $5_1;
            HEAP32[($5_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
            HEAP32[($0_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
            $0_1 = $0_1 + 8 | 0;
            break label$1;
           }
           label$46 : {
            label$47 : {
             if (!(HEAP32[(0 + 69200 | 0) >> 2] | 0)) {
              break label$47
             }
             $4_1 = HEAP32[(0 + 69208 | 0) >> 2] | 0;
             break label$46;
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = -1;
            HEAP32[(i64toi32_i32$1 + 69212 | 0) >> 2] = -1;
            HEAP32[(i64toi32_i32$1 + 69216 | 0) >> 2] = i64toi32_i32$0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = 4096;
            HEAP32[(i64toi32_i32$1 + 69204 | 0) >> 2] = 4096;
            HEAP32[(i64toi32_i32$1 + 69208 | 0) >> 2] = i64toi32_i32$0;
            HEAP32[(0 + 69200 | 0) >> 2] = (($1_1 + 12 | 0) & -16 | 0) ^ 1431655768 | 0;
            HEAP32[(0 + 69220 | 0) >> 2] = 0;
            HEAP32[(0 + 69172 | 0) >> 2] = 0;
            $4_1 = 4096;
           }
           $0_1 = 0;
           $6_1 = $3_1 + 47 | 0;
           $2_1 = $4_1 + $6_1 | 0;
           $11_1 = 0 - $4_1 | 0;
           $8_1 = $2_1 & $11_1 | 0;
           if ($8_1 >>> 0 <= $3_1 >>> 0) {
            break label$1
           }
           $0_1 = 0;
           label$48 : {
            $4_1 = HEAP32[(0 + 69168 | 0) >> 2] | 0;
            if (!$4_1) {
             break label$48
            }
            $5_1 = HEAP32[(0 + 69160 | 0) >> 2] | 0;
            $10_1 = $5_1 + $8_1 | 0;
            if ($10_1 >>> 0 <= $5_1 >>> 0) {
             break label$1
            }
            if ($10_1 >>> 0 > $4_1 >>> 0) {
             break label$1
            }
           }
           label$49 : {
            label$50 : {
             if ((HEAPU8[(0 + 69172 | 0) >> 0] | 0) & 4 | 0) {
              break label$50
             }
             label$51 : {
              label$52 : {
               label$53 : {
                label$54 : {
                 label$55 : {
                  $4_1 = HEAP32[(0 + 68752 | 0) >> 2] | 0;
                  if (!$4_1) {
                   break label$55
                  }
                  $0_1 = 69176;
                  label$56 : while (1) {
                   label$57 : {
                    $5_1 = HEAP32[$0_1 >> 2] | 0;
                    if ($4_1 >>> 0 < $5_1 >>> 0) {
                     break label$57
                    }
                    if ($4_1 >>> 0 < ($5_1 + (HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0) >>> 0) {
                     break label$54
                    }
                   }
                   $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
                   if ($0_1) {
                    continue label$56
                   }
                   break label$56;
                  };
                 }
                 $7_1 = $100(0 | 0) | 0;
                 if (($7_1 | 0) == (-1 | 0)) {
                  break label$51
                 }
                 $2_1 = $8_1;
                 label$58 : {
                  $0_1 = HEAP32[(0 + 69204 | 0) >> 2] | 0;
                  $4_1 = $0_1 + -1 | 0;
                  if (!($4_1 & $7_1 | 0)) {
                   break label$58
                  }
                  $2_1 = ($8_1 - $7_1 | 0) + (($4_1 + $7_1 | 0) & (0 - $0_1 | 0) | 0) | 0;
                 }
                 if ($2_1 >>> 0 <= $3_1 >>> 0) {
                  break label$51
                 }
                 label$59 : {
                  $0_1 = HEAP32[(0 + 69168 | 0) >> 2] | 0;
                  if (!$0_1) {
                   break label$59
                  }
                  $4_1 = HEAP32[(0 + 69160 | 0) >> 2] | 0;
                  $5_1 = $4_1 + $2_1 | 0;
                  if ($5_1 >>> 0 <= $4_1 >>> 0) {
                   break label$51
                  }
                  if ($5_1 >>> 0 > $0_1 >>> 0) {
                   break label$51
                  }
                 }
                 $0_1 = $100($2_1 | 0) | 0;
                 if (($0_1 | 0) != ($7_1 | 0)) {
                  break label$53
                 }
                 break label$49;
                }
                $2_1 = ($2_1 - $7_1 | 0) & $11_1 | 0;
                $7_1 = $100($2_1 | 0) | 0;
                if (($7_1 | 0) == ((HEAP32[$0_1 >> 2] | 0) + (HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0 | 0)) {
                 break label$52
                }
                $0_1 = $7_1;
               }
               if (($0_1 | 0) == (-1 | 0)) {
                break label$51
               }
               label$60 : {
                if ($2_1 >>> 0 < ($3_1 + 48 | 0) >>> 0) {
                 break label$60
                }
                $7_1 = $0_1;
                break label$49;
               }
               $4_1 = HEAP32[(0 + 69208 | 0) >> 2] | 0;
               $4_1 = (($6_1 - $2_1 | 0) + $4_1 | 0) & (0 - $4_1 | 0) | 0;
               if (($100($4_1 | 0) | 0 | 0) == (-1 | 0)) {
                break label$51
               }
               $2_1 = $4_1 + $2_1 | 0;
               $7_1 = $0_1;
               break label$49;
              }
              if (($7_1 | 0) != (-1 | 0)) {
               break label$49
              }
             }
             HEAP32[(0 + 69172 | 0) >> 2] = HEAP32[(0 + 69172 | 0) >> 2] | 0 | 4 | 0;
            }
            $7_1 = $100($8_1 | 0) | 0;
            $0_1 = $100(0 | 0) | 0;
            if (($7_1 | 0) == (-1 | 0)) {
             break label$5
            }
            if (($0_1 | 0) == (-1 | 0)) {
             break label$5
            }
            if ($7_1 >>> 0 >= $0_1 >>> 0) {
             break label$5
            }
            $2_1 = $0_1 - $7_1 | 0;
            if ($2_1 >>> 0 <= ($3_1 + 40 | 0) >>> 0) {
             break label$5
            }
           }
           $0_1 = (HEAP32[(0 + 69160 | 0) >> 2] | 0) + $2_1 | 0;
           HEAP32[(0 + 69160 | 0) >> 2] = $0_1;
           label$61 : {
            if ($0_1 >>> 0 <= (HEAP32[(0 + 69164 | 0) >> 2] | 0) >>> 0) {
             break label$61
            }
            HEAP32[(0 + 69164 | 0) >> 2] = $0_1;
           }
           label$62 : {
            label$63 : {
             $4_1 = HEAP32[(0 + 68752 | 0) >> 2] | 0;
             if (!$4_1) {
              break label$63
             }
             $0_1 = 69176;
             label$64 : while (1) {
              $5_1 = HEAP32[$0_1 >> 2] | 0;
              $8_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
              if (($7_1 | 0) == ($5_1 + $8_1 | 0 | 0)) {
               break label$62
              }
              $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
              if ($0_1) {
               continue label$64
              }
              break label$7;
             };
            }
            label$65 : {
             label$66 : {
              $0_1 = HEAP32[(0 + 68744 | 0) >> 2] | 0;
              if (!$0_1) {
               break label$66
              }
              if ($7_1 >>> 0 >= $0_1 >>> 0) {
               break label$65
              }
             }
             HEAP32[(0 + 68744 | 0) >> 2] = $7_1;
            }
            $0_1 = 0;
            HEAP32[(0 + 69180 | 0) >> 2] = $2_1;
            HEAP32[(0 + 69176 | 0) >> 2] = $7_1;
            HEAP32[(0 + 68760 | 0) >> 2] = -1;
            HEAP32[(0 + 68764 | 0) >> 2] = HEAP32[(0 + 69200 | 0) >> 2] | 0;
            HEAP32[(0 + 69188 | 0) >> 2] = 0;
            label$67 : while (1) {
             $4_1 = $0_1 << 3 | 0;
             $5_1 = $4_1 + 68768 | 0;
             HEAP32[($4_1 + 68776 | 0) >> 2] = $5_1;
             HEAP32[($4_1 + 68780 | 0) >> 2] = $5_1;
             $0_1 = $0_1 + 1 | 0;
             if (($0_1 | 0) != (32 | 0)) {
              continue label$67
             }
             break label$67;
            };
            $0_1 = $2_1 + -40 | 0;
            $4_1 = (-8 - $7_1 | 0) & 7 | 0;
            $5_1 = $0_1 - $4_1 | 0;
            HEAP32[(0 + 68740 | 0) >> 2] = $5_1;
            $4_1 = $7_1 + $4_1 | 0;
            HEAP32[(0 + 68752 | 0) >> 2] = $4_1;
            HEAP32[($4_1 + 4 | 0) >> 2] = $5_1 | 1 | 0;
            HEAP32[(($7_1 + $0_1 | 0) + 4 | 0) >> 2] = 40;
            HEAP32[(0 + 68756 | 0) >> 2] = HEAP32[(0 + 69216 | 0) >> 2] | 0;
            break label$6;
           }
           if ($4_1 >>> 0 >= $7_1 >>> 0) {
            break label$7
           }
           if ($4_1 >>> 0 < $5_1 >>> 0) {
            break label$7
           }
           if ((HEAP32[($0_1 + 12 | 0) >> 2] | 0) & 8 | 0) {
            break label$7
           }
           HEAP32[($0_1 + 4 | 0) >> 2] = $8_1 + $2_1 | 0;
           $0_1 = (-8 - $4_1 | 0) & 7 | 0;
           $5_1 = $4_1 + $0_1 | 0;
           HEAP32[(0 + 68752 | 0) >> 2] = $5_1;
           $7_1 = (HEAP32[(0 + 68740 | 0) >> 2] | 0) + $2_1 | 0;
           $0_1 = $7_1 - $0_1 | 0;
           HEAP32[(0 + 68740 | 0) >> 2] = $0_1;
           HEAP32[($5_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
           HEAP32[(($4_1 + $7_1 | 0) + 4 | 0) >> 2] = 40;
           HEAP32[(0 + 68756 | 0) >> 2] = HEAP32[(0 + 69216 | 0) >> 2] | 0;
           break label$6;
          }
          $0_1 = 0;
          break label$2;
         }
         $0_1 = 0;
         break label$3;
        }
        label$68 : {
         if ($7_1 >>> 0 >= (HEAP32[(0 + 68744 | 0) >> 2] | 0) >>> 0) {
          break label$68
         }
         HEAP32[(0 + 68744 | 0) >> 2] = $7_1;
        }
        $5_1 = $7_1 + $2_1 | 0;
        $0_1 = 69176;
        label$69 : {
         label$70 : {
          label$71 : while (1) {
           $8_1 = HEAP32[$0_1 >> 2] | 0;
           if (($8_1 | 0) == ($5_1 | 0)) {
            break label$70
           }
           $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
           if ($0_1) {
            continue label$71
           }
           break label$69;
          };
         }
         if (!((HEAPU8[($0_1 + 12 | 0) >> 0] | 0) & 8 | 0)) {
          break label$4
         }
        }
        $0_1 = 69176;
        label$72 : {
         label$73 : while (1) {
          label$74 : {
           $5_1 = HEAP32[$0_1 >> 2] | 0;
           if ($4_1 >>> 0 < $5_1 >>> 0) {
            break label$74
           }
           $5_1 = $5_1 + (HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0;
           if ($4_1 >>> 0 < $5_1 >>> 0) {
            break label$72
           }
          }
          $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
          continue label$73;
         };
        }
        $0_1 = $2_1 + -40 | 0;
        $8_1 = (-8 - $7_1 | 0) & 7 | 0;
        $11_1 = $0_1 - $8_1 | 0;
        HEAP32[(0 + 68740 | 0) >> 2] = $11_1;
        $8_1 = $7_1 + $8_1 | 0;
        HEAP32[(0 + 68752 | 0) >> 2] = $8_1;
        HEAP32[($8_1 + 4 | 0) >> 2] = $11_1 | 1 | 0;
        HEAP32[(($7_1 + $0_1 | 0) + 4 | 0) >> 2] = 40;
        HEAP32[(0 + 68756 | 0) >> 2] = HEAP32[(0 + 69216 | 0) >> 2] | 0;
        $0_1 = ($5_1 + ((39 - $5_1 | 0) & 7 | 0) | 0) + -47 | 0;
        $8_1 = $0_1 >>> 0 < ($4_1 + 16 | 0) >>> 0 ? $4_1 : $0_1;
        HEAP32[($8_1 + 4 | 0) >> 2] = 27;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 69184 | 0) >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 69188 | 0) >> 2] | 0;
        $774 = i64toi32_i32$0;
        i64toi32_i32$0 = $8_1 + 16 | 0;
        HEAP32[i64toi32_i32$0 >> 2] = $774;
        HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
        i64toi32_i32$2 = 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 69176 | 0) >> 2] | 0;
        i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 69180 | 0) >> 2] | 0;
        $776 = i64toi32_i32$1;
        i64toi32_i32$1 = $8_1;
        HEAP32[($8_1 + 8 | 0) >> 2] = $776;
        HEAP32[($8_1 + 12 | 0) >> 2] = i64toi32_i32$0;
        HEAP32[(0 + 69184 | 0) >> 2] = $8_1 + 8 | 0;
        HEAP32[(0 + 69180 | 0) >> 2] = $2_1;
        HEAP32[(0 + 69176 | 0) >> 2] = $7_1;
        HEAP32[(0 + 69188 | 0) >> 2] = 0;
        $0_1 = $8_1 + 24 | 0;
        label$75 : while (1) {
         HEAP32[($0_1 + 4 | 0) >> 2] = 7;
         $7_1 = $0_1 + 8 | 0;
         $0_1 = $0_1 + 4 | 0;
         if ($7_1 >>> 0 < $5_1 >>> 0) {
          continue label$75
         }
         break label$75;
        };
        if (($8_1 | 0) == ($4_1 | 0)) {
         break label$6
        }
        HEAP32[($8_1 + 4 | 0) >> 2] = (HEAP32[($8_1 + 4 | 0) >> 2] | 0) & -2 | 0;
        $7_1 = $8_1 - $4_1 | 0;
        HEAP32[($4_1 + 4 | 0) >> 2] = $7_1 | 1 | 0;
        HEAP32[$8_1 >> 2] = $7_1;
        label$76 : {
         label$77 : {
          if ($7_1 >>> 0 > 255 >>> 0) {
           break label$77
          }
          $0_1 = ($7_1 & -8 | 0) + 68768 | 0;
          label$78 : {
           label$79 : {
            $5_1 = HEAP32[(0 + 68728 | 0) >> 2] | 0;
            $7_1 = 1 << ($7_1 >>> 3 | 0) | 0;
            if ($5_1 & $7_1 | 0) {
             break label$79
            }
            HEAP32[(0 + 68728 | 0) >> 2] = $5_1 | $7_1 | 0;
            $5_1 = $0_1;
            break label$78;
           }
           $5_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
          }
          HEAP32[($0_1 + 8 | 0) >> 2] = $4_1;
          HEAP32[($5_1 + 12 | 0) >> 2] = $4_1;
          $7_1 = 12;
          $8_1 = 8;
          break label$76;
         }
         $0_1 = 31;
         label$80 : {
          if ($7_1 >>> 0 > 16777215 >>> 0) {
           break label$80
          }
          $0_1 = Math_clz32($7_1 >>> 8 | 0);
          $0_1 = ((($7_1 >>> (38 - $0_1 | 0) | 0) & 1 | 0) - ($0_1 << 1 | 0) | 0) + 62 | 0;
         }
         HEAP32[($4_1 + 28 | 0) >> 2] = $0_1;
         i64toi32_i32$1 = $4_1;
         i64toi32_i32$0 = 0;
         HEAP32[($4_1 + 16 | 0) >> 2] = 0;
         HEAP32[($4_1 + 20 | 0) >> 2] = i64toi32_i32$0;
         $5_1 = ($0_1 << 2 | 0) + 69032 | 0;
         label$81 : {
          label$82 : {
           label$83 : {
            $8_1 = HEAP32[(0 + 68732 | 0) >> 2] | 0;
            $2_1 = 1 << $0_1 | 0;
            if ($8_1 & $2_1 | 0) {
             break label$83
            }
            HEAP32[(0 + 68732 | 0) >> 2] = $8_1 | $2_1 | 0;
            HEAP32[$5_1 >> 2] = $4_1;
            HEAP32[($4_1 + 24 | 0) >> 2] = $5_1;
            break label$82;
           }
           $0_1 = $7_1 << (($0_1 | 0) == (31 | 0) ? 0 : 25 - ($0_1 >>> 1 | 0) | 0) | 0;
           $8_1 = HEAP32[$5_1 >> 2] | 0;
           label$84 : while (1) {
            $5_1 = $8_1;
            if (((HEAP32[($5_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($7_1 | 0)) {
             break label$81
            }
            $8_1 = $0_1 >>> 29 | 0;
            $0_1 = $0_1 << 1 | 0;
            $2_1 = $5_1 + ($8_1 & 4 | 0) | 0;
            $8_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
            if ($8_1) {
             continue label$84
            }
            break label$84;
           };
           HEAP32[($2_1 + 16 | 0) >> 2] = $4_1;
           HEAP32[($4_1 + 24 | 0) >> 2] = $5_1;
          }
          $7_1 = 8;
          $8_1 = 12;
          $5_1 = $4_1;
          $0_1 = $4_1;
          break label$76;
         }
         $0_1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
         HEAP32[($0_1 + 12 | 0) >> 2] = $4_1;
         HEAP32[($5_1 + 8 | 0) >> 2] = $4_1;
         HEAP32[($4_1 + 8 | 0) >> 2] = $0_1;
         $0_1 = 0;
         $7_1 = 24;
         $8_1 = 12;
        }
        HEAP32[($4_1 + $8_1 | 0) >> 2] = $5_1;
        HEAP32[($4_1 + $7_1 | 0) >> 2] = $0_1;
       }
       $0_1 = HEAP32[(0 + 68740 | 0) >> 2] | 0;
       if ($0_1 >>> 0 <= $3_1 >>> 0) {
        break label$5
       }
       $4_1 = $0_1 - $3_1 | 0;
       HEAP32[(0 + 68740 | 0) >> 2] = $4_1;
       $0_1 = HEAP32[(0 + 68752 | 0) >> 2] | 0;
       $5_1 = $0_1 + $3_1 | 0;
       HEAP32[(0 + 68752 | 0) >> 2] = $5_1;
       HEAP32[($5_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
       HEAP32[($0_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
       $0_1 = $0_1 + 8 | 0;
       break label$1;
      }
      HEAP32[($42() | 0) >> 2] = 48;
      $0_1 = 0;
      break label$1;
     }
     HEAP32[$0_1 >> 2] = $7_1;
     HEAP32[($0_1 + 4 | 0) >> 2] = (HEAP32[($0_1 + 4 | 0) >> 2] | 0) + $2_1 | 0;
     $0_1 = $102($7_1 | 0, $8_1 | 0, $3_1 | 0) | 0;
     break label$1;
    }
    label$85 : {
     if (!$11_1) {
      break label$85
     }
     label$86 : {
      label$87 : {
       $7_1 = HEAP32[($8_1 + 28 | 0) >> 2] | 0;
       $5_1 = ($7_1 << 2 | 0) + 69032 | 0;
       if (($8_1 | 0) != (HEAP32[$5_1 >> 2] | 0 | 0)) {
        break label$87
       }
       HEAP32[$5_1 >> 2] = $0_1;
       if ($0_1) {
        break label$86
       }
       $10_1 = $10_1 & (__wasm_rotl_i32(-2 | 0, $7_1 | 0) | 0) | 0;
       HEAP32[(0 + 68732 | 0) >> 2] = $10_1;
       break label$85;
      }
      label$88 : {
       label$89 : {
        if ((HEAP32[($11_1 + 16 | 0) >> 2] | 0 | 0) != ($8_1 | 0)) {
         break label$89
        }
        HEAP32[($11_1 + 16 | 0) >> 2] = $0_1;
        break label$88;
       }
       HEAP32[($11_1 + 20 | 0) >> 2] = $0_1;
      }
      if (!$0_1) {
       break label$85
      }
     }
     HEAP32[($0_1 + 24 | 0) >> 2] = $11_1;
     label$90 : {
      $5_1 = HEAP32[($8_1 + 16 | 0) >> 2] | 0;
      if (!$5_1) {
       break label$90
      }
      HEAP32[($0_1 + 16 | 0) >> 2] = $5_1;
      HEAP32[($5_1 + 24 | 0) >> 2] = $0_1;
     }
     $5_1 = HEAP32[($8_1 + 20 | 0) >> 2] | 0;
     if (!$5_1) {
      break label$85
     }
     HEAP32[($0_1 + 20 | 0) >> 2] = $5_1;
     HEAP32[($5_1 + 24 | 0) >> 2] = $0_1;
    }
    label$91 : {
     label$92 : {
      if ($4_1 >>> 0 > 15 >>> 0) {
       break label$92
      }
      $0_1 = $4_1 + $3_1 | 0;
      HEAP32[($8_1 + 4 | 0) >> 2] = $0_1 | 3 | 0;
      $0_1 = $8_1 + $0_1 | 0;
      HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 1 | 0;
      break label$91;
     }
     HEAP32[($8_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
     $7_1 = $8_1 + $3_1 | 0;
     HEAP32[($7_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
     HEAP32[($7_1 + $4_1 | 0) >> 2] = $4_1;
     label$93 : {
      if ($4_1 >>> 0 > 255 >>> 0) {
       break label$93
      }
      $0_1 = ($4_1 & -8 | 0) + 68768 | 0;
      label$94 : {
       label$95 : {
        $3_1 = HEAP32[(0 + 68728 | 0) >> 2] | 0;
        $4_1 = 1 << ($4_1 >>> 3 | 0) | 0;
        if ($3_1 & $4_1 | 0) {
         break label$95
        }
        HEAP32[(0 + 68728 | 0) >> 2] = $3_1 | $4_1 | 0;
        $4_1 = $0_1;
        break label$94;
       }
       $4_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
      }
      HEAP32[($0_1 + 8 | 0) >> 2] = $7_1;
      HEAP32[($4_1 + 12 | 0) >> 2] = $7_1;
      HEAP32[($7_1 + 12 | 0) >> 2] = $0_1;
      HEAP32[($7_1 + 8 | 0) >> 2] = $4_1;
      break label$91;
     }
     $0_1 = 31;
     label$96 : {
      if ($4_1 >>> 0 > 16777215 >>> 0) {
       break label$96
      }
      $0_1 = Math_clz32($4_1 >>> 8 | 0);
      $0_1 = ((($4_1 >>> (38 - $0_1 | 0) | 0) & 1 | 0) - ($0_1 << 1 | 0) | 0) + 62 | 0;
     }
     HEAP32[($7_1 + 28 | 0) >> 2] = $0_1;
     i64toi32_i32$1 = $7_1;
     i64toi32_i32$0 = 0;
     HEAP32[($7_1 + 16 | 0) >> 2] = 0;
     HEAP32[($7_1 + 20 | 0) >> 2] = i64toi32_i32$0;
     $3_1 = ($0_1 << 2 | 0) + 69032 | 0;
     label$97 : {
      label$98 : {
       label$99 : {
        $5_1 = 1 << $0_1 | 0;
        if ($10_1 & $5_1 | 0) {
         break label$99
        }
        HEAP32[(0 + 68732 | 0) >> 2] = $10_1 | $5_1 | 0;
        HEAP32[$3_1 >> 2] = $7_1;
        HEAP32[($7_1 + 24 | 0) >> 2] = $3_1;
        break label$98;
       }
       $0_1 = $4_1 << (($0_1 | 0) == (31 | 0) ? 0 : 25 - ($0_1 >>> 1 | 0) | 0) | 0;
       $5_1 = HEAP32[$3_1 >> 2] | 0;
       label$100 : while (1) {
        $3_1 = $5_1;
        if (((HEAP32[($5_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($4_1 | 0)) {
         break label$97
        }
        $5_1 = $0_1 >>> 29 | 0;
        $0_1 = $0_1 << 1 | 0;
        $2_1 = $3_1 + ($5_1 & 4 | 0) | 0;
        $5_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
        if ($5_1) {
         continue label$100
        }
        break label$100;
       };
       HEAP32[($2_1 + 16 | 0) >> 2] = $7_1;
       HEAP32[($7_1 + 24 | 0) >> 2] = $3_1;
      }
      HEAP32[($7_1 + 12 | 0) >> 2] = $7_1;
      HEAP32[($7_1 + 8 | 0) >> 2] = $7_1;
      break label$91;
     }
     $0_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
     HEAP32[($0_1 + 12 | 0) >> 2] = $7_1;
     HEAP32[($3_1 + 8 | 0) >> 2] = $7_1;
     HEAP32[($7_1 + 24 | 0) >> 2] = 0;
     HEAP32[($7_1 + 12 | 0) >> 2] = $3_1;
     HEAP32[($7_1 + 8 | 0) >> 2] = $0_1;
    }
    $0_1 = $8_1 + 8 | 0;
    break label$1;
   }
   label$101 : {
    if (!$10_1) {
     break label$101
    }
    label$102 : {
     label$103 : {
      $8_1 = HEAP32[($7_1 + 28 | 0) >> 2] | 0;
      $5_1 = ($8_1 << 2 | 0) + 69032 | 0;
      if (($7_1 | 0) != (HEAP32[$5_1 >> 2] | 0 | 0)) {
       break label$103
      }
      HEAP32[$5_1 >> 2] = $0_1;
      if ($0_1) {
       break label$102
      }
      HEAP32[(0 + 68732 | 0) >> 2] = $9_1 & (__wasm_rotl_i32(-2 | 0, $8_1 | 0) | 0) | 0;
      break label$101;
     }
     label$104 : {
      label$105 : {
       if ((HEAP32[($10_1 + 16 | 0) >> 2] | 0 | 0) != ($7_1 | 0)) {
        break label$105
       }
       HEAP32[($10_1 + 16 | 0) >> 2] = $0_1;
       break label$104;
      }
      HEAP32[($10_1 + 20 | 0) >> 2] = $0_1;
     }
     if (!$0_1) {
      break label$101
     }
    }
    HEAP32[($0_1 + 24 | 0) >> 2] = $10_1;
    label$106 : {
     $5_1 = HEAP32[($7_1 + 16 | 0) >> 2] | 0;
     if (!$5_1) {
      break label$106
     }
     HEAP32[($0_1 + 16 | 0) >> 2] = $5_1;
     HEAP32[($5_1 + 24 | 0) >> 2] = $0_1;
    }
    $5_1 = HEAP32[($7_1 + 20 | 0) >> 2] | 0;
    if (!$5_1) {
     break label$101
    }
    HEAP32[($0_1 + 20 | 0) >> 2] = $5_1;
    HEAP32[($5_1 + 24 | 0) >> 2] = $0_1;
   }
   label$107 : {
    label$108 : {
     if ($4_1 >>> 0 > 15 >>> 0) {
      break label$108
     }
     $0_1 = $4_1 + $3_1 | 0;
     HEAP32[($7_1 + 4 | 0) >> 2] = $0_1 | 3 | 0;
     $0_1 = $7_1 + $0_1 | 0;
     HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 1 | 0;
     break label$107;
    }
    HEAP32[($7_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
    $3_1 = $7_1 + $3_1 | 0;
    HEAP32[($3_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
    HEAP32[($3_1 + $4_1 | 0) >> 2] = $4_1;
    label$109 : {
     if (!$6_1) {
      break label$109
     }
     $5_1 = ($6_1 & -8 | 0) + 68768 | 0;
     $0_1 = HEAP32[(0 + 68748 | 0) >> 2] | 0;
     label$110 : {
      label$111 : {
       $8_1 = 1 << ($6_1 >>> 3 | 0) | 0;
       if ($8_1 & $2_1 | 0) {
        break label$111
       }
       HEAP32[(0 + 68728 | 0) >> 2] = $8_1 | $2_1 | 0;
       $8_1 = $5_1;
       break label$110;
      }
      $8_1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
     }
     HEAP32[($5_1 + 8 | 0) >> 2] = $0_1;
     HEAP32[($8_1 + 12 | 0) >> 2] = $0_1;
     HEAP32[($0_1 + 12 | 0) >> 2] = $5_1;
     HEAP32[($0_1 + 8 | 0) >> 2] = $8_1;
    }
    HEAP32[(0 + 68748 | 0) >> 2] = $3_1;
    HEAP32[(0 + 68736 | 0) >> 2] = $4_1;
   }
   $0_1 = $7_1 + 8 | 0;
  }
  global$0 = $1_1 + 16 | 0;
  return $0_1 | 0;
 }
 
 function $102($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $5_1 = 0, $7_1 = 0, $8_1 = 0, $3_1 = 0, $6_1 = 0, $9_1 = 0;
  $3_1 = $0_1 + ((-8 - $0_1 | 0) & 7 | 0) | 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = $2_1 | 3 | 0;
  $4_1 = $1_1 + ((-8 - $1_1 | 0) & 7 | 0) | 0;
  $5_1 = $3_1 + $2_1 | 0;
  $0_1 = $4_1 - $5_1 | 0;
  label$1 : {
   label$2 : {
    if (($4_1 | 0) != (HEAP32[(0 + 68752 | 0) >> 2] | 0 | 0)) {
     break label$2
    }
    HEAP32[(0 + 68752 | 0) >> 2] = $5_1;
    $2_1 = (HEAP32[(0 + 68740 | 0) >> 2] | 0) + $0_1 | 0;
    HEAP32[(0 + 68740 | 0) >> 2] = $2_1;
    HEAP32[($5_1 + 4 | 0) >> 2] = $2_1 | 1 | 0;
    break label$1;
   }
   label$3 : {
    if (($4_1 | 0) != (HEAP32[(0 + 68748 | 0) >> 2] | 0 | 0)) {
     break label$3
    }
    HEAP32[(0 + 68748 | 0) >> 2] = $5_1;
    $2_1 = (HEAP32[(0 + 68736 | 0) >> 2] | 0) + $0_1 | 0;
    HEAP32[(0 + 68736 | 0) >> 2] = $2_1;
    HEAP32[($5_1 + 4 | 0) >> 2] = $2_1 | 1 | 0;
    HEAP32[($5_1 + $2_1 | 0) >> 2] = $2_1;
    break label$1;
   }
   label$4 : {
    $1_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
    if (($1_1 & 3 | 0 | 0) != (1 | 0)) {
     break label$4
    }
    $6_1 = $1_1 & -8 | 0;
    $2_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
    label$5 : {
     label$6 : {
      if ($1_1 >>> 0 > 255 >>> 0) {
       break label$6
      }
      label$7 : {
       $7_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
       if (($2_1 | 0) != ($7_1 | 0)) {
        break label$7
       }
       HEAP32[(0 + 68728 | 0) >> 2] = (HEAP32[(0 + 68728 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $1_1 >>> 3 | 0 | 0) | 0) | 0;
       break label$5;
      }
      HEAP32[($7_1 + 12 | 0) >> 2] = $2_1;
      HEAP32[($2_1 + 8 | 0) >> 2] = $7_1;
      break label$5;
     }
     $8_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
     label$8 : {
      label$9 : {
       if (($2_1 | 0) == ($4_1 | 0)) {
        break label$9
       }
       $1_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
       HEAP32[($1_1 + 12 | 0) >> 2] = $2_1;
       HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
       break label$8;
      }
      label$10 : {
       label$11 : {
        label$12 : {
         $1_1 = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
         if (!$1_1) {
          break label$12
         }
         $7_1 = $4_1 + 20 | 0;
         break label$11;
        }
        $1_1 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
        if (!$1_1) {
         break label$10
        }
        $7_1 = $4_1 + 16 | 0;
       }
       label$13 : while (1) {
        $9_1 = $7_1;
        $2_1 = $1_1;
        $7_1 = $2_1 + 20 | 0;
        $1_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
        if ($1_1) {
         continue label$13
        }
        $7_1 = $2_1 + 16 | 0;
        $1_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
        if ($1_1) {
         continue label$13
        }
        break label$13;
       };
       HEAP32[$9_1 >> 2] = 0;
       break label$8;
      }
      $2_1 = 0;
     }
     if (!$8_1) {
      break label$5
     }
     label$14 : {
      label$15 : {
       $7_1 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
       $1_1 = ($7_1 << 2 | 0) + 69032 | 0;
       if (($4_1 | 0) != (HEAP32[$1_1 >> 2] | 0 | 0)) {
        break label$15
       }
       HEAP32[$1_1 >> 2] = $2_1;
       if ($2_1) {
        break label$14
       }
       HEAP32[(0 + 68732 | 0) >> 2] = (HEAP32[(0 + 68732 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $7_1 | 0) | 0) | 0;
       break label$5;
      }
      label$16 : {
       label$17 : {
        if ((HEAP32[($8_1 + 16 | 0) >> 2] | 0 | 0) != ($4_1 | 0)) {
         break label$17
        }
        HEAP32[($8_1 + 16 | 0) >> 2] = $2_1;
        break label$16;
       }
       HEAP32[($8_1 + 20 | 0) >> 2] = $2_1;
      }
      if (!$2_1) {
       break label$5
      }
     }
     HEAP32[($2_1 + 24 | 0) >> 2] = $8_1;
     label$18 : {
      $1_1 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
      if (!$1_1) {
       break label$18
      }
      HEAP32[($2_1 + 16 | 0) >> 2] = $1_1;
      HEAP32[($1_1 + 24 | 0) >> 2] = $2_1;
     }
     $1_1 = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
     if (!$1_1) {
      break label$5
     }
     HEAP32[($2_1 + 20 | 0) >> 2] = $1_1;
     HEAP32[($1_1 + 24 | 0) >> 2] = $2_1;
    }
    $0_1 = $6_1 + $0_1 | 0;
    $4_1 = $4_1 + $6_1 | 0;
    $1_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
   }
   HEAP32[($4_1 + 4 | 0) >> 2] = $1_1 & -2 | 0;
   HEAP32[($5_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
   HEAP32[($5_1 + $0_1 | 0) >> 2] = $0_1;
   label$19 : {
    if ($0_1 >>> 0 > 255 >>> 0) {
     break label$19
    }
    $2_1 = ($0_1 & -8 | 0) + 68768 | 0;
    label$20 : {
     label$21 : {
      $1_1 = HEAP32[(0 + 68728 | 0) >> 2] | 0;
      $0_1 = 1 << ($0_1 >>> 3 | 0) | 0;
      if ($1_1 & $0_1 | 0) {
       break label$21
      }
      HEAP32[(0 + 68728 | 0) >> 2] = $1_1 | $0_1 | 0;
      $0_1 = $2_1;
      break label$20;
     }
     $0_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
    }
    HEAP32[($2_1 + 8 | 0) >> 2] = $5_1;
    HEAP32[($0_1 + 12 | 0) >> 2] = $5_1;
    HEAP32[($5_1 + 12 | 0) >> 2] = $2_1;
    HEAP32[($5_1 + 8 | 0) >> 2] = $0_1;
    break label$1;
   }
   $2_1 = 31;
   label$22 : {
    if ($0_1 >>> 0 > 16777215 >>> 0) {
     break label$22
    }
    $2_1 = Math_clz32($0_1 >>> 8 | 0);
    $2_1 = ((($0_1 >>> (38 - $2_1 | 0) | 0) & 1 | 0) - ($2_1 << 1 | 0) | 0) + 62 | 0;
   }
   HEAP32[($5_1 + 28 | 0) >> 2] = $2_1;
   HEAP32[($5_1 + 16 | 0) >> 2] = 0;
   HEAP32[($5_1 + 20 | 0) >> 2] = 0;
   $1_1 = ($2_1 << 2 | 0) + 69032 | 0;
   label$23 : {
    label$24 : {
     label$25 : {
      $7_1 = HEAP32[(0 + 68732 | 0) >> 2] | 0;
      $4_1 = 1 << $2_1 | 0;
      if ($7_1 & $4_1 | 0) {
       break label$25
      }
      HEAP32[(0 + 68732 | 0) >> 2] = $7_1 | $4_1 | 0;
      HEAP32[$1_1 >> 2] = $5_1;
      HEAP32[($5_1 + 24 | 0) >> 2] = $1_1;
      break label$24;
     }
     $2_1 = $0_1 << (($2_1 | 0) == (31 | 0) ? 0 : 25 - ($2_1 >>> 1 | 0) | 0) | 0;
     $7_1 = HEAP32[$1_1 >> 2] | 0;
     label$26 : while (1) {
      $1_1 = $7_1;
      if (((HEAP32[($1_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($0_1 | 0)) {
       break label$23
      }
      $7_1 = $2_1 >>> 29 | 0;
      $2_1 = $2_1 << 1 | 0;
      $4_1 = $1_1 + ($7_1 & 4 | 0) | 0;
      $7_1 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
      if ($7_1) {
       continue label$26
      }
      break label$26;
     };
     HEAP32[($4_1 + 16 | 0) >> 2] = $5_1;
     HEAP32[($5_1 + 24 | 0) >> 2] = $1_1;
    }
    HEAP32[($5_1 + 12 | 0) >> 2] = $5_1;
    HEAP32[($5_1 + 8 | 0) >> 2] = $5_1;
    break label$1;
   }
   $2_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
   HEAP32[($2_1 + 12 | 0) >> 2] = $5_1;
   HEAP32[($1_1 + 8 | 0) >> 2] = $5_1;
   HEAP32[($5_1 + 24 | 0) >> 2] = 0;
   HEAP32[($5_1 + 12 | 0) >> 2] = $1_1;
   HEAP32[($5_1 + 8 | 0) >> 2] = $2_1;
  }
  return $3_1 + 8 | 0 | 0;
 }
 
 function $103($0_1) {
  $0_1 = $0_1 | 0;
  var $2_1 = 0, $4_1 = 0, $1_1 = 0, $5_1 = 0, $3_1 = 0, $6_1 = 0, $7_1 = 0;
  label$1 : {
   if (!$0_1) {
    break label$1
   }
   $1_1 = $0_1 + -8 | 0;
   $2_1 = HEAP32[($0_1 + -4 | 0) >> 2] | 0;
   $0_1 = $2_1 & -8 | 0;
   $3_1 = $1_1 + $0_1 | 0;
   label$2 : {
    if ($2_1 & 1 | 0) {
     break label$2
    }
    if (!($2_1 & 2 | 0)) {
     break label$1
    }
    $4_1 = HEAP32[$1_1 >> 2] | 0;
    $1_1 = $1_1 - $4_1 | 0;
    if ($1_1 >>> 0 < (HEAP32[(0 + 68744 | 0) >> 2] | 0) >>> 0) {
     break label$1
    }
    $0_1 = $4_1 + $0_1 | 0;
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        if (($1_1 | 0) == (HEAP32[(0 + 68748 | 0) >> 2] | 0 | 0)) {
         break label$6
        }
        $2_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
        label$7 : {
         if ($4_1 >>> 0 > 255 >>> 0) {
          break label$7
         }
         $5_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
         if (($2_1 | 0) != ($5_1 | 0)) {
          break label$5
         }
         HEAP32[(0 + 68728 | 0) >> 2] = (HEAP32[(0 + 68728 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $4_1 >>> 3 | 0 | 0) | 0) | 0;
         break label$2;
        }
        $6_1 = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
        label$8 : {
         if (($2_1 | 0) == ($1_1 | 0)) {
          break label$8
         }
         $4_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
         HEAP32[($4_1 + 12 | 0) >> 2] = $2_1;
         HEAP32[($2_1 + 8 | 0) >> 2] = $4_1;
         break label$3;
        }
        label$9 : {
         label$10 : {
          $4_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
          if (!$4_1) {
           break label$10
          }
          $5_1 = $1_1 + 20 | 0;
          break label$9;
         }
         $4_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
         if (!$4_1) {
          break label$4
         }
         $5_1 = $1_1 + 16 | 0;
        }
        label$11 : while (1) {
         $7_1 = $5_1;
         $2_1 = $4_1;
         $5_1 = $2_1 + 20 | 0;
         $4_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
         if ($4_1) {
          continue label$11
         }
         $5_1 = $2_1 + 16 | 0;
         $4_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
         if ($4_1) {
          continue label$11
         }
         break label$11;
        };
        HEAP32[$7_1 >> 2] = 0;
        break label$3;
       }
       $2_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
       if (($2_1 & 3 | 0 | 0) != (3 | 0)) {
        break label$2
       }
       HEAP32[(0 + 68736 | 0) >> 2] = $0_1;
       HEAP32[($3_1 + 4 | 0) >> 2] = $2_1 & -2 | 0;
       HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
       HEAP32[$3_1 >> 2] = $0_1;
       return;
      }
      HEAP32[($5_1 + 12 | 0) >> 2] = $2_1;
      HEAP32[($2_1 + 8 | 0) >> 2] = $5_1;
      break label$2;
     }
     $2_1 = 0;
    }
    if (!$6_1) {
     break label$2
    }
    label$12 : {
     label$13 : {
      $5_1 = HEAP32[($1_1 + 28 | 0) >> 2] | 0;
      $4_1 = ($5_1 << 2 | 0) + 69032 | 0;
      if (($1_1 | 0) != (HEAP32[$4_1 >> 2] | 0 | 0)) {
       break label$13
      }
      HEAP32[$4_1 >> 2] = $2_1;
      if ($2_1) {
       break label$12
      }
      HEAP32[(0 + 68732 | 0) >> 2] = (HEAP32[(0 + 68732 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $5_1 | 0) | 0) | 0;
      break label$2;
     }
     label$14 : {
      label$15 : {
       if ((HEAP32[($6_1 + 16 | 0) >> 2] | 0 | 0) != ($1_1 | 0)) {
        break label$15
       }
       HEAP32[($6_1 + 16 | 0) >> 2] = $2_1;
       break label$14;
      }
      HEAP32[($6_1 + 20 | 0) >> 2] = $2_1;
     }
     if (!$2_1) {
      break label$2
     }
    }
    HEAP32[($2_1 + 24 | 0) >> 2] = $6_1;
    label$16 : {
     $4_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
     if (!$4_1) {
      break label$16
     }
     HEAP32[($2_1 + 16 | 0) >> 2] = $4_1;
     HEAP32[($4_1 + 24 | 0) >> 2] = $2_1;
    }
    $4_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
    if (!$4_1) {
     break label$2
    }
    HEAP32[($2_1 + 20 | 0) >> 2] = $4_1;
    HEAP32[($4_1 + 24 | 0) >> 2] = $2_1;
   }
   if ($1_1 >>> 0 >= $3_1 >>> 0) {
    break label$1
   }
   $4_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
   if (!($4_1 & 1 | 0)) {
    break label$1
   }
   label$17 : {
    label$18 : {
     label$19 : {
      label$20 : {
       label$21 : {
        if ($4_1 & 2 | 0) {
         break label$21
        }
        label$22 : {
         if (($3_1 | 0) != (HEAP32[(0 + 68752 | 0) >> 2] | 0 | 0)) {
          break label$22
         }
         HEAP32[(0 + 68752 | 0) >> 2] = $1_1;
         $0_1 = (HEAP32[(0 + 68740 | 0) >> 2] | 0) + $0_1 | 0;
         HEAP32[(0 + 68740 | 0) >> 2] = $0_1;
         HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
         if (($1_1 | 0) != (HEAP32[(0 + 68748 | 0) >> 2] | 0 | 0)) {
          break label$1
         }
         HEAP32[(0 + 68736 | 0) >> 2] = 0;
         HEAP32[(0 + 68748 | 0) >> 2] = 0;
         return;
        }
        label$23 : {
         if (($3_1 | 0) != (HEAP32[(0 + 68748 | 0) >> 2] | 0 | 0)) {
          break label$23
         }
         HEAP32[(0 + 68748 | 0) >> 2] = $1_1;
         $0_1 = (HEAP32[(0 + 68736 | 0) >> 2] | 0) + $0_1 | 0;
         HEAP32[(0 + 68736 | 0) >> 2] = $0_1;
         HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
         HEAP32[($1_1 + $0_1 | 0) >> 2] = $0_1;
         return;
        }
        $0_1 = ($4_1 & -8 | 0) + $0_1 | 0;
        $2_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
        label$24 : {
         if ($4_1 >>> 0 > 255 >>> 0) {
          break label$24
         }
         label$25 : {
          $5_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
          if (($2_1 | 0) != ($5_1 | 0)) {
           break label$25
          }
          HEAP32[(0 + 68728 | 0) >> 2] = (HEAP32[(0 + 68728 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $4_1 >>> 3 | 0 | 0) | 0) | 0;
          break label$18;
         }
         HEAP32[($5_1 + 12 | 0) >> 2] = $2_1;
         HEAP32[($2_1 + 8 | 0) >> 2] = $5_1;
         break label$18;
        }
        $6_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
        label$26 : {
         if (($2_1 | 0) == ($3_1 | 0)) {
          break label$26
         }
         $4_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
         HEAP32[($4_1 + 12 | 0) >> 2] = $2_1;
         HEAP32[($2_1 + 8 | 0) >> 2] = $4_1;
         break label$19;
        }
        label$27 : {
         label$28 : {
          $4_1 = HEAP32[($3_1 + 20 | 0) >> 2] | 0;
          if (!$4_1) {
           break label$28
          }
          $5_1 = $3_1 + 20 | 0;
          break label$27;
         }
         $4_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
         if (!$4_1) {
          break label$20
         }
         $5_1 = $3_1 + 16 | 0;
        }
        label$29 : while (1) {
         $7_1 = $5_1;
         $2_1 = $4_1;
         $5_1 = $2_1 + 20 | 0;
         $4_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
         if ($4_1) {
          continue label$29
         }
         $5_1 = $2_1 + 16 | 0;
         $4_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
         if ($4_1) {
          continue label$29
         }
         break label$29;
        };
        HEAP32[$7_1 >> 2] = 0;
        break label$19;
       }
       HEAP32[($3_1 + 4 | 0) >> 2] = $4_1 & -2 | 0;
       HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
       HEAP32[($1_1 + $0_1 | 0) >> 2] = $0_1;
       break label$17;
      }
      $2_1 = 0;
     }
     if (!$6_1) {
      break label$18
     }
     label$30 : {
      label$31 : {
       $5_1 = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
       $4_1 = ($5_1 << 2 | 0) + 69032 | 0;
       if (($3_1 | 0) != (HEAP32[$4_1 >> 2] | 0 | 0)) {
        break label$31
       }
       HEAP32[$4_1 >> 2] = $2_1;
       if ($2_1) {
        break label$30
       }
       HEAP32[(0 + 68732 | 0) >> 2] = (HEAP32[(0 + 68732 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $5_1 | 0) | 0) | 0;
       break label$18;
      }
      label$32 : {
       label$33 : {
        if ((HEAP32[($6_1 + 16 | 0) >> 2] | 0 | 0) != ($3_1 | 0)) {
         break label$33
        }
        HEAP32[($6_1 + 16 | 0) >> 2] = $2_1;
        break label$32;
       }
       HEAP32[($6_1 + 20 | 0) >> 2] = $2_1;
      }
      if (!$2_1) {
       break label$18
      }
     }
     HEAP32[($2_1 + 24 | 0) >> 2] = $6_1;
     label$34 : {
      $4_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
      if (!$4_1) {
       break label$34
      }
      HEAP32[($2_1 + 16 | 0) >> 2] = $4_1;
      HEAP32[($4_1 + 24 | 0) >> 2] = $2_1;
     }
     $4_1 = HEAP32[($3_1 + 20 | 0) >> 2] | 0;
     if (!$4_1) {
      break label$18
     }
     HEAP32[($2_1 + 20 | 0) >> 2] = $4_1;
     HEAP32[($4_1 + 24 | 0) >> 2] = $2_1;
    }
    HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
    HEAP32[($1_1 + $0_1 | 0) >> 2] = $0_1;
    if (($1_1 | 0) != (HEAP32[(0 + 68748 | 0) >> 2] | 0 | 0)) {
     break label$17
    }
    HEAP32[(0 + 68736 | 0) >> 2] = $0_1;
    return;
   }
   label$35 : {
    if ($0_1 >>> 0 > 255 >>> 0) {
     break label$35
    }
    $2_1 = ($0_1 & -8 | 0) + 68768 | 0;
    label$36 : {
     label$37 : {
      $4_1 = HEAP32[(0 + 68728 | 0) >> 2] | 0;
      $0_1 = 1 << ($0_1 >>> 3 | 0) | 0;
      if ($4_1 & $0_1 | 0) {
       break label$37
      }
      HEAP32[(0 + 68728 | 0) >> 2] = $4_1 | $0_1 | 0;
      $0_1 = $2_1;
      break label$36;
     }
     $0_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
    }
    HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
    HEAP32[($0_1 + 12 | 0) >> 2] = $1_1;
    HEAP32[($1_1 + 12 | 0) >> 2] = $2_1;
    HEAP32[($1_1 + 8 | 0) >> 2] = $0_1;
    return;
   }
   $2_1 = 31;
   label$38 : {
    if ($0_1 >>> 0 > 16777215 >>> 0) {
     break label$38
    }
    $2_1 = Math_clz32($0_1 >>> 8 | 0);
    $2_1 = ((($0_1 >>> (38 - $2_1 | 0) | 0) & 1 | 0) - ($2_1 << 1 | 0) | 0) + 62 | 0;
   }
   HEAP32[($1_1 + 28 | 0) >> 2] = $2_1;
   HEAP32[($1_1 + 16 | 0) >> 2] = 0;
   HEAP32[($1_1 + 20 | 0) >> 2] = 0;
   $5_1 = ($2_1 << 2 | 0) + 69032 | 0;
   label$39 : {
    label$40 : {
     label$41 : {
      label$42 : {
       $4_1 = HEAP32[(0 + 68732 | 0) >> 2] | 0;
       $3_1 = 1 << $2_1 | 0;
       if ($4_1 & $3_1 | 0) {
        break label$42
       }
       HEAP32[(0 + 68732 | 0) >> 2] = $4_1 | $3_1 | 0;
       HEAP32[$5_1 >> 2] = $1_1;
       $0_1 = 8;
       $2_1 = 24;
       break label$41;
      }
      $2_1 = $0_1 << (($2_1 | 0) == (31 | 0) ? 0 : 25 - ($2_1 >>> 1 | 0) | 0) | 0;
      $5_1 = HEAP32[$5_1 >> 2] | 0;
      label$43 : while (1) {
       $4_1 = $5_1;
       if (((HEAP32[($4_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($0_1 | 0)) {
        break label$40
       }
       $5_1 = $2_1 >>> 29 | 0;
       $2_1 = $2_1 << 1 | 0;
       $3_1 = $4_1 + ($5_1 & 4 | 0) | 0;
       $5_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
       if ($5_1) {
        continue label$43
       }
       break label$43;
      };
      HEAP32[($3_1 + 16 | 0) >> 2] = $1_1;
      $0_1 = 8;
      $2_1 = 24;
      $5_1 = $4_1;
     }
     $4_1 = $1_1;
     $3_1 = $1_1;
     break label$39;
    }
    $5_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
    HEAP32[($5_1 + 12 | 0) >> 2] = $1_1;
    HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
    $3_1 = 0;
    $0_1 = 24;
    $2_1 = 8;
   }
   HEAP32[($1_1 + $2_1 | 0) >> 2] = $5_1;
   HEAP32[($1_1 + 12 | 0) >> 2] = $4_1;
   HEAP32[($1_1 + $0_1 | 0) >> 2] = $3_1;
   $1_1 = (HEAP32[(0 + 68760 | 0) >> 2] | 0) + -1 | 0;
   HEAP32[(0 + 68760 | 0) >> 2] = $1_1 ? $1_1 : -1;
  }
 }
 
 function $104($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, $2_1 = 0, i64toi32_i32$3 = 0, $11_1 = 0, $6$hi = 0, $8$hi = 0, $16_1 = 0, i64toi32_i32$2 = 0;
  label$1 : {
   label$2 : {
    if ($0_1) {
     break label$2
    }
    $2_1 = 0;
    break label$1;
   }
   i64toi32_i32$0 = 0;
   $6$hi = i64toi32_i32$0;
   i64toi32_i32$0 = 0;
   $8$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $6$hi;
   i64toi32_i32$1 = $8$hi;
   i64toi32_i32$1 = __wasm_i64_mul($0_1 | 0, i64toi32_i32$0 | 0, $1_1 | 0, i64toi32_i32$1 | 0) | 0;
   i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
   $2_1 = i64toi32_i32$1;
   if (($1_1 | $0_1 | 0) >>> 0 < 65536 >>> 0) {
    break label$1
   }
   $16_1 = i64toi32_i32$1;
   i64toi32_i32$2 = i64toi32_i32$1;
   i64toi32_i32$1 = 0;
   i64toi32_i32$3 = 32;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$1 = 0;
    $11_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   } else {
    i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    $11_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
   }
   $2_1 = ($11_1 | 0) != (0 | 0) ? -1 : $16_1;
  }
  label$3 : {
   $0_1 = $101($2_1 | 0) | 0;
   if (!$0_1) {
    break label$3
   }
   if (!((HEAPU8[($0_1 + -4 | 0) >> 0] | 0) & 3 | 0)) {
    break label$3
   }
   $61($0_1 | 0, 0 | 0, $2_1 | 0) | 0;
  }
  return $0_1 | 0;
 }
 
 function $105($0_1, $1_1, $1$hi, $2_1, $2$hi, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  $2$hi = $2$hi | 0;
  $3_1 = $3_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$3 = 0, $4$hi = 0, $18_1 = 0, $20_1 = 0, $21_1 = 0, $22_1 = 0, $11$hi = 0, $18$hi = 0, $19_1 = 0, $19$hi = 0, $4_1 = 0, $24$hi = 0;
  label$1 : {
   label$2 : {
    if (!($3_1 & 64 | 0)) {
     break label$2
    }
    i64toi32_i32$0 = $1$hi;
    i64toi32_i32$0 = 0;
    $11$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $1$hi;
    i64toi32_i32$2 = $1_1;
    i64toi32_i32$1 = $11$hi;
    i64toi32_i32$3 = $3_1 + -64 | 0;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
     $18_1 = 0;
    } else {
     i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
     $18_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    }
    $2_1 = $18_1;
    $2$hi = i64toi32_i32$1;
    i64toi32_i32$1 = 0;
    $1_1 = 0;
    $1$hi = i64toi32_i32$1;
    break label$1;
   }
   if (!$3_1) {
    break label$1
   }
   i64toi32_i32$1 = $1$hi;
   i64toi32_i32$1 = 0;
   $18$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $1$hi;
   i64toi32_i32$0 = $1_1;
   i64toi32_i32$2 = $18$hi;
   i64toi32_i32$3 = 64 - $3_1 | 0;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = 0;
    $20_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   } else {
    i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    $20_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
   }
   $19_1 = $20_1;
   $19$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $2$hi;
   i64toi32_i32$2 = 0;
   $4_1 = $3_1;
   $4$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $2$hi;
   i64toi32_i32$1 = $2_1;
   i64toi32_i32$0 = $4$hi;
   i64toi32_i32$3 = $3_1;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
    $21_1 = 0;
   } else {
    i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
    $21_1 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   }
   $24$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $19$hi;
   i64toi32_i32$2 = $19_1;
   i64toi32_i32$1 = $24$hi;
   i64toi32_i32$3 = $21_1;
   i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
   $2_1 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
   $2$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $1$hi;
   i64toi32_i32$1 = $4$hi;
   i64toi32_i32$1 = $1$hi;
   i64toi32_i32$0 = $1_1;
   i64toi32_i32$2 = $4$hi;
   i64toi32_i32$3 = $4_1;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
    $22_1 = 0;
   } else {
    i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
    $22_1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
   }
   $1_1 = $22_1;
   $1$hi = i64toi32_i32$2;
  }
  i64toi32_i32$2 = $1$hi;
  i64toi32_i32$0 = $0_1;
  HEAP32[i64toi32_i32$0 >> 2] = $1_1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$2;
  i64toi32_i32$2 = $2$hi;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $2_1;
  HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] = i64toi32_i32$2;
 }
 
 function $106($0_1, $1_1, $1$hi, $2_1, $2$hi, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  $2$hi = $2$hi | 0;
  $3_1 = $3_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $4$hi = 0, $18_1 = 0, $20_1 = 0, $21_1 = 0, $22_1 = 0, $11$hi = 0, $18$hi = 0, $19_1 = 0, $19$hi = 0, $4_1 = 0, $24$hi = 0;
  label$1 : {
   label$2 : {
    if (!($3_1 & 64 | 0)) {
     break label$2
    }
    i64toi32_i32$0 = $2$hi;
    i64toi32_i32$0 = 0;
    $11$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $2$hi;
    i64toi32_i32$2 = $2_1;
    i64toi32_i32$1 = $11$hi;
    i64toi32_i32$3 = $3_1 + -64 | 0;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $18_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
     $18_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    $1_1 = $18_1;
    $1$hi = i64toi32_i32$1;
    i64toi32_i32$1 = 0;
    $2_1 = 0;
    $2$hi = i64toi32_i32$1;
    break label$1;
   }
   if (!$3_1) {
    break label$1
   }
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$1 = 0;
   $18$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$0 = $2_1;
   i64toi32_i32$2 = $18$hi;
   i64toi32_i32$3 = 64 - $3_1 | 0;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
    $20_1 = 0;
   } else {
    i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
    $20_1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
   }
   $19_1 = $20_1;
   $19$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $1$hi;
   i64toi32_i32$2 = 0;
   $4_1 = $3_1;
   $4$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $1$hi;
   i64toi32_i32$1 = $1_1;
   i64toi32_i32$0 = $4$hi;
   i64toi32_i32$3 = $3_1;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$0 = 0;
    $21_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
   } else {
    i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
    $21_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
   }
   $24$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $19$hi;
   i64toi32_i32$2 = $19_1;
   i64toi32_i32$1 = $24$hi;
   i64toi32_i32$3 = $21_1;
   i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
   $1_1 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
   $1$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$1 = $4$hi;
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$0 = $2_1;
   i64toi32_i32$2 = $4$hi;
   i64toi32_i32$3 = $4_1;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = 0;
    $22_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   } else {
    i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    $22_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
   }
   $2_1 = $22_1;
   $2$hi = i64toi32_i32$2;
  }
  i64toi32_i32$2 = $1$hi;
  i64toi32_i32$0 = $0_1;
  HEAP32[i64toi32_i32$0 >> 2] = $1_1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$2;
  i64toi32_i32$2 = $2$hi;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $2_1;
  HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] = i64toi32_i32$2;
 }
 
 function $107($0_1, $0$hi, $1_1, $1$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  var i64toi32_i32$3 = 0, i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$5 = 0, i64toi32_i32$4 = 0, $7_1 = 0, $7$hi = 0, $3_1 = 0, $2_1 = 0, $8_1 = 0, $8$hi = 0, $6_1 = 0, $47_1 = 0, $48_1 = 0, $49_1 = 0, $50_1 = 0, $51_1 = 0, $4_1 = 0, $5_1 = 0, $52_1 = 0, $53_1 = 0, $54_1 = 0, $23_1 = 0, $23$hi = 0, $25$hi = 0, $39$hi = 0, $48$hi = 0, $58_1 = 0, $58$hi = 0, $60$hi = 0, $79_1 = 0, $79$hi = 0, $92_1 = 0, $92$hi = 0, $96$hi = 0, $99_1 = 0, $99$hi = 0, $104_1 = 0, $104$hi = 0, $108_1 = 0, $108$hi = 0, $111_1 = 0, $112$hi = 0, $121$hi = 0, $125 = 0, $125$hi = 0, $136$hi = 0, $138 = 0, $138$hi = 0, $139$hi = 0;
  $2_1 = global$0 - 32 | 0;
  global$0 = $2_1;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$1 = 65535;
  i64toi32_i32$3 = -1;
  i64toi32_i32$1 = i64toi32_i32$0 & i64toi32_i32$1 | 0;
  $7_1 = i64toi32_i32$2 & i64toi32_i32$3 | 0;
  $7$hi = i64toi32_i32$1;
  label$1 : {
   label$2 : {
    i64toi32_i32$1 = i64toi32_i32$0;
    i64toi32_i32$1 = i64toi32_i32$0;
    i64toi32_i32$0 = i64toi32_i32$2;
    i64toi32_i32$2 = 0;
    i64toi32_i32$3 = 48;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = 0;
     $47_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
     $47_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
    }
    i64toi32_i32$1 = $47_1;
    i64toi32_i32$0 = 0;
    i64toi32_i32$3 = 32767;
    i64toi32_i32$0 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
    $8_1 = i64toi32_i32$1 & i64toi32_i32$3 | 0;
    $8$hi = i64toi32_i32$0;
    $3_1 = $8_1;
    if (($3_1 + -15361 | 0) >>> 0 > 2045 >>> 0) {
     break label$2
    }
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$2 = $0_1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 60;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $48_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
     $48_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    $23_1 = $48_1;
    $23$hi = i64toi32_i32$1;
    i64toi32_i32$1 = $7$hi;
    i64toi32_i32$0 = $7_1;
    i64toi32_i32$2 = 0;
    i64toi32_i32$3 = 4;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
     $49_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
     $49_1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
    }
    $25$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $23$hi;
    i64toi32_i32$1 = $23_1;
    i64toi32_i32$0 = $25$hi;
    i64toi32_i32$3 = $49_1;
    i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
    $7_1 = i64toi32_i32$1 | i64toi32_i32$3 | 0;
    $7$hi = i64toi32_i32$0;
    i64toi32_i32$0 = 0;
    $8_1 = $3_1 + -15360 | 0;
    $8$hi = i64toi32_i32$0;
    label$3 : {
     label$4 : {
      i64toi32_i32$0 = $0$hi;
      i64toi32_i32$2 = $0_1;
      i64toi32_i32$1 = 268435455;
      i64toi32_i32$3 = -1;
      i64toi32_i32$1 = i64toi32_i32$0 & i64toi32_i32$1 | 0;
      $0_1 = i64toi32_i32$2 & i64toi32_i32$3 | 0;
      $0$hi = i64toi32_i32$1;
      i64toi32_i32$0 = $0_1;
      i64toi32_i32$2 = 134217728;
      i64toi32_i32$3 = 1;
      if (i64toi32_i32$1 >>> 0 < i64toi32_i32$2 >>> 0 | ((i64toi32_i32$1 | 0) == (i64toi32_i32$2 | 0) & i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0 | 0) | 0) {
       break label$4
      }
      i64toi32_i32$0 = $7$hi;
      i64toi32_i32$3 = $7_1;
      i64toi32_i32$1 = 0;
      i64toi32_i32$2 = 1;
      i64toi32_i32$4 = i64toi32_i32$3 + i64toi32_i32$2 | 0;
      i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$1 | 0;
      if (i64toi32_i32$4 >>> 0 < i64toi32_i32$2 >>> 0) {
       i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
      }
      $7_1 = i64toi32_i32$4;
      $7$hi = i64toi32_i32$5;
      break label$3;
     }
     i64toi32_i32$5 = $0$hi;
     i64toi32_i32$0 = $0_1;
     i64toi32_i32$3 = 134217728;
     i64toi32_i32$2 = 0;
     if ((i64toi32_i32$0 | 0) != (i64toi32_i32$2 | 0) | (i64toi32_i32$5 | 0) != (i64toi32_i32$3 | 0) | 0) {
      break label$3
     }
     i64toi32_i32$0 = $7$hi;
     i64toi32_i32$2 = $7_1;
     i64toi32_i32$5 = 0;
     i64toi32_i32$3 = 1;
     i64toi32_i32$5 = i64toi32_i32$0 & i64toi32_i32$5 | 0;
     $39$hi = i64toi32_i32$5;
     i64toi32_i32$5 = i64toi32_i32$0;
     i64toi32_i32$5 = $39$hi;
     i64toi32_i32$0 = i64toi32_i32$2 & i64toi32_i32$3 | 0;
     i64toi32_i32$2 = $7$hi;
     i64toi32_i32$3 = $7_1;
     i64toi32_i32$1 = i64toi32_i32$0 + i64toi32_i32$3 | 0;
     i64toi32_i32$4 = i64toi32_i32$5 + i64toi32_i32$2 | 0;
     if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
      i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
     }
     $7_1 = i64toi32_i32$1;
     $7$hi = i64toi32_i32$4;
    }
    i64toi32_i32$4 = $7$hi;
    i64toi32_i32$5 = $7_1;
    i64toi32_i32$0 = 1048575;
    i64toi32_i32$3 = -1;
    $3_1 = i64toi32_i32$4 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$5 >>> 0 > i64toi32_i32$3 >>> 0 | 0) | 0;
    i64toi32_i32$2 = $3_1;
    i64toi32_i32$5 = 0;
    i64toi32_i32$0 = i64toi32_i32$2 ? 0 : $7_1;
    i64toi32_i32$3 = i64toi32_i32$2 ? i64toi32_i32$5 : i64toi32_i32$4;
    $0_1 = i64toi32_i32$0;
    $0$hi = i64toi32_i32$3;
    i64toi32_i32$3 = 0;
    $48$hi = i64toi32_i32$3;
    i64toi32_i32$3 = $8$hi;
    i64toi32_i32$3 = $48$hi;
    i64toi32_i32$0 = $8$hi;
    i64toi32_i32$5 = $8_1;
    i64toi32_i32$4 = i64toi32_i32$2 + i64toi32_i32$5 | 0;
    i64toi32_i32$1 = i64toi32_i32$3 + i64toi32_i32$0 | 0;
    if (i64toi32_i32$4 >>> 0 < i64toi32_i32$5 >>> 0) {
     i64toi32_i32$1 = i64toi32_i32$1 + 1 | 0
    }
    $7_1 = i64toi32_i32$4;
    $7$hi = i64toi32_i32$1;
    break label$1;
   }
   label$5 : {
    i64toi32_i32$1 = $0$hi;
    i64toi32_i32$1 = $7$hi;
    i64toi32_i32$1 = $0$hi;
    i64toi32_i32$3 = $0_1;
    i64toi32_i32$2 = $7$hi;
    i64toi32_i32$5 = $7_1;
    i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
    if (!(i64toi32_i32$3 | i64toi32_i32$5 | 0 | i64toi32_i32$2 | 0)) {
     break label$5
    }
    i64toi32_i32$2 = $8$hi;
    i64toi32_i32$1 = $8_1;
    i64toi32_i32$3 = 0;
    i64toi32_i32$5 = 32767;
    if ((i64toi32_i32$1 | 0) != (i64toi32_i32$5 | 0) | (i64toi32_i32$2 | 0) != (i64toi32_i32$3 | 0) | 0) {
     break label$5
    }
    i64toi32_i32$1 = $0$hi;
    i64toi32_i32$5 = $0_1;
    i64toi32_i32$2 = 0;
    i64toi32_i32$3 = 60;
    i64toi32_i32$0 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = 0;
     $50_1 = i64toi32_i32$1 >>> i64toi32_i32$0 | 0;
    } else {
     i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$0 | 0;
     $50_1 = (((1 << i64toi32_i32$0 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$0 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$0 | 0) | 0;
    }
    $58_1 = $50_1;
    $58$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $7$hi;
    i64toi32_i32$1 = $7_1;
    i64toi32_i32$5 = 0;
    i64toi32_i32$3 = 4;
    i64toi32_i32$0 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$5 = i64toi32_i32$1 << i64toi32_i32$0 | 0;
     $51_1 = 0;
    } else {
     i64toi32_i32$5 = ((1 << i64toi32_i32$0 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$0 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$0 | 0) | 0;
     $51_1 = i64toi32_i32$1 << i64toi32_i32$0 | 0;
    }
    $60$hi = i64toi32_i32$5;
    i64toi32_i32$5 = $58$hi;
    i64toi32_i32$2 = $58_1;
    i64toi32_i32$1 = $60$hi;
    i64toi32_i32$3 = $51_1;
    i64toi32_i32$1 = i64toi32_i32$5 | i64toi32_i32$1 | 0;
    i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
    i64toi32_i32$2 = 524288;
    i64toi32_i32$3 = 0;
    i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
    $0_1 = i64toi32_i32$5 | i64toi32_i32$3 | 0;
    $0$hi = i64toi32_i32$2;
    i64toi32_i32$2 = 0;
    $7_1 = 2047;
    $7$hi = i64toi32_i32$2;
    break label$1;
   }
   label$6 : {
    if ($3_1 >>> 0 <= 17406 >>> 0) {
     break label$6
    }
    i64toi32_i32$2 = 0;
    $7_1 = 2047;
    $7$hi = i64toi32_i32$2;
    i64toi32_i32$2 = 0;
    $0_1 = 0;
    $0$hi = i64toi32_i32$2;
    break label$1;
   }
   label$7 : {
    i64toi32_i32$2 = $8$hi;
    $4_1 = !($8_1 | i64toi32_i32$2 | 0);
    $5_1 = $4_1 ? 15360 : 15361;
    $6_1 = $5_1 - $3_1 | 0;
    if (($6_1 | 0) <= (112 | 0)) {
     break label$7
    }
    i64toi32_i32$2 = 0;
    $0_1 = 0;
    $0$hi = i64toi32_i32$2;
    i64toi32_i32$2 = 0;
    $7_1 = 0;
    $7$hi = i64toi32_i32$2;
    break label$1;
   }
   i64toi32_i32$2 = $0$hi;
   i64toi32_i32$2 = $7$hi;
   i64toi32_i32$1 = $7_1;
   i64toi32_i32$5 = 65536;
   i64toi32_i32$3 = 0;
   i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
   $79_1 = i64toi32_i32$1 | i64toi32_i32$3 | 0;
   $79$hi = i64toi32_i32$5;
   i64toi32_i32$0 = $4_1;
   i64toi32_i32$5 = i64toi32_i32$2;
   i64toi32_i32$1 = $79$hi;
   i64toi32_i32$3 = i64toi32_i32$0 ? $7_1 : $79_1;
   i64toi32_i32$2 = i64toi32_i32$0 ? i64toi32_i32$2 : i64toi32_i32$1;
   $7_1 = i64toi32_i32$3;
   $7$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $0$hi;
   i64toi32_i32$3 = $7$hi;
   $105($2_1 + 16 | 0 | 0, $0_1 | 0, i64toi32_i32$2 | 0, $7_1 | 0, i64toi32_i32$3 | 0, 128 - $6_1 | 0 | 0);
   i64toi32_i32$3 = i64toi32_i32$2;
   i64toi32_i32$3 = $7$hi;
   i64toi32_i32$3 = i64toi32_i32$2;
   i64toi32_i32$2 = $7$hi;
   $106($2_1 | 0, $0_1 | 0, i64toi32_i32$3 | 0, $7_1 | 0, i64toi32_i32$2 | 0, $6_1 | 0);
   i64toi32_i32$0 = $2_1;
   i64toi32_i32$2 = HEAP32[i64toi32_i32$0 >> 2] | 0;
   i64toi32_i32$3 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
   $7_1 = i64toi32_i32$2;
   $7$hi = i64toi32_i32$3;
   i64toi32_i32$0 = i64toi32_i32$2;
   i64toi32_i32$2 = 0;
   i64toi32_i32$5 = 60;
   i64toi32_i32$1 = i64toi32_i32$5 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = 0;
    $52_1 = i64toi32_i32$3 >>> i64toi32_i32$1 | 0;
   } else {
    i64toi32_i32$2 = i64toi32_i32$3 >>> i64toi32_i32$1 | 0;
    $52_1 = (((1 << i64toi32_i32$1 | 0) - 1 | 0) & i64toi32_i32$3 | 0) << (32 - i64toi32_i32$1 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$1 | 0) | 0;
   }
   $92_1 = $52_1;
   $92$hi = i64toi32_i32$2;
   i64toi32_i32$3 = $2_1 + 8 | 0;
   i64toi32_i32$2 = HEAP32[i64toi32_i32$3 >> 2] | 0;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] | 0;
   i64toi32_i32$3 = i64toi32_i32$2;
   i64toi32_i32$2 = 0;
   i64toi32_i32$5 = 4;
   i64toi32_i32$1 = i64toi32_i32$5 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$1 | 0;
    $53_1 = 0;
   } else {
    i64toi32_i32$2 = ((1 << i64toi32_i32$1 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$1 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$1 | 0) | 0;
    $53_1 = i64toi32_i32$3 << i64toi32_i32$1 | 0;
   }
   $96$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $92$hi;
   i64toi32_i32$0 = $92_1;
   i64toi32_i32$3 = $96$hi;
   i64toi32_i32$5 = $53_1;
   i64toi32_i32$3 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
   $0_1 = i64toi32_i32$0 | i64toi32_i32$5 | 0;
   $0$hi = i64toi32_i32$3;
   label$8 : {
    label$9 : {
     i64toi32_i32$3 = $7$hi;
     i64toi32_i32$2 = $7_1;
     i64toi32_i32$0 = 268435455;
     i64toi32_i32$5 = -1;
     i64toi32_i32$0 = i64toi32_i32$3 & i64toi32_i32$0 | 0;
     $99_1 = i64toi32_i32$2 & i64toi32_i32$5 | 0;
     $99$hi = i64toi32_i32$0;
     i64toi32_i32$3 = $2_1;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$3 + 16 | 0) >> 2] | 0;
     i64toi32_i32$2 = HEAP32[(i64toi32_i32$3 + 20 | 0) >> 2] | 0;
     $104_1 = i64toi32_i32$0;
     $104$hi = i64toi32_i32$2;
     i64toi32_i32$3 = (i64toi32_i32$3 + 16 | 0) + 8 | 0;
     i64toi32_i32$2 = HEAP32[i64toi32_i32$3 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] | 0;
     $108_1 = i64toi32_i32$2;
     $108$hi = i64toi32_i32$0;
     i64toi32_i32$0 = $104$hi;
     i64toi32_i32$3 = $104_1;
     i64toi32_i32$2 = $108$hi;
     i64toi32_i32$5 = $108_1;
     i64toi32_i32$2 = i64toi32_i32$0 | i64toi32_i32$2 | 0;
     i64toi32_i32$0 = i64toi32_i32$3 | i64toi32_i32$5 | 0;
     i64toi32_i32$3 = 0;
     i64toi32_i32$5 = 0;
     $111_1 = ($5_1 | 0) != ($3_1 | 0) & ((i64toi32_i32$0 | 0) != (i64toi32_i32$5 | 0) | (i64toi32_i32$2 | 0) != (i64toi32_i32$3 | 0) | 0) | 0;
     i64toi32_i32$0 = 0;
     $112$hi = i64toi32_i32$0;
     i64toi32_i32$0 = $99$hi;
     i64toi32_i32$5 = $99_1;
     i64toi32_i32$2 = $112$hi;
     i64toi32_i32$3 = $111_1;
     i64toi32_i32$2 = i64toi32_i32$0 | i64toi32_i32$2 | 0;
     $7_1 = i64toi32_i32$5 | i64toi32_i32$3 | 0;
     $7$hi = i64toi32_i32$2;
     i64toi32_i32$0 = $7_1;
     i64toi32_i32$5 = 134217728;
     i64toi32_i32$3 = 1;
     if (i64toi32_i32$2 >>> 0 < i64toi32_i32$5 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$5 | 0) & i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0 | 0) | 0) {
      break label$9
     }
     i64toi32_i32$0 = $0$hi;
     i64toi32_i32$3 = $0_1;
     i64toi32_i32$2 = 0;
     i64toi32_i32$5 = 1;
     i64toi32_i32$1 = i64toi32_i32$3 + i64toi32_i32$5 | 0;
     i64toi32_i32$4 = i64toi32_i32$0 + i64toi32_i32$2 | 0;
     if (i64toi32_i32$1 >>> 0 < i64toi32_i32$5 >>> 0) {
      i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
     }
     $0_1 = i64toi32_i32$1;
     $0$hi = i64toi32_i32$4;
     break label$8;
    }
    i64toi32_i32$4 = $7$hi;
    i64toi32_i32$0 = $7_1;
    i64toi32_i32$3 = 134217728;
    i64toi32_i32$5 = 0;
    if ((i64toi32_i32$0 | 0) != (i64toi32_i32$5 | 0) | (i64toi32_i32$4 | 0) != (i64toi32_i32$3 | 0) | 0) {
     break label$8
    }
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$5 = $0_1;
    i64toi32_i32$4 = 0;
    i64toi32_i32$3 = 1;
    i64toi32_i32$4 = i64toi32_i32$0 & i64toi32_i32$4 | 0;
    $121$hi = i64toi32_i32$4;
    i64toi32_i32$4 = i64toi32_i32$0;
    i64toi32_i32$4 = $121$hi;
    i64toi32_i32$0 = i64toi32_i32$5 & i64toi32_i32$3 | 0;
    i64toi32_i32$5 = $0$hi;
    i64toi32_i32$3 = $0_1;
    i64toi32_i32$2 = i64toi32_i32$0 + i64toi32_i32$3 | 0;
    i64toi32_i32$1 = i64toi32_i32$4 + i64toi32_i32$5 | 0;
    if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
     i64toi32_i32$1 = i64toi32_i32$1 + 1 | 0
    }
    $0_1 = i64toi32_i32$2;
    $0$hi = i64toi32_i32$1;
   }
   i64toi32_i32$1 = $0$hi;
   i64toi32_i32$4 = $0_1;
   i64toi32_i32$0 = 1048576;
   i64toi32_i32$3 = 0;
   i64toi32_i32$0 = i64toi32_i32$1 ^ i64toi32_i32$0 | 0;
   $125 = i64toi32_i32$4 ^ i64toi32_i32$3 | 0;
   $125$hi = i64toi32_i32$0;
   i64toi32_i32$0 = i64toi32_i32$1;
   i64toi32_i32$1 = i64toi32_i32$4;
   i64toi32_i32$4 = 1048575;
   i64toi32_i32$3 = -1;
   $3_1 = i64toi32_i32$0 >>> 0 > i64toi32_i32$4 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$4 | 0) & i64toi32_i32$1 >>> 0 > i64toi32_i32$3 >>> 0 | 0) | 0;
   i64toi32_i32$5 = $3_1;
   i64toi32_i32$1 = $125$hi;
   i64toi32_i32$4 = i64toi32_i32$5 ? $125 : $0_1;
   i64toi32_i32$3 = i64toi32_i32$5 ? i64toi32_i32$1 : i64toi32_i32$0;
   $0_1 = i64toi32_i32$4;
   $0$hi = i64toi32_i32$3;
   i64toi32_i32$3 = 0;
   $7_1 = i64toi32_i32$5;
   $7$hi = i64toi32_i32$3;
  }
  global$0 = $2_1 + 32 | 0;
  i64toi32_i32$3 = $7$hi;
  i64toi32_i32$5 = $7_1;
  i64toi32_i32$4 = 0;
  i64toi32_i32$1 = 52;
  i64toi32_i32$0 = i64toi32_i32$1 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$1 & 63 | 0) >>> 0) {
   i64toi32_i32$4 = i64toi32_i32$5 << i64toi32_i32$0 | 0;
   $54_1 = 0;
  } else {
   i64toi32_i32$4 = ((1 << i64toi32_i32$0 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$0 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$0 | 0) | 0;
   $54_1 = i64toi32_i32$5 << i64toi32_i32$0 | 0;
  }
  $136$hi = i64toi32_i32$4;
  i64toi32_i32$4 = $1$hi;
  i64toi32_i32$3 = $1_1;
  i64toi32_i32$5 = -2147483648;
  i64toi32_i32$1 = 0;
  i64toi32_i32$5 = i64toi32_i32$4 & i64toi32_i32$5 | 0;
  $138 = i64toi32_i32$3 & i64toi32_i32$1 | 0;
  $138$hi = i64toi32_i32$5;
  i64toi32_i32$5 = $136$hi;
  i64toi32_i32$4 = $54_1;
  i64toi32_i32$3 = $138$hi;
  i64toi32_i32$1 = $138;
  i64toi32_i32$3 = i64toi32_i32$5 | i64toi32_i32$3 | 0;
  $139$hi = i64toi32_i32$3;
  i64toi32_i32$3 = $0$hi;
  i64toi32_i32$3 = $139$hi;
  i64toi32_i32$5 = i64toi32_i32$4 | i64toi32_i32$1 | 0;
  i64toi32_i32$4 = $0$hi;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$4 = i64toi32_i32$3 | i64toi32_i32$4 | 0;
  wasm2js_scratch_store_i32(0 | 0, i64toi32_i32$5 | i64toi32_i32$1 | 0 | 0);
  wasm2js_scratch_store_i32(1 | 0, i64toi32_i32$4 | 0);
  return +(+wasm2js_scratch_load_f64());
 }
 
 function $108($0_1) {
  $0_1 = $0_1 | 0;
  global$1 = $0_1;
 }
 
 function $110() {
  global$3 = 65536;
  global$2 = (0 + 15 | 0) & -16 | 0;
 }
 
 function $111() {
  return global$0 - global$2 | 0 | 0;
 }
 
 function $112() {
  return global$3 | 0;
 }
 
 function $113() {
  return global$2 | 0;
 }
 
 function $114($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, i64toi32_i32$1 = 0, $2_1 = 0, i64toi32_i32$0 = 0, $3_1 = 0;
  label$1 : {
   if ($0_1) {
    break label$1
   }
   $1_1 = 0;
   label$2 : {
    if (!(HEAP32[(0 + 68528 | 0) >> 2] | 0)) {
     break label$2
    }
    $1_1 = $114(HEAP32[(0 + 68528 | 0) >> 2] | 0 | 0) | 0;
   }
   label$3 : {
    if (!(HEAP32[(0 + 68496 | 0) >> 2] | 0)) {
     break label$3
    }
    $1_1 = $114(HEAP32[(0 + 68496 | 0) >> 2] | 0 | 0) | 0 | $1_1 | 0;
   }
   label$4 : {
    $0_1 = HEAP32[($48() | 0) >> 2] | 0;
    if (!$0_1) {
     break label$4
    }
    label$5 : while (1) {
     label$6 : {
      label$7 : {
       if ((HEAP32[($0_1 + 76 | 0) >> 2] | 0 | 0) >= (0 | 0)) {
        break label$7
       }
       $2_1 = 1;
       break label$6;
      }
      $2_1 = !($43($0_1 | 0) | 0);
     }
     label$8 : {
      if ((HEAP32[($0_1 + 20 | 0) >> 2] | 0 | 0) == (HEAP32[($0_1 + 28 | 0) >> 2] | 0 | 0)) {
       break label$8
      }
      $1_1 = $114($0_1 | 0) | 0 | $1_1 | 0;
     }
     label$9 : {
      if ($2_1) {
       break label$9
      }
      $44($0_1 | 0);
     }
     $0_1 = HEAP32[($0_1 + 56 | 0) >> 2] | 0;
     if ($0_1) {
      continue label$5
     }
     break label$5;
    };
   }
   $49();
   return $1_1 | 0;
  }
  label$10 : {
   label$11 : {
    if ((HEAP32[($0_1 + 76 | 0) >> 2] | 0 | 0) >= (0 | 0)) {
     break label$11
    }
    $2_1 = 1;
    break label$10;
   }
   $2_1 = !($43($0_1 | 0) | 0);
  }
  label$12 : {
   label$13 : {
    label$14 : {
     if ((HEAP32[($0_1 + 20 | 0) >> 2] | 0 | 0) == (HEAP32[($0_1 + 28 | 0) >> 2] | 0 | 0)) {
      break label$14
     }
     FUNCTION_TABLE[HEAP32[($0_1 + 36 | 0) >> 2] | 0 | 0]($0_1, 0, 0) | 0;
     if (HEAP32[($0_1 + 20 | 0) >> 2] | 0) {
      break label$14
     }
     $1_1 = -1;
     if (!$2_1) {
      break label$13
     }
     break label$12;
    }
    label$15 : {
     $1_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
     $3_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
     if (($1_1 | 0) == ($3_1 | 0)) {
      break label$15
     }
     i64toi32_i32$1 = $1_1 - $3_1 | 0;
     i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
     i64toi32_i32$0 = FUNCTION_TABLE[HEAP32[($0_1 + 40 | 0) >> 2] | 0 | 0]($0_1, i64toi32_i32$1, i64toi32_i32$0, 1) | 0;
     i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
    }
    $1_1 = 0;
    HEAP32[($0_1 + 28 | 0) >> 2] = 0;
    i64toi32_i32$0 = $0_1;
    i64toi32_i32$1 = 0;
    HEAP32[($0_1 + 16 | 0) >> 2] = 0;
    HEAP32[($0_1 + 20 | 0) >> 2] = i64toi32_i32$1;
    i64toi32_i32$0 = $0_1;
    i64toi32_i32$1 = 0;
    HEAP32[($0_1 + 4 | 0) >> 2] = 0;
    HEAP32[($0_1 + 8 | 0) >> 2] = i64toi32_i32$1;
    if ($2_1) {
     break label$12
    }
   }
   $44($0_1 | 0);
  }
  return $1_1 | 0;
 }
 
 function $115($0_1) {
  $0_1 = $0_1 | 0;
  global$0 = $0_1;
 }
 
 function $116($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = (global$0 - $0_1 | 0) & -16 | 0;
  global$0 = $1_1;
  return $1_1 | 0;
 }
 
 function $117() {
  return global$0 | 0;
 }
 
 function $118($0_1, $1_1, $2_1, $2$hi, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $2$hi = $2$hi | 0;
  $3_1 = $3_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$0 = FUNCTION_TABLE[$0_1 | 0]($1_1, $2_1, i64toi32_i32$0, $3_1) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function $119($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $10_1 = 0, $3_1 = 0, $3$hi = 0, $6$hi = 0;
  i64toi32_i32$0 = 0;
  $3_1 = $0_1;
  $3$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $10_1 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $10_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $6$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $3$hi;
  i64toi32_i32$0 = $3_1;
  i64toi32_i32$2 = $6$hi;
  i64toi32_i32$3 = $10_1;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  return $29(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0) | 0 | 0;
 }
 
 function $120($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $10_1 = 0, $3_1 = 0, $3$hi = 0, $6$hi = 0;
  i64toi32_i32$0 = 0;
  $3_1 = $0_1;
  $3$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $10_1 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $10_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $6$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $3$hi;
  i64toi32_i32$0 = $3_1;
  i64toi32_i32$2 = $6$hi;
  i64toi32_i32$3 = $10_1;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  return $30(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0) | 0 | 0;
 }
 
 function $121($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $17_1 = 0, $18_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0, $9$hi = 0, $12$hi = 0, $5_1 = 0, $5$hi = 0;
  $6_1 = $0_1;
  $7_1 = $1_1;
  i64toi32_i32$0 = 0;
  $9_1 = $2_1;
  $9$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $3_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $17_1 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $17_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $12$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $9$hi;
  i64toi32_i32$0 = $9_1;
  i64toi32_i32$2 = $12$hi;
  i64toi32_i32$3 = $17_1;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$2 = $118($6_1 | 0, $7_1 | 0, i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0, $4_1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $5_1 = i64toi32_i32$2;
  $5$hi = i64toi32_i32$0;
  i64toi32_i32$1 = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $18_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $18_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
  }
  $108($18_1 | 0);
  i64toi32_i32$2 = $5$hi;
  return $5_1 | 0;
 }
 
 function $122($0_1, $1_1, $1$hi, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $12_1 = 0, $4_1 = 0, $6_1 = 0, i64toi32_i32$2 = 0;
  $4_1 = $0_1;
  i64toi32_i32$0 = $1$hi;
  $6_1 = $1_1;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $12_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $12_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  return fimport$5($4_1 | 0, $6_1 | 0, $12_1 | 0, $2_1 | 0, $3_1 | 0) | 0 | 0;
 }
 
 function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, var$2 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, var$3 = 0, var$4 = 0, var$5 = 0, $21_1 = 0, $22_1 = 0, var$6 = 0, $24_1 = 0, $17_1 = 0, $18_1 = 0, $23_1 = 0, $29_1 = 0, $45_1 = 0, $56$hi = 0, $62$hi = 0;
  i64toi32_i32$0 = var$1$hi;
  var$2 = var$1;
  var$4 = var$2 >>> 16 | 0;
  i64toi32_i32$0 = var$0$hi;
  var$3 = var$0;
  var$5 = var$3 >>> 16 | 0;
  $17_1 = Math_imul(var$4, var$5);
  $18_1 = var$2;
  i64toi32_i32$2 = var$3;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $21_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $21_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $23_1 = $17_1 + Math_imul($18_1, $21_1) | 0;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$0 = var$1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $22_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $22_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  $29_1 = $23_1 + Math_imul($22_1, var$3) | 0;
  var$2 = var$2 & 65535 | 0;
  var$3 = var$3 & 65535 | 0;
  var$6 = Math_imul(var$2, var$3);
  var$2 = (var$6 >>> 16 | 0) + Math_imul(var$2, var$5) | 0;
  $45_1 = $29_1 + (var$2 >>> 16 | 0) | 0;
  var$2 = (var$2 & 65535 | 0) + Math_imul(var$4, var$3) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $45_1 + (var$2 >>> 16 | 0) | 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   $24_1 = 0;
  } else {
   i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
   $24_1 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
  }
  $56$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $62$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $56$hi;
  i64toi32_i32$2 = $24_1;
  i64toi32_i32$1 = $62$hi;
  i64toi32_i32$3 = var$2 << 16 | 0 | (var$6 & 65535 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$2 | 0;
 }
 
 function _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, var$2 = 0, var$3 = 0, var$4 = 0, var$5 = 0, var$5$hi = 0, var$6 = 0, var$6$hi = 0, i64toi32_i32$6 = 0, $37_1 = 0, $38_1 = 0, $39_1 = 0, $40_1 = 0, $41_1 = 0, $42_1 = 0, $43_1 = 0, $44_1 = 0, var$8$hi = 0, $45_1 = 0, $46_1 = 0, $47_1 = 0, $48_1 = 0, var$7$hi = 0, $49_1 = 0, $63$hi = 0, $65_1 = 0, $65$hi = 0, $120$hi = 0, $129$hi = 0, $134$hi = 0, var$8 = 0, $140 = 0, $140$hi = 0, $142$hi = 0, $144 = 0, $144$hi = 0, $151 = 0, $151$hi = 0, $154$hi = 0, var$7 = 0, $165$hi = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             i64toi32_i32$0 = var$0$hi;
             i64toi32_i32$2 = var$0;
             i64toi32_i32$1 = 0;
             i64toi32_i32$3 = 32;
             i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
             if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
              i64toi32_i32$1 = 0;
              $37_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
             } else {
              i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
              $37_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
             }
             var$2 = $37_1;
             if (var$2) {
              i64toi32_i32$1 = var$1$hi;
              var$3 = var$1;
              if (!var$3) {
               break label$11
              }
              i64toi32_i32$0 = var$3;
              i64toi32_i32$2 = 0;
              i64toi32_i32$3 = 32;
              i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
              if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
               i64toi32_i32$2 = 0;
               $38_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
              } else {
               i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
               $38_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
              }
              var$4 = $38_1;
              if (!var$4) {
               break label$9
              }
              var$2 = Math_clz32(var$4) - Math_clz32(var$2) | 0;
              if (var$2 >>> 0 <= 31 >>> 0) {
               break label$8
              }
              break label$2;
             }
             i64toi32_i32$2 = var$1$hi;
             i64toi32_i32$1 = var$1;
             i64toi32_i32$0 = 1;
             i64toi32_i32$3 = 0;
             if (i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) {
              break label$2
             }
             i64toi32_i32$1 = var$0$hi;
             var$2 = var$0;
             i64toi32_i32$1 = i64toi32_i32$2;
             i64toi32_i32$1 = i64toi32_i32$2;
             var$3 = var$1;
             var$2 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
             i64toi32_i32$1 = 0;
             __wasm_intrinsics_temp_i64 = var$0 - Math_imul(var$2, var$3) | 0;
             __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
             i64toi32_i32$1 = 0;
             i64toi32_i32$2 = var$2;
             i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
             return i64toi32_i32$2 | 0;
            }
            i64toi32_i32$2 = var$1$hi;
            i64toi32_i32$3 = var$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$1 = 0;
             $39_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
            } else {
             i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
             $39_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
            }
            var$3 = $39_1;
            i64toi32_i32$1 = var$0$hi;
            if (!var$0) {
             break label$7
            }
            if (!var$3) {
             break label$6
            }
            var$4 = var$3 + -1 | 0;
            if (var$4 & var$3 | 0) {
             break label$6
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$2 = var$4 & var$2 | 0;
            i64toi32_i32$3 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$3 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
             $40_1 = 0;
            } else {
             i64toi32_i32$3 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
             $40_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
            }
            $63$hi = i64toi32_i32$3;
            i64toi32_i32$3 = var$0$hi;
            i64toi32_i32$1 = var$0;
            i64toi32_i32$2 = 0;
            i64toi32_i32$0 = -1;
            i64toi32_i32$2 = i64toi32_i32$3 & i64toi32_i32$2 | 0;
            $65_1 = i64toi32_i32$1 & i64toi32_i32$0 | 0;
            $65$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $63$hi;
            i64toi32_i32$3 = $40_1;
            i64toi32_i32$1 = $65$hi;
            i64toi32_i32$0 = $65_1;
            i64toi32_i32$1 = i64toi32_i32$2 | i64toi32_i32$1 | 0;
            __wasm_intrinsics_temp_i64 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
            __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = var$2 >>> ((__wasm_ctz_i32(var$3 | 0) | 0) & 31 | 0) | 0;
            i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
            return i64toi32_i32$3 | 0;
           }
          }
          var$4 = var$3 + -1 | 0;
          if (!(var$4 & var$3 | 0)) {
           break label$5
          }
          var$2 = (Math_clz32(var$3) + 33 | 0) - Math_clz32(var$2) | 0;
          var$3 = 0 - var$2 | 0;
          break label$3;
         }
         var$3 = 63 - var$2 | 0;
         var$2 = var$2 + 1 | 0;
         break label$3;
        }
        var$4 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
        i64toi32_i32$3 = 0;
        i64toi32_i32$2 = var$2 - Math_imul(var$4, var$3) | 0;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 32;
        i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
         $41_1 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
         $41_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
        }
        __wasm_intrinsics_temp_i64 = $41_1;
        __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
        i64toi32_i32$1 = 0;
        i64toi32_i32$2 = var$4;
        i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
        return i64toi32_i32$2 | 0;
       }
       var$2 = Math_clz32(var$3) - Math_clz32(var$2) | 0;
       if (var$2 >>> 0 < 31 >>> 0) {
        break label$4
       }
       break label$2;
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      __wasm_intrinsics_temp_i64 = var$4 & var$0 | 0;
      __wasm_intrinsics_temp_i64$hi = i64toi32_i32$2;
      if ((var$3 | 0) == (1 | 0)) {
       break label$1
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      $120$hi = i64toi32_i32$2;
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$3 = var$0;
      i64toi32_i32$1 = $120$hi;
      i64toi32_i32$0 = __wasm_ctz_i32(var$3 | 0) | 0;
      i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
       i64toi32_i32$1 = 0;
       $42_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
      } else {
       i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
       $42_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
      }
      i64toi32_i32$3 = $42_1;
      i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
      return i64toi32_i32$3 | 0;
     }
     var$3 = 63 - var$2 | 0;
     var$2 = var$2 + 1 | 0;
    }
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$3 = 0;
    $129$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$2 = var$0;
    i64toi32_i32$1 = $129$hi;
    i64toi32_i32$0 = var$2 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $43_1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
     $43_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$3 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    var$5 = $43_1;
    var$5$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$1 = 0;
    $134$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$3 = var$0;
    i64toi32_i32$2 = $134$hi;
    i64toi32_i32$0 = var$3 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
     $44_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
     $44_1 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
    }
    var$0 = $44_1;
    var$0$hi = i64toi32_i32$2;
    label$13 : {
     if (var$2) {
      i64toi32_i32$2 = var$1$hi;
      i64toi32_i32$1 = var$1;
      i64toi32_i32$3 = -1;
      i64toi32_i32$0 = -1;
      i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
      i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
      if (i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0) {
       i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
      }
      var$8 = i64toi32_i32$4;
      var$8$hi = i64toi32_i32$5;
      label$15 : while (1) {
       i64toi32_i32$5 = var$5$hi;
       i64toi32_i32$2 = var$5;
       i64toi32_i32$1 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
        $45_1 = 0;
       } else {
        i64toi32_i32$1 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$5 << i64toi32_i32$3 | 0) | 0;
        $45_1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
       }
       $140 = $45_1;
       $140$hi = i64toi32_i32$1;
       i64toi32_i32$1 = var$0$hi;
       i64toi32_i32$5 = var$0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 63;
       i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = 0;
        $46_1 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
       } else {
        i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
        $46_1 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$3 | 0) | 0;
       }
       $142$hi = i64toi32_i32$2;
       i64toi32_i32$2 = $140$hi;
       i64toi32_i32$1 = $140;
       i64toi32_i32$5 = $142$hi;
       i64toi32_i32$0 = $46_1;
       i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
       var$5 = i64toi32_i32$1 | i64toi32_i32$0 | 0;
       var$5$hi = i64toi32_i32$5;
       $144 = var$5;
       $144$hi = i64toi32_i32$5;
       i64toi32_i32$5 = var$8$hi;
       i64toi32_i32$5 = var$5$hi;
       i64toi32_i32$5 = var$8$hi;
       i64toi32_i32$2 = var$8;
       i64toi32_i32$1 = var$5$hi;
       i64toi32_i32$0 = var$5;
       i64toi32_i32$3 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
       i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
       i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
       i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
       i64toi32_i32$5 = i64toi32_i32$3;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 63;
       i64toi32_i32$1 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = i64toi32_i32$4 >> 31 | 0;
        $47_1 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
       } else {
        i64toi32_i32$2 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
        $47_1 = (((1 << i64toi32_i32$1 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$1 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$1 | 0) | 0;
       }
       var$6 = $47_1;
       var$6$hi = i64toi32_i32$2;
       i64toi32_i32$2 = var$1$hi;
       i64toi32_i32$2 = var$6$hi;
       i64toi32_i32$4 = var$6;
       i64toi32_i32$5 = var$1$hi;
       i64toi32_i32$0 = var$1;
       i64toi32_i32$5 = i64toi32_i32$2 & i64toi32_i32$5 | 0;
       $151 = i64toi32_i32$4 & i64toi32_i32$0 | 0;
       $151$hi = i64toi32_i32$5;
       i64toi32_i32$5 = $144$hi;
       i64toi32_i32$2 = $144;
       i64toi32_i32$4 = $151$hi;
       i64toi32_i32$0 = $151;
       i64toi32_i32$1 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
       i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
       i64toi32_i32$3 = i64toi32_i32$6 + i64toi32_i32$4 | 0;
       i64toi32_i32$3 = i64toi32_i32$5 - i64toi32_i32$3 | 0;
       var$5 = i64toi32_i32$1;
       var$5$hi = i64toi32_i32$3;
       i64toi32_i32$3 = var$0$hi;
       i64toi32_i32$5 = var$0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
        $48_1 = 0;
       } else {
        i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
        $48_1 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
       }
       $154$hi = i64toi32_i32$2;
       i64toi32_i32$2 = var$7$hi;
       i64toi32_i32$2 = $154$hi;
       i64toi32_i32$3 = $48_1;
       i64toi32_i32$5 = var$7$hi;
       i64toi32_i32$0 = var$7;
       i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
       var$0 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
       var$0$hi = i64toi32_i32$5;
       i64toi32_i32$5 = var$6$hi;
       i64toi32_i32$2 = var$6;
       i64toi32_i32$3 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$3 = i64toi32_i32$5 & i64toi32_i32$3 | 0;
       var$6 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
       var$6$hi = i64toi32_i32$3;
       var$7 = var$6;
       var$7$hi = i64toi32_i32$3;
       var$2 = var$2 + -1 | 0;
       if (var$2) {
        continue label$15
       }
       break label$15;
      };
      break label$13;
     }
    }
    i64toi32_i32$3 = var$5$hi;
    __wasm_intrinsics_temp_i64 = var$5;
    __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$5 = var$0;
    i64toi32_i32$2 = 0;
    i64toi32_i32$0 = 1;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
     $49_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
     $49_1 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
    }
    $165$hi = i64toi32_i32$2;
    i64toi32_i32$2 = var$6$hi;
    i64toi32_i32$2 = $165$hi;
    i64toi32_i32$3 = $49_1;
    i64toi32_i32$5 = var$6$hi;
    i64toi32_i32$0 = var$6;
    i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
    i64toi32_i32$3 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
    i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
    return i64toi32_i32$3 | 0;
   }
   i64toi32_i32$3 = var$0$hi;
   __wasm_intrinsics_temp_i64 = var$0;
   __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
   i64toi32_i32$3 = 0;
   var$0 = 0;
   var$0$hi = i64toi32_i32$3;
  }
  i64toi32_i32$3 = var$0$hi;
  i64toi32_i32$5 = var$0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
  return i64toi32_i32$5 | 0;
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + -1 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
 }
 
 function __wasm_i64_mul(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_i64_udiv(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_rotl_i32(var$0, var$1) {
  var$0 = var$0 | 0;
  var$1 = var$1 | 0;
  var var$2 = 0;
  var$2 = var$1 & 31 | 0;
  var$1 = (0 - var$1 | 0) & 31 | 0;
  return ((-1 >>> var$2 | 0) & var$0 | 0) << var$2 | 0 | (((-1 << var$1 | 0) & var$0 | 0) >>> var$1 | 0) | 0 | 0;
 }
 
 // EMSCRIPTEN_END_FUNCS
;
 bufferView = HEAPU8;
 initActiveSegments(imports);
 var FUNCTION_TABLE = Table([null, $69, $70, $72, $90, $91, $94]);
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "__wasm_call_ctors": $0, 
  "__SUB_INTEGER_OR_NEGATIVE__": $1, 
  "strlen_runtime": $39, 
  "__START_NUMBER__": $16, 
  "__END_NUMBER__": $17, 
  "__IS_CURRENT_CHARSET_ZERO__": $15, 
  "__IS_SIGN_NEGATIVE__": $36, 
  "__ADD_INTEGER_AND_POSITIVE__": $2, 
  "__GET_SIGN_NEGATIVE__": $31, 
  "__CMP_CHARSET__": $20, 
  "__SUB_INTEGER_AND_POSITIVE__": $3, 
  "__GET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__": $10, 
  "__INDEX_OF_CURRENT_CHARSET__": $18, 
  "__CHARSET_AT__": $13, 
  "__ADD_INTEGER_OR_NEGATIVE__": $4, 
  "__SUB_INTEGER__": $5, 
  "__ADD_INTEGER__": $6, 
  "__ADD_REP_INTEGER__": $7, 
  "__MUL_INTEGER__": $8, 
  "__indirect_function_table": FUNCTION_TABLE, 
  "__SAFE_CALC_INIT__": $9, 
  "__SAFE_SET_SIGN_NEGATIVE__": $32, 
  "__SAFE_SET_SIGN_POSITIVE__": $34, 
  "__SAFE_SET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__": $11, 
  "__SET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__": $12, 
  "__IS_CURRENT_NUMBER_CHARSET__": $14, 
  "__CMP_CURRENT_CHARSET__": $19, 
  "ctoa": $21, 
  "uctoa": $22, 
  "stoa": $23, 
  "ustoa": $24, 
  "itoa": $25, 
  "uitoa": $26, 
  "ltoa": $27, 
  "ultoa": $28, 
  "lltoa": $119, 
  "ulltoa": $120, 
  "__SET_SIGN_POSITIVE__": $35, 
  "__IS_SIGN_POSITIVE__": $37, 
  "__IS_SIGN_NULL__": $38, 
  "fflush": $114, 
  "strerror": $74, 
  "malloc": $101, 
  "emscripten_stack_init": $110, 
  "emscripten_stack_get_free": $111, 
  "emscripten_stack_get_base": $112, 
  "emscripten_stack_get_end": $113, 
  "_emscripten_stack_restore": $115, 
  "_emscripten_stack_alloc": $116, 
  "emscripten_stack_get_current": $117, 
  "dynCall_jiji": $121
 };
}

  return asmFunc(info);
}

)(info);
  },

  instantiate: /** @suppress{checkTypes} */ function(binary, info) {
    return {
      then: function(ok) {
        var module = new WebAssembly.Module(binary);
        ok({
          'instance': new WebAssembly.Instance(module, info)
        });
        // Emulate a simple WebAssembly.instantiate(..).then(()=>{}).catch(()=>{}) syntax.
        return { catch: function() {} };
      }
    };
  },

  RuntimeError: Error,

  isWasm2js: true,
};
// end include: wasm2js.js
if (WebAssembly.isWasm2js) {
  // We don't need to actually download a wasm binary, mark it as present but
  // empty.
  wasmBinary = [];
}

if (typeof WebAssembly != 'object') {
  err('no native wasm support detected');
}

// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

// In STRICT mode, we only define assert() when ASSERTIONS is set.  i.e. we
// don't define it at all in release modes.  This matches the behaviour of
// MINIMAL_RUNTIME.
// TODO(sbc): Make this the default even without STRICT enabled.
/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed' + (text ? ': ' + text : ''));
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.
function _free() {
  // Show a helpful error since we used to include free by default in the past.
  abort('free() called but not included in the build - add `_free` to EXPORTED_FUNCTIONS');
}

// Memory management

var HEAP,
/** @type {!Int8Array} */
  HEAP8,
/** @type {!Uint8Array} */
  HEAPU8,
/** @type {!Int16Array} */
  HEAP16,
/** @type {!Uint16Array} */
  HEAPU16,
/** @type {!Int32Array} */
  HEAP32,
/** @type {!Uint32Array} */
  HEAPU32,
/** @type {!Float32Array} */
  HEAPF32,
/** @type {!Float64Array} */
  HEAPF64;

// include: runtime_shared.js
function updateMemoryViews() {
  var b = wasmMemory.buffer;
  Module['HEAP8'] = HEAP8 = new Int8Array(b);
  Module['HEAP16'] = HEAP16 = new Int16Array(b);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(b);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(b);
  Module['HEAP32'] = HEAP32 = new Int32Array(b);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(b);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(b);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(b);
}

// end include: runtime_shared.js
assert(!Module['STACK_SIZE'], 'STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time')

assert(typeof Int32Array != 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined,
       'JS engine does not provide full typed array support');

// If memory is defined in wasm, the user can't provide it, or set INITIAL_MEMORY
assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally');
assert(!Module['INITIAL_MEMORY'], 'Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically');

// include: runtime_stack_check.js
// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // If the stack ends at address zero we write our cookies 4 bytes into the
  // stack.  This prevents interference with SAFE_HEAP and ASAN which also
  // monitor writes to address zero.
  if (max == 0) {
    max += 4;
  }
  // The stack grow downwards towards _emscripten_stack_get_end.
  // We write cookies to the final two words in the stack and detect if they are
  // ever overwritten.
  HEAPU32[((max)>>2)] = 0x02135467;
  HEAPU32[(((max)+(4))>>2)] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAPU32[((0)>>2)] = 1668509029;
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  // See writeStackCookie().
  if (max == 0) {
    max += 4;
  }
  var cookie1 = HEAPU32[((max)>>2)];
  var cookie2 = HEAPU32[(((max)+(4))>>2)];
  if (cookie1 != 0x02135467 || cookie2 != 0x89BACDFE) {
    abort(`Stack overflow! Stack cookie has been overwritten at ${ptrToString(max)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ptrToString(cookie2)} ${ptrToString(cookie1)}`);
  }
  // Also test the global address 0 for integrity.
  if (HEAPU32[((0)>>2)] != 0x63736d65 /* 'emsc' */) {
    abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
  }
}
// end include: runtime_stack_check.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;

function preRun() {
  var preRuns = Module['preRun'];
  if (preRuns) {
    if (typeof preRuns == 'function') preRuns = [preRuns];
    preRuns.forEach(addOnPreRun);
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  assert(!runtimeInitialized);
  runtimeInitialized = true;

  checkStackCookie();

  
  callRuntimeCallbacks(__ATINIT__);
}

function postRun() {
  checkStackCookie();

  var postRuns = Module['postRun'];
  if (postRuns) {
    if (typeof postRuns == 'function') postRuns = [postRuns];
    postRuns.forEach(addOnPostRun);
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  Module['monitorRunDependencies']?.(runDependencies);

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval != 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(() => {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err(`dependency: ${dep}`);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  Module['monitorRunDependencies']?.(runDependencies);

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

/** @param {string|number=} what */
function abort(what) {
  Module['onAbort']?.(what);

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // definition for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// include: memoryprofiler.js
// end include: memoryprofiler.js
// show errors on likely calls to FS when it was not included
var FS = {
  error() {
    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM');
  },
  init() { FS.error() },
  createDataFile() { FS.error() },
  createPreloadedFile() { FS.error() },
  createLazyFile() { FS.error() },
  open() { FS.error() },
  mkdev() { FS.error() },
  registerDevice() { FS.error() },
  analyzePath() { FS.error() },

  ErrnoError() { FS.error() },
};
Module['FS_createDataFile'] = FS.createDataFile;
Module['FS_createPreloadedFile'] = FS.createPreloadedFile;

// include: URIUtils.js
// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

/**
 * Indicates whether filename is a base64 data URI.
 * @noinline
 */
var isDataURI = (filename) => filename.startsWith(dataURIPrefix);

/**
 * Indicates whether filename is delivered via file protocol (as opposed to http/https)
 * @noinline
 */
var isFileURI = (filename) => filename.startsWith('file://');
// end include: URIUtils.js
function createExportWrapper(name, nargs) {
  return (...args) => {
    assert(runtimeInitialized, `native function \`${name}\` called before runtime initialization`);
    var f = wasmExports[name];
    assert(f, `exported native function \`${name}\` not found`);
    // Only assert for too many arguments. Too few can be valid since the missing arguments will be zero filled.
    assert(args.length <= nargs, `native function \`${name}\` called with ${args.length} args but expects ${nargs}`);
    return f(...args);
  };
}

// include: runtime_exceptions.js
// end include: runtime_exceptions.js
function findWasmBinary() {
    var f = 'index.wasm';
    if (!isDataURI(f)) {
      return locateFile(f);
    }
    return f;
}

var wasmBinaryFile;

function getBinarySync(file) {
  if (file == wasmBinaryFile && wasmBinary) {
    return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
    return readBinary(file);
  }
  throw 'both async and sync fetching of the wasm failed';
}

function getBinaryPromise(binaryFile) {
  // If we don't have the binary yet, load it asynchronously using readAsync.
  if (!wasmBinary
      ) {
    // Fetch the binary using readAsync
    return readAsync(binaryFile).then(
      (response) => new Uint8Array(/** @type{!ArrayBuffer} */(response)),
      // Fall back to getBinarySync if readAsync fails
      () => getBinarySync(binaryFile)
    );
  }

  // Otherwise, getBinarySync should be able to get it synchronously
  return Promise.resolve().then(() => getBinarySync(binaryFile));
}

function instantiateArrayBuffer(binaryFile, imports, receiver) {
  return getBinaryPromise(binaryFile).then((binary) => {
    return WebAssembly.instantiate(binary, imports);
  }).then(receiver, (reason) => {
    err(`failed to asynchronously prepare wasm: ${reason}`);

    // Warn on some common problems.
    if (isFileURI(wasmBinaryFile)) {
      err(`warning: Loading from a file URI (${wasmBinaryFile}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`);
    }
    abort(reason);
  });
}

function instantiateAsync(binary, binaryFile, imports, callback) {
  if (!binary &&
      typeof WebAssembly.instantiateStreaming == 'function' &&
      !isDataURI(binaryFile) &&
      // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
      !isFileURI(binaryFile) &&
      // Avoid instantiateStreaming() on Node.js environment for now, as while
      // Node.js v18.1.0 implements it, it does not have a full fetch()
      // implementation yet.
      //
      // Reference:
      //   https://github.com/emscripten-core/emscripten/pull/16917
      !ENVIRONMENT_IS_NODE &&
      typeof fetch == 'function') {
    return fetch(binaryFile, { credentials: 'same-origin' }).then((response) => {
      // Suppress closure warning here since the upstream definition for
      // instantiateStreaming only allows Promise<Repsponse> rather than
      // an actual Response.
      // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure is fixed.
      /** @suppress {checkTypes} */
      var result = WebAssembly.instantiateStreaming(response, imports);

      return result.then(
        callback,
        function(reason) {
          // We expect the most common failure cause to be a bad MIME type for the binary,
          // in which case falling back to ArrayBuffer instantiation should work.
          err(`wasm streaming compile failed: ${reason}`);
          err('falling back to ArrayBuffer instantiation');
          return instantiateArrayBuffer(binaryFile, imports, callback);
        });
    });
  }
  return instantiateArrayBuffer(binaryFile, imports, callback);
}

function getWasmImports() {
  // prepare imports
  return {
    'env': wasmImports,
    'wasi_snapshot_preview1': wasmImports,
  }
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  var info = getWasmImports();
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    wasmExports = instance.exports;

    

    wasmMemory = wasmExports['memory'];
    
    assert(wasmMemory, 'memory not found in wasm exports');
    updateMemoryViews();

    addOnInit(wasmExports['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');
    return wasmExports;
  }
  // wait for the pthread pool (if any)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to
  // run the instantiation parallel to any other async startup actions they are
  // performing.
  // Also pthreads and wasm workers initialize the wasm instance through this
  // path.
  if (Module['instantiateWasm']) {
    try {
      return Module['instantiateWasm'](info, receiveInstance);
    } catch(e) {
      err(`Module.instantiateWasm callback failed with error: ${e}`);
        // If instantiation fails, reject the module ready promise.
        readyPromiseReject(e);
    }
  }

  wasmBinaryFile ??= findWasmBinary();

  // If instantiation fails, reject the module ready promise.
  instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// include: runtime_debug.js
// Endianness check
(() => {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)';
})();

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)');
}

function legacyModuleProp(prop, newName, incoming=true) {
  if (!Object.getOwnPropertyDescriptor(Module, prop)) {
    Object.defineProperty(Module, prop, {
      configurable: true,
      get() {
        let extra = incoming ? ' (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)' : '';
        abort(`\`Module.${prop}\` has been replaced by \`${newName}\`` + extra);

      }
    });
  }
}

function ignoredModuleProp(prop) {
  if (Object.getOwnPropertyDescriptor(Module, prop)) {
    abort(`\`Module.${prop}\` was supplied but \`${prop}\` not included in INCOMING_MODULE_JS_API`);
  }
}

// forcing the filesystem exports a few things by default
function isExportedByForceFilesystem(name) {
  return name === 'FS_createPath' ||
         name === 'FS_createDataFile' ||
         name === 'FS_createPreloadedFile' ||
         name === 'FS_unlink' ||
         name === 'addRunDependency' ||
         // The old FS has some functionality that WasmFS lacks.
         name === 'FS_createLazyFile' ||
         name === 'FS_createDevice' ||
         name === 'removeRunDependency';
}

/**
 * Intercept access to a global symbol.  This enables us to give informative
 * warnings/errors when folks attempt to use symbols they did not include in
 * their build, or no symbols that no longer exist.
 */
function hookGlobalSymbolAccess(sym, func) {
  // In MODULARIZE mode the generated code runs inside a function scope and not
  // the global scope, and JavaScript does not provide access to function scopes
  // so we cannot dynamically modify the scrope using `defineProperty` in this
  // case.
  //
  // In this mode we simply ignore requests for `hookGlobalSymbolAccess`. Since
  // this is a debug-only feature, skipping it is not major issue.
}

function missingGlobal(sym, msg) {
  hookGlobalSymbolAccess(sym, () => {
    warnOnce(`\`${sym}\` is not longer defined by emscripten. ${msg}`);
  });
}

missingGlobal('buffer', 'Please use HEAP8.buffer or wasmMemory.buffer');
missingGlobal('asm', 'Please use wasmExports instead');

function missingLibrarySymbol(sym) {
  hookGlobalSymbolAccess(sym, () => {
    // Can't `abort()` here because it would break code that does runtime
    // checks.  e.g. `if (typeof SDL === 'undefined')`.
    var msg = `\`${sym}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`;
    // DEFAULT_LIBRARY_FUNCS_TO_INCLUDE requires the name as it appears in
    // library.js, which means $name for a JS name with no prefix, or name
    // for a JS name like _name.
    var librarySymbol = sym;
    if (!librarySymbol.startsWith('_')) {
      librarySymbol = '$' + sym;
    }
    msg += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${librarySymbol}')`;
    if (isExportedByForceFilesystem(sym)) {
      msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
    }
    warnOnce(msg);
  });

  // Any symbol that is not included from the JS library is also (by definition)
  // not exported on the Module object.
  unexportedRuntimeSymbol(sym);
}

function unexportedRuntimeSymbol(sym) {
  if (!Object.getOwnPropertyDescriptor(Module, sym)) {
    Object.defineProperty(Module, sym, {
      configurable: true,
      get() {
        var msg = `'${sym}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
        if (isExportedByForceFilesystem(sym)) {
          msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
        }
        abort(msg);
      }
    });
  }
}

// Used by XXXXX_DEBUG settings to output debug messages.
function dbg(...args) {
  // TODO(sbc): Make this configurable somehow.  Its not always convenient for
  // logging to show up as warnings.
  console.warn(...args);
}
// end include: runtime_debug.js
// === Body ===
// end include: preamble.js


  /** @constructor */
  function ExitStatus(status) {
      this.name = 'ExitStatus';
      this.message = `Program terminated with exit(${status})`;
      this.status = status;
    }

  var callRuntimeCallbacks = (callbacks) => {
      // Pass the module as the first argument.
      callbacks.forEach((f) => f(Module));
    };

  
    /**
     * @param {number} ptr
     * @param {string} type
     */
  function getValue(ptr, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': return HEAP8[ptr];
      case 'i8': return HEAP8[ptr];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': abort('to do getValue(i64) use WASM_BIGINT');
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      case '*': return HEAPU32[((ptr)>>2)];
      default: abort(`invalid type for getValue: ${type}`);
    }
  }

  var noExitRuntime = Module['noExitRuntime'] || true;

  var ptrToString = (ptr) => {
      assert(typeof ptr === 'number');
      // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
      ptr >>>= 0;
      return '0x' + ptr.toString(16).padStart(8, '0');
    };

  
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */
  function setValue(ptr, value, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': HEAP8[ptr] = value; break;
      case 'i8': HEAP8[ptr] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': abort('to do setValue(i64) use WASM_BIGINT');
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      case '*': HEAPU32[((ptr)>>2)] = value; break;
      default: abort(`invalid type for setValue: ${type}`);
    }
  }

  var stackRestore = (val) => __emscripten_stack_restore(val);

  var stackSave = () => _emscripten_stack_get_current();

  var warnOnce = (text) => {
      warnOnce.shown ||= {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        if (ENVIRONMENT_IS_NODE) text = 'warning: ' + text;
        err(text);
      }
    };

  var __abort_js = () => {
      abort('native code called abort()');
    };

  var __emscripten_memcpy_js = (dest, src, num) => HEAPU8.copyWithin(dest, src, src + num);

  var getHeapMax = () =>
      HEAPU8.length;
  
  var alignMemory = (size, alignment) => {
      assert(alignment, "alignment argument is required");
      return Math.ceil(size / alignment) * alignment;
    };
  
  var abortOnCannotGrowMemory = (requestedSize) => {
      abort(`Cannot enlarge memory arrays to size ${requestedSize} bytes (OOM). Either (1) compile with -sINITIAL_MEMORY=X with X higher than the current value ${HEAP8.length}, (2) compile with -sALLOW_MEMORY_GROWTH which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with -sABORTING_MALLOC=0`);
    };
  var _emscripten_resize_heap = (requestedSize) => {
      var oldSize = HEAPU8.length;
      // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
      requestedSize >>>= 0;
      abortOnCannotGrowMemory(requestedSize);
    };

  var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder() : undefined;
  
    /**
     * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
     * array that contains uint8 values, returns a copy of that string as a
     * Javascript String object.
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number=} idx
     * @param {number=} maxBytesToRead
     * @return {string}
     */
  var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead = NaN) => {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      // TextDecoder needs to know the byte length in advance, it doesn't stop on
      // null terminator by itself.  Also, use the length info to avoid running tiny
      // strings through TextDecoder, since .subarray() allocates garbage.
      // (As a tiny code save trick, compare endPtr against endIdx using a negation,
      // so that undefined/NaN means Infinity)
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = '';
      // If building with TextDecoder, we have already computed the string length
      // above, so test loop end condition against that
      while (idx < endPtr) {
        // For UTF8 byte structure, see:
        // http://en.wikipedia.org/wiki/UTF-8#Description
        // https://www.ietf.org/rfc/rfc2279.txt
        // https://tools.ietf.org/html/rfc3629
        var u0 = heapOrArray[idx++];
        if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 0xF0) == 0xE0) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte ' + ptrToString(u0) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
        }
  
        if (u0 < 0x10000) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 0x10000;
          str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        }
      }
      return str;
    };
  
    /**
     * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
     * emscripten HEAP, returns a copy of that string as a Javascript String object.
     *
     * @param {number} ptr
     * @param {number=} maxBytesToRead - An optional length that specifies the
     *   maximum number of bytes to read. You can omit this parameter to scan the
     *   string until the first 0 byte. If maxBytesToRead is passed, and the string
     *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
     *   string will cut short at that byte index (i.e. maxBytesToRead will not
     *   produce a string of exact length [ptr, ptr+maxBytesToRead[) N.B. mixing
     *   frequent uses of UTF8ToString() with and without maxBytesToRead may throw
     *   JS JIT optimizations off, so it is worth to consider consistently using one
     * @return {string}
     */
  var UTF8ToString = (ptr, maxBytesToRead) => {
      assert(typeof ptr == 'number', `UTF8ToString expects a number (got ${typeof ptr})`);
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
    };
  var SYSCALLS = {
  varargs:undefined,
  getStr(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
  };
  var _fd_close = (fd) => {
      abort('fd_close called without SYSCALLS_REQUIRE_FILESYSTEM');
    };

  var convertI32PairToI53Checked = (lo, hi) => {
      assert(lo == (lo >>> 0) || lo == (lo|0)); // lo should either be a i32 or a u32
      assert(hi === (hi|0));                    // hi should be a i32
      return ((hi + 0x200000) >>> 0 < 0x400001 - !!lo) ? (lo >>> 0) + hi * 4294967296 : NaN;
    };
  function _fd_seek(fd,offset_low, offset_high,whence,newOffset) {
    var offset = convertI32PairToI53Checked(offset_low, offset_high);
  
    
      return 70;
    ;
  }

  var printCharBuffers = [null,[],[]];
  
  var printChar = (stream, curr) => {
      var buffer = printCharBuffers[stream];
      assert(buffer);
      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer));
        buffer.length = 0;
      } else {
        buffer.push(curr);
      }
    };
  
  var flush_NO_FILESYSTEM = () => {
      // flush anything remaining in the buffers during shutdown
      _fflush(0);
      if (printCharBuffers[1].length) printChar(1, 10);
      if (printCharBuffers[2].length) printChar(2, 10);
    };
  
  
  var _fd_write = (fd, iov, iovcnt, pnum) => {
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        for (var j = 0; j < len; j++) {
          printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    };

  var getCFunc = (ident) => {
      var func = Module['_' + ident]; // closure exported function
      assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
      return func;
    };
  
  
  var writeArrayToMemory = (array, buffer) => {
      assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
      HEAP8.set(array, buffer);
    };
  
  var lengthBytesUTF8 = (str) => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var c = str.charCodeAt(i); // possibly a lead surrogate
        if (c <= 0x7F) {
          len++;
        } else if (c <= 0x7FF) {
          len += 2;
        } else if (c >= 0xD800 && c <= 0xDFFF) {
          len += 4; ++i;
        } else {
          len += 3;
        }
      }
      return len;
    };
  
  var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
      assert(typeof str === 'string', `stringToUTF8Array expects a string (got ${typeof str})`);
      // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
      // undefined and false each don't write out any bytes.
      if (!(maxBytesToWrite > 0))
        return 0;
  
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
        // and https://www.ietf.org/rfc/rfc2279.txt
        // and https://tools.ietf.org/html/rfc3629
        var u = str.charCodeAt(i); // possibly a lead surrogate
        if (u >= 0xD800 && u <= 0xDFFF) {
          var u1 = str.charCodeAt(++i);
          u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
        }
        if (u <= 0x7F) {
          if (outIdx >= endIdx) break;
          heap[outIdx++] = u;
        } else if (u <= 0x7FF) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++] = 0xC0 | (u >> 6);
          heap[outIdx++] = 0x80 | (u & 63);
        } else if (u <= 0xFFFF) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++] = 0xE0 | (u >> 12);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        } else {
          if (outIdx + 3 >= endIdx) break;
          if (u > 0x10FFFF) warnOnce('Invalid Unicode code point ' + ptrToString(u) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).');
          heap[outIdx++] = 0xF0 | (u >> 18);
          heap[outIdx++] = 0x80 | ((u >> 12) & 63);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        }
      }
      // Null-terminate the pointer to the buffer.
      heap[outIdx] = 0;
      return outIdx - startIdx;
    };
  var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
      assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    };
  
  var stackAlloc = (sz) => __emscripten_stack_alloc(sz);
  var stringToUTF8OnStack = (str) => {
      var size = lengthBytesUTF8(str) + 1;
      var ret = stackAlloc(size);
      stringToUTF8(str, ret, size);
      return ret;
    };
  
  
  
  
  
    /**
     * @param {string|null=} returnType
     * @param {Array=} argTypes
     * @param {Arguments|Array=} args
     * @param {Object=} opts
     */
  var ccall = (ident, returnType, argTypes, args, opts) => {
      // For fast lookup of conversion functions
      var toC = {
        'string': (str) => {
          var ret = 0;
          if (str !== null && str !== undefined && str !== 0) { // null string
            ret = stringToUTF8OnStack(str);
          }
          return ret;
        },
        'array': (arr) => {
          var ret = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret);
          return ret;
        }
      };
  
      function convertReturnValue(ret) {
        if (returnType === 'string') {
          return UTF8ToString(ret);
        }
        if (returnType === 'boolean') return Boolean(ret);
        return ret;
      }
  
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      assert(returnType !== 'array', 'Return type should not be "array".');
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0) stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      var ret = func(...cArgs);
      function onDone(ret) {
        if (stack !== 0) stackRestore(stack);
        return convertReturnValue(ret);
      }
  
      ret = onDone(ret);
      return ret;
    };
  
    /**
     * @param {string=} returnType
     * @param {Array=} argTypes
     * @param {Object=} opts
     */
  var cwrap = (ident, returnType, argTypes, opts) => {
      return (...args) => ccall(ident, returnType, argTypes, args, opts);
    };


  
  
  
  /** @suppress {duplicate } */
  var stringToNewUTF8 = (str) => {
      var size = lengthBytesUTF8(str) + 1;
      var ret = _malloc(size);
      if (ret) stringToUTF8(str, ret, size);
      return ret;
    };
  var allocateUTF8 = stringToNewUTF8;

  
  var allocateUTF8OnStack = stringToUTF8OnStack;

function checkIncomingModuleAPI() {
  ignoredModuleProp('fetchSettings');
}
var wasmImports = {
  /** @export */
  _abort_js: __abort_js,
  /** @export */
  _emscripten_memcpy_js: __emscripten_memcpy_js,
  /** @export */
  emscripten_resize_heap: _emscripten_resize_heap,
  /** @export */
  fd_close: _fd_close,
  /** @export */
  fd_seek: _fd_seek,
  /** @export */
  fd_write: _fd_write
};
var wasmExports = createWasm();
var ___wasm_call_ctors = createExportWrapper('__wasm_call_ctors', 0);
var ___SUB_INTEGER_OR_NEGATIVE__ = Module['___SUB_INTEGER_OR_NEGATIVE__'] = createExportWrapper('__SUB_INTEGER_OR_NEGATIVE__', 2);
var _strlen_runtime = Module['_strlen_runtime'] = createExportWrapper('strlen_runtime', 1);
var ___START_NUMBER__ = Module['___START_NUMBER__'] = createExportWrapper('__START_NUMBER__', 3);
var ___END_NUMBER__ = Module['___END_NUMBER__'] = createExportWrapper('__END_NUMBER__', 3);
var ___IS_CURRENT_CHARSET_ZERO__ = Module['___IS_CURRENT_CHARSET_ZERO__'] = createExportWrapper('__IS_CURRENT_CHARSET_ZERO__', 1);
var ___IS_SIGN_NEGATIVE__ = Module['___IS_SIGN_NEGATIVE__'] = createExportWrapper('__IS_SIGN_NEGATIVE__', 3);
var ___ADD_INTEGER_AND_POSITIVE__ = Module['___ADD_INTEGER_AND_POSITIVE__'] = createExportWrapper('__ADD_INTEGER_AND_POSITIVE__', 2);
var ___GET_SIGN_NEGATIVE__ = Module['___GET_SIGN_NEGATIVE__'] = createExportWrapper('__GET_SIGN_NEGATIVE__', 0);
var ___CMP_CHARSET__ = Module['___CMP_CHARSET__'] = createExportWrapper('__CMP_CHARSET__', 2);
var ___SUB_INTEGER_AND_POSITIVE__ = Module['___SUB_INTEGER_AND_POSITIVE__'] = createExportWrapper('__SUB_INTEGER_AND_POSITIVE__', 2);
var ___GET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__ = Module['___GET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__'] = createExportWrapper('__GET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__', 0);
var ___INDEX_OF_CURRENT_CHARSET__ = Module['___INDEX_OF_CURRENT_CHARSET__'] = createExportWrapper('__INDEX_OF_CURRENT_CHARSET__', 2);
var ___CHARSET_AT__ = Module['___CHARSET_AT__'] = createExportWrapper('__CHARSET_AT__', 1);
var ___ADD_INTEGER_OR_NEGATIVE__ = Module['___ADD_INTEGER_OR_NEGATIVE__'] = createExportWrapper('__ADD_INTEGER_OR_NEGATIVE__', 2);
var ___SUB_INTEGER__ = Module['___SUB_INTEGER__'] = createExportWrapper('__SUB_INTEGER__', 2);
var ___ADD_INTEGER__ = Module['___ADD_INTEGER__'] = createExportWrapper('__ADD_INTEGER__', 2);
var ___ADD_REP_INTEGER__ = Module['___ADD_REP_INTEGER__'] = createExportWrapper('__ADD_REP_INTEGER__', 2);
var ___MUL_INTEGER__ = Module['___MUL_INTEGER__'] = createExportWrapper('__MUL_INTEGER__', 2);
var ___SAFE_CALC_INIT__ = Module['___SAFE_CALC_INIT__'] = createExportWrapper('__SAFE_CALC_INIT__', 3);
var ___SAFE_SET_SIGN_NEGATIVE__ = Module['___SAFE_SET_SIGN_NEGATIVE__'] = createExportWrapper('__SAFE_SET_SIGN_NEGATIVE__', 1);
var ___SAFE_SET_SIGN_POSITIVE__ = Module['___SAFE_SET_SIGN_POSITIVE__'] = createExportWrapper('__SAFE_SET_SIGN_POSITIVE__', 1);
var ___SAFE_SET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__ = Module['___SAFE_SET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__'] = createExportWrapper('__SAFE_SET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__', 1);
var ___SET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__ = Module['___SET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__'] = createExportWrapper('__SET_CUSTOM_INTEGER_DEF_NUMBER_CHARSET__', 1);
var ___IS_CURRENT_NUMBER_CHARSET__ = Module['___IS_CURRENT_NUMBER_CHARSET__'] = createExportWrapper('__IS_CURRENT_NUMBER_CHARSET__', 2);
var ___CMP_CURRENT_CHARSET__ = Module['___CMP_CURRENT_CHARSET__'] = createExportWrapper('__CMP_CURRENT_CHARSET__', 2);
var _ctoa = Module['_ctoa'] = createExportWrapper('ctoa', 1);
var _uctoa = Module['_uctoa'] = createExportWrapper('uctoa', 1);
var _stoa = Module['_stoa'] = createExportWrapper('stoa', 1);
var _ustoa = Module['_ustoa'] = createExportWrapper('ustoa', 1);
var _itoa = Module['_itoa'] = createExportWrapper('itoa', 1);
var _uitoa = Module['_uitoa'] = createExportWrapper('uitoa', 1);
var _ltoa = Module['_ltoa'] = createExportWrapper('ltoa', 1);
var _ultoa = Module['_ultoa'] = createExportWrapper('ultoa', 1);
var _lltoa = Module['_lltoa'] = createExportWrapper('lltoa', 2);
var _ulltoa = Module['_ulltoa'] = createExportWrapper('ulltoa', 2);
var ___SET_SIGN_POSITIVE__ = Module['___SET_SIGN_POSITIVE__'] = createExportWrapper('__SET_SIGN_POSITIVE__', 1);
var ___IS_SIGN_POSITIVE__ = Module['___IS_SIGN_POSITIVE__'] = createExportWrapper('__IS_SIGN_POSITIVE__', 3);
var ___IS_SIGN_NULL__ = Module['___IS_SIGN_NULL__'] = createExportWrapper('__IS_SIGN_NULL__', 3);
var _fflush = createExportWrapper('fflush', 1);
var _strerror = createExportWrapper('strerror', 1);
var _malloc = createExportWrapper('malloc', 1);
var _emscripten_stack_init = () => (_emscripten_stack_init = wasmExports['emscripten_stack_init'])();
var _emscripten_stack_get_free = () => (_emscripten_stack_get_free = wasmExports['emscripten_stack_get_free'])();
var _emscripten_stack_get_base = () => (_emscripten_stack_get_base = wasmExports['emscripten_stack_get_base'])();
var _emscripten_stack_get_end = () => (_emscripten_stack_get_end = wasmExports['emscripten_stack_get_end'])();
var __emscripten_stack_restore = (a0) => (__emscripten_stack_restore = wasmExports['_emscripten_stack_restore'])(a0);
var __emscripten_stack_alloc = (a0) => (__emscripten_stack_alloc = wasmExports['_emscripten_stack_alloc'])(a0);
var _emscripten_stack_get_current = () => (_emscripten_stack_get_current = wasmExports['emscripten_stack_get_current'])();
var dynCall_jiji = Module['dynCall_jiji'] = createExportWrapper('dynCall_jiji', 5);


// include: postamble.js
// === Auto-generated postamble setup entry stuff ===

Module['ccall'] = ccall;
Module['cwrap'] = cwrap;
Module['UTF8ToString'] = UTF8ToString;
Module['allocateUTF8'] = allocateUTF8;
Module['allocateUTF8OnStack'] = allocateUTF8OnStack;
var missingLibrarySymbols = [
  'writeI53ToI64',
  'writeI53ToI64Clamped',
  'writeI53ToI64Signaling',
  'writeI53ToU64Clamped',
  'writeI53ToU64Signaling',
  'readI53FromI64',
  'readI53FromU64',
  'convertI32PairToI53',
  'convertU32PairToI53',
  'getTempRet0',
  'setTempRet0',
  'zeroMemory',
  'exitJS',
  'growMemory',
  'strError',
  'inetPton4',
  'inetNtop4',
  'inetPton6',
  'inetNtop6',
  'readSockaddr',
  'writeSockaddr',
  'initRandomFill',
  'randomFill',
  'emscriptenLog',
  'readEmAsmArgs',
  'jstoi_q',
  'getExecutableName',
  'listenOnce',
  'autoResumeAudioContext',
  'dynCallLegacy',
  'getDynCaller',
  'dynCall',
  'handleException',
  'keepRuntimeAlive',
  'runtimeKeepalivePush',
  'runtimeKeepalivePop',
  'callUserCallback',
  'maybeExit',
  'asmjsMangle',
  'asyncLoad',
  'mmapAlloc',
  'HandleAllocator',
  'getNativeTypeSize',
  'STACK_SIZE',
  'STACK_ALIGN',
  'POINTER_SIZE',
  'ASSERTIONS',
  'uleb128Encode',
  'sigToWasmTypes',
  'generateFuncType',
  'convertJsFunctionToWasm',
  'getEmptyTableSlot',
  'updateTableMap',
  'getFunctionAddress',
  'addFunction',
  'removeFunction',
  'reallyNegative',
  'unSign',
  'strLen',
  'reSign',
  'formatString',
  'intArrayFromString',
  'intArrayToString',
  'AsciiToString',
  'stringToAscii',
  'UTF16ToString',
  'stringToUTF16',
  'lengthBytesUTF16',
  'UTF32ToString',
  'stringToUTF32',
  'lengthBytesUTF32',
  'registerKeyEventCallback',
  'maybeCStringToJsString',
  'findEventTarget',
  'getBoundingClientRect',
  'fillMouseEventData',
  'registerMouseEventCallback',
  'registerWheelEventCallback',
  'registerUiEventCallback',
  'registerFocusEventCallback',
  'fillDeviceOrientationEventData',
  'registerDeviceOrientationEventCallback',
  'fillDeviceMotionEventData',
  'registerDeviceMotionEventCallback',
  'screenOrientation',
  'fillOrientationChangeEventData',
  'registerOrientationChangeEventCallback',
  'fillFullscreenChangeEventData',
  'registerFullscreenChangeEventCallback',
  'JSEvents_requestFullscreen',
  'JSEvents_resizeCanvasForFullscreen',
  'registerRestoreOldStyle',
  'hideEverythingExceptGivenElement',
  'restoreHiddenElements',
  'setLetterbox',
  'softFullscreenResizeWebGLRenderTarget',
  'doRequestFullscreen',
  'fillPointerlockChangeEventData',
  'registerPointerlockChangeEventCallback',
  'registerPointerlockErrorEventCallback',
  'requestPointerLock',
  'fillVisibilityChangeEventData',
  'registerVisibilityChangeEventCallback',
  'registerTouchEventCallback',
  'fillGamepadEventData',
  'registerGamepadEventCallback',
  'registerBeforeUnloadEventCallback',
  'fillBatteryEventData',
  'battery',
  'registerBatteryEventCallback',
  'setCanvasElementSize',
  'getCanvasElementSize',
  'jsStackTrace',
  'getCallstack',
  'convertPCtoSourceLocation',
  'getEnvStrings',
  'checkWasiClock',
  'wasiRightsToMuslOFlags',
  'wasiOFlagsToMuslOFlags',
  'createDyncallWrapper',
  'safeSetTimeout',
  'setImmediateWrapped',
  'clearImmediateWrapped',
  'polyfillSetImmediate',
  'registerPostMainLoop',
  'registerPreMainLoop',
  'getPromise',
  'makePromise',
  'idsToPromises',
  'makePromiseCallback',
  'ExceptionInfo',
  'findMatchingCatch',
  'Browser_asyncPrepareDataCounter',
  'safeRequestAnimationFrame',
  'isLeapYear',
  'ydayFromDate',
  'arraySum',
  'addDays',
  'getSocketFromFD',
  'getSocketAddress',
  'FS_createPreloadedFile',
  'FS_modeStringToFlags',
  'FS_getMode',
  'FS_stdin_getChar',
  'FS_unlink',
  'FS_createDataFile',
  'FS_mkdirTree',
  '_setNetworkCallback',
  'heapObjectForWebGLType',
  'toTypedArrayIndex',
  'webgl_enable_ANGLE_instanced_arrays',
  'webgl_enable_OES_vertex_array_object',
  'webgl_enable_WEBGL_draw_buffers',
  'webgl_enable_WEBGL_multi_draw',
  'webgl_enable_EXT_polygon_offset_clamp',
  'webgl_enable_EXT_clip_control',
  'webgl_enable_WEBGL_polygon_mode',
  'emscriptenWebGLGet',
  'computeUnpackAlignedImageSize',
  'colorChannelsInGlTextureFormat',
  'emscriptenWebGLGetTexPixelData',
  'emscriptenWebGLGetUniform',
  'webglGetUniformLocation',
  'webglPrepareUniformLocationsBeforeFirstUse',
  'webglGetLeftBracePos',
  'emscriptenWebGLGetVertexAttrib',
  '__glGetActiveAttribOrUniform',
  'writeGLArray',
  'registerWebGlEventCallback',
  'runAndAbortIfError',
  'ALLOC_NORMAL',
  'ALLOC_STACK',
  'allocate',
  'writeStringToMemory',
  'writeAsciiToMemory',
  'setErrNo',
  'demangle',
  'stackTrace',
];
missingLibrarySymbols.forEach(missingLibrarySymbol)

var unexportedSymbols = [
  'run',
  'addOnPreRun',
  'addOnInit',
  'addOnPreMain',
  'addOnExit',
  'addOnPostRun',
  'addRunDependency',
  'removeRunDependency',
  'out',
  'err',
  'callMain',
  'abort',
  'wasmMemory',
  'wasmExports',
  'writeStackCookie',
  'checkStackCookie',
  'convertI32PairToI53Checked',
  'stackSave',
  'stackRestore',
  'stackAlloc',
  'ptrToString',
  'getHeapMax',
  'abortOnCannotGrowMemory',
  'ENV',
  'ERRNO_CODES',
  'DNS',
  'Protocols',
  'Sockets',
  'timers',
  'warnOnce',
  'readEmAsmArgsArray',
  'jstoi_s',
  'alignMemory',
  'wasmTable',
  'noExitRuntime',
  'getCFunc',
  'freeTableIndexes',
  'functionsInTableMap',
  'setValue',
  'getValue',
  'PATH',
  'PATH_FS',
  'UTF8Decoder',
  'UTF8ArrayToString',
  'stringToUTF8Array',
  'stringToUTF8',
  'lengthBytesUTF8',
  'UTF16Decoder',
  'stringToNewUTF8',
  'stringToUTF8OnStack',
  'writeArrayToMemory',
  'JSEvents',
  'specialHTMLTargets',
  'findCanvasEventTarget',
  'currentFullscreenStrategy',
  'restoreOldWindowedStyle',
  'UNWIND_CACHE',
  'ExitStatus',
  'flush_NO_FILESYSTEM',
  'promiseMap',
  'uncaughtExceptionCount',
  'exceptionLast',
  'exceptionCaught',
  'Browser',
  'getPreloadedImageData__data',
  'wget',
  'MONTH_DAYS_REGULAR',
  'MONTH_DAYS_LEAP',
  'MONTH_DAYS_REGULAR_CUMULATIVE',
  'MONTH_DAYS_LEAP_CUMULATIVE',
  'SYSCALLS',
  'preloadPlugins',
  'FS_stdin_getChar_buffer',
  'FS_createPath',
  'FS_createDevice',
  'FS_readFile',
  'FS',
  'FS_createLazyFile',
  'MEMFS',
  'TTY',
  'PIPEFS',
  'SOCKFS',
  'tempFixedLengthArray',
  'miniTempWebGLFloatBuffers',
  'miniTempWebGLIntBuffers',
  'GL',
  'AL',
  'GLUT',
  'EGL',
  'GLEW',
  'IDBStore',
  'SDL',
  'SDL_gfx',
  'print',
  'printErr',
];
unexportedSymbols.forEach(unexportedRuntimeSymbol);



var calledRun;
var calledPrerun;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  _emscripten_stack_init();
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  writeStackCookie();
}

function run() {

  if (runDependencies > 0) {
    return;
  }

  stackCheckInit();

  if (!calledPrerun) {
    calledPrerun = 1;
    preRun();

    // a preRun added a dependency, run will be called later
    if (runDependencies > 0) {
      return;
    }
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = 1;
    Module['calledRun'] = 1;

    if (ABORT) return;

    initRuntime();

    readyPromiseResolve(Module);
    Module['onRuntimeInitialized']?.();

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(() => {
      setTimeout(() => Module['setStatus'](''), 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = (x) => {
    has = true;
  }
  try { // it doesn't matter if it fails
    flush_NO_FILESYSTEM();
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.');
    warnOnce('(this may also be due to not including full filesystem support - try building with -sFORCE_FILESYSTEM)');
  }
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();

// end include: postamble.js

// include: postamble_modularize.js
// In MODULARIZE mode we wrap the generated code in a factory function
// and return either the Module itself, or a promise of the module.
//
// We assign to the `moduleRtn` global here and configure closure to see
// this as and extern so it won't get minified.

moduleRtn = readyPromise;

// Assertion for attempting to access module properties on the incoming
// moduleArg.  In the past we used this object as the prototype of the module
// and assigned properties to it, but now we return a distinct object.  This
// keeps the instance private until it is ready (i.e the promise has been
// resolved).
for (const prop of Object.keys(Module)) {
  if (!(prop in moduleArg)) {
    Object.defineProperty(moduleArg, prop, {
      configurable: true,
      get() {
        abort(`Access to module property ('${prop}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)
      }
    });
  }
}
// end include: postamble_modularize.js



  return moduleRtn;
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Module;
else if (typeof define === 'function' && define['amd'])
  define([], () => Module);
