describe('Routes', function(){
  var $state;

  beforeEach(module('app'));

  beforeEach(inject(function($injector){
    $state = $injector.get('$state');
  }));
  var state;

  describe('Settings', function(){
    it('should have the correct settings URL', function(){
      state = $state.get('settings');

      expect(state.url).toEqual('/settings');
    });

    it('should use the correct settings template', function(){
      expect(state.templateUrl).toEqual('views/settings.html');
    });

    it('should use the correct settings controller', function(){
      expect(state.controller).toEqual('SettingsController');
    });

    it('should have the correct user nested route', function(){
      state = $state.get('settings.user');

      expect(state.url).toEqual('/user');
    });

    it('should use the correct user template', function(){
      expect(state.templateUrl).toEqual('views/settings/user.html');
    });

    it('should use the correct user controller', function(){
      expect(state.controller).toEqual('UserSettingsController');
    });

    it('should have the correct notifications nested route', function(){
      state = $state.get('settings.notifications');

      expect(state.url).toEqual('/notifications');
    });

    it('should use the correct notifications template', function(){
      expect(state.templateUrl).toEqual('views/settings/notifications.html');
    });

    it('should use the correct notifications controller', function(){
      expect(state.controller).toEqual('NotificationsSettingsController');
    });
  });
});
