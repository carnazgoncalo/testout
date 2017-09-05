module.exports = {
   'Login test' : function (browser) {
        browser
            .useXpath()

            .url("http://dev137.finesource.org")
            .setValue('//*[@id="admin-form"]/fieldset/section[1]/label[2]/input', 'admin@fscontact.finesource.org')
            .setValue('//*[@id="admin-form"]/fieldset/section[2]/label[2]/input', 'n0telecom')
            .click('//*[@id="admin-form"]/footer/button')
            .pause(4000)
            .assert.containsText('//*[@id="channel-main-label-text"]/strong', 'Online')
            .end();
    }
};

