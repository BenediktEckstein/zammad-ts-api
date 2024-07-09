type OrderBy = "asc" | "desc";

export type GenericParams = Record<string, unknown>;

export type OnBehalfParams = {
  from?: number | string | undefined;
};

export type PaginationParams = {
  page?: number | undefined;
  per_page?: number | undefined;
};

export type SortParams = {
  sort_by?: string | undefined;
  order_by?: OrderBy | undefined;
};

export type ExpandParams = {
  expand?: boolean | undefined;
  //full [undocumented], returns {id:number, assets:{Ticket:Record<string,Ticket>, Group:Record<string,Group>, User:Record<string, User>, Role:Record<string, Role>}}
  //all [undocumented]: example value: {
    //   ticket_id: 52,
    //   ticket_article_ids: [ 139 ],
    //   assets: {
    //     Group: { '1': [Object], '2': [Object] },
    //     User: {
    //       '1': [Object],
    //       '3': [Object],
    //       '32': [Object],
    //       '33': [Object],
    //       '34': [Object],
    //       '35': [Object],
    //       '36': [Object],
    //       '48': [Object]
    //     },
    //     Role: { '1': [Object], '2': [Object], '3': [Object] },
    //     TicketPriority: { '1': [Object], '2': [Object], '3': [Object] },
    //     Ticket: { '52': [Object] },
    //     TicketArticle: { '139': [Object] }
    //   },
    //   links: [],
    //   tags: [ 'Store' ],
    //   mentions: [],
    //   time_accountings: [],
    //   form_meta: {
    //     filter: { type_id: [Array] },
    //     dependencies: null,
    //     configure_attributes: [
    //       [Object], [Object],
    //       [Object], [Object],
    //       [Object], [Object],
    //       [Object], [Object],
    //       [Object], [Object],
    //       [Object]
    //     ],
    //     core_workflow: {
    //       restrict_values: [Object],
    //       request_id: 'default',
    //       visibility: [Object],
    //       mandatory: [Object],
    //       readonly: [Object],
    //       select: {},
    //       fill_in: {},
    //       eval: [],
    //       matched_workflows: [Array],
    //       rerun_count: 0
    //     }
    //   }
    // }
};