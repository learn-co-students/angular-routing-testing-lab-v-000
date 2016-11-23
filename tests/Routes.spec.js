describe('Routes', function() {
  var $state;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $state = $injector.get('$state');
  }));

  describe('Settings', function () {
    var state;

    it('should have the correct template', function () {
      state = $state.get('settings');
      expect(state.templateUrl).toEqual('views/settings.html');
    });

    it('should have the correct url', function () {
      state = $state.get('settings');
      expect(state.url).toEqual('/settings');
    });

    it('should have the correct controller', function () {
      state = $state.get('settings');
      expect(state.controller).toEqual('SettingsController');
    });
  })

  describe('User', function () {
    var state;

    it('should have the correct template', function () {
      state = $state.get('settings.user');
      expect(state.templateUrl).toEqual('views/settings/user.html');
    });

    it('should have the correct url', function () {
      state = $state.get('settings.user');
      expect(state.url).toEqual('/user');
    });

    it('should have the correct controller', function () {
      state = $state.get('settings.user');
      expect(state.controller).toEqual('UserSettingsController');
    });
  })

  describe('Notifications', function () {
    var state;

    it('should have the correct template', function () {
      state = $state.get('settings.notifications');
      expect(state.templateUrl).toEqual('views/settings/notifications.html');
    });

    it('should have the correct url', function () {
      state = $state.get('settings.notifications');
      expect(state.url).toEqual('/notifications');
    });

    it('should have the correct controller', function () {
      state = $state.get('settings.notifications');
      expect(state.controller).toEqual('NotificationsSettingsController');
    });
  })
})
