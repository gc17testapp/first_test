'use strict';

// Configuring the Chat module
angular.module('chat').run(['Menus',
  function (Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Menu1',		// 'Chat' replaced with 'Menu'
      state: 'chat'
    });
  }
]);
