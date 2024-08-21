import './Collapse.css'
import CollapseCard from './CollapseCard/CollapseCard';
import CollapsePhoto from './CollapsePhoto/CollapsePhoto';
import CollapseText from './CollapseText/CollapseText';
const Collapse = () => {
  return (
    <div className='collapse'>
      <CollapseCard />
      <CollapsePhoto />
      <CollapseText />
    </div>
  )
}

export default Collapse
