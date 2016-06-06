describe('Routes', function () {
  var $state;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $state = $injector.get('$state');
  }));

  describe('Settings', function () {
    var state;

    it('should have the correct settings template and controller', function () {
      state = $state.get('settings');
      expect(state.templateUrl).toEqual('views/settings.html');
      expect(state.controller).toEqual('SettingsController');
    });
  });

  describe('User Settings', function () {
    var state;

    it('should have the correct user template and controller', function () {
      state = $state.get('settings.user');
      expect(state.templateUrl).toEqual('views/settings/user.html');
      expect(state.controller).toEqual('UserSettingsController');
    });
  });

  describe('Notifications Settings', function () {
    var state;

    it('should have the correct notifications template and controller', function () {
      state = $state.get('settings.notifications');
      expect(state.templateUrl).toEqual('views/settings/notifications.html');
      expect(state.controller).toEqual('NotificationsSettingsController');
    });
  });

});