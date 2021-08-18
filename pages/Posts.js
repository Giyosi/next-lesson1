import { useEffect } from "react"
import { useSelector } from "react-redux"
import { setPosts } from "../Redux/Actions/usersAction"
import { dispatch } from "../Redux/Reducer/Store"


const Posts = () => {

    useEffect(() => {
        setPosts(dispatch)
    }, [])

    const data = useSelector(state => state.usersReducer.data);
    // const error = useSelector(state => state.global.error);
    // const loading = useSelector(state => state.global.loading);

    return (
        <div>
            <h1>Posts</h1>
            {data.map((v, i) => {
                <p>{v.title}</p>
            })}
        </div>
    )
}

export default Posts
