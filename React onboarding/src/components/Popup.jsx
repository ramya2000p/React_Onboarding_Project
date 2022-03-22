import{FaTimes} from 'react-icons/fa'
function Popup({text, link}) {
  return (
    <div className="bg-popup flex flex-row py-1">

        <h4 className="text-white block ml-20 relative">{text}</h4 >
        
        <a className="text-white font-semibold underline underline-offset-1 ml-5" href="/">{link}</a>
       
        <FaTimes style={{color:'white', cursor:'pointer'}} className= "mt-1 absolute right-36"/>
    </div>
  )
}

export default Popup