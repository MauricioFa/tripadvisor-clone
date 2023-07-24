import { AddressObj } from "./location.model";

export interface RankingData {
    ranking_string: String;
}

export interface ReviewRatingCount {
    [index: string]: string;
}

export interface LocationDetails {
    address_obj: AddressObj
    amenities?: String[];
    description: String;
    name: String;
    num_reviews: String;
    ranking_data?: RankingData;
    rating_image_url: String;
    rating: String;
    review_rating_count: ReviewRatingCount,
}