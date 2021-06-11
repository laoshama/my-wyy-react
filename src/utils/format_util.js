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

export function FormatSongTime(songTime) {
    const second = Math.floor(songTime)
    const s = second % 60
    const m = Math.floor(second / 60)

    let sString = s >= 10 ? s : ('0' + s)
    let mString = m >= 10 ? m : ('0' + m)

    return mString + ':' + sString
}

export function getRandomNum(num) {
    return Math.floor(Math.random() * num)
}
