const Button = ({ name, endpoint, handleClick, setEndpoint }) => {

  return (
    <div onClick={(e) => {handleClick(e); setEndpoint(endpoint);}} className="mx-4 p-4 border-2 border-slate-800 cursor-pointer" >
      <p>{name}</p>
    </div>
  )
}

export default Button