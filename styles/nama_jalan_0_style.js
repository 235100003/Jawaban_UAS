var size = 0;
var placement = 'point';

var style_nama_jalan_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.670588235294)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 14}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,31,31,0.670588235294)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};
