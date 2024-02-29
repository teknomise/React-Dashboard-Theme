import { useState } from "react"
import { Header } from "../components/Header"
import { RightSide } from "../components/RightSide"
import { Barchart } from "../elements/Barchart"
import { NavIcon } from "../elements/NavIcon"
import CustomSelect from "../elements/CustomSelect"
import { BalanceStatistic } from "../components/BalanceStatistic"
import { MicroStats } from "../components/MicroStats"
import { ShoppingList } from "../components/ShoppingList"
import { ChatComponent } from "../components/ChatComponent"
import { TrxList } from "../components/TrxList"
import CCImage from "../assets/images/creditcard.png"
import UserImage2 from '../assets/images/user-2.png'
import UserImage3 from '../assets/images/user-3.png'
import UserImage5 from '../assets/images/user-5.png'
import RadialImage from '../assets/images/chart-radial.png'

const HomePage = () => {
    const [filter] = useState(["All", "Revenue", "Profi"])

    const [chartData] = useState([{
        name: 'Net Profit',
        data: [60, 30, 30, 25, 20],
        color: "#545CDD"
    }, {
        name: 'Revenue',
        data: [50, 25, 20, 18, 10],
        color: "#C7CAFB"
    }])

    const [axisCategories] = useState(['Oct', 'Nov', 'Dec', 'Jan', 'Feb'])
    const [totalBalance] = useState('$564')
    const [percent] = useState(6)
    const [itemCheckbox] = useState([
        {
            value: "macbook",
            label: "Macbook"
        },
        {
            value: "bicycle",
            label: "Bicycle"
        },
        {
            value: "motorcycle",
            label: "Motorcycle"
        },
        {
            value: "iphone14promax",
            label: "Iphone 14 pro max"
        }
    ])

    const [dataTransaction] = useState([
        {
            image: UserImage2,
            name: 'Bressie Copper',
            date: '02 July 2023',
            value: '-$3.000'
        },
        {
            image: UserImage3,
            name: 'Guy Hawkins',
            date: '02 July 2023',
            value: '-$1.970'
        },
        {
            image: UserImage5,
            name: 'Floyd Miles',
            date: '02 July 2023',
            value: '-$5.000'
        }
    ])

    return (
        <div className="row">
            <div className="col-8-5 py-02">
                <Header />

                <div className="content-home">
                    <div className="row mt-1-5">
                        <div className="col-7">
                            <div className="card-1 card-1-height">
                                <div className="is-justify-between-horizontal flex-start">
                                    <div className="wd-30">
                                        <BalanceStatistic total={totalBalance} />
                                        <MicroStats percent={percent} />
                                    </div>
                                    <div className="wd-70">
                                        <div className="relative">
                                            <div className="is-right">
                                                <CustomSelect options={filter} />
                                            </div>
                                            <div className="relative bottom15px">
                                                <Barchart data={chartData} categories={axisCategories} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <img src={CCImage} alt="Credit Image" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="card-1 is-paddingless">
                                <div className="is-horizontal-align w-100">
                                    <div className="wd-60 p-1 bd-right">
                                        <ShoppingList itemCheckbox={itemCheckbox} />
                                    </div>
                                    <div className="wd-45 p-1">
                                        <ChatComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt10px">
                        <div className="col-8">
                            <div className="card-1 card-1-height">
                                <div className="is-justify-between-horizontal">
                                    <p>Last transaction</p>
                                    <div className="trx-list-order">
                                        <p className="text-underline">Newest</p>
                                        <p>Oldest</p>
                                    </div>
                                </div>
                                <div className="trx-data-list mt-1">
                                    {dataTransaction.map((value, key) => (
                                        <TrxList data={value} key={key} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card-1 card-1-height">
                                <div className="is-justify-between-horizontal mb-1">
                                    <p>Analytics</p>
                                    <div className="analytics">
                                        <NavIcon type={`dotmenu`} />
                                    </div>
                                </div>
                                <img src={RadialImage} alt="Radial Chart" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3-5">
                <RightSide />
            </div>
        </div>
    )
}

export default HomePage