import Button from "./Button";

const ButtonContainer = () => {

  const buttons = ["Random Anime", "Top Anime", "Random Manga", "Top Manga"];

  return (
    <div>
      <h2>ButtonContainer</h2>
      {buttons.map(button => <Button />)}
    </div>
  )
}

export default ButtonContainer