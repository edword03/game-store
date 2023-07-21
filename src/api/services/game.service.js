import { $api } from '@/api/instance';

class GameService {
	async getGames(query) {
		try {
			return (
				await $api.get('/games', {
					params: {
						...(query?.search ? { search: query?.search } : {}),
						...(query?.ordering ? { ordering: query?.ordering } : {}),
						...(query?.parent_platforms
							? { parent_platforms: query?.parent_platforms }
							: {}),
						...(query?.pageParam ? { page: query?.pageParam } : {}),
					},
				})
			).data;
		} catch (error) {
			console.error(error.response);
			throw new Error(error.message);
		}
	}

	async getGameDetail(id) {
		try {
			return (await $api.get(`/games/${id}`)).data;
		} catch (error) {
			console.error(error.response);
			throw new Error(error.message);
		}
	}

	async getScreenshots(id) {
		try {
			return (await $api.get(`/games/${id}/screenshots`)).data;
		} catch (error) {
			console.error(error.response);
			throw new Error(error.message);
		}
	}
}

export const gameService = new GameService();
