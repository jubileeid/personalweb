import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '/components/Layout'

const aboutus = () => (
    <div>
        <Layout>        
        <h1>Halaman About Us
       <br/>
        </h1>

        <div className="card" style={{ width: '18rem' }}>
            <Image 
                src="/images/you.png"
                height={400}
                width={400}
                alt="Sampul Youtube"
             />        
            <div className="card-body">
                <p className="card-text">Sampul Menjadi Youtuber A-Z</p>
            </div>
        </div>
    
    

    </Layout>
    </div>
)

export default aboutus

