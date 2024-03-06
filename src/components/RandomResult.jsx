const RandomResult = ({ result, imgUrl, isLoading }) => {

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
      <div>
        <h2>{result}</h2>
        <img src={imgUrl} alt="Image for anime or manga" className="mx-auto mt-4" />
      </div>
  )
}

export default RandomResult