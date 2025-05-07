var wms_layers = [];

var format_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_0 = new ol.format.GeoJSON();
var features_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_0 = format_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_0.readFeatures(json_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_0.addFeatures(features_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_0);
var lyr_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_0, 
                style: style_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_0,
                popuplayertitle: 'PNOA_MA_OF_ETRS89_HU31_h25_0118B_4',
                interactive: true,
                title: '<img src="styles/legend/PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_0.png" /> PNOA_MA_OF_ETRS89_HU31_h25_0118B_4'
            });
var format_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_1 = new ol.format.GeoJSON();
var features_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_1 = format_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_1.readFeatures(json_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_1.addFeatures(features_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_1);
var lyr_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_1, 
                style: style_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_1,
                popuplayertitle: 'PNOA_MA_OF_ETRS89_HU31_h25_0118B_4',
                interactive: true,
                title: '<img src="styles/legend/PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_1.png" /> PNOA_MA_OF_ETRS89_HU31_h25_0118B_4'
            });

        var lyr_Argenmaptopogrfico_2 = new ol.layer.Tile({
            'title': 'Argenmap (topográfico)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_topo@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_espaisprotegits_3 = new ol.format.GeoJSON();
var features_espaisprotegits_3 = format_espaisprotegits_3.readFeatures(json_espaisprotegits_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_espaisprotegits_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_espaisprotegits_3.addFeatures(features_espaisprotegits_3);
var lyr_espaisprotegits_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_espaisprotegits_3, 
                style: style_espaisprotegits_3,
                popuplayertitle: 'espaisprotegits',
                interactive: true,
    title: 'espaisprotegits<br />\
    <img src="styles/legend/espaisprotegits_3_0.png" /> <br />\
    <img src="styles/legend/espaisprotegits_3_1.png" /> Aigüestortes<br />\
    <img src="styles/legend/espaisprotegits_3_2.png" /> Alta Garrotxa-Massís de les Salines<br />\
    <img src="styles/legend/espaisprotegits_3_3.png" /> Delta de l\'Ebre<br />\
    <img src="styles/legend/espaisprotegits_3_4.png" /> El Montseny<br />\
    <img src="styles/legend/espaisprotegits_3_5.png" /> Zona Volcànica de la Garrotxa<br />' });

lyr_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_0.setVisible(true);lyr_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_1.setVisible(true);lyr_Argenmaptopogrfico_2.setVisible(true);lyr_espaisprotegits_3.setVisible(true);
var layersList = [lyr_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_0,lyr_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_1,lyr_Argenmaptopogrfico_2,lyr_espaisprotegits_3];
lyr_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_0.set('fieldAliases', {'FECHA': 'FECHA', 'RESOLUCION': 'RESOLUCION', 'NAME': 'NAME', });
lyr_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_1.set('fieldAliases', {'FECHA': 'FECHA', 'RESOLUCION': 'RESOLUCION', 'NAME': 'NAME', });
lyr_espaisprotegits_3.set('fieldAliases', {'AMBIT': 'AMBIT', 'AREA_HA': 'AREA_HA', 'CODI_XN2': 'CODI_XN2', 'ESCALA_DEL': 'ESCALA_DEL', 'FND_ZEC': 'FND_ZEC', 'FND_ZEPA': 'FND_ZEPA', 'LIC_ZEC': 'LIC_ZEC', 'NOM_XN2': 'NOM_XN2', 'OBJECTID': 'OBJECTID', 'PERIM_M': 'PERIM_M', 'SUP_ZEC': 'SUP_ZEC', 'SUP_ZEPA': 'SUP_ZEPA', 'TIPOLOGIA': 'TIPOLOGIA', 'ZEPA': 'ZEPA', });
lyr_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_0.set('fieldImages', {'FECHA': '', 'RESOLUCION': '', 'NAME': '', });
lyr_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_1.set('fieldImages', {'FECHA': '', 'RESOLUCION': '', 'NAME': '', });
lyr_espaisprotegits_3.set('fieldImages', {'AMBIT': 'TextEdit', 'AREA_HA': 'TextEdit', 'CODI_XN2': 'TextEdit', 'ESCALA_DEL': 'TextEdit', 'FND_ZEC': 'TextEdit', 'FND_ZEPA': 'TextEdit', 'LIC_ZEC': 'TextEdit', 'NOM_XN2': 'TextEdit', 'OBJECTID': 'TextEdit', 'PERIM_M': 'TextEdit', 'SUP_ZEC': 'TextEdit', 'SUP_ZEPA': 'TextEdit', 'TIPOLOGIA': 'TextEdit', 'ZEPA': 'TextEdit', });
lyr_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_0.set('fieldLabels', {'FECHA': 'no label', 'RESOLUCION': 'no label', 'NAME': 'no label', });
lyr_PNOA_MA_OF_ETRS89_HU31_h25_0118B_4_1.set('fieldLabels', {'FECHA': 'no label', 'RESOLUCION': 'no label', 'NAME': 'no label', });
lyr_espaisprotegits_3.set('fieldLabels', {'AMBIT': 'no label', 'AREA_HA': 'no label', 'CODI_XN2': 'no label', 'ESCALA_DEL': 'no label', 'FND_ZEC': 'no label', 'FND_ZEPA': 'no label', 'LIC_ZEC': 'no label', 'NOM_XN2': 'no label', 'OBJECTID': 'no label', 'PERIM_M': 'no label', 'SUP_ZEC': 'no label', 'SUP_ZEPA': 'no label', 'TIPOLOGIA': 'no label', 'ZEPA': 'no label', });
lyr_espaisprotegits_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});