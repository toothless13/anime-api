import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ButtonContainer from "./ButtonContainer"
import RandomResult from "./RandomResult";
import TopContainer from "./TopContainer";

const HomePage = () => {

  const [result, setResult] = useState();
  const [endpoint, setEndpoint] = useState("https://api.jikan.moe/v4/random/anime" || "https://api.jikan.moe/v4/random/manga");

  const handleClick = async e => {
    e.preventDefault();
    refetch();
    try {
      const response = await data?.json();
      // console.log(response?.data.title);
      setResult(response?.data.title);
    } catch (error) {
      console.log(error.message);
    }
  }

  const { data, isLoading, refetch } = useQuery({
    queryFn: () => fetch(endpoint),
    queryKey: [`result`],
    refetchOnWindowFocus: false,
    // enabled: false
  });

  useEffect(() => {
    setResult("");
  }, []);

  return (
    <div>
      <h1>This is the HomePage</h1>
      <ButtonContainer setResult={setResult} handleClick={handleClick} setEndpoint={setEndpoint}/>
      <RandomResult result={result} isLoading={isLoading} />
      <TopContainer />
    </div>
  )
}

export default HomePage