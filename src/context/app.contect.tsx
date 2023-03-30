import { User } from "firebase/auth";
import { createContext, ReactNode, useMemo } from "react";
import { useAuthStore } from "../store/auth.store";

export interface AuthContextState {
    user: User;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextState>({
    user: {} as User,
    loading: false,
});

export const AuthProvider = ({children} : {children: ReactNode}) => {
    const {user, loading} = useAuthStore()
    const value = useMemo(
        () => ({
        user,
        loading,
        }), 
        [user, loading]
        );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}