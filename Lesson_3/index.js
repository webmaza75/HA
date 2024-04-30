/**
 * Бинарный поиск 
 */
function binarySearch(plants, plant) {
	let left = 0;
	let right = plants.length - 1;
	let center = 0;
	let i = 0;
	const stopCount = Math.log2(plants.length);
	
	do {
		center = Math.floor((right + left) / 2);

		if (plants[center] === plant) {
			return center;
		}
		if (plant > plants[center]) {
			if (right - left === 2) {
				return plants[right] === plant ? right : null;
			}
			left = center;
		} else {
			if (right - left === 2) {
				return plants[left] === plant ? left : null;
			}
			right = center;
		}
		i++;
	} while (i <= stopCount);
  return null;
}
const plants = [
  "Аспарагус",
  "Гвоздика",
  "Жасмин",
  "Калина",
  "Малина",
  "Пион",
  "Тысячелистник",
  "Хризантема",
  "Шафран",
  "Юкка",
];


/**
 * рейтинг игроков в онлайн-игре
 */
const table = [
  [
    {
      "login": "stypeano",
      "leaguePoints": 4
    },
    {
      "login": "rstrazir",
      "leaguePoints": 45
    },
    {
      "login": "cathead",
      "leaguePoints": 143
    },
    {
      "login": "cavernous",
      "leaguePoints": 324
    }
  ],
  [
    {
      "login": "ConspiracyLil",
      "leaguePoints": 356
    },
    {
      "login": "CzarStories",
      "leaguePoints": 568
    },
    {
      "login": "GottaSaiyan",
      "leaguePoints": 598
    },
    {
      "login": "Mountaintrid",
      "leaguePoints": 785
    }
  ],
  [
    {
      "login": "Rectionom",
      "leaguePoints": 930
    },
    {
      "login": "JoshChase",
      "leaguePoints": 931
    },
    {
      "login": "DreamLess",
      "leaguePoints": 956
    },
    {
      "login": "BlondiePlanet",
      "leaguePoints": 1045
    }
  ],
  [
    {
      "login": "Breakingbing",
      "leaguePoints": 1056
    },
    {
      "login": "Goldenelox",
      "leaguePoints": 1130
    },
    {
      "login": "SaiyanBroadway",
      "leaguePoints": 1432
    },
    {
      "login": "BoostScooby",
      "leaguePoints": 1476
    },
    {
      "login": "Boost",
      "leaguePoints": 1477
    }
  ]
];

function gamerRating(score, table) {
	let left = 0;
	let right = table.length - 1;
	let center = 0;
	let league;
	
	do {
		center = Math.floor((right + left) / 2);
		let leagueList = table[center];

		if (score >= leagueList[0].leaguePoints && score <= leagueList[leagueList.length - 1].leaguePoints) {
			league = center;
			left = 0;
			right = leagueList.length - 1;
			do {
				center = Math.floor((right + left) / 2);
				if (score === leagueList[center].leaguePoints) {
					return ({
						league: league + 1,
						placement: leagueList.length - center,
					});
				}
				if (score > leagueList[center].leaguePoints) {
					left = center + 1;
				} else {
					right = center - 1;
				}
			} while (left <= right);
		return null;
		}
		
		
		if (score > leagueList[0].leaguePoints) {
			left = center + 1;
		} else {
			right = center - 1;
		}
	} while (left <= right);
  return null;
};

console.log(gamerRating(1476, table));
