describe('Routing Tests:', function(){
  var $state

  beforeEach(module('app'));

    beforeEach(inject( function($injector){
      $state = $injector.get('$state')
    }));

  describe('State: Settings', function(){
    var state

    it('should use the correct URL', function(){
      state= $state.get('settings')
      expect(state.url).toEqual('/settings')
    })

    it('should use the correct template', function() {
      expect(state.templateUrl).toEqual('views/settings.html')
    })

    it('should rely on the correct controller', function() {
      expect(state.controller).toBe('SettingsController')
    })
  });

  describe('State: User Settings', function (){
    var state

    it('should use the correct URL', function(){
      state = $state.get('settings.user')
      expect(state.url).toEqual('/user')
    })
    it('should use the correct template', function() {
      expect(state.templateUrl).toEqual('views/settings/user.html')
    })
    it('should use the correct controller', function() {
      expect(state.controller).toBe('UserSettingsController')
    })
  })

  describe('State: Notification Settings', function() {
    var state

    it('should use the correct URL', function() {
      state = $state.get('settings.notifications')
      expect(state.url).toEqual('/notifications')
    })
    it('should use the correct template', function (){
      expect(state.templateUrl).toBe('views/settings/notifications.html')
    })
    it('should use the correct controller', function() {
      expect(state.controller).toBe('NotificationsSettingsController')
    })
  })

})
