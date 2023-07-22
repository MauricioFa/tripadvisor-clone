export interface AddressObj {
    city?: String;
    state?: String;
    country?: String;
    address_string?: String;
}

export interface Location {
    location_id: String;
    name: String;
    address_obj: AddressObj
}