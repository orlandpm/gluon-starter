var Remote;
(function (Remote) {
    var Greeting;
    (function (Greeting) {
        Greeting.greeting = Gluon.Internals.remoteMethod("Remote.Greeting.greeting");
    })(Greeting = Remote.Greeting || (Remote.Greeting = {}));
})(Remote || (Remote = {}));
Gluon.Internals.registerActivators({});
Gluon.Internals.registerService({ "Methods": [{ "CallingConvention": ["HttpCallingConvention", ["Post"], "Greeting/greeting"], "MethodName": "Remote.Greeting.greeting", "MethodParameters": [], "MethodReturnType": [["StringType"]] }], "TypeDefinitions": [] });
/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="gen/Gluon.Generated.ts" />
window.onload = function () {
    Remote.Greeting.greeting(new Gluon.Client())().done(function (greeting) {
        $('#content').text(greeting);
    });
};
//# sourceMappingURL=app.js.map