import { $api } from '@/api/instance';

class PlatformsService {
	async getPlatforms() {
		try {
			return (await $api.get('/platforms/lists/parents')).data;
		} catch (error) {
			console.error(error.response);
			throw new Error(error.message);
		}
	}
}

export const platformsService = new PlatformsService();
