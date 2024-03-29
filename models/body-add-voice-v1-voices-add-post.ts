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
 * @interface BodyAddVoiceV1VoicesAddPost
 */
export interface BodyAddVoiceV1VoicesAddPost {
    /**
     * How would you describe the voice?
     * @type {string}
     * @memberof BodyAddVoiceV1VoicesAddPost
     */
    'description'?: string;
    /**
     * The name that identifies this voice. This will be displayed in the dropdown of the website.
     * @type {string}
     * @memberof BodyAddVoiceV1VoicesAddPost
     */
    'name': string;
    /**
     * One or more audio files to clone the voice from
     * @type {Array<Uint8Array | File | buffer.File>}
     * @memberof BodyAddVoiceV1VoicesAddPost
     */
    'files': Array<Uint8Array | File | buffer.File>;
    /**
     * Serialized labels dictionary for the voice.
     * @type {string}
     * @memberof BodyAddVoiceV1VoicesAddPost
     */
    'labels'?: string;
}

