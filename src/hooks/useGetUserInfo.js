export const useGetUserInfo = () => {
    const { name, profilePhoto, userID, isAuth } = JSON.parse(
        localStorage.getItem("auth")
    ) || {};

    return { name, profilePhoto, userID, isAuth };
}

// export const useGetUserInfo = () => {
//     const authData = JSON.parse(localStorage.getItem("auth"));

//     // Check if authData is null (user is not authenticated)
//     if (authData === null) {
//         return { name: null, profilePhoto: null, userID: null, isAuth: false };
//     }

//     const { name, profilePhoto, userID, isAuth } = authData;

//     return { name, profilePhoto, userID, isAuth };
// }
