import { useState } from "react"
import SearchBar from "../elements/SearchBar"

export const Header = () => {
    const [name] = useState('John.D')
    return (
        <div className="mt-1 is-justify-between-horizontal">
            <div className="wd-70">
                <h1 className="mb-0">Hello, {name}</h1>
                <p className="fw-300">View and control your finances here!</p>
            </div>
            <div className="wd-30 mt10px">
                <div className="pull-right">
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}