import React, { useState } from "react";
import Formulario from './formulario/formulario';
import {
    Box,
    Heading,
    Text,
    chakra,
    Button,

} from "@chakra-ui/react";
import swal from "sweetalert";

const LinkForm = (props) => {

    const initialValue = {
        cursos: {
            name: 'castellano',
            categoria: [
                {
                    name: 'A',
                    value1: '',
                    value2: ''
                },
                {
                    name: 'B',
                    value1: '',
                    value2: ''
                },
                {
                    name: 'C',
                    value1: '',
                    value2: ''
                },
                {
                    name: 'D',
                    value1: '',
                    value2: ''
                },
                {
                    name: 'E',
                    value1: '',
                    value2: ''
                },

            ],
        }
    };

    const [values, setValues] = useState(initialValue);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });

    }

    const handleSubmit = e => {
        e.preventDefault();
        const datac = Array.from(new FormData(e.target));
        const selectO = document.querySelector(`#curso`).value
        document.querySelector(`option[value="${selectO}"]`).disabled = true;
        document.querySelector(`#curso`).selectIndex = 0;
        const datobj = Object.fromEntries(datac);

        initialValue.cursos.name = datobj.curso;

        const arrayCat = initialValue.cursos.categoria;
        arrayCat.map(function (val, index) {
            if (val.name === 'A') {
                initialValue.cursos.categoria[index].value1 = datobj.category_A_question1;
                initialValue.cursos.categoria[index].value2 = datobj.category_A_question2;
            } else if (val.name === 'B') {
                initialValue.cursos.categoria[index].value1 = datobj.category_B_question1;
                initialValue.cursos.categoria[index].value2 = datobj.category_B_question2;

            } else if (val.name === 'C') {
                initialValue.cursos.categoria[index].value1 = datobj.category_C_question1;
                initialValue.cursos.categoria[index].value2 = datobj.category_C_question2;

            } else if (val.name === 'D') {
                initialValue.cursos.categoria[index].value1 = datobj.category_D_question1;
                initialValue.cursos.categoria[index].value2 = datobj.category_D_question2;
            } else if (val.name === 'E') {
                initialValue.cursos.categoria[index].value1 = datobj.category_E_question1;
            }
        });

        if(selectO === "select"){
            props.addOrEdit("")
        }else{
            setValues({...values,initialValue});
            props.addOrEdit(initialValue);
        }
    }
    const mostrarAlerta =() => {
        swal({
            title: "Tarea enviada Correctamente",
            icon: "success",
            button: "Aceptar"
        });
    }
    return (
        <form  action="" onSubmit={handleSubmit}>
            <Box border="1px" mx="1em" p="10px" my="15px">
                <chakra.section>
                    <Box mt="15px">
                        <Text mb="10px">Escoge una materia, llena el formulario dale en el botón de enviar y luego
                            pulsa la otra materia y repite el procedimiento. Cuando hayas terminado dale en el botón 
                            de Cerrar sesión
                        </Text>
                        <select   
                        name="curso" 
                        id="curso">
                            <option value="select">Seleccione el curso</option>
                            <option value="Castellano">Castellano</option>
                            <option value="Ingles">Ingles</option>
                            <option value="Matematicas">Matematicas</option>
                            <option value="EducacionFisica">Educacion Fisica</option>
                            <option value="Ghc">G.H.C</option>
                            <option value="Religion">Religion</option>
                            <option value="Fisica">Fisica</option>
                            <option value="Quimica">Quimica</option>
                            <option value="Biologia">Biologia</option>
                            <option value="Premilitar">Premilitar</option>
                            <option value="Proyecto">Proyecto</option>
                            <option value="Ciencias">Ciencias</option>
                        </select>
                    </Box>
                </chakra.section>

                <chakra.section>
                    <Heading as="h3" size="md">A- conocimientos pedagógicos</Heading>
                    <div >
                        <Formulario
                            title="1. El docente demuestra dominio e interés en exigirse a sí mismo al hacer un video dando la clase online"
                            name="category_A_question1"
                            categoria="A"
                        />
                        <Formulario
                            title="2. El docente utiliza el foro de duda o foro-chat, para mejorar el aprendizaje del estudiante"
                            name="category_A_question2"
                            categoria="A"
                        />
                    </div>
                </chakra.section>
                <chakra.section>
                    <Heading as="h3" size="md">B- Emocionalidad</Heading>
                    <div>
                        <Formulario
                            title="3. El docente actúa con vocación pedagógica."
                            name="category_B_question1"
                            categoria="B"
                        />
                        <Formulario
                            title="4. El docente evalúa en base a lo que enseñan en la plataforma online"
                            name="category_B_question2"
                            categoria="B"
                        />
                    </div>
                </chakra.section>
                <chakra.section >
                    <Heading as="h3" size="md">C- Cumplientos en sus funciones laborales</Heading>
                    <div>
                        <Formulario
                            title="5. El docente sube los materiales de apoyo y tareas que deben evaluarse a tiempo."
                            name="category_C_question1"
                            categoria="C"
                        />
                        <Formulario
                            title="6. El docente evalúa es puntual al responder foro de dudas y pasa las notas a tiempo online."
                            name="category_C_question2"
                            categoria="C"
                        />
                    </div>
                </chakra.section>

                <chakra.section>
                    <Heading as="h3" size="md">D- Relaciones interpersonales hacia los alumnos</Heading>
                    <div>
                        <Formulario
                            title="7. El docente tiene una relacion cordial con los alumnos.."
                            name="category_D_question1"
                            categoria="D"
                        />
                        <Formulario
                            title="8. El lenguaje utilizado por el docente es idóneo hacia los alumnos"
                            name="category_D_question2"
                            categoria="D"
                        />
                    </div>
                </chakra.section>
                <chakra.section>
                    <Heading as="h3" size="md">E- Retroalimentación entre el docente y usted (estudiante)</Heading>
                    <div>
                        <Formulario
                            title="9. Existe una retroalimentación entre el docentes y usted (estudiante)"
                            name="category_E_question1"
                            categoria="E"
                        />
                    </div>
                </chakra.section>

                <Button mt="10px" variant="primary" type="submit" onClick={() => mostrarAlerta()}>Enviar</Button>
            </Box>
        </form>
    )
}

export default LinkForm;