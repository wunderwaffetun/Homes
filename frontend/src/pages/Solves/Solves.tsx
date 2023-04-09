import axios from 'axios'
import React from 'react'
import { DownloadTableExcel } from 'react-export-table-to-excel';
import "./Solves.css"
import Calendar from 'react-calendar';


function randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

interface ISolves {
    id: number
}

interface Solves {
    solve: string,
    date: Date,
    responsiblePerson: string
}

const BetterCallSaul: Solves[] = [
    {
        solve: 'reer',
        date: randomDate(new Date(2012, 0, 1), new Date()),
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

const Solves: React.FC<ISolves> = ({ id }) => {

    const refTable = React.useRef<HTMLTableElement>(null)

    const [solves, setSolves] = React.useState<Solves[]>([])

    const [openCalendar, setOpenCalendar] = React.useState<boolean>(false)
    const [changeDate, onChangeDate] = React.useState<any>(new Date());


    const [search, setSearch] = React.useState<string>("")

    React.useEffect(() => {
        axios.get<Solves[]>("/" + id)
            .then((response) => setSolves(response.data))
            .catch((error) => console.log(error))
        setSolves(BetterCallSaul)    
    }, [])

    React.useEffect(() => {
        axios.get<Solves[]>("/" + id + search)
            .then((response) => setSolves(response.data))
            .catch((error) => console.log(error))
    }, [search])

    React.useEffect(() => {
        console.log(changeDate)
    }, [changeDate])

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
                                    <td className='td'>{item.date.getDate()}</td>
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