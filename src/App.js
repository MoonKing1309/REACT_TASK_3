import './App.css'
import Colorbox from './components/colorbox'
function App()
{
  return(
    <div className="background">
      <h2 className="title">Color Picker</h2>
      <Colorbox color={['red','green','blue','white','orange','yellow','pink','aquamarine','purple','violet','black']}/> 
    </div>
  )
}

export default App