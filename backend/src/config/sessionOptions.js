const IN_PROD = process.env.NODE_ENV === "production";

const sessionOptions = {
  secret: process.env.SESSION_SECRET ?? "fallbackSecretIfMissing",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: IN_PROD,
    maxAge: 1000 * 60 * 60 * 24,
  },
};

export default sessionOptions;
