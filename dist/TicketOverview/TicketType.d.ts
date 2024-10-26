import { z } from "zod";
import { TicketOverviewSimpleList } from "./TicketOverviewValidator.js";
import { Expand } from "../Utility/@type.js";
export type TicketOverviews = Expand<z.infer<typeof TicketOverviewSimpleList>>;
//# sourceMappingURL=TicketType.d.ts.map