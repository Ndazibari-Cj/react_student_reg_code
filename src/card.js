import Profile from './Assets/Profile.jpg';


function Card() {
    return(
        < div className='card'>
        <img src={Profile.jpg} alt="My card" className='pro'></img>
        <h3>Ndazibari</h3>
        <p> I am a student of Veritas University in the department of Software Engineering.</p>
        </div> 
    );  
}
export default Card;