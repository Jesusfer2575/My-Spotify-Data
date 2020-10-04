export interface ITracksPlaylist {
  href: string;
  total: number;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

export interface IPlaylist {
  collaborative: boolean;
  description: string;
  href: string;
  id: string;
  images: Image[];
  name: string;
  public: boolean;
  snapshot_id: string;
  tracks: ITracksPlaylist;
  type: string;
}
