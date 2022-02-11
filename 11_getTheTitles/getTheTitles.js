const getTheTitles = function (books) {
    let result = [];

    for (i = 0; i < books.length; i++){
        result.push(books[i].title);
    }
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
