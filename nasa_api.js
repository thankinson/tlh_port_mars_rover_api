import { useState, useEffect } from 'react';
import './App.css';

const NASAapi = () =>{
    return (<div id="div-container">
            <div id="div-header">
                <h1>My Api call</h1>
            </div>
           
                <NasaApi />
      
            <div id="div-footer">
                    <h4>CN My First Api Call || Tom Hankinson</h4>
            </div>
     
    </div>)
};

const NasaApi = () => {
    // nasa api useState variable
    const [nasa, setNasa] = useState("")
    
    // error message useStae variable
    const [errorLog, setErrorLog] = useState({
        error: false,
        message: ""
    })

    // fetching the api
    const NasaCollect = async () =>{
        try {
        const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=W0rwSRjRqCPPn1QjC7rSUI6m3z9cxbAlgrhB5ntp");
        const nasaData = await response.json();
        console.log(nasaData)
        setNasa(nasaData)
    } 
        // catch teh error 
        catch(errorLog){
            console.log(errorLog)
            setErrorLog({error: true, message: errorLog.message})
    }
    };

    // useEffect(()=>{
    //     console.log(nasaData)
    //     NasaCollect()
    // }, [])

    // the html
    return(
        <div id="div-content">

            <div id="div-button">
                <button onClick={NasaCollect}>Click Here</button>
            </div>

            <div id="div-tital">
                    <h1>{nasa.title}</h1>
                </div>
                
            <div id="div-main-content">
 
                <div id="div-img">
                    <a href={nasa.hdurl} target="_blank"><img src={nasa.hdurl} alt={nasa.hdurl}/></a>
                </div>

                <div id="div-text">
                    <p>{nasa.explanation}</p>
                    {/* <ul>
                        <li>Coppyright: {nasa.copyright}</li>
                        <li>Image: <a href={nasa.hdurl} target="_blank">Click Here</a></li>
                    </ul> */}
                </div>

            </div>
        </div>
    );

}





export default NASAapi;