import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from "../../firebase/firebase.js";
import Chart from "./chart/chart8.js";
import {
    Box,
    Heading,
    Text,
    Stack,
    chakra,
} from "@chakra-ui/react";

export const cursoNombre = "Ghc";
const Reporte = () => {

    let numc = 0;
    const [curso, setCurso] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'Curso'), (snapshot) => {
            setCurso(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });

        return unsub
    }, []);

    const countAlu = (cursoName) => {
        let countT = 0;
        curso.map((curso) => (
            curso.cursos.name === cursoName && (
                countT++
            )
        ))
        return countT;
    }
    const countCat = (cursoName, categoria, valCat) => {
        let countCat = 0;
        curso.map((curso) => (
            curso.cursos.name === cursoName && (
                curso.cursos.categoria.map((cat, index) => (
                    cat.name === categoria && cat.value1 === valCat && (
                        countCat++
                    )
                ))
            )

        ))
        return countCat;
    }

    const countCat2 = (cursoName, categoria, valCat) => {
        let countCat = 0;
        curso.map((curso) => (
            curso.cursos.name === cursoName && (
                curso.cursos.categoria.map((cat, index) => (
                    cat.name === categoria && cat.value2 === valCat && (
                        countCat++
                    )
                ))
            )

        ))
        return countCat;
    }

    const totResp = (cursoName) => {
        let countVal = 0, countVal2 = 0;
        curso.map((curso) => {
            curso.cursos.name === cursoName && (
                curso.cursos.categoria.map((cat, index) => {
                    cat.value1 !== "" && (countVal++)
                    cat.value2 !== "" && (countVal2++)
                })
            )
        })
        return countVal + countVal2;
    }
    return (
        <Box p="1em">
            <Box bg="colors.primary" p="5px" maxWidth="330px" pl="15px"><Heading size="xl" as="h2" color="white">{cursoNombre}</Heading></Box>
            <Box pt="15px"><Text>Numero de alumnos:</Text> {countAlu(cursoNombre)}</Box>
            <Box><Text>Total de respuesta</Text> {totResp(cursoNombre)}</Box>
            <Box ml="25px">
                {curso.map((curso) => (
                    curso.cursos.name === cursoNombre && numc < 1 && (
                        curso.cursos.categoria.map((cat) => (
                            <chakra.ul listStyleType="none" py="10px" key={cat.id}>
                                <Stack spacing="10px">
                                    <Heading size="md" as="h4">Categoria {cat.name}</Heading>
                                    <Box pl="40px" maxWidth="15em">
                                        <chakra.li display="flex" justifyContent="space-between">
                                            <Box><Text>Excelente</Text></Box>
                                            <Box display="flex" >
                                                <Box><Text>{countCat(cursoNombre, cat.name, 'excelente')}</Text></Box>
                                                <Box ml="20px"><Text>{countCat2(cursoNombre, cat.name, 'excelente')}</Text></Box>
                                            </Box>
                                        </chakra.li>
                                        <chakra.li display="flex" justifyContent="space-between">
                                            <Box><Text>Bueno</Text></Box>
                                            <Box display="flex">
                                                <Box><Text>{countCat(cursoNombre, cat.name, 'bueno')}</Text></Box>
                                                <Box ml="20px"><Text>{countCat2(cursoNombre, cat.name, 'bueno')}</Text></Box>
                                            </Box>
                                        </chakra.li>
                                        <chakra.li display="flex" justifyContent="space-between">
                                            <Box><Text>Regular</Text></Box>
                                            <Box display="flex" >
                                                <Box><Text>{countCat(cursoNombre, cat.name, 'regular')}</Text></Box>
                                                <Box ml="20px"><Text>{countCat2(cursoNombre, cat.name, 'regular')}</Text></Box>
                                            </Box>
                                        </chakra.li>
                                        <chakra.li display="flex" justifyContent="space-between"> 
                                            <Box><Text>Insuficiente</Text></Box>
                                            <Box display="flex">
                                                <Box><Text>{countCat(cursoNombre, cat.name, 'insuficiente')}</Text></Box>
                                                <Box ml="20px"><Text>{countCat2(cursoNombre, cat.name, 'insuficiente')}</Text></Box>
                                            </Box>
                                        </chakra.li>
                                    </Box>
                                    <input type="hidden" value={numc++} />
                                </Stack>
                            </chakra.ul>
                        ))
                    )
                ))}
            </Box>
            <Chart />
        </Box>
    );
};

export default Reporte;