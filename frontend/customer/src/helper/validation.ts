function isValidEmail(email: string){
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regex.test(email)
}

function isValidPhoneNumber(phoneNumber: string){
    const regex = /^[0-9]{10,15}$/ 
    return regex.test(phoneNumber)
}

export {
    isValidEmail,
    isValidPhoneNumber
}