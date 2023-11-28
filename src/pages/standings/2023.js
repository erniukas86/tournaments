
import Table from '../../components/dataDisplay/Table';

function Standings2023 () {
  // TODO: Replace with real data
  const getData = () => {
    return [
      {
        Place: '🥇',
        'Full Name': 'Ernestas Burokas',
        Result: '13W/0L'
      },
      {
        Place: '🥈',
        'Full Name': 'Laimonas Mikelionis',
        Result: '13W/1L'
      },
      {
        Place: '🥉',
        'Full Name': 'Klaidas Pilkis',
        Result: '12W/2L'
      },
      {
        Place: '4',
        'Full Name': 'Rokas Jankauskas',
        Result: '11W/4L'
      },
      {
        Place: '5',
        'Full Name': 'Martynas Juzaitis',
        Result: '11W/3L'
      },
      {
        Place: '6',
        'Full Name': 'Dmytro Ivanchenko',
        Result: '10W/3L'
      },
      {
        Place: '7',
        'Full Name': 'Andrejus Ivascenko',
        Result: '8W/6L'
      },
      {
        Place: '8',
        'Full Name': 'Rokas Sidaravicius',
        Result: '7W/7L'
      },
      {
        Place: '9',
        'Full Name': 'Karolis Vaitele',
        Result: '8W/5L'
      },
      {
        Place: '10',
        'Full Name': 'Justinas Mikalauskas',
        Result: '9W/5L'
      },
      {
        Place: '11',
        'Full Name': 'Raimonda Preimonaite',
        Result: '7W/7L'
      },
      {
        Place: '12',
        'Full Name': 'Robertas Kalninis',
        Result: '6W/8L'
      },
      {
        Place: '13',
        'Full Name': 'Deividas Knoraitis',
        Result: '6W/7L'
      },
      {
        Place: '14',
        'Full Name': 'Tadas Kucinskas',
        Result: '6W/7L'
      },
      {
        Place: '15',
        'Full Name': 'Liudvikas Griskus',
        Result: '5W/9L'
      },
      {
        Place: '16',
        'Full Name': 'Nedas Simoliunas',
        Result: '6W/8L'
      },
      {
        Place: '17',
        'Full Name': 'Airidas Setkus',
        Result: '7W/7L'
      },
      {
        Place: '18',
        'Full Name': 'Levas Lavrentjevas',
        Result: '4W/10L'
      },
      {
        Place: '19',
        'Full Name': 'Mantas Reika',
        Result: '2W/12L'
      },
      {
        Place: '20',
        'Full Name': 'Tadas Seniunas',
        Result: '2W/12L'
      },
      {
        Place: '21',
        'Full Name': 'Justinas Lazauninkas',
        Result: '4W/10L'
      },
      {
        Place: '22',
        'Full Name': 'Egidijus Rubys',
        Result: '1W/12L'
      },
      {
        Place: '23',
        'Full Name': 'Deimante Simonaityte',
        Result: '0W/13L'
      }
    ];
  };

  return (
    <Table data={getData()} title={'FINAL STANDINGS'}></Table>
  );
}

export default Standings2023;
