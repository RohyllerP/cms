import React from 'react'
import Link from "../Chart/Links";
import firebaseApp from "../../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);
import {
  Box,
  Button,
} from '@chakra-ui/react'

function cerrarSesion(){
  signOut(auth)
}
function index() {
  return (
    <Box>
      <Box>
      <Button ml="17px" variant="primary" onClick={cerrarSesion}>Cerrar sesión</Button>
      </Box>
      <Link />
    </Box>
  )
}

export default index