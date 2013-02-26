Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    requires: ['Lib.container.Viewport'],
    name: 'App',
    appFolder: 'app',
	paths: {'Lib': '/Scripts/framework'},
    launch: function() {
        Ext.create('Lib.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: 'Users',
                    html : 'List of users will go here'
                }
            ]
        });
    }
});