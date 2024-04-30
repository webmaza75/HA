
/**
 * 3.4. Задание: рейтинг игроков в онлайн-игре
 * 
 * Онлайн игра «Удар легенд» имеет ранговый режим,
 * при котором игроки соревнуются между собой.
 * Игрок может попасть в одну из пяти лиг в зависимости от счёта:
 * чем номер лиги выше, тем лучше. Перед тем, как попасть в лигу,
 * игроки должны отыграть пять калибровочных игр, а до завершения пятой они не знают,
 * на какое место и какую лигу претендуют.
 * 
 * Аналитики хотят добавить в экран завершения игры новую опцию:
 * показывать игрока с точно таким же рейтингом, как у текущего игрока в момент калибровки.
 * Таким образом, игроки будут примерно представлять,
 * в какую лигу и в какое её место они попадут после калибровки.
 * 
 * Каждый из игроков в рейтинге представлен следующим объектом:
 * {
 *  "login": "LuckyWasTaken",
 *  "leaguePoints": 9001
 * }
 * 
 * Ваша задача — реализовать функцию для поиска по таблице лидеров,
 * которая на вход принимает количество очков и непосредственно таблицу, а возвращает объект:
 * {  
 *  "league": 1,
 *  "placement": 1,
 * }
 * 
 * Пример:
 * gamerRating(1476, table); // { "league": 4, "placement": 2 }
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
