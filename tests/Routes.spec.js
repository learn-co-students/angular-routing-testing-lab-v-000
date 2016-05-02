describe('Routes', function () {
    var $state;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        $state = $injector.get('$state');
    }));

    describe('Settings', function () {
        var state;

        it('should use the correct template', function () {
            state = $state.get('settings');
            expect(state.templateUrl).toEqual('views/settings.html');
        });

        it('should use the correct controller', function (){
          expect(state.controller).toEqual('SettingsController')
        });

        it('should have the correct URL', function () {
            expect(state.url).toEqual('/settings');
        });
    });

    describe('UserSettings', function () {
        var state;

        it('should use the correct template', function () {
            state = $state.get('settings.user');
            expect(state.templateUrl).toEqual('views/settings/user.html');
        });

        it('should use the correct controller', function (){
          expect(state.controller).toEqual('UserSettingsController')
        });

        it('should have the correct URL', function () {
            expect(state.url).toEqual('/user');
        });
    });

    describe('NotificationsSettings', function () {
        var state;

        it('should use the correct template', function () {
            state = $state.get('settings.notifications');
            expect(state.templateUrl).toEqual('views/settings/notifications.html');
        });

        it('should use the correct controller', function (){
          expect(state.controller).toEqual('NotificationsSettingsController')
        });

        it('should have the correct URL', function () {
            expect(state.url).toEqual('/notifications');
        });
    });
});
