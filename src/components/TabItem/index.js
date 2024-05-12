import './index.css'

const TabItem = props => {
  const {eachTab, onClickToggleTabItem, tabItem} = props
  const {tabId, displayText} = eachTab

  const className = tabItem === tabId ? 'highlight' : ''

  const onTabFunc = () => {
    onClickToggleTabItem(tabId)
  }

  return (
    <li onClick={onTabFunc}>
      <button type="button" className={`tabItemele ${className}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
