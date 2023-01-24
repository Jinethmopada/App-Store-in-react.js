import './index.css'

const TabItem = props => {
  const {tabItems, updateTabId} = props
  const {tabId, displayText} = tabItems

  const onClickTabItem = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-items">
      <button className="tab-btn" type="button" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
