import { useRouter } from 'next/router'
import Link from "next/link"
import { sidebarData } from "../Data/sidebarData"

const Sidebar = () => {
    const router = useRouter()
    return (
        <>
            <div className="sidebar">
                <div><h2>Menu</h2></div>
                <ul>
                    {sidebarData.map(v =>
                        <li className={`${router.pathname === v.href && "active"}`}>
                            <Link href={v.href}>
                                <a className={`sidebar_link   mb-1 ${router.pathname === v.href && "text-white" || "text-dark shadow bg-white"}`}>{v.title}</a>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default Sidebar
