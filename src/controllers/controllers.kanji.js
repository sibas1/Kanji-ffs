import axios from "axios"

export const kanji = async(req, res) => {
    const {kanji} = req.query
    if(!kanji) return res.status(400).json({message:"no hay entrada "})
    const fond=await axios.get(`https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?rapidapi-key=3363705a1dmshe6873f676e3b37dp14003djsncf9e787df2c3&kanji=${kanji}`)
    console.log(fond.data)
    res.status(200).json(fond.data)
}
export const meaning = async (req, res) => {
    const { kem } = req.query
    if (!kanji) return res.status(400).json({ message: "no hay entrada " })
    const fond = await axios.get(`https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?rapidapi-key=3363705a1dmshe6873f676e3b37dp14003djsncf9e787df2c3&kem=${kem}`)
    console.log(fond.data)
    res.status(200).json(fond.data)
}
export const kanjiD = async (req, res) => {
    const {kanji} = req.query
    console.log(kanji)
    if (!kanji) return res.status(400).json({ message: "no hay entrada " })
    const fond = await axios.get(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${kanji}?rapidapi-key=3363705a1dmshe6873f676e3b37dp14003djsncf9e787df2c3&kanji`)
    console.log(fond.data)
    res.status(200).json(fond.data)
}
export const kanjiG = async (req, res) => {
    const { grade } = req.query 
    console.log(grade)
    if (!grade) return res.status(400).json({ message: "no hay entrada " })
    const fond = await axios.get(`https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?rapidapi-key=3363705a1dmshe6873f676e3b37dp14003djsncf9e787df2c3&grade=${grade}`)
    console.log(fond.data)
    res.status(200).json(fond.data)
}
export const kunyomi = async (req, res) => {
    const { kanji } = req.query
    if (!kanji) return res.status(400).json({ message: "no hay entrada " })
    const fond = await axios.get(`https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?rapidapi-key=3363705a1dmshe6873f676e3b37dp14003djsncf9e787df2c3&kun=${kanji}`)
    console.log(fond.data)
    res.status(200).json(fond.data)
}
export const onyomi = async (req, res) => {
    const { kanji } = req.query
    if (!kanji) return res.status(400).json({ message: "no hay entrada " })
    const fond = await axios.get(`https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?rapidapi-key=3363705a1dmshe6873f676e3b37dp14003djsncf9e787df2c3&on=${kanji}`)
    console.log(fond.data)
    res.status(200).json(fond.data)
}