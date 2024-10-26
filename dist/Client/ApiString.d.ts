/**
 * Endpoint path definitions for Zammad REST api
 * @author Peter Kappelt
 */
export declare const API_PREFIX = "/api/v1";
export declare const PARAMS: {
    readonly TICKET_SEARCH_QUERY: "query";
    readonly USER_SEARCH_QUERY: "query";
};
export declare const ENDPOINTS: {
    readonly USER_CURRENT: "/users/me";
    readonly USER_LIST: "/users";
    readonly USER_SEARCH: "/users/search";
    readonly USER_SHOW: "/users/";
    readonly USER_CREATE: "/users";
    readonly USER_UPDATE: "/users/";
    readonly USER_DELETE: "/users/";
    readonly TICKET_LIST: "/tickets";
    readonly TICKET_SEARCH: "/tickets/search";
    readonly TICKET_SHOW: "/tickets/";
    readonly TICKET_CREATE: "/tickets";
    readonly TICKET_UPDATE: "/tickets/";
    readonly TICKET_DELETE: "/tickets/";
    readonly TICKET_STATE_LIST: "/ticket_states";
    readonly TICKET_STATE_SHOW: "/ticket_states/";
    readonly TICKET_STATE_CREATE: "/ticket_states";
    readonly TICKET_STATE_UPDATE: "/ticket_states/";
    readonly TICKET_STATE_DELETE: "/ticket_states";
    readonly TICKET_PRIORITY_LIST: "/ticket_priorities";
    readonly TICKET_PRIORITY_SHOW: "/ticket_priorities/";
    readonly TICKET_PRIORITY_CREATE: "/ticket_priorities";
    readonly TICKET_PRIORITY_UPDATE: "/ticket_priorities/";
    readonly TICKET_PRIORITY_DELETE: "/ticket_priorities";
    readonly TICKET_ARTICLE_BY_TICKET: "/ticket_articles/by_ticket/";
    readonly TICKET_ARTICLE_SHOW: "/ticket_articles/";
    readonly TICKET_ARTICLE_CREATE: "/ticket_articles";
    readonly TICKET_OVERVIEWS: "/ticket_overviews";
};
//# sourceMappingURL=ApiString.d.ts.map