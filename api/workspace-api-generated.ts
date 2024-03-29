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
import { SsoProviderDBModel } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * WorkspaceApi - axios parameter creator
 * @export
 */
export const WorkspaceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Sso Provider Admin
         * @param {string} workspaceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSsoProviderAdmin: async (workspaceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'workspaceId' is not null or undefined
            assertParamExists('getSsoProviderAdmin', 'workspaceId', workspaceId)
            const localVarPath = `/admin/{admin_url_prefix}/sso-provider`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/admin/{admin_url_prefix}/sso-provider',
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
 * WorkspaceApi - functional programming interface
 * @export
 */
export const WorkspaceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WorkspaceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Sso Provider Admin
         * @param {WorkspaceApiGetSsoProviderAdminRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSsoProviderAdmin(requestParameters: WorkspaceApiGetSsoProviderAdminRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SsoProviderDBModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSsoProviderAdmin(requestParameters.workspaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WorkspaceApi - factory interface
 * @export
 */
export const WorkspaceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WorkspaceApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Sso Provider Admin
         * @param {WorkspaceApiGetSsoProviderAdminRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSsoProviderAdmin(requestParameters: WorkspaceApiGetSsoProviderAdminRequest, options?: AxiosRequestConfig): AxiosPromise<SsoProviderDBModel> {
            return localVarFp.getSsoProviderAdmin(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getSsoProviderAdmin operation in WorkspaceApi.
 * @export
 * @interface WorkspaceApiGetSsoProviderAdminRequest
 */
export type WorkspaceApiGetSsoProviderAdminRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof WorkspaceApiGetSsoProviderAdmin
    */
    readonly workspaceId: string
    
}

/**
 * WorkspaceApiGenerated - object-oriented interface
 * @export
 * @class WorkspaceApiGenerated
 * @extends {BaseAPI}
 */
export class WorkspaceApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Get Sso Provider Admin
     * @param {WorkspaceApiGetSsoProviderAdminRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkspaceApiGenerated
     */
    public getSsoProviderAdmin(requestParameters: WorkspaceApiGetSsoProviderAdminRequest, options?: AxiosRequestConfig) {
        return WorkspaceApiFp(this.configuration).getSsoProviderAdmin(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
