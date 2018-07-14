function validateDate(update) {
    const parts = update.split('-');
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d && (d.getMonth() + 1).toString() === parts[1];
}

function validateParameters(user, update) {
    if (!user) {
        throw Error('Enter the user name');
    } else if (!update) {
        throw Error('Enter the update date');
    } else if (!validateDate(update)) {
        throw Error('Enter the correct update date (YYYY-MM-DD)');
    }
}

export { validateParameters };
