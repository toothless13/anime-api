const RandomResult = ({ result, isLoading }) => {

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
      <div>{result}</div>
  )
}

export default RandomResult