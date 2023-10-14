import './colorbox.css'
import { useState ,useEffect} from 'react'
function Colorbox({color})
{
    const [choice,setChoice] = useState('white')
    const [flag,setFlag] = useState(false)
    function handleClick()
    {
        (flag)?setFlag(flag):setFlag(!flag)
    }
    
    return(
        <div className="reactive-color-box" style={{backgroundColor:choice}}>
            <button className='choice-button' onClick={handleClick}>Pick a Color</button>
            <div className={(flag)?'visible-color-carousel':"invisible-color-carousel"}>
                    {
                        color.map(x => 
                            {
                                return <div className='colors' onClick={()=>{setChoice(x);setFlag(!flag)}} style={{backgroundColor:x}}> </div>;
                            }
                        )
                    }
            </div>
        </div>
  )
}

export default Colorbox