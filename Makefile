install: # установить зависимости
			npm ci

brain-games: # вызвать игру
			node bin/brain-games.js	

brain-even:
			node bin/brain-even.js

brain-calc:
			node bin/brain-calc.js

publish: # публикация 
		npm publish --dry-run

make lint: # запуск eslint 
		 npx eslint .