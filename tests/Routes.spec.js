describe('Routes', function (){
  var $state;

  beforeEach(module('app'));

  beforeEach(inject(function($injector) {
    $state = $injector.get('$state');
    }));

  describe('Settings State', function (){
    var state;

    it('should have the correct controller', function(){
      state = $state.get('settings');

      expect(state.controller).toEqual('SettingsController');
    });

    it('should direct to the correct url', function(){
      state = $state.get('settings');

      expect(state.url).toEqual('/settings');
     });
    it('should have the correct template', function(){
      state = $state.get('settings');

      expect(state.templateUrl).toEqual('views/settings.html');
     }); 
  });
  describe('User Settings State', function (){
    var state;

    it('should have the correct controller', function(){
      state = $state.get('settings.user');

      expect(state.controller).toEqual('UserSettingsController');
    });

    it('should direct to the correct url', function(){
      state = $state.get('settings.user');

      expect(state.url).toEqual('/user');
     });
    it('should have the correct template', function(){
      state = $state.get('settings.user');

      expect(state.templateUrl).toEqual('views/settings/user.html');
     }); 
  });
  describe('Notification Settings State', function (){
    var state;

    it('should have the correct controller', function(){
      state = $state.get('settings.notifications');

      expect(state.controller).toEqual('NotificationsSettingsController');
    });

    it('should direct to the correct url', function(){
      state = $state.get('settings.notifications');

      expect(state.url).toEqual('/notifications');
     });
    it('should have the correct template', function(){
      state = $state.get('settings.notifications');

      expect(state.templateUrl).toEqual('views/settings/notifications.html');
     }); 
  });
});