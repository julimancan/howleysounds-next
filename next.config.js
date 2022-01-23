module.exports = {
  target: "serverless",
  env: {
    SANITY_DATASET_NAME: process.env.SANITY_DATASET_NAME,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  },
  reactStrictMode: true
}
