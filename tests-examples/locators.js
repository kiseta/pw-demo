// locators.js

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('') +
    '_' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join('')
  );
}

const simulationName = "AUTO_" + formatDate(new Date())

let newSimulationID;

const commentValue = 'Automated Test Execution, Add Comments and Attachments ' + simulationName; // value uppended in run time with comment ID

const locators = {
  // --------------- LOGIN ---------------------------
  SignInHeader: "role=heading",
  SignInHeaderText: '//div[@role="heading"][contains(text(), "Trying to sign you in")],//div[@role="heading"][contains(text(), "Sign in")],//div[@role="heading"][contains(text(), "Enter password")]',
  // SignInHeaderText: '//div[@role="heading"][contains(text(), "Trying to sign you in" or "Sign in" or "Enter password")]',
  EmailidField: '//input[@type="email"]',
  NextButton: '//*[@type="submit"]',
  PasswordField: '//*[@type="password"]',
  SigninButton: '//*[@value="Sign in"]',
  YesButton: '//*[@value="Yes"]',
  SmallRound: 't-btn-small-round svg',
  // ------------- SELECT SITE----------------------
  SelectSiteList: '//mat-form-field//mat-select',
  ContinueButton: 'button:has-text("Continue")',
  // --------------- HOME PAGE --------------------------------
  WebsiteTitle: "//header//span[@class='title']",
  // ---------------- PAGE TITLES ------------------------------------
  HomePageTitle: "//div[@class='title-container ng-star-inserted']//span[@class='title']",
  PageTitle: "//div[@class='page-heading']/span[@class='title']",
  SimulationOutputPageTitle: "//div[@class='wrapper created-wrapper']/div[@class='page-heading']/span[@class='title']",
  TestSimulationPageTitle: 'data-test-id=simulation-title-test',
  ProductionSimulationPageTitle: 'data-test-id=simulation-title-production',
  PostRecoveryDialogTitle: "//div[@class='mat-dialog-title heading']/span[@class='title']",
  NewSimulationPageTitle: '//div[@class="page-heading"]//span[@class="title"]',
  // ---------------------------------------------------------------------
  NewSimulationButton: 'button:has-text("CREATE NEW SIMULATION")',
  // ---------------- NEW SIMULATION PAGE --------------------------------
  /// --------------- PRIMARY FIELDS --------------------------------
  SeamZoneList: 'data-test-id=seam-zone',
  ModelSeamList: 'data-test-id=model-seam',
  ActualSeamList: 'data-test-id=actual-seam',
  SimulationNameInput: 'data-test-id=simulation-name',
  ContactForQueryInput: 'data-test-id=contact-for-query',
  HangwallWasteGeometryList: 'data-test-id=hangwall-waste-geometry',
  SplitThicknessList: 'data-test-id=split-thickness',
  SplitThicknessValueInput: 'data-test-id=split-thickness-value',
  StrikeLengthInput: 'data-test-id=strike-length',
  SeamThicknessList: 'data-test-id=seam-thickness',
  SeamThicknessValueInput: 'data-test-id=seam-thickness-value',
  BenchMeasurementList: 'data-test-id=bench-measurement',
  BenchMeasurementValueInput: 'data-test-id=bench-measurement-value',
  SeamDipAngleInput: 'data-test-id=seam-dip-angle',
  AshList: 'data-test-id=ash',
  ModeledSeamAshInput: 'data-test-id=modeled-seam-ash',
  SampledSeamAshInput: 'data-test-id=sampled-seam-ash',
  HangwallList: 'data-test-id=hangwall',
  FootwallList: 'data-test-id=footwall',
  UndulationList: 'data-test-id=undulation',
  CaseComparisonBasisList: 'data-test-id=case-comparison-basis',
  /// ---------------- SECONDARY FIELDS ------------------------------
  ProductTypeList: 'data-test-id=product-type',
  RejectAshInput: 'data-test-id=reject-ash',
  TargetAshInput: 'data-test-id=target-ash',
  CoalEstimatedShovelTimeInput: 'data-test-id=coal-estimated-shovel-time',
  CoalEstimatedLoaderTimeInput: 'data-test-id=coal-estimated-loader-time',
  CoalEstimatedDozerTimeInput: 'data-test-id=coal-estimated-dozer-time',
  CoalEstimatedBackhoeTimeInput: 'data-test-id=coal-estimated-backhoe-time',
  WasteEstimatedDozerTimeInput: 'data-test-id=waste-estimated-dozer-time',
  WasteEstimatedBackhoeTimeInput: 'data-test-id=waste-estimated-backhoe-time',
  ShovelProductivityRatingList: 'data-test-id=shovel-productivity-rating',
  /// ----------------------------------------------------------
  RunSimulationButton: 'button:has-text("Run")',
  RecommendationStatus: '//div[contains(text(),"Recommendation")]/following-sibling::div',
  SaveAsProductionButton: 'id=production',
  SaveAsTestButton: 'id=simulation',
  EditAndRunAgainButton: 'id=editAndRun',
  NewSimulationDetailsURL: /.*detail.*/,
  ViewAllSimulationsURL: /.*list.*/,
  //// ---------------- PREDICTED VALUES VALIDATIONS -------------------

  PredictedValue: '//div[@style="order: 2;"]//span[contains(@class,"item-value")]',
  PredictedDeliveredAsh: '//div[@style="order: 4;"]//span[contains(@class,"item-value")]',
  PredictedFinalMinedVolume: '//div[@style="order: 6;"]//span[contains(@class,"item-value")]',
  PredictedFinalMinedMass: '//div[@style="order: 8;"]//span[contains(@class,"item-value")]',
  PredictedFinalMinedSg: '//div[@style="order: 10;"]//span[contains(@class,"item-value")]',
  PredictedMinViableSeamThickness: '//div[@style="order: 12;"]//span[contains(@class,"item-value")]',
  PredictedVrueSeamThickness: '//div[@style="order: 14;"]//span[contains(@class,"item-value")]',
  PredictedIdlingCost: '//div[@style="order: 16;"]//span[contains(@class,"item-value")]',
  PredictedShovelProductivityRating: '//div[@style="order: 18;"]//span[contains(@class,"item-value")]',
  PredictedEquipmentCoalShovel: '//div[@data-test-id="simulation-output-predicted"]//div[@data-test-id="output-block-coal"]//div[@class="equipment"]//span[text()="Shovel"]/following-sibling::span[contains(@class, "item-value")]',
  PredictedEquipmentCoalLoader: '//div[@data-test-id="simulation-output-predicted"]//div[@data-test-id="output-block-coal"]//div[@class="equipment"]//span[text()="Loader"]/following-sibling::span[contains(@class, "item-value")]',
  PredictedEquipmentCoalDozer: '//div[@data-test-id="simulation-output-predicted"]//div[@data-test-id="output-block-coal"]//div[@class="equipment"]//span[text()="Dozer"]/following-sibling::span[contains(@class, "item-value")]',
  PredictedEquipmentCoalBackhoe: '//div[@data-test-id="simulation-output-predicted"]//div[@data-test-id="output-block-coal"]//div[@class="equipment"]//span[text()="Backhoe"]/following-sibling::span[contains(@class, "item-value")]',
  PredictedEquipmentWasteDozer: '//div[@data-test-id="simulation-output-predicted"]//div[@data-test-id="output-block-waste"]//span[text()="Dozer"]/following-sibling::span[contains(@class, "item-value")]',
  PredictedEquipmentWasteBackhoe: '//div[@data-test-id="simulation-output-predicted"]//div[@data-test-id="output-block-waste"]//span[text()="Backhoe"]/following-sibling::span[contains(@class, "item-value")]',
  PredictedEquipmentTotalCost: '//div[@data-test-id="eq-block-total-cost"]//span[contains(@class, "item-value")]',

  // ---------------- VIEW ALL SIMULATIONS---------------------------------
  ViewAllSimulationsMenuItem: 'a:has-text("View All Simulations")',
  NewSimulationGridItem: '', // updated during run time, see getNewSimulationID() in pages/mvm_pages.js
  //'//td[contains(.,"' + simulationName + '")]/../td/..//a[contains(@href,"' + newSimulationID + '")]'
  // ----------------- POST RECOVERY FIELDS ---------------------------
  SeamRecoveredList: 'data-test-id=seam-recovered',
  FinalMinedVolumeInput: 'data-test-id=bcm-recovered',
  ActualAshInput: 'data-test-id=actual-ash',
  ActualCoalLoadingShovelTimeInput: 'data-test-id=actual-shovel-time',
  ActualCoalLoadingLoaderTimeInput: 'data-test-id=actual-loader-time',
  ActualCoalCleaningDozerTimeInput: 'data-test-id=actual-dozer-time',
  ActualCoalCleaningBackhoeTimeInput: 'data-test-id=actual-backhoe-time',
  ActualWasteCleaningDozerTimeInput: 'data-test-id=waste-actual-dozer-time',
  ActualWasteCleaningBackhoeTimeInput: '//input[@data-test-id="waste-actual-backhoe-time"]',
  RecoveredUnderThePastGuideList: 'data-test-id=recovered-in-the-past',
  //--------------------------------------------------
  AddCommentsButton: 'data-test-id=add-comments-button',
  AddCommentsTextArea: 'data-test-id=add-comments-textarea',
  AddCommentsButtonActual: '//div[@class="simulation-output-block ng-star-inserted"][contains(*, "Actual")]/..//*[@data-test-id="add-comments-button"]',
  AddCommentsButtonPredicted: '//div[@class="simulation-output-block ng-star-inserted"][contains(*, "Predicted")]/..//*[@data-test-id="add-comments-button"]',
  AddCommentsTextAreaActual: '//div[@class="simulation-output-block ng-star-inserted"][contains(*, "Actual")]/..//*[@data-test-id="add-comments-textarea"]',
  AddCommentsTextAreaPredicted: '//div[@class="simulation-output-block ng-star-inserted"][contains(*, "Predicted")]/..//*[@data-test-id="add-comments-textarea"]',
  SelectFilesButton: '//input[@id="post"]',
  CommentsHeaderProductionSimulation: 'span:has-text("Production Simulation Comments"),span:has-text("Office Simulation Comments")',
  CommentsHeaderPostRecovery: 'span:has-text("Post Recovery Comments")',
  CommentText: '//div[@class="comment-text"]',
  // CommentContainer: '//div[@class="comment-container"][.//div[contains(*, "' + commentValue + '")]]',
  CommentContainer: '', // update in run time mvm-pages.js > validateCommentText()
  PostRecoverySaveAsButton: 'button:has-text("Save as Production"), button:has-text("Save as Office")',
  PostRecoverySaveAsDraftButton: 'button:has-text("Save as Draft")',
  PostRecoveryConfirmationDialogTitle: '//div[@class="modal-wrapper"]/h2[@class="mat-dialog-title"]',
  PostRecoverySaveButton: 'button:has-text("Save")',
  EditPostRecoveryDraftButton: 'data-test-id=add-post-recovery-recording-button',
  // ------------ CLONE AND EXPORT BUTTONS -------------------
  CloneUserInputsButton: 'data-test-id=clone-user-inputs-button',
  ExportCSVButton: 'data-test-id=export-csv-button',
  ExportPDFButton: 'data-test-id=export-pdf-button',
  ImageCloseButton:'//button[@class="close-btn"]',
};



const data = {
  // --------------- LOGIN ---------------------------
  // see playwright.config.js
  // ------------- SELECT SITE----------------------
  envUrl:'',
  SelectSiteOption: 'EVO',
  WebsiteTitle: 'Mine Value Maximizer',
  HomePageTitle: 'Recent Production Simulations',
  // ---------------- NEW SIMULATION PAGE --------------------------------
  NewSimulationPageTitle: 'New Simulation',
  // ---------------- NEW SIMULATION DATA VALUES --values populated from input.csv at the begining of the test run
  // --------------- PRIMARY FIELDS --------------------------------
  SimulationNameValue: simulationName,
  SeamZoneOption: 'Baldy',
  ModelSeamOption: '9.U',
  ActualSeamOption: '',
  ContactForQueryValue: '',
  HangwallWasteGeometryOption: '',
  SplitThicknessOption: '',
  SplitThicknessValue: '',
  StrikeLengthValue: '100',
  SeamThicknessOption: 'True Thickness',
  SeamThicknessValue: '12',
  BenchMeasurementOption: 'Push Distance',
  BenchMeasurementValue: '',
  SeamDipAngleValue: '45',
  AshOption: 'Modeled Seam Ash',
  SampledSeamAshValue: '',
  ModeledSeamAshValue: '',
  HangwallOption: '',
  FootwallOption: '',
  UndulationOption: '',
  CaseComparisonBasisOption: '',
  /// ---------------- SECONDARY FIELDS ------------------------------
  ProductTypeOption: '',
  RejectAshValue: '',
  TargetAshValue: '',
  CoalEstimatedShovelTimeValue: '10',
  CoalEstimatedLoaderTimeValue: '10',
  CoalEstimatedDozerTimeValue: '10',
  CoalEstimatedBackhoeTimeValue: '10',
  WasteEstimatedDozerTimeValue: '10',
  WasteEstimatedBackhoeTimeValue: '10',
  ShovelProductivityRatingOption: '',
  // -----------------------------------------------------------------------
  SimulationOutputPageTitle: 'Simulation Output',
  NewSimulationIDValue: newSimulationID,
  AllSimulationsPageTitle: 'View All Simulations',
  // ----------------- POST RECOVERY DATA PARAMETERS -values populated from input.csv at the begining of the test run ---------------------------
  PostRecoveryDialogTitle: 'Post Recovery Recording',
  SeamRecoveredOption: '',
  FinalMinedVolumeValue: '',
  ActualAshValue: '',
  ActualCoalLoadingShovelTimeValue: '',
  ActualCoalLoadingLoaderTimeValue: '',
  ActualCoalCleaningDozerTimeValue: '',
  ActualCoalCleaningBackhoeTimeValue: '',
  ActualWasteCleaningDozerTimeValue: '',
  ActualWasteCleaningBackhoeTimeValue: '',
  RecoveredUnderThePastGuideOption: '',
  CommentTextValue: commentValue,
  // --------------------------------------------------------------------
  RecommendationStatusValue: '',
  TestSimulationPageTitle: 'Test Simulation Output',
  ProductionSimulationPageTitle: 'Post Recovery Recording',
  PostRecoveryConfirmationDialogTitle: 'Post Recovery Recording - Save as',
  EditPostRecoveryDraftButtonText: 'EDIT POST RECOVERY RECORDING DRAFT',
  //------------- NEW SIMULATION STATUS VALUES --------------------------
  SaveAsProdInitialStatus: 'Reconcile',
  SaveAsProdDraftStatus: 'Draft',
  SaveAsProdFinalStatus: 'Done',
  SaveAsTestStatus: 'View',
  OutputSectionActual: '',
  OutputSectionPredicted: '',
  UploadFilePath: 'test-png-file-upload.png',
};

module.exports = { locators, data, newSimulationID, commentValue };