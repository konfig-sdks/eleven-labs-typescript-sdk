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
 * @interface BodyAddProjectV1ProjectsAddPost
 */
export interface BodyAddProjectV1ProjectsAddPost {
    /**
     * An optional name of the author of the project, this will be added as metadata to the mp3 file on project / chapter download.
     * @type {string}
     * @memberof BodyAddProjectV1ProjectsAddPost
     */
    'title'?: string;
    /**
     * The name of the project, used for identification only.
     * @type {string}
     * @memberof BodyAddProjectV1ProjectsAddPost
     */
    'name': string;
    /**
     * An optional URL from which we will extract content to initialize the project. If this is set, \'from_url\' must be null. If neither \'from_url\' or \'from_document\' are provided we will initialize the project as blank.
     * @type {string}
     * @memberof BodyAddProjectV1ProjectsAddPost
     */
    'from_url'?: string;
    /**
     * An optional .epub, .pdf, .txt or similar file can be provided. If provided, we will initialize the project with its content. If this is set, \'from_url\' must be null.  If neither \'from_url\' or \'from_document\' are provided we will initialize the project as blank.
     * @type {Uint8Array | File | buffer.File}
     * @memberof BodyAddProjectV1ProjectsAddPost
     */
    'from_document'?: Uint8Array | File | buffer.File;
    /**
     * The voice_id that corresponds to the default voice used for new titles.
     * @type {string}
     * @memberof BodyAddProjectV1ProjectsAddPost
     */
    'default_title_voice_id': string;
    /**
     * The voice_id that corresponds to the default voice used for new paragraphs.
     * @type {string}
     * @memberof BodyAddProjectV1ProjectsAddPost
     */
    'default_paragraph_voice_id': string;
    /**
     * The model_id of the model to be used for this project, you can query GET https://api.elevenlabs.io/v1/models to list all available models.
     * @type {string}
     * @memberof BodyAddProjectV1ProjectsAddPost
     */
    'default_model_id': string;
    /**
     * Output quality of the generated audio. Must be one of: standard - standard output format, 128kbps with 44.1kHz sample rate. high - high quality output format, 192kbps with 44.1kHz sample rate and major improvements on our side. Using this setting increases the character cost by 20%. ultra - ultra quality output format, 192kbps with 44.1kHz sample rate and highest improvements on our side. Using this setting increases the character cost by 50%. 
     * @type {string}
     * @memberof BodyAddProjectV1ProjectsAddPost
     */
    'quality_preset'?: string;
    /**
     * An optional name of the author of the project, this will be added as metadata to the mp3 file on project / chapter download.
     * @type {string}
     * @memberof BodyAddProjectV1ProjectsAddPost
     */
    'author'?: string;
    /**
     * An optional ISBN number of the project you want to create, this will be added as metadata to the mp3 file on project / chapter download.
     * @type {string}
     * @memberof BodyAddProjectV1ProjectsAddPost
     */
    'isbn_number'?: string;
    /**
     * [Deprecated] When the project is downloaded, should the returned audio have postprocessing in order to make it compliant with audiobook normalized volume requirements
     * @type {boolean}
     * @memberof BodyAddProjectV1ProjectsAddPost
     */
    'acx_volume_normalization'?: boolean;
    /**
     * When the project is downloaded, should the returned audio have postprocessing in order to make it compliant with audiobook normalized volume requirements
     * @type {boolean}
     * @memberof BodyAddProjectV1ProjectsAddPost
     */
    'volume_normalization'?: boolean;
    /**
     * A list of pronunciation dictionary locators (id, version_id) encoded as a list of JSON strings for pronunciation dictionaries to be applied to the text.  A list of json encoded strings is required as adding projects may occur through formData as opposed to jsonBody
     * @type {Array<string>}
     * @memberof BodyAddProjectV1ProjectsAddPost
     */
    'pronunciation_dictionary_locators': Array<string>;
    /**
     * A url that will be called by our service when the project is converted with a json containing the status of the conversion
     * @type {string}
     * @memberof BodyAddProjectV1ProjectsAddPost
     */
    'callback_url'?: string;
}

