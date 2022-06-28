import { useNavigate } from "react-router-dom";
import DisplayCards from "../components/DisplayCards";


function HomePage(){

    let navigateTo = useNavigate();

    function uploadHandler(){
        navigateTo("/upload-image")
    }

    return (
        <div  className='parent-container flex-column'>
            <button onClick={uploadHandler}>Upload Photo</button>
            <DisplayCards />
        </div>
    )
}

export default HomePage;