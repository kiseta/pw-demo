// tests/common.js
const { test } = require("@playwright/test");
const { LoginPage, HomePage, NewSimulationPage, PostRecoveryRecordingPage } = require('../pages/mvm-pages');
const { locators, data } = require('../resources/locators')

module.exports = {

    // reusable components

    LoadData: async function (site, stepnum) {

        await test.step(`Step ${stepnum} - Load Site Data for site: ${site}`, async () => {
            console.log(`**Step ${stepnum}`)

            // ---------------------------- LOAD DATA BASED ON SITE -----------------------------------

            console.log(`Running Test for ${site}`)

            const fs = require('fs');
            const path = require('path');
            const { parse } = require('csv-parse/sync');

            const records = parse(fs.readFileSync(path.join(__dirname, '_input.csv')), { columns: true, skip_empty_lines: true });

            let site_record = function (name) {
                let index = records.findIndex(function (item) {
                    return item.SiteName === name;
                });
                return records[index]
            }

            const record = site_record(site);

            console.log(`Site Data:`)
            console.log(record)

            // update data parameters based on site data
            data.HomePageTitle = record.HomePageTitle
            data.TestSimulationPageTitle = record.TestSimulationPageTitle
            data.SeamZoneOption = record.SeamZoneOption
            data.ModelSeamOption = record.ModelSeamOption
            data.ActualSeamOption = record.ActualSeamOption
            data.ContactForQueryValue = record.ContactForQueryValue
            data.HangwallWasteGeometryOption = record.HangwallWasteGeometryOption
            data.SplitThicknessOption = record.SplitThicknessOption
            data.SplitThicknessValue = record.SplitThicknessValue
            data.StrikeLengthValue = record.StrikeLengthValue
            data.SeamThicknessOption = record.SeamThicknessOption
            data.SeamThicknessValue = record.SeamThicknessValue
            data.BenchMeasurementOption = record.BenchMeasurementOption
            data.BenchMeasurementValue = record.BenchMeasurementValue
            data.SeamDipAngleValue = record.SeamDipAngleValue
            data.AshOption = record.AshOption
            data.SampledSeamAshValue = record.SampledSeamAshValue
            data.HangwallOption = record.HangwallOption
            data.FootwallOption = record.FootwallOption
            data.UndulationOption = record.UndulationOption
            data.CaseComparisonBasisOption = record.CaseComparisonBasisOption
            data.ProductTypeOption = record.ProductTypeOption
            data.RejectAshValue = record.RejectAshValue
            data.TargetAshValue = record.TargetAshValue
            data.CoalEstimatedShovelTimeValue = record.CoalEstimatedShovelTimeValue
            data.CoalEstimatedLoaderTimeValue = record.CoalEstimatedLoaderTimeValue
            data.CoalEstimatedDozerTimeValue = record.CoalEstimatedDozerTimeValue
            data.CoalEstimatedBackhoeTimeValue = record.CoalEstimatedBackhoeTimeValue
            data.WasteEstimatedDozerTimeValue = record.WasteEstimatedDozerTimeValue
            data.WasteEstimatedBackhoeTimeValue = record.WasteEstimatedBackhoeTimeValue
            data.ShovelProductivityRatingOption = record.ShovelProductivityRatingOption

            data.SeamRecoveredOption = record.SeamRecoveredOption
            data.FinalMinedVolumeValue = record.FinalMinedVolumeValue
            data.ActualAshValue = record.ActualAshValue
            data.ActualCoalLoadingShovelTimeValue = record.ActualCoalLoadingShovelTimeValue
            data.ActualCoalLoadingLoaderTimeValue = record.ActualCoalLoadingLoaderTimeValue
            data.ActualCoalCleaningDozerTimeValue = record.ActualCoalCleaningDozerTimeValue
            data.ActualCoalCleaningBackhoeTimeValue = record.ActualCoalCleaningBackhoeTimeValue
            data.ActualWasteCleaningDozerTimeValue = record.ActualWasteCleaniningDozerTimeValue
            data.ActualWasteCleaningBackhoeTimeValue = record.ActualWasteCleaniningBackhoeTimeValue
            data.RecoveredUnderThePastGuideOption = record.RecoveredUnderThePastGuideOption
        });
    },

    InitTest: async function (page, stepnum, site) {
        console.log(`**Step ${stepnum}`)

        await test.step(`Step ${stepnum} - Log on to MVM application`, async () => {

            const loginPage = new LoginPage(page);
            await loginPage.Login()
        });

        await test.step(`Step ${stepnum} - Navigate to Home Page`, async () => {
            const homePage = new HomePage(page);
            await homePage.selectSite(site);
            await homePage.validateHomePageTitle();
        });

        await test.step(`Step ${stepnum} - Navigate to Create New Simulation Page`, async () => {

            const homePage = new HomePage(page);
            await homePage.navigateNewSimulationPage();
        });

    },

    InitiateTestForEnvironment: async function (page, stepnum, url, site) {
        console.log(`**Step ${stepnum}`)

        await test.step(`Step ${stepnum} - Log on to MVM application`, async () => {

            const loginPage = new LoginPage(page);
            await loginPage.LaunchAppEnvironment(url)
        });

        await test.step(`Step ${stepnum} - Navigate to Home Page`, async () => {
            const homePage = new HomePage(page);
            await homePage.selectSite(site);
            await homePage.validateHomePageTitle();
        });

        await test.step(`Step ${stepnum} - Navigate to Create New Simulation Page`, async () => {

            const homePage = new HomePage(page);
            await homePage.navigateNewSimulationPage();
        });

    },

    InputNewSimulationData: async function (page, stepnum) {
        console.log(`**Step ${stepnum}`)

        await test.step(`Step ${stepnum} - Populate all relevant values on the create simulation page`, async () => {

            const newSimulationPage = new NewSimulationPage(page);

            await newSimulationPage.validateNewSimulationPageTitle();

            // --------------- PRIMARY FIELDS --------------------------------
            await newSimulationPage.selectSeamZone();
            await newSimulationPage.selectModelSeam();
            await newSimulationPage.selectActualSeam();
            await newSimulationPage.inputSimulationName();
            await newSimulationPage.inputContactForQuery();
            await newSimulationPage.selectHangwallWasteGeometry();
            await newSimulationPage.selectSplitThickness();
            await newSimulationPage.inputSplitThicknessValue();
            await newSimulationPage.inputStrikeLength();
            await newSimulationPage.selectSeamThickness();
            await newSimulationPage.inputSeamThicknessValue();
            await newSimulationPage.selectBenchMeasurement();
            await newSimulationPage.inputBenchMeasurementValue();
            await newSimulationPage.inputSeamDipAngle();
            await newSimulationPage.selectAsh();
            await newSimulationPage.selectHangwall();
            await newSimulationPage.selectFootwall();
            await newSimulationPage.selectUndulation();
            await newSimulationPage.selectCaseComparisonBasis();

            //---------------- SECONDARY FIELDS ------------------------------
            await newSimulationPage.selectProductType();
            await newSimulationPage.inputRejectAsh();
            await newSimulationPage.inputTargetAsh();
            await newSimulationPage.inputCoalEstimatedShovelTime();
            await newSimulationPage.inputCoalEstimatedLoaderTime();
            await newSimulationPage.inputCoalEstimatedDozerTime();
            await newSimulationPage.inputCoalEstimatedBackhoeTime();
            await newSimulationPage.inputWasteEstimatedDozerTime();
            await newSimulationPage.inputWasteEstimatedBackhoeTime();
            await newSimulationPage.selectShovelProductivityRating();

            await newSimulationPage.clickRunSimulationButton();
            await newSimulationPage.validateSimulationOutputPageTitle();

            await newSimulationPage.getRecommendationStatus();

        });

    },

    AddComment: async function (page, stepnum, section) {

        await test.step(`Step ${stepnum} - Add Comment`, async () => {

            const postRecoveryRecordingPage = new PostRecoveryRecordingPage(page)
            await postRecoveryRecordingPage.clickAddCommentsButton(section);
            await postRecoveryRecordingPage.inputCommentText(section);
            await postRecoveryRecordingPage.uploadFile()

        });

    },

    // AddAttachment: async function (page, stepnum) {

    //     await test.step(`Step ${stepnum} - Add Attachment`, async () => {

    //         const postRecoveryRecordingPage = new PostRecoveryRecordingPage(page)
    //         await postRecoveryRecordingPage.uploadFile()

    //     });

    // },


    AddComment_Inline: async function (page, stepnum, section) {

        await test.step(`Step ${stepnum} - Add Comment`, async () => {

            await this.AddComment(page, stepnum, section)

        });

    },

    ValidateComment: async function (page, stepnum, section) {

        await test.step(`Step ${stepnum} - Validate Comment`, async () => {

            const postRecoveryRecordingPage = new PostRecoveryRecordingPage(page)
            await postRecoveryRecordingPage.expandCommentsHeader(section);
            await postRecoveryRecordingPage.validateCommentText();
            // await postRecoveryRecordingPage.validateAttachment();
            

        });

    },

    AddComment_PostRecovery: async function (page, stepnum, section) {
        console.log(`**Step ${stepnum}`)

        await test.step(`Step ${stepnum} - Select New Simulation`, async () => {

            await this.SelectNewSimulation(page, stepnum);
            const postRecoveryRecordingPage = new PostRecoveryRecordingPage(page)
            await postRecoveryRecordingPage.validatePostRecoveryRecordingPageTitle();

        });


        await test.step(`Step ${stepnum} - Add, Save and Validate Comment: ${section}`, async () => {

            await this.AddComment(page, stepnum, section)
            //add attachment goes here

            const postRecoveryRecordingPage = new PostRecoveryRecordingPage(page)
            await postRecoveryRecordingPage.clickSaveButtonCommentsAndAttachments();
            await postRecoveryRecordingPage.validatePostRecoveryRecordingPageTitle();

            await this.ValidateComment(page, stepnum, section);

        });


        await test.step(`Step ${stepnum} - Navigate to All Simulations`, async () => {

            await this.NavigateViewAllSimulations(page, stepnum);

        });


    },


    AddAttachment_PostRecovery: async function (page, stepnum) {
        console.log(`**Step ${stepnum}`)

        await test.step(`Step ${stepnum} - Add Post Recovery Attachment`, async () => {

            const postRecoveryRecordingPage = new PostRecoveryRecordingPage(page)
            const newSimulationPage = new NewSimulationPage(page);
        


        });
    },

    SaveAsProduction: async function (page, stepnum) {
        console.log(`**Step ${stepnum}`)

        await test.step(`Step ${stepnum} - Create New Production Simulation and navigate to the simulation report page`, async () => {

            const newSimulationPage = new NewSimulationPage(page);
            await newSimulationPage.clickSaveAsProductionButton();
            await newSimulationPage.validatePostRecoveryRecordingPageTitle();
            await newSimulationPage.validateSimulationDetailsURL();

        });

    },

    SaveAsTest: async function (page, stepnum) {
        console.log(`**Step ${stepnum}`)
        await test.step(`Step ${stepnum} - Create New Test Simulation and navigate to the simulation report page`, async () => {

            const newSimulationPage = new NewSimulationPage(page);

            await newSimulationPage.clickSaveAsTestButton();

            await newSimulationPage.validateTestSimulationPageTitle();
            await newSimulationPage.validateSimulationDetailsURL();

        });

    },

    EditAndRunAgain: async function (page, stepnum) {
        console.log(`**Step ${stepnum}`)

        await test.step(`Step ${stepnum} - Click \'Edit and Run Again \' button`, async () => {

            const newSimulationPage = new NewSimulationPage(page);
            await newSimulationPage.clickEditAndRunAgainButton();

        });
    },

    ValidatePredictedValues: async function (page, stepnum) {
        console.log(`**Step ${stepnum}`)
        console.log(' ---------------- Validate Predicted Values ------------')

        await test.step(`Step ${stepnum} - Ensure all the calculated values are appearing correctly`, async () => {
            // ---------- PREDICTED VALUES VALIDATIONS 

            const newSimulationPage = new NewSimulationPage(page);


            await newSimulationPage.validatePredictedValue();
            await newSimulationPage.validatePredictedDeliveredAsh();
            await newSimulationPage.validatePredictedFinalMinedVolume();
            await newSimulationPage.validatePredictedFinalMinedMass();
            await newSimulationPage.validatePredictedFinalMinedSg();
            await newSimulationPage.validatePredictedMinViableSeamThickness();
            await newSimulationPage.validatePredictedVrueSeamThickness();
            await newSimulationPage.validatePredictedIdlingCost();
            await newSimulationPage.validatePredictedShovelProductivityRating();

            await newSimulationPage.validatePredictedEquipmentCoalShovel();
            await newSimulationPage.validatePredictedEquipmentCoalLoader();
            await newSimulationPage.validatePredictedEquipmentCoalDozer();
            await newSimulationPage.validatePredictedEquipmentCoalBackhoe();
            await newSimulationPage.validatePredictedEquipmentWasteDozer();
            await newSimulationPage.validatePredictedEquipmentWasteBackhoe();
            await newSimulationPage.validatePredictedEquipmentTotalCost();

        });
    },

    ValidateOriginalInputValues: async function (page, stepnum) {
        console.log(`**Step ${stepnum}`)
        console.log(' ---------------- Validate Original Input Values ------------')
        await test.step(`Step ${stepnum} - Ensure all the values entered in the \'Create Simulation\' page are appearing correctly on the simulation report page`, async () => {

            const newSimulationPage = new NewSimulationPage(page);

            // -------------- PRIMARY FIELDS VALIDATIONS -----------------------------
            await newSimulationPage.validateSeamZone()
            await newSimulationPage.validateModelSeam()
            await newSimulationPage.validateActualSeam()
            await newSimulationPage.validateSimulationName()
            await newSimulationPage.validateContactForQuery()
            await newSimulationPage.validateHangwallWasteGeometry()
            await newSimulationPage.validateSplitThickness()
            await newSimulationPage.validateSplitThicknessValue()
            await newSimulationPage.validateStrikeLength()
            await newSimulationPage.validateSeamThickness()
            await newSimulationPage.validateSeamThicknessValue()
            await newSimulationPage.validateBenchMeasurement()
            await newSimulationPage.validateBenchMeasurementValue()
            await newSimulationPage.validateSeamDipAngle()
            await newSimulationPage.validateAsh()
            await newSimulationPage.validateHangwall()
            await newSimulationPage.validateFootwall()
            await newSimulationPage.validateUndulation()
            await newSimulationPage.validateCaseComparisonBasis()

            // --------------- SECONDARY FIELDS VALIDATIONS ---------------------------
            await newSimulationPage.validateProductType()
            await newSimulationPage.validateRejectAsh()
            await newSimulationPage.validateTargetAsh()
            await newSimulationPage.validateCoalEstimatedShovelTime()
            await newSimulationPage.validateCoalEstimatedLoaderTime()
            await newSimulationPage.validateCoalEstimatedDozerTime()
            await newSimulationPage.validateCoalEstimatedBackhoeTime()
            await newSimulationPage.validateWasteEstimatedDozerTime()
            await newSimulationPage.validateWasteEstimatedBackhoeTime()
            await newSimulationPage.validateShovelProductivityRating()

            await newSimulationPage.getNewSimulationID();

        });
    },

    NavigateViewAllSimulations: async function (page, stepnum) {
        console.log(`**Step ${stepnum}`)

        await test.step(`Step ${stepnum} - Navigate to \'View All\' simulations`, async () => {

            const newSimulationPage = new NewSimulationPage(page);
            await newSimulationPage.navigateViewAllSimulations();
            await newSimulationPage.validateAllSimulationsPageTitle();
        });
    },

    ValidateNewSimulationGridItem: async function (page, stepnum, status) {
        console.log(`**Step ${stepnum}`)
        await test.step(`Step ${stepnum} - Ensure that the Simulation just created is visible on the \'View All\' simulations page`, async () => {

            const newSimulationPage = new NewSimulationPage(page);

            await newSimulationPage.validateNewSimulationGridItem();
            await newSimulationPage.validateNewSimulationGridItemStatus(status);

        });

    },

    SelectNewSimulation: async function (page, stepnum) {
        console.log(`**Step ${stepnum}`)

        await test.step(`Step ${stepnum} - Navigate to Post Recovery Recording Page`, async () => {

            const newSimulationPage = new NewSimulationPage(page);
            await newSimulationPage.selectNewSimulationGridItem();

        });

    },


    InputPostRecoveryData: async function (page, stepnum) {
        console.log(`**Step ${stepnum}`)

        await test.step(`Step ${stepnum} - Validate Post Recovery Dialog Title`, async () => {

            const postRecoveryRecordingPage = new PostRecoveryRecordingPage(page)
            await postRecoveryRecordingPage.validatePostRecoveryDialogTitle();

        });

        await test.step(`Step ${stepnum} - Input Post Recovery Data`, async () => {

            console.log(' ---------------- Input Post Recovery Data ------------')

            const postRecoveryRecordingPage = new PostRecoveryRecordingPage(page)
            await postRecoveryRecordingPage.selectSeamRecovered();
            await postRecoveryRecordingPage.inputFinalMinedVolume();
            await postRecoveryRecordingPage.inputActualAsh();
            await postRecoveryRecordingPage.inputActualCoalLoadingShovelTime();
            await postRecoveryRecordingPage.inputActualCoalLoadingLoaderTime();
            await postRecoveryRecordingPage.inputActualCoalCleaningDozerTime();
            await postRecoveryRecordingPage.inputActualCoalCleaningBackhoeTime();
            await postRecoveryRecordingPage.inputActualWasteCleaningDozerTime();
            await postRecoveryRecordingPage.inputActualWasteCleaningBackhoeTime();
            await postRecoveryRecordingPage.selectRecoveredUnderThePastGuideOption();

        });
    },

    SaveAsProduction_PostRecovery: async function (page, stepnum) {
        console.log(`**Step ${stepnum}`)

        await test.step(`Step ${stepnum} - Save as Production Post Recovery`, async () => {
            const postRecoveryRecordingPage = new PostRecoveryRecordingPage(page)
            await postRecoveryRecordingPage.clickSaveAsProductionButtonPostRecovery();
            await postRecoveryRecordingPage.validatePostRecoveryConfirmationDialogTitle();
            await postRecoveryRecordingPage.clickSaveButtonPostRecovery();
            await postRecoveryRecordingPage.validatePostRecoveryRecordingPageTitle();

        });
    },

    SaveAsDraft_PostRecovery: async function (page, stepnum) {
        console.log(`**Step ${stepnum}`)

        await test.step(`Step ${stepnum} - Save as Draft Post Recovery`, async () => {

            const postRecoveryRecordingPage = new PostRecoveryRecordingPage(page)
            await postRecoveryRecordingPage.clickSaveAsDraftButtonPostRecovery();
            await postRecoveryRecordingPage.validateEditPostRecoveryDraftButton();

        });
    },



    // reusable BaseTests --------------------------------------------------

    BaseTest_SaveAsProduction: async function (page, site, status_initial, status_final) {

        // Create New Simulation
        await this.LoadData(site, 1);
        await this.InitTest(page, 2, site);
        await this.InputNewSimulationData(page, 3);
        await this.AddComment_Inline(page, 4, "Inline") // add Comment and Attachment 1
        
        await this.SaveAsProduction(page, 5);
        await this.ValidatePredictedValues(page, 6);
        await this.ValidateOriginalInputValues(page, 7);

        await this.ValidateComment(page, 8, "Predicted")// validate Comment and Attachment 1

        await this.NavigateViewAllSimulations(page, 9);
        await this.ValidateNewSimulationGridItem(page, 10, status_initial);

        // Input Post Recovery Data - Save as Production/Office
        await this.SelectNewSimulation(page, 11);
        await this.InputPostRecoveryData(page, 12);
        await this.AddComment_Inline(page, 13, "Inline") // add Comment and Attachment 2
        await this.SaveAsProduction_PostRecovery(page, 14);
        await this.ValidateComment(page, 15, "Actual")// validate Comment and Attachment 2

        await this.NavigateViewAllSimulations(page, 16);
        await this.ValidateNewSimulationGridItem(page, 17, status_final);

        await this.AddComment_PostRecovery(page, 18, "Actual"); // add and validate Comment and Attachment 3

        await this.AddComment_PostRecovery(page, 19, "Predicted"); // add and validate Comments and Attachment 4


    },

    BaseTest_SaveAsDraft: async function (page, site, status_initial, status_draft, status_final) {

        // Create New Simulation
        await this.LoadData(site, 1);
        await this.InitTest(page, 2, site);
        await this.InputNewSimulationData(page, 3);
        await this.SaveAsProduction(page, 4);
        await this.ValidatePredictedValues(page, 5);
        await this.ValidateOriginalInputValues(page, 6);
        await this.NavigateViewAllSimulations(page, 7);
        await this.ValidateNewSimulationGridItem(page, 8, status_initial);

        // Input Post Recovery Data - Save as Draft

        await this.SelectNewSimulation(page, 9);
        await this.InputPostRecoveryData(page, 10);
        await this.SaveAsDraft_PostRecovery(page, 11);
        await this.NavigateViewAllSimulations(page, 12);
        await this.ValidateNewSimulationGridItem(page, 13, status_draft);

        // Save as Production
        await this.SelectNewSimulation(page, 14);
        await this.SaveAsProduction_PostRecovery(page, 15);
        await this.NavigateViewAllSimulations(page, 16);
        await this.ValidateNewSimulationGridItem(page, 17, status_final);

    },

    BaseTest_SaveAsTest: async function (page, site, status_initial) {


        // Create New Simulation
        await this.LoadData(site, 1);
        await this.InitTest(page, 2, site);
        await this.InputNewSimulationData(page, 3);
        await this.SaveAsTest(page, 4);
        await this.ValidatePredictedValues(page, 5);
        await this.ValidateOriginalInputValues(page, 6);
        await this.NavigateViewAllSimulations(page, 7);
        await this.ValidateNewSimulationGridItem(page, 8, status_initial);

    },

    BaseTest_EditAndRunAgain: async function (page, site, status_initial, status_final) {


        // Create New Simulation
        await this.LoadData(site, 1);
        await this.InitTest(page, 2, site);
        await this.InputNewSimulationData(page, 3);
        await this.EditAndRunAgain(page, 4);

        data.ActualSeamOption = data.ModelSeamOption;
        data.SeamDipAngleValue = '65'
        data.CoalEstimatedLoaderTimeValue = '15'
        data.WasteEstimatedBackhoeTimeValue = '15'

        await this.InputNewSimulationData(page, 5);
        await this.SaveAsProduction(page, 6);

        await this.ValidatePredictedValues(page, 7);
        await this.ValidateOriginalInputValues(page, 8);
        await this.NavigateViewAllSimulations(page, 9);
        await this.ValidateNewSimulationGridItem(page, 10, status_initial);

        // Enter Post Recovery Data - Save as Production/Office

        await this.SelectNewSimulation(page, 11);
        await this.InputPostRecoveryData(page, 12);
        await this.SaveAsProduction_PostRecovery(page, 13);
        await this.NavigateViewAllSimulations(page, 14);
        await this.ValidateNewSimulationGridItem(page, 15, status_final);

    },

    // ----------------------------------------------------------

    RunBefore: async function ({page}, testInfo) {
        console.log(` ------------ Running ${testInfo.title}\nStart Time: ${new Date()}`);
          
    },

    RunAfter: async function ({page}, testInfo) {

        const tt = testInfo.title
        const ts = testInfo.status
        const td = (testInfo.duration * 0.001).toFixed(2)
        console.log(`----\nFinished ${tt} with status **${ts}** and ${td} seconds duration`);
        console.log(`End Time: ${new Date()}`)

    },

    ReusableTemplate: async function (page, stepnum) {
        console.log(`**Step ${stepnum}`)
        await test.step(`Step ${stepnum} - Step Desctiption`, async () => {

        });

    },

}