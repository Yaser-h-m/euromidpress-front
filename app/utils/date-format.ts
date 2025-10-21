export const dateFormat = (date: Date | string) => {
    if (typeof date === 'string') {
        date = new Date(date)
    }
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })
}
