/**
 * Viewport base do sistema.
 * @class Lib.container.Viewport
 * @extends Ext.container.Viewport 
 */

Ext.define('Lib.container.Viewport',{
    extend: 'Ext.container.Viewport',
    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    }
})
