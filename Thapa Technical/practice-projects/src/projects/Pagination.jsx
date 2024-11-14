import { useEffect, useState } from "react"

export const Pagination = () => {


    const [data, setData] = useState([])

    const [curPage, setCurPage] = useState(1)
    const recordsPerPage = 4
    const lastIndex = curPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = data.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(data.length / recordsPerPage)
    const numbers = [...Array(totalPages + 1).keys()].slice(1)


    const API = "https://fakestoreapi.com/products"

    useEffect(() => {
        const fetchData = () => {
            fetch(API)
                .then((res) => res.json())
                .then((data) => setData(data))
        }
        fetchData()
    }, [])

    const prevPage =  () => {
        if(curPage !== 1){
            setCurPage(curPage - 1)
        }
    }
    const changeCurPage = (index) => {
        setCurPage(index)
    }
    const nextPage = () => {
        if(curPage !== totalPages){
            setCurPage(curPage + 1)
        }
    }

    return (
        <div>
            <ul className="records-list">
                {
                    records.map((curElem, index) => (
                        <li key={index} className="list">
                            <img src={curElem.image} alt=""/>
                        </li>
                    ))
                }
            </ul>
            <nav className="pagination">
                <ul>
                    <li>
                        <a href="#" onClick={prevPage}>Prev</a>
                    </li>
                    {
                        numbers.map((num, index) => {
                            return (
                                <li key={index}>
                                    <a href="#" onClick={() => changeCurPage(num)} >{num}</a>
                                </li>
                            )
                        })
                    }
                    <li>
                        <a href="#" onClick={nextPage}>Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
