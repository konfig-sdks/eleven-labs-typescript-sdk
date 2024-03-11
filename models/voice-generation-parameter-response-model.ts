/*
ElevenLabs API Documentation

This is the documentation for the ElevenLabs API. You can use this API to use our service programmatically, this is done by using your xi-api-key. <br/> You can view your xi-api-key using the 'Profile' tab on https://elevenlabs.io. Our API is experimental so all endpoints are subject to change.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VoiceGenerationParameterOptionResponseModel } from './voice-generation-parameter-option-response-model';

/**
 * 
 * @export
 * @interface VoiceGenerationParameterResponseModel
 */
export interface VoiceGenerationParameterResponseModel {
    /**
     * 
     * @type {Array<VoiceGenerationParameterOptionResponseModel>}
     * @memberof VoiceGenerationParameterResponseModel
     */
    'genders': Array<VoiceGenerationParameterOptionResponseModel>;
    /**
     * 
     * @type {Array<VoiceGenerationParameterOptionResponseModel>}
     * @memberof VoiceGenerationParameterResponseModel
     */
    'accents': Array<VoiceGenerationParameterOptionResponseModel>;
    /**
     * 
     * @type {Array<VoiceGenerationParameterOptionResponseModel>}
     * @memberof VoiceGenerationParameterResponseModel
     */
    'ages': Array<VoiceGenerationParameterOptionResponseModel>;
    /**
     * 
     * @type {number}
     * @memberof VoiceGenerationParameterResponseModel
     */
    'minimum_characters': number;
    /**
     * 
     * @type {number}
     * @memberof VoiceGenerationParameterResponseModel
     */
    'maximum_characters': number;
    /**
     * 
     * @type {number}
     * @memberof VoiceGenerationParameterResponseModel
     */
    'minimum_accent_strength': number;
    /**
     * 
     * @type {number}
     * @memberof VoiceGenerationParameterResponseModel
     */
    'maximum_accent_strength': number;
}

