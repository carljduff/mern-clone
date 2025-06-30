User.hasMany(Event, {
    foreignKey: 'userID',
    noDelete: 'CASCADE'
});
Event.belongsTo(User, {
    foreignKey: 'userID',
});
