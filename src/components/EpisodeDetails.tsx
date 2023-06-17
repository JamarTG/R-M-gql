import { EpisodeDetailsProps } from "../types";
import CharacterList from "./CharacterList";

export default function ExportDetails({ episodeData } : EpisodeDetailsProps ) {
  const { episode} = episodeData;

  return (
    <main className="regular-font" style={{width:"90vw", }}>   
       <h1>RICK AND MORTY  -  {episode} </h1>
      
      <CharacterList characters={episodeData.characters}/>
    </main>
  );
};
