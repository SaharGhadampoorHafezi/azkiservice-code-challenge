export interface IPostType {
  id: string;
  slug: string;
  alt_description: string;
  alternative_slugs: {
    en: string;
    es: string;
    ja: string;
    fr: string;
    it: string;
    [key: string]: string;
  };
  asset_type: string;
  blur_hash: string;
  bookmarked: boolean;
  breadcrumbs: any[];
  color: string;
  created_at: string;
  updated_at: string;
  current_user_collections: any[];
  description: string;
  height: number;
  width: number;
  liked_by_user: boolean;
  likes: number;
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  promoted_at: string | null;
  sponsorship: any | null;
  topic_submissions: {
    [topic: string]: any;
  };
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    [key: string]: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
    first_name: string;
    last_name?: string;
    updated_at: string;
    [key: string]: any;
  };
}
