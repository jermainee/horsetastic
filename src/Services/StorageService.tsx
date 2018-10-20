import { AsyncStorage } from "react-native"
import { LatLng } from "react-native-maps";

export interface IPersistedRoute {
    routeCoordinates: Array<LatLng>;
    distanceTravelled: number;
    // TODO: Save average speed, too
}

export default class StorageService {

    private readonly storageName = "HorsetasticStorage";

    public async persistData(key: string, data: string) {
        try {
            await AsyncStorage.setItem(`${this.storageName}:${key}`, data);
        } catch (error) {
            console.log(error);
        }
    }

    public async retrieveData(key: string) {
        try {
            return await AsyncStorage.getItem(`${this.storageName}:${key}`);
        } catch (error) {
            console.log(error);
        }
    }
}