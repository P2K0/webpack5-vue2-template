const catchError = (fn) => fn.then((res) => [null, res]).catch((err) => [err]);

export default catchError;
