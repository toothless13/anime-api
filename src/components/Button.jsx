const Button = ({ name, endpoint, handleClick, setEndpoint }) => {

  return (
    <div onClick={(e) => {handleClick(e); setEndpoint(endpoint);}} className="mx-4 p-4 rounded-md border-2 border-green-800 cursor-pointer hover:border-pink-200 hover:text-white bg-gradient-to-r hover:from-green-800 hover:to-pink-300 drop-shadow-md" >
      <p>{name}</p>
    </div>
  )
}

export default Button

// border-2 border-green-800 cursor-pointer hover:bg-pink-400