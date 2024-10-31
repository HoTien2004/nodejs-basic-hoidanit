// let getHomepage = (req, res) => {
//     return res.render('index.ejs');
// }

// module.exports = {
//     getHomepage
// };

// Chuyển sang ESM
export const getHomepage = (req, res) => {
    return res.render('index.ejs');
};
