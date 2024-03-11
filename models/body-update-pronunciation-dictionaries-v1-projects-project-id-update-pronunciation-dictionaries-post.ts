/*
ElevenLabs API Documentation

This is the documentation for the ElevenLabs API. You can use this API to use our service programmatically, this is done by using your xi-api-key. <br/> You can view your xi-api-key using the 'Profile' tab on https://elevenlabs.io. Our API is experimental so all endpoints are subject to change.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PronunciationDictionaryVersionLocatorDBModel } from './pronunciation-dictionary-version-locator-dbmodel';

/**
 * 
 * @export
 * @interface BodyUpdatePronunciationDictionariesV1ProjectsProjectIdUpdatePronunciationDictionariesPost
 */
export interface BodyUpdatePronunciationDictionariesV1ProjectsProjectIdUpdatePronunciationDictionariesPost {
    /**
     * A list of pronunciation dictionary locators (id, version_id) encoded as a list of JSON strings for pronunciation dictionaries to be applied to the text.  A list of json encoded strings is required as adding projects may occur through formData as opposed to jsonBody
     * @type {Array<PronunciationDictionaryVersionLocatorDBModel>}
     * @memberof BodyUpdatePronunciationDictionariesV1ProjectsProjectIdUpdatePronunciationDictionariesPost
     */
    'pronunciation_dictionary_locators': Array<PronunciationDictionaryVersionLocatorDBModel>;
}
