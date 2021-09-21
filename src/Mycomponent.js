import "./App.css";


const Mycomponent = () => {
  const txt= "Lorem Ipsum, sometimes \n referred to as 'lipsum', is the \n placeholder text used in design \n when creating content. It helps \n designers plan out where the \n content will sit"
  const srvc = "Service & Package"
  const itclear = "It clearly and beautifully captures your emotions- the joy, the laughter, the \n tears, you name it. Our pride is in offering the best shoots as we help you tell \n your story in photos."
  
  return (
    <> 
      <div className="rec1">
      <div className="mask">
      <div className="gabriel">
          <div className="home">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">{srvc}</a></li>
                <li><a href="#">Gallary</a></li>
                <li><a href="#">Package</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="group2">
          <div className="group1">
              <div className="apicture">A picture is worth a thousand words</div>
              <div className="itclearly">
                <p>{itclear}</p>
                <div className="rec2">
                <p className="viewg">View Gallary</p>
                </div>
              </div>
          </div>
          </div>       
      </div>
      </div>

      <div className="offsets">
        <div className="offset1"></div>
        <div className="offset2"></div>
        <div className="offset3"></div>
        <div className="offset4">
          <div className="about">About Us</div>
          <div className="lorem">{txt}</div>
        </div>
      </div>

      </div>

    </>
  );
}

export default Mycomponent;