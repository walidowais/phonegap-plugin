/**
 * @file
 * @fileoverview <h3>Tune Cordova Plugin Documentation.</h3>
 */

var exec = require("cordova/exec");

var TunePlugin = function() {}

/**
 * @deprecated Since version 6.0. Use initTune instead.
 */
TunePlugin.prototype.init = function(tuneAdvertiserId, tuneConversionKey, tunePackageName, tuneIsWearable) {
    console.log("TunePlugin.js: Calling init");
    exec(null, null, "TunePlugin", "init", [tuneAdvertiserId, tuneConversionKey, tunePackageName, tuneIsWearable]);
    return this;
};

/**
 * @function initTune
 * @summary Initializes the TUNE SDK.
 *
 * @param {string} tuneAdvertiserId TUNE advertiser ID
 * @param {string} tuneConversionKey TUNE conversion key
 * @param {boolean} turnOnIAM Whether to enable Tune In-App Marketing or not
 */
TunePlugin.prototype.initTune = function(tuneAdvertiserId, tuneConversionKey, turnOnIAM) {
    console.log("TunePlugin.js: Calling initTune");
    exec(null, null, "TunePlugin", "initTune", [tuneAdvertiserId, tuneConversionKey, turnOnIAM]);
    return this;
};

/**
 * IOS Only.
 */
TunePlugin.prototype.automateIapEventMeasurement = function(automate) {
    console.log("TunePlugin.js: Calling automateIapEventMeasurement");
    exec(null, null, "TunePlugin", "automateIapEventMeasurement", [automate]);
    return this;
};

/**
 * IOS Only.
 * TODO: Implement for Android
 */
TunePlugin.prototype.getAdvertisingId = function(success, failure) {
    console.log("TunePlugin.js: Calling getAdvertisingId");
    exec(success, failure, "TunePlugin", "getAdvertisingId", []);
};

/**
 * @function getTuneId
 * @summary Gets the TUNE ID generated on install
 *
 * @param {callback} success Callback returns the TUNE ID.
 * @param {callback} failure Callback Message if there was an error.
 */
TunePlugin.prototype.getTuneId = function(success, failure) {
    console.log("TunePlugin.js: Calling getTuneId");
    exec(success, failure, "TunePlugin", "getTuneId", []);
};

/**
 * @function getOpenLogId
 * @summary Gets the first TUNE open log ID
 *
 * @param {callback} success Callback returns the first TUNE open log ID.
 * @param {callback} failure Callback Message if there was an error.
 */
TunePlugin.prototype.getOpenLogId = function(success, failure) {
    console.log("TunePlugin.js: Calling getOpenLogId");
    exec(success, failure, "TunePlugin", "getOpenLogId", []);
};

/**
 * @function getIsPayingUser
 * @summary Gets whether the user is revenue-generating or not
 *
 * @param {callback} success Callback returns true if the user is revenue-generating, or false if not.
 * @param {callback} failure Callback Message if there was an error.
 */
TunePlugin.prototype.getIsPayingUser = function(success, failure) {
    console.log("TunePlugin.js: Calling getIsPayingUser");
    exec(success, failure, "TunePlugin", "getIsPayingUser", []);
};

/**
 * @function getIsPrivacyProtectedDueToAge
 * @summary Returns whether this device profile is flagged as privacy protected.
 * @description This will be true if either the age is set to less than 13 or if setPrivacyProtectedDueToAge(boolean) is set to true.
 *
 * @param {callback} success Callback returns true if the age has been set to less than 13 OR this profile has been set explicitly as privacy protected.
 * @param {callback} failure Callback Message if there was an error.
 */
TunePlugin.prototype.getIsPrivacyProtectedDueToAge = function(success, failure) {
    console.log("TunePlugin.js: Calling getIsPrivacyProtectedDueToAge");
    exec(success, failure, "TunePlugin", "getIsPrivacyProtectedDueToAge", []);
};

/**
 * @function registerDeeplinkListener
 * @summary Set the deeplink listener that will be called.
 * @description This will be called when either a deferred deeplink is found for a fresh install or for handling an opened Tune Link.  Registering a deeplink listener will trigger an asynchronous call to check for deferred deeplinks
 *
 * @param {callback} success Callback returns if successfully did Receive a Deeplink
 * @param {callback} failure Callback Message if registration failed.
 */
TunePlugin.prototype.registerDeeplinkListener = function(success, failure) {
    console.log("TunePlugin.js: Calling registerDeeplinkListener");
    exec(success, failure, "TunePlugin", "registerDeeplinkListener", []);
    return this;
};

/**
 * @function unregisterDeeplinkListener
 * @summary Unregister the deeplink listener.
 * @description Remove the deeplink listener previously set with registerDeeplinkListener().
 */
TunePlugin.prototype.unregisterDeeplinkListener = function() {
    console.log("TunePlugin.js: Calling unregisterDeeplinkListener");
    exec(null, null, "TunePlugin", "unregisterDeeplinkListener", []);
    return this;
};

/**
 * @function setAge
 * @summary Sets the user's age.
 * @description When age is set to a value less than 13 IAM push notifications will not be sent to this device, in order to comply with COPPA.
 * @see https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule
 *
 * @param {number} age User age
 */
TunePlugin.prototype.setAge = function(age) {
    console.log("TunePlugin.js: Calling setAge");
    exec(null, null, "TunePlugin", "setAge", [age]);
    return this;
};

/**
 * Android Only.
 */
TunePlugin.prototype.setAndroidId = function(enable) {
    console.log("TunePlugin.js: Calling setAndroidId");
    exec(null, null, "TunePlugin", "setAndroidId", [enable]);
    return this;
};

/**
 * Android Only.
 */
TunePlugin.prototype.setAndroidIdMd5 = function(enable) {
    console.log("TunePlugin.js: Calling setAndroidIdMd5");
    exec(null, null, "TunePlugin", "setAndroidIdMd5", [enable]);
    return this;
};

/**
 * Android Only.
 */
TunePlugin.prototype.setAndroidIdSha1 = function(enable) {
    console.log("TunePlugin.js: Calling setAndroidIdSha1");
    exec(null, null, "TunePlugin", "setAndroidIdSha1", [enable]);
    return this;
};

/**
 * Android Only.
 */
TunePlugin.prototype.setAndroidIdSha256 = function(enable) {
    console.log("TunePlugin.js: Calling setAndroidIdSha256");
    exec(null, null, "TunePlugin", "setAndroidIdSha256", [enable]);
    return this;
};

/**
 * @function setAppAdMeasurement
 * @summary Sets whether app-level ad tracking is enabled.
 *
 * @param {boolean} enable true if user has opted-in of ad tracking, false if not
 */
TunePlugin.prototype.setAppAdMeasurement = function(enable) {
    console.log("TunePlugin.js: Calling setAppAdMeasurement");
    exec(null, null, "TunePlugin", "setAppAdMeasurement", [enable]);
    return this;
};

/**
 * @function setCurrencyCode
 * @summary Sets the ISO 4217 currency code.
 *
 * @param {string} currencyCode the currency code
 */
TunePlugin.prototype.setCurrencyCode = function(currencyCode) {
    console.log("TunePlugin.js: Calling setCurrencyCode");
    exec(null, null, "TunePlugin", "setCurrencyCode", [currencyCode]);
    return this;
};

/**
 * @function setDebugMode
 * @summary Turns debug mode on or off.
 *
 * @param {boolean} enable whether to enable debug output
 */
TunePlugin.prototype.setDebugMode = function(enable) {
    console.log("TunePlugin.js: Calling setDebugMode");
    exec(null, null, "TunePlugin", "setDebugMode", [enable]);
    return this;
};

/**
 * @function setDeepLink
 * @summary Set referral url (deeplink).
 * @description Set referral url (deeplink). You usually do not need to call this directly.
 *
 * @param {string} deepLinkUrl deeplink with which app was invoked
 */
TunePlugin.prototype.setDeepLink = function(deepLinkUrl) {
    console.log("TunePlugin.js: Calling setDeepLink");
    exec(null, null, "TunePlugin", "setDeepLink", [deepLinkUrl]);
    return this;
};

/**
 * @function setDelegate
 * @summary Register a TuneListener interface to receive server response callback
 *
 * @param {boolean} enable a TuneListener that will call back when a server request is complete
 */
TunePlugin.prototype.setDelegate = function(enable, success, failure) {
    console.log("TunePlugin.js: Calling setDelegate");
    exec(success, failure, "TunePlugin", "setDelegate", [enable]);
    return this;
};

/**
 * Android only.
 */
TunePlugin.prototype.setDeviceId = function(enable) {
    console.log("TunePlugin.js: Calling setDeviceId");
    exec(null, null, "TunePlugin", "setDeviceId", [enable]);
    return this;
};

/**
 * Android only.
 */
TunePlugin.prototype.setEmailCollection = function(enable) {
    console.log("TunePlugin.js: Calling setEmailCollection");
    exec(null, null, "TunePlugin", "setEmailCollection", [enable]);
    return this;
};

/**
 * @function setExistingUser
 * @summary Set whether this is an existing user or a new one.
 * @description This is generally used to distinguish users who were using previous versions of the
 * app, prior to integration of the Tune SDK. The default is to assume a new user.
 * @see http://support.mobileapptracking.com/entries/22621001-Handling-Installs-prior-to-SDK-implementation
 *
 * @param {boolean} existingUser true if this user already had the app installed prior to updating to TUNE
 */
TunePlugin.prototype.setExistingUser = function(existingUser) {
    console.log("TunePlugin.js: Calling setExistingUser");
    exec(null, null, "TunePlugin", "setExistingUser", [existingUser]);
    return this;
};

/**
 * @function setFacebookEventLogging
 * @summary Set whether the Tune events should also be logged to the Facebook SDK.
 * @description This flag is ignored if the Facebook SDK is not present.
 *
 * @param {boolean} enable Whether to send Tune events to FB as well
 * @param {boolean} limit Whether data such as that generated through FBAppEvents and sent to Facebook should be restricted from being used for other than analytics and conversions.
 */
TunePlugin.prototype.setFacebookEventLogging = function(enable, limit) {
    console.log("TunePlugin.js: Calling setFacebookEventLogging");
    exec(null, null, "TunePlugin", "setFacebookEventLogging", [enable, limit]);
    return this;
};

/**
 * @function setFacebookUserId
 * @summary Sets the user ID to associate with Facebook.
 * @param {string} facebookUserId the Facebook user id
 */
TunePlugin.prototype.setFacebookUserId = function(facebookUserId) {
    console.log("TunePlugin.js: Calling setFacebookUserId");
    exec(null, null, "TunePlugin", "setFacebookUserId", [facebookUserId]);
    return this;
};

/**
 * @function setGender
 * @summary Sets the user gender.
 * @param {number} gender use 0 == MALE, 1 == FEMALE
 */
TunePlugin.prototype.setGender = function(gender) {
    console.log("TunePlugin.js: Calling setGender");
    exec(null, null, "TunePlugin", "setGender", [gender]);
    return this;
};

/**
 * Android only.
 */
TunePlugin.prototype.setGoogleAdvertisingId = function(googleAid, isLAT) {
    console.log("TunePlugin.js: Calling setGoogleAdvertisingId");
    exec(null, null, "TunePlugin", "setGoogleAdvertisingId", [googleAid, isLAT]);
    return this;
};

/**
 * Android only.
 */
TunePlugin.prototype.setGoogleUserId = function(googleUserId) {
    console.log("TunePlugin.js: Calling setGoogleUserId");
    exec(null, null, "TunePlugin", "setGoogleUserId", [googleUserId]);
    return this;
};

/**
 * @function setLocation
 * @summary Sets the user's location.
 * @description Manually setting the location through this method disables geo-location auto-collection.
 *
 * @param {number} latitude Latitude
 * @param {number} longitude Longitude
 * TODO: Add altitude
 */
TunePlugin.prototype.setLocation = function(latitude, longitude) {
    console.log("TunePlugin.js: Calling setLocation");
    exec(null, null, "TunePlugin", "setLocation", [latitude, longitude]);
    return this;
};

/**
 * @function setLocationWithAltitude
 * @summary Sets the user's location.
 * @description Manually setting the location through this method disables geo-location auto-collection.
 *
 * @param {number} latitude Latitude
 * @param {number} longitude Longitude
 * @param {number} altitude Altitude
 */
TunePlugin.prototype.setLocationWithAltitude = function(latitude, longitude, altitude) {
    console.log("TunePlugin.js: Calling setLocationWithAltitude");
    exec(null, null, "TunePlugin", "setLocationWithAltitude", [latitude, longitude, altitude]);
    return this;
};

/**
 * @function setPackageName
 * @summary Sets the app package name
 *
 * @param {string} packageName App package name
 */
TunePlugin.prototype.setPackageName = function(packageName) {
    console.log("TunePlugin.js: Calling setPackageName");
    exec(null, null, "TunePlugin", "setPackageName", [packageName]);
    return this;
};

/**
 * @function setPayingUser
 * @summary Set whether the user is generating revenue for the app or not.
 * @description If measureEvent is called with a non-zero revenue, this is automatically set to YES.
 *
 * @param {boolean} payingUser true if the user is revenue-generating, false if not
 */
TunePlugin.prototype.setPayingUser = function(payingUser) {
    console.log("TunePlugin.js: Calling setPayingUser");
    exec(null, null, "TunePlugin", "setPayingUser", [payingUser]);
    return this;
};

/**
 * @function setPreloadData
 * @summary Sets publisher information for attribution.
 *
 * @param {object} preloadData Preload app attribution data (JSON)
 */
TunePlugin.prototype.setPreloadData = function(preloadData) {
    console.log("TunePlugin.js: Calling setPreloadData");
    exec(null, null, "TunePlugin", "setPreloadData", [preloadData]);
    return this;
};

/**
 * @function setPrivacyProtectedDueToAge
 * @summary Set privacy as protected.
 * @description Set this device profile as privacy protected for the purposes of the protection of children from ad targeting and personal data collection. In the US this is part of the COPPA law.
 *
 * @param {boolean} isPrivacyProtected true if privacy should be protected for this user.
 */
TunePlugin.prototype.setPrivacyProtectedDueToAge = function(isPrivacyProtected) {
    console.log("TunePlugin.js: Calling setPrivacyProtectedDueToAge");
    exec(null, null, "TunePlugin", "setPrivacyProtectedDueToAge", [isPrivacyProtected]);
    return this;
};

/**
 * @function setTRUSTeId
 * @summary Sets the TRUSTe ID
 *
 * @param {string} trusteID TRUSTe ID
 */
TunePlugin.prototype.setTRUSTeId = function(trusteID) {
    console.log("TunePlugin.js: Calling setTRUSTeId");
    exec(null, null, "TunePlugin", "setTRUSTeId", [trusteID]);
    return this;
};

/**
 * @function setTwitterUserId
 * @summary Sets the user ID to associate with Twitter
 *
 * @param {string} twitterUserId the Twitter user id
 */
TunePlugin.prototype.setTwitterUserId = function(twitterUserId) {
    console.log("TunePlugin.js: Calling setTwitterUserId");
    exec(null, null, "TunePlugin", "setTwitterUserId", [twitterUserId]);
    return this;
};

/**
 * @function setUserEmail
 * @summary Sets the MD5, SHA-1 and SHA-256 hash representations of the user's email address.
 *
 * @param {string} userEmail The user's email address.
 */
TunePlugin.prototype.setUserEmail = function(userEmail) {
    console.log("TunePlugin.js: Calling setUserEmail");
    exec(null, null, "TunePlugin", "setUserEmail", [userEmail]);
    return this;
};

/**
 * @function setUseId
 * @summary Sets the user ID.
 *
 * @param {string} userId The string name for the user ID.
 */
TunePlugin.prototype.setUserId = function(userId) {
    console.log("TunePlugin.js: Calling setUserId");
    exec(null, null, "TunePlugin", "setUserId", [userId]);
    return this;
};

/**
 * @function setUserName
 * @summary Sets the MD5, SHA-1 and SHA-256 hash representations of the user's name.
 *
 * @param {string} userName The user's name.
 */
TunePlugin.prototype.setUserName = function(userName) {
    console.log("TunePlugin.js: Calling setUserName");
    exec(null, null, "TunePlugin", "setUserName", [userName]);
    return this;
};

/**
 * IOS Only.
 */
TunePlugin.prototype.setUseCookieMeasurement = function(enable) {
    console.log("TunePlugin.js: Calling setUseCookieMeasurement");
    exec(null, null, "TunePlugin", "setUseCookieMeasurement", [enable]);
    return this;
};

/**
 * IOS Only.
 */
TunePlugin.prototype.setShouldAutoCollectAppleAdvertisingIdentifier = function(autoCollect) {
    console.log("TunePlugin.js: Calling setShouldAutoCollectAppleAdvertisingIdentifier");
    exec(null, null, "TunePlugin", "setShouldAutoCollectAppleAdvertisingIdentifier", [autoCollect]);
    return this;
};

/**
 * @function setShouldAutoCollectDeviceLocation
 * @summary Whether to autocollect device location if location is enabled
 *
 * @param {boolean} autoCollect Automatically collect device location, default is true
 */
TunePlugin.prototype.setShouldAutoCollectDeviceLocation = function(autoCollect) {
    console.log("TunePlugin.js: Calling setShouldAutoCollectDeviceLocation");
    exec(null, null, "TunePlugin", "setShouldAutoCollectDeviceLocation", [autoCollect]);
    return this;
};

/**
 * IOS Only.
 */
TunePlugin.prototype.setShouldAutoDetectJailbroken = function(autoDetect) {
    console.log("TunePlugin.js: Calling setShouldAutoDetectJailbroken");
    exec(null, null, "TunePlugin", "setShouldAutoDetectJailbroken", [autoDetect]);
    return this;
};

/**
 * IOS Only.
 */
TunePlugin.prototype.setShouldAutoGenerateAppleVendorIdentifier = function(autoGenerate) {
    console.log("TunePlugin.js: Calling setShouldAutoGenerateAppleVendorIdentifier");
    exec(null, null, "TunePlugin", "setShouldAutoGenerateAppleVendorIdentifier", [autoGenerate]);
    return this;
};

/**
 * IOS Only.
 */
TunePlugin.prototype.setJailbroken = function(enable) {
    console.log("TunePlugin.js: Calling setJailbroken");
    exec(null, null, "TunePlugin", "setJailbroken", [enable]);
    return this;
};

/**
 * IOS Only.
 */
TunePlugin.prototype.setAppleAdvertisingIdentifier = function(appleAdvertisingId, adTrackingEnabled) {
    console.log("TunePlugin.js: Calling setAppleAdvertisingIdentifier");
    exec(null, null, "TunePlugin", "setAppleAdvertisingIdentifier", [appleAdvertisingId, adTrackingEnabled]);
    return this;
};

/**
 * IOS Only.
 */
TunePlugin.prototype.setAppleVendorIdentifier = function(appleVendorId) {
    console.log("TunePlugin.js: Calling setAppleVendorIdentifier");
    exec(null, null, "TunePlugin", "setAppleVendorIdentifier", [appleVendorId]);
    return this;
};

/**
 * IOS Only.
 */
TunePlugin.prototype.startAppToAppMeasurement = function(targetAppPackageName, targetAppAdvertiserId, targetAdvertiserOfferId, targetAdvertiserPublisherId, shouldRedirect) {
    console.log("TunePlugin.js: Calling startAppToAppMeasurement");
    exec(null, null, "TunePlugin", "startAppToAppMeasurement", [targetAppPackageName, targetAppAdvertiserId, targetAdvertiserOfferId, targetAdvertiserPublisherId, shouldRedirect]);
    return this;
};

/**
 * IOS Only.
 */
TunePlugin.prototype.setRedirectUrl = function(redirectUrl) {
    console.log("TunePlugin.js: Calling setRedirectUrl");
    exec(null, null, "TunePlugin", "setRedirectUrl", [redirectUrl]);
    return this;
};

/**
 * @function measureSession
 * @summary To be called when an app opens.
 * TODO: Handle Android activity lifecycle on init
 */
TunePlugin.prototype.measureSession = function() {
    console.log("TunePlugin.js: calling measureSession");
    exec(null, null, "TunePlugin", "measureSession", []);
    return this;
};

/**
 * @function measureEvent
 * @summary Record an event with a TuneEvent.
 * @param {object} tuneEvent the TuneEvent.  Can be a number, string, or JSON object.
 */
TunePlugin.prototype.measureEvent = function(tuneEvent) {
    if (typeof tuneEvent == 'string') {
        console.log("TunePlugin.js: Calling measureEventName");
        exec(null, null, "TunePlugin", "measureEventName", [tuneEvent]);
    } else if (typeof tuneEvent == 'object') {
        console.log("TunePlugin.js: Calling measureEvent");
        exec(null, null, "TunePlugin", "measureEvent", [tuneEvent]);
    }
    return this;
};

/*****************************************************************************/
/**                                   IAM                                   **/
/*****************************************************************************/

/**
 * @function registerPowerHook
 * @summary Registers a Power Hook for use with TUNE.
 * @description Use this method to declare the existence of a Power Hook you would like to pass in from TUNE.
 *
 * @param {string} hookId The name of the configuration setting to register. Name must be unique for this app and cannot be empty.
 * @param {string} friendlyName The name for this hook that will be displayed in TMC. This value cannot be empty.
 * @param {string} defaultValue The default value for this hook.  This value will be used if no value is passed in from TMC for this app. This value cannot be nil.
 */
TunePlugin.prototype.registerPowerHook = function(hookId, friendlyName, defaultValue) {
    console.log("TunePlugin.js: Calling registerPowerHook");
    exec(null, null, "TunePlugin", "registerPowerHook", [hookId, friendlyName, defaultValue]);
    return this;
};

/**
 * @function getValueForHookById
 * @summary Gets the value of a Power Hook.
 * @description Use this method to get the value of a Power Hook from TUNE.  This will return the value specified in IAM web console, or the default value if none has been specified.
 * NOTE: If no hook was registered for the given ID, this method will return null.
 *
 * @param {string} hookId The name of the Power Hook you wish to retrieve. Will return nil if the Power Hook has not been registered.
 * @param {callback} success Callback returns the value of the Power Hook
 * @param {callback} failure Callback Message if there was an error.
 */
TunePlugin.prototype.getValueForHookById = function(hookId, success, failure) {
    console.log("TunePlugin.js: Calling getValueForHookById");
    exec(success, failure, "TunePlugin", "getValueForHookById", [hookId]);
}

/**
 * @function registerCustomProfileString
 * @summary Register a custom profile variable for this user.
 * @description This custom variable will be included in this user's personalization profile, and can be used for segmentation, targeting, and reporting purposes.
 * Once registered, the value for this variable can be set using setCustomProfileStringValue(String, String)}. The default value is nil.
 *
 * @param {string} variableName Name of the variable to register for the current user. Valid characters for this name include [0-9],[a-z],[A-Z], -, and _. Any other characters will automatically be stripped out.
 * @param {string} defaultValue (Optional) Initial value for the variable.
 */
TunePlugin.prototype.registerCustomProfileString = function(variableName, defaultValue) {
    console.log("TunePlugin.js: Calling registerCustomProfileString");
    exec(null, null, "TunePlugin", "registerCustomProfileString", [variableName, defaultValue]);
    return this;
};

/**
 * @function setCustomProfileString
 * @summary Set or update the value associated with a custom string profile variable.
 * @description This new value will be used as part of this user's personalization profile, and will be used from this point forward for segmentation, targeting, and reporting purposes.
 * This can be called from anywhere in your app after the appropriate register call.
 *
 * @param {string} variableName Variable to which this value should be assigned.
 * @param {string} value Value to use for the given variable.
 */
TunePlugin.prototype.setCustomProfileString = function(variableName, value) {
    console.log("TunePlugin.js: Calling setCustomProfileString");
    exec(null, null, "TunePlugin", "setCustomProfileString", [variableName, value]);
    return this;
};

/**
 * @function getCustomProfileString
 * @summary Get the value associated with a custom string profile variable.
 * @description Return the value stored for the custom profile variable. Must be called after the appropriate register call.
 * This will return a null value if the variable was registered without a default and has never been set, or if has been explicitly set as null.
 *
 * @param {string} variableName Name of the custom profile variable.
 * @param {callback} success Result Value stored for the variable. The value may be null.
 * @param {callback} failure Callback Message if there was an error.
 */
TunePlugin.prototype.getCustomProfileString = function(variableName, success, failure) {
    console.log("TunePlugin.js: Calling getCustomProfileString");
    exec(success, failure, "TunePlugin", "getCustomProfileString", [variableName]);
};

/**
 * @function registerCustomProfileDate
 * @summary Register a custom profile variable for this user.
 * @description This custom variable will be included in this user's personalization profile, and can be used for segmentation, targeting, and reporting purposes.
 * Once registered, the value for this variable can be set using {@link Tune#setCustomProfileDate(String, Date)}. The default value is nil.
 *
 * @param {string} variableName Name of the variable to register for the current user. Valid characters for this name include [0-9],[a-z],[A-Z], -, and _. Any other characters will automatically be stripped out.
 * @param {string} defaultValue (Optional) Initial value for the variable.
 */
TunePlugin.prototype.registerCustomProfileDate = function(variableName, defaultValue) {
    console.log("TunePlugin.js: Calling registerCustomProfileDate");
    exec(null, null, "TunePlugin", "registerCustomProfileDate", [variableName, defaultValue]);
    return this;
};

/**
 * @function setCustomProfileDate
 * @summary Set or update the value associated with a custom date profile variable.
 * @description This new value will be used as part of this user's personalization profile, and will be used from this point forward for segmentation, targeting, and reporting purposes.
 * This can be called from anywhere in your app after the appropriate register call.
 *
 * @param {string} variableName Variable to which this value should be assigned.
 * @param {number} value Value to use for the given variable, represented as the specified number of milliseconds since the standard base time known as "the epoch"
 */
TunePlugin.prototype.setCustomProfileDate = function(variableName, value) {
    console.log("TunePlugin.js: Calling setCustomProfileDate");
    exec(null, null, "TunePlugin", "setCustomProfileDate", [variableName, value]);
    return this;
};

/**
 * @function getCustomProfileDate
 * @summary Get the value associated with a custom date profile variable.
 * @summary Return the value stored for the custom profile variable. Must be called after the appropriate register call.
 * This will return a null value if the variable was registered without a default and has never been set, or if has been explicitly set as null.
 *
 * @param {string} variableName Name of the custom profile variable.
 * @param {callback} success Result Value stored for the variable, represented as the specified number of milliseconds since the standard base time known as "the epoch". The value may be null.
 * @param {callback} failure Callback Message if there was an error.
 */
TunePlugin.prototype.getCustomProfileDate = function(variableName, success, failure) {
    console.log("TunePlugin.js: Calling getCustomProfileDate");
    exec(function(result)
        {
            // Convert a String to a Number (Milliseconds)
            success(result == null ? null : Number(result));
        },
        failure, "TunePlugin", "getCustomProfileDate", [variableName]);
};

/**
 * @function registerCustomProfileNumber
 * @summary Register a custom profile variable for this user.
 * @description This custom variable will be included in this user's personalization profile, and can be used for segmentation, targeting, and reporting purposes.
 * Once registered, the value for this variable can be set using setCustomProfileNumber(String, double), setCustomProfileNumber(String, float), or setCustomProfileNumber(String, int).
 * You may use these setters interchangeably. The default value is nil.
 *
 * @param {number} variableName Name of the variable to register for the current user. Valid characters for this name include [0-9],[a-z],[A-Z], -, and _. Any other characters will automatically be stripped out.
 * @param {number} defaultValue (Optional) Initial value for the variable.
 */
TunePlugin.prototype.registerCustomProfileNumber = function(variableName, defaultValue) {
    console.log("TunePlugin.js: Calling registerCustomProfileNumber");
    exec(null, null, "TunePlugin", "registerCustomProfileNumber", [variableName, defaultValue]);
    return this;
};

/**
 * @function setCustomProfileNumber
 * @summary Set or update the value associated with a custom number profile variable.
 * @description This new value will be used as part of this user's personalization profile, and will be used from this point forward for segmentation, targeting, and reporting purposes.
 *
 * @param {string} variableName Variable to which this value should be assigned.
 * @param {number} value Value to use for the given variable.
 */
TunePlugin.prototype.setCustomProfileNumber = function(variableName, value) {
    console.log("TunePlugin.js: Calling setCustomProfileNumber");
    exec(null, null, "TunePlugin", "setCustomProfileNumber", [variableName, value]);
    return this;
};

/**
 * @function getCustomProfileNumber
 * @summary Get the value associated with a custom number profile variable.
 * @description Return the value stored for the custom profile variable. Must be called after the appropriate register call.
 * This will return a null value if the variable was registered without a default and has never been set, or if has been explicitly set as null.
 *
 * @param {string} variableName Name of the custom profile variable.
 * @param {callback} success Result Value stored for the variable. The value may be null.
 * @param {callback} failure Callback Message if there was an error.
 */
TunePlugin.prototype.getCustomProfileNumber = function(variableName, success, failure) {
    console.log("TunePlugin.js: Calling getCustomProfileNumber");
    exec(function(result)
        {
            // Convert a String to a Number
            success(result == null ? null : Number(result));
        },
        failure, "TunePlugin", "getCustomProfileNumber", [variableName]);
};

/**
 * @function registerCustomProfileGeolocation
 * @summary Register a custom profile variable for this user.
 * @description This custom variable will be included in this user's personalization profile, and can be used for segmentation, targeting, and reporting purposes.
 * Once registered, the value for this variable can be set using {@link Tune#setCustomProfileGeolocation(String, TuneLocation)}. The default value is nil.
 *
 * @param {string} variableName Name of the variable to register for the current user. Valid characters for this name include [0-9],[a-z],[A-Z], -, and _. Any other characters will automatically be stripped out.
 */
TunePlugin.prototype.registerCustomProfileGeolocation = function(variableName) {
    console.log("TunePlugin.js: Calling registerCustomProfileGeolocation");
    exec(null, null, "TunePlugin", "registerCustomProfileGeolocation", [variableName]);
    return this;
};

/**
 * @function setCustomProfileGeolocation
 * @summary Set or update the value associated with a custom location profile variable.
 * @description This new value will be used as part of this user's personalization profile, and will be used from this point forward for segmentation, targeting, and reporting purposes.
 *
 * @param {string} variableName Variable to which this value should be assigned.
 * @param {number} latitude Latitude to use for the given variable.
 * @param {number} longitude Longitude to use for the given variable.
 * @param {number} altitude Altitude to use for the given variable.
 */
TunePlugin.prototype.setCustomProfileGeolocation = function(variableName, latitude, longitude, altitude) {
    console.log("TunePlugin.js: Calling setCustomProfileGeolocation");
    exec(null, null, "TunePlugin", "setCustomProfileGeolocation", [variableName, latitude, longitude, altitude]);
    return this;
};

/**
 * @function getCustomProfileGeolocation
 * @summary Get the value associated with a custom location profile variable.
 * @description Return the value stored for the custom profile variable. Must be called after the appropriate register call.
 * This will return a null value if the variable was registered without a default and has never been set, or if has been explicitly set as null.
 * @example Result: { "MyCustomLocation" : { "latitude" : 47.612278, "longitude" : -122.345858, "altitude" : 88 }}
 * @example Result: { "MyCustomLocation" : null }
 *
 * @param {string} variableName Name of the custom profile variable.
 * @param {callback} success Result Value stored for the variable. The value may be null.
 * @param {callback} failure Callback Message if there was an error.
 */
TunePlugin.prototype.getCustomProfileGeolocation = function(variableName, success, failure) {
    console.log("TunePlugin.js: Calling getCustomProfileGeolocation");
    exec(success, failure, "TunePlugin", "getCustomProfileGeolocation", [variableName]);
};

/**
 * @function clearCustomProfileVariable
 * @summary Unset the value for a user profile variable.
 * @description Use this method to clear out the value for any custom user profile variable.
 * This must be called after the associated register call.
 * NOTE: This will not stop the variable from being registered again.
 *
 * @param {string} variableName Name of the custom profile variable to clear.
 */
TunePlugin.prototype.clearCustomProfileVariable = function(variableName) {
    console.log("TunePlugin.js: Calling clearCustomProfileVariable");
    exec(null, null, "TunePlugin", "clearCustomProfileVariable", [variableName]);
    return this;
};

/**
 * @function clearAllCustomProfileVariables
 * @summary Clear out all previously specified profile information.
 * @description Use this method to clear out all custom profile variables.
 * This will only clear out all profile variables that have been registered before this call.
 * NOTE: This will not stop the variables from being registered again.
 */
TunePlugin.prototype.clearAllCustomProfileVariables = function() {
    console.log("TunePlugin.js: Calling clearAllCustomProfileVariables");
    exec(null, null, "TunePlugin", "clearAllCustomProfileVariables", []);
    return this;
};

/**
 * @function registerCustomTuneLinkDomain
 * @summary If you have set up a custom domain for use with Tune Links (cname to a *.tlnk.io domain), then register it with this method.
 * @description Tune Links are Tune-hosted App Links. Tune Links are often shared as short-urls, and the Tune SDK will handle expanding the url and returning the in-app destination url to didReceiveDeeplink(String) registered via registerDeeplinkListener(TuneDeeplinkListener)
 * This method will test if any clicked links match the given suffix. Do not include a * for wildcard subdomains, instead pass the suffix that you would like to match against the url.
 * You can register as many custom subdomains as you like.
 * @example ".customize.it" will match "1235.customize.it" and "56789.customize.it" but not "customize.it"
 * @example "customize.it" will match "1235.customize.it" and "56789.customize.it", "customize.it", and "1235.tocustomize.it"
 *
 * @param {string} domainSuffix domain which you are using for Tune Links. Must not be null.
 */
TunePlugin.prototype.registerCustomTuneLinkDomain = function(domainSuffix) {
    console.log("TunePlugin.js: Calling registerCustomTuneLinkDomain");
    exec(null, null, "TunePlugin", "registerCustomTuneLinkDomain", [domainSuffix]);
    return this;
};

/**
 * @function enablePushNotifications
 * @summary Enable Tune Push Notifications
 * @description By using this method you are implicitly enabling Tune Push Messaging.
 * Android: senderId is the GCM project id.
 * iOS: senderId is optional, and is ignored.
 * IMPORTANT: On Android, if you use this method you should not use setPushNotificationRegistrationId(registrationId).
 * @param {string} senderId Your GCM/FCM project id.
 */
TunePlugin.prototype.enablePushNotifications = function(senderId) {
    console.log("TunePlugin.js: Calling enablePushNotifications");
    exec(null, null, "TunePlugin", "enablePushNotifications", [senderId]);
    return this;
};

/**
 * @function setPushNotificationRegistrationId
 * @summary Enable Tune Push Notifications with your own device registration id
 * @description By using this method you are implicitly enabling Tune Push Messaging.
 * Android: registrationId is the GCM registration id for this device.
 * iOS: no-op, please use enablePushNotifications instead.
 * IMPORTANT: On Android, if you use this method you should not use enablePushNotifications(senderId).
 * @param {string} registrationId The device token you have collected.
 */
TunePlugin.prototype.setPushNotificationRegistrationId = function(senderId) {
    console.log("TunePlugin.js: Calling setPushNotificationRegistrationId");
    exec(null, null, "TunePlugin", "setPushNotificationRegistrationId", [senderId]);
    return this;
}

/**
 * @function isTuneLink
 * @summary Test if your custom Tune Link domain is registered with Tune.
 * @description Tune Links are Tune-hosted App Links. Tune Links are often shared as short-urls, and the Tune SDK will handle expanding the url and returning the in-app destination url to didReceiveDeeplink registered via registerDeeplinkListener.
 *
 * @param {string} appLinkUrl url to test if it is a Tune Link. Must not be null.
 * @param {callback} success Callback returns true if this link is a Tune Link that will be measured by Tune and routed into the TuneDeeplinkListener.  false if not.
 * @param {callback} failure Callback Message if there was an error.
 */
TunePlugin.prototype.isTuneLink = function(appLinkUrl, success, failure) {
    console.log("TunePlugin.js: Calling isTuneLink");
    exec(success, failure, "TunePlugin", "isTuneLink", [appLinkUrl]);
};

/*****************************************************************************/
/**                               SMARTWHERE                                **/
/*****************************************************************************/

/**
 * @function enableSmartwhere
 * @summary Opt-In Smartwhere Integration with the Tune Marketing Console.
 * @param {callback} success Callback Status Message if Smartwhere is enabled.
 * @param {callback} failure Callback Status Message if Smartwhere is not available.
 */
TunePlugin.prototype.enableSmartwhere = function(success, failure) {
    console.log("TunePlugin.js: Calling enableSmartwhere");
    exec(success, failure, "TunePlugin", "enableSmartwhere", []);
};

/**
 * @function disableSmartwhere
 * @summary Disable Smartwhere Integration.
 * @param {callback} success Callback Status Message if Smartwhere is disabled.
 * @param {callback} failure Callback Status Message if Smartwhere is not available.
 */
TunePlugin.prototype.disableSmartwhere = function(success, failure) {
    console.log("TunePlugin.js: Calling disableSmartwhere");
    exec(success, failure, "TunePlugin", "disableSmartwhere", []);
};

/**
 * @function configureSmartwhere
 * @summary Configure Smartwhere using a configuration.
 * @param {object} JSON configuration
 * @param {callback} success Callback Status Message if Smartwhere was successfully configured.
 * @param {callback} failure Callback Status Message if Smartwhere is not available.
 * @example Example JSON: { "ShareEventData": true }
 */
TunePlugin.prototype.configureSmartwhere = function(jsonConfig, success, failure) {
    console.log("TunePlugin.js: Calling configureSmartwhere");
    exec(success, failure, "TunePlugin", "configureSmartwhere", [jsonConfig]);
};

/**
 * Public Module
 */
module.exports = new TunePlugin();
