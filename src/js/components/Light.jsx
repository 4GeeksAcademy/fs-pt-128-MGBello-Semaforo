export const Light = ({ id, nameClass, active, onclick }) => {

    const className = `${nameClass} ${active ? 'active' : ''}`

    return (
        <div className={`${className} mt-2`} onClick={() => onclick(id)}></div >

    )
}