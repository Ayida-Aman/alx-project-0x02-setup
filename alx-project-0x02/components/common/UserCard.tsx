import React from 'react'
import { UserProps } from '@/interfaces'
function UserCard({name, email, address} : UserProps) {
  return (
    <>
    <h1>
        Users list
    </h1>
    <h2>{name}</h2>
    <h3>{email}</h3>
    <p>{`${address.street}, ${address.city}, ${address.zipcode}`}</p>
    </>
  )
}

export default UserCard