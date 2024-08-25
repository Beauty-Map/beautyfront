import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import http, { Server as Server$1 } from 'node:http';
import https, { Server } from 'node:https';
import { promises, existsSync } from 'fs';
import { dirname as dirname$1, resolve as resolve$1, join } from 'path';
import { promises as promises$1 } from 'node:fs';
import { fileURLToPath } from 'node:url';

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode$1(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode$1(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode$1(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$1(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  const [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  const { pathname, search, hash } = parsePath(
    path.replace(/\/(?=[A-Za-z]:)/, "")
  );
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function serialize(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

class WordArray {
  constructor(words, sigBytes) {
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    this._data = new WordArray();
    this._nDataBytes = 0;
    this._minBufferSize = 0;
    this.blockSize = 512 / 32;
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}

const H = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    this._hash = new WordArray([...H]);
  }
  reset() {
    super.reset();
    this._hash = new WordArray([...H]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K[i] + W[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}

function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

function isEqual(object1, object2, hashOptions = {}) {
  if (object1 === object2) {
    return true;
  }
  if (objectHash(object1, hashOptions) === objectHash(object2, hashOptions)) {
    return true;
  }
  return false;
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      node = node.placeholderChildNode;
      if (node === null) {
        break;
      } else {
        if (node.paramName) {
          params[node.paramName] = section;
        }
        paramsFound = true;
      }
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildNode = childNode;
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      node = childNode;
    }
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildNode = null;
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildNode: null
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}

let defaultMaxListeners = 10;
let EventEmitter$1 = class EventEmitter {
  __unenv__ = true;
  _events = /* @__PURE__ */ Object.create(null);
  _maxListeners;
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + "."
      );
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + n + "."
      );
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(
        "Unhandled error." + (er ? " (" + er.message + ")" : "")
      );
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
};
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    target._events[type].warned = true;
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = target._events[type]?.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter((fn) => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map((l) => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    );
  }
}

const EventEmitter = globalThis.EventEmitter || EventEmitter$1;

class _Readable extends EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || _Readable;

class _Writable extends EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || _Writable;

const __Duplex = class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable.prototype);
  return __Duplex;
}
const _Duplex = /* @__PURE__ */ getDuplex();
const Duplex = globalThis.Duplex || _Duplex;

class Socket extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  autoSelectFamilyAttemptedAddresses = [];
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  destroySoon() {
    this.destroy();
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}

class IncomingMessage extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}

class ServerResponse extends Writable {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) ; else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$2(this, "statusCode", 500);
    __publicField$2(this, "fatal", false);
    __publicField$2(this, "unhandled", false);
    __publicField$2(this, "statusMessage");
    __publicField$2(this, "data");
    __publicField$2(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$2(H3Error, "__h3_error__", true);
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function isMethod(event, expected, allowHead) {
  if (allowHead && event.method === "HEAD") {
    return true;
  }
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected, allowHead)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function parseCookies(event) {
  return parse(event.node.req.headers.cookie || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, serializeOptions) {
  serializeOptions = { path: "/", ...serializeOptions };
  const cookieStr = serialize(name, value, serializeOptions);
  let setCookies = event.node.res.getHeader("set-cookie");
  if (!Array.isArray(setCookies)) {
    setCookies = [setCookies];
  }
  const _optionsHash = objectHash(serializeOptions);
  setCookies = setCookies.filter((cookieValue) => {
    return cookieValue && _optionsHash !== objectHash(parse(cookieValue));
  });
  event.node.res.setHeader("set-cookie", [...setCookies, cookieStr]);
}
function deleteCookie(event, name, serializeOptions) {
  setCookie(event, name, "", {
    ...serializeOptions,
    maxAge: 0
  });
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(name, value);
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders(
    getProxyRequestHeaders(event),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  const response = await _getFetch(opts.fetch)(target, {
    headers: opts.headers,
    ignoreResponseError: true,
    // make $ofetch.raw transparent
    ...opts.fetchOptions
  });
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name)) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. **/
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. **/
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const { pathname } = parseURL(info.url || "/");
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      await sendError(event, error, !!app.options.debug);
    }
  };
  return toNodeHandle;
}

const s=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function mergeFetchOptions(input, defaults, Headers = globalThis.Headers) {
  const merged = {
    ...defaults,
    ...input
  };
  if (defaults?.params && input?.params) {
    merged.params = {
      ...defaults?.params,
      ...input?.params
    };
  }
  if (defaults?.query && input?.query) {
    merged.query = {
      ...defaults?.query,
      ...input?.query
    };
  }
  if (defaults?.headers && input?.headers) {
    merged.headers = new Headers(defaults?.headers || {});
    for (const [key, value] of new Headers(input?.headers || {})) {
      merged.headers.set(key, value);
    }
  }
  return merged;
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  //  Gateway Timeout
]);
const nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch$1(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1,
          timeout: context.options.timeout
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: mergeFetchOptions(_options, globalOptions.defaults, Headers),
      response: void 0,
      error: void 0
    };
    context.options.method = context.options.method?.toUpperCase();
    if (context.options.onRequest) {
      await context.options.onRequest(context);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query || context.options.params) {
        context.request = withQuery(context.request, {
          ...context.options.params,
          ...context.options.query
        });
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      setTimeout(() => controller.abort(), context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await context.options.onRequestError(context);
      }
      return await onError(context);
    }
    const hasBody = context.response.body && !nullBodyResponses$1.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await context.options.onResponse(context);
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await context.options.onResponseError(context);
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}) => createFetch$1({
    ...globalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch || createNodeFetch();
const Headers$1 = globalThis.Headers || s;
const AbortController = globalThis.AbortController || i;
const ofetch = createFetch$1({ fetch, Headers: Headers$1, AbortController });
const $fetch = ofetch;

const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createCall(handle) {
  return function callHandle(context) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req);
    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = {};
    if (context.headers) {
      const headerEntries = typeof context.headers.entries === "function" ? context.headers.entries() : Object.entries(context.headers);
      for (const [name, value] of headerEntries) {
        if (!value) {
          continue;
        }
        req.headers[name.toLowerCase()] = value;
      }
    }
    req.headers.host = req.headers.host || context.host || "localhost";
    req.connection.encrypted = // @ts-ignore
    req.connection.encrypted || context.protocol === "https";
    req.body = context.body || null;
    req.__unenv__ = context.context;
    return handle(req, res).then(() => {
      let body = res._data;
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === "HEAD") {
        body = null;
        delete res._headers["content-length"];
      }
      const r = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      };
      req.destroy();
      res.destroy();
      return r;
    });
  };
}

function createFetch(call, _fetch = global.fetch) {
  return async function ufetch(input, init) {
    const url = input.toString();
    if (!url.startsWith("/")) {
      return _fetch(url, init);
    }
    try {
      const r = await call({ url, ...init });
      return new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(
          Object.entries(r.headers).map(([name, value]) => [
            name,
            Array.isArray(value) ? value.join(",") : String(value) || ""
          ])
        )
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: Number.parseInt(error.statusCode || error.code) || 500,
        statusText: error.statusText
      });
    }
  };
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = separators ?? STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner ?? "-") : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {
  "nuxt": {
    "buildId": "14ce60b5-e426-417f-8677-206f462cd37d"
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "baseURL": "http://localhost:8000/api",
    "uploadURL": "http://localhost:8000/api/upload",
    "device": {
      "enabled": true,
      "defaultUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36",
      "refreshOnResize": false
    },
    "sanctum": {
      "userStateKey": "sanctum.user.identity",
      "redirectIfAuthenticated": false,
      "endpoints": {
        "csrf": "/sanctum/csrf-cookie",
        "login": "/api/auth/login",
        "logout": "/api/auth/logout",
        "user": "/api/own"
      },
      "csrf": {
        "cookie": "XSRF-TOKEN",
        "header": "X-XSRF-TOKEN"
      },
      "client": {
        "retry": 1
      },
      "redirect": {
        "keepRequestedRoute": false,
        "onLogin": "/",
        "onLogout": "/",
        "onAuthOnly": "/login",
        "onGuestOnly": "/"
      },
      "globalMiddleware": {
        "enabled": false,
        "allow404WithoutAuth": true
      },
      "logLevel": 3,
      "baseUrl": "http://localhost:8000"
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === void 0) {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}

const storageKeyProperties = [
  "hasItem",
  "getItem",
  "getItemRaw",
  "setItem",
  "setItemRaw",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    options: {},
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        const keys = rawKeys.map((key) => mount.mountpoint + normalizeKey$1(key)).filter((key) => !maskedMounts.some((p) => key.startsWith(p)));
        allKeys.push(...keys);
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter((key) => key.startsWith(base) && !key.endsWith("$")) : allKeys.filter((key) => !key.endsWith("$"));
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    }
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        const dirFiles = await readdirRecursive(entryPath, ignore);
        files.push(...dirFiles.map((f) => entry.name + "/" + f));
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.\:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys() {
      return readdirRecursive(r("."), opts.ignore);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"D:\\projects\\beautymap\\beautyfront\\.data\\kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await import('./_/error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/3188561.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2024-06-16T10:01:57.046Z",
    "size": 0,
    "path": "../public/3188561.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2024-03-08T07:17:13.000Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/panel/artist_agree_result.png": {
    "type": "image/png",
    "etag": "\"6a39-u+Cqa6coGnNv1GIpCTY2p60nRb8\"",
    "mtime": "2024-05-28T11:24:35.877Z",
    "size": 27193,
    "path": "../public/panel/artist_agree_result.png"
  },
  "/panel/banner.png": {
    "type": "image/png",
    "etag": "\"200ca-Vg7eE0UPHi1NFVUVT2EuS+6gYH8\"",
    "mtime": "2024-05-31T21:51:08.242Z",
    "size": 131274,
    "path": "../public/panel/banner.png"
  },
  "/panel/choose-image.png": {
    "type": "image/png",
    "etag": "\"2c26-SMwGtDTHJXUlfNUizsWuWZQIikU\"",
    "mtime": "2024-05-28T13:54:09.548Z",
    "size": 11302,
    "path": "../public/panel/choose-image.png"
  },
  "/panel/header.png": {
    "type": "image/png",
    "etag": "\"ca53-clel4Pszt1ufJ30KuuhtMZ/RT4w\"",
    "mtime": "2024-05-21T14:52:57.034Z",
    "size": 51795,
    "path": "../public/panel/header.png"
  },
  "/intro/intro_1.png": {
    "type": "image/png",
    "etag": "\"ca95-w5/Z/wJhMKobSHCbZTqw+1HFIws\"",
    "mtime": "2024-04-29T21:44:53.605Z",
    "size": 51861,
    "path": "../public/intro/intro_1.png"
  },
  "/intro/intro_2.png": {
    "type": "image/png",
    "etag": "\"7e68-0Y+pXuLG2uNpUH+VNh/FJzQVqmU\"",
    "mtime": "2024-04-29T21:44:53.606Z",
    "size": 32360,
    "path": "../public/intro/intro_2.png"
  },
  "/intro/intro_3.png": {
    "type": "image/png",
    "etag": "\"7726-ZY5euyWbJ3EiMnqg7n/AbISRZwM\"",
    "mtime": "2024-04-29T21:44:53.606Z",
    "size": 30502,
    "path": "../public/intro/intro_3.png"
  },
  "/_nuxt/AddMoneyIcon.COQhGOq-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1062-mksyPbWEzal5FmObQJp1J3O6IHY\"",
    "mtime": "2024-08-25T06:30:11.593Z",
    "size": 4194,
    "path": "../public/_nuxt/AddMoneyIcon.COQhGOq-.js"
  },
  "/_nuxt/AddTicketIcon.LCkDybzM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"284-x4QC5qHoakBjKDE9so/6RhPNCjo\"",
    "mtime": "2024-08-25T06:30:11.596Z",
    "size": 644,
    "path": "../public/_nuxt/AddTicketIcon.LCkDybzM.js"
  },
  "/_nuxt/AdvIcon.CkPTv3YD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"21d-fB9InLkwtBGYWy7ilAmXpMn9+zc\"",
    "mtime": "2024-08-25T06:30:11.570Z",
    "size": 541,
    "path": "../public/_nuxt/AdvIcon.CkPTv3YD.js"
  },
  "/_nuxt/alt-number.kOJvrGQT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"87c-KwJK0GRufCmTa7/r9em4f2+/k/Y\"",
    "mtime": "2024-08-25T06:30:11.596Z",
    "size": 2172,
    "path": "../public/_nuxt/alt-number.kOJvrGQT.js"
  },
  "/_nuxt/ArrowUpIcon.C_DBot5Z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"193-TkPkdPH6JtMXL1ahFmWe7Kb1KcI\"",
    "mtime": "2024-08-25T06:30:11.578Z",
    "size": 403,
    "path": "../public/_nuxt/ArrowUpIcon.C_DBot5Z.js"
  },
  "/_nuxt/artist-auth.w14PGJss.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9c-huDHQz97nP1bCYOFtwxDTivzFH8\"",
    "mtime": "2024-08-25T06:30:11.601Z",
    "size": 156,
    "path": "../public/_nuxt/artist-auth.w14PGJss.js"
  },
  "/_nuxt/artist-panel.BjU2KgBV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11c7c-KJM3/UM2bOw/oPrPnKEZlYDceuQ\"",
    "mtime": "2024-08-25T06:30:11.612Z",
    "size": 72828,
    "path": "../public/_nuxt/artist-panel.BjU2KgBV.js"
  },
  "/_nuxt/artist-single.BLaI85sW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8e5-BSR+kJ96MNy0/QkqHw1zLqo909U\"",
    "mtime": "2024-08-25T06:30:11.578Z",
    "size": 2277,
    "path": "../public/_nuxt/artist-single.BLaI85sW.js"
  },
  "/_nuxt/ArtistItem.vue.FXvA-DGk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"150c-npSr0O6r0qzVBRUxBj3JnF7evH8\"",
    "mtime": "2024-08-25T06:30:11.570Z",
    "size": 5388,
    "path": "../public/_nuxt/ArtistItem.vue.FXvA-DGk.js"
  },
  "/_nuxt/ArtistPanelIcon.B2MRDZXZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9b4-ap7wsOTNTlgiiRLr+wyw7z1G5jo\"",
    "mtime": "2024-08-25T06:30:11.604Z",
    "size": 2484,
    "path": "../public/_nuxt/ArtistPanelIcon.B2MRDZXZ.js"
  },
  "/_nuxt/artist_agree_result.CZ_2h9Cl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"75-Y6SnPrXbHFdHOn1aWXpmxgXKWgE\"",
    "mtime": "2024-08-25T06:30:11.581Z",
    "size": 117,
    "path": "../public/_nuxt/artist_agree_result.CZ_2h9Cl.js"
  },
  "/_nuxt/auth.1zQLFoNU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b8-OoRf3gIxfVVcB48M5xnuem5Pc+w\"",
    "mtime": "2024-08-25T06:30:11.585Z",
    "size": 184,
    "path": "../public/_nuxt/auth.1zQLFoNU.js"
  },
  "/_nuxt/BackIcon.C0Ymq8Pt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"76c-FISvu1rLVEwXX8dNlVVpX+N9IJU\"",
    "mtime": "2024-08-25T06:30:11.603Z",
    "size": 1900,
    "path": "../public/_nuxt/BackIcon.C0Ymq8Pt.js"
  },
  "/_nuxt/BeautyIcon.B0Yz5RGQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19973-mayNgkqi8gnTWD0hq69/jGYlGz4\"",
    "mtime": "2024-08-25T06:30:11.587Z",
    "size": 104819,
    "path": "../public/_nuxt/BeautyIcon.B0Yz5RGQ.js"
  },
  "/_nuxt/BirthDateInput.vue.Dmtvh7W4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1625-B8YOyLO1Y1/zdkPeDF5MKSYdwc4\"",
    "mtime": "2024-08-25T06:30:11.585Z",
    "size": 5669,
    "path": "../public/_nuxt/BirthDateInput.vue.Dmtvh7W4.js"
  },
  "/_nuxt/BlueTick.CXVmnGT2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"404-lG/0T0RS3JaevdoGlPHxXxFC7bg\"",
    "mtime": "2024-08-25T06:30:11.572Z",
    "size": 1028,
    "path": "../public/_nuxt/BlueTick.CXVmnGT2.js"
  },
  "/_nuxt/Bookmark.vue.OPJXj2mM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a5b-Z0zJyemmXP2z+jFFVZpeVMXLqG0\"",
    "mtime": "2024-08-25T06:30:11.572Z",
    "size": 2651,
    "path": "../public/_nuxt/Bookmark.vue.OPJXj2mM.js"
  },
  "/_nuxt/BottomNavigationBox.vue.sBD4tNPP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ab8-1PlRQAp2cnplEQTWshpY5XxGEGs\"",
    "mtime": "2024-08-25T06:30:11.601Z",
    "size": 10936,
    "path": "../public/_nuxt/BottomNavigationBox.vue.sBD4tNPP.js"
  },
  "/_nuxt/carousel.CL4oD37H.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"abf-DRrXykoC0nrYeftUW7wlLtRDS78\"",
    "mtime": "2024-08-25T06:30:11.563Z",
    "size": 2751,
    "path": "../public/_nuxt/carousel.CL4oD37H.css"
  },
  "/_nuxt/carousel.es.DukZ9TRf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2455-36XmYcbpgoVlNh921OY/IXdbR+Y\"",
    "mtime": "2024-08-25T06:30:11.596Z",
    "size": 9301,
    "path": "../public/_nuxt/carousel.es.DukZ9TRf.js"
  },
  "/_nuxt/Chart.BH1gpBu9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1bb-47WvneOsRXmFcTKsU26WqtxB51o\"",
    "mtime": "2024-08-25T06:30:11.590Z",
    "size": 443,
    "path": "../public/_nuxt/Chart.BH1gpBu9.js"
  },
  "/_nuxt/CheckBox.vue.B2hWPfZ6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"83c-YGY0SitrtlpLv45JXCsvgO6t70c\"",
    "mtime": "2024-08-25T06:30:11.591Z",
    "size": 2108,
    "path": "../public/_nuxt/CheckBox.vue.B2hWPfZ6.js"
  },
  "/_nuxt/ChooseCallNumberInput.vue.DTki-IpL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"359d-GhpI5wBTrX9EMvQkT6LVrJV6Pw4\"",
    "mtime": "2024-08-25T06:30:11.596Z",
    "size": 13725,
    "path": "../public/_nuxt/ChooseCallNumberInput.vue.DTki-IpL.js"
  },
  "/_nuxt/ChooseCityDrawer.vue.BIR0gkmh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1aa4-+zBOEgkJhs87YqrxCXdmqzgQAjc\"",
    "mtime": "2024-08-25T06:30:11.603Z",
    "size": 6820,
    "path": "../public/_nuxt/ChooseCityDrawer.vue.BIR0gkmh.js"
  },
  "/_nuxt/client-only.uDXX9zrn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ff-McpIUV6SYdOB2zfwYIrf3bDVK4Y\"",
    "mtime": "2024-08-25T06:30:11.602Z",
    "size": 511,
    "path": "../public/_nuxt/client-only.uDXX9zrn.js"
  },
  "/_nuxt/CloseIcon.D3jclcHp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"627-gL4X8REJWeLhZgbffNWCqJLHhGY\"",
    "mtime": "2024-08-25T06:30:11.572Z",
    "size": 1575,
    "path": "../public/_nuxt/CloseIcon.D3jclcHp.js"
  },
  "/_nuxt/ContactIcon.CVbWdzfO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"691-I40ekbz9IYIBOKj4At80+7JYnSk\"",
    "mtime": "2024-08-25T06:30:11.585Z",
    "size": 1681,
    "path": "../public/_nuxt/ContactIcon.CVbWdzfO.js"
  },
  "/_nuxt/create.B2f5alZ5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a41-IdMprJ8ao14Nw8KJgwfDpC+QS3c\"",
    "mtime": "2024-08-25T06:30:11.578Z",
    "size": 6721,
    "path": "../public/_nuxt/create.B2f5alZ5.js"
  },
  "/_nuxt/CreateTicketForm.vue.B2XCXz_U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2abf-PravVh9fSGTQApKakmZFybVf5Pg\"",
    "mtime": "2024-08-25T06:30:11.590Z",
    "size": 10943,
    "path": "../public/_nuxt/CreateTicketForm.vue.B2XCXz_U.js"
  },
  "/_nuxt/Dana-Black.CDC4JE57.woff2": {
    "type": "font/woff2",
    "etag": "\"6124-XfIXucbbJljPCPVmYlKN+nGLn3o\"",
    "mtime": "2024-08-25T06:30:11.556Z",
    "size": 24868,
    "path": "../public/_nuxt/Dana-Black.CDC4JE57.woff2"
  },
  "/_nuxt/Dana-Black.Cnq9y8n2.woff": {
    "type": "font/woff",
    "etag": "\"828c-YfD1xO9oPpMaB2h1e05jjonHmeA\"",
    "mtime": "2024-08-25T06:30:11.562Z",
    "size": 33420,
    "path": "../public/_nuxt/Dana-Black.Cnq9y8n2.woff"
  },
  "/_nuxt/Dana-Bold.Bcen_dyy.woff": {
    "type": "font/woff",
    "etag": "\"8f34-cYe2WBZZBpF9Sf1k1ykkvJvxsjY\"",
    "mtime": "2024-08-25T06:30:11.562Z",
    "size": 36660,
    "path": "../public/_nuxt/Dana-Bold.Bcen_dyy.woff"
  },
  "/_nuxt/Dana-Bold.BQP2KuTT.woff2": {
    "type": "font/woff2",
    "etag": "\"6b9c-9ht9pmmlWW47D6BgxaPJKsuS5gk\"",
    "mtime": "2024-08-25T06:30:11.557Z",
    "size": 27548,
    "path": "../public/_nuxt/Dana-Bold.BQP2KuTT.woff2"
  },
  "/_nuxt/Dana-DemiBold.5ixe54ZD.woff": {
    "type": "font/woff",
    "etag": "\"8f14-U8jbGvY+imsd6JTETldnymNmP+c\"",
    "mtime": "2024-08-25T06:30:11.562Z",
    "size": 36628,
    "path": "../public/_nuxt/Dana-DemiBold.5ixe54ZD.woff"
  },
  "/_nuxt/Dana-DemiBold.CsDdDm79.woff2": {
    "type": "font/woff2",
    "etag": "\"6b7c-z9NUkKegDDlR7fgmblNCzir090E\"",
    "mtime": "2024-08-25T06:30:11.556Z",
    "size": 27516,
    "path": "../public/_nuxt/Dana-DemiBold.CsDdDm79.woff2"
  },
  "/_nuxt/Dana-ExtraBlack.BplExonq.woff2": {
    "type": "font/woff2",
    "etag": "\"6c58-JaMcltID6yHTBhLWsFgA32YCEZw\"",
    "mtime": "2024-08-25T06:30:11.556Z",
    "size": 27736,
    "path": "../public/_nuxt/Dana-ExtraBlack.BplExonq.woff2"
  },
  "/_nuxt/Dana-ExtraBlack.D57Ehd7j.woff": {
    "type": "font/woff",
    "etag": "\"8fd8-XhXD2RKUg4aJqEv1b+G9UA9v1Zg\"",
    "mtime": "2024-08-25T06:30:11.562Z",
    "size": 36824,
    "path": "../public/_nuxt/Dana-ExtraBlack.D57Ehd7j.woff"
  },
  "/_nuxt/Dana-ExtraBold.CMMSeU1I.woff2": {
    "type": "font/woff2",
    "etag": "\"69d4-iSrbTTIxUfQH2taEXfE/FE1FrZw\"",
    "mtime": "2024-08-25T06:30:11.556Z",
    "size": 27092,
    "path": "../public/_nuxt/Dana-ExtraBold.CMMSeU1I.woff2"
  },
  "/_nuxt/Dana-ExtraBold.DsIAZccX.woff": {
    "type": "font/woff",
    "etag": "\"8d48-+r5TPW4ZHbSXmnYH1hAYL3Qnqgo\"",
    "mtime": "2024-08-25T06:30:11.562Z",
    "size": 36168,
    "path": "../public/_nuxt/Dana-ExtraBold.DsIAZccX.woff"
  },
  "/_nuxt/Dana-fat.BAiwo0kb.woff": {
    "type": "font/woff",
    "etag": "\"88d4-hL+MKS+7T0JlD7/1WphimLORmM4\"",
    "mtime": "2024-08-25T06:30:11.562Z",
    "size": 35028,
    "path": "../public/_nuxt/Dana-fat.BAiwo0kb.woff"
  },
  "/_nuxt/Dana-fat.C1fOLJo0.woff2": {
    "type": "font/woff2",
    "etag": "\"6614-pmioFv+eTozx+MZrSG9b8ptQJ7I\"",
    "mtime": "2024-08-25T06:30:11.557Z",
    "size": 26132,
    "path": "../public/_nuxt/Dana-fat.C1fOLJo0.woff2"
  },
  "/_nuxt/Dana-Hairline.BGJncz2r.woff2": {
    "type": "font/woff2",
    "etag": "\"615c-141xT44u59vfBXZqlF2nnNdM5JA\"",
    "mtime": "2024-08-25T06:30:11.556Z",
    "size": 24924,
    "path": "../public/_nuxt/Dana-Hairline.BGJncz2r.woff2"
  },
  "/_nuxt/Dana-Hairline.CiYDT096.woff": {
    "type": "font/woff",
    "etag": "\"83dc-hHJdyijmHpka65/MJaV3MmQrWG0\"",
    "mtime": "2024-08-25T06:30:11.557Z",
    "size": 33756,
    "path": "../public/_nuxt/Dana-Hairline.CiYDT096.woff"
  },
  "/_nuxt/Dana-Heavy.7qo_uHn4.woff": {
    "type": "font/woff",
    "etag": "\"9090-f0KrhAMvwa0D9we7x9haBBWgpJ8\"",
    "mtime": "2024-08-25T06:30:11.562Z",
    "size": 37008,
    "path": "../public/_nuxt/Dana-Heavy.7qo_uHn4.woff"
  },
  "/_nuxt/Dana-Heavy.Dnad5AmU.woff2": {
    "type": "font/woff2",
    "etag": "\"6d58-HIfC9REGXvLqbeTTnVKm0t113Us\"",
    "mtime": "2024-08-25T06:30:11.557Z",
    "size": 27992,
    "path": "../public/_nuxt/Dana-Heavy.Dnad5AmU.woff2"
  },
  "/_nuxt/Dana-Light.C2OU9tf0.woff2": {
    "type": "font/woff2",
    "etag": "\"6bc0-ZkKCeylasO4EPZLZUsK7FQkVdvc\"",
    "mtime": "2024-08-25T06:30:11.556Z",
    "size": 27584,
    "path": "../public/_nuxt/Dana-Light.C2OU9tf0.woff2"
  },
  "/_nuxt/Dana-Light.yLhfY9cv.woff": {
    "type": "font/woff",
    "etag": "\"8f48-/kQ4DBjZ7imoGC8fwPCAA8shQ+4\"",
    "mtime": "2024-08-25T06:30:11.562Z",
    "size": 36680,
    "path": "../public/_nuxt/Dana-Light.yLhfY9cv.woff"
  },
  "/_nuxt/Dana-Medium.B35_tjYA.woff2": {
    "type": "font/woff2",
    "etag": "\"6b98-h0RxSQVbNI7sl5Pyd0CmKPAKOf0\"",
    "mtime": "2024-08-25T06:30:11.556Z",
    "size": 27544,
    "path": "../public/_nuxt/Dana-Medium.B35_tjYA.woff2"
  },
  "/_nuxt/Dana-Medium.W3Qb5G0n.woff": {
    "type": "font/woff",
    "etag": "\"8f98-cgNbEBxY8SOCnS+Y2SSkYJvJjhQ\"",
    "mtime": "2024-08-25T06:30:11.562Z",
    "size": 36760,
    "path": "../public/_nuxt/Dana-Medium.W3Qb5G0n.woff"
  },
  "/_nuxt/Dana-Regular.BxfZZuX5.woff2": {
    "type": "font/woff2",
    "etag": "\"6b60-5KXfWRTfsxlNCagzwrr8VjuAQ5A\"",
    "mtime": "2024-08-25T06:30:11.557Z",
    "size": 27488,
    "path": "../public/_nuxt/Dana-Regular.BxfZZuX5.woff2"
  },
  "/_nuxt/Dana-Regular.DDr9Yke4.woff": {
    "type": "font/woff",
    "etag": "\"8fec-7ahdGWQp/Ot+yrnH5VMQdTyYUYY\"",
    "mtime": "2024-08-25T06:30:11.562Z",
    "size": 36844,
    "path": "../public/_nuxt/Dana-Regular.DDr9Yke4.woff"
  },
  "/_nuxt/Dana-Thin.DBP6qDER.woff2": {
    "type": "font/woff2",
    "etag": "\"6b08-IqUQVCNKPeO5XZD0hCEJcOnBwX8\"",
    "mtime": "2024-08-25T06:30:11.552Z",
    "size": 27400,
    "path": "../public/_nuxt/Dana-Thin.DBP6qDER.woff2"
  },
  "/_nuxt/Dana-Thin.had-AASE.woff": {
    "type": "font/woff",
    "etag": "\"8e88-k++dW0ofI2IlRhoHnFMJf/TbpEY\"",
    "mtime": "2024-08-25T06:30:11.558Z",
    "size": 36488,
    "path": "../public/_nuxt/Dana-Thin.had-AASE.woff"
  },
  "/_nuxt/Dana-UltraLight.BQOTzoTt.woff2": {
    "type": "font/woff2",
    "etag": "\"6c3c-TggGGgZwLahfqK+JB0N/a5O52Oo\"",
    "mtime": "2024-08-25T06:30:11.556Z",
    "size": 27708,
    "path": "../public/_nuxt/Dana-UltraLight.BQOTzoTt.woff2"
  },
  "/_nuxt/Dana-UltraLight.C2tJHM2c.woff": {
    "type": "font/woff",
    "etag": "\"8fd0-ES5vDaMOzTaUYVnC4vjVP6Dz6w8\"",
    "mtime": "2024-08-25T06:30:11.562Z",
    "size": 36816,
    "path": "../public/_nuxt/Dana-UltraLight.C2tJHM2c.woff"
  },
  "/_nuxt/debounce.BMmXVQ06.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c6-41wVT3bpo5V2ljosJqLfPyPo6AY\"",
    "mtime": "2024-08-25T06:30:11.584Z",
    "size": 2246,
    "path": "../public/_nuxt/debounce.BMmXVQ06.js"
  },
  "/_nuxt/default.tCL82LxR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"14ad-bi8X03dQxC6jb38rhXtfKADlpD0\"",
    "mtime": "2024-08-25T06:30:11.587Z",
    "size": 5293,
    "path": "../public/_nuxt/default.tCL82LxR.js"
  },
  "/_nuxt/DeleteAccountModal.vue.EFivCpW-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"efa-+4DMX77CoKhF7lJiFAVBbEFP9c0\"",
    "mtime": "2024-08-25T06:30:11.596Z",
    "size": 3834,
    "path": "../public/_nuxt/DeleteAccountModal.vue.EFivCpW-.js"
  },
  "/_nuxt/DoneCheckIcon.CEdYJ3I8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c6-ICC6hMFzPE9zbDNi4AZC35IhU2Q\"",
    "mtime": "2024-08-25T06:30:11.593Z",
    "size": 454,
    "path": "../public/_nuxt/DoneCheckIcon.CEdYJ3I8.js"
  },
  "/_nuxt/Drawer.DTnn6uZc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ad5-gQpp+OkcFa9k60WAx6AvA4G+SvI\"",
    "mtime": "2024-08-25T06:30:11.571Z",
    "size": 2773,
    "path": "../public/_nuxt/Drawer.DTnn6uZc.js"
  },
  "/_nuxt/EditPenIcon.CcoJGslu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ff-7DA57mOoBmumo/looWq0o7STyWM\"",
    "mtime": "2024-08-25T06:30:11.579Z",
    "size": 767,
    "path": "../public/_nuxt/EditPenIcon.CcoJGslu.js"
  },
  "/_nuxt/EmailInput.vue.gyXj-XDh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"63a-4v3zMq3It9+v/m/PBzIUsueinCc\"",
    "mtime": "2024-08-25T06:30:11.587Z",
    "size": 1594,
    "path": "../public/_nuxt/EmailInput.vue.gyXj-XDh.js"
  },
  "/_nuxt/entry.BZBDKKIU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10dd43-HZ6blJjLNKqM4b3ke5suUhIUo94\"",
    "mtime": "2024-08-25T06:30:11.613Z",
    "size": 1105219,
    "path": "../public/_nuxt/entry.BZBDKKIU.js"
  },
  "/_nuxt/entry.CorxdfQS.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2fbf-lc+T3ZYnO3UQ7TC8Fplbgk7VIjU\"",
    "mtime": "2024-08-25T06:30:11.562Z",
    "size": 12223,
    "path": "../public/_nuxt/entry.CorxdfQS.css"
  },
  "/_nuxt/error-404.BaMp-ULX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"907-QdhHxCts9fNIy8uxgXKzp6Oec0U\"",
    "mtime": "2024-08-25T06:30:11.597Z",
    "size": 2311,
    "path": "../public/_nuxt/error-404.BaMp-ULX.js"
  },
  "/_nuxt/error-404.BOwFbGAB.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e68-hlsnPvOJNEEWVEjbQnHBf9EhOdM\"",
    "mtime": "2024-08-25T06:30:11.562Z",
    "size": 3688,
    "path": "../public/_nuxt/error-404.BOwFbGAB.css"
  },
  "/_nuxt/error-500.CzZUE1u9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-QP983DB9m1oiDr87r1V1AYEhrfo\"",
    "mtime": "2024-08-25T06:30:11.562Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.CzZUE1u9.css"
  },
  "/_nuxt/error-500.DUwoTbSZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"78b-l3/SdUWW1tSrP6gb+Od2EpUj/oc\"",
    "mtime": "2024-08-25T06:30:11.601Z",
    "size": 1931,
    "path": "../public/_nuxt/error-500.DUwoTbSZ.js"
  },
  "/_nuxt/ErrorRedIcon.BkUlmJXL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6e3-4VRgiu4Ph5WctafyBZDhA3OUv9I\"",
    "mtime": "2024-08-25T06:30:11.585Z",
    "size": 1763,
    "path": "../public/_nuxt/ErrorRedIcon.BkUlmJXL.js"
  },
  "/_nuxt/fetch.BsvUWtk-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f6f-2LMAxX9KGi12GRbtJktyxDJIsrs\"",
    "mtime": "2024-08-25T06:30:11.602Z",
    "size": 3951,
    "path": "../public/_nuxt/fetch.BsvUWtk-.js"
  },
  "/_nuxt/FilterPortfolioDrawer.vue.CVW5wU5Z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"be5-civ020uZCvjSYLX0KpCSJTZQzWs\"",
    "mtime": "2024-08-25T06:30:11.578Z",
    "size": 3045,
    "path": "../public/_nuxt/FilterPortfolioDrawer.vue.CVW5wU5Z.js"
  },
  "/_nuxt/guest.D_TUMbLK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b7-t0EVPLGixweph1eQnvmkXDuq6Ag\"",
    "mtime": "2024-08-25T06:30:11.601Z",
    "size": 183,
    "path": "../public/_nuxt/guest.D_TUMbLK.js"
  },
  "/_nuxt/Header.BnsgLB0m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8e4-Xjl74W0vlzuyV1GyazxRMYFbzJM\"",
    "mtime": "2024-08-25T06:30:11.597Z",
    "size": 2276,
    "path": "../public/_nuxt/Header.BnsgLB0m.js"
  },
  "/_nuxt/Header.CKSV0QkR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"195-hfoAko88SaI6sL4CXkLbRx4vN5o\"",
    "mtime": "2024-08-25T06:30:11.585Z",
    "size": 405,
    "path": "../public/_nuxt/Header.CKSV0QkR.js"
  },
  "/_nuxt/Header.DRe3Awu3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19a-5mYZ4N8TgEGd/p2uS0Vlc0Rbops\"",
    "mtime": "2024-08-25T06:30:11.597Z",
    "size": 410,
    "path": "../public/_nuxt/Header.DRe3Awu3.js"
  },
  "/_nuxt/index.B8C8sYFE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"776-iL/uh9OoVEg+NvwYb8JnWnQhVSo\"",
    "mtime": "2024-08-25T06:30:11.570Z",
    "size": 1910,
    "path": "../public/_nuxt/index.B8C8sYFE.js"
  },
  "/_nuxt/index.BFlrOjGw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"606-uwxtvL6rSDsKP4WKAT9vcysJMHI\"",
    "mtime": "2024-08-25T06:30:11.605Z",
    "size": 1542,
    "path": "../public/_nuxt/index.BFlrOjGw.js"
  },
  "/_nuxt/index.BRjYnCn2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f3c-g+3OQGgmKIXIrEVayykH0NC1Xt8\"",
    "mtime": "2024-08-25T06:30:11.597Z",
    "size": 12092,
    "path": "../public/_nuxt/index.BRjYnCn2.js"
  },
  "/_nuxt/index.Btc3hpQd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4e5-huz6pNFPfP2T5P0KL1eJ4pYgW+A\"",
    "mtime": "2024-08-25T06:30:11.585Z",
    "size": 1253,
    "path": "../public/_nuxt/index.Btc3hpQd.js"
  },
  "/_nuxt/index.BUXSyYOH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9ad-l+VeWMZNBp8MvWaYYd/fQvhT2+s\"",
    "mtime": "2024-08-25T06:30:11.570Z",
    "size": 2477,
    "path": "../public/_nuxt/index.BUXSyYOH.js"
  },
  "/_nuxt/index.ByqHPu9M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e7d-XB0mfmnoF2s2o8Mz3+KC2ej2f3o\"",
    "mtime": "2024-08-25T06:30:11.581Z",
    "size": 11901,
    "path": "../public/_nuxt/index.ByqHPu9M.js"
  },
  "/_nuxt/index.C35y4Rml.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4e5-huz6pNFPfP2T5P0KL1eJ4pYgW+A\"",
    "mtime": "2024-08-25T06:30:11.570Z",
    "size": 1253,
    "path": "../public/_nuxt/index.C35y4Rml.js"
  },
  "/_nuxt/index.C4gIWHpA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3b0-JNFKvF5/9dlcyhrF8Kk9zibenXE\"",
    "mtime": "2024-08-25T06:30:11.570Z",
    "size": 944,
    "path": "../public/_nuxt/index.C4gIWHpA.js"
  },
  "/_nuxt/index.CBfn4Auw.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2b2-+fwQkGNfANuf2N7Y1+I4ai10DAk\"",
    "mtime": "2024-08-25T06:30:11.563Z",
    "size": 690,
    "path": "../public/_nuxt/index.CBfn4Auw.css"
  },
  "/_nuxt/index.CIRUvLNl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"49c2-vh9LAFExpauyJJXWDNxNrm/JJN0\"",
    "mtime": "2024-08-25T06:30:11.578Z",
    "size": 18882,
    "path": "../public/_nuxt/index.CIRUvLNl.js"
  },
  "/_nuxt/index.CnR52YKs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bb7-vLBxaxOOO4pNbGa/GO01h+YyeIE\"",
    "mtime": "2024-08-25T06:30:11.570Z",
    "size": 2999,
    "path": "../public/_nuxt/index.CnR52YKs.js"
  },
  "/_nuxt/index.CQmyLRRb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fc2-Krlb97RL3LQ6mnh1pFrsIpWJFtM\"",
    "mtime": "2024-08-25T06:30:11.570Z",
    "size": 4034,
    "path": "../public/_nuxt/index.CQmyLRRb.js"
  },
  "/_nuxt/index.D-u4Ijp2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"887-0fnDz4ToM3XruwFgp0K9qnlEV9I\"",
    "mtime": "2024-08-25T06:30:11.590Z",
    "size": 2183,
    "path": "../public/_nuxt/index.D-u4Ijp2.js"
  },
  "/_nuxt/index.DagiQ-0v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c61-v8kHEe34Ir6O7niCCAHyObzuF+w\"",
    "mtime": "2024-08-25T06:30:11.585Z",
    "size": 7265,
    "path": "../public/_nuxt/index.DagiQ-0v.js"
  },
  "/_nuxt/index.Dd-Th2vS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"dc5-wm0sOGzAAUSXoJJdbpi1Xuzbm9M\"",
    "mtime": "2024-08-25T06:30:11.595Z",
    "size": 3525,
    "path": "../public/_nuxt/index.Dd-Th2vS.js"
  },
  "/_nuxt/index.DwtPuN-L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"38fd5-Io6q2Es3mIMqEDq5yJMfITz5s0I\"",
    "mtime": "2024-08-25T06:30:11.591Z",
    "size": 233429,
    "path": "../public/_nuxt/index.DwtPuN-L.js"
  },
  "/_nuxt/index.GbXvWhev.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"132e-9bSuEiiU0BQcG0GmaiFqRL/1HGE\"",
    "mtime": "2024-08-25T06:30:11.569Z",
    "size": 4910,
    "path": "../public/_nuxt/index.GbXvWhev.js"
  },
  "/_nuxt/index.nOg-nqjL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"446-rJ0noMH5aV4kukq3RYkwT3sCuhY\"",
    "mtime": "2024-08-25T06:30:11.570Z",
    "size": 1094,
    "path": "../public/_nuxt/index.nOg-nqjL.js"
  },
  "/_nuxt/index.uVlVrvek.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"596-Fv1w8xN2BTU56I35plum5YdgDnE\"",
    "mtime": "2024-08-25T06:30:11.569Z",
    "size": 1430,
    "path": "../public/_nuxt/index.uVlVrvek.js"
  },
  "/_nuxt/index.wAUDsY6U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d8-nF13vYnIzse54PVz34XpEsCLeWY\"",
    "mtime": "2024-08-25T06:30:11.603Z",
    "size": 728,
    "path": "../public/_nuxt/index.wAUDsY6U.js"
  },
  "/_nuxt/intro.DqFNIc5J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"114-2UZPI2xThRqMjeuLoubfg3+NjmQ\"",
    "mtime": "2024-08-25T06:30:11.603Z",
    "size": 276,
    "path": "../public/_nuxt/intro.DqFNIc5J.js"
  },
  "/_nuxt/intro.Dz6eMQY0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"93a-lapJpEclaDn2V1gx6p4sBUR0j2c\"",
    "mtime": "2024-08-25T06:30:11.570Z",
    "size": 2362,
    "path": "../public/_nuxt/intro.Dz6eMQY0.js"
  },
  "/_nuxt/jalaliday.esm.DbiVIOeo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2019-8ey8qrqyXY5oFICD6QD2Goeu6kk\"",
    "mtime": "2024-08-25T06:30:11.585Z",
    "size": 8217,
    "path": "../public/_nuxt/jalaliday.esm.DbiVIOeo.js"
  },
  "/_nuxt/leaflet-src.esm.HdBnhJze.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2478b-MkvYPezfqtU0uYq7dPLhXLHxh7Y\"",
    "mtime": "2024-08-25T06:30:11.612Z",
    "size": 149387,
    "path": "../public/_nuxt/leaflet-src.esm.HdBnhJze.js"
  },
  "/_nuxt/LeftArrow.DTXm3Ci2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18b-DRKO22/Q4nlZU1gfMhXs4H2n3Ow\"",
    "mtime": "2024-08-25T06:30:11.591Z",
    "size": 395,
    "path": "../public/_nuxt/LeftArrow.DTXm3Ci2.js"
  },
  "/_nuxt/LoginImage.B-FRXo2S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9ee6-4duM0xdP9//Xx9EH6T1z/fCxaMU\"",
    "mtime": "2024-08-25T06:30:11.584Z",
    "size": 40678,
    "path": "../public/_nuxt/LoginImage.B-FRXo2S.js"
  },
  "/_nuxt/logo.CWtAjNaY.png": {
    "type": "image/png",
    "etag": "\"2ca5-GPJxutDI9yUpDsBtc2WHnwAH69Y\"",
    "mtime": "2024-08-25T06:30:11.562Z",
    "size": 11429,
    "path": "../public/_nuxt/logo.CWtAjNaY.png"
  },
  "/_nuxt/MainActionButton.Brc_0dv0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"158-72u9yiCi/HCrs+V8pR2acEL/mOU\"",
    "mtime": "2024-08-25T06:30:11.578Z",
    "size": 344,
    "path": "../public/_nuxt/MainActionButton.Brc_0dv0.js"
  },
  "/_nuxt/MainHeaderDesktop.vue.CBmh5PE5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a530-e3aF8sLrtxL2Qf9/iWgdzdAxQ9A\"",
    "mtime": "2024-08-25T06:30:11.603Z",
    "size": 107824,
    "path": "../public/_nuxt/MainHeaderDesktop.vue.CBmh5PE5.js"
  },
  "/_nuxt/manrope-bold.BuOzQPSR.woff": {
    "type": "font/woff",
    "etag": "\"6090-+nJ1eU/L5LzhYb5w6jMuUTrIj88\"",
    "mtime": "2024-08-25T06:30:11.557Z",
    "size": 24720,
    "path": "../public/_nuxt/manrope-bold.BuOzQPSR.woff"
  },
  "/_nuxt/manrope-light.nZ6UP_L-.woff": {
    "type": "font/woff",
    "etag": "\"6688-vlUpe0DttHCuV7zzZWhxFpSQAzM\"",
    "mtime": "2024-08-25T06:30:11.557Z",
    "size": 26248,
    "path": "../public/_nuxt/manrope-light.nZ6UP_L-.woff"
  },
  "/_nuxt/manrope-medium.9ZU66cuE.woff": {
    "type": "font/woff",
    "etag": "\"66b0-gPJXqANHUj4xVNKM2KU3ajtF5H8\"",
    "mtime": "2024-08-25T06:30:11.557Z",
    "size": 26288,
    "path": "../public/_nuxt/manrope-medium.9ZU66cuE.woff"
  },
  "/_nuxt/manrope-regular.DeX7n9ED.woff": {
    "type": "font/woff",
    "etag": "\"6680-QFDjoVusPCy/JbnpMiMhOOmrmDc\"",
    "mtime": "2024-08-25T06:30:11.557Z",
    "size": 26240,
    "path": "../public/_nuxt/manrope-regular.DeX7n9ED.woff"
  },
  "/_nuxt/manrope-semibold.DN7H1pwc.woff": {
    "type": "font/woff",
    "etag": "\"6634-8Yx1dpXHjAEzIYwXa6pwuXM/nGE\"",
    "mtime": "2024-08-25T06:30:11.557Z",
    "size": 26164,
    "path": "../public/_nuxt/manrope-semibold.DN7H1pwc.woff"
  },
  "/_nuxt/manrope-thin.CbUh-DwB.woff": {
    "type": "font/woff",
    "etag": "\"5fd4-/J2SFy5i/NQd3rIGe+rF6L29N7s\"",
    "mtime": "2024-08-25T06:30:11.557Z",
    "size": 24532,
    "path": "../public/_nuxt/manrope-thin.CbUh-DwB.woff"
  },
  "/_nuxt/marker-icon-2x.D4k_ikNW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d0f-9taCJZEDvhselFvjnU+0TJnTs3w\"",
    "mtime": "2024-08-25T06:30:11.602Z",
    "size": 3343,
    "path": "../public/_nuxt/marker-icon-2x.D4k_ikNW.js"
  },
  "/_nuxt/marker-icon.C2eJqgqv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7db-sJriJD5q2dV0lEGFeC08mKiMJGk\"",
    "mtime": "2024-08-25T06:30:11.585Z",
    "size": 2011,
    "path": "../public/_nuxt/marker-icon.C2eJqgqv.js"
  },
  "/_nuxt/marker-shadow.DU6CIJ0p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"36f-qFgYeALZmdm0hiP2vulXRvkHXyo\"",
    "mtime": "2024-08-25T06:30:11.595Z",
    "size": 879,
    "path": "../public/_nuxt/marker-shadow.DU6CIJ0p.js"
  },
  "/_nuxt/Modal.vue.DR1Z-I9v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"381-G8WomvJ+cehNlvXHTdT32wNpTvs\"",
    "mtime": "2024-08-25T06:30:11.591Z",
    "size": 897,
    "path": "../public/_nuxt/Modal.vue.DR1Z-I9v.js"
  },
  "/_nuxt/NotificationDrawer.vue.CkrOT4Ai.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"de8-TN+gJBT15ctiJ6h0wkyxN0F1K3E\"",
    "mtime": "2024-08-25T06:30:11.591Z",
    "size": 3560,
    "path": "../public/_nuxt/NotificationDrawer.vue.CkrOT4Ai.js"
  },
  "/_nuxt/NotificationIcon.Dm1QwAT3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"141f-bYa8A2bwxjwR0QbhtZxsrsxsndk\"",
    "mtime": "2024-08-25T06:30:11.580Z",
    "size": 5151,
    "path": "../public/_nuxt/NotificationIcon.Dm1QwAT3.js"
  },
  "/_nuxt/nuxt-link.7VtGiUgi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10ff-MDyHYCt80vIEs6UcWyp7rcZqcZE\"",
    "mtime": "2024-08-25T06:30:11.601Z",
    "size": 4351,
    "path": "../public/_nuxt/nuxt-link.7VtGiUgi.js"
  },
  "/_nuxt/OtpForm.vue.BVa7q31A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c13-mH78TrYYXb8qeNdUbOMxqZmlt38\"",
    "mtime": "2024-08-25T06:30:11.590Z",
    "size": 3091,
    "path": "../public/_nuxt/OtpForm.vue.BVa7q31A.js"
  },
  "/_nuxt/PageHeader.vue.DW8gGZWi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"265-gPtTdgjKUBOef1yLAVm4Hvd0woU\"",
    "mtime": "2024-08-25T06:30:11.596Z",
    "size": 613,
    "path": "../public/_nuxt/PageHeader.vue.DW8gGZWi.js"
  },
  "/_nuxt/PageLoading.BSEmWLzc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7a-MXYA7nWu/n8D/bZnEv8DvdXzuqY\"",
    "mtime": "2024-08-25T06:30:11.564Z",
    "size": 122,
    "path": "../public/_nuxt/PageLoading.BSEmWLzc.css"
  },
  "/_nuxt/PageLoading.vue.DJQ5gRmq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"604-WOEY5ctOGt7xKslVehu+6o7RFLY\"",
    "mtime": "2024-08-25T06:30:11.612Z",
    "size": 1540,
    "path": "../public/_nuxt/PageLoading.vue.DJQ5gRmq.js"
  },
  "/_nuxt/panel.C5MX3O2e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4b6-/vUI8Nl+DstbaHTxNmR+0yRFkPI\"",
    "mtime": "2024-08-25T06:30:11.596Z",
    "size": 1206,
    "path": "../public/_nuxt/panel.C5MX3O2e.js"
  },
  "/_nuxt/password.Cbnd4cPf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"79-5SM+YdMAYBkruI6tPJMS1bfwhes\"",
    "mtime": "2024-08-25T06:30:11.585Z",
    "size": 121,
    "path": "../public/_nuxt/password.Cbnd4cPf.js"
  },
  "/_nuxt/pay.aFEIXsuh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ef1-zRUsZFxJpU8IB7q7keh9RROrUlI\"",
    "mtime": "2024-08-25T06:30:11.597Z",
    "size": 3825,
    "path": "../public/_nuxt/pay.aFEIXsuh.js"
  },
  "/_nuxt/PayResultModal.CnCKiL_0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5ec-eJSpapNYnPCYYvzw0b07VoCqLrY\"",
    "mtime": "2024-08-25T06:30:11.591Z",
    "size": 1516,
    "path": "../public/_nuxt/PayResultModal.CnCKiL_0.js"
  },
  "/_nuxt/portfolio-single.q1vz9iP4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"21b-YmBpjB3DuC1qEmhAUvIEYHxxiLA\"",
    "mtime": "2024-08-25T06:30:11.578Z",
    "size": 539,
    "path": "../public/_nuxt/portfolio-single.q1vz9iP4.js"
  },
  "/_nuxt/PortfolioItem.vue.CU8Hf3on.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c93-rVYRk9Xv8MA9WYqQpuyY4oT2I5k\"",
    "mtime": "2024-08-25T06:30:11.591Z",
    "size": 3219,
    "path": "../public/_nuxt/PortfolioItem.vue.CU8Hf3on.js"
  },
  "/_nuxt/PortfolioPageBackIcon.5-vMt0Fq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"22fd7-wZJ0cHkpitRkZuOptZ71wr8hSDc\"",
    "mtime": "2024-08-25T06:30:11.612Z",
    "size": 143319,
    "path": "../public/_nuxt/PortfolioPageBackIcon.5-vMt0Fq.js"
  },
  "/_nuxt/PortfolioPageBackIcon.D3qJaaX7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6994-lAi9JzRBhE0FvL4GIGqsPbOAJJE\"",
    "mtime": "2024-08-25T06:30:11.563Z",
    "size": 27028,
    "path": "../public/_nuxt/PortfolioPageBackIcon.D3qJaaX7.css"
  },
  "/_nuxt/ProfileLink.vue.TecWJKYa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"357-5v4ppQKA/Nt9R5Bs1qg2VkfCGlE\"",
    "mtime": "2024-08-25T06:30:11.592Z",
    "size": 855,
    "path": "../public/_nuxt/ProfileLink.vue.TecWJKYa.js"
  },
  "/_nuxt/Rating.vue.DbCL2cbY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"89c-rLfMr8nwCoX/g6l9BYkCQgk4cHQ\"",
    "mtime": "2024-08-25T06:30:11.599Z",
    "size": 2204,
    "path": "../public/_nuxt/Rating.vue.DbCL2cbY.js"
  },
  "/_nuxt/RegisterForm.vue.CqWwfF2g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10f1-XlJHTfViFN2AEaRbSrkZ3BWcS6k\"",
    "mtime": "2024-08-25T06:30:11.603Z",
    "size": 4337,
    "path": "../public/_nuxt/RegisterForm.vue.CqWwfF2g.js"
  },
  "/_nuxt/sanctum.auth.CC9uGEp5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17e-5KfqAtYmI2pTZS0H+xhYdlHgrGY\"",
    "mtime": "2024-08-25T06:30:11.578Z",
    "size": 382,
    "path": "../public/_nuxt/sanctum.auth.CC9uGEp5.js"
  },
  "/_nuxt/sanctum.guest.DvN5gpFh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12b-lI/gsytAVrT+/uCWSTO9iy2rh5U\"",
    "mtime": "2024-08-25T06:30:11.591Z",
    "size": 299,
    "path": "../public/_nuxt/sanctum.guest.DvN5gpFh.js"
  },
  "/_nuxt/Search.Dl_7jR5y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"535-I0VM1s6HijyTVI+dc1776q54MZ4\"",
    "mtime": "2024-08-25T06:30:11.591Z",
    "size": 1333,
    "path": "../public/_nuxt/Search.Dl_7jR5y.js"
  },
  "/_nuxt/SearchIcon.-mY2GwOx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3b0-fi2sj9u0FkUW4/JrD5kN7DBStwA\"",
    "mtime": "2024-08-25T06:30:11.578Z",
    "size": 944,
    "path": "../public/_nuxt/SearchIcon.-mY2GwOx.js"
  },
  "/_nuxt/security.L6UP--95.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9a4-LSdtS8u8q5bHZ1+3aJgu5PPTQTA\"",
    "mtime": "2024-08-25T06:30:11.585Z",
    "size": 2468,
    "path": "../public/_nuxt/security.L6UP--95.js"
  },
  "/_nuxt/SecurityIcon.fXuG2CHh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1485-2OEz+vjSjg46GjlqMYxEYxX4zig\"",
    "mtime": "2024-08-25T06:30:11.570Z",
    "size": 5253,
    "path": "../public/_nuxt/SecurityIcon.fXuG2CHh.js"
  },
  "/_nuxt/SecurityLinkBox.vue.Crbu-pAP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"82f-oNv7kAf7JBUVwhpcs3Z6r7olgmQ\"",
    "mtime": "2024-08-25T06:30:11.578Z",
    "size": 2095,
    "path": "../public/_nuxt/SecurityLinkBox.vue.Crbu-pAP.js"
  },
  "/_nuxt/ServiceGrid.vue.DzNgI-h8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"23e-0pYWeeohbG65xvhdZrreQjpwSEo\"",
    "mtime": "2024-08-25T06:30:11.604Z",
    "size": 574,
    "path": "../public/_nuxt/ServiceGrid.vue.DzNgI-h8.js"
  },
  "/_nuxt/ServiceItem.vue.Cxl-8Amf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"322-5hHnd+XItjbxX5YxEdiGkZtQ/Bo\"",
    "mtime": "2024-08-25T06:30:11.585Z",
    "size": 802,
    "path": "../public/_nuxt/ServiceItem.vue.Cxl-8Amf.js"
  },
  "/_nuxt/SetPasswordDrawer.D0Aqsj9l.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12a-nTVenJt3JvO5V09vGPsYAYwc4vE\"",
    "mtime": "2024-08-25T06:30:11.569Z",
    "size": 298,
    "path": "../public/_nuxt/SetPasswordDrawer.D0Aqsj9l.css"
  },
  "/_nuxt/SetPasswordDrawer.vue.2a5fFXHC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"44d9-FejAxCOLGHxaKabUFQ3R1LJgAiE\"",
    "mtime": "2024-08-25T06:30:11.612Z",
    "size": 17625,
    "path": "../public/_nuxt/SetPasswordDrawer.vue.2a5fFXHC.js"
  },
  "/_nuxt/SideBar.vue.CsRe3ILh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"490-u/jNABy/3ItIt4QeWRf3hvsB2Y8\"",
    "mtime": "2024-08-25T06:30:11.578Z",
    "size": 1168,
    "path": "../public/_nuxt/SideBar.vue.CsRe3ILh.js"
  },
  "/_nuxt/SideBarLink.vue.D88Yrk3A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d6a-k1SxlfVyoJM0bf2ERLljzMbHU+M\"",
    "mtime": "2024-08-25T06:30:11.586Z",
    "size": 3434,
    "path": "../public/_nuxt/SideBarLink.vue.D88Yrk3A.js"
  },
  "/_nuxt/SortPortfolioDrawer.vue.BbwIooy_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"865-vC5NVj43qgcyzuAK7TeAVqBqXR4\"",
    "mtime": "2024-08-25T06:30:11.598Z",
    "size": 2149,
    "path": "../public/_nuxt/SortPortfolioDrawer.vue.BbwIooy_.js"
  },
  "/_nuxt/splide.min.Bs6QcD0v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"85e4-udttd2nFuttvM6btYKzFEFKiwyA\"",
    "mtime": "2024-08-25T06:30:11.612Z",
    "size": 34276,
    "path": "../public/_nuxt/splide.min.Bs6QcD0v.js"
  },
  "/_nuxt/splide.U4EzRbvU.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12a7-xEIB+6xht1JWhsJfJnQWrpDp1r4\"",
    "mtime": "2024-08-25T06:30:11.563Z",
    "size": 4775,
    "path": "../public/_nuxt/splide.U4EzRbvU.css"
  },
  "/_nuxt/SupportItem.8Zk-agvV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6bc-TQ/6BIq7u8fhXYPSjhoZqDieFug\"",
    "mtime": "2024-08-25T06:30:11.585Z",
    "size": 1724,
    "path": "../public/_nuxt/SupportItem.8Zk-agvV.js"
  },
  "/_nuxt/TelInput.vue.RFTpXcqE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bef-BwqFWVQurejYA6TcNcYrvP3VH00\"",
    "mtime": "2024-08-25T06:30:11.596Z",
    "size": 3055,
    "path": "../public/_nuxt/TelInput.vue.RFTpXcqE.js"
  },
  "/_nuxt/Tick.vue.cyugBTDL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"51f-GeddpiZu7GfhruKWvTtLi29MCHs\"",
    "mtime": "2024-08-25T06:30:11.578Z",
    "size": 1311,
    "path": "../public/_nuxt/Tick.vue.cyugBTDL.js"
  },
  "/_nuxt/ticket.BQVewRSv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10ab-x8u2nZ8om9Sz/Nha2Wn5Rn0hgT0\"",
    "mtime": "2024-08-25T06:30:11.591Z",
    "size": 4267,
    "path": "../public/_nuxt/ticket.BQVewRSv.js"
  },
  "/_nuxt/ticket.DV5hOwYM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"348-IIlE/3oA7c+I2u3IH8lxgdboUKg\"",
    "mtime": "2024-08-25T06:30:11.585Z",
    "size": 840,
    "path": "../public/_nuxt/ticket.DV5hOwYM.js"
  },
  "/_nuxt/ticket.Dz6DtOXl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3a2-OXLTxRo8z8RZLqhJSlAifhxu0l4\"",
    "mtime": "2024-08-25T06:30:11.593Z",
    "size": 930,
    "path": "../public/_nuxt/ticket.Dz6DtOXl.js"
  },
  "/_nuxt/TicketBottomBox.L0cSB2D5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"610-dNHDq4ivgO3nj3V04y1tz9EdbMQ\"",
    "mtime": "2024-08-25T06:30:11.612Z",
    "size": 1552,
    "path": "../public/_nuxt/TicketBottomBox.L0cSB2D5.js"
  },
  "/_nuxt/TicketItem.vue.CjXCwjjb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"21dd-p63U+kq82Y90maLwE8w5wuf0+Ek\"",
    "mtime": "2024-08-25T06:30:11.590Z",
    "size": 8669,
    "path": "../public/_nuxt/TicketItem.vue.CjXCwjjb.js"
  },
  "/_nuxt/Title.DsFGXBdk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5e-hZqqd3DwrpjKF3bC87PjzhkPK5Y\"",
    "mtime": "2024-08-25T06:30:11.596Z",
    "size": 94,
    "path": "../public/_nuxt/Title.DsFGXBdk.js"
  },
  "/_nuxt/Title.vue.Bhk20H6X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e6-hcEENu2JLSaTIvEjqpgjtnQ9C/A\"",
    "mtime": "2024-08-25T06:30:11.603Z",
    "size": 230,
    "path": "../public/_nuxt/Title.vue.Bhk20H6X.js"
  },
  "/_nuxt/upgrade.DyIlFRII.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c33-ObOMvmGAjOOxAYMoiPp4Ki0+QFk\"",
    "mtime": "2024-08-25T06:30:11.578Z",
    "size": 7219,
    "path": "../public/_nuxt/upgrade.DyIlFRII.js"
  },
  "/_nuxt/UpgradeItem.C17oD9bk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"30b-L79A7gCGb3ndZTDs1OC5q2HrOIE\"",
    "mtime": "2024-08-25T06:30:11.578Z",
    "size": 779,
    "path": "../public/_nuxt/UpgradeItem.C17oD9bk.js"
  },
  "/_nuxt/useCustomFetch.Kl33KG4X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"162-sBuJ0m4tpGrU96Ctwv4GsTplrow\"",
    "mtime": "2024-08-25T06:30:11.591Z",
    "size": 354,
    "path": "../public/_nuxt/useCustomFetch.Kl33KG4X.js"
  },
  "/_nuxt/useDevice.jMeP9CXa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"50-rB4WrWBjaSADl5A13d47KEyR3W8\"",
    "mtime": "2024-08-25T06:30:11.570Z",
    "size": 80,
    "path": "../public/_nuxt/useDevice.jMeP9CXa.js"
  },
  "/_nuxt/useSanctumAuth.D_ZKC7qp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"459-UD8Z83yh7S3uWZM9qdqhz7tqfoE\"",
    "mtime": "2024-08-25T06:30:11.578Z",
    "size": 1113,
    "path": "../public/_nuxt/useSanctumAuth.D_ZKC7qp.js"
  },
  "/_nuxt/v3-infinite-loading.es.s8-wYQ3V.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a02-MEiUTQf5pHfPoIDNHfRuIx18+2Q\"",
    "mtime": "2024-08-25T06:30:11.602Z",
    "size": 2562,
    "path": "../public/_nuxt/v3-infinite-loading.es.s8-wYQ3V.js"
  },
  "/_nuxt/vue-leaflet.es.DbUpf8mB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3c8d-W6uQyxTWGZtMRY7uMm2Ff8Kp9Fc\"",
    "mtime": "2024-08-25T06:30:11.609Z",
    "size": 15501,
    "path": "../public/_nuxt/vue-leaflet.es.DbUpf8mB.js"
  },
  "/_nuxt/_id_.BR0V1fr1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"126ec-xRZSophJgVX/9odP7j+tKxaKjCk\"",
    "mtime": "2024-08-25T06:30:11.612Z",
    "size": 75500,
    "path": "../public/_nuxt/_id_.BR0V1fr1.js"
  },
  "/_nuxt/_id_.CIH4A7QY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"31e4-SmsK1ebyKjNH1zaVas1KGjdc9D8\"",
    "mtime": "2024-08-25T06:30:11.570Z",
    "size": 12772,
    "path": "../public/_nuxt/_id_.CIH4A7QY.js"
  },
  "/_nuxt/_id_.CRj1zOcO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"36f-FSw06ge9sT6o/JDlCcOHCkQiOBo\"",
    "mtime": "2024-08-25T06:30:11.599Z",
    "size": 879,
    "path": "../public/_nuxt/_id_.CRj1zOcO.js"
  },
  "/_nuxt/_id_.D7MzkQDE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d67-/VxzwrBUX07y0ppf0sBQrsnni4M\"",
    "mtime": "2024-08-25T06:30:11.578Z",
    "size": 7527,
    "path": "../public/_nuxt/_id_.D7MzkQDE.js"
  },
  "/_nuxt/_plugin-vue_export-helper.DlAUqK2U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2024-08-25T06:30:11.596Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.DlAUqK2U.js"
  },
  "/images/artist/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"f48e-xn+Ew1XrdZ5DnQxuYEQ8hrGnb2E\"",
    "mtime": "2024-04-29T21:44:53.603Z",
    "size": 62606,
    "path": "../public/images/artist/1.jpg"
  },
  "/images/artist/2.png": {
    "type": "image/png",
    "etag": "\"6ebf-4Ufymp8VazIZnBN1Cz6nPLfgomI\"",
    "mtime": "2024-05-04T23:32:42.651Z",
    "size": 28351,
    "path": "../public/images/artist/2.png"
  },
  "/images/artist/banner.png": {
    "type": "image/png",
    "etag": "\"ca53-clel4Pszt1ufJ30KuuhtMZ/RT4w\"",
    "mtime": "2024-05-06T00:18:04.625Z",
    "size": 51795,
    "path": "../public/images/artist/banner.png"
  },
  "/images/artist-slider/1.png": {
    "type": "image/png",
    "etag": "\"ae0b-lGHREMZZxyOaykgFkHlZQft8Slc\"",
    "mtime": "2024-04-29T21:44:53.603Z",
    "size": 44555,
    "path": "../public/images/artist-slider/1.png"
  },
  "/images/artist-slider/desktop-1.png": {
    "type": "image/png",
    "etag": "\"185ea4-VNn6/MZZ2mfdupHUEbBMAENC7ZM\"",
    "mtime": "2024-06-27T17:15:01.381Z",
    "size": 1597092,
    "path": "../public/images/artist-slider/desktop-1.png"
  },
  "/images/portfolio/like_icon.png": {
    "type": "image/png",
    "etag": "\"4cd-WerhbDRkV88Q0+MWrZ5VIOK/zVs\"",
    "mtime": "2024-05-05T09:39:27.931Z",
    "size": 1229,
    "path": "../public/images/portfolio/like_icon.png"
  },
  "/images/services/1.png": {
    "type": "image/png",
    "etag": "\"a65-Ka9GIgFX6fKYq53a6P6SYnDtGS8\"",
    "mtime": "2024-04-29T21:44:53.604Z",
    "size": 2661,
    "path": "../public/images/services/1.png"
  },
  "/images/services/2.png": {
    "type": "image/png",
    "etag": "\"c22-0eYmuwIUrOFFqSXSK88q1LLrWKE\"",
    "mtime": "2024-04-29T21:44:53.604Z",
    "size": 3106,
    "path": "../public/images/services/2.png"
  },
  "/images/services/3.png": {
    "type": "image/png",
    "etag": "\"930-cdwSaWhLmIzKGXJQT+O3WQ2h3K4\"",
    "mtime": "2024-04-29T21:44:53.604Z",
    "size": 2352,
    "path": "../public/images/services/3.png"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-gdKRrs8tg5J0AFaAS9swqCK7w5I\"",
    "mtime": "2024-08-25T06:30:23.021Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/_nuxt/builds/meta/14ce60b5-e426-417f-8677-206f462cd37d.json": {
    "type": "application/json",
    "etag": "\"8b-/7Rq4ZatJq3QF0MJnNyizYA6Pco\"",
    "mtime": "2024-08-25T06:30:23.022Z",
    "size": 139,
    "path": "../public/_nuxt/builds/meta/14ce60b5-e426-417f-8677-206f462cd37d.json"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises$1.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta":{"maxAge":31536000},"/_nuxt/builds":{"maxAge":1},"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_EA6Cgj = () => import('./routes/api/index.mjs');
const _lazy_zfhkOZ = () => import('./routes/api/index2.mjs');
const _lazy_HdnILu = () => import('./routes/api/index3.mjs');
const _lazy_72yggJ = () => import('./routes/api/index4.mjs');
const _lazy_MbvbdF = () => import('./routes/api/index5.mjs');
const _lazy_qFdOOH = () => import('./routes/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/artists', handler: _lazy_EA6Cgj, lazy: true, middleware: false, method: undefined },
  { route: '/api/intros', handler: _lazy_zfhkOZ, lazy: true, middleware: false, method: undefined },
  { route: '/api/notifications', handler: _lazy_HdnILu, lazy: true, middleware: false, method: undefined },
  { route: '/api/portfolios', handler: _lazy_72yggJ, lazy: true, middleware: false, method: undefined },
  { route: '/api/services', handler: _lazy_MbvbdF, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_qFdOOH, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_qFdOOH, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((err) => {
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
  }
  server.on("request", function(req, res) {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", function() {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", function(socket) {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", function() {
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    if (options.development) {
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        return Promise.resolve(false);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((err) => {
      const errString = typeof err === "string" ? err : JSON.stringify(err);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { $fetch as $, setCookie as A, getCookie as B, deleteCookie as C, createHooks as D, splitCookiesString as E, appendResponseHeader as F, FetchError as G, getRequestURL as H, parseQuery as I, withTrailingSlash as J, withoutTrailingSlash as K, hash as L, nodeServer as M, send as a, setResponseStatus as b, setResponseHeaders as c, defineEventHandler as d, eventHandler as e, useRuntimeConfig as f, getResponseStatus as g, getQuery as h, createError$1 as i, joinURL as j, getRouteRules as k, getResponseStatusText as l, hasProtocol as m, isScriptProtocol as n, getRequestHeaders as o, parseURL as p, klona as q, parse as r, setResponseHeader as s, getRequestHeader as t, useNitroApp as u, defu as v, withQuery as w, sanitizeStatusCode as x, destr as y, isEqual as z };
//# sourceMappingURL=runtime.mjs.map