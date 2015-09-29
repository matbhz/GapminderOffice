var remote = require('remote');
var Menu = remote.require('menu');

var taskBarTemplate = [
  {
    label: 'Tools',
    submenu: [
      {
        label: 'BubbleChart',
        click: function() { console.log("PLACEHOLDER BubbleChart link"); }
      },
      {
        label: 'Mountain Chart',
        click: function() { console.log("PLACEHOLDER MountainChart link"); }
      }
    ]
  }, 
  {
    label: 'Gapminder',
    submenu: [
      {
        label: 'About',
        click: function() { console.log("PLACEHOLDER About link");  }
      },
      {
        label: 'Website',
        click: function() { console.log("PLACEHOLDER Website link");  }
      },
    ]
  }
];

menu = Menu.buildFromTemplate(taskBarTemplate);
Menu.setApplicationMenu(menu);