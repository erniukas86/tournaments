
import Table from '../../components/dataDisplay/Table';

function Standings2024 () {
  // TODO: Replace with real data
  const getData = () => {
    return [
      {
        Place: '🥇',
        'Full Name': 'N/A',
        Result: 'N/A'
      },
      {
        Place: '🥈',
        'Full Name': 'N/A',
        Result: 'N/A'
      },
      {
        Place: '🥉',
        'Full Name': 'N/A',
        Result: 'N/A'
      },
      {
        Place: '4',
        'Full Name': 'N/A',
        Result: 'N/A'
      },
      {
        Place: '5',
        'Full Name': 'N/A',
        Result: 'N/A'
      },
      {
        Place: '6',
        'Full Name': 'N/A',
        Result: 'N/A'
      },
      {
        Place: '7',
        'Full Name': 'N/A',
        Result: 'N/A'
      },
      {
        Place: '8',
        'Full Name': 'N/A',
        Result: 'N/A'
      },
      {
        Place: '9',
        'Full Name': 'N/A',
        Result: 'N/A'
      },
      {
        Place: '10',
        'Full Name': 'N/A',
        Result: 'N/A'
      },
      {
        Place: '11',
        'Full Name': 'N/A',
        Result: 'N/A'
      },
      {
        Place: '12',
        'Full Name': 'N/A',
        Result: 'N/A'
      },
      {
        Place: '13',
        'Full Name': 'N/A',
        Result: 'N/A'
      },
      {
        Place: '14',
        'Full Name': 'N/A',
        Result: 'N/A'
      },
      {
        Place: '15',
        'Full Name': 'N/A',
        Result: 'N/A'
      },
      {
        Place: '16',
        'Full Name': 'N/A',
        Result: 'N/A'
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
