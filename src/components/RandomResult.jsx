const RandomResult = ({ result, imgUrl, link, synopsis, isLoading }) => {

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">{result}</h2>
        {imgUrl !== undefined && <img src={imgUrl} alt="Image for anime or manga" className=" mt-4 rounded-md" />}
        {link !== undefined && <p className="my-4 mx-4 p-4 rounded-md border-2 border-green-800 cursor-pointer hover:border-pink-200 hover:text-white bg-gradient-to-r hover:from-green-800 hover:to-pink-300 drop-shadow-md"><a href={link} target="_blank" className="contents md:1/3 w-3/4">More Info - MyAnimeList</a></p>}
        {synopsis !== undefined && <h3 className="text-xl font-semibold">Synopsis</h3>}
        <p className="my-4 w-3/4 md:1/3">{synopsis}</p>
      </div>
  )
}

export default RandomResult