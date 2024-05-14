export interface Room {
    totalRooms: number,
    availableRooms: number;
    bookedRooms: number;
}

export interface roomsList {
    roomName: string;
    amenities: string;
    price: number;
    themes: string;
    photos: string;
    booked: number;
    numberOfRooms: number;
    checkInTime: Date;
    checkOutTime: Date;
    rating: number,
}
// ! interface
