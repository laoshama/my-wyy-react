export function getSizeIamge(imgUrl, size) {
    return `${imgUrl}?param=${size}x${size}`
}

export function getPlayCount(count) {
    if (count < 10000) {
        return count
    } else if ((count / 10000 / 10000) < 1) {
        return `${Math.floor(count / 1000) / 10}万`
    } else {
        return `${Math.floor(count / 10000 / 1000) / 10}亿`
    }
}