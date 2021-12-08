import image from "../../img/profile.jpeg";

const Profile = () => (
  <div className="flex-shrink-0 justify-center items-center">
    <div className="w-16 h-16 rounded-full border border-black">
      <img className="profile-photo " src={image} alt="Profile Photo" />
    </div>
    <div className="text-center text-xs italic pt-2">17.09.20</div>
    <div className="profile-line"></div>
  </div>
);

export default Profile;
