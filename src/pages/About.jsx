import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png'

const About = () => {
    const navigate = useNavigate();
    const changePage = () => {
        navigate('/generator')
    }
    return (
        <section className="p-5 p-lg-0 pt-5 text-center text-sm-start" style={{marginTop: '50px'}}>
        <div className="container">
            <div className="d-lg-flex align-items-center justify-content-between">
                <div>
                    <h1 className="text-dark">Написание <span className="text-primary">
                    текстов будущего 
                    </span> у вас в кармане</h1>
                    <p className="lead my-4 text-dark">
                    Наша система генерирует тесты для разной аудитории.
                    </p>
                    <button className="btn btn-primary btn-lg" onClick={changePage}>Generate!</button>
                </div>
                <img className="img-fluid w-20 d-none d-sm-block" src={logo} alt=""/>
            </div>
        </div>
    </section>
    )
}
export default About