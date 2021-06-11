import React from 'react'
import {useParams , useHistory} from 'react-router-dom'


const UserInfo = () => {
    const {id}=useParams()
    const [userData,setUserData]=useState(null);
    let history=useHistory();

    useEffect(() => {
        fetchTask(id);
      }, [])

  /*
 * Fetch a single user by Id
 */
const fetchTask = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();
    setUserData(data)
    if(response.status === 404){
        toast.error("not found")
        history.push("/")
    }
  } catch (err) {
    toast.error("request failed!");
  }
};
    return (
        <div>
            
        </div>
    )
}

export default UserInfo
