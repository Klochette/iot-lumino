export type ThemeSliceType = {
    isDarkMode: boolean;
};

export type UserType = "admin" | "student";

export type userSliceType = {
    password?: string;
    identifier?: string;
    userType?: UserType;
    error?: string;
};
