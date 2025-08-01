import React, { useEffect, useState } from 'react'
import { UserProps } from '@/interfaces'
import UserCard from '@/components/common/UserCard'
function Users() {

    const [users, setUsers] = useState<UserProps[]>([])
    useEffect(()=>{
        const fetchUsers = async()=>{
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
                const data = await res.json()
                const formattedUsers= data.map((user:any)=>({
                  name: user.name,
                  email: user.email,
                  address: user.address,
                }))
                setUsers(formattedUsers)
            } catch (error) {
                console.log(error);
            }
        }
        fetchUsers()
    }, [])
  return (
    <>
    {
      users.map((user, index)=>(
        <UserCard
          key={index}
          name={user.name}
          email={user.email}
          address={user.address}
        />
      ))
    }
    </>
  )
}

export default Users