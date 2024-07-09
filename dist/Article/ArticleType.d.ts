export type ArticleType = "email" | "phone" | "web" | "note" | "sms" | "chat" | "fax" | "twitter status" | "twitter direct-message" | "facebook feed post" | "facebook feed comment" | "telegram personal-message";
export type CreateArticleRequest = {
    subject: string;
    body: string;
    type: ArticleType;
    internal: boolean;
};
//# sourceMappingURL=ArticleType.d.ts.map