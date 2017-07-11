/**
 * Created by mahantesh-hadimani on 2/7/2017.
 */

module.exports = {
    sections: {

             AmazonSection: {
                 selector: 'body',
                 elements: {
                     mainMenu: {locateStrategy: 'xpath', selector: "//div[@id='nav-shop']//span[@class='nav-line-2']"},
                     categoryLink: {locateStrategy: 'xpath', selector: "//a[contains(text(),'Android Mobiles')]"},
                     subcategoryLink: {locateStrategy: 'xpath', selector: "//span[contains(text(),'Micromax')]"},
                     productLink: {
                         locateStrategy: 'xpath',
                         selector: "//li[@id='result_0']/div[@class='s-item-container']//a//h2"
                     },
                     addToCartButton: {locateStrategy: 'xpath', selector: "//input[@id='add-to-cart-button']"},
                     proceedToCheckoutButton: {locateStrategy: 'xpath', selector: "//a[@id='hlb-ptc-btn-native']"},
                     userName: {locateStrategy: 'xpath', selector: "//input[@id='ap_email']"},
                     password: {locateStrategy: 'xpath', selector: "//input[@id='ap_password']"},
                     loginButton: {locateStrategy: 'xpath', selector: "//input[@id='signInSubmit']"},
                     selectAddressButton: {
                         locateStrategy: 'xpath',
                         selector: "//div[contains(@class,'ship-to-this-address')]"
                     },
                     continueButton: {
                         locateStrategy: 'xpath',
                         selector: "//div[@class='a-row a-spacing-medium']//input[@value='Continue']"
                     }
                 }
             }
    }
};

