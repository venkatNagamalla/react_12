import './index.css'

const Emojis = props => {
  const {emojiDetails, onEmojiClick} = props
  const {name, imageUrl} = emojiDetails

  const onClickEvent = () => {
    onEmojiClick()
  }

  return (
    <li className="list-element">
      <button type="button" onClick={onClickEvent}>
        <img className="emoji" src={imageUrl} alt={name} />
        <h1 className="name">{name}</h1>
      </button>
    </li>
  )
}

export default Emojis
