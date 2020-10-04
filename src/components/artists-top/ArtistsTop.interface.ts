interface IExternalUrl {
  spotify: string;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

interface IFollower {
  href: string;
  total: number;
}

export interface IArtistsTop {
  external_urls: IExternalUrl;
  followers: IFollower;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
