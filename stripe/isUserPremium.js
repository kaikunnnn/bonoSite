import { auth } from "../firebase";

export default async function isUserPremium(){
    if (!auth.currentUser) return false;
    await auth.currentUser.getIdToken(true);
    const decodedToken = await auth.currentUser.getIdTokenResult();

    return decodedToken?.claims?.stripeRole ? true : false;
}