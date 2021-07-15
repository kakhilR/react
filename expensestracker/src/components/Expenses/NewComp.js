const NewComp =(props) => {
    return(
        <div>
            <h2>{console.log(props.items[0].title)}</h2>
            <h2>{console.log(props.amount)}</h2>
            <h2>{console.log(props.title)}</h2>
        </div>
    )
}

export default NewComp