/* eslint-disable no-plusplus */
export function seedDatabase(firebase) {
  const homes = [
    {
      homeId: "a8",
      homeName: "Căn hộ A8 - 252",
    },
    {
      homeId: "a9",
      homeName: "Căn hộ A9 - 252",
    },
    {
      homeId: "a10",
      homeName: "Căn hộ A10 - 311.9",
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < homes.length; k++) {
    firebase.firestore().collection("homes").add(homes[k]);
  }
}
