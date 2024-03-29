/* tslint:disable */
/* eslint-disable */
/*
ElevenLabs API Documentation

This is the documentation for the ElevenLabs API. You can use this API to use our service programmatically, this is done by using your xi-api-key. <br/> You can view your xi-api-key using the 'Profile' tab on https://elevenlabs.io. Our API is experimental so all endpoints are subject to change.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ExtendedSubscriptionResponseModel } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { UserResponseModel } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets information about the user
         * @summary Get User Info
         * @param {string} [xiApiKey] Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the \&#39;Profile\&#39; tab on the website.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfo: async (xiApiKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (xiApiKey != null) {
                localVarHeaderParameter['xi-api-key'] = String(xiApiKey);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/user',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets extended information about the users subscription
         * @summary Get User Subscription Info
         * @param {string} [xiApiKey] Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the \&#39;Profile\&#39; tab on the website.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubscriptionInfo: async (xiApiKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/user/subscription`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (xiApiKey != null) {
                localVarHeaderParameter['xi-api-key'] = String(xiApiKey);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/user/subscription',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets information about the user
         * @summary Get User Info
         * @param {UserApiGetInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInfo(requestParameters: UserApiGetInfoRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponseModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInfo(requestParameters.xiApiKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets extended information about the users subscription
         * @summary Get User Subscription Info
         * @param {UserApiGetSubscriptionInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSubscriptionInfo(requestParameters: UserApiGetSubscriptionInfoRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExtendedSubscriptionResponseModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSubscriptionInfo(requestParameters.xiApiKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * Gets information about the user
         * @summary Get User Info
         * @param {UserApiGetInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfo(requestParameters: UserApiGetInfoRequest = {}, options?: AxiosRequestConfig): AxiosPromise<UserResponseModel> {
            return localVarFp.getInfo(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets extended information about the users subscription
         * @summary Get User Subscription Info
         * @param {UserApiGetSubscriptionInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubscriptionInfo(requestParameters: UserApiGetSubscriptionInfoRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ExtendedSubscriptionResponseModel> {
            return localVarFp.getSubscriptionInfo(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getInfo operation in UserApi.
 * @export
 * @interface UserApiGetInfoRequest
 */
export type UserApiGetInfoRequest = {
    
    /**
    * Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the \'Profile\' tab on the website.
    * @type {string}
    * @memberof UserApiGetInfo
    */
    readonly xiApiKey?: string
    
}

/**
 * Request parameters for getSubscriptionInfo operation in UserApi.
 * @export
 * @interface UserApiGetSubscriptionInfoRequest
 */
export type UserApiGetSubscriptionInfoRequest = {
    
    /**
    * Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the \'Profile\' tab on the website.
    * @type {string}
    * @memberof UserApiGetSubscriptionInfo
    */
    readonly xiApiKey?: string
    
}

/**
 * UserApiGenerated - object-oriented interface
 * @export
 * @class UserApiGenerated
 * @extends {BaseAPI}
 */
export class UserApiGenerated extends BaseAPI {
    /**
     * Gets information about the user
     * @summary Get User Info
     * @param {UserApiGetInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiGenerated
     */
    public getInfo(requestParameters: UserApiGetInfoRequest = {}, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getInfo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets extended information about the users subscription
     * @summary Get User Subscription Info
     * @param {UserApiGetSubscriptionInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiGenerated
     */
    public getSubscriptionInfo(requestParameters: UserApiGetSubscriptionInfoRequest = {}, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getSubscriptionInfo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
