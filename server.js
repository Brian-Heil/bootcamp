#!/bin/env node

var Bootcamp = function() {

    var self = this;

    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating app ...',
                       Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };

    self.setupTerminationHandlers = function(){
      //  Process on exit and signals.
      process.on('exit', function() { self.terminator(); });

      // Removed 'SIGPIPE' from the list - bugz 852598.
      ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
       'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
      ].forEach(function(element, index, array) {
          process.on(element, function() { self.terminator(element); });
      });
    };

    self.initializeServer = function() {
        self.app = require('./bootcamp')();
    };

    self.initialize = function() {
        self.setupTerminationHandlers();
        self.initializeServer();
    };

    self.start = function() {
        self.app.listen(self.app.get('port'), self.app.get('ipaddress'), function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), self.app.get('ipaddress'), self.app.get('port'));
        });
    };

};

var server = new Bootcamp();
server.initialize();
server.start();
