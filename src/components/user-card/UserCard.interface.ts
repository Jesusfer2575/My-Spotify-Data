interface IExternalURLs {
  spotify: string;
}

interface IFollower {
  href: string;
  total: number;
}

interface Image {
  height: number;
  width: number;
  url: string;
}

export default interface IUserCard {
  display_name: string;
  external_urls: IExternalURLs;
  followers: IFollower;
  href: string;
  id: string;
  images: Image[];
  type: string;
  uri: string;
}
