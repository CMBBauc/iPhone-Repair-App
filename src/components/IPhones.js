import './IPhones.css'

const IPhones = ({iphones}) => {

  const iPhoneContainer = document.getElementById("ip-co");
  const expandedIPhoneContainer = document.getElementById("ex-ip-co");


  const clickHandler = () => {
    iPhoneContainer.style.display = "none";
    expandedIPhoneContainer.style.display = "flex";
  }



  return (
    iphones?.map((iphone) => {
        return(
          <>
            <div
              onClick={clickHandler}
              id="ip-co"
              className='iphone-container'
            >
              <div className='text-container'>
                 <h1 className='iphone-name'>{iphone.name}</h1>
                 <div className='iphone-model'>{iphone.model}</div>
                <img alt="iPhone" className="iphone-image"  src={iphone.imgUrl} />
              </div>
            </div>
          </>
        )
    })
  )
}

export default IPhones