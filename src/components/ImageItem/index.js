import './index.css'

const ImageItem = props => {
  const {eachImgObj, randomImageGenerator} = props
  const {thumbnailUrl, imageUrl} = eachImgObj

  const onClickEventTrigger = () => {
    randomImageGenerator(imageUrl)
  }

  return (
    <li className="imageEle">
      <button type="button">
        <img src={thumbnailUrl} alt="thumbnail" onClick={onClickEventTrigger} />
      </button>
    </li>
  )
}

export default ImageItem
