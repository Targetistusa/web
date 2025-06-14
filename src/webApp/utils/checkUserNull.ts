import { User } from "../Context/UserContext"
export function checkUserNull(user: User) {
    if (user.userId === "" && user.preferred_username === "" && user.email === "" && user.profileImage === "" &&
        (!user.signedIn_withAmplify && !user.signedIn_withGoogle && !user.signedIn_withApple)) {
        return true; // User is null or incomplete
    } else {
        return false; // User is valid
    }
}