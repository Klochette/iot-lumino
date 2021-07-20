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
    isBooked: number;
    nameRoom: string;
    nbPlace: number;
};

export type QueryRoomType = {
    data: RoomType[];
};

export type BookARoomType = {
    nameRoom: string;
    start: number;
    end: number;
    email: string;
};

export type BookingFromARoomQueryType = {
    end: number;
    id_booking: number;
    id_room: number;
    nameRoom: string;
    nbPlace: number;
    start: number;
    studentEmail: string;
};
