import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tourist',
  templateUrl: './tourist.component.html',
  styleUrls: ['./tourist.component.css'],
})
export class TouristComponent implements OnInit {
  touristicPlaces = [
    {
      imageUrl: '../../assets/images/eldjem.jpg',
      title: 'El Djem Amphitheater',
      desc: "This incredibly well-preserved Roman relic is Tunisia's big sightseeing highlight, one of the most popular things to do on day trips from the coastal resorts, and one of the best examples of amphitheater architecture left standing in the world",
    },
    {
      imageUrl: '../../assets/images/djerba.jpg',
      title: 'Djerba',
      desc: "If you're looking for the picture-perfect beach escape, then the island of Djerba checks all the right boxes The island town of Houmt Souk is the main point of interest off the beach, with an old town district that is a muddle of whitewashed houses.",
    },
    {
      imageUrl: '../../assets/images/carthage.jpg',
      title: 'Carthage',
      desc: "Once Rome's major rival, Carthage was the city of the seafaring Phoenicians forever memorialized in the Punic Wars.",
    },
    {
      imageUrl: '../../assets/images/sidi-bou-said.jpg',
      title: 'Sidi Bou Said',
      desc: "Impossibly cute, and amazingly photogenic, Sidi Bou Said is a clifftop village of petite dimensions that seem to have fallen off an artist's canvas.",
    },
    {
      imageUrl: '../../assets/images/hammamet.jpg',
      title: 'Hammamet',
      desc: "Hammamet is all about the beach. This laid-back town on the Cap Bon Peninsula is Tunisia's top sun-and-sea resort, dedicated to easygoing beach vacations.",
    },
    {
      imageUrl: '../../assets/images/tunis-medina.jpg',
      title: 'Tunis Medina',
      desc: "Although Tunisia's capital is mostly visited to view the two major tourist attractions of Carthage and the Bardo Museum, the medina district of central Tunis is well worth spending an extra night in the city for.",
    },
    {
      imageUrl: '../../assets/images/matmata.jpg',
      title: 'Matmata',
      desc: 'This Berber village, with its troglodyte housing, was made famous when one of the dwellings (the Hotel Sidi Driss) was used as a location during the filming of the original Star Wars movie.',
    },
    {
      imageUrl: '../../assets/images/grand-erg-oriental.jpg',
      title: 'Grand Erg Oriental',
      desc: "Tunisia's vast Sahara covers much of the country's interior, and the most beautiful corner of the desert is the field of sand dunes known as the Grand Erg Oriental.",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
