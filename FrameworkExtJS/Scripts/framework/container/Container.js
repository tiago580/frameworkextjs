/**
 * Container Base do sistema.
 * @class Lib.container.Container
 * @extends Ext.container.Container
 */

Ext.define('Lib.container.Container',{
    extend: 'Ext.container.Container',
    initComponent:function(){
        var me = this;
        
        me.callParent(arguments);
    }
})