describe('Routes', function () {
  var $state;
  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $state = $injector.get('$state')
  }));

  describe('Settings',function () {

    var state;

    it('Should have the correct Template',function () {
      state = $state.get('settings');
      expect(state.templateUrl).toEqual('views/settings.html');
    });

    it('Should have use the Settings Controller ', function () {
      expect(state.controller).toEqual('SettingsController');
    });

  })


  describe('User Settings',function () {

    var state;

    it('Should have the correct Template',function () {
      state = $state.get('settings.user');
      expect(state.templateUrl).toEqual('views/settings/user.html');
    });

    it('Should use the UserSettings Controller ', function () {
      expect(state.controller).toEqual('UserSettingsController');
    });

  })


  describe('Notifications  Settings',function () {

    var state;

    it('Should have the correct Template',function () {
      state = $state.get('settings.notifications');
      expect(state.templateUrl).toEqual('views/settings/notifications.html');
    });

    it('Should use the Notifications Settings Controller ', function () {
      expect(state.controller).toEqual('NotificationsSettingsController');
    });

  })



})
