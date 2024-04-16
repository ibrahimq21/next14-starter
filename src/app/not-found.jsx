import Link from "next/link"

const NotFoundPage = ()=>{
    return (
        <div>
            <h2>Not Found</h2>
            <p>Sorry, the page you are looking for does not exist</p>
            <Link href="/">Go to home page</Link>
        </div>
        )
    }
export default NotFoundPage