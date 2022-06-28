import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { useDataSourceContext } from '../context/DataSourceContext'
import { useFormDataContext } from '../context/FormDataContext'

function UploadForm( ){

    const { setDataSource } = useDataSourceContext()
    const { formData, setFormData } = useFormDataContext()

    let navigateTo = useNavigate();
    
    function submitHandler(e){
        e.preventDefault()
        setDataSource(prev => [...prev.filter(item=>item.id!==formData.id), formData])
        setFormData({id: uuid(), imgSrc: '', title: '', description:'', tags:''})
        navigateTo('/')
    }
    
    return(
        <form className="parent-container form-container" onSubmit={(e)=>{submitHandler(e)}}>
            <div className="form-item">
                <input type="file" placeholder={formData.imgSrc} onInput={(e)=>setFormData(prev => ({...prev, imgSrc:URL.createObjectURL(e.target.files[0])}))}>
                </input>
            </div>
            <div className="form-item">
                <label>Title : </label><input type="text" value={formData.title} onInput={(e)=>setFormData(prev => ({...prev, title:e.target.value}))}></input>
            </div>
            <div className="form-item">
                <label>Description : </label><textarea value={formData.description} onInput={(e)=>setFormData(prev => ({...prev, description:e.target.value}))}></textarea>
            </div>
            <div className="form-item">
                <label style={{verticalAlign:"center"}}>Tags : </label><input type="text" value={formData.tags} onInput={(e)=>setFormData(prev => ({...prev, tags:e.target.value}))}></input>
            </div>
            <div className="mg-1 center">
                <input type="submit"></input>
            </div>
        </form>
    )
}

export default UploadForm;