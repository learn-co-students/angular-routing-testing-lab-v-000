describe('Routes', function () {
	let $state;

	beforeEach(module('app'));
	beforeEach(inject(function ($injector) {
		$state = $injector.get('$state');
	}));

	describe('Settings', function () {
		let state;

		it('should have correct url', function () {
			state = $state.get('settings');
			expect(state.url).toEqual('/settings');
		});

		it('should have correct template', function () {
			expect(state.templateUrl).toEqual('views/settings.html');
		});

		it('should have correct controller', function () {
			expect(state.controller).toEqual('SettingsController');
		});
	});

	describe('UserSettings', function () {
		let state;

		it('should have correct url', function () {
			state = $state.get('settings.user');

			expect(state.url).toEqual('/user');
		});

		it('should have correct template', function () {
			expect(state.templateUrl).toEqual('views/settings/user.html');
		});

		it('should have correct controller', function () {
			expect(state.controller).toEqual('UserSettingsController');
		});
	});

	describe('NotificationsSettings', function () {
		let state;

		it('should have correct url', function () {
			state = $state.get('settings.notifications');

			expect(state.url).toEqual('/notifications');
		});

		it('should have correct template', function () {
			expect(state.templateUrl).toEqual('views/settings/notifications.html');
		});

		it('should have the correct controller', function () {
			expect(state.controller).toEqual('NotificationsSettingsController');
		});
	});
});
