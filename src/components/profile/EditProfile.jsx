import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { USER_API_END } from '../../utils/constant';

const EditProfile = ({ profile, onUpdate, onCancel }) => {
    const [name, setName] = useState(profile.name);
    const [username, setUsername] = useState(profile.username);
    const [bio, setBio] = useState(profile.bio);
    const [profilePicture, setProfilePicture] = useState(profile.profilePicture);

    console.log(profile)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedProfile = { name, username, bio, profilePicture };

        try {
            const response = await axios.put(`${USER_API_END}/edit/${profile._id}`, updatedProfile);
            console.log(response);
            if (response.data.success) {
                // onUpdate(updatedProfile);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error('Failed to update profile');
        }
    };

    return (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
                <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-1">Name:</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="border rounded px-2 py-1 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-1">Username:</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="border rounded px-2 py-1 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="bio" className="block mb-1">Bio:</label>
                        <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} className="border rounded px-2 py-1 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="profilePicture" className="block mb-1">Profile Picture URL:</label>
                        <input type="text" id="profilePicture" value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} className="border rounded px-2 py-1 w-full" />
                    </div>
                    <div className="flex justify-between">
                        <button type="submit" className="px-4 py-2 rounded-full bg-black hover:bg-slate-500 duration-300 text-white font-bold">
                            Save Changes
                        </button>
                        <button type="button" onClick={onCancel} className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400 duration-300 text-black font-bold">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
