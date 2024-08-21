import './CollapseCard.css'

const CollapseCard = () => {
  return (
    <div className='collapseCard'>
      <div className='shadow'>
        <ul>
            <li>
                <p>Total Flat Space <strong>185 m2</strong></p>
            </li>
            <li>
                <p>Floor number <strong>26th</strong></p>
            </li>
            <li>
                <p>Number of rooms <strong>4</strong></p>
            </li>
            <li>
                <p>Parking Available <strong>Yes</strong></p>
            </li>
            <li>
                <p>Payment Process <strong>Bank</strong></p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default CollapseCard
