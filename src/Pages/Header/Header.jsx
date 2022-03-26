import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={styles.background}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mt-5">
                            <div className="text-center text-white">
                                <h1 className='mt-5'>Beshoy Shawky</h1>
                                <h3 className='mt-2'>Mearn Developer</h3>
                                <button className='btn btn-transparent border border-info mt-5 text-uppercase  text-white'>contact me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default Header;