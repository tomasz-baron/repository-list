/** @module validation */

/**
 * 
 * This function checks the correct date pattern
 * @param {string} update string argument with date to check correctness 
 * @returns {boolean} If <tt>update</tt> is correct returns true, if not returns false
 * 
 */

function validateDate(update) {
    const parts = update.split('-');
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d && (d.getMonth() + 1).toString() === parts[1];
}

/**
 * 
 * This function checks correctness of the dataset parameters
 * @param {string} user string argument with user name from github repository
 * @param {string} update string argument with date in pattern: 'YYYY-MM-DD'
 * @throws Throws errors when user or update is empty or update is not correct date
 * 
 */

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
