import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteHistoryItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItem

  const onDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="history-website">
        <img src={logoUrl} alt="domain logo" className="website-logo" />
        <p className="title">{title}</p>
        <a href={domainUrl} className="domain-url">
          {domainUrl}
        </a>
      </div>
      <button
        className="delete-icon-container"
        type="button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
