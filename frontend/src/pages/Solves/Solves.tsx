import axios from 'axios'
import React from 'react'
import { DownloadTableExcel } from 'react-export-table-to-excel';
import "./Solves.css"
import Calendar from 'react-calendar';
import { useParams } from 'react-router-dom';


function randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }


interface Solve {
    solve: string,
    date: Date,
    responsiblePerson: string
}

const BetterCallSaul: Solve[] = [
    {
        solve: 'reer',
        date: new Date('December 17, 2023 03:24:00'),
        responsiblePerson: "dfsfgfw"
    },
    {
        solve: 'fdwfdwfwe',
        date: randomDate(new Date(2012, 0, 1), new Date()),
        responsiblePerson: "dfsfgfw"
    },
    {
        solve: 'reer',
        date: randomDate(new Date(2012, 0, 1), new Date()),
        responsiblePerson: "dfsfgfw"
    },
    {
        solve: 'reer',
        date: randomDate(new Date(2012, 0, 1), new Date()),
        responsiblePerson: "dfsfgfw"
    },
    {
        solve: 'reer',
        date: randomDate(new Date(2012, 0, 1), new Date()),
        responsiblePerson: "dfsfgfw"
    },
    {
        solve: 'reer',
        date: randomDate(new Date(2012, 0, 1), new Date()),
        responsiblePerson: "dfsfgfw"
    },
]

const Solves: React.FC = () => {

    let { id } = useParams<string>()
    console.log(id)

    const refTable = React.useRef<HTMLTableElement>(null)

    const [AllSolves, setAllSolves] = React.useState<Solve[]>([])
    const [solves, setSolves] = React.useState<Solve[]>([])

    const [openCalendar, setOpenCalendar] = React.useState<boolean>(false)
    const [changeDate, onChangeDate] = React.useState<any>(new Date());


    const [search, setSearch] = React.useState<string>("")

    React.useEffect(() => {
        axios.get<Solve[]>("/")
            .then((response) => setSolves(response.data))
            .catch((error) => console.log(error))
        setSolves(BetterCallSaul) 
        setAllSolves(BetterCallSaul)
    }, [])

    React.useEffect(() => {
        axios.get<Solve[]>("/"+ search)
            .then((response) => setSolves(response.data))
            .catch((error) => console.log(error))
    }, [search])

    React.useEffect(() => {
        if (openCalendar) {
            setSolves(AllSolves.filter((item) => item.date.getFullYear() - changeDate.getFullYear() === 0 &&
                                item.date.getMonth() - changeDate.getMonth() === 0 &&
                                item.date.getDay() - changeDate.getDay() === 0 &&
                                item.date.getHours() - changeDate.getHours() <= 24))
        } else {
            setSolves(AllSolves)
        }
    }, [changeDate, openCalendar])

  return (
    <div className='container'>
        <DownloadTableExcel
            filename="SolvesTable"      
            sheet="Solves"
            currentTableRef={refTable.current}
        >
            
            <button> Export excel </button>

        </DownloadTableExcel>        
        <div className='search'>
            <input type="text" defaultValue={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
            <p className='dateSort' onClick={() => setOpenCalendar(prev => !prev)}>sort by date</p>
        </div>
        {openCalendar ? <Calendar onChange={onChangeDate} value={changeDate} /> : <></>}
        <div className='container-table'>
            <table ref={refTable} className=''>
                <thead>
                    <tr>
                        <th className='th'>Solve</th>
                        <th className='th'>date</th>
                        <th className='th'>responsiblePerson</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        solves.map((item) => {
                            return (
                                <tr>
                                    <td className='td'>{item.solve}</td>
                                    <td className='td'>{item.date.toDateString()}</td>
                                    <td className='td'>{item.responsiblePerson}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default Solves