ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32749").setExtent([669923.064155, 9165667.796579, 702502.230690, 9190219.483294]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KECAMATANSDAdissolved_1 = new ol.format.GeoJSON();
var features_KECAMATANSDAdissolved_1 = format_KECAMATANSDAdissolved_1.readFeatures(json_KECAMATANSDAdissolved_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KECAMATANSDAdissolved_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KECAMATANSDAdissolved_1.addFeatures(features_KECAMATANSDAdissolved_1);
var lyr_KECAMATANSDAdissolved_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KECAMATANSDAdissolved_1, 
                style: style_KECAMATANSDAdissolved_1,
                interactive: true,
                title: '<img src="styles/legend/KECAMATANSDAdissolved_1.png" /> KECAMATAN SDA — dissolved'
            });
var format_PERMUKIMANclipped_2 = new ol.format.GeoJSON();
var features_PERMUKIMANclipped_2 = format_PERMUKIMANclipped_2.readFeatures(json_PERMUKIMANclipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PERMUKIMANclipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERMUKIMANclipped_2.addFeatures(features_PERMUKIMANclipped_2);
var lyr_PERMUKIMANclipped_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PERMUKIMANclipped_2, 
                style: style_PERMUKIMANclipped_2,
                interactive: true,
                title: '<img src="styles/legend/PERMUKIMANclipped_2.png" /> PERMUKIMAN — clipped'
            });
var format_JALAN_3 = new ol.format.GeoJSON();
var features_JALAN_3 = format_JALAN_3.readFeatures(json_JALAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JALAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_3.addFeatures(features_JALAN_3);
var lyr_JALAN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_3, 
                style: style_JALAN_3,
                interactive: true,
                title: '<img src="styles/legend/JALAN_3.png" /> JALAN '
            });
var format_SUNGAII_4 = new ol.format.GeoJSON();
var features_SUNGAII_4 = format_SUNGAII_4.readFeatures(json_SUNGAII_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_SUNGAII_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAII_4.addFeatures(features_SUNGAII_4);
var lyr_SUNGAII_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAII_4, 
                style: style_SUNGAII_4,
                interactive: true,
                title: '<img src="styles/legend/SUNGAII_4.png" /> SUNGAII'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KECAMATANSDAdissolved_1.setVisible(true);lyr_PERMUKIMANclipped_2.setVisible(true);lyr_JALAN_3.setVisible(true);lyr_SUNGAII_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KECAMATANSDAdissolved_1,lyr_PERMUKIMANclipped_2,lyr_JALAN_3,lyr_SUNGAII_4];
lyr_KECAMATANSDAdissolved_1.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PERMUKIMANclipped_2.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_3.set('fieldAliases', {'fid': 'fid', 'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAII_4.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KECAMATANSDAdissolved_1.set('fieldImages', {'fid': '', 'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PERMUKIMANclipped_2.set('fieldImages', {'fid': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_JALAN_3.set('fieldImages', {'fid': '', 'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_SUNGAII_4.set('fieldImages', {'fid': '', 'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_KECAMATANSDAdissolved_1.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PERMUKIMANclipped_2.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_3.set('fieldLabels', {'fid': 'no label', 'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAII_4.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAII_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});