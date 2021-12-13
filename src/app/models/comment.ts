export interface Comment {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    reviews: [{
        mal_id: number;
        url: string;
        type: any;
        helpful_count: number;
        date: string;
        reviewer: {
            url: string;
            image_url: string;
            username: string;
            episodes_seen: number;
            scores:{
                overall: number;
                story: number;
                animation: number;
                sound: number;
                character: number;
                enjoyment: number;
            };
        }
        content: string;
        resume: string;
    }]
}
