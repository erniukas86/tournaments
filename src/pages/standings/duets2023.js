
import Table from '../../components/dataDisplay/Table';

function DuetsStandings2023 () {
  // TODO: Replace with real data
  const getData = () => {
    return [
      {
        Place: '🥇',
        'Full Name': 'Nedas S. & Rokas J.',
        Result: '6w/1L'
      },
      {
        Place: '🥈',
        'Full Name': 'Mantas R. & Ernestas B.',
        Result: '5W/1L'
      },
      {
        Place: '🥉',
        'Full Name': 'Tadas T. & Dmytro I.',
        Result: '4W/2L'
      },
      {
        Place: '4',
        'Full Name': 'Levas L. & Klaidas P.',
        Result: '4W/3L'
      },
      {
        Place: '5',
        'Full Name': 'Justinas L. & Karolis V.',
        Result: '1W/3L'
      },
      {
        Place: '6',
        'Full Name': 'Deimante S. & Martynas J.',
        Result: '2W/3L'
      },
      {
        Place: '7',
        'Full Name': 'Justas B. & Andrejus I.',
        Result: '1W/4L'
      },
      {
        Place: '8',
        'Full Name': 'Justas P. & Raimonda P.',
        Result: '0W/4L'
      },
      {
        Place: '9',
        'Full Name': 'Mindaugas N. & Robertas K.',
        Result: '1W/3L'
      }
    ];
  };

  return (
    <Table data={getData()} title={'FINAL STANDINGS'}></Table>
  );
}

export default DuetsStandings2023;
