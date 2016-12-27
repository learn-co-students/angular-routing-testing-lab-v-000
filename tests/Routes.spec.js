describe('Routes', function () {
  var $state;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $state = $injector.get('$state');
  }));

  describe('Settings', function () {
    var state;

    it('should get its template from views/settings.html and use the SettingsController', function () {
      state = $state.get('settings');

      expect(state.templateUrl).toEqual('views/settings.html');
      expect(state.controller).toEqual('SettingsController');
    });
  });

  describe('User Settings', function () {
    var state;

    it('should get its template from views/settings/user.html and use the UserSettingsController', function () {
      state = $state.get('settings.user');

      expect(state.templateUrl).toEqual('views/settings/user.html');
      expect(state.controller).toEqual('UserSettingsController');
    });
  });

  describe('Notifications Settings', function () {
    var state;

    it('should get its template from views/settings/notifications.html and use the NotificationsSettingsController', function () {
      state = $state.get('settings.notifications');

      expect(state.templateUrl).toEqual('views/settings/notifications.html');
      expect(state.controller).toEqual('NotificationsSettingsController');
    });
  });

});