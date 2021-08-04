var wms_layers = [];


        var lyr_GloogleMaps_0 = new ol.layer.Tile({
            'title': 'Gloogle Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_VULNERABILIDADMORELIA_1 = new ol.format.GeoJSON();
var features_VULNERABILIDADMORELIA_1 = format_VULNERABILIDADMORELIA_1.readFeatures(json_VULNERABILIDADMORELIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VULNERABILIDADMORELIA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VULNERABILIDADMORELIA_1.addFeatures(features_VULNERABILIDADMORELIA_1);
var lyr_VULNERABILIDADMORELIA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VULNERABILIDADMORELIA_1, 
                style: style_VULNERABILIDADMORELIA_1,
                interactive: true,
    title: 'VULNERABILIDAD MORELIA<br />\
    <img src="styles/legend/VULNERABILIDADMORELIA_1_0.png" /> 0 - 0.0097<br />\
    <img src="styles/legend/VULNERABILIDADMORELIA_1_1.png" /> 0.0097 - 0.0278<br />\
    <img src="styles/legend/VULNERABILIDADMORELIA_1_2.png" /> 0.0278 - 0.0558<br />\
    <img src="styles/legend/VULNERABILIDADMORELIA_1_3.png" /> 0.0558 - 0.0862<br />\
    <img src="styles/legend/VULNERABILIDADMORELIA_1_4.png" /> 0.0862 - 0.3606<br />'
        });

lyr_GloogleMaps_0.setVisible(true);lyr_VULNERABILIDADMORELIA_1.setVisible(true);
var layersList = [lyr_GloogleMaps_0,lyr_VULNERABILIDADMORELIA_1];
lyr_VULNERABILIDADMORELIA_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'TIPOMZA': 'TIPOMZA', 'AREA': 'AREA', 'GRADO_VULNE': 'GRADO_VULNE', });
lyr_VULNERABILIDADMORELIA_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'TIPOMZA': 'TextEdit', 'AREA': 'TextEdit', 'GRADO_VULNE': 'TextEdit', });
lyr_VULNERABILIDADMORELIA_1.set('fieldLabels', {'CVEGEO': 'inline label', 'TIPOMZA': 'inline label', 'AREA': 'inline label', 'GRADO_VULNE': 'inline label', });
lyr_VULNERABILIDADMORELIA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});