// Write your code here.
import './index.css'

const BannerCard = props => {
  const {banner} = props
  const {headerText, description, className} = banner
  return (
    <div className="className">
      <li className={className}>
        <h1 className="header">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button">Show More</button>
      </li>
    </div>
  )
}
export default BannerCard
