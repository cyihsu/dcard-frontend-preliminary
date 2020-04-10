import { Media, MediaMeta, Reaction } from "./CommonTypes";

export interface PostList {
  id: number;
  title: string;
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
  withNickname: boolean;
  tags: string[];
  topics: string[];
  meta: object;
  globalPinned: null;
  forumName: string;
  forumAlias: string;
  gender: string;
  school?: string;
  replyTitle: null;
  mediaMeta: MediaMeta[];
  reactions: Reaction[];
  hidden: boolean;
  customStyle: {};
  isSuspiciousAccount: boolean;
  layout: string;
  withImages: boolean;
  withVideos: boolean;
  media: Media[];
  reportReasonText: string;
  postAvatar: string;
}
