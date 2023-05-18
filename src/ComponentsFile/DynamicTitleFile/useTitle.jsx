import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Kidlo-Toys ${title}`;

    }, [title])
}

export default useTitle;