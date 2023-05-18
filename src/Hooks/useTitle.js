import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Spicy | ${title}`
    }, [title])
}

export default useTitle;