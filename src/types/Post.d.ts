import { Media, MediaMeta, Reaction } from "./CommonTypes";

export interface Post {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  anonymousSchool: boolean;
  anonymousDepartment: boolean;
  pinned: boolean;
  forumId: string;
  replyId: string; // Response Origin
  createdAt: string; // as JS Date() type
  updatedAt: string; // as JS Date() type
  commentCount: number;
  likeCount: number;
  tags: string[];
  topics: string[];
  supportedReactions: null;
  withNickname: boolean;
  reportReason: string;
  hiddenByAuthor: boolean;
  meta: object;
  forumName: string;
  forumAlias: string;
  school: string;
  department: string;
  replyTitle: null;
  gender: string;
  personaSubscriptable: boolean;
  reactions: Reaction[];
  hidden: boolean;
  customStyle: null;
  isSuspiciousAccount: boolean;
  layout: string;
  withImages: boolean;
  withVideos: boolean;
  media: Media[];
  reportReasonText: string;
  mediaMeta: MediaMeta[];
  postAvatar: string;
}
