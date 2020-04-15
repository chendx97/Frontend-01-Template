function parseURL(url){
    const a = document.createElement('a');
    a.href = url;
    return {
      href: url,
      origin: a.origin,
      protocol: a.protocol.replace(':', ''),
      username: a.username,
      password: a.password,
      host: a.host,
      port: a.port,
      pathname: a.pathname,
      search: a.search,
      searcParams: (function() {
        var ret = {};
        var seg = a.search.replace(/^\?/, '').split('&').filter(function(v,i){
            if (v!==''&&v.indexOf('=')) {
                return true;
            }
        });
        seg.forEach( function(element, index) {
            var idx = element.indexOf('=');
            var key = element.substring(0, idx);
            var val = element.substring(idx+1);
            ret[key] = val;
        });
        return ret;
      })(),
      hash: a.hash
    };
}
