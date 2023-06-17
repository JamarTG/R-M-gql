import "./App.css";
import EpisodeDetails from "./components/EpisodeDetails";
import PreLoader from "./components/PreLoader";
import episodeDataQuery from "./queries";
import { useQuery } from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(episodeDataQuery, {
    variables: { id: "51" },
  });

  return (
    <>
      {!error ? (
        loading ? (
          <PreLoader/>
        ) : (
          <EpisodeDetails episodeData={data?.episode} />
        )
      ) : (
        <div>Sorry, an error occurred fetching data</div>
      )}
    </>
  );
}

export default App;
