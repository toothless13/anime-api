import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

const ButtonContainer = ({ setResult, handleClick, setEndpoint }) => {

  const buttons = [
    {
      name: "Random Anime",
      endpoint: "https://api.jikan.moe/v4/random/anime"
    }, 
    // {
    //   name: "Top Anime",
    //   endpoint: "TopAnimeEndpoint"
    // }, 
    {
      name: "Random Manga",
      endpoint: "https://api.jikan.moe/v4/random/manga"
    }, 
    // {
    //   name: "Top Manga",
    //   endpoint: "TopMangaEndpoint"
    // }
  ];

  return (
    <div className="flex flex-row p-4 w-3/4 md:w-1/2 justify-center mx-auto">
      {/* <h2>ButtonContainer</h2> */}
      {buttons.map(button => <Button name={button.name} endpoint={button.endpoint} key={uuidv4()} setResult={setResult} handleClick={handleClick} setEndpoint={setEndpoint}/>)}
    </div>
  )
}

export default ButtonContainer