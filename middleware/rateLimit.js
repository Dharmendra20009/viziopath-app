import rateLimit from 'express-rate-limit';

// General API limiter
export const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100,            // limit each IP to 100 requests per minute
  message: { error: "Too many requests, please try again later." },
  standardHeaders: true, // return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false,  // disable the `X-RateLimit-*` headers
});

// Stricter limiter for contact form
export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,                  // limit each IP to 10 requests
  message: { error: "Too many contact requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});
