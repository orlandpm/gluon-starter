namespace Remote
open Gluon

module Greeting =

    [<Remote>]
    let greeting() =
        "hello world"

