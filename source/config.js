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

