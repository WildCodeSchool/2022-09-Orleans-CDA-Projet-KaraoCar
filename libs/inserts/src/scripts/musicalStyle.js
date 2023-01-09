import dotenv from 'dotenv';
dotenv.config();

const insertMusicalStyles = async () => {
  const musicalStylesToInsert = [
    'Rock',
    'Rap',
    'R&B',
    'Pop',
    'Jazz',
    'Classical',
    'Metal',
    'Techno',
    'Folk',
  ];

  const musicalStyles = await fetch(
    `${process.env.VITE_API_HOST}api/musical-styles`
  );
  const data = await musicalStyles.json();

  if (data.length === 0) {
    for (let i = 0; i < musicalStylesToInsert.length; i++) {
      await fetch(`${process.env.VITE_API_HOST}api/musical-styles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: i + 1,
          name: musicalStylesToInsert[i],
        }),
      });
      console.log(
        `${musicalStylesToInsert[i]} was inserted into the database ✔️`
      );
    }
  } else {
    console.log('Musical styles are already in the database ❌');
  }
};

export default insertMusicalStyles;
