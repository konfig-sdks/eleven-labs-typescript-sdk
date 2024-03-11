/*
ElevenLabs API Documentation

This is the documentation for the ElevenLabs API. You can use this API to use our service programmatically, this is done by using your xi-api-key. <br/> You can view your xi-api-key using the 'Profile' tab on https://elevenlabs.io. Our API is experimental so all endpoints are subject to change.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LanguageResponseModel } from './language-response-model';

/**
 * 
 * @export
 * @interface ModelResponseModel
 */
export interface ModelResponseModel {
    /**
     * 
     * @type {string}
     * @memberof ModelResponseModel
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof ModelResponseModel
     */
    'model_id': string;
    /**
     * 
     * @type {string}
     * @memberof ModelResponseModel
     */
    'name': string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelResponseModel
     */
    'can_be_finetuned': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ModelResponseModel
     */
    'can_do_text_to_speech': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ModelResponseModel
     */
    'can_do_voice_conversion': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ModelResponseModel
     */
    'can_use_style': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ModelResponseModel
     */
    'can_use_speaker_boost': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ModelResponseModel
     */
    'serves_pro_voices': boolean;
    /**
     * 
     * @type {number}
     * @memberof ModelResponseModel
     */
    'token_cost_factor': number;
    /**
     * 
     * @type {boolean}
     * @memberof ModelResponseModel
     */
    'requires_alpha_access': boolean;
    /**
     * 
     * @type {number}
     * @memberof ModelResponseModel
     */
    'max_characters_request_free_user': number;
    /**
     * 
     * @type {number}
     * @memberof ModelResponseModel
     */
    'max_characters_request_subscribed_user': number;
    /**
     * 
     * @type {Array<LanguageResponseModel>}
     * @memberof ModelResponseModel
     */
    'languages': Array<LanguageResponseModel>;
}
