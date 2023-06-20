
import '../styles/ShowCase.css'
import '../data/data'
import { data } from 'autoprefixer'
export default function ShowCase() {
  return (
    <div className="show-main">
        <div className="show-title">
            {data.ShowCase[0].title}
        </div>
    </div>
  )
}
