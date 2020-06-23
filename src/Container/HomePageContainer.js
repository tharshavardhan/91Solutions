import  {useEffect,useState} from 'react'

 const  HomePageContainer = ({children,path}) => {
    const [values,setValues] = useState({
        loading : true,
        data : [],
        error: false
    })

    useEffect(() => {
     fetch(`https://api.spacexdata.com/v3/${path}`).then((res)=>res.json())
     .then((res)=>setValues({
         loading:false,
         error:false,
         data:res
     }))
     .catch((e)=>setValues({
        loading:false,
        error:true,
        data:[]
     }))
    
    }, [path])

    return children({
        ...values
    })
}


export default HomePageContainer