# GapminderOffice

## How to run (development)

**1 - Install Electron**

  $ npm install electron-prebuilt -g

**2 - From the app's root folder - Install dependencies**

  $ npm install

**3 - Run it!**

  $ electron .


## How to update the menu
Inside `js/menu.js` you'll find an object called `taskBarTemplate`.

The property `label`, is the menu option that will appear on the task bar (OSX/Linux) or apps window menu (Windows).
`submenu`s are going to be nested menus under the previously declared `label`.

An object like this:

```
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
  }
]
```
 Will generate a menu with nested menus, like this:

```
Tools
   |_ Bubble Chart
   |_ Mountain Chart
```

