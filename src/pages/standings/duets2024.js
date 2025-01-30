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
        "Full Name": "Tomas R & Rokas S",
        Result: "7W/0L",
      },
      {
        Place: "🥈",
        "Full Name": "Tomas P & Raimonda P",
        Result: "3W/4L",
      },
      {
        Place: "🥉",
        "Full Name": "Mantas R & Klaidas P",
        Result: "4W/3L",
      },
      {
        Place: "4",
        "Full Name": "Nedas S & Edvinas V",
        Result: "3W/4L",
      },
      {
        Place: "5",
        "Full Name": "Justas P & Dmytro I",
        Result: "4W/1L",
      },
      {
        Place: "6",
        "Full Name": "Lukas K & Ernestas B (A2)",
        Result: "3W/2L",
      },
      {
        Place: "7",
        "Full Name": "Carmen F & Martynas J (B2)",
        Result: "3W/2L",
      },
      {
        Place: "8",
        "Full Name": "Deimante S & Rokas J (A4)",
        Result: "1W/4L",
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
