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
 * @interface SubscriptionResponseModel
 */
export interface SubscriptionResponseModel {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResponseModel
     */
    'tier': string;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionResponseModel
     */
    'character_count': number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionResponseModel
     */
    'character_limit': number;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionResponseModel
     */
    'can_extend_character_limit': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionResponseModel
     */
    'allowed_to_extend_character_limit': boolean;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionResponseModel
     */
    'next_character_count_reset_unix': number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionResponseModel
     */
    'voice_limit': number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionResponseModel
     */
    'max_voice_add_edits': number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionResponseModel
     */
    'voice_add_edit_counter': number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionResponseModel
     */
    'professional_voice_limit': number;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionResponseModel
     */
    'can_extend_voice_limit': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionResponseModel
     */
    'can_use_instant_voice_cloning': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionResponseModel
     */
    'can_use_professional_voice_cloning': boolean;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResponseModel
     */
    'currency': SubscriptionResponseModelCurrencyEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResponseModel
     */
    'status': SubscriptionResponseModelStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResponseModel
     */
    'billing_period': SubscriptionResponseModelBillingPeriodEnum;
}

type SubscriptionResponseModelCurrencyEnum = 'usd' | 'eur'
type SubscriptionResponseModelStatusEnum = 'trialing' | 'active' | 'incomplete' | 'incomplete_expired' | 'past_due' | 'canceled' | 'unpaid' | 'free'
type SubscriptionResponseModelBillingPeriodEnum = 'monthly_period' | 'annual_period'


