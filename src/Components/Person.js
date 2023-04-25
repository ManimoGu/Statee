import PropTypes from "prop-types"

const Person = (props) => {
    
  return (
    <div>
     {
      props.list.map(item =>(
        <div className='container'>
        <h2>{item.fname}</h2>
        <h2>{item.lname}</h2>
        </div>
      ))
     }

     <h1>	{props.test}</h1>
 
    </div>
  )
}


Person.defaultProps = {

  list : [
    {
      fname : "new name",
      lname : "last name"
    }
  ]

}

Person.propTypes = {
  list : PropTypes.array,
  test : PropTypes.number

}


export default Person