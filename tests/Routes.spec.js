describe('Routes', function(){
  var $state;

  beforeEach(module('app'));

  beforeEach(inject(function($injector){
    $state = $injector.get('$state');
  }));

  describe('Settings', function(){
    var state;

    it('should be configured correctly', function(){
      state = $state.get('settings');
      expect(state.url).toEqual('/settings');
      expect(state.controller).toEqual('SettingsController');
      expect(state.templateUrl).toEqual('views/settings.html');
    });
  });

  describe('User Settings', function(){
    var state;

    it('should be configured correctly', function(){
      state = $state.get('settings.user');
      expect(state.url).toEqual('/user');
      expect(state.controller).toEqual('UserSettingsController');
      expect(state.templateUrl).toEqual('views/settings/user.html');
    });
  });

  describe('Notifications Settings', function(){
    var state;

    it('should be configured correctly', function(){
      state = $state.get('settings.notifications');
      expect(state.url).toEqual('/notifications');
      expect(state.controller).toEqual('NotificationsSettingsController');
      expect(state.templateUrl).toEqual('views/settings/notifications.html');
    });
  });

});
