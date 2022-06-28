import { useNavigate } from "react-router-dom"
import { useDataSourceContext } from '../context/DataSourceContext'
import { useFormDataContext } from '../context/FormDataContext'

function ImageCard({imgData}){

    const {dataSource: data, setDataSource} = useDataSourceContext()
    const {setFormData} = useFormDataContext()

    const navigateTo = useNavigate()

    function editData(id){
        setFormData(data.filter(item=>item.id===id)[0])
        navigateTo('/upload-image')
    }

    function deleteData(id){
        const filteredData = data.filter(item => item.id !== id)
        setDataSource(()=>[...filteredData])
    }


    const { id, imgSrc, title} = imgData
    return(
        <div key={id} className='card-container'>
            <img src={imgSrc} className='card-image' alt="Image not available"/>
            <p className="card-title">{title}</p>
            <div className="card-button_holder">
                <button className="card-button" onClick={()=>editData(id)}>Update</button>
                <button className="card-button" onClick={()=>deleteData(id)}>Delete</button>
            </div>
        </div>
    )
}

export default ImageCard;