export interface Episode {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    episode_last_page: number;
    episodes: [{
        aired: string,
        episode_id: number,
        filler: boolean,
        forum_url: string;
        recap: boolean,
        title: string,
        title_japanese: string,
        title_romanji: string,
        video_url: string
    }];
}
