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
 * @interface DubbingMetadataResponse
 */
export interface DubbingMetadataResponse {
    /**
     * 
     * @type {string}
     * @memberof DubbingMetadataResponse
     */
    'dubbing_id': string;
    /**
     * 
     * @type {string}
     * @memberof DubbingMetadataResponse
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof DubbingMetadataResponse
     */
    'status': string;
    /**
     * 
     * @type {string}
     * @memberof DubbingMetadataResponse
     */
    'error': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DubbingMetadataResponse
     */
    'target_languages': Array<string>;
}

