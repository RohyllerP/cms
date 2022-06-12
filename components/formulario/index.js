import React, { useState } from "react";

import {
    Box,
    Text,
    Radio,
    Heading,
    Button,
    Stack,
    chakra,
    RadioGroup,
    propNames,
} from "@chakra-ui/react";



const Data2 = [
    {
        id: 3,
        title: "3. El docente actúa con vocación pedagógica.",
        name: "tercero",
    },
    {
        id: 4,
        title: "4. El docente evalúa en base a lo que enseñan en la plataforma online",
        name: "cuarto"
    }
]

function Formulario(props) {
   
    return (
        <Box>
            <RadioGroup>
            <Stack spacing="20px">
                <Text fontWeight="600">{props.title}</Text>
                <chakra.label verticalAlign="row">
                    <Box display="flex">
                        <Radio value="1"  onChange={props.name}/>
                        <Text ml="5px" mt="-5px" fontSize="15px">Totalmente de acuerdo</Text>
                    </Box>
                </chakra.label>
                <chakra.label display="inline">
                    <Box display="flex">
                        <Radio value="2" onChange={props.name} />
                        <Text ml="5px" mt="-5px" fontSize="15px">De acuerdo</Text>
                    </Box>
                </chakra.label>
                <chakra.label display="inline">
                    <Box display="flex">
                        <Radio value="3" onChange={props.name} />
                        <Text ml="5px" mt="-5px" fontSize="15px">Ni de acuerdo ni en desacuerdo</Text>
                    </Box>
                </chakra.label>
                <chakra.label display="inline">
                    <Box display="flex">
                        <Radio value="4" onChange={props.name} />
                        <Text ml="5px" mt="-5px" fontSize="15px">En desacuerdo  </Text>
                    </Box>
                </chakra.label>
                <chakra.label display="inline">
                    <Box display="flex">
                        <Radio value="5"  onChange={props.name}/>
                        <Text ml="5px" mt="-5px" fontSize="15px">Total en desacuerdo  </Text>
                    </Box>
                </chakra.label>
            </Stack>
            </RadioGroup>

        </Box>
    )
}


export default Formulario;