import React from "react";
import LinkForm from "./LinkForm";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../firebase/firebase";
import { isEmpty } from "@firebase/util";

export const Links = () => {
    const addOrEdit = async (linkobject) => {
        if (linkobject == isEmpty || linkobject === "") {
            console.log("Seleccione un curso");
        } else {
            const collectionRef = collection(db, 'Curso');
            await addDoc(collectionRef, linkobject);
            console.log("nueva tarea agregada")
        }
    }

    return <div>
        <LinkForm addOrEdit={addOrEdit} />

    </div>
}

export default Links;