export const isAuthenticated = function () {
    const token = sessionStorage.getItem("token")
    if (token) {
        return true
    } else {
        return false
    }
}