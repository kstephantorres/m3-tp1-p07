import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import './App.css'
import EmpleadoList from './components/EmpleadoList'


function App() {
  let empleados = [
    { id: 1, fullName: "Lalo Dueñas", title: "CEO", department: "Business", pic: "avatar1.jpg" },
    { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "avatar2.jpg" },
    { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "avatar3.jpg" },
    { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "avatar4.jpg" },
    { id: 5, fullName: "Ariel Jiménez", title: "Art Director", department: "Marketing", pic: "avatar5.jpg" },
    { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "avatar6.jpg" },
    { id: 7, fullName: "Elliot Balderas", title: "Digital Strategist", department: "Marketing", pic: "avatar7.jpg" },
    { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "avatar8.jpg" },
    { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "avatar9.jpg" },
  ]

  return (
    <Container className='py-2 py-sm-5'>
        <EmpleadoList empleados={empleados}></EmpleadoList>
    </Container>
  )
}

export default App
