const Button = ({ name, endpoint, handleClick, setEndpoint }) => {

  return (
    <div onClick={(e) => {handleClick(e); setEndpoint(endpoint);}}>
      <p>{name}</p>
    </div>
  )
}

export default Button