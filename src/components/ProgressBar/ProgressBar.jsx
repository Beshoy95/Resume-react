const ProgressBar = (props) => {
    return (
        <>
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <p className="text-white ">{props.title}</p>
                    </div>
                    <div className="col-md-10">
                        <div className="bg-dark">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: props.value }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>);
}

export default ProgressBar;