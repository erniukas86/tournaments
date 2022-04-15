
import Table from '../../components/dataDisplay/Table';

function Standings () {
  // TODO: Replace with real data
  const getData = () => {
    return [
      {
        Place: '🥇',
        'Full Name': 'Ernestas Burokas',
        Result: '11W/0L'
      },
      {
        Place: '🥈',
        'Full Name': 'Klaidas Pilkis',
        Result: '9W/2L'
      },
      {
        Place: '🥉',
        'Full Name': 'Laimonas Mikelionis',
        Result: '8W/3L'
      },
      {
        Place: '4',
        'Full Name': 'Martynas Juzaitis',
        Result: '8W/2L'
      },
      {
        Place: '5',
        'Full Name': 'Rokas Jankauskas',
        Result: '8W/2L'
      },
      {
        Place: '6',
        'Full Name': 'Simas Bakus',
        Result: '6W/4L'
      },
      {
        Place: '7',
        'Full Name': 'Paulius Vaitkevicius',
        Result: '6W/6L'
      },
      {
        Place: '8',
        'Full Name': 'Edvinas Velicka',
        Result: '3W/8L'
      },
      {
        Place: '9',
        'Full Name': 'Andrejus Ivascenko',
        Result: '6W/4L'
      },
      {
        Place: '10',
        'Full Name': 'Rokas Sidaravicius',
        Result: '4W/5L'
      },
      {
        Place: '11',
        'Full Name': 'Tadas Kucinskas',
        Result: '5W/5L'
      },
      {
        Place: '12',
        'Full Name': 'Audrius Lukosevicius',
        Result: '4W/6L'
      },
      {
        Place: '13',
        'Full Name': 'Karolis Vaitele',
        Result: '2W/8L'
      },
      {
        Place: '14',
        'Full Name': 'Arnoldas Drapanauskis',
        Result: '3W/7L'
      },
      {
        Place: '15',
        'Full Name': 'Henrikas Miliunas',
        Result: '2W/7L'
      },
      {
        Place: '16',
        'Full Name': 'Deividas Knoraitis',
        Result: '1W/8L'
      },
      {
        Place: '17',
        'Full Name': 'Robertas Kalninis',
        Result: '0W/9L'
      }
    ];
  };

  return (
    <Table data={getData()} title={'FINAL STANDINGS'}></Table>
  );
}

export default Standings;
