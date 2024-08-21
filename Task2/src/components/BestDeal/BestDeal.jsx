import './BestDeal.css'
import Collapse from './Collapse/Collapse'

const BestDeal = () => {
  return (
    <div className='bestDeal'>
      <div className="container">
        <div className='text'>
            <div className='textContent'>
                <p><span>|</span> Best Deal</p>
                <h6>Find Your Best Deal Right Now!</h6>
            </div>
            <div className='buttons'>
                <button>Appartment</button>
                <button>Villa House</button>
                <button>Penthouse</button>
            </div>
        </div>
        <div>
            <Collapse />
        </div>
      </div>
    </div>
  )
}

export default BestDeal
