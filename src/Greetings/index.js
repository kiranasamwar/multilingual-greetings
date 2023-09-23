import './index.css'

const Greetings = props => {
  const {languageDetails} = props
  const {imageAltText, imageUrl} = languageDetails

  return (
    <>
      <li className="list">
        <img src={imageUrl} alt={`${imageAltText}`} className="image" />
      </li>
    </>
  )
}

export default Greetings
