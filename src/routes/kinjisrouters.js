import { Router } from "express";
import { kanji, meaning , kanjiD, kanjiG, onyomi, kunyomi} from "../controllers/controllers.kanji.js";
const router = Router()

router.get('/kanji', kanji);
router.get('/meaning', meaning);
router.get('/kanjiD', kanjiD);
router.get('/kanjiG', kanjiG);
router.get('/kanjiO', onyomi);
router.get('/kanjiK', kunyomi);


export default router