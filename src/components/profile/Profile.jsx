import { useDispatch, useSelector } from 'react-redux'
import useProfile from '../../hooks/useProfile'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END } from '../../utils/constant'
import toast from "react-hot-toast"
import { followUpdate } from '../../redux/userSlice'
import { useState } from 'react'
import EditProfile from './EditProfile'

function Profile() {
  const { user, profile } = useSelector(store => store.user)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams()
  useProfile(id)
  console.log(profile)

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  const followHandle = async () => {
    // user is already following, so unfollow
    if (user?.following?.includes(id)) {
      setIsLoading(true);
      try {
        const res = await axios.post(`${USER_API_END}/unfollow/${id}`, { id: user?._id }, {
          withCredentials: true
        });
        console.log(res);
        dispatch(followUpdate(id));
        toast.success(res.data.message);
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsLoading(true);
      try {
        const res = await axios.post(`${USER_API_END}/follow/${id}`, { id: user?._id }, {
          withCredentials: true
        });
        console.log(res);
        dispatch(followUpdate(id));
        toast.success(res.data.message);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  // const handleUpdateProfile = async (updatedProfile) => {
  //   try {
  //     setIsLoading(true);
  //     const res = await axios.put(`${USER_API_END}/edit/${profile, _id}`, updatedProfile, {
  //       withCredentials: true
  //     });
  //     console.log(res);
  //     toast.success(res.data.message);
  //     setIsEditing(false); // Close the edit modal
  //   } catch (error) {
  //     console.log(error);
  //     toast.error('Failed to update profile');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div className="flex flex-col">
      {/* Top Left: Name and Post Count */}
      <div className="flex items-center space-x-4 my-4 ml-2">
        <h1 className="text-xl font-bold">{profile?.name}</h1>
        <p className="text-gray-600">
          {/* Replace with actual post count logic */}
          {user?.postCount} Posts
        </p>
      </div>
      {/* Cover Image Section */}
      <div
        className="relative h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(https://i.imgur.com/y9CJBAj.jpg)` }}
      >
        {/* Profile Image (inside cover, left side) */}
        <img
          src="https://pbs.twimg.com/profile_images/1774678094969970688/u4fSluz0_400x400.jpg"
          alt={user?.name}
          className="absolute top-32 left-4 w-28 h-28 rounded-full border-4 border-white"
        />

        {/* Overlay (optional) */}
      </div>

      {/* Profile Section */}
      <div className="grid grid-cols-2 items-start justify-between px-4 py-8 border-b border-gray-200 space-y-4 mt-6">
        <div>
          <h3 className='text-xl font-bold'>{profile?.name}</h3>
          <p className="text-gray-600 text-lg mt-1 font-sans">@{profile?.username}</p>
        </div>
        {/* Top Right: Username and Edit Button */}
        <div>
          {/* Edit Profile Button */}
          <div className="flex items-start justify-end space-x-4">
            {profile?._id === user?._id ? (
              <button onClick={handleEditProfile} className="px-4 py-2 rounded-full bg-black hover:bg-slate-500 duration-300 text-white font-bold">
                Edit Profile
              </button>
            ) : (
              <button onClick={followHandle} className="px-4 py-2 rounded-full bg-white border-slate-200 text-black font-bold">
                {user?.following?.includes(id) ? "Following" : "Follow"}
              </button>
            )}
          </div>

          {/* Edit Profile Modal */}
          {isEditing && (
            <EditProfile profile={profile}
              onClose={handleCloseModal} onCancel={() => setIsEditing(false)} />
          )}
        </div>

        {/* Information Section (optional) */}
        <div className="">
          <p className="text-gray-600 my-2 text-sm font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cupiditate iusto eveniet!</p>

          <div className='flex gap-5'>
            <p>
              <span className='text-xl font-bold mr-2 text-[#262088]'>{profile?.following.length}</span>
              <span className="font-bold">Following</span> 
            </p>
            <p >
              <span className='text-xl font-bold mr-2 text-[#262088]'>{profile?.followers.length}</span>
              <span className="font-bold">Followers</span> 
            </p>
          </div>
        </div>
      </div>

      {/* Rest of the Profile Content (optional) */}
      <div className="flex-grow px-4 py-8">
        {/* Your Content Here (e.g., Tweets, Following/Followers Lists) */}
      </div>
    </div>
  )
}

export default Profile;
