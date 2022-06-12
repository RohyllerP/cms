import React from 'react'
import Reporte from "../../components/Chart/Reporte";
import ReporteTwo from "../../components/Chart/Reporte2";
import ReporteThree from "../../components/Chart/Reporte3";
import ReporteFour from "../../components/Chart/Reporte4";
import ReporteFive from "../../components/Chart/Reporte5";
import ReporteSix from "../../components/Chart/Reporte6";
import ReporteSeven from "../../components/Chart/Reporte7";
import ReporteEight from "../../components/Chart/Reporte8";
import ReporteNine from "../../components/Chart/Reporte9";
import ReporteTen from "../../components/Chart/Reporte10";
import ReporteEleven from "../../components/Chart/Reporte11";
import Reportetwelve from "../../components/Chart/Reporte12";
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react'

function index() {
  return (
    <Box mx="1.3em" border="2px">
      <Tabs>
        <TabList>
          <Tab><Text>Castellano</Text></Tab>
          <Tab><Text>Ingles</Text></Tab>
          <Tab><Text>Matematica</Text></Tab>
          <Tab><Text>EducacionFisica</Text></Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Reporte />
          </TabPanel>
          <TabPanel>
            <ReporteTwo />
          </TabPanel>
          <TabPanel>
            <ReporteThree />
          </TabPanel>
          <TabPanel>
            <ReporteFour />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box>
        <Tabs>
          <TabList>
            <Tab><Text>Fisica</Text></Tab>
            <Tab><Text>Quimica</Text></Tab>
            <Tab><Text>Biologia</Text></Tab>
            <Tab><Text>GHC</Text></Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ReporteFive />
            </TabPanel>
            <TabPanel>
              <ReporteSix />
            </TabPanel>
            <TabPanel>
              <ReporteSeven />
            </TabPanel>
            <TabPanel>
              <ReporteEight />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box>
        <Tabs>
          <TabList>
            <Tab>Premilitar</Tab>
            <Tab>Religion</Tab>
            <Tab>Proyecto</Tab>
            <Tab>Ciencias</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ReporteNine />
            </TabPanel>
            <TabPanel>
              <ReporteTen />
            </TabPanel>
            <TabPanel>
              <ReporteEleven />
            </TabPanel>
            <TabPanel>
              <Reportetwelve />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}

export default index