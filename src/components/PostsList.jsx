import Posts from "./Posts";
function PostsList() {
    return (
        <main>

            <Posts author="Author 1" body="This is the body of Post 1" />
            <Posts author="Author 2" body="This is the body of Post 2" />
        </main>
    )
}
export default PostsList;