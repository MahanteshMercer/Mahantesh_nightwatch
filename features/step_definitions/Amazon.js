/**
 * Created by mahantesh-hadimani on 2/8/2017.
 */
var data=require('C:/mantu/testresources/testData.js')
var Aobjects,Asection
function AmazonObjects(browser){
    Aobjects=browser.page.AmazonObjects();
    Asection=Aobjects.section.AmazonSection
    AllVideos=Aobjects.section.AllVideos
}


module.exports=function()
{
    this.Given(/^Once User is entered the URl$/, function () {
        AmazonObjects(this)
            this.resizeWindow(1280,800)
                .url("http://www.amazon.in/")
                .useXpath()
             Asection.waitForElementVisible('@mainMenu',5000)
    }),

    this.When(/^user clicked on the Main Menu$/, function () {
        AmazonObjects(this)
            Asection.click('@mainMenu')
            Asection.waitForElementVisible('@categoryLink',5000)
            //.waitForElementVisible("//a[contains(text(),'All Mobile Phones')]", 1000)
            Asection.click('@categoryLink')
        AllVideos.click('@watchnow')
    }),

    this.Then(/^user clicked the Product category$/, function () {
        AmazonObjects(this)
            Asection.waitForElementVisible('@subcategoryLink',5000)
                .click('@subcategoryLink')
    }),
    this.Then(/^user clicked on the product$/, function () {
        AmazonObjects(this)
            Asection.waitForElementVisible('@productLink',15000)
                .click('@productLink')
            this.pause(5000)
    }),
    this.Then(/^user switches the window$/, function () {
         AmazonObjects(this)
             this.pause(5000)
             this.windowHandles(function(result) {
                 var newWindow;
                 this.verify.equal(result.value.length, 2, "There should be 2 windows opened")
                 newWindow = result.value[1]
                 this.switchWindow(newWindow)

             })
        }),
    this.Then(/^user clicked Add to Cart Button$/, function () {
         AmazonObjects(this)
        Asection.waitForElementVisible('@addToCartButton',8000)
                .click('@addToCartButton')
            this.pause(5000)
        }),
    this.Then(/^user clicked Proceed to Checkout Button$/, function () {
        AmazonObjects(this)
        Asection.waitForElementVisible('@proceedToCheckoutButton',8000)
            .click('@proceedToCheckoutButton')
        this.pause(5000)
    }),
    this.Then(/^user entered the userName$/, function () {
        AmazonObjects(this)
        Asection.waitForElementPresent('@userName',8000)
            .sendKeys('@userName',data.userNameData)
        this.pause(5000)
    });
    this.Then(/^user entered the Password$/, function () {
        AmazonObjects(this)
        Asection.waitForElementPresent('@password',8000)
            .sendKeys('@password',data.passwordData)
        this.pause(5000)
    });
    this.Then(/^user clicked LoginButton$/, function () {
        AmazonObjects(this)
        Asection.waitForElementPresent('@loginButton',8000)
            .click('@loginButton')
        this.pause(5000)
    });
    this.Then(/^user selects the shipping address$/, function () {
        AmazonObjects(this)
        Asection.waitForElementPresent('@selectAddressButton',8000)
            .click('@selectAddressButton')
        this.pause(5000)
    });
    this.Then(/^User clicks continue button$/, function () {
        AmazonObjects(this)
        Asection.waitForElementPresent('@continueButton',8000)
            .click('@continueButton')
        this.pause(5000)
    });

    this.Then(/^user see the Logout button$/, function (callback) {

    });


    this.Then(/^user clicks button A$/, function (callback) {
        Objects(this)
        login.waitForElementPresent('@loginButton',8000)
            .click('@A')
        this.pause(5000);
    });


};
