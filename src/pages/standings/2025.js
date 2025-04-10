
import Table from '../../components/dataDisplay/Table';

function Standings2025 () {
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
        'Full Name': 'Laimonas Mikelionis',
        Result: '4W/2L'
      },
      {
        Place: '10',
        'Full Name': 'Tomas Rentelis',
        Result: '5W/2L'
      },
      {
        Place: '11',
        'Full Name': 'Rokas Jankauskas',
        Result: '5W/2L'
      },
      {
        Place: '12',
        'Full Name': 'Mindaugas Naravas',
        Result: '4W/2L'
      },
      {
        Place: '13',
        'Full Name': 'Rokas Sidaravicius',
        Result: '4W/3L'
      },
      {
        Place: '14',
        'Full Name': 'Juste Gudaite',
        Result: '3W/4L'
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
        'Full Name': 'Aurimas Stanaitis',
        Result: '3W/4L'
      },
      {
        Place: '18',
        'Full Name': 'Lukas Keturakis',
        Result: '3W/6L'
      },
      {
        Place: '19',
        'Full Name': 'Robertas Kalninis',
        Result: '2W/5L'
      },
      {
        Place: '20',
        'Full Name': 'Justinas Bliuvas',
        Result: '2W/5L'
      },
      {
        Place: '21',
        'Full Name': 'Justas Pranauskis',
        Result: '1W/7L'
      },
      {
        Place: '22',
        'Full Name': 'Aurimas Dabrisius',
        Result: '1W/7L'
      },
      {
        Place: '23',
        'Full Name': 'Deimante Simonaityte',
        Result: '1W/6L'
      },
      {
        Place: '24',
        'Full Name': 'Mantas Reika',
        Result: '1W/5L'
      },
      {
        Place: '25',
        'Full Name': 'Greta Krisciunaite',
        Result: '1W/5L'
      },
      {
        Place: '26',
        'Full Name': 'Domante Zukauskaite',
        Result: '0W/6L'
      }
    ];
  };

  return (
    <Table data={getData()} title={'FINAL STANDINGS'}></Table>
  );
}

export default Standings2025;
