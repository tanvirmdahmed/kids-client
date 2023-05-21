import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Kids | ${title}`
    }, [title])
}

export default useTitle;