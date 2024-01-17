import { GET_QUESTIONNAIRE_LIST } from "../../constants/index.js";
import { QuestionnaireController } from "../../controllers/index.js";

const questionnaireRoutes = {
  /**
   * Get List of questionnaires
   * @param {Object} req
   * @param {Object} res
   */
  list: async (req, res) => {
    try {
      const questions = await QuestionnaireController.getList({}, GET_QUESTIONNAIRE_LIST);
      return res.status(200).json(questions);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  /**
   * Get questionnaire Details
   * @param {Object} req
   * @param {Object} res
   */
  details: async (req, res) => {
    try {
      const { questionId } = req.params;
      const question = await QuestionnaireController.getDetails(questionId);
      return res.status(200).json(question);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  /**
   * Create questionnaire Details
   * @param {Object} req
   * @param {Object} res
   */
  create: (req, res) => {
    try {
      const questionPayload = req.body;

      if (!questionPayload) {
        return res.status(400).json({ message: "question, options and correct answer are required!" })
      }

      const createdQuestion = QuestionnaireController.createQuestionnaire(questionPayload);

      if (!createdQuestion) {
        return res.status(400).json({ message: "Something went wrong, couldn't save question!" });
      }

      return res.status(200).json({ message: "successfully created a question" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  /**
   * Answer request
   * @param {Object} req
   * @param {Object} res
   */
  answer: async (req, res) => {
    try {
      const { selectedAnswer } = req.body;
      const { questionId } = req.params;

      const questionDetails = await QuestionnaireController.getDetails(questionId);

      if (!questionDetails) {
        return res.status(404).json({ message: "Question is not found!" });
      }

      if (questionDetails.answer == selectedAnswer) {
        return res.status(200).json({ correctAnswer: true });
      } else {
        return res.status(200).json({ correctAnswer: false });
      }

    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  /**
   * Update questionnaire Details
   * @param {Object} req
   * @param {Object} res
   */
  update: (req, res) => {
    //TODO: Add update questionnaire controller

    const { options, question, answer } = req.body;
    const { questionnaireId } = req.params;

    console.log("options : ", options);
    console.log("question : ", question);
    console.log("answer : ", answer);
    console.log("questionnaireId : ", questionnaireId);

    // find record by ID {questionnaireId} and update (database)

    return res.status(200).json({
      message: "successfully updated a questionnaire!",
    });
  },

  /**
   * Delete questionnaire Record
   * @param {Object} req
   * @param {Object} res
   */
  delete: (req, res) => {
    // TODO: Add delete questionnaire controller
    const { questionnaireId } = req.params;

    return res
      .status(200)
      .json({ message: "Successfully deleted questionnaire!" });
  },
};

export default questionnaireRoutes;
