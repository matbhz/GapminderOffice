var remote = require('remote');
var Menu = remote.require('menu');

var taskBarTemplate = [
  {
    label: 'Tools',
    submenu: [
      {
        label: 'BubbleChart',
        click: function() { window.location.href = '#bubbleChart' }
      },
      {
        label: 'Mountain Chart',
        click: function() { window.location.href = '#mountainChart' }
      }
    ]
  }, 
  {
    label: 'Gapminder',
    submenu: [
      {
        label: 'About',
        click: function() { window.location.href = '#about'  }
      },
      {
        label: 'Website',
        click: function() { window.location.href = '#website'  }
      },
    ]
  }
];

menu = Menu.buildFromTemplate(taskBarTemplate);
Menu.setApplicationMenu(menu);