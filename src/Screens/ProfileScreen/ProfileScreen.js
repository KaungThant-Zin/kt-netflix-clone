import Nav from '../../Components/Nav/Nav';
import "./ProfileScreen.css"
import { auth } from '../../firebase';
import netflixavatar from '../../images/netflix-avatar.png';
import Plans from '../../Components/Plans/Plans';

const ProfileScreen = ({ user }) => {

    const signOutHandle = () => {
        auth.signOut();
    }

    return (
        <div className="profile-screen">
            <Nav />
            <div className="profile-screen-body">
                <h1>Edit Profile</h1>
                <div className="profile-screen-info">
                    <img src={netflixavatar} alt="profileavatar" />
                    <div className="profile-screen-detail">
                        <h2>{user.email}</h2>
                        <div className="profile-screen-plan">
                            <h3>Plans</h3>
                            <Plans planname="Basic Plan" plantype="720p" btn="Current Package"/>
                            <Plans planname="Standard Plan" plantype="1080p" btn="Subscribe"/>
                            <Plans planname="Premium Plan" plantype="4k + HDR" btn="Subscribe"/>
                            <button onClick={signOutHandle} className="profile-screen-btn">Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
