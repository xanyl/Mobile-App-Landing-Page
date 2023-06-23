import Accordion from './Accordians/Accordion'
import './Facts.css'

export default function Facts() {
  return (
   <div className="facts-main">
       <div className="facts-heading">FAQs</div>
       <div className="fact-drop">
        <Accordion />
       </div>
   </div>
  )
}
