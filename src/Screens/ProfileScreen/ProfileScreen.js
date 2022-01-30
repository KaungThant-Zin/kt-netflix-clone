import Nav from '../../Components/Nav/Nav';
import "./ProfileScreen.css"
import { auth } from '../../firebase';
const ProfileScreen = ({ user }) => {

    const signOutHandle = () => {
        auth.signOut();
    }

    return (
        <div className="profile-screen">
            <Nav />
            <div>{user.email}</div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br />
            <button onClick={signOutHandle}>Sing out</button>
        </div>
    )
}

export default ProfileScreen
