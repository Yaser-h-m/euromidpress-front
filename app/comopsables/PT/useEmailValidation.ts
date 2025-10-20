export const useValidateEmail  = (emailValue: string):string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailValue) {
        return 'Email is required'
    }
    if (!emailRegex.test(emailValue)) {
        return 'Please enter a valid email address'
    }
    return ''
}
