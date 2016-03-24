describe('Settings', function() {
  var $state;
  beforeEach(module('app'));
  beforeEach(inject(function($injector){
    $state = $injector.get('$state');
  }));

  describe('Settings', function() {
    var state;

    it('should have the correct URL', function() {
      state = $state.get('settings');
      expect(state.url).toEqual('/settings');
    });
    it('should access the correct templateUrl', function() {
      expect(state.templateUrl).toEqual('views/settings.html');
    });
    it('should access the correct controller', function() {
      expect(state.controller).toEqual('SettingsController');
    });
  });

  describe('User', function() {
    var state;

    it('should have the correct URL', function() {
      state = $state.get('settings.user');
      expect(state.url).toEqual('/user');
    });
    it('should access the correct templateURL', function() {
      expect(state.templateUrl).toEqual('views/settings/user.html');
    });
    it('should point to the correct controller', function() {
      expect(state.controller).toEqual('UserSettingsController');
    });
  });

  describe('Notifications', function() {
    var state;

    it('should use the correct URL', function() {
      state = $state.get('settings.notifications');
      expect(state.url).toEqual('/notifications');
    });
    it('should route with the correct templateUrl', function() {
      expect(state.templateUrl).toEqual('views/settings/notifications.html');
    });
    it('should use its controller', function() {
      expect(state.controller).toEqual('NotificationsSettingsController');
    })
  })
})
