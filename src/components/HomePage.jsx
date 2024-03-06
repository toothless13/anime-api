import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ButtonContainer from "./ButtonContainer"
import RandomResult from "./RandomResult";
// import TopContainer from "./TopContainer";

const HomePage = () => {

  const [result, setResult] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [endpoint, setEndpoint] = useState("https://api.jikan.moe/v4/random/anime" || "https://api.jikan.moe/v4/random/manga");

  const { data, isLoading, refetch } = useQuery({
    queryFn: () => fetch(endpoint),
    queryKey: ["result", { endpoint }],
    refetchOnWindowFocus: false,
    // enabled: false
  });

  const handleClick = async e => {
    e.preventDefault();
    refetch();
    try {
      const response = await data?.json();
      // console.log(response?.data.title);
      setResult(response?.data.title);
      setImgUrl(response?.data.images.jpg["image_url"]);
    } catch (error) {
      console.log(error.message);
    }
  }

  // useEffect(() => {
  //   setResult("");
  // }, []);

  return (
    <div className="text-center">
      {/* <h1>This is the HomePage</h1> */}
      <ButtonContainer setResult={setResult} handleClick={handleClick} setEndpoint={setEndpoint}/>
      <RandomResult result={result} imgUrl={imgUrl} isLoading={isLoading} />
      {/* <TopContainer /> */}
    </div>
  )
}

export default HomePage