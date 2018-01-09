import * as faker from 'faker';
import { Setting } from './../app/features/settings/models/setting';

interface Seed {
    [id: string]: any;
}

export const seed: Seed = {
    'Setting': () => Object.assign({}, {
        id: faker.random.uuid(),
        category: faker.company.bsAdjective(),
        value: faker.lorem.sentence(),
        titleKey: faker.company.bsNoun(),
        Title: faker.lorem.words()
    })
};

export const getValue = (key: string) => seed[key]();

export const getValues = (key: string, quantity: number) => {
    const values = [];
    for (let i = 0; i < quantity; i++) {
        values.push(seed[key]());
    }
    return values;
};

