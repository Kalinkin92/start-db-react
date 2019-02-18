export default class SwapiService {

    _apiBase = 'https://swapi.co';

    async getREsourse (url)  {
        const res = await fetch(this._apiBase + url);

        if (!res.ok) throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
        const body = await res.json();
        return body;
    };

    async getAllPeople() {
        const res = await this.getREsourse(`/api/people/`);
        return res.results;
    }
    async getPerson(id) {
        return await this.getREsourse(`https://swapi.co/api/people/${id}/`)
    }

}
const getREsourse = async (url) => {
    const res = await fetch(url);

    if (!res.ok) throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    const body = await res.json();
    return body;
};

const swapi = new SwapiService();

swapi.getAllPeople()
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.error('Could not fetch', err)
    });

