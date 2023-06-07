
export const config = {
    host: import.meta.env.VITE_HOST_URL,
    port: import.meta.env.VITE_PORT,
    apiUrl: `http://${import.meta.env.VITE_HOST_URL}:${import.meta.env.VITE_PORT}/api`
}