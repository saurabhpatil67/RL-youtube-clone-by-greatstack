export const API_KEY = 'AIzaSyCmXeUQ7sOlq-BnaOBLd4DOjXTDWn_hkj8'

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