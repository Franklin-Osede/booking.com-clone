export type Listing={
    url:string;
    title:string;
    rating:string|null;
    description: string;
    price:string;
    link:string;
    booking_metadata:string;
    rating_world:string;
    rating_count: string|null
}



export type Result = {
    content:{
        listings: Listing[];
    total_listings:string    }
}