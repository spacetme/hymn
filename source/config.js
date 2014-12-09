System.config({
  "paths": {
    "*": "*.js",
    "lib/*": "app/lib/*.js",
    "spec/*": "spec/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "~/*": "app/*.js"
  }
});

System.config({
  "depCache": {
    "npm:midifile@0.2.0/src/MIDIFileHeader": [],
    "npm:base64-js@0.0.7/lib/b64": [],
    "npm:ieee754@1.1.4/index": [],
    "npm:midievents@0.1.0/src/MIDIEvents": [],
    "npm:string.fromcodepoint@0.2.1/fromcodepoint": [],
    "npm:string.prototype.codepointat@0.2.0/codepointat": [],
    "npm:co@4.0.1/index": [],
    "~/shims/react": [],
    "lib/run": [],
    "npm:js-yaml@3.2.3/lib/js-yaml/common": [],
    "npm:js-yaml@3.2.3/lib/js-yaml/exception": [],
    "npm:js-yaml@3.2.3/lib/js-yaml/mark": [
      "npm:js-yaml@3.2.3/lib/js-yaml/common"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type": [
      "npm:js-yaml@3.2.3/lib/js-yaml/exception"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type/str": [
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type/seq": [
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type/map": [
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type/null": [
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type/bool": [
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type/int": [
      "npm:js-yaml@3.2.3/lib/js-yaml/common",
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type/float": [
      "npm:js-yaml@3.2.3/lib/js-yaml/common",
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type/timestamp": [
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type/merge": [
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type/binary": [
      "github:jspm/nodelibs@0.0.7/buffer",
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type/omap": [
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type/pairs": [
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type/set": [
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type/js/undefined": [
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type/js/regexp": [
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:esprima@1.0.4/esprima": [],
    "npm:js-yaml@3.2.3/lib/js-yaml/dumper": [
      "npm:js-yaml@3.2.3/lib/js-yaml/common",
      "npm:js-yaml@3.2.3/lib/js-yaml/exception",
      "npm:js-yaml@3.2.3/lib/js-yaml/schema/default_full",
      "npm:js-yaml@3.2.3/lib/js-yaml/schema/default_safe"
    ],
    "npm:es5-ext@0.10.4/object/assign/is-implemented": [],
    "npm:es5-ext@0.10.4/object/keys/is-implemented": [],
    "npm:es5-ext@0.10.4/object/keys/shim": [],
    "npm:es5-ext@0.10.4/object/valid-value": [],
    "github:jspm/nodelibs@0.0.7/process/index": [],
    "npm:es5-ext@0.10.4/object/is-callable": [],
    "npm:es5-ext@0.10.4/string/#/contains/is-implemented": [],
    "npm:es5-ext@0.10.4/string/#/contains/shim": [],
    "npm:es5-ext@0.10.4/object/valid-callable": [],
    "npm:ramda@0.8.0/ramda": [
      "github:jspm/nodelibs@0.0.7/process"
    ],
    "app/audio": [],
    "npm:heap@0.2.5/lib/heap": [],
    "app/midi/note": [],
    "github:components/jquery@2.1.1/jquery": [],
    "app/metrics": [],
    "app/task": [
      "github:components/jquery@2.1.1"
    ],
    "lib/io": [],
    "lib/evolve": [
      "npm:ramda@0.8.0"
    ],
    "app/views/note": [
      "~/shims/react",
      "app/metrics"
    ],
    "npm:base64-js@0.0.7": [
      "npm:base64-js@0.0.7/lib/b64"
    ],
    "npm:ieee754@1.1.4": [
      "npm:ieee754@1.1.4/index"
    ],
    "npm:midievents@0.1.0": [
      "npm:midievents@0.1.0/src/MIDIEvents"
    ],
    "npm:string.fromcodepoint@0.2.1": [
      "npm:string.fromcodepoint@0.2.1/fromcodepoint"
    ],
    "npm:string.prototype.codepointat@0.2.0": [
      "npm:string.prototype.codepointat@0.2.0/codepointat"
    ],
    "npm:co@4.0.1": [
      "npm:co@4.0.1/index"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/schema": [
      "npm:js-yaml@3.2.3/lib/js-yaml/common",
      "npm:js-yaml@3.2.3/lib/js-yaml/exception",
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/schema/failsafe": [
      "npm:js-yaml@3.2.3/lib/js-yaml/schema",
      "npm:js-yaml@3.2.3/lib/js-yaml/type/str",
      "npm:js-yaml@3.2.3/lib/js-yaml/type/seq",
      "npm:js-yaml@3.2.3/lib/js-yaml/type/map"
    ],
    "npm:esprima@1.0.4": [
      "npm:esprima@1.0.4/esprima"
    ],
    "npm:es5-ext@0.10.4/object/keys/index": [
      "npm:es5-ext@0.10.4/object/keys/is-implemented",
      "npm:es5-ext@0.10.4/object/keys/shim"
    ],
    "github:jspm/nodelibs@0.0.7/process": [
      "github:jspm/nodelibs@0.0.7/process/index"
    ],
    "npm:es5-ext@0.10.4/string/#/contains/index": [
      "npm:es5-ext@0.10.4/string/#/contains/is-implemented",
      "npm:es5-ext@0.10.4/string/#/contains/shim"
    ],
    "npm:ramda@0.8.0": [
      "npm:ramda@0.8.0/ramda"
    ],
    "npm:heap@0.2.5/index": [
      "npm:heap@0.2.5/lib/heap"
    ],
    "github:components/jquery@2.1.1": [
      "github:components/jquery@2.1.1/jquery"
    ],
    "app/lib/notes": [
      "npm:ramda@0.8.0",
      "lib/evolve"
    ],
    "app/views/notes": [
      "~/shims/react",
      "app/views/note"
    ],
    "github:jspm/nodelibs@0.0.7/buffer/index": [
      "npm:base64-js@0.0.7",
      "npm:ieee754@1.1.4"
    ],
    "npm:utf-8@0.1.2/src/UTF8": [
      "npm:string.fromcodepoint@0.2.1",
      "npm:string.prototype.codepointat@0.2.0"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/schema/json": [
      "npm:js-yaml@3.2.3/lib/js-yaml/schema",
      "npm:js-yaml@3.2.3/lib/js-yaml/schema/failsafe",
      "npm:js-yaml@3.2.3/lib/js-yaml/type/null",
      "npm:js-yaml@3.2.3/lib/js-yaml/type/bool",
      "npm:js-yaml@3.2.3/lib/js-yaml/type/int",
      "npm:js-yaml@3.2.3/lib/js-yaml/type/float"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/type/js/function": [
      "npm:esprima@1.0.4",
      "npm:js-yaml@3.2.3/lib/js-yaml/type"
    ],
    "npm:es5-ext@0.10.4/object/keys": [
      "npm:es5-ext@0.10.4/object/keys/index"
    ],
    "npm:es5-ext@0.10.4/object/normalize-options": [
      "npm:es5-ext@0.10.4/object/assign",
      "github:jspm/nodelibs@0.0.7/process"
    ],
    "npm:es5-ext@0.10.4/string/#/contains": [
      "npm:es5-ext@0.10.4/string/#/contains/index"
    ],
    "npm:heap@0.2.5": [
      "npm:heap@0.2.5/index"
    ],
    "app/microphone": [
      "npm:co@4.0.1",
      "lib/run",
      "app/audio",
      "npm:ramda@0.8.0",
      "github:components/jquery@2.1.1",
      "app/midi/note",
      "app/metrics",
      "app/task"
    ],
    "app/models/song": [
      "npm:midievents@0.1.0",
      "app/lib/notes"
    ],
    "github:jspm/nodelibs@0.0.7/buffer": [
      "github:jspm/nodelibs@0.0.7/buffer/index"
    ],
    "npm:utf-8@0.1.2": [
      "npm:utf-8@0.1.2/src/UTF8"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/schema/core": [
      "npm:js-yaml@3.2.3/lib/js-yaml/schema",
      "npm:js-yaml@3.2.3/lib/js-yaml/schema/json"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/schema/default_full": [
      "npm:js-yaml@3.2.3/lib/js-yaml/schema",
      "npm:js-yaml@3.2.3/lib/js-yaml/schema/default_safe",
      "npm:js-yaml@3.2.3/lib/js-yaml/type/js/undefined",
      "npm:js-yaml@3.2.3/lib/js-yaml/type/js/regexp",
      "npm:js-yaml@3.2.3/lib/js-yaml/type/js/function"
    ],
    "npm:es5-ext@0.10.4/object/assign/shim": [
      "npm:es5-ext@0.10.4/object/keys",
      "npm:es5-ext@0.10.4/object/valid-value"
    ],
    "app/player": [
      "npm:ramda@0.8.0",
      "app/audio",
      "npm:heap@0.2.5",
      "lib/run",
      "npm:co@4.0.1",
      "app/midi/note",
      "npm:event-emitter@0.3.1"
    ],
    "npm:midifile@0.2.0/src/MIDIFileTrack": [
      "github:jspm/nodelibs@0.0.7/buffer"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/schema/default_safe": [
      "npm:js-yaml@3.2.3/lib/js-yaml/schema",
      "npm:js-yaml@3.2.3/lib/js-yaml/schema/core",
      "npm:js-yaml@3.2.3/lib/js-yaml/type/timestamp",
      "npm:js-yaml@3.2.3/lib/js-yaml/type/merge",
      "npm:js-yaml@3.2.3/lib/js-yaml/type/binary",
      "npm:js-yaml@3.2.3/lib/js-yaml/type/omap",
      "npm:js-yaml@3.2.3/lib/js-yaml/type/pairs",
      "npm:js-yaml@3.2.3/lib/js-yaml/type/set"
    ],
    "npm:es5-ext@0.10.4/object/assign/index": [
      "npm:es5-ext@0.10.4/object/assign/is-implemented",
      "npm:es5-ext@0.10.4/object/assign/shim"
    ],
    "npm:midifile@0.2.0/src/MIDIFile": [
      "npm:midifile@0.2.0/src/MIDIFileHeader",
      "npm:midifile@0.2.0/src/MIDIFileTrack",
      "npm:midievents@0.1.0",
      "npm:utf-8@0.1.2"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml/loader": [
      "npm:js-yaml@3.2.3/lib/js-yaml/common",
      "npm:js-yaml@3.2.3/lib/js-yaml/exception",
      "npm:js-yaml@3.2.3/lib/js-yaml/mark",
      "npm:js-yaml@3.2.3/lib/js-yaml/schema/default_safe",
      "npm:js-yaml@3.2.3/lib/js-yaml/schema/default_full"
    ],
    "npm:es5-ext@0.10.4/object/assign": [
      "npm:es5-ext@0.10.4/object/assign/index"
    ],
    "npm:midifile@0.2.0": [
      "npm:midifile@0.2.0/src/MIDIFile"
    ],
    "npm:js-yaml@3.2.3/lib/js-yaml": [
      "npm:js-yaml@3.2.3/lib/js-yaml/loader",
      "npm:js-yaml@3.2.3/lib/js-yaml/dumper",
      "npm:js-yaml@3.2.3/lib/js-yaml/type",
      "npm:js-yaml@3.2.3/lib/js-yaml/schema",
      "npm:js-yaml@3.2.3/lib/js-yaml/schema/failsafe",
      "npm:js-yaml@3.2.3/lib/js-yaml/schema/json",
      "npm:js-yaml@3.2.3/lib/js-yaml/schema/core",
      "npm:js-yaml@3.2.3/lib/js-yaml/schema/default_safe",
      "npm:js-yaml@3.2.3/lib/js-yaml/schema/default_full",
      "npm:js-yaml@3.2.3/lib/js-yaml/exception"
    ],
    "npm:d@0.1.1/index": [
      "npm:es5-ext@0.10.4/object/assign",
      "npm:es5-ext@0.10.4/object/normalize-options",
      "npm:es5-ext@0.10.4/object/is-callable",
      "npm:es5-ext@0.10.4/string/#/contains"
    ],
    "npm:js-yaml@3.2.3/index": [
      "npm:js-yaml@3.2.3/lib/js-yaml"
    ],
    "npm:d@0.1.1": [
      "npm:d@0.1.1/index"
    ],
    "npm:js-yaml@3.2.3": [
      "npm:js-yaml@3.2.3/index"
    ],
    "npm:event-emitter@0.3.1/index": [
      "npm:d@0.1.1",
      "npm:es5-ext@0.10.4/object/valid-callable"
    ],
    "npm:event-emitter@0.3.1": [
      "npm:event-emitter@0.3.1/index"
    ],
    "app/application": [
      "npm:event-emitter@0.3.1",
      "app/player",
      "npm:ramda@0.8.0",
      "app/microphone"
    ],
    "app/index": [
      "npm:midifile@0.2.0",
      "npm:co@4.0.1",
      "~/shims/react",
      "lib/run",
      "npm:js-yaml@3.2.3",
      "app/application",
      "app/task",
      "lib/io",
      "app/models/song",
      "app/metrics",
      "app/microphone",
      "app/views/notes"
    ]
  }
});

System.config({
  "map": {
    "co": "npm:co@4.0.1",
    "eventemitter3": "npm:eventemitter3@0.1.6",
    "heap": "npm:heap@0.2.5",
    "jquery": "github:components/jquery@2.1.1",
    "js-yaml": "npm:js-yaml@3.2.3",
    "midievents": "npm:midievents@0.1.0",
    "midifile": "npm:midifile@0.2.0",
    "npm:co": "npm:co@4.0.1",
    "npm:midievents": "npm:midievents@0.1.0",
    "npm:midifile": "npm:midifile@0.2.0",
    "ramda": "npm:ramda@0.8.0",
    "react": "~/shims/react",
    "github:jspm/nodelibs@0.0.7": {
      "Base64": "npm:Base64@0.2.1",
      "base64-js": "npm:base64-js@0.0.7",
      "ieee754": "npm:ieee754@1.1.4",
      "inherits": "npm:inherits@2.0.1",
      "json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:argparse@0.1.16": {
      "underscore": "npm:underscore@1.7.0",
      "underscore.string": "npm:underscore.string@2.4.0"
    },
    "npm:js-yaml@3.2.3": {
      "argparse": "npm:argparse@0.1.16",
      "esprima": "npm:esprima@1.0.4",
      "json": "npm:json@9.0.2"
    },
    "npm:midifile@0.2.0": {
      "midievents": "npm:midievents@0.1.0",
      "utf-8": "npm:utf-8@0.1.2"
    },
    "npm:utf-8@0.1.2": {
      "string.fromcodepoint": "npm:string.fromcodepoint@0.2.1",
      "string.prototype.codepointat": "npm:string.prototype.codepointat@0.2.0"
    }
  }
});

