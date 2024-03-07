const RandomResult = ({ result, imgUrl, isLoading }) => {

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
      <div>
        <h2 className="text-2xl font-bold">{result}</h2>
        {imgUrl !== undefined && <img src={imgUrl} alt="Image for anime or manga" className="mx-auto mt-4" />}
      </div>
  )
}

export default RandomResult