import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import styles from './Footer.module.css'

const Footer = () => {
    return(
    <>
    <footer className={styles.footer}>
        <Container>&copy; Yuki IX </Container>
    </footer> 
    </>)
}

export default Footer