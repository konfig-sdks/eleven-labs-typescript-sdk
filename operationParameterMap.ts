type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/v1/pronunciation-dictionaries/add-from-file-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'xi-api-key'
            },
            {
                name: 'description'
            },
            {
                name: 'file'
            },
        ]
    },
    '/v1/pronunciation-dictionaries/{pronunciation_dictionary_id}-GET': {
        parameters: [
            {
                name: 'pronunciation_dictionary_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/admin/n8enylacgd/coupon/{promocode}/archive-POST': {
        parameters: [
            {
                name: 'promocode'
            },
        ]
    },
    '/admin/n8enylacgd/vanity-link/{vanity_link_id}/update-POST': {
        parameters: [
            {
                name: 'vanity_slug'
            },
            {
                name: 'target_url'
            },
            {
                name: 'comment'
            },
            {
                name: 'vanity_link_id'
            },
        ]
    },
    '/admin/n8enylacgd/coupons-GET': {
        parameters: [
        ]
    },
    '/admin/n8enylacgd/vanity-links-GET': {
        parameters: [
        ]
    },
    '/admin/n8enylacgd/vanity-link/{slug}-GET': {
        parameters: [
            {
                name: 'slug'
            },
        ]
    },
    '/admin/n8enylacgd/vanity-link/{vanity_link_id}/delete-POST': {
        parameters: [
            {
                name: 'vanity_link_id'
            },
        ]
    },
    '/v1/audio-native-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'file'
            },
            {
                name: 'xi-api-key'
            },
            {
                name: 'title'
            },
            {
                name: 'image'
            },
            {
                name: 'author'
            },
            {
                name: 'small'
            },
            {
                name: 'text_color'
            },
            {
                name: 'background_color'
            },
            {
                name: 'sessionization'
            },
            {
                name: 'voice_id'
            },
            {
                name: 'model_id'
            },
            {
                name: 'auto_convert'
            },
        ]
    },
    '/v1/dubbing/{dubbing_id}-DELETE': {
        parameters: [
            {
                name: 'dubbing_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/dubbing-POST': {
        parameters: [
            {
                name: 'target_lang'
            },
            {
                name: 'xi-api-key'
            },
            {
                name: 'mode'
            },
            {
                name: 'file'
            },
            {
                name: 'csv_file'
            },
            {
                name: 'foreground_audio_file'
            },
            {
                name: 'background_audio_file'
            },
            {
                name: 'name'
            },
            {
                name: 'source_url'
            },
            {
                name: 'source_lang'
            },
            {
                name: 'num_speakers'
            },
            {
                name: 'watermark'
            },
            {
                name: 'start_time'
            },
            {
                name: 'end_time'
            },
            {
                name: 'highest_resolution'
            },
            {
                name: 'dubbing_studio'
            },
        ]
    },
    '/v1/dubbing/{dubbing_id}/audio/{language_code}-GET': {
        parameters: [
            {
                name: 'dubbing_id'
            },
            {
                name: 'language_code'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/dubbing/{dubbing_id}-GET': {
        parameters: [
            {
                name: 'dubbing_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/models-GET': {
        parameters: [
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/projects/add-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'default_title_voice_id'
            },
            {
                name: 'default_paragraph_voice_id'
            },
            {
                name: 'default_model_id'
            },
            {
                name: 'pronunciation_dictionary_locators'
            },
            {
                name: 'xi-api-key'
            },
            {
                name: 'title'
            },
            {
                name: 'from_url'
            },
            {
                name: 'from_document'
            },
            {
                name: 'quality_preset'
            },
            {
                name: 'author'
            },
            {
                name: 'isbn_number'
            },
            {
                name: 'acx_volume_normalization'
            },
            {
                name: 'volume_normalization'
            },
            {
                name: 'callback_url'
            },
        ]
    },
    '/v1/projects/{project_id}-DELETE': {
        parameters: [
            {
                name: 'project_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/projects/{project_id}/chapters/{chapter_id}-DELETE': {
        parameters: [
            {
                name: 'project_id'
            },
            {
                name: 'chapter_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/projects-GET': {
        parameters: [
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/projects/{project_id}-GET': {
        parameters: [
            {
                name: 'project_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/projects/{project_id}/chapters/{chapter_id}-GET': {
        parameters: [
            {
                name: 'project_id'
            },
            {
                name: 'chapter_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/projects/{project_id}/chapters/{chapter_id}/snapshots-GET': {
        parameters: [
            {
                name: 'project_id'
            },
            {
                name: 'chapter_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/projects/{project_id}/chapters-GET': {
        parameters: [
            {
                name: 'project_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/projects/{project_id}/snapshots-GET': {
        parameters: [
            {
                name: 'project_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/projects/{project_id}/chapters/{chapter_id}/convert-POST': {
        parameters: [
            {
                name: 'project_id'
            },
            {
                name: 'chapter_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/projects/{project_id}/convert-POST': {
        parameters: [
            {
                name: 'project_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/projects/{project_id}/snapshots/{project_snapshot_id}/stream-POST': {
        parameters: [
            {
                name: 'project_id'
            },
            {
                name: 'project_snapshot_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}/stream-POST': {
        parameters: [
            {
                name: 'project_id'
            },
            {
                name: 'chapter_id'
            },
            {
                name: 'chapter_snapshot_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/projects/{project_id}/update-pronunciation-dictionaries-POST': {
        parameters: [
            {
                name: 'pronunciation_dictionary_locators'
            },
            {
                name: 'project_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/docs-GET': {
        parameters: [
        ]
    },
    '/v1/voices/{voice_id}/samples/{sample_id}/audio-GET': {
        parameters: [
            {
                name: 'voice_id'
            },
            {
                name: 'sample_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/voices/{voice_id}/samples/{sample_id}-DELETE': {
        parameters: [
            {
                name: 'voice_id'
            },
            {
                name: 'sample_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/history/{history_item_id}-DELETE': {
        parameters: [
            {
                name: 'history_item_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/history/download-POST': {
        parameters: [
            {
                name: 'history_item_ids'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/history-GET': {
        parameters: [
            {
                name: 'page_size'
            },
            {
                name: 'start_after_history_item_id'
            },
            {
                name: 'voice_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/history/{history_item_id}/audio-GET': {
        parameters: [
            {
                name: 'history_item_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/history/{history_item_id}-GET': {
        parameters: [
            {
                name: 'history_item_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/speech-to-speech/{voice_id}-POST': {
        parameters: [
            {
                name: 'voice_id'
            },
            {
                name: 'audio'
            },
            {
                name: 'optimize_streaming_latency'
            },
            {
                name: 'xi-api-key'
            },
            {
                name: 'model_id'
            },
            {
                name: 'voice_settings'
            },
        ]
    },
    '/v1/speech-to-speech/{voice_id}/stream-POST': {
        parameters: [
            {
                name: 'voice_id'
            },
            {
                name: 'audio'
            },
            {
                name: 'optimize_streaming_latency'
            },
            {
                name: 'xi-api-key'
            },
            {
                name: 'model_id'
            },
            {
                name: 'voice_settings'
            },
        ]
    },
    '/v1/text-to-speech/{voice_id}-POST': {
        parameters: [
            {
                name: 'text'
            },
            {
                name: 'voice_id'
            },
            {
                name: 'model_id'
            },
            {
                name: 'voice_settings'
            },
            {
                name: 'pronunciation_dictionary_locators'
            },
            {
                name: 'optimize_streaming_latency'
            },
            {
                name: 'output_format'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/text-to-speech/{voice_id}/stream-POST': {
        parameters: [
            {
                name: 'text'
            },
            {
                name: 'voice_id'
            },
            {
                name: 'model_id'
            },
            {
                name: 'voice_settings'
            },
            {
                name: 'pronunciation_dictionary_locators'
            },
            {
                name: 'optimize_streaming_latency'
            },
            {
                name: 'output_format'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/user-GET': {
        parameters: [
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/user/subscription-GET': {
        parameters: [
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/voice-generation/create-voice-POST': {
        parameters: [
            {
                name: 'voice_name'
            },
            {
                name: 'voice_description'
            },
            {
                name: 'generated_voice_id'
            },
            {
                name: 'labels'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/voice-generation/generate-voice-POST': {
        parameters: [
            {
                name: 'gender'
            },
            {
                name: 'accent'
            },
            {
                name: 'age'
            },
            {
                name: 'accent_strength'
            },
            {
                name: 'text'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/voice-generation/generate-voice/parameters-GET': {
        parameters: [
        ]
    },
    '/v1/voices/add/{public_user_id}/{voice_id}-POST': {
        parameters: [
            {
                name: 'new_name'
            },
            {
                name: 'public_user_id'
            },
            {
                name: 'voice_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/voices/add-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'files'
            },
            {
                name: 'xi-api-key'
            },
            {
                name: 'description'
            },
            {
                name: 'labels'
            },
        ]
    },
    '/v1/voices/{voice_id}-DELETE': {
        parameters: [
            {
                name: 'voice_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/voices/{voice_id}/settings/edit-POST': {
        parameters: [
            {
                name: 'stability'
            },
            {
                name: 'similarity_boost'
            },
            {
                name: 'voice_id'
            },
            {
                name: 'style'
            },
            {
                name: 'use_speaker_boost'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/voices/settings/default-GET': {
        parameters: [
        ]
    },
    '/v1/voices/{voice_id}/settings-GET': {
        parameters: [
            {
                name: 'voice_id'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/shared-voices-GET': {
        parameters: [
            {
                name: 'page_size'
            },
            {
                name: 'category'
            },
            {
                name: 'gender'
            },
            {
                name: 'age'
            },
            {
                name: 'accent'
            },
            {
                name: 'search'
            },
            {
                name: 'use_cases'
            },
            {
                name: 'descriptives'
            },
            {
                name: 'sort'
            },
            {
                name: 'featured'
            },
            {
                name: 'page'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/voices/{voice_id}-GET': {
        parameters: [
            {
                name: 'voice_id'
            },
            {
                name: 'with_settings'
            },
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/voices-GET': {
        parameters: [
            {
                name: 'xi-api-key'
            },
        ]
    },
    '/v1/voices/{voice_id}/edit-POST': {
        parameters: [
            {
                name: 'voice_id'
            },
            {
                name: 'name'
            },
            {
                name: 'xi-api-key'
            },
            {
                name: 'description'
            },
            {
                name: 'files'
            },
            {
                name: 'labels'
            },
        ]
    },
    '/admin/{admin_url_prefix}/sso-provider-GET': {
        parameters: [
            {
                name: 'workspace_id'
            },
        ]
    },
}