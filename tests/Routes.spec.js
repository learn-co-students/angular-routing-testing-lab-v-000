describe('Routes', function () {
	var $state;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$state = $injector.get('$state');
	}));

	describe('Settings', function () {
		var state;
		it('should have the correct URL and controller', function () {
			state = $state.get('settings');
			expect(state.url).toEqual('/settings');
      expect(state.controller).toEqual('SettingsController')
		});
	});

  describe('User', function () {
    var state;
    it('user page should have the correct URL and controller', function () {
      state = $state.get('settings.user');
      expect(state.url).toEqual('/user');
      expect(state.controller).toEqual('UserSettingsController');
    });
  });

    describe('Notifications', function () {
      var state;
      it('user page should have the correct URL and controller', function () {
        state = $state.get('settings.notifications');
        expect(state.url).toEqual('/notifications');
        expect(state.controller).toEqual('NotificationsSettingsController');
      });
    });
});
