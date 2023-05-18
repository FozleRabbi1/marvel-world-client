import { useEffect, useState } from "react"

const useToyDatas = ({sendData}) => {
    console.log(sendData)

    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/allToysDatas")
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    
    return [datas]
}
export default useToyDatas;