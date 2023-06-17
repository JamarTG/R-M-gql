interface EpisodeData {
  id: string;
  episode: string;
  characters: CharacterT[];
}

export interface CharacterT {
  id: string;
  name: string;
  image: string;
  status: string;
  created: string;
  location: Location;
  gender : string
}

interface Location {
  name: string;
  created: string;
}

export type EpisodeDetailsProps = { episodeData: EpisodeData };
export type CharacterListProps  = { characters : CharacterT[] };