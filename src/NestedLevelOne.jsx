import { useContext } from 'react'
import NestedLevelTwo from './NestedLevelTwo'
import { DataContext } from './context/DataContext'


export default function NestedLevelOne() {
    const { names } = useContext(DataContext)
    
    return (
        <ul>
            {names.map(name => {
                return <NestedLevelTwo name={name} key={name}/>
            })}
        </ul>
    )
}