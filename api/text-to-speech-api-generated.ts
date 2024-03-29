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
import { BodyTextToSpeechV1TextToSpeechVoiceIdPost } from '../models';
// @ts-ignore
import { BodyTextToSpeechV1TextToSpeechVoiceIdStreamPost } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { PronunciationDictionaryVersionLocatorDBModel } from '../models';
// @ts-ignore
import { VoiceSettingsResponseModel } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TextToSpeechApi - axios parameter creator
 * @export
 */
export const TextToSpeechApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Converts text into speech using a voice of your choice and returns audio.
         * @summary Text To Speech
         * @param {string} voiceId Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
         * @param {BodyTextToSpeechV1TextToSpeechVoiceIdPost} bodyTextToSpeechV1TextToSpeechVoiceIdPost 
         * @param {number} [optimizeStreamingLatency] You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model. Possible values: 0 - default mode (no latency optimizations) 1 - normal latency optimizations (about 50% of possible latency improvement of option 3) 2 - strong latency optimizations (about 75% of possible latency improvement of option 3) 3 - max latency optimizations 4 - max latency optimizations, but also with text normalizer turned off for even more latency savings (best latency, but can mispronounce eg numbers and dates).  Defaults to 0. 
         * @param {string} [outputFormat] Output format of the generated audio. Must be one of: mp3_22050_32 - output format, mp3 with 22.05kHz sample rate at 32kbps. mp3_44100_32 - output format, mp3 with 44.1kHz sample rate at 32kbps. mp3_44100_64 - output format, mp3 with 44.1kHz sample rate at 64kbps. mp3_44100_96 - output format, mp3 with 44.1kHz sample rate at 96kbps. mp3_44100_128 - default output format, mp3 with 44.1kHz sample rate at 128kbps. mp3_44100_192 - output format, mp3 with 44.1kHz sample rate at 192kbps. Requires you to be subscribed to Creator tier or above. pcm_16000 - PCM format (S16LE) with 16kHz sample rate. pcm_22050 - PCM format (S16LE) with 22.05kHz sample rate. pcm_24000 - PCM format (S16LE) with 24kHz sample rate. pcm_44100 - PCM format (S16LE) with 44.1kHz sample rate. Requires you to be subscribed to Pro tier or above. ulaw_8000 - μ-law format (sometimes written mu-law, often approximated as u-law) with 8kHz sample rate. Note that this format is commonly used for Twilio audio inputs. 
         * @param {string} [xiApiKey] Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the \&#39;Profile\&#39; tab on the website.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        convertTextToSpeech: async (voiceId: string, bodyTextToSpeechV1TextToSpeechVoiceIdPost: BodyTextToSpeechV1TextToSpeechVoiceIdPost, optimizeStreamingLatency?: number, outputFormat?: string, xiApiKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'voiceId' is not null or undefined
            assertParamExists('convertTextToSpeech', 'voiceId', voiceId)
            // verify required parameter 'bodyTextToSpeechV1TextToSpeechVoiceIdPost' is not null or undefined
            assertParamExists('convertTextToSpeech', 'bodyTextToSpeechV1TextToSpeechVoiceIdPost', bodyTextToSpeechV1TextToSpeechVoiceIdPost)
            const localVarPath = `/v1/text-to-speech/{voice_id}`
                .replace(`{${"voice_id"}}`, encodeURIComponent(String(voiceId !== undefined ? voiceId : `-voice_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (optimizeStreamingLatency !== undefined) {
                localVarQueryParameter['optimize_streaming_latency'] = optimizeStreamingLatency;
            }

            if (outputFormat !== undefined) {
                localVarQueryParameter['output_format'] = outputFormat;
            }

            if (xiApiKey != null) {
                localVarHeaderParameter['xi-api-key'] = String(xiApiKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: bodyTextToSpeechV1TextToSpeechVoiceIdPost,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/text-to-speech/{voice_id}',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(bodyTextToSpeechV1TextToSpeechVoiceIdPost, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Converts text into speech using a voice of your choice and returns audio as an audio stream.
         * @summary Text To Speech
         * @param {string} voiceId Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
         * @param {BodyTextToSpeechV1TextToSpeechVoiceIdStreamPost} bodyTextToSpeechV1TextToSpeechVoiceIdStreamPost 
         * @param {number} [optimizeStreamingLatency] You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model. Possible values: 0 - default mode (no latency optimizations) 1 - normal latency optimizations (about 50% of possible latency improvement of option 3) 2 - strong latency optimizations (about 75% of possible latency improvement of option 3) 3 - max latency optimizations 4 - max latency optimizations, but also with text normalizer turned off for even more latency savings (best latency, but can mispronounce eg numbers and dates).  Defaults to 0. 
         * @param {string} [outputFormat] Output format of the generated audio. Must be one of: mp3_22050_32 - output format, mp3 with 22.05kHz sample rate at 32kbps. mp3_44100_32 - output format, mp3 with 44.1kHz sample rate at 32kbps. mp3_44100_64 - output format, mp3 with 44.1kHz sample rate at 64kbps. mp3_44100_96 - output format, mp3 with 44.1kHz sample rate at 96kbps. mp3_44100_128 - default output format, mp3 with 44.1kHz sample rate at 128kbps. mp3_44100_192 - output format, mp3 with 44.1kHz sample rate at 192kbps. Requires you to be subscribed to Creator tier or above. pcm_16000 - PCM format (S16LE) with 16kHz sample rate. pcm_22050 - PCM format (S16LE) with 22.05kHz sample rate. pcm_24000 - PCM format (S16LE) with 24kHz sample rate. pcm_44100 - PCM format (S16LE) with 44.1kHz sample rate. Requires you to be subscribed to Pro tier or above. ulaw_8000 - μ-law format (sometimes written mu-law, often approximated as u-law) with 8kHz sample rate. Note that this format is commonly used for Twilio audio inputs. 
         * @param {string} [xiApiKey] Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the \&#39;Profile\&#39; tab on the website.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        convertTextToSpeechStream: async (voiceId: string, bodyTextToSpeechV1TextToSpeechVoiceIdStreamPost: BodyTextToSpeechV1TextToSpeechVoiceIdStreamPost, optimizeStreamingLatency?: number, outputFormat?: string, xiApiKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'voiceId' is not null or undefined
            assertParamExists('convertTextToSpeechStream', 'voiceId', voiceId)
            // verify required parameter 'bodyTextToSpeechV1TextToSpeechVoiceIdStreamPost' is not null or undefined
            assertParamExists('convertTextToSpeechStream', 'bodyTextToSpeechV1TextToSpeechVoiceIdStreamPost', bodyTextToSpeechV1TextToSpeechVoiceIdStreamPost)
            const localVarPath = `/v1/text-to-speech/{voice_id}/stream`
                .replace(`{${"voice_id"}}`, encodeURIComponent(String(voiceId !== undefined ? voiceId : `-voice_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (optimizeStreamingLatency !== undefined) {
                localVarQueryParameter['optimize_streaming_latency'] = optimizeStreamingLatency;
            }

            if (outputFormat !== undefined) {
                localVarQueryParameter['output_format'] = outputFormat;
            }

            if (xiApiKey != null) {
                localVarHeaderParameter['xi-api-key'] = String(xiApiKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: bodyTextToSpeechV1TextToSpeechVoiceIdStreamPost,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/text-to-speech/{voice_id}/stream',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(bodyTextToSpeechV1TextToSpeechVoiceIdStreamPost, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TextToSpeechApi - functional programming interface
 * @export
 */
export const TextToSpeechApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TextToSpeechApiAxiosParamCreator(configuration)
    return {
        /**
         * Converts text into speech using a voice of your choice and returns audio.
         * @summary Text To Speech
         * @param {TextToSpeechApiConvertTextToSpeechRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async convertTextToSpeech(requestParameters: TextToSpeechApiConvertTextToSpeechRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const bodyTextToSpeechV1TextToSpeechVoiceIdPost: BodyTextToSpeechV1TextToSpeechVoiceIdPost = {
                text: requestParameters.text,
                model_id: requestParameters.model_id,
                voice_settings: requestParameters.voice_settings,
                pronunciation_dictionary_locators: requestParameters.pronunciation_dictionary_locators
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.convertTextToSpeech(requestParameters.voiceId, bodyTextToSpeechV1TextToSpeechVoiceIdPost, requestParameters.optimizeStreamingLatency, requestParameters.outputFormat, requestParameters.xiApiKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Converts text into speech using a voice of your choice and returns audio as an audio stream.
         * @summary Text To Speech
         * @param {TextToSpeechApiConvertTextToSpeechStreamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async convertTextToSpeechStream(requestParameters: TextToSpeechApiConvertTextToSpeechStreamRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const bodyTextToSpeechV1TextToSpeechVoiceIdStreamPost: BodyTextToSpeechV1TextToSpeechVoiceIdStreamPost = {
                text: requestParameters.text,
                model_id: requestParameters.model_id,
                voice_settings: requestParameters.voice_settings,
                pronunciation_dictionary_locators: requestParameters.pronunciation_dictionary_locators
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.convertTextToSpeechStream(requestParameters.voiceId, bodyTextToSpeechV1TextToSpeechVoiceIdStreamPost, requestParameters.optimizeStreamingLatency, requestParameters.outputFormat, requestParameters.xiApiKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TextToSpeechApi - factory interface
 * @export
 */
export const TextToSpeechApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TextToSpeechApiFp(configuration)
    return {
        /**
         * Converts text into speech using a voice of your choice and returns audio.
         * @summary Text To Speech
         * @param {TextToSpeechApiConvertTextToSpeechRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        convertTextToSpeech(requestParameters: TextToSpeechApiConvertTextToSpeechRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.convertTextToSpeech(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Converts text into speech using a voice of your choice and returns audio as an audio stream.
         * @summary Text To Speech
         * @param {TextToSpeechApiConvertTextToSpeechStreamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        convertTextToSpeechStream(requestParameters: TextToSpeechApiConvertTextToSpeechStreamRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.convertTextToSpeechStream(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for convertTextToSpeech operation in TextToSpeechApi.
 * @export
 * @interface TextToSpeechApiConvertTextToSpeechRequest
 */
export type TextToSpeechApiConvertTextToSpeechRequest = {
    
    /**
    * Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
    * @type {string}
    * @memberof TextToSpeechApiConvertTextToSpeech
    */
    readonly voiceId: string
    
    /**
    * You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model. Possible values: 0 - default mode (no latency optimizations) 1 - normal latency optimizations (about 50% of possible latency improvement of option 3) 2 - strong latency optimizations (about 75% of possible latency improvement of option 3) 3 - max latency optimizations 4 - max latency optimizations, but also with text normalizer turned off for even more latency savings (best latency, but can mispronounce eg numbers and dates).  Defaults to 0. 
    * @type {number}
    * @memberof TextToSpeechApiConvertTextToSpeech
    */
    readonly optimizeStreamingLatency?: number
    
    /**
    * Output format of the generated audio. Must be one of: mp3_22050_32 - output format, mp3 with 22.05kHz sample rate at 32kbps. mp3_44100_32 - output format, mp3 with 44.1kHz sample rate at 32kbps. mp3_44100_64 - output format, mp3 with 44.1kHz sample rate at 64kbps. mp3_44100_96 - output format, mp3 with 44.1kHz sample rate at 96kbps. mp3_44100_128 - default output format, mp3 with 44.1kHz sample rate at 128kbps. mp3_44100_192 - output format, mp3 with 44.1kHz sample rate at 192kbps. Requires you to be subscribed to Creator tier or above. pcm_16000 - PCM format (S16LE) with 16kHz sample rate. pcm_22050 - PCM format (S16LE) with 22.05kHz sample rate. pcm_24000 - PCM format (S16LE) with 24kHz sample rate. pcm_44100 - PCM format (S16LE) with 44.1kHz sample rate. Requires you to be subscribed to Pro tier or above. ulaw_8000 - μ-law format (sometimes written mu-law, often approximated as u-law) with 8kHz sample rate. Note that this format is commonly used for Twilio audio inputs. 
    * @type {string}
    * @memberof TextToSpeechApiConvertTextToSpeech
    */
    readonly outputFormat?: string
    
    /**
    * Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the \'Profile\' tab on the website.
    * @type {string}
    * @memberof TextToSpeechApiConvertTextToSpeech
    */
    readonly xiApiKey?: string
    
} & BodyTextToSpeechV1TextToSpeechVoiceIdPost

/**
 * Request parameters for convertTextToSpeechStream operation in TextToSpeechApi.
 * @export
 * @interface TextToSpeechApiConvertTextToSpeechStreamRequest
 */
export type TextToSpeechApiConvertTextToSpeechStreamRequest = {
    
    /**
    * Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
    * @type {string}
    * @memberof TextToSpeechApiConvertTextToSpeechStream
    */
    readonly voiceId: string
    
    /**
    * You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model. Possible values: 0 - default mode (no latency optimizations) 1 - normal latency optimizations (about 50% of possible latency improvement of option 3) 2 - strong latency optimizations (about 75% of possible latency improvement of option 3) 3 - max latency optimizations 4 - max latency optimizations, but also with text normalizer turned off for even more latency savings (best latency, but can mispronounce eg numbers and dates).  Defaults to 0. 
    * @type {number}
    * @memberof TextToSpeechApiConvertTextToSpeechStream
    */
    readonly optimizeStreamingLatency?: number
    
    /**
    * Output format of the generated audio. Must be one of: mp3_22050_32 - output format, mp3 with 22.05kHz sample rate at 32kbps. mp3_44100_32 - output format, mp3 with 44.1kHz sample rate at 32kbps. mp3_44100_64 - output format, mp3 with 44.1kHz sample rate at 64kbps. mp3_44100_96 - output format, mp3 with 44.1kHz sample rate at 96kbps. mp3_44100_128 - default output format, mp3 with 44.1kHz sample rate at 128kbps. mp3_44100_192 - output format, mp3 with 44.1kHz sample rate at 192kbps. Requires you to be subscribed to Creator tier or above. pcm_16000 - PCM format (S16LE) with 16kHz sample rate. pcm_22050 - PCM format (S16LE) with 22.05kHz sample rate. pcm_24000 - PCM format (S16LE) with 24kHz sample rate. pcm_44100 - PCM format (S16LE) with 44.1kHz sample rate. Requires you to be subscribed to Pro tier or above. ulaw_8000 - μ-law format (sometimes written mu-law, often approximated as u-law) with 8kHz sample rate. Note that this format is commonly used for Twilio audio inputs. 
    * @type {string}
    * @memberof TextToSpeechApiConvertTextToSpeechStream
    */
    readonly outputFormat?: string
    
    /**
    * Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the \'Profile\' tab on the website.
    * @type {string}
    * @memberof TextToSpeechApiConvertTextToSpeechStream
    */
    readonly xiApiKey?: string
    
} & BodyTextToSpeechV1TextToSpeechVoiceIdStreamPost

/**
 * TextToSpeechApiGenerated - object-oriented interface
 * @export
 * @class TextToSpeechApiGenerated
 * @extends {BaseAPI}
 */
export class TextToSpeechApiGenerated extends BaseAPI {
    /**
     * Converts text into speech using a voice of your choice and returns audio.
     * @summary Text To Speech
     * @param {TextToSpeechApiConvertTextToSpeechRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TextToSpeechApiGenerated
     */
    public convertTextToSpeech(requestParameters: TextToSpeechApiConvertTextToSpeechRequest, options?: AxiosRequestConfig) {
        return TextToSpeechApiFp(this.configuration).convertTextToSpeech(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Converts text into speech using a voice of your choice and returns audio as an audio stream.
     * @summary Text To Speech
     * @param {TextToSpeechApiConvertTextToSpeechStreamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TextToSpeechApiGenerated
     */
    public convertTextToSpeechStream(requestParameters: TextToSpeechApiConvertTextToSpeechStreamRequest, options?: AxiosRequestConfig) {
        return TextToSpeechApiFp(this.configuration).convertTextToSpeechStream(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
