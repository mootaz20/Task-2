import './Featured.css'
import FeaturedCard from './FeaturedCard/FeaturedCard'
import FeaturedPhoto from './FeaturedPhoto/FeaturedPhoto'
import FeaturedText from './FeaturedText/FeaturedText'

const Featured = () => {
  return (
    <div className="featured">
        <div className='container'>
            <FeaturedPhoto />
            <FeaturedText />
            <FeaturedCard />
        </div>
    </div>
  )
}

export default Featured
