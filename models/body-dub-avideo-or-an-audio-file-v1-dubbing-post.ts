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
 * @interface BodyDubAVideoOrAnAudioFileV1DubbingPost
 */
export interface BodyDubAVideoOrAnAudioFileV1DubbingPost {
    /**
     * automatic or manual.
     * @type {string}
     * @memberof BodyDubAVideoOrAnAudioFileV1DubbingPost
     */
    'mode'?: string;
    /**
     * One or more audio files to clone the voice from
     * @type {Uint8Array | File | buffer.File}
     * @memberof BodyDubAVideoOrAnAudioFileV1DubbingPost
     */
    'file'?: Uint8Array | File | buffer.File;
    /**
     * CSV file containing transcription/translation metadata
     * @type {Uint8Array | File | buffer.File}
     * @memberof BodyDubAVideoOrAnAudioFileV1DubbingPost
     */
    'csv_file'?: Uint8Array | File | buffer.File;
    /**
     * For use only with csv input
     * @type {Uint8Array | File | buffer.File}
     * @memberof BodyDubAVideoOrAnAudioFileV1DubbingPost
     */
    'foreground_audio_file'?: Uint8Array | File | buffer.File;
    /**
     * For use only with csv input
     * @type {Uint8Array | File | buffer.File}
     * @memberof BodyDubAVideoOrAnAudioFileV1DubbingPost
     */
    'background_audio_file'?: Uint8Array | File | buffer.File;
    /**
     * Name of the dubbing project.
     * @type {string}
     * @memberof BodyDubAVideoOrAnAudioFileV1DubbingPost
     */
    'name'?: string;
    /**
     * URL of the source video/audio file.
     * @type {string}
     * @memberof BodyDubAVideoOrAnAudioFileV1DubbingPost
     */
    'source_url'?: string;
    /**
     * Source language.
     * @type {string}
     * @memberof BodyDubAVideoOrAnAudioFileV1DubbingPost
     */
    'source_lang'?: string;
    /**
     * Target language.
     * @type {string}
     * @memberof BodyDubAVideoOrAnAudioFileV1DubbingPost
     */
    'target_lang': string;
    /**
     * Number of speakers to use for the dubbing.
     * @type {number}
     * @memberof BodyDubAVideoOrAnAudioFileV1DubbingPost
     */
    'num_speakers'?: number;
    /**
     * Whether to apply watermark to the output video.
     * @type {boolean}
     * @memberof BodyDubAVideoOrAnAudioFileV1DubbingPost
     */
    'watermark'?: boolean;
    /**
     * Start time of the source video/audio file.
     * @type {number}
     * @memberof BodyDubAVideoOrAnAudioFileV1DubbingPost
     */
    'start_time'?: number;
    /**
     * End time of the source video/audio file.
     * @type {number}
     * @memberof BodyDubAVideoOrAnAudioFileV1DubbingPost
     */
    'end_time'?: number;
    /**
     * Whether to use the highest resolution available.
     * @type {boolean}
     * @memberof BodyDubAVideoOrAnAudioFileV1DubbingPost
     */
    'highest_resolution'?: boolean;
    /**
     * Whether to prepare dub for edits in dubbing studio.
     * @type {boolean}
     * @memberof BodyDubAVideoOrAnAudioFileV1DubbingPost
     */
    'dubbing_studio'?: boolean;
}

