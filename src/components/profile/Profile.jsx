import { useSelector } from 'react-redux'
import useProfile from '../../hooks/useProfile'
import { useParams } from 'react-router-dom'

function Profile() {
  const { user, profile } = useSelector(store => store.user)
  const { id } = useParams()
  useProfile(id)
  console.log(profile)
  // console.log("user is: ", user)
  return (
    <div>
      <h2>name: {profile?.name}</h2>
    </div>
  )
}

export default Profile