export async function api() {
	try {

			const arrayMorty = []
			for(let i=1; i<26; i++){
			const mortyapi = await (await fetch("https://rickandmortyapi.com/api/character/" + i)).json()
			arrayMorty.push(mortyapi)
			}
			console.log(arrayMorty)
			return arrayMorty
	}
	catch(error){
		console.log(error)
	}
} 