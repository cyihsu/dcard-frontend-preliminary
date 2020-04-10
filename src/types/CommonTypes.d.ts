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
