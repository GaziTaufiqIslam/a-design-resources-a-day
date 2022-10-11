module.exports = {
    changeDateToFriendly(myDate) {
        let newDate = new Date(myDate);
        return newDate.toLocaleDateString('en-UK', {
            year: '2-digit',
            month: 'short',
            day: '2-digit',
        });
    }
};