import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Navbar2 from './Navbar2';
import axios from 'axios';
import {Row,Col,Card,Button} from 'react-bootstrap';
import '../css/Dashboard.css';
import {motion} from 'framer-motion';
function Dashboard(){
    const [responseObj,setResponseObj]=useState("");
    const {RegEmail}=useParams();
    useEffect(()=>{
        console.log('RENDERED');
        fetchdata(); 
    },[]);
    async function fetchdata(){
        const url="http://localhost:3003/user/dashInfo/"+RegEmail;
        await axios.get(url).then((response)=>{
            setResponseObj(response.data[0]);
        })
        .catch((err)=>{
            console.error(err);
            if(err.name==='Error'){
                window.location.reload();
                window.location.href='/';
            };
        })
 
    }
    async function doRoutePostMed(){
        const {city,homestate}=responseObj;
        window.location.reload();
        window.location.href="/PostMed/"+RegEmail+"/"+city+"/"+homestate;
    }
    async function doRouteMedicineManager(){
        window.location.reload();
        window.location.href="/Medman/"+RegEmail;
    }
    async function doUpdateProfile(){
        window.location.reload();
        window.location.href="/updateProfile/"+RegEmail;
    }
    async function doRouteSearchMed(){
        window.location.reload();
        window.location.href='/searchMed';
    }
 
    return (
        <motion.div exit={{opacity:0}} animate={{opacity:1}} initial={{opacity:0}}>
        <Navbar2></Navbar2>
        <div className='container-dash'>
        <h1 className='dash_header'>DASHBOARD</h1>
        <div className='main_info'>
            <Row>
                <Col md={5} className='image_dash'>
                <center><div className="profilePic_dash">
                    <img src={`../uploads/${responseObj.ProfilePic}`} alt="PROFILE PIC" width="100%" height="100%" style={{borderRadius:"50%"}}></img>
                </div></center>
                </Col>
                <Col md={6} className='info-dash'>
                    <h2 id="heading_info"><u>Your Info</u></h2>
                    <p className="info"><span className="keyyy">NAME:</span>{responseObj.username}<br></br>
                    <span className="keyyy">EMAIL:</span>{responseObj.RegEmail}<br></br>
                    <span className="keyyy">MOBILE:</span>{responseObj.mobile}<br></br>
                    <span className="keyyy">GENDER:</span>{responseObj.gender}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyyy">BLOOD GRP:</span> {responseObj.bloodGrp}<br></br>
                    <span className="keyyy">ADDRESS:</span>{responseObj.address}<br></br>
                    <span className="keyyy">CITY:</span>{responseObj.city}<br></br>
                    <span className="keyyy">STATE:</span>{responseObj.homestate}<br></br>
                    <Button variant="info" className="btn3" onClick={doUpdateProfile}>UPDATE PROFILE</Button>
                    </p>
                </Col>
            </Row>
            <Row style={{marginTop:"10px"}}>
                <Col md={4} className='test'>
                    <Card className="cardd">
                    <Card.Header as="h5" style={{fontWeight:"800"}}>POST MEDICINE</Card.Header>
                    <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="info" onClick={doRoutePostMed} style={{width:'100%'}}>POST</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='test2'>
                <Card className="cardd">
                    <Card.Header as="h5" style={{fontWeight:"800"}}>MEDICINE MANAGER</Card.Header>
                    <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="info" onClick={doRouteMedicineManager} style={{width:'100%'}}>MANAGE</Button>
                    </Card.Body>
                    </Card> 
                </Col>
                <Col md={4} className='test'>
                <Card className="cardd">
                    <Card.Header as="h5" style={{fontWeight:"800"}}>SEARCH MEDICINE</Card.Header>
                    <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="info" onClick={doRouteSearchMed} style={{width:'100%'}}>SEARCH</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
        </div>
        </motion.div>
    )
}
export default Dashboard;