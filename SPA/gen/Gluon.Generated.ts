 module Remote.Greeting {
  
    export var greeting = Gluon.Internals.remoteMethod<(() => JQueryPromise<string>)>("Remote.Greeting.greeting");
}
Gluon.Internals.registerActivators({});
Gluon.Internals.registerService({"Methods":[{"CallingConvention":["HttpCallingConvention",["Post"],"Greeting/greeting"],"MethodName":"Remote.Greeting.greeting","MethodParameters":[],"MethodReturnType":[["StringType"]]}],"TypeDefinitions":[]});
