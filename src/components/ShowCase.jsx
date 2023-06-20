
import '../styles/ShowCase.css'
import {data} from  '../data/data'

export default function ShowCase() {
    const show = data.ShowCase;
  return (
    <div className="show-main">
        <div className="show-title">
            <h2>{show[0].title}</h2>
        </div>
        <div className="show-details">
            <p>{show[0].details}</p>
        </div>
        <div className="show-cards">
            
        </div>
    </div>
  )
}
