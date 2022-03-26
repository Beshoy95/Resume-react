import styles from './Skills.module.css'
import ProgressBar from './../../components/ProgressBar/ProgressBar';

const Skills = () => {
    return (<>
        <div className={styles.background}>
            <div className='container'>

                <div className="row">
                    <div className='col-md-8 mx-auto'>
                        <h2 className='text-capitalize py-5 text-center text-white fs-2'>skills</h2>
                        <div className='text-center text-white'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illum soluta veniam temporibus voluptate aspernatur labore quae sapiente eum unde, saepe cum nam id libero voluptatem deserunt quia aliquid similique maiores laboriosam ipsam numquam voluptatibus porro ipsum?.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className='col-md-6 mx-auto mt-5 text-center'>
                        <p className='text-uppercase  mt-5 text-white fs-5 '>my focus</p>
                        <div></div>
                        <div className='text-white'>
                            <p>UI/UX Design</p>
                            <p>Responsive Design</p>
                            <p>Web Design</p>
                            <p>Mobile App Design</p>
                        </div>
                    </div>
                    <div className='col-md-6 mx-auto'>
                        <div className='mt-5'>
                            <div >
                                <ProgressBar title="HTML" value="95%" />
                            </div>
                            <div>
                                <ProgressBar title="Css" value="75%" />
                            </div>
                            <div>
                                <ProgressBar title="Javascript" value="80%"  />
                            </div>
                            <div >
                                <ProgressBar title="React" value="60%"  />
                            </div>
                            <div >
                                <ProgressBar title="Photoshop" value="75%"  />
                            </div>
                            <div >
                                <ProgressBar title="Adobe XD" value="85%"  />
                            </div>
                            <div >
                                <ProgressBar title="Node.js" value="60%" />
                            </div>
                            <div >
                                <ProgressBar title="WordPress" value="50%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Skills;