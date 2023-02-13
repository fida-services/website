interface ParamsType {
  [param: string]: string
}

export function getQueryParams() {
  const url = window.location.search;
  const paramArr = url.slice(url.indexOf('?') + 1).split('&');
  const params: ParamsType = {};
  for (const param of paramArr) {
    const [key, val] = param.split('=');
    params[key] = decodeURIComponent(val);
  }
  return params;
}
