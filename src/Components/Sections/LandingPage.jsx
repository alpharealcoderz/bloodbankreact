import { Button, Carousel, message } from "antd"
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBloodType, getAllStates } from "../../redux/actions/constants";

const LandingPage=({ getBloodType, getAllStates })=>{

  
  useEffect(() => {
    getBloodType();
    getAllStates();
    
  }, []);
  useEffect(() => {

       window.location.hash.length>100&& fetch(window.location.hash.substring(24), {
method: 'GET', 
headers: {
  'Content-Type': 'application/json',
  'Authorization':`Bearer ${localStorage.getItem('registerToken')}`
      }}).then(()=>          message.success("Verified successfully", 10))
      .catch(()=>message.success('Verifiction Failed',10))



    }, []);
    
    return(
        <>
         <Carousel autoplay={true} pauseOnHover={false} >
    <div className="my_cr_div">
      <img className="my_crousel_img" src="https://th.bing.com/th/id/R.61b5ecd7e7359992db95dcab0a392474?rik=6JlC8CP1PWatZA&riu=http%3a%2f%2fcdn2.hubspot.net%2fhubfs%2f419889%2fdonate_blood.jpg&ehk=1VlAhXnjsp%2bYgg7RXzye5sr61OKB0JNTJ%2fWQNbileM4%3d&risl=&pid=ImgRaw&r=0" />
    <Link to="/home"><Button className="my_cr_btn" type="primary">Look for donors</Button></Link>

    </div>
    <div className="my_cr_div">
    <img className="my_crousel_img" src="https://wallpapercave.com/wp/wp4323463.jpg" />
    <Link to="/home"><Button className="my_cr_btn" type="primary">Look for donors</Button></Link>

    </div>
    <div className="my_cr_div">
    <img className="my_crousel_img" src="https://vistapointe.net/images/blood-donation-6.jpg" />
    <Link to="/home"><Button className="my_cr_btn" type="primary">Look for donors</Button></Link>

    </div>
    <div className="my_cr_div">
    <img className="my_crousel_img" src="https://post.healthline.com/wp-content/uploads/2020/09/Blood_Donation-1200x549-facebook-1200x628.jpg" />
    <Link to="/home"><Button className="my_cr_btn" type="primary">Look for donors</Button></Link>

    </div>
  </Carousel>
        </>
    )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  getBloodType,
  getAllStates,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
// export default LandingPage