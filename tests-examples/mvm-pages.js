const { expect } = require('@playwright/test');
const { locators, data, commentValue } = require('../resources/locators')
const crypto = require('crypto')


class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async navigateToLoginScreen() {
        await this.page.goto(global.BASE_URL);
        console.log(`Navigate to URL: ${global.BASE_URL}`)
    }

    async launchApplicationEnvironment(url) {
        await this.page.goto(url);
        console.log(`Navigate to URL: ${url}`)
    }

    async smallround() {
        await this.page.click(locators.SmallRound);
    }

    async submitLoginForm() {
        // await expect(this.page.locator(locators.SignInHeader)).toContainText('Trying to sign you in');
        await expect(this.page.locator(locators.SignInHeader)).toBeVisible();
        // await expect(this.page.locator(locators.SignInHeader)).toBeVisible();
        // await expect(this.page.locator(locators.SignInHeader)).toBeVisible();
        await expect(this.page.locator(locators.SignInHeader)).toContainText('Sign in');

        // await this.page.fill(locators.EmailidField, global.Email)
        await this.page.fill(locators.EmailidField, process.env.TEST_ACCOUNT_USERNAME)
        await this.page.click(locators.NextButton);

        // await expect(this.page.locator(locators.SignInHeader)).toBeVisible();
        await expect(this.page.locator(locators.SignInHeader)).toContainText('Enter password');

        // await this.page.fill(locators.PasswordField, global.Password)
        await this.page.fill(locators.PasswordField, process.env.TEST_ACCOUNT_PASSWORD)
        await this.page.click(locators.SigninButton);

        await expect(this.page.locator(locators.SignInHeader)).toContainText('Stay signed in?');
        await this.page.click(locators.YesButton);
    }

    async Login() {
        await this.navigateToLoginScreen();
        await this.submitLoginForm();
    }

    async LaunchAppEnvironment(url){
        await this.launchApplicationEnvironment(url);
        await this.submitLoginForm();
    }

}


class HomePage {

    constructor(page) {
        this.page = page;
    }

    async selectSite(val) {
        data.SelectSiteOption = val;
        await selectList(this.page, locators.SelectSiteList, data.SelectSiteOption)
        await this.page.click(locators.ContinueButton)
    }


    async validateWebsiteTitle() {
        await expect(this.page.locator(locators.WebsiteTitle)).toContainText(data.WebsiteTitle);
    }

    async validateHomePageTitle() {
        await validatePageTitle(this.page, 'HomePageTitle', 'HomePageTitle')
    }


    async navigateNewSimulationPage() {
        await this.page.click(locators.NewSimulationButton);
    }



}

class NewSimulationPage {

    constructor(page) {
        this.page = page;
    };

    async validateNewSimulationPageTitle() {
        await validatePageTitle(this.page, 'NewSimulationPageTitle', 'NewSimulationPageTitle')
    }

    async selectSeamZone() {
        await selectList(this.page, locators.SeamZoneList, data.SeamZoneOption);
    };

    async selectModelSeam() {
        await selectList(this.page, locators.ModelSeamList, data.ModelSeamOption);
    };

    async selectActualSeam() {
        await selectList(this.page, locators.ActualSeamList, data.ActualSeamOption);
    };

    async inputSimulationName() {
        await inputValue(this.page, locators.SimulationNameInput, data.SimulationNameValue);
    };

    async inputContactForQuery() {
        await inputValue(this.page, locators.ContactForQueryInput, data.ContactForQueryValue);
    };

    async selectHangwallWasteGeometry() {
        await selectList(this.page, locators.HangwallWasteGeometryList, data.HangwallWasteGeometryOption);
    };

    async selectSplitThickness() {
        await selectList(this.page, locators.SplitThicknessList, data.SplitThicknessOption);
    };

    async inputSplitThicknessValue() {
        await inputValue(this.page, locators.SplitThicknessValueInput, data.SplitThicknessValue);
    };

    async inputStrikeLength() {
        await inputValue(this.page, locators.StrikeLengthInput, data.StrikeLengthValue);
    };

    async selectSeamThickness() {
        await selectList(this.page, locators.SeamThicknessList, data.SeamThicknessOption);
    };

    async inputSeamThicknessValue() {
        await inputValue(this.page, locators.SeamThicknessValueInput, data.SeamThicknessValue);
    };

    async selectBenchMeasurement() {
        await selectList(this.page, locators.BenchMeasurementList, data.BenchMeasurementOption);
    };

    async inputBenchMeasurementValue() {
        await inputValue(this.page, locators.BenchMeasurementValueInput, data.BenchMeasurementValue);
    };

    async inputSeamDipAngle() {
        await inputValue(this.page, locators.SeamDipAngleInput, data.SeamDipAngleValue);
    };

    async selectAsh() {
        await selectList(this.page, locators.AshList, data.AshOption);
    };

    async inputSampledSeamAsh() {
        await inputValue(this.page, locators.SampledSeamAshInput, data.SampledSeamAshValue);
    };

    async selectHangwall() {
        await selectList(this.page, locators.HangwallList, data.HangwallOption);
    };

    async selectFootwall() {
        await selectList(this.page, locators.FootwallList, data.FootwallOption);
    };

    async selectUndulation() {
        await selectList(this.page, locators.UndulationList, data.UndulationOption);
    };

    async selectCaseComparisonBasis() {
        await selectList(this.page, locators.CaseComparisonBasisList, data.CaseComparisonBasisOption);
    };

    async selectProductType() {
        await selectList(this.page, locators.ProductTypeList, data.ProductTypeOption);
    };

    async inputRejectAsh() {
        await inputValue(this.page, locators.RejectAshInput, data.RejectAshValue);
    };

    async inputTargetAsh() {
        await inputValue(this.page, locators.TargetAshInput, data.TargetAshValue);
    };

    async inputCoalEstimatedShovelTime() {
        await inputValue(this.page, locators.CoalEstimatedShovelTimeInput, data.CoalEstimatedShovelTimeValue);
    };

    async inputCoalEstimatedLoaderTime() {
        await inputValue(this.page, locators.CoalEstimatedLoaderTimeInput, data.CoalEstimatedLoaderTimeValue);
    };

    async inputCoalEstimatedDozerTime() {
        await inputValue(this.page, locators.CoalEstimatedDozerTimeInput, data.CoalEstimatedDozerTimeValue);
    };

    async inputCoalEstimatedBackhoeTime() {
        await inputValue(this.page, locators.CoalEstimatedBackhoeTimeInput, data.CoalEstimatedBackhoeTimeValue);
    };

    async inputWasteEstimatedDozerTime() {
        await inputValue(this.page, locators.WasteEstimatedDozerTimeInput, data.WasteEstimatedDozerTimeValue);
    };

    async inputWasteEstimatedBackhoeTime() {
        await inputValue(this.page, locators.WasteEstimatedBackhoeTimeInput, data.WasteEstimatedBackhoeTimeValue);
    };

    async selectShovelProductivityRating() {
        await selectList(this.page, locators.ShovelProductivityRatingList, data.ShovelProductivityRatingOption);
    };

    async clickRunSimulationButton() {
        await this.page.click(locators.RunSimulationButton)
    };


    async getRecommendationStatus() {
        const recommendationStatus = await this.page.locator(locators.RecommendationStatus).innerText();
        console.log(`Recommendation Status: ${recommendationStatus}`);
        data.RecommendationStatusValue = recommendationStatus;
    };



    async clickSaveAsProductionButton() {
        await this.page.click(locators.SaveAsProductionButton)
    };

    async clickSaveAsTestButton() {
        await this.page.click(locators.SaveAsTestButton)
    };

    async clickEditAndRunAgainButton() {
        await this.page.click(locators.EditAndRunAgainButton)
    };

    async getNewSimulationID() {
        const url = await this.page.url();//get the url of the current page
        let newSimulationIDValue = url.split("/").pop().split("?").shift();;
        console.log('New Simulation ID: ' + newSimulationIDValue);
        // set the value of the New Simulation Grid Item to Name and ID
        locators.NewSimulationGridItem = '//td[contains(.,"' + data.SimulationNameValue + '")]/../td/..//a[contains(@href,"' + newSimulationIDValue + '")]';
    }

    // validation methods 

    async validatePageURL(url) {
        await expect(this.page).toHaveURL(url);
    }

    async validateSimulationDetailsURL() {
        await this.validatePageURL(locators.NewSimulationDetailsURL)
    };

    async validateSimulationOutputPageTitle() {
        await validatePageTitle(this.page, 'SimulationOutputPageTitle', 'SimulationOutputPageTitle')
    }

    async validatePostRecoveryRecordingPageTitle() {
        await validatePageTitle(this.page, 'ProductionSimulationPageTitle', 'ProductionSimulationPageTitle')
    };

    async validateTestSimulationPageTitle() {
        await validatePageTitle(this.page, 'TestSimulationPageTitle', 'TestSimulationPageTitle')
    };



    async validateSeamZone() {
        await validateList(this.page, 'SeamZoneList', 'SeamZoneOption')
    };

    async validateModelSeam() {
        await validateList(this.page, 'ModelSeamList', 'ModelSeamOption')
    };

    async validateActualSeam() {
        await validateList(this.page, 'ActualSeamList', 'ActualSeamOption')
    };

    async validateSimulationName() {
        await validateInput(this.page, 'SimulationNameInput', 'SimulationNameValue')
    };

    async validateContactForQuery() {
        await validateInput(this.page, 'ContactForQueryInput', 'ContactForQueryValue')
    };

    async validateHangwallWasteGeometry() {
        await validateList(this.page, 'HangwallWasteGeometryList', 'HangwallWasteGeometryOption')
    };

    async validateSplitThickness() {
        await validateList(this.page, 'SplitThicknessList', 'SplitThicknessOption')
    };

    async validateSplitThicknessValue() {
        await validateInput(this.page, 'SplitThicknessValueInput', 'SplitThicknessValue')
    };

    async validateStrikeLength() {
        await validateInput(this.page, 'StrikeLengthInput', 'StrikeLengthValue')
    };

    async validateSeamThickness() {
        await validateList(this.page, 'SeamThicknessList', 'SeamThicknessOption')
    };

    async validateSeamThicknessValue() {
        await validateInput(this.page, 'SeamThicknessValueInput', 'SeamThicknessValue')
    };

    async validateBenchMeasurement() {
        await validateList(this.page, 'BenchMeasurementList', 'BenchMeasurementOption')
    };

    async validateBenchMeasurementValue() {
        await validateInput(this.page, 'BenchMeasurementValueInput', 'BenchMeasurementValue')
    };

    async validateSeamDipAngle() {
        await validateInput(this.page, 'SeamDipAngleInput', 'SeamDipAngleValue')
    };

    async validateAsh() {
        await validateList(this.page, 'AshList', 'AshOption')
    };

    async validateSampledSeamAsh() {
        await validateInput(this.page, 'SampledSeamAshInput', 'SampledSeamAshValue')
    };

    async validateHangwall() {
        await validateList(this.page, 'HangwallList', 'HangwallOption')
    };

    async validateFootwall() {
        await validateList(this.page, 'FootwallList', 'FootwallOption')
    };

    async validateUndulation() {
        await validateList(this.page, 'UndulationList', 'UndulationOption')
    };

    async validateCaseComparisonBasis() {
        await validateList(this.page, 'CaseComparisonBasisList', 'CaseComparisonBasisOption')
    };

    async validateProductType() {
        await validateList(this.page, 'ProductTypeList', 'ProductTypeOption')
    };

    async validateRejectAsh() {
        await validateInput(this.page, 'RejectAshInput', 'RejectAshValue')
    };

    async validateTargetAsh() {
        await validateInput(this.page, 'TargetAshInput', 'TargetAshValue')
    };

    async validateCoalEstimatedShovelTime() {
        await validateInput(this.page, 'CoalEstimatedShovelTimeInput', 'CoalEstimatedShovelTimeValue')
    };

    async validateCoalEstimatedLoaderTime() {
        await validateInput(this.page, 'CoalEstimatedLoaderTimeInput', 'CoalEstimatedLoaderTimeValue')
    };

    async validateCoalEstimatedDozerTime() {
        await validateInput(this.page, 'CoalEstimatedDozerTimeInput', 'CoalEstimatedDozerTimeValue')
    };

    async validateCoalEstimatedBackhoeTime() {
        await validateInput(this.page, 'CoalEstimatedBackhoeTimeInput', 'CoalEstimatedBackhoeTimeValue')
    };

    async validateWasteEstimatedDozerTime() {
        await validateInput(this.page, 'WasteEstimatedDozerTimeInput', 'WasteEstimatedDozerTimeValue')
    };

    async validateWasteEstimatedBackhoeTime() {
        await validateInput(this.page, 'WasteEstimatedBackhoeTimeInput', 'WasteEstimatedBackhoeTimeValue')
    };

    async validateShovelProductivityRating() {
        await validateList(this.page, 'ShovelProductivityRatingList', 'ShovelProductivityRatingOption')
    };

    // predicted values validation 

    async validatePredictedValue() {
        await validatePredictedValue(this.page, 'PredictedValue')
    };

    async validatePredictedDeliveredAsh() {
        await validatePredictedValue(this.page, 'PredictedDeliveredAsh')
    };

    async validatePredictedFinalMinedVolume() {
        await validatePredictedValue(this.page, 'PredictedFinalMinedVolume')
    };

    async validatePredictedFinalMinedMass() {
        await validatePredictedValue(this.page, 'PredictedFinalMinedMass')
    };

    async validatePredictedFinalMinedSg() {
        await validatePredictedValue(this.page, 'PredictedFinalMinedSg')
    };

    async validatePredictedMinViableSeamThickness() {
        await validatePredictedValue(this.page, 'PredictedMinViableSeamThickness')
    };

    async validatePredictedVrueSeamThickness() {
        await validatePredictedValue(this.page, 'PredictedVrueSeamThickness')
    };

    async validatePredictedIdlingCost() {
        await validatePredictedValue(this.page, 'PredictedIdlingCost')
    };

    async validatePredictedShovelProductivityRating() {
        await validatePredictedValue(this.page, 'PredictedShovelProductivityRating')
    };

    // --- validate predicted equipment

    async validatePredictedEquipmentCoalShovel() {
        await validatePredictedValue(this.page, 'PredictedEquipmentCoalShovel')
    };

    async validatePredictedEquipmentCoalLoader() {
        await validatePredictedValue(this.page, 'PredictedEquipmentCoalLoader')
    };

    async validatePredictedEquipmentCoalDozer() {
        await validatePredictedValue(this.page, 'PredictedEquipmentCoalDozer')
    };

    async validatePredictedEquipmentCoalBackhoe() {
        await validatePredictedValue(this.page, 'PredictedEquipmentCoalBackhoe')
    };

    async validatePredictedEquipmentWasteDozer() {
        await validatePredictedValue(this.page, 'PredictedEquipmentWasteDozer')
    };

    async validatePredictedEquipmentWasteBackhoe() {
        await validatePredictedValue(this.page, 'PredictedEquipmentWasteBackhoe')
    };

    async validatePredictedEquipmentTotalCost() {
        await validatePredictedValue(this.page, 'PredictedEquipmentTotalCost')
    };

    async navigateViewAllSimulations() {
        await this.page.click(locators.ViewAllSimulationsMenuItem);
        await this.page.reload()
    };

    async validateAllSimulationsPageTitle() {
        await validatePageTitle(this.page, 'HomePageTitle', 'AllSimulationsPageTitle');
    }

    async validateNewSimulationGridItem() {
        await expect(this.page.locator(locators.NewSimulationGridItem)).toBeVisible();
        console.log('NewSimulationGridItem: ' + locators.NewSimulationGridItem);

    };

    async validateNewSimulationGridItemStatus(val) {
        const linkElement = this.page.locator(locators.NewSimulationGridItem)
        const newSimulationStatus = await linkElement.innerText();

        await expect(linkElement).toContainText(val);
        console.log(`New Simulation Grid Item Status, Expected: ${val}, Actual: ${newSimulationStatus}`);
    };

    async selectNewSimulationGridItem() {

        const newSimulationLink = this.page.locator(locators.NewSimulationGridItem)
        console.log(`Navigate to New Simulation Link: ${newSimulationLink}`)
        await newSimulationLink.click();
    };

}

class PostRecoveryRecordingPage {

    constructor(page) {
        this.page = page;
    }

    async validatePostRecoveryDialogTitle() {
        await validatePageTitle(this.page, 'PostRecoveryDialogTitle', 'PostRecoveryDialogTitle')
    }

    async validatePostRecoveryRecordingPageTitle() {
        await validatePageTitle(this.page, 'ProductionSimulationPageTitle', 'ProductionSimulationPageTitle')
    };

    async selectSeamRecovered() {
        await selectList(this.page, locators.SeamRecoveredList, data.SeamRecoveredOption)
    };

    async inputFinalMinedVolume() {
        await inputValue_PostRecovery(this.page, locators.FinalMinedVolumeInput, data.FinalMinedVolumeValue)
    };

    async inputActualAsh() {
        await inputValue_PostRecovery(this.page, locators.ActualAshInput, data.ActualAshValue)
    };

    async inputActualCoalLoadingShovelTime() {
        await inputValue_PostRecovery(this.page, locators.ActualCoalLoadingShovelTimeInput, data.ActualCoalLoadingShovelTimeValue);
    };

    async inputActualCoalLoadingLoaderTime() {
        await inputValue_PostRecovery(this.page, locators.ActualCoalLoadingLoaderTimeInput, data.ActualCoalLoadingLoaderTimeValue);
    };

    async inputActualCoalCleaningDozerTime() {

        await inputValue_PostRecovery(this.page, locators.ActualCoalCleaningDozerTimeInput, data.ActualCoalCleaningDozerTimeValue);
    };

    async inputActualCoalCleaningBackhoeTime() {
        await inputValue_PostRecovery(this.page, locators.ActualCoalCleaningBackhoeTimeInput, data.ActualCoalCleaningBackhoeTimeValue);
    };

    async inputActualWasteCleaningDozerTime() {
        await inputValue_PostRecovery(this.page, locators.ActualWasteCleaningDozerTimeInput, data.ActualWasteCleaningDozerTimeValue);
    };

    async inputActualWasteCleaningBackhoeTime() {
        await inputValue_PostRecovery(this.page, locators.ActualWasteCleaningBackhoeTimeInput, data.ActualWasteCleaningBackhoeTimeValue)
    };


    async selectRecoveredUnderThePastGuideOption() {
        await selectList(this.page, locators.RecoveredUnderThePastGuideList, data.RecoveredUnderThePastGuideOption)
    };


    async clickAddCommentsButton(section) {

        if (section == "Inline") { var sectionLocator = locators.AddCommentsButton }

        if (section == "Actual") { var sectionLocator = locators.AddCommentsButtonActual }

        if (section == "Predicted") { var sectionLocator = locators.AddCommentsButtonPredicted }

        await this.page.click(sectionLocator);
    };


    async inputCommentText(section) {

        if (section == "Inline") { var sectionLocator = locators.AddCommentsTextArea }

        if (section == "Actual") { var sectionLocator = locators.AddCommentsTextAreaActual }

        if (section == "Predicted") { var sectionLocator = locators.AddCommentsTextAreaPredicted }

        await this.page.click(sectionLocator);

        const unqid = uniqueID()
        console.log(`Generate Comment Unique ID: ${unqid}`)
        data.CommentTextValue = `${commentValue}, Comment ID: ${unqid}`

        await this.page.locator(sectionLocator).fill(data.CommentTextValue)

        console.log(`Add [${section}] section comment: ${data.CommentTextValue}`)
    };

    async clickSelectFileButton() {
        await this.page.click(locators.SelectFilesButton);
    };

    async uploadFile() {
        await this.page.locator(locators.SelectFilesButton).setInputFiles(data.UploadFilePath);
    };

    async clickSaveButtonCommentsAndAttachments() {
        await this.page.click(locators.PostRecoverySaveButton);

    };

    async clickImageCloseButton() {
        await this.page.click(locators.ImageCloseButton);

    };

    async expandCommentsHeader(section) {

        if (section == "Actual") {
            var sectionLocator = locators.CommentsHeaderPostRecovery;
        }

        if (section == "Predicted") {
            var sectionLocator = locators.CommentsHeaderProductionSimulation;
        }

        // check expanded state, click if visible: hidden

        await this.page.click(sectionLocator);

    };

    async validateCommentText() {

        locators.CommentContainer = '//div[@class="comment-container"][.//div[contains(*, "' + data.CommentTextValue + '")]]';
        console.log('------------------------')
        const commentContent = await this.page.locator(locators.CommentContainer).innerText();
        console.log(`Full Comment Content value: ${commentContent}`);

        const newTodaysDate =  getFormattedDate(new Date())

        await expect(this.page.locator(locators.CommentContainer)).toContainText(data.CommentTextValue);
        await expect(this.page.locator(locators.CommentContainer)).toContainText(newTodaysDate);

        console.log(`Validate comment contains text: ${data.CommentTextValue}`)
        console.log(`Validate comment contains Updated date: ${newTodaysDate}`)
    };


    async clickSaveAsProductionButtonPostRecovery() {
        await this.page.click(locators.PostRecoverySaveAsButton)
    };

    async clickSaveAsDraftButtonPostRecovery() {
        await this.page.click(locators.PostRecoverySaveAsDraftButton)
    };

    async validatePostRecoveryConfirmationDialogTitle() {
        await validatePageTitle(this.page, 'PostRecoveryConfirmationDialogTitle', 'PostRecoveryConfirmationDialogTitle')
    };

    async clickSaveButtonPostRecovery() {
        await this.page.click(locators.PostRecoverySaveButton);
    };

    async validateEditPostRecoveryDraftButton() {
        await this.page.reload(); // reload helps with accessing page after the modal dialog was closed
        await expect(this.page.locator(locators.EditPostRecoveryDraftButton)).toHaveText(data.EditPostRecoveryDraftButtonText)
    };

}

// common methods

async function selectList(page, listName, optionValue) {
    const locatorDisabled = await page.locator(listName).getAttribute('aria-disabled');
    const fieldValue = await page.locator(listName).innerText();

    if (optionValue !== '' && locatorDisabled == 'false') {

        if (fieldValue !== optionValue) {
            // console.log(listName + ': List Disabled: ' + locatorDisabled)
            // console.log(listName + ' Field Value: ' + fieldValue);
            console.log(`Selecting [${getKeyName(listName)}] option: ${optionValue}`)
            await page.locator(listName).click();
            await page.locator('.mat-option-text', { hasText: `${optionValue}` }).click();
        }

    }

};

async function inputValue(page, inputFieldName, inputValue) {

    const locatorDisabled = await page.locator(inputFieldName).isDisabled();
    const fieldValue = await page.locator(inputFieldName).inputValue();

    if (inputValue !== '' && locatorDisabled == false) {

        if (fieldValue !== inputValue) {
            // console.log(inputFieldName + ' Input disabled: ' + locatorDisabled);
            // console.log(inputFieldName + ' Field Value: ' + fieldValue);
            console.log(`Entering [${getKeyName(inputFieldName)}] value: ${inputValue}`)
            await page.fill(inputFieldName, '');
            await page.fill(inputFieldName, inputValue);
            await expect(page.locator(inputFieldName)).toHaveValue(inputValue);
            
        }

    }
};

async function inputValue_PostRecovery(page, inputFieldName, inputValue) {

    const fieldValue = await page.locator(inputFieldName).inputValue();
    console.log(inputFieldName + ' Field Value: ' + fieldValue);

    if (inputValue !== '' && fieldValue == '') {

            console.log(`Entering [${getKeyName(inputFieldName)}] value: ${inputValue}`)
            await page.locator(inputFieldName).click();
            await page.fill(inputFieldName, inputValue);
            await expect(page.locator(inputFieldName)).toHaveValue(inputValue);

    }
};

async function validateList(page, locatorValue, dataValue) {
    const outputValue = await page.locator(locators[locatorValue]).innerText();

    if (data[dataValue] !== '') {
        console.log(`${locatorValue}, Original: ${data[dataValue]}, Actual: ${outputValue}`)
        await expect(page.locator(locators[locatorValue])).toContainText(data[dataValue]);
    }
};

async function validateInput(page, locatorValue, dataValue) {
    const outputValue = await page.locator(locators[locatorValue]).inputValue();

    if (data[dataValue] !== '') {
        console.log(`${locatorValue}, Original: ${data[dataValue]}, Actual: ${outputValue}`)
        await expect(page.locator(locators[locatorValue])).toHaveValue(data[dataValue]);
    }
};

async function validatePredictedValue(page, locatorValue) {

    const outputValue = await page.locator(locators[locatorValue]).innerText();
    console.log(`${locatorValue}: ${outputValue}`)
    await expect(page.locator(locators[locatorValue])).not.toBeEmpty();
}

async function validatePageTitle(page, locatorValue, dataValue) {

    const outputValue = await page.locator(locators[locatorValue]).innerText();
    console.log(`--------------------\nValidate ${locatorValue}, Expected: ${data[dataValue]}, Actual: ${outputValue}`)
    await expect(page.locator(locators[locatorValue])).toContainText(data[dataValue]);

}



function uniqueID() {
    return (
        crypto.randomUUID().slice(-12)
    );
}

function getKeyName(key) {
    const vals = Object.values(locators);
    const valIdx = (e) => e == key;
    const keyIdx = vals.findIndex(valIdx);
    return Object.keys(locators)[keyIdx]
}

function getFormattedDate(date) {
    let year = (date.getFullYear()).toString().slice(-2);
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
  
    return month + '-' + day + '-' + year;
}



module.exports = { HomePage, LoginPage, NewSimulationPage, PostRecoveryRecordingPage };