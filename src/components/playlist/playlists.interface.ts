export interface ITracksPlaylist {
  href: string;
  total: number;
}

export interface IPlaylist {
  collaborative: boolean;
  description: string;
  href: string;
  id: string;
  images: any[];
  name: string;
  public: boolean;
  snapshot_id: string;
  tracks: ITracksPlaylist;
  type: string;
}
