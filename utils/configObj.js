import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import {db} from '../firebase/firebase.js';
import {cursoNombre} from "../components/Chart/Reporte";

const ChartT = () => {
    const [curso, setCurso] = useState([]);
    let countVal=0, countVal2=0, countVal3=0 , countVal4=0;
    useEffect(()=>{
        const unsub = onSnapshot(collection(db,'Curso'),(snapshot) => {
            setCurso(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
        });

        return unsub
    },[]);
   
    const totResp = (cursoName) =>{
        
        curso.map( (curso) => {
            curso.cursos.name === cursoName && (
                curso.cursos.categoria.map((cat, index) =>{
                    // console.log(cat);
                    cat.value1 === "excelente" &&  (countVal++)
                    cat.value1 === "bueno" && (countVal2++)
                    cat.value1 === "regular" && (countVal3++)
                    cat.value1 === "insuficiente" && (countVal4++)

                    cat.value2 === "excelente" &&  (countVal++)
                    cat.value2 === "bueno" && (countVal2++)
                    cat.value2 === "regular" && (countVal3++)
                    cat.value2 === "insuficiente" && (countVal4++)
                })
            )
        })
  
    }
    totResp(cursoNombre);
    const configObj  = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Reporte de Curso'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Excelente',
                y: countVal,
                sliced: true,
                selected: true
            }, {
                name: 'Bueno',
                y: countVal2
            }, {
                name: 'Regular',
                y: countVal3
            }, {
                name: 'insuficiente',
                y: countVal4
            }]
        }]
    };

   return (
    <div>
        
            <HighchartsReact
            highcharts={Highcharts}
            options={configObj}
        />
    </div>
   )
}


export default ChartT;