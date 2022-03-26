const Card = (props) => {
    return (<>
        <div className="card" style={{ width: '18rem', height: '12rem',backgroundColor:props.value }}>
            <div className="card-body text-uppercase  text-dark d-flex justify-content-center align-items-center">
                <p className="card-text text-center fs-5 text-white ">
                    {props.title}
                </p>
            </div>
        </div>
    </>);
}

export default Card;