describe('Routes', function(){
  var $state;

  beforeEach(module('app'));

  beforeEach(inject(function($injector){
    $state = $injector.get('$state');
  }));

  describe('Settings', function(){
    var state;

    it('should have the correct URL', function(){
      state = $state.get('settings');

      expect(state.url).toEqual('/settings');
      expect(state.url).not.toEqual('/apples');
    })

    it('should use the settings.html template', function(){
      state = $state.get('settings');

      expect(state.templateUrl).toEqual('views/settings.html');
      expect(state.templateUrl).not.toEqual('/banana/phone.html');
    })

    it('should use the SettingsController controller', function(){
      state = $state.get('settings');

      expect(state.controller).toEqual('SettingsController');
      expect(state.controller).not.toEqual('FlightController');
    })

  })

  describe('UserSettings', function(){
    var state;

    it('should have the correct URL', function(){
      state = $state.get('settings.user');

      expect(state.url).toEqual('/user');
      expect(state.url).not.toEqual('/apples');
    })

    it('should use the settings/user.html template', function(){
      state = $state.get('settings.user');

      expect(state.templateUrl).toEqual('views/settings/user.html');
      expect(state.templateUrl).not.toEqual('/banana/phone.html');
    })

    it('should use the SettingsController controller', function(){
      state = $state.get('settings.user');

      expect(state.controller).toEqual('UserSettingsController');
      expect(state.controller).not.toEqual('FlightController');
    })

  })

  describe('NotificationsSettings', function(){
    var state;

    it('should have the correct URL', function(){
      state = $state.get('settings.notifications');

      expect(state.url).toEqual('/notifications');
      expect(state.url).not.toEqual('/apples');
    })

    it('should use the settings/notifications.html template', function(){
      state = $state.get('settings.notifications');

      expect(state.templateUrl).toEqual('views/settings/notifications.html');
      expect(state.templateUrl).not.toEqual('/banana/phone.html');
    })

    it('should use the NotificationsSettingsController controller', function(){
      state = $state.get('settings.notifications');

      expect(state.controller).toEqual('NotificationsSettingsController');
      expect(state.controller).not.toEqual('FlightController');
    })

  })

})
