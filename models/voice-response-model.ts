/*
ElevenLabs API Documentation

This is the documentation for the ElevenLabs API. You can use this API to use our service programmatically, this is done by using your xi-api-key. <br/> You can view your xi-api-key using the 'Profile' tab on https://elevenlabs.io. Our API is experimental so all endpoints are subject to change.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FineTuningResponseModel } from './fine-tuning-response-model';
import { SampleResponseModel } from './sample-response-model';
import { VoiceSettingsResponseModel } from './voice-settings-response-model';
import { VoiceSharingResponseModel } from './voice-sharing-response-model';
import { VoiceVerificationResponseModel } from './voice-verification-response-model';

/**
 * 
 * @export
 * @interface VoiceResponseModel
 */
export interface VoiceResponseModel {
    /**
     * 
     * @type {string}
     * @memberof VoiceResponseModel
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof VoiceResponseModel
     */
    'voice_id': string;
    /**
     * 
     * @type {string}
     * @memberof VoiceResponseModel
     */
    'name': string;
    /**
     * 
     * @type {Array<SampleResponseModel>}
     * @memberof VoiceResponseModel
     */
    'samples': Array<SampleResponseModel>;
    /**
     * 
     * @type {string}
     * @memberof VoiceResponseModel
     */
    'category': string;
    /**
     * 
     * @type {FineTuningResponseModel}
     * @memberof VoiceResponseModel
     */
    'fine_tuning': FineTuningResponseModel;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof VoiceResponseModel
     */
    'labels': { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof VoiceResponseModel
     */
    'preview_url': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof VoiceResponseModel
     */
    'available_for_tiers': Array<string>;
    /**
     * 
     * @type {VoiceSettingsResponseModel}
     * @memberof VoiceResponseModel
     */
    'settings': VoiceSettingsResponseModel;
    /**
     * 
     * @type {VoiceSharingResponseModel}
     * @memberof VoiceResponseModel
     */
    'sharing': VoiceSharingResponseModel;
    /**
     * 
     * @type {Array<string>}
     * @memberof VoiceResponseModel
     */
    'high_quality_base_model_ids': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof VoiceResponseModel
     */
    'safety_control'?: VoiceResponseModelSafetyControlEnum;
    /**
     * 
     * @type {VoiceVerificationResponseModel}
     * @memberof VoiceResponseModel
     */
    'voice_verification'?: VoiceVerificationResponseModel;
}

type VoiceResponseModelSafetyControlEnum = 'NONE' | 'BAN' | 'CAPTCHA' | 'CAPTCHA_AND_MODERATION'


