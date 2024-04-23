import CreatePost from './CreatePost'
import Tweet from './Tweet'
import { useSelector } from "react-redux"

function Feed() {
  const { tweets } = useSelector(store => store.tweet)

  return (
    <div>
      <CreatePost/>
      {
        tweets?.map((tweet) => <Tweet key={tweet._id} tweet={tweet} />)
      }

    </div>
  )
}

export default Feed
