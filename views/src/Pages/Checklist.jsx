import React, { useEffect, useState } from "react";
import {
  Table,
  Container,
  ScrollArea,
  Center,
  TableTr,
  TableTd,
} from "@mantine/core";
const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

// const nameList = () => {
//   for (internName in database) {
//     return (
//       <Table.Tr>
//         <Table.Td>{internName}</Table.Td>
//       </Table.Tr>
//     );
//   }
// };
// const statusExercises = ()=>{
//   for(status){
//     if (status.submittedhtml = true){
//       return("x")
//     }
//   }
// }
const Checklist = () => {
  const stylingTable = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));
  return (
    <Container style={stylingTable}>
      <ScrollArea w="75vw" h="80vh">
        <div style={{ display: "flex" }}>
          <Table
            highlightOnHover={true}
            striped={true}
            stickyHeader={true}
            withTableBorder={true}
            withColumnBorders={true}
            withRowBorders={true}
            w="25%"
          >
            <Table.Th
              style={{
                textAlign: "center",
                width: "25%",
                height: "200%",
                alignContent: "center",
              }}
            >
              Intern Name
            </Table.Th>
          </Table>
          <div style={{ display: "block" }}>
            <Table
              highlightOnHover={true}
              striped={true}
              stickyHeader={true}
              withTableBorder={true}
              w="100%"
              withColumnBorders={true}
              withRowBorders={true}
            >
              <Table.Thead w="100%">
                <Table.Tr w="100%">
                  <Table.Th style={{ textAlign: "center", width: "10%" }}>
                    HTML
                  </Table.Th>
                  <Table.Th style={{ textAlign: "center", width: "10%" }}>
                    CSS
                  </Table.Th>
                  <Table.Th style={{ textAlign: "center", width: "10%" }}>
                    MQ/RD
                  </Table.Th>
                  <Table.Th style={{ textAlign: "center", width: "10%" }}>
                    Bootstrap
                  </Table.Th>
                  <Table.Th style={{ textAlign: "center", width: "10%" }}>
                    Javascript
                  </Table.Th>
                  <Table.Th style={{ textAlign: "center", width: "10%" }}>
                    Javascript and the DOM
                  </Table.Th>
                  <Table.Th style={{ textAlign: "center", width: "10%" }}>
                    React
                  </Table.Th>
                  <Table.Th style={{ textAlign: "center", width: "10%" }}>
                    SQL
                  </Table.Th>
                  <Table.Th style={{ textAlign: "center", width: "10%" }}>
                    ExpressJS
                  </Table.Th>
                  <Table.Th style={{ textAlign: "center", width: "10%" }}>
                    API Integration
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
            </Table>
            <Table
              highlightOnHover={true}
              striped={true}
              stickyHeader={true}
              w="100%"
              withTableBorder={true}
              withColumnBorders={true}
              withRowBorders={true}
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th id="htmlSubmitted" style={{ width: "8.3333333%" }}>
                    Submitted
                  </Table.Th>
                  <Table.Th id="htmlCompleted" style={{ width: "8.3333333%" }}>
                    Completed
                  </Table.Th>
                  <Table.Th id="htmlReviewer" style={{ width: "calc(25%/3)" }}>
                    Reviewer
                  </Table.Th>
                  <Table.Th id="cssSubmitted" style={{ width: "calc(25%/3)" }}>
                    Submitted
                  </Table.Th>
                  <Table.Th id="cssCompleted" style={{ width: "calc(25%/3)" }}>
                    Completed
                  </Table.Th>
                  <Table.Th id="cssReviewer" style={{ width: "calc(25%/3)" }}>
                    Reviewer
                  </Table.Th>
                  <Table.Th id="mdrqSubmitted" style={{ width: "calc(25%/3)" }}>
                    Submitted
                  </Table.Th>
                  <Table.Th id="mdrqCompleted" style={{ width: "calc(25%/3)" }}>
                    Completed
                  </Table.Th>
                  <Table.Th id="mdrqReviewer" style={{ width: "calc(25%/3)" }}>
                    Reviewer
                  </Table.Th>
                  <Table.Th
                    id="bootstrapSubmitted"
                    style={{ width: "calc(25%/3)" }}
                  >
                    Submitted
                  </Table.Th>
                  <Table.Th
                    id="bootstrapCompleted"
                    style={{ width: "calc(25%/3)" }}
                  >
                    Completed
                  </Table.Th>
                  <Table.Th
                    id="bootstrapReviewer"
                    style={{ width: "calc(25%/3)" }}
                  >
                    Reviewer
                  </Table.Th>
                  <Table.Th id="jsSubmitted" style={{ width: "calc(25%/3)" }}>
                    Submitted
                  </Table.Th>
                  <Table.Th id="jsCompleted" style={{ width: "calc(25%/3)" }}>
                    Completed
                  </Table.Th>
                  <Table.Th id="jsReviewer" style={{ width: "calc(25%/3)" }}>
                    Reviewer
                  </Table.Th>
                  <Table.Th
                    id="jsDomSubmitted"
                    style={{ width: "calc(25%/3)" }}
                  >
                    Submitted
                  </Table.Th>
                  <Table.Th
                    id="jsDomCompleted"
                    style={{ width: "calc(25%/3)" }}
                  >
                    Completed
                  </Table.Th>
                  <Table.Th id="jsDomReviewer" style={{ width: "calc(25%/3)" }}>
                    Reviewer
                  </Table.Th>
                  <Table.Th
                    id="reactSubmitted"
                    style={{ width: "calc(25%/3)" }}
                  >
                    Submitted
                  </Table.Th>
                  <Table.Th
                    id="reactCompleted"
                    style={{ width: "calc(25%/3)" }}
                  >
                    Completed
                  </Table.Th>
                  <Table.Th id="reactReviewer" style={{ width: "calc(25%/3)" }}>
                    Reviewer
                  </Table.Th>
                  <Table.Th id="sqlSubmitted" style={{ width: "calc(25%/3)" }}>
                    Submitted
                  </Table.Th>
                  <Table.Th id="sqlCompleted" style={{ width: "calc(25%/3)" }}>
                    Completed
                  </Table.Th>
                  <Table.Th id="sqlReviewer" style={{ width: "calc(25%/3)" }}>
                    Reviewer
                  </Table.Th>
                  <Table.Th
                    id="expressJsSubmitted"
                    style={{ width: "calc(25%/3)" }}
                  >
                    Submitted
                  </Table.Th>
                  <Table.Th
                    id="expressJsCompleted"
                    style={{ width: "calc(25%/3)" }}
                  >
                    Completed
                  </Table.Th>
                  <Table.Th
                    id="expressJsReviewer"
                    style={{ width: "calc(25%/3)" }}
                  >
                    Reviewer
                  </Table.Th>
                  <Table.Th
                    id="apiIntegrationSubmitted"
                    style={{ width: "calc(25%/3)" }}
                  >
                    Submitted
                  </Table.Th>
                  <Table.Th
                    id="apiIntegrationCompleted"
                    style={{ width: "calc(25%/3)" }}
                  >
                    Completed
                  </Table.Th>
                  <Table.Th
                    id="apiIntegrationReviewer"
                    style={{ width: "calc(25%/3)" }}
                  >
                    Reviewer
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody></Table.Tbody>
            </Table>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <Table
            highlightOnHover={true}
            striped={true}
            stickyHeader={true}
            withTableBorder={true}
            withColumnBorders={true}
            withRowBorders={true}
          >
            {/* {nameList()} */}
          </Table>
          <Table
            highlightOnHover={true}
            striped={true}
            stickyHeader={true}
            withTableBorder={true}
            withColumnBorders={true}
            withRowBorders={true}
          >
            {/* {statusExercises()} */}
          </Table>
        </div>
      </ScrollArea>
    </Container>
  );
};

export default Checklist;
