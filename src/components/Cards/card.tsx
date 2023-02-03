const styles ={
    primary:{
        background: "rgba(185, 128, 6, 0.2)"
    }
}
function Card() {
    return (
        <div className="card">
            <div className="card-horizontal">
                <div className="img-square-wrapper">
                    <img className="" src="https://cdn.worldvectorlogo.com/logos/vercel.svg" alt="Card image cap" />
                </div>
                <div className="card-body" style={styles.primary}>
                    <h4 className="card-title">Nombredaadsa App</h4>
                    <p className="card-text">Email: asdasdaasada@gmail.com</p>
                </div>
            </div>
            <div className="card-footer bg-dark">
                <div className="buttons">
                    <button  className="btn btn-primary" >Enviar password</button>
                    <button  className="btn btn-info">Change password</button>
                </div>
                <small className="text-white">Ultima vez modificado: fecha de actualizacion</small>
            </div>
        </div>
    );
};
export default Card;