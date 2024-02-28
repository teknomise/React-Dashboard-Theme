import { NavIcon } from "../elements/NavIcon"
import StoreImage from "../assets/images/store.png"
import PayImage from "../assets/images/payhospital.png"
import TicketImage from "../assets/images/tickets.png"
import { useState } from "react"
import CrownImage from "../assets/images/crown.png"

const ExpensesIncome = () => {
    return (
        <>
            <h4 className="fw-300">Expenses and income</h4>
            <div className="expenses-income is-justify-between-horizontal">
                <div className="vs-item text-left">
                    <p>Expenses</p>
                    <h4>75%</h4>
                    <span>5.653</span>
                </div>
                <div className="vs">
                    <p>|</p>
                    <p>VS</p>
                    <p className="relative bottom3px">|</p>
                </div>
                <div className="vs-item text-right">
                    <p>Income</p>
                    <h4>40%</h4>
                    <span>2.656</span>
                </div>
            </div>
            <div className="bar-vs mt10px mb10px">
                <div className="indicator expenses"></div>
                <div className="indicator income"></div>
            </div>
        </>
    )
}

const LatestSpending = () => {
    const [spending] = useState([
        {
            image: StoreImage,
            title: "Online Store",
            date: "May 30, 2023 at 08:00 pm"
        },
        {
            image: PayImage,
            title: "Pay Hospital",
            date: "May 28, 2023 at 10:00 pm"
        },
        {
            image: TicketImage,
            title: "Tickets",
            date: "May 10, 2023 at 12:00 pm"
        }
    ])
    return (
        <>
            <div className="is-justify-between-horizontal">
                <h4 className="fw-300">Latest spending</h4>
                <div className="icon">
                    <NavIcon type={`dotmenu`} />
                </div>
            </div>

            <div className="list-spending">
                {spending.map((val, key) => (
                    <div className="spending-item mb10px" key={key}>
                        <img src={val.image} alt={val.title} />
                        <div className="desc">
                            <div className="title">{val.title}</div>
                            <div className="date">{val.date}</div>
                        </div>
                    </div>
                ))}
            </div>

            <a href="#" className="link-view">
                <span>View all</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0001 11.9999C17.9952 11.4738 17.7832 10.9708 17.4101 10.5999L13.1201 6.29995C12.9327 6.1137 12.6792 6.00916 12.4151 6.00916C12.1509 6.00916 11.8974 6.1137 11.7101 6.29995C11.6163 6.39291 11.5419 6.50351 11.4912 6.62537C11.4404 6.74723 11.4143 6.87794 11.4143 7.00995C11.4143 7.14196 11.4404 7.27266 11.4912 7.39452C11.5419 7.51638 11.6163 7.62698 11.7101 7.71995L15.0001 10.9999H5.00006C4.73484 10.9999 4.48049 11.1053 4.29295 11.2928C4.10542 11.4804 4.00006 11.7347 4.00006 11.9999C4.00006 12.2652 4.10542 12.5195 4.29295 12.707C4.48049 12.8946 4.73484 12.9999 5.00006 12.9999H15.0001L11.7101 16.2899C11.5218 16.4769 11.4154 16.731 11.4145 16.9964C11.4136 17.2618 11.5181 17.5166 11.7051 17.7049C11.892 17.8932 12.1462 17.9996 12.4115 18.0005C12.6769 18.0014 12.9318 17.8969 13.1201 17.7099L17.4101 13.4099C17.7856 13.0366 17.9978 12.5295 18.0001 11.9999Z" fill="#374957" />
                </svg>
            </a>
        </>
    )
}

const GotoPremium = () => {
    return (
        <>
            <p className="text-center">Go to premium</p>
            <div className="crown-img">
                <img src={CrownImage} alt="Crown Image" />
            </div>
            <div className="upgrade">
                <h5>Need more features?</h5>
                <p>Update your account to premium to get more features</p>
                <button className="mt-1 bg-primary button button-large">Get now</button>
            </div>
        </>
    )
}

export const RightSide = () => {
    return (
        <div className="right-side p-1-5 bg-white">
            <div className="card-2 bd-grey">
                <ExpensesIncome />
            </div>
            <div className="card-2 bd-grey mt-1-5">
                <LatestSpending />
            </div>
            <div className="card-2 bd-grey mt-1-5">
                <GotoPremium />
            </div>
        </div>
    )
}