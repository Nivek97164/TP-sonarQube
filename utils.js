function isValidEmail(email) {
    return email.includes("@") && email.length > 5;
}
module.exports = { isValidEmail };
