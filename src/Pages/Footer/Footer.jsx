import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTwitter } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (<>
        <div className={styles.background}>
            <div className="row">
                <div className="col-md-4">
                    <div className="text-center text-white mt-4">
                        <h6>GET inn tpuch</h6>
                        <p>bishohany4@gmail.com</p>
                        <p>+752842</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center text-white">
                        <button className='btn btn-transparent border border-info mt-5 text-uppercase  text-white'>contact me</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center text-white mt-5">
                        <div>
                            <FontAwesomeIcon icon={faCoffee} />
                        </div>

                        <span>copyRights2019 kr</span>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Footer;