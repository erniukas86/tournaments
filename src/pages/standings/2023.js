
import Table from '../../components/dataDisplay/Table';

function Standings2023 () {
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
        'Full Name': 'TBA',
        Result: 'TBA'
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
      },
      {
        Place: '18',
        'Full Name': 'TBA',
        Result: 'TBA'
      },
      {
        Place: '19',
        'Full Name': 'TBA',
        Result: 'TBA'
      },
      {
        Place: '20',
        'Full Name': 'TBA',
        Result: 'TBA'
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
