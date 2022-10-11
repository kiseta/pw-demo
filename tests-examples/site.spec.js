const { test } = require("@playwright/test");
const common = require("./common");
const { data } = require('../resources/locators');


// const sites = ['EVO', 'GHO', 'LCO']
const sites = ['EVO']



for (const site of sites) {

    test.beforeEach(async ({ page }, testInfo) => {
        common.RunBefore({ page }, testInfo);
    });

    test.afterEach(async ({ page }, testInfo) => {
        common.RunAfter({ page }, testInfo);
    });

    test.only(`Create New Simulation - Prod + Attachment - Site: ${site}`, async ({ page }) => {

        // Create New Simulation
        await common.LoadData(site, 1);
        await common.InitTest(page, 2, site);
        await common.InputNewSimulationData(page, 3);
        await common.AddComment_Inline(page, 4, "Inline") // add Comment and Attachment 1
        await common.SaveAsProduction(page, 5);
        await common.ValidatePredictedValues(page, 6);
        await common.ValidateOriginalInputValues(page, 7);

        await common.ValidateComment(page, 8, "Predicted")// validate Comment and Attachment 1

        await common.NavigateViewAllSimulations(page, 9);
        
    });


    test(`Create New Simulation - Production Simulation - Site: ${site}`, async ({ page }) => {
        await common.BaseTest_SaveAsProduction(page, site, data.SaveAsProdInitialStatus, data.SaveAsProdFinalStatus)
    });

    test(`Create New Simulation - Draft Simulation - Site: ${site}`, async ({ page }) => {
        await common.BaseTest_SaveAsDraft(page, site, data.SaveAsProdInitialStatus, data.SaveAsProdDraftStatus, data.SaveAsProdFinalStatus)
    });

    test(`Create New Simulation - Test Simulation - Site: ${site}`, async ({ page }) => {
        await common.BaseTest_SaveAsTest(page, site, data.SaveAsTestStatus);
    });

    test(`Create New Simulation - Edit and Run Again - Site: ${site}`, async ({ page }) => {
        await common.BaseTest_EditAndRunAgain(page, site, data.SaveAsProdInitialStatus, data.SaveAsProdFinalStatus)
    });

}
