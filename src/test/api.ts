import dotenv from "dotenv";

dotenv.config();

const ENV = process.env;

const fqdn = ENV.ZAMMAD_DOMAIN;
const un = ENV.ZAMMAD_USER;
const pw = ENV.ZAMMAD_PASSWORD;

if (!fqdn || !un || !pw) {
  throw new Error("No zammad test credentials");
}

export const devFqdn = fqdn;
export const devAdminUsername = un;
export const devAdminPassword = pw;
