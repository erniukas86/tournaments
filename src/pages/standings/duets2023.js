
import Table from '../../components/dataDisplay/Table';

function DuetsStandings2023 () {
  // TODO: Replace with real data
  const getData = () => {
    return [
      {
        Place: '🥇',
        'Full Name': 'TBA',
        Result: 'TBA'
      },
      {
        Place: '🥈',
        'Full Name': 'TBA',
        Result: 'TBA'
      },
      {
        Place: '🥉',
        'Full Name': 'TBA',
        Result: 'TBA'
      },
      {
        Place: '4',
        'Full Name': 'TBA',
        Result: 'TBA'
      },
      {
        Place: '5',
        'Full Name': 'TBA',
        Result: 'TBA'
      },
      {
        Place: '6',
        'Full Name': 'TBA',
        Result: 'TBA'
      },
      {
        Place: '7',
        'Full Name': 'TBA',
        Result: 'TBA'
      },
      {
        Place: '8',
        'Full Name': 'TBA',
        Result: 'TBA'
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
