import './index.css'

const ButtonTabs = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {id, buttonText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const ActiveTabButtons = isActive ? 'active-tab-btn' : ''

  return (
    <li className="li">
      <button
        type="button"
        className={`tab-btn ${ActiveTabButtons}`}
        onClick={onClickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonTabs
