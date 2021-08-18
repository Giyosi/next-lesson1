import { getPosts } from "../../Api"
import { dispatch } from "../Reducer/Store";
import { SET_POSTS } from "../Reducer/type";

export const setPosts = async () => {
    const res = await getPosts();

    if (res.success) {
        const action = { type: SET_POSTS, payload: res.data };
        dispatch(action);
    } else {
        console.error(Error);
    }
}