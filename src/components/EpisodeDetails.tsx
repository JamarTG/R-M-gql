import { EpisodeDetailsProps } from "../types";
import CharacterList from "./CharacterList";

export default function ExportDetails({ episodeData } : EpisodeDetailsProps ) {
  const { episode} = episodeData;

  return (
    <main className="regular-font" style={{width:"90vw", }}>   
      <h1 >R&M  -  {episode} </h1>
      <br />
      <br />
      <br />
      <CharacterList characters={episodeData.characters}/>
    </main>
  );
};
