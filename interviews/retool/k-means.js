const POINTS = [
  {
    name: 'Tea House',
    lat: '37.7993',
    long: '-122.4437',
  },
  {
    name: 'Arizmendi Bakery',
    lat: '37.752576',
    long: '-122.420922',
  },
  {
    name: 'Pinhole Coffee',
    lat: '37.739624',
    long: '-122.419029',
  },
  {
    name: 'Cafe St Jorge',
    lat: '37.741701',
    long: '-122.422664',
  },
  {
    name: 'ICHI Sushi',
    lat: '37.742681',
    long: '-122.421541',
  },
  {
    name: 'La Taqueria',
    lat: '37.750896',
    long: '-122.418087',
  },
  {
    name: 'Papalote',
    lat: '37.751981',
    long: '-122.421083',
  },
  {
    name: 'Ardiana',
    lat: '37.742462',
    long: '-122.426316',
  },
  {
    name: 'Souvla',
    lat: '37.776525',
    long: '-122.425003',
  },
  {
    name: 'Domo',
    lat: '37.775885',
    long: '-122.426304',
  },
  {
    name: 'SFJAZZ',
    lat: '37.776384',
    long: '-122.421541',
  },
  {
    name: 'Absinthe Brasserie',
    lat: '37.777104',
    long: '-122.42274',
  },
];

// console.log(POINTS);

// k-means clustering
// input: lat/lng points (as observations). lat/lng can be considered features, n observations with d features
// output is k means, in this case 3 points, the final centroids (the final centroids are not points from the dataset, they are made up)

// 1 Step (select centroids)
// k =3
// select 3 random points as centroids, improvement later: based on some logic
// split input.length by k = X
// iterate through points and take 0, X - 1 point, 2X - 1 point as centroids. in our case it will be 3, 7, 11

// 2 Step (form clusters by assigning points to centroids)
// iterate through points, and assign them to means based on "closest distance"\
// how do we do that?
// 1) we iterate through points
// 2) each iteration we calculate distance from current point to each centroid using latitude and longitude and k centroids
// 3) assign to the centroid where the distance is minimum
// 4) we assign points to form clusters using hash map, where key is a centroid (maybe there are other approaches)

// 3 Step (update centroids Z times)
// how do we update centroids?
// we calculate new means for each cluster and update centroids
// basically iterate through each cluster and calculate new centroid
// track if centroids got changed?
// if they got changed repeat the Step 2
// if they didn't change return the centroids as the k means output
// OR set 10, 20, 30 iterations (fixed)

// return centroids

function kMeans(data, k) {
  let centroids = selectInitialCentroids(data, k);
  console.log('centroids :>> ', JSON.stringify(centroids, null, 4));
  let clusters = {};
  const ITERATIONS = 10;

  const pointsCount = data.length;
  for (let i = 0; i < pointsCount; i++) {
    const centroidsCount = centroids.length;
    const point = data[i];
    let clusterId = -1;
    let minDistance = +Infinity;

    for (let j = 0; j < centroidsCount; j++) {
      const distanceFromPointToCentroid = calculateDistance(
        centroids[j],
        point,
      );

      if (distanceFromPointToCentroid < minDistance) {
        clusterId = centroids[j]['id'];
        minDistance = distanceFromPointToCentroid;
      }
    }

    if (clusters[clusterId]) {
      clusters[clusterId].push(point);
    } else {
      clusters[clusterId] = [point];
    }
  }

  console.log('clusters :>> ', clusters);
  // todo: recalculate centroids
}

function recalculateCentroids(clusters) {
  const newCentroids = {};



  return newCentroids;
}

function selectInitialCentroids(data, k) {
  const centroids = [];

  // Generate an array of unique indices
  const indices = Array.from({ length: data.length }, (_, i) => i);
  const shuffledIndices = shuffle(indices);

  // Select the first k points using the shuffled indices
  for (let i = 0; i < k; i++) {
    const index = shuffledIndices[i];
    centroids[i] = {
      id: i,
      lat: +data[index].lat,
      long: +data[index].long,
    };
  }

  return centroids;
}

// Function to shuffle an array using Fisher-Yates algorithm
function shuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// function selectInitialCentroids(data, k) {
//   const centroids = [];
//   const clusterSize = Math.floor(data.length / k);

//   for (let i = 0; i < k; i++) {
//     let startingIndex = i * clusterSize;
//     let latSum = 0;
//     let longSum = 0;
//     for (let count = 0; count < clusterSize; count++) {
//       latSum += +data[startingIndex]['lat'];
//       longSum += +data[startingIndex]['long'];
//       startingIndex++;
//     }

//     centroids[i] = {
//       id: i + 1,
//       lat: latSum / clusterSize,
//       long: longSum / clusterSize,
//     };
//   }

//   return centroids;
// }

function calculateDistance(centroid, observation) {
  const R = 6371; // Radius of the Earth in kilometers

  const lat1 = centroid.lat * (Math.PI / 180); // Convert centroid latitude to radians
  const lon1 = centroid.long * (Math.PI / 180); // Convert centroid longitude to radians
  const lat2 = observation.lat * (Math.PI / 180); // Convert observation latitude to radians
  const lon2 = observation.long * (Math.PI / 180); // Convert observation longitude to radians

  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in kilometers

  return distance;
}

kMeans(POINTS, 3);
