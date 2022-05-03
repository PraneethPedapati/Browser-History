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
        <div className="website-info">
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          className="delete-icon-container"
          type="button"
          onClick={onDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
