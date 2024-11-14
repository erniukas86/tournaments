/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import Table from "../../components/dataDisplay/Table";

function DuetsStandings2024() {
  // TODO: Replace with real data
  const getData = () => {
    return [
      {
        Place: "🥇",
        "Full Name": "N/A",
        Result: "N/A",
      },
      {
        Place: "🥈",
        "Full Name": "N/A",
        Result: "5W/1L",
      },
      {
        Place: "🥉",
        "Full Name": "N/A",
        Result: "N/A",
      },
      {
        Place: "4",
        "Full Name": "N/A",
        Result: "N/A",
      },
      {
        Place: "5",
        "Full Name": "Justas P & Dmytro I",
        Result: "4W/1L",
      },
      {
        Place: "6",
        "Full Name": "N/A",
        Result: "N/A",
      },
      {
        Place: "7",
        "Full Name": "N/A",
        Result: "N/A",
      },
      {
        Place: "8",
        "Full Name": "N/A",
        Result: "N/A",
      },
      {
        Place: "9",
        "Full Name": "Juste G & Algirdas K",
        Result: "0W/4L",
      },
      {
        Place: "10",
        "Full Name": "Vaiga C & Mindaugas N",
        Result: "0W/4L",
      },
    ];
  };

  return <Table data={getData()} title={"FINAL STANDINGS"}></Table>;
}

export default DuetsStandings2024;
