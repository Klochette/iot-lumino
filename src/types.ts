export type ThemeSliceType = {
    isDarkMode: boolean;
};

export type UserType = "admin" | "student";

export type userSliceType = {
    password?: string;
    identifier?: string;
    userType?: UserType;
    error?: string;
    email?: string;
};

export type RoomType = {
    id_room: number;
    isBooked: boolean;
    nameRoom: string;
    nbPlace: number;
    freeAccess: boolean;
    building: string;
};

export type QueryRoomType = {
    data: RoomType[];
};

export type BookARoomType = {
    nameRoom: string;
    start: string;
    end: string;
    studentEmail: string;
};

export type BookingFromARoomType = {
    end: number;
    id_booking: number;
    id_room: number;
    nameRoom: string;
    nbPlace: number;
    start: number;
    studentEmail: string;
};

export type QueryBookingFromARoomType = {
    status: BookingFromARoomType[];
};

export type FilterType = "building" | "freeAccess" | "isBooked";

export type RoomsSliceType = { rooms: number[] };
