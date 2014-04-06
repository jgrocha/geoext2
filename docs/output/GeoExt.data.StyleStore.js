Ext.data.JsonP.GeoExt_data_StyleStore({"tagname":"class","name":"GeoExt.data.StyleStore","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"StyleStore.js","href":"StyleStore.html#GeoExt-data-StyleStore"}],"aliases":{"store":["gx_style"]},"alternateClassNames":[],"extends":"Ext.data.Store","mixins":[],"requires":["GeoExt.data.RasterStyleModel","GeoExt.data.VectorStyleModel"],"uses":[],"members":[{"name":"constructor","tagname":"method","owner":"GeoExt.data.StyleStore","id":"method-constructor","meta":{}}],"code_type":"ext_define","id":"class-GeoExt.data.StyleStore","short_doc":"A smart store that creates records for client-side rendered legends. ...","component":false,"superclasses":["Ext.data.Store"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><strong>GeoExt.data.StyleStore</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.data.RasterStyleModel' rel='GeoExt.data.RasterStyleModel' class='docClass'>GeoExt.data.RasterStyleModel</a></div><div class='dependency'><a href='#!/api/GeoExt.data.VectorStyleModel' rel='GeoExt.data.VectorStyleModel' class='docClass'>GeoExt.data.VectorStyleModel</a></div><h4>Files</h4><div class='dependency'><a href='source/StyleStore.html#GeoExt-data-StyleStore' target='_blank'>StyleStore.js</a></div></pre><div class='doc-contents'><p>A smart store that creates records for client-side rendered legends. If\nits store is configured with an {OpenLayers.Style2} instance as <code>data</code>,\neach record will represent a rule of the Style, and the store will be\nconfigured with <code>symbolizers</code> (Array of {OpenLayers.Symbolizer}),\n<code>filter</code> ({OpenLayers.Filter}), <code>label</code> (String, the rule's title),\n<code>name</code> (String), <code>description</code> (String), <code>elseFilter</code> (Boolean),\n<code>minScaleDenominator</code> (Number) and <code>maxScaleDenominator</code> (Number)\nfields. If the store's <code>data</code> is an {OpenLayers.Symbolizer.Raster}\ninstance, records will represent its ColorMap entries, and the available\nfields will only be <code>symbolizers</code> (object literal with <code>color</code> and\n<code>opacity</code> properties from the ColorMapEntry, and stroke set to false),\n<code>filter</code> (String, the ColorMapEntry's quantity) and <code>label</code> (String).</p>\n\n<p>NOTE: Calling <code>commitChanges</code> on the store that is populated with\nthis reader will fail with OpenLayers 2.11 - it requires at least revision\nhttps://github.com/openlayers/openlayers/commit/1db5ac3cbe874317968f78832901d6ef887ecca6\nfrom 2011-11-28 of OpenLayers.</p>\n\n<p>Sample code to create a store that reads from an OpenLayers.Style2\nobject:</p>\n\n<p>   var store = Ext.create('<a href=\"#!/api/GeoExt.data.StyleStore\" rel=\"GeoExt.data.StyleStore\" class=\"docClass\">GeoExt.data.StyleStore</a>',{\n       data: myStyle // OpenLayers.Style2 or OpenLayers.Symbolizer.Raster\n   });</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.StyleStore'>GeoExt.data.StyleStore</span><br/><a href='source/StyleStore.html#GeoExt-data-StyleStore-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.data.StyleStore-method-constructor' class='name expandable'>GeoExt.data.StyleStore</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/GeoExt.data.StyleStore\" rel=\"GeoExt.data.StyleStore\" class=\"docClass\">GeoExt.data.StyleStore</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.data.StyleStore\" rel=\"GeoExt.data.StyleStore\" class=\"docClass\">GeoExt.data.StyleStore</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});