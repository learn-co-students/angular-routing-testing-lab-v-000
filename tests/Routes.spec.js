describe('Routes', function() {
  var $state;

  beforeEach(module('app'));

  beforeEach(inject(function($injector) {
    $state = $injector.get('$state');
  }));

  describe('Settings', function() {
    var state;

    // Settings State

    it('Settings should have the correct URL', function() {
      state = $state.get('settings');

      expect(state.url).toEqual('/settings');
    });

    it('Settings should have the correct template', function() {
      expect(state.templateUrl).toEqual('views/settings.html');
    });

    it('Settings should be using the SettingsController', function() {
      expect(state.controller).toEqual('SettingsController');
    });

    // UserSettings State
    it('UserSettings home should have the correct URL', function() {
      state = $state.get('settings.user');

      expect(state.url).toEqual('/user');
    });

    it('UserSettings home should have the correct template', function() {
      expect(state.templateUrl).toEqual('views/settings/user.html');
    });

    it('UserSettings home should be using the SettingsController', function() {
      expect(state.controller).toEqual('UserSettingsController');
    });

    // NotificationsSettings State
    it('NotificationsSettings home should have the correct URL', function() {
      state = $state.get('settings.notifications');

      expect(state.url).toEqual('/notifications');
    });

    it('NotificationsSettings home should have the correct template', function() {
      expect(state.templateUrl).toEqual('views/settings/notifications.html');
    });

    it('NotificationsSettings home should be using the SettingsController', function() {
      expect(state.controller).toEqual('NotificationsSettingsController');
    });
  });
});
