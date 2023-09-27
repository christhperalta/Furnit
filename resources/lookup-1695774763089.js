(function(window, undefined) {
  var dictionary = {
    "9ef7b08e-8166-4d24-ad52-421b47b0c180": "screen 4 - Escaner",
    "f92dd872-337e-473c-91e4-d541fcb599c2": "Screen 2-conf",
    "0ae0f11d-758a-4236-b614-0127abb9aad0": "screen 5 - Detalle de producto",
    "01f6f61f-cb59-4884-97a1-764175e89317": "screen 6 - Comentario",
    "467e588f-9371-46ff-a2f7-606fd3e54cf7": "screen 8 -  busqueda manual",
    "d013b922-f53d-4de2-a39c-c6f2ac44bd58": "screen 3 - Cotizacion",
    "aadf556d-7c69-45b2-95ab-b356661123bd": "screen - products",
    "f27369ff-b073-47e8-a9bb-51b41b061bab": "screen 7 - búsqueda de cotización",
    "5fdb26a5-4f8c-4d65-8053-d49cce3c8a13": "screen 8 - PDF",
    "db07ace6-69cc-4716-9264-a4c1b8f89932": "screen- 1",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);