describe('Routes', function() {
  var $state;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $state = $injector.get('$state');
  }));

  describe('Settings State', function() {
    var state;

    it('should have the correct URL', function() {
      state = $state.get('settings');

      expect(state.url).toEqual('/settings');
    });

    it('should get its template from views/settings.html', function() {
      expect(state.templateUrl).toEqual('views/settings.html');
    });

    it('should use the SettingsController', function() {
      expect(state.controller).toEqual('SettingsController');
    });
  });

  describe('User Settings State', function() {
    var state;

    it('should have the correct URL', function() {
      state = $state.get('settings.user');

      expect(state.url).toEqual('/user');
    });

    it('should get its template from views/settings/user.html', function() {
      expect(state.templateUrl).toEqual('views/settings/user.html');
    });

    it('should use the UserSettingsController', function() {
      expect(state.controller).toEqual('UserSettingsController');
    });
  });

  describe('Notification Settings State', function() {
    var state;

    it('should have the correct URL', function() {
      state = $state.get('settings.notifications');

      expect(state.url).toEqual('/notifications');
    });

    it('should get its template from views/settings/notifications.html', function() {
      expect(state.templateUrl).toEqual('views/settings/notifications.html');
    });

    it('should use the NotificationsSettingsController', function() {
      expect(state.controller).toEqual('NotificationsSettingsController');
    });
  });
});