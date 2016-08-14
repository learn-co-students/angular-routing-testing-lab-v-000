describe('Routes', function () {
	var $state;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$state = $injector.get('$state');
	}));

	describe('Settings', function () {
		var state;

		it('should have the correct URL', function () {
			state = $state.get('settings');

			expect(state.url).toEqual('/settings');
		});

    it('should use the correct controller', function () {
      expect(state.controller).toEqual('SettingsController');
    });

    it('should use the correct template', function () {
      expect(state.templateUrl).toEqual('views/settings.html');
    });
	});

	describe('User Settings', function () {
		var state;

		it('should have the correct URL', function () {
			state = $state.get('settings.user');

			expect(state.url).toEqual('/user');
		});

    it('should use the correct controller', function () {
      expect(state.controller).toEqual('UserSettingsController');
    });

    it('should use the correct template', function () {
      expect(state.templateUrl).toEqual('views/settings/user.html');
    });
	});

	describe('Notification Settings', function () {
		var state;

		it('should have the correct URL', function () {
			state = $state.get('settings.notifications');

			expect(state.url).toEqual('/notifications');
		});

    it('should use the correct controller', function () {
      expect(state.controller).toEqual('NotificationsSettingsController');
    });

    it('should use the correct template', function () {
      expect(state.templateUrl).toEqual('views/settings/notifications.html');
    });
	});

});
