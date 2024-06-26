
import Table from '../../components/dataDisplay/Table';

function Standings2024 () {
  // TODO: Replace with real data
  const getData = () => {
    return [
      {
        Place: '🥇',
        'Full Name': 'Dmytro Ivanchenko',
        Result: '7W/0L'
      },
      {
        Place: '🥈',
        'Full Name': 'Ernestas Burokas',
        Result: '6W/1L'
      },
      {
        Place: '🥉',
        'Full Name': 'Klaidas Pilkis',
        Result: '6W/1L'
      },
      {
        Place: '4',
        'Full Name': 'Martynas Juzaitis',
        Result: '5W/3L'
      },
      {
        Place: '5',
        'Full Name': 'Karolis Vaitele',
        Result: '6W/2L'
      },
      {
        Place: '6',
        'Full Name': 'Rokas Jankauskas',
        Result: '6W/2L'
      },
      {
        Place: '7',
        'Full Name': 'Laimonas Mikelionis',
        Result: '5W/3L'
      },
      {
        Place: '8',
        'Full Name': 'Andrejus Ivascenko',
        Result: '4W/4L'
      },
      {
        Place: '9',
        'Full Name': 'Raimonda Preimonaite',
        Result: '2W/3L'
      },
      {
        Place: '10',
        'Full Name': 'Edvinas Velicka',
        Result: '2W/3L'
      },
      {
        Place: '11',
        'Full Name': 'Robertas Kalninis',
        Result: '2W/3L'
      },
      {
        Place: '12',
        'Full Name': 'Algirdas Kirvelaitis',
        Result: '2W/4L'
      },
      {
        Place: '13',
        'Full Name': 'Mindaugas Naravas',
        Result: '4W/3L'
      },
      {
        Place: '14',
        'Full Name': 'Nedas Simoliunas',
        Result: '3W/4L'
      },
      {
        Place: '15',
        'Full Name': 'Mantas Reika',
        Result: '3W/4L'
      },
      {
        Place: '16',
        'Full Name': 'Justinas Lazauninkas',
        Result: '3W/4L'
      },
      {
        Place: '17',
        'Full Name': 'Tadas Turskis',
        Result: '1W/4L'
      },
      {
        Place: '18',
        'Full Name': 'Tomas Rentelis',
        Result: '0W/5L'
      },
      {
        Place: '19',
        'Full Name': 'Justas Pranauskis',
        Result: '0W/5L'
      },
      {
        Place: '20',
        'Full Name': 'Deimante Simonaityte',
        Result: '1W/6L'
      },
      {
        Place: '21',
        'Full Name': 'Justas Baniulis',
        Result: '0W/5L'
      }
    ];
  };

  return (
    <Table data={getData()} title={'FINAL STANDINGS'}></Table>
  );
}

export default Standings2024;
