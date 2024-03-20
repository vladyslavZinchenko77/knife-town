



const  Logo = (): JSX.Element =>{
    return(
        <a href="#" style={{textDecoration:'none'}}>
            <div style={{display: 'flex'}}>
                <p style={{color: '#fff', padding:'5px 0 5px 0', textTransform: 'uppercase', fontWeight:'bold'}}>Knife</p>
                <p style={{color: '#333', padding:'5px 0 5px 0', backgroundColor: '#fff',textTransform: 'uppercase',fontWeight:'bold'}}>Town</p>
            </div>
        </a>
            
    )
}

export default Logo;