import connection from "../config/connectDB.js";

// Chuyển sang ESM
export const getHomepage = async (req, res) => {
    let data = [];
    const [results, fields] = await connection.query(
    'SELECT * FROM `users` ');
    console.log(">>>Check Mysql", results);
    data = results.map((row) => { return row });
    // console.log(rows);
    return res.render('index.ejs', {dataUser: JSON.stringify(data)});
};
