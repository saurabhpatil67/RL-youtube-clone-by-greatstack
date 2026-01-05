export const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const value_converter = (value) => {
    if (value >= 100000) {
        return (Math.floor(value / 100000)) + 'M'
    }
    if (value >= 1000) {
        return (Math.floor(value / 1000)) + 'K'
    }

    else {
        return (value)
    }
}