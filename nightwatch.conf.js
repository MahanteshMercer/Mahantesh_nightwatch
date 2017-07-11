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

    default: {
        launch_url: 'http://ondemand.saucelabs.com:80',
        selenium_port: 80,
        selenium_host: 'ondemand.saucelabs.com',
        silent: true,
        username: 'mahantesh-hadimani',
        access_key: '90da9e36-ec82-4175-936b-5ae61411a9b9',
        screenshots: {
        enabled: false,
        path: '',
},
globals: {
    waitForConditionTimeout: 10000,
},
},
    //"test_settings": {
        //"default" : {
            //"launch_url": "http://localhost",
            //"page_objects_path" : "",
            //"selenium_host": "127.0.0.1",
            //"selenium_port": 4444,
            //"silent" : true,
          //  "disable_colors": false,
          //  "screenshots": {
        //        "enabled": true,
      //          "on_failure": true,
    //            "on_error": true,
  //              "path": 'screenshots'
//            },

      //      "desiredCapabilities": {
    //            "browserName": "chrome",
    //            "javascriptEnabled" : true,
    //            "acceptSslCerts" : true
    //        }
    //    }
    //}
}

