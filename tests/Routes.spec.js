describe('Routes', function () {
    var $state;
 
    beforeEach(module('app'));
 
    beforeEach(inject(function ($injector) {
        $state = $injector.get('$state');
    }));
 
    describe('settings', function () {
        var state;
 
        it('should have the correct URL', function () {
            state = $state.get('settings');
 
            expect(state.url).toEqual('/settings');
        });
 
        it('should use the correct template', function () {
            expect(state.templateUrl).toEqual('views/settings.html');
        });
    });

    describe('user settings', function () {
        var state;
 
        it('should have the correct URL', function () {
            state = $state.get('settings.user');
 
            expect(state.url).toEqual('/user');
        });
 
        it('should use the correct template', function () {
            expect(state.templateUrl).toEqual('views/settings/user.html');
        });
    });

    describe('notification settings', function () {
        var state;
 
        it('should have the correct URL', function () {
            state = $state.get('settings.notifications');
 
            expect(state.url).toEqual('/notifications');
        });
 
        it('should use the correct template', function () {
            expect(state.templateUrl).toEqual('views/settings/notifications.html');
        });
    });
    
});