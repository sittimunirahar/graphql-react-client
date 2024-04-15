import { useQuery, gql } from '@apollo/client'

const GET_STUDENTS = gql`
query getStudents {
  students {
    id
    name
    college {
      id
      name
    }
  }
}`

function DisplayStudents() {
  const { loading, error, data } = useQuery(GET_STUDENTS)

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error: {error.message}</p>

  return data.students.map(
    ({ id, name, college }) =>
    <div key={id}>
      <h3>{name}</h3>
      <br />
      <b>College:</b>
      <p>{college.name}</p>
      <br />
    </div>
    )
}

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br/>
      <DisplayStudents />
    </div>
  )
}