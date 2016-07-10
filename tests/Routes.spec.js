describe("Routes", function(){
  var $state;
  beforeEach(module("app"));

  beforeEach(inject(function($injector){
    $state = $injector.get("$state");
  }));

  describe("Settings", function(){
    var state;

    it("correct URL", function(){
      state = $state.get("settings");
      expect(state.url).toEqual("/settings");
    });

    it("correct template", function(){
      expect(state.templateUrl).toEqual("views/settings.html");
    });

    it("correct controller", function(){
      expect(state.controller).toEqual("SettingsController");
    });
  });

  describe("UserSettings", function(){
    var state;

    it("correct URL", function(){
      state = $state.get("settings.user");
      expect(state.url).toEqual("/user");
    });

    it("correct template", function(){
      expect(state.templateUrl).toEqual("views/settings/user.html");
    });

    it("correct controller", function(){
      expect(state.controller).toEqual("UserSettingsController");
    });
  });

  describe("NotificationsSettings", function(){
    var state;

    it("correct URL", function(){
      state = $state.get("settings.notifications");
      expect(state.url).toEqual("/notifications");
    });

    it("correct template", function(){
      expect(state.templateUrl).toEqual("views/settings/notifications.html");
    });

    it("correct controller", function(){
      expect(state.controller).toEqual("NotificationsSettingsController");
    });
  });
});
