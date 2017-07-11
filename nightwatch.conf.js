var seleniumServer = require('selenium-server');
var chromedriver = require('chromedriver');

require('nightwatch-cucumber')({
   "stepTimeout":400000,
    "defaultTimeoutInterval":900000
});

module.exports = {

    "output_folder": 'reports1',
    "page_objects_path" : "repository",
    "selenium": {
        "start_process": true,
        "server_path": seleniumServer.path,
        "host": '127.0.0.1',
        "port": 4444,
        "cli_args": {
            'webdrover.chrome.driver': chromedriver.path,
            "webdriver.gecko.driver" : "./node_modules/geckodriver/bin/geckodriver"
        }
    },

    "test_settings": {
        "default" : {
            "launch_url": "http://localhost",
            "page_objects_path" : "",
            "selenium_host": "127.0.0.1",
            "selenium_port": 4444,
            "silent" : true,
            "disable_colors": false,
            "screenshots": {
                "enabled": true,
                "on_failure": true,
                "on_error": true,
                "path": 'screenshots'
            },

            "desiredCapabilities": {
                "browserName": "firefox",
                "javascriptEnabled" : true,
                "acceptSslCerts" : true
            }
        }
    }
}

