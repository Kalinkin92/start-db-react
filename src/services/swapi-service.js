export default class SwapiService {

    /** Core */
    _apiBase = 'https://swapi.co';

    async getREsourse (url)  {
        const res = await fetch(this._apiBase + url);

        if (!res.ok) throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
        const body = await res.json();
        return body;
    };

    /** People */
    getAllPeople = async () => {
        const res = await this.getREsourse(`/api/people/`);
        return res.results.map(this._transformPeople);
    };

    getPerson = async (id) => {
        const res =  await this.getREsourse(`/api/people/${id}/`);
        return this._transformPeople(res);
    };

    getPersonImage = ({ id }) => {
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    };

    /** Starships */
    getAllStarships = async () => {
        const res = await this.getREsourse(`/api/starships/`);
        return res.results.map(this._transformStarship);
    };

    getStarship = async (id) => {
        const res =  await this.getREsourse(`/api/starships/${id}/`);
        return this._transformStarship(res);
    };

    getStarshipImage = ({ id }) => {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    };

    /** Planets */
    getAllPlanets = async () => {
        const res = await this.getREsourse(`/api/planets/`);
        return res.results.map(this._transformPlanet);
    };

    getPlanet = async (id) => {
        const res = await this.getREsourse(`/api/planets/${id}/`);
        return this._transformPlanet(res);
    };

    getPlanetImage = ({ id }) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    };

    /** Service */
    _extractId(url) {
        const idRegExp = /\/([0-9]*)\/$/;
        return url.match(idRegExp)[1];
    };

    _transformPlanet = ({url, name, population, diameter, rotation_period}) => {
        return {
            id: this._extractId(url),
            name, population, diameter,
            rotationPeriod: rotation_period,
        }
    };

    _transformPeople = ({url, name, birth_year, gender, eye_color}) => {
        return {
            id: this._extractId(url),
            name, gender,
            eyeColor: eye_color,
            birthYear: birth_year
        }
    };

    _transformStarship = ({url, name, model, manufacturer, cost_in_credits, max_atmosphering_speed}) => {
        return {
            id: this._extractId(url),
            name, manufacturer, model,
            costInCredits: cost_in_credits,
            maxAtmospheringSpeed: max_atmosphering_speed
        }
    };

}

