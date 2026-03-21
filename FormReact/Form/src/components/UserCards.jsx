
function UserCards({user}){
    return(

        <div className="card">

            <img src={user.image} alt="profile" className="profile-img" />

            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>
            <p>DOB: {user.dob}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default UserCards;