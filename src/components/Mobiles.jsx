import Mobile from "./Mobile"
import '../styles/mobiles.css'

function Mobiles() {
  return (
    <div className='mobile-main'>
        <Mobile className={'mobile1'} height={'512'} width = {'230'} borderRadius ={'10'} background ={'rgb(191, 191, 191)'} />
        <Mobile className={'mobile1'} height={'564'} width = {'270'} borderRadius ={'10'} background ={'rgb(191, 191, 191)'} />
        <Mobile className={'mobile1'} height={'512'} width = {'230'} borderRadius ={'10'} background ={'rgb(191, 191, 191)'} />
        {/* <Mobile className={'mobile2'} height={564} width = {290} borderRadius ={10} background ={'white'} /> */}
        {/* <Mobile className={'mobile3'} height={512} width = {264} borderRadius ={10} background ={'white'} /> */}
        
    </div>
  )
}

export default Mobiles