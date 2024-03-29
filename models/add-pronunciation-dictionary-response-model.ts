/*
ElevenLabs API Documentation

This is the documentation for the ElevenLabs API. You can use this API to use our service programmatically, this is done by using your xi-api-key. <br/> You can view your xi-api-key using the 'Profile' tab on https://elevenlabs.io. Our API is experimental so all endpoints are subject to change.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface AddPronunciationDictionaryResponseModel
 */
export interface AddPronunciationDictionaryResponseModel {
    /**
     * 
     * @type {string}
     * @memberof AddPronunciationDictionaryResponseModel
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof AddPronunciationDictionaryResponseModel
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof AddPronunciationDictionaryResponseModel
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof AddPronunciationDictionaryResponseModel
     */
    'created_by': string;
    /**
     * 
     * @type {number}
     * @memberof AddPronunciationDictionaryResponseModel
     */
    'creation_time_unix': number;
    /**
     * 
     * @type {string}
     * @memberof AddPronunciationDictionaryResponseModel
     */
    'version_id': string;
}

