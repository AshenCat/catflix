import { changeFileNameToValid } from './Upload';

describe('Upload test', () => {
    test('remove symbols from file name', () => {
        expect(changeFileNameToValid(`Logo.cat-neko[pog].png`)).toBe('Logocatnekopog.png');
        expect(changeFileNameToValid(`avatar.jpg`)).toBe('avatar.jpg');
        expect(changeFileNameToValid(`\\avatar.jpg`)).toBe('avatar.jpg');
        expect(changeFileNameToValid(`a*vatar.jpg`)).toBe('avatar.jpg');
        expect(changeFileNameToValid(`avat&ar.jpg`)).toBe('avatar.jpg');
        expect(changeFileNameToValid(`av.at,()^%$#@!{}[];:'"<>\`+~/'"ar.jpg`)).toBe('avatar.jpg');
    })
});