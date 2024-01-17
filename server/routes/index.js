import express from "express";
import questionnaireRoutes from "./questionnaire/index.js"

const router = express.Router();

router.post("/questions/create", questionnaireRoutes.create);
router.post("/questions/:questionId/answer", questionnaireRoutes.answer);
router.put("/questions/:questionId/update", questionnaireRoutes.update);
router.delete("/questions/:questionId/delete", questionnaireRoutes.delete);
router.get("/questions/:questionId/details", questionnaireRoutes.details);
router.get("/questions/list", questionnaireRoutes.list);

export default router;
