import React from "react";
import {
    Radio, RadioGroup,Box,Heading
} from "@chakra-ui/react";
const Formulario = (props) => {
    return(
        <Box className="form-group" data-categoria={props.categoria} my="10px">
            <Heading my="15px" as="h4" size="sm">{props.title}</Heading>
            <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" name={props.name} value="excelente" className="form-check-input"  />
                    Totalmente de acuerdo 
                </label>
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" name={props.name} value="bueno" className="form-check-input" />
                    De acuerdo
                </label>
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" name={props.name} value="regular" className="form-check-input" />
                    Algo en desacuerdo
                </label>
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" name={props.name} value="insuficiente" className="form-check-input" />
                    En desacuerdo
                </label>
            </div>
        </Box>
    );
};

export default Formulario;