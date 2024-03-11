/*
ElevenLabs API Documentation

This is the documentation for the ElevenLabs API. You can use this API to use our service programmatically, this is done by using your xi-api-key. <br/> You can view your xi-api-key using the 'Profile' tab on https://elevenlabs.io. Our API is experimental so all endpoints are subject to change.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SubscriptionResponseModel } from './subscription-response-model';

/**
 * 
 * @export
 * @interface UserResponseModel
 */
export interface UserResponseModel {
    /**
     * 
     * @type {SubscriptionResponseModel}
     * @memberof UserResponseModel
     */
    'subscription': SubscriptionResponseModel;
    /**
     * 
     * @type {boolean}
     * @memberof UserResponseModel
     */
    'is_new_user': boolean;
    /**
     * 
     * @type {string}
     * @memberof UserResponseModel
     */
    'xi_api_key': string;
    /**
     * 
     * @type {boolean}
     * @memberof UserResponseModel
     */
    'can_use_delayed_payment_methods': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserResponseModel
     */
    'is_onboarding_completed': boolean;
    /**
     * 
     * @type {string}
     * @memberof UserResponseModel
     */
    'first_name'?: string;
}
