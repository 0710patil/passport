const LocalStrategy = require("passport-local").Strategy;
const { User } = require("./database");
exports.startPassport = (passport) => {
  passport.use(
    new LocalStrategy(async (username, password, success) => {
      try {
        const user = await User.findOne({ username });

        if (!user) return success(null, false);
        if (user.password !== password) return success(null, user);
      } catch (err) {
        return success(err, false);
      }
    })
  );
};
