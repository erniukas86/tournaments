
import Table from '../../components/dataDisplay/Table';

function Standings () {
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
        'Full Name': 'TBA',
        Result: 'TBA'
      },
      {
        Place: '10',
        'Full Name': 'TBA',
        Result: 'TBA'
      },
      {
        Place: '11',
        'Full Name': 'TBA',
        Result: 'TBA'
      },
      {
        Place: '12',
        'Full Name': 'TBA',
        Result: 'TBA'
      },
      {
        Place: '13',
        'Full Name': 'TBA',
        Result: 'TBA'
      },
      {
        Place: '14',
        'Full Name': 'Arnoldas Drapanauskis',
        Result: '3W/7L'
      },
      {
        Place: '15',
        'Full Name': 'TBA',
        Result: 'TBA'
      },
      {
        Place: '16',
        'Full Name': 'TBA',
        Result: 'TBA'
      },
      {
        Place: '17',
        'Full Name': 'TBA',
        Result: 'TBA'
      }
    ];
  };

  return (
    <Table data={getData()} title={'FINAL STANDINGS'}></Table>
  );
}

export default Standings;
