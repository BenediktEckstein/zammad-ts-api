import dotenv from "dotenv";

dotenv.config();

const ENV = process.env;

export const zammadDevFqdn = ENV.ZAMMAD_DOMAIN
export const zammadUsername = ENV.ZAMMAD_USER
export const zammadPassword = ENV.ZAMMAD_PASSWORD

if (!zammadDevFqdn||!zammadUsername||!zammadPassword){
    throw new Error("No zammad test credentials")
}

