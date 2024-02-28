import { useState } from "react"
import { Header } from "../components/Header"
import { RightSide } from "../components/RightSide"
import { Barchart } from "../elements/Barchart"
import { CheckboxCustom } from "../elements/CheckboxCustom"
import { NavIcon } from "../elements/NavIcon"

import CCImage from "../assets/images/creditcard.png"
import CoinsImage from "../assets/images/coins.png"
import CustomSelect from "../elements/CustomSelect"
import PropTypes from 'prop-types'
import MicroChartImage from '../assets/images/line-chart.png'
import UserImage1 from '../assets/images/user-1.png'
import UserImage2 from '../assets/images/user-2.png'
import UserImage3 from '../assets/images/user-3.png'
import UserImage5 from '../assets/images/user-5.png'
import RadialImage from '../assets/images/chart-radial.png'

const BalanceStatistic = ({ total }) => {
    return (
        <>
            <small>Balance statistics</small>
            <h1 className="is-marginless">{total}</h1>
            <div className="is-horizontal-align mt5px h35px">
                <div className="img-coin">
                    <img src={CoinsImage} alt="Coin Image" />
                </div>
                <div className="total-balance">Your total balance</div>
            </div>
            <hr />
        </>
    )
}

const MicroStats = ({ percent }) => {
    return (
        <>
            <div className="is-horizontal-align gap10px">
                <div className="micro-chart">
                    <img src={MicroChartImage} alt="chart" />
                </div>
                <div className="micro-stats">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0858 22.9571C17.6087 22.9571 22.0858 18.4799 22.0858 12.9571C22.0858 7.43424 17.6087 2.95709 12.0858 2.95709C6.56297 2.95709 2.08582 7.43424 2.08582 12.9571C2.08582 18.4799 6.56297 22.9571 12.0858 22.9571Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.0858 12.9571L12.0858 8.95709L8.08582 12.9571" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.0858 16.9571V8.95709" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="stats">
                        {percent}%
                    </div>
                </div>
            </div>
            <div className="micro-font">Always see your earning updates</div>
        </>
    )
}

const ShoppingList = ({ itemCheckbox }) => {
    return (
        <>
            <p>List of items to buy</p>
            <div className="date-flex wd-60">
                <div className="left-date">
                    <h4 className="mb-0">02:00</h4>
                    <div className="micro-date">
                        Sat, August 12
                    </div>
                </div>
                <div className="relative top10px">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.27295 18.4915L15.2729 12.4915L9.27295 6.49152" stroke="#b1b6c5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="right-date">
                    <h4 className="mb-0">05:00</h4>
                    <div className="micro-date">
                        Sat, September 12
                    </div>
                </div>
            </div>

            <div className="is-justify-between-horizontal font-12 pt-1">
                <div>
                    <span className="span-grey-text">0/3</span>
                    Shopping list
                </div>
                <div className="add-item mr10px">
                    + Add an item
                </div>
            </div>
            <div className="checkbox-custom-items pt-1">
                {itemCheckbox.map((data, key) => (
                    <CheckboxCustom data={data} key={key} />
                ))}
            </div>
        </>
    )
}

const ChatComponent = () => {
    return (
        <>
            <p className="mb10px">Easther Howard</p>
            <div className="chat">
                <div className="own-chat mb10px">
                    <div className="box-text-own">
                        Are you ready?
                    </div>
                    <img src={UserImage1} alt="image1" />
                </div>

                <div className="other-chat">
                    <img src={UserImage5} alt="image2" />
                    <div className="box-text-other">
                        I have prepared everything
                    </div>
                </div>
            </div>
            <div className="chat-input clearfix">
                <input type="text" name="chat" id="chat" placeholder="Type your message" />
                <div className="chat-buttons">
                    <div className="icons">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_403_3352)">
                                <path d="M12 24C9.62663 24 7.30655 23.2962 5.33316 21.9776C3.35977 20.6591 1.8217 18.7849 0.913451 16.5922C0.00519943 14.3995 -0.232441 11.9867 0.230582 9.65892C0.693605 7.33115 1.83649 5.19295 3.51472 3.51472C5.19295 1.83649 7.33115 0.693605 9.65892 0.230582C11.9867 -0.232441 14.3995 0.00519943 16.5922 0.913451C18.7849 1.8217 20.6591 3.35977 21.9776 5.33316C23.2962 7.30655 24 9.62663 24 12C23.9966 15.1815 22.7312 18.2318 20.4815 20.4815C18.2318 22.7312 15.1815 23.9966 12 24ZM12 2.00001C10.0222 2.00001 8.08879 2.5865 6.4443 3.68531C4.79981 4.78412 3.51809 6.34591 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9971 9.34873 20.9426 6.80689 19.0679 4.93215C17.1931 3.05742 14.6513 2.00292 12 2.00001ZM17.666 15.746L16.336 14.252C15.1135 15.2813 13.5945 15.8936 12 16C10.4064 15.8937 8.88823 15.2821 7.66601 14.254L6.33401 15.746C7.92187 17.1025 9.91422 17.8951 12 18C14.0858 17.8951 16.0781 17.1025 17.666 15.746ZM10 11V10C10 9.46957 9.78929 8.96087 9.41422 8.58579C9.03915 8.21072 8.53044 8.00001 8.00001 8.00001C7.46957 8.00001 6.96086 8.21072 6.58579 8.58579C6.21072 8.96087 6.00001 9.46957 6.00001 10V11H10ZM14 10V11H18V10C18 9.46957 17.7893 8.96087 17.4142 8.58579C17.0391 8.21072 16.5304 8.00001 16 8.00001C15.4696 8.00001 14.9609 8.21072 14.5858 8.58579C14.2107 8.96087 14 9.46957 14 10Z" fill="#374957" />
                            </g>
                            <defs>
                                <clipPath id="clip0_403_3352">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_403_3194)">
                                <path d="M22.95 9.59982C22.7625 9.41235 22.5082 9.30703 22.243 9.30703C21.9779 9.30703 21.7236 9.41235 21.536 9.59982L10.644 20.5388C10.1797 21.0032 9.62853 21.3715 9.02188 21.6229C8.41524 21.8742 7.76503 22.0036 7.10838 22.0036C5.78221 22.0037 4.51033 21.477 3.57252 20.5393C2.63472 19.6016 2.10781 18.3298 2.10772 17.0037C2.10762 15.6775 2.63435 14.4056 3.57202 13.4678L14.121 2.87582C14.6851 2.32071 15.4457 2.01099 16.2371 2.01412C17.0285 2.01725 17.7866 2.33297 18.3463 2.89252C18.906 3.45208 19.2219 4.21012 19.2252 5.00153C19.2285 5.79294 18.919 6.5536 18.364 7.11782L7.81502 17.7098C7.62477 17.8921 7.37149 17.9938 7.10802 17.9938C6.84456 17.9938 6.59127 17.8921 6.40102 17.7098C6.21355 17.5223 6.10824 17.268 6.10824 17.0028C6.10824 16.7377 6.21355 16.4833 6.40102 16.2958L15.793 6.86082C15.9752 6.67222 16.076 6.41961 16.0737 6.15742C16.0714 5.89522 15.9662 5.64441 15.7808 5.459C15.5954 5.27359 15.3446 5.16842 15.0824 5.16615C14.8202 5.16387 14.5676 5.26466 14.379 5.44682L4.98702 14.8818C4.70839 15.1604 4.48737 15.4911 4.33657 15.8552C4.18578 16.2192 4.10816 16.6093 4.10816 17.0033C4.10816 17.3973 4.18578 17.7875 4.33657 18.1515C4.48737 18.5155 4.70839 18.8462 4.98702 19.1248C5.55864 19.6703 6.3184 19.9746 7.10852 19.9746C7.89864 19.9746 8.6584 19.6703 9.23002 19.1248L19.778 8.53182C20.696 7.59012 21.206 6.32467 21.1976 5.00959C21.1892 3.69451 20.663 2.4357 19.733 1.50584C18.803 0.575987 17.5441 0.0499642 16.229 0.0417243C14.914 0.0334843 13.6486 0.54369 12.707 1.46182L2.15802 12.0538C0.845201 13.3666 0.107666 15.1472 0.107666 17.0038C0.107666 18.8604 0.845201 20.641 2.15802 21.9538C3.47084 23.2666 5.25141 24.0042 7.10802 24.0042C8.96463 24.0042 10.7452 23.2666 12.058 21.9538L22.95 11.0178C23.0435 10.9249 23.1176 10.8144 23.1682 10.6927C23.2188 10.5711 23.2448 10.4406 23.2448 10.3088C23.2448 10.177 23.2188 10.0466 23.1682 9.9249C23.1176 9.80322 23.0435 9.69275 22.95 9.59982Z" fill="#374957" />
                            </g>
                            <defs>
                                <clipPath id="clip0_403_3194">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                    <button>Send now</button>
                </div>
            </div>
        </>
    )
}

const TrxList = ({ data }) => {
    return (

        <div className="trx-item is-justify-between-horizontal">
            <div className="trx-user">
                <img src={data.image} alt="image" />
                <div className="user">
                    <p>{data.name}</p>
                    <p className="date">{data.date}</p>
                </div>
            </div>
            <div className="trx-value">
                <p>{data.value}</p>
                <NavIcon type={`dotmenu`} />
            </div>
        </div>

    )
}

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

BalanceStatistic.propTypes = {
    total: PropTypes.string
}
MicroStats.propTypes = {
    percent: PropTypes.number
}
ShoppingList.propTypes = {
    itemCheckbox: PropTypes.array
}
TrxList.propTypes = {
    data: PropTypes.object
}