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
