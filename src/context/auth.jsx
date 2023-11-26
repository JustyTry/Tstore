// import { onAuthStateChanged } from 'firebase/auth';
// import { createContext, useEffect, useState } from 'react';
// import { auth } from '../firebase/config';

// export const AuthContext = createContext({
//     user: null,
//     isLoading: false,
// });

// export const AuthProvider = ({ childern }) => {
//     const [user, setUser] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             setUser(user);
//             setIsLoading(false);
//         });

//         return unsubscribe;
//     });

//     const value = {
//         user,
//         isLoading,
//     };
//     return <AuthContext.Provider value={value}>{childern}</AuthContext.Provider>;
// };
