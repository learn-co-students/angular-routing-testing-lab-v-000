describe('Routes', function(){
  var $state;
  beforeEach(module('app'));
  beforeEach(inject(function($injector){
    $state = $injector.get('$state');
  }));

  describe('settings', function(){
    var state;
    it('should have the correct controller', function(){
      state = $state.get('settings');
      expect(state.controller).toEqual('SettingsController');
    })
    it('should render the correct template', function(){
      expect(state.templateUrl).toEqual('views/settings.html');
    })
  })

  describe('settings.user', function(){
    var state;
    it('should have the correct controller', function(){
      state = $state.get('settings.user');
      expect(state.controller).toEqual('UserSettingsController');    
    })
    it('should render the correct template', function(){
      expect(state.templateUrl).toEqual('views/settings/user.html')
    })
  })
  
  describe('settings.notifications', function(){
    var state;
    it('should have the correct controller', function(){
      state = $state.get('settings.notifications');
      expect(state.controller).toEqual('NotificationsSettingsController');    
    })
    it('should render the correct template', function(){
      expect(state.templateUrl).toEqual('views/settings/notifications.html')
    })
  })
})