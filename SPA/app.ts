/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="gen/Gluon.Generated.ts" />

window.onload = () => {
    Remote.Greeting.greeting(new Gluon.Client())().done(greeting => {
        $('#content').text(greeting);
    });
};