describe('routes', function(){
  var $state;

  beforeEach(module('app'));

  beforeEach(inject(function($injector){
    $state = $injector.get('$state')
  }));

  describe('settings', function(){
    it('should have the right url', function(){
      var state = $state.get('settings')
      expect(state.url).toEqual('/settings');
    });

    it('should have the right template', function(){
      var state = $state.get('settings')
      expect(state.templateUrl).toEqual('views/settings.html');
    });
  });

  describe('settings/user', function(){
    it('should have the right url', function(){
      var state = $state.get('settings.user')
      expect(state.url).toEqual('/user');
    });

    it('should have the right template', function(){
      var state = $state.get('settings.user')
      expect(state.templateUrl).toEqual('views/settings/user.html');
    });
  });

  describe('settings/notifications', function(){
    it('should have the right url', function(){
      var state = $state.get('settings.notifications')
      expect(state.url).toEqual('/notifications');
    });

    it('should have the right template', function(){
      var state = $state.get('settings.notifications')
      expect(state.templateUrl).toEqual('views/settings/notifications.html');
    });
  });

});