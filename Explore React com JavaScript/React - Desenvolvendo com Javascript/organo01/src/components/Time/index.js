import './Time.css'

const Time = (props) => {
    const corPrimaria = {borderBottomColor: props.corPrimaria}
    const corSecundaria = {backgroundColor: props.corSecundaria}

    return(
        <section className='time' style={corSecundaria}>
            <h3 style={corPrimaria}>{props.nome}</h3>
        </section>
    )
}

export default Time