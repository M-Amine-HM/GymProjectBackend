const mongoose= require('mongoose')

module.exports.connectToMongodb=async () => {
    mongoose.set('strictQuery',false);
    mongoose.connect(process.env.Url_mongo).then(
        ()=>{console.log('connect to db');}
    ).catch(
        (error)=>{console.log(error.message);}
    );
}