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
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * RedirectApi - axios parameter creator
 * @export
 */
export const RedirectApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Redirect To Mintlify
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        toMintlifyDocsGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/docs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/docs',
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
 * RedirectApi - functional programming interface
 * @export
 */
export const RedirectApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RedirectApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Redirect To Mintlify
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async toMintlifyDocsGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.toMintlifyDocsGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RedirectApi - factory interface
 * @export
 */
export const RedirectApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RedirectApiFp(configuration)
    return {
        /**
         * 
         * @summary Redirect To Mintlify
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        toMintlifyDocsGet(options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.toMintlifyDocsGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RedirectApiGenerated - object-oriented interface
 * @export
 * @class RedirectApiGenerated
 * @extends {BaseAPI}
 */
export class RedirectApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Redirect To Mintlify
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedirectApiGenerated
     */
    public toMintlifyDocsGet(options?: AxiosRequestConfig) {
        return RedirectApiFp(this.configuration).toMintlifyDocsGet(options).then((request) => request(this.axios, this.basePath));
    }
}
