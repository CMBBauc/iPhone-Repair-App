
import './Home.css'

const Home = ({iphones}) => {

  const iPhoneContainer = document.getElementById("ip-co");
  const expandedIPhoneContainer = document.getElementById("ex-ip-co");


  const clickHandler = () => {
    iPhoneContainer.style.display = "none";
    expandedIPhoneContainer.style.display = "flex";
  }

  const exClickHandler = () => {
    expandedIPhoneContainer.style.display = "none";
    iPhoneContainer.style.display = "flex";
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
            <div
              onClick={exClickHandler}
              id="ex-ip-co"
              className='expanded-iphone-container'
            >
              <div className='expanded-text-container'>
                <h1 id="expanded-iphone-name" className='expanded-iphone-name'>{iphone.name}</h1>
                 <div className='expanded-iphone-model'>{iphone.model}</div>
                 <img alt="iPhone" className="expanded-iphone-image"  src={iphone.imgUrl} />
              </div>
              <div className='expanded-repairs-list'>
                <ul>
                  <li>Display</li>
                  <li>Battery</li>
                  <li>Rear Systems</li>
                </ul>
              </div>
            </div>
          </>
        )
    })
  )
}

export default Home