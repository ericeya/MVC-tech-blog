const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment')
// const Painting = require('./Painting');

// Gallery.hasMany(Painting, {
//   foreignKey: 'gallery_id',
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: 'gallery_id',
// });

Blogpost.hasMany(Comment)

Comment.belongsTo(Blogpost)

Comment.belongsTo(User)

Blogpost.hasOne(User)

User.hasMany(Blogpost)

User.hasMany(Comment)



module.exports = { User, Blogpost, Comment };
