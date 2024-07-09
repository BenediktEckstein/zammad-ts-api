export { default as ZammadClient } from "./Client/Client.js";
module.exports = {
    ApiError: require("./ApiError"),
    Ticket: require("./Ticket"),
    TicketArticle: require("./TicketArticle"),
    TicketPriority: require("./TicketPriority"),
    TicketState: require("./TicketState"),
    User: require("./User"),
    ZammadApi: require("./ZammadApi"),
};
