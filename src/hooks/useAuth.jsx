export default function useAuth() {
    const user = window.localStorage.getItem("user");
    return JSON.parse(user);
}
