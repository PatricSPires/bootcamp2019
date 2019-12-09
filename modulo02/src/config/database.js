module.exports = {
  dialect: 'postgres',
  host: process.env.host,
  username: process.env.username,
  password: process.env.password,
  database: process.env.database,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
