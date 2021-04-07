import {GetLastArrayItem, IsImage} from './Card'

test("file extension is image?", () => {
    expect(IsImage(GetLastArrayItem(".jpg"))).toBe(true)
    expect(IsImage(GetLastArrayItem("jpg"))).toBe(true)
    expect(IsImage(GetLastArrayItem("jpeg"))).toBe(true)
    expect(IsImage(GetLastArrayItem("svg"))).toBe(true)
    expect(IsImage(GetLastArrayItem("gif"))).toBe(true)
    expect(IsImage(GetLastArrayItem("webp"))).toBe(true)
    expect(IsImage(GetLastArrayItem("png"))).toBe(true)
})