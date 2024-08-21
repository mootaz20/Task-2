import './CounterContainer.css'
import Counter from './Counter/Counter'
const CounterContainer = () => {
  return (
    <div className='counterContainer'>
        <div className='container'>
            <Counter number={'34'} title={'Buildings Finished Now'} />
            <Counter number={'12'} title={'Years Experience'} />
            <Counter number={'24'} title={'Awwards Won 2023'} />
        </div>
    </div>
  )
}

export default CounterContainer
