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
import { HTTPValidationError } from '../models';
// @ts-ignore
import { ModelResponseModel } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ModelsApi - axios parameter creator
 * @export
 */
export const ModelsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets a list of available models.
         * @summary Get Models
         * @param {string} [xiApiKey] Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the \&#39;Profile\&#39; tab on the website.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAvailableModels: async (xiApiKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/models`;
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
                pathTemplate: '/v1/models',
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
 * ModelsApi - functional programming interface
 * @export
 */
export const ModelsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ModelsApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets a list of available models.
         * @summary Get Models
         * @param {ModelsApiListAvailableModelsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAvailableModels(requestParameters: ModelsApiListAvailableModelsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelResponseModel>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAvailableModels(requestParameters.xiApiKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ModelsApi - factory interface
 * @export
 */
export const ModelsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ModelsApiFp(configuration)
    return {
        /**
         * Gets a list of available models.
         * @summary Get Models
         * @param {ModelsApiListAvailableModelsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAvailableModels(requestParameters: ModelsApiListAvailableModelsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<ModelResponseModel>> {
            return localVarFp.listAvailableModels(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for listAvailableModels operation in ModelsApi.
 * @export
 * @interface ModelsApiListAvailableModelsRequest
 */
export type ModelsApiListAvailableModelsRequest = {
    
    /**
    * Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the \'Profile\' tab on the website.
    * @type {string}
    * @memberof ModelsApiListAvailableModels
    */
    readonly xiApiKey?: string
    
}

/**
 * ModelsApiGenerated - object-oriented interface
 * @export
 * @class ModelsApiGenerated
 * @extends {BaseAPI}
 */
export class ModelsApiGenerated extends BaseAPI {
    /**
     * Gets a list of available models.
     * @summary Get Models
     * @param {ModelsApiListAvailableModelsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelsApiGenerated
     */
    public listAvailableModels(requestParameters: ModelsApiListAvailableModelsRequest = {}, options?: AxiosRequestConfig) {
        return ModelsApiFp(this.configuration).listAvailableModels(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}