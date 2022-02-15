import { useState, useEffect } from 'react';
import './App.css';

const MarsApp = () =>{
    return (<div id="div-container">
            <div id="div-header">
                <h1>Mars Rover API CALL</h1>
            </div>
           
                <MarsApi />
      
            <div id="div-footer">
                    <h4>CN My First Api Call || Tom Hankinson</h4>
            </div>
     
    </div>)
};

const MarsApi = () => {
    // nasa api useState variable
    const [mars, setMars] = useState("")

    // mars rover choice and mars solar day useStates
    const [marsRover, setMarsRover] = useState("")
    const [marsSol, setMarsSol] = useState("")
    
    // let marsImg = mars.img_src
    // const [marsImg, setMarsImg] = useState([])
    
    
    // error message useStae variable
    const [errorLog, setErrorLog] = useState({
        error: false,
        message: ""
    })
    // fetching the api
    const MarsCollect = async () =>{
        try {
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${marsRover}/photos?sol=${marsSol}&api_key=W0rwSRjRqCPPn1QjC7rSUI6m3z9cxbAlgrhB5ntp`);
        const marsData = await response.json();
        console.log(marsData)
        setMars(marsData)
        // setMarsImg(marsData.img_src)
    } 
        // catch the error 
        catch(errorLog){
            console.log(errorLog)
            setErrorLog({error: true, message: errorLog.message})
       }
    };

    // useEffect(()=>{
    //     console.log(mars)
    //     MarsCollect()
    // }, [])




    return(
        <div id="div-content">

   

            <div id="div-mars-tital">
                    <h2>Select your rover</h2>
                    <h2>Enter Solar Day num</h2>
            
                </div>
                
            <div id="div-main-content">
 
                <div id="div-img">
                    {/* <img src={mars.img_src}/> */}
                    {/* {marsImg.map((imgMars) => {return <img src={imgMars} />} )} */}
                    {/* {marsImg.map((images)=> {return <img src={images[0]} />})} */}
                    <img src={mars.img_src} />
                </div>
                
                {/* Click on a rover button to set your Mars Rover - variable: marsRover */}

                <div id="div-text">
                    <div id="div-rover"> 
                        <button onClick={() =>setMarsRover("curiosity")}>Curiosity Rover</button>
                        <button onClick={() =>setMarsRover("opportunity")}>Opportunity Rover</button>
                        <button onClick={() =>setMarsRover("spirit")}>Spirit Rover</button>
                    </div>
                    
                    {/* Input a number of Sol day for the rover and it will bring back images from that Solar day */}
                    <div id="div-sol"><input type="text" placeholder='Input Sol Day Num' onChange={(event)=> setMarsSol(event.target.value) }  /></div>
                    
                    <div id="div-button">
                        <button onClick={MarsCollect}>Get Photos</button>
                    </div>
                </div>

            </div>
        </div>
    );

}





export default MarsApp;