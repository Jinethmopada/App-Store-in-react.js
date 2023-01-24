import './index.css'

const AppItem = props => {
  const {appItems} = props
  const {appName, imageUrl} = appItems
  return (
    <ul className="app-items">
      <li className="list">
        <img className="app-img" src={imageUrl} alt={appName} />
        <p className="app-name">{appName}</p>
      </li>
    </ul>
  )
}

export default AppItem
