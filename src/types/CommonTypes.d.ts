export interface Media {
  url: string;
}

export interface MediaMeta {
  id: string;
  url: string;
  normalizedUrl: string;
  thumbnail: string;
  type: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  width: number;
  height: number;
}

export interface MediaDetail {
  id: string;
  name: string;
  width: number;
  height: number;
  size: number;
  url: string; // originalSize
  type: string;
  uploadedAt: string;
  links: any;
}

export interface MediaObject {
  width: number;
  height: number;
  size: number;
  type: string;
  url: string;
}

export interface Reaction {
  id: string;
  count: number;
}

export interface ReactionTypes {
  id: string;
  name: string;
  url: string;
  position: number;
  startAt: string;
  endAt?: string | null;
  rules: any;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  active: boolean;
  isGeneral: boolean;
}
