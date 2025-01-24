var wms_layers = [];
var format_nama_jalan_0 = new ol.format.GeoJSON();
var features_nama_jalan_0 = format_nama_jalan_0.readFeatures(json_nama_jalan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nama_jalan_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_nama_jalan_0.addFeatures(features_nama_jalan_0);var lyr_nama_jalan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nama_jalan_0, 
                style: style_nama_jalan_0,
                title: '<img src="styles/legend/nama_jalan_0.png" /> nama_jalan'
            });var format_Gang_1 = new ol.format.GeoJSON();
var features_Gang_1 = format_Gang_1.readFeatures(json_Gang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gang_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gang_1.addFeatures(features_Gang_1);var lyr_Gang_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gang_1, 
                style: style_Gang_1,
                title: '<img src="styles/legend/Gang_1.png" /> Gang'
            });var format_Nama_Sungai_2 = new ol.format.GeoJSON();
var features_Nama_Sungai_2 = format_Nama_Sungai_2.readFeatures(json_Nama_Sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nama_Sungai_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Nama_Sungai_2.addFeatures(features_Nama_Sungai_2);var lyr_Nama_Sungai_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nama_Sungai_2, 
                style: style_Nama_Sungai_2,
                title: '<img src="styles/legend/Nama_Sungai_2.png" /> Nama_Sungai'
            });var format_Tempat_3 = new ol.format.GeoJSON();
var features_Tempat_3 = format_Tempat_3.readFeatures(json_Tempat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tempat_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tempat_3.addFeatures(features_Tempat_3);var lyr_Tempat_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tempat_3, 
                style: style_Tempat_3,
                title: '<img src="styles/legend/Tempat_3.png" /> Tempat'
            });

lyr_nama_jalan_0.setVisible(true);lyr_Gang_1.setVisible(true);lyr_Nama_Sungai_2.setVisible(true);lyr_Tempat_3.setVisible(true);
var layersList = [lyr_nama_jalan_0,lyr_Gang_1,lyr_Nama_Sungai_2,lyr_Tempat_3];
lyr_nama_jalan_0.set('fieldAliases', {'id': 'id', 'Nama_Jalan': 'Nama_Jalan', 'Sungai': 'Sungai', });
lyr_Gang_1.set('fieldAliases', {'id': 'id', 'Gang': 'Gang', });
lyr_Nama_Sungai_2.set('fieldAliases', {'id': 'id', 'Sungai': 'Sungai', });
lyr_Tempat_3.set('fieldAliases', {'id': 'id', 'Tempat': 'Tempat', 'photo': 'photo', });
lyr_nama_jalan_0.set('fieldImages', {'id': 'TextEdit', 'Nama_Jalan': 'TextEdit', 'Sungai': 'TextEdit', });
lyr_Gang_1.set('fieldImages', {'id': 'TextEdit', 'Gang': 'TextEdit', });
lyr_Nama_Sungai_2.set('fieldImages', {'id': 'TextEdit', 'Sungai': 'TextEdit', });
lyr_Tempat_3.set('fieldImages', {'id': 'TextEdit', 'Tempat': 'TextEdit', 'photo': 'Photo', });
lyr_nama_jalan_0.set('fieldLabels', {'id': 'no label', 'Nama_Jalan': 'no label', 'Sungai': 'no label', });
lyr_Gang_1.set('fieldLabels', {'id': 'no label', 'Gang': 'no label', });
lyr_Nama_Sungai_2.set('fieldLabels', {'id': 'inline label', 'Sungai': 'inline label', });
lyr_Tempat_3.set('fieldLabels', {'id': 'inline label', 'Tempat': 'inline label', 'photo': 'inline label', });
lyr_Tempat_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});