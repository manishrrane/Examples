import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Api = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )
        setData(response.data)
      } catch (error) {
        console.log("Something went wrong", error)
      }
    }

    getUsers()
  }, [])

  return (
    <>
      <h1 className="text-red-700 text-4xl font-bold text-center my-6">
        Get User Data
      </h1>

      <div className="flex flex-wrap justify-center gap-5 p-4">
        {data.map((item) => {
          return (
            <div key={item.id} className="w-80 bg-white border border-gray-300 rounded-lg p-4 ">
              <h2 className="text-xl font-bold text-center mb-4 text-blue-700">
                {item.id}. {item.name}
              </h2>

              <div className="space-y-2">
                <p>
                  <strong>Username:</strong> {item.username}
                </p>

                <p>
                  <strong>Email:</strong> {item.email}
                </p>

                <p>
                  <strong>Phone:</strong> {item.phone}
                </p>

                <p>
                  <strong>Website:</strong> {item.website}
                </p>

                <p>
                  <strong>Company:</strong> {item.company.name}
                </p>

                <h3 className="font-bold text-lg">Address</h3>

                <p>
                  <strong>City:</strong> {item.address.city}
                </p>

                <p>
                  <strong>Zipcode:</strong> {item.address.zipcode}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Api