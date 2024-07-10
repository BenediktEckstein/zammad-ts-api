import { z } from 'zod';
import { articleContentTypeSchema, articleSchema, articleSenderSchema, articleTypeSchema } from './ArticleValidator.js';
import { CreateAttachmentViaArticle } from '../Attachment/AttachmentType.js';
export type ApiArticle = z.infer<typeof articleSchema>;
export type ArticleType = z.infer<typeof articleTypeSchema>;
export type ArticleSender = z.infer<typeof articleSenderSchema>;
export type ArticleContent = z.infer<typeof articleContentTypeSchema>;
export type CreateArticleViaTicketRequest = {
    subject: string;
    body: string;
    type: ArticleType;
    internal: boolean;
};
export type CreateArticleRequest = {
    ticket_id: number;
    to?: string;
    cc?: string;
    subject: string;
    body: string;
    sender?: ArticleSender;
    content_type: ArticleContent;
    type: ArticleType;
    internal: boolean;
    attachments?: CreateAttachmentViaArticle[];
};
//# sourceMappingURL=ArticleType.d.ts.map