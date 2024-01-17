import { questionnaire } from "../../models/index.js";
import { GET_QUESTIONNAIRE_DETAILS } from "../../constants/index.js";

const QuestionnaireController = {
    /**
     * Get list of questionnaires
     * @param {Object} query
     * @param {String} projection
     * @param {Object} options
     * @return {Array}
     */
    getList: async (query, projection, options = {}) => {
        return questionnaire.find(query, projection, options)
    },

    /**
     * Get details of questionnaire
     * @param {String} questionnaireId
     * @param {Object} options
     * @return {Object}
     */
    getDetails: async (questionnaireId, options = {}) => {
        return await new Promise((resolve, reject) => {
            questionnaire.findById(questionnaireId, GET_QUESTIONNAIRE_DETAILS, options, (error, response) => {
                if (error) reject(error);
                resolve(response);
            })
        })
    },

    /**
     * Create questionnaire 
     * @param {String} data
     * @param {Object} options
     * @return {Object}
     */
    createQuestionnaire: (data) => {
        const questionnairePayload = new questionnaire(data);
        return questionnairePayload.save();
    },

    /**
     * Update Questionnaire
     * @param {String} questionnaireId
     * @param {String} data
     * @param {Object} options
     * @return {Object}
     */
    updateQuestionnaire: async (questionnaireId, data, options = {}) => {
        return await new Promise((resolve, reject) => {
            questionnaire.findByIdAndUpdate(questionnaireId, data, options, (error, response) => {
                if (error) reject(error);
                resolve(response);
            })
        })
    },

    /**
     * Delete Questionnaire
     * @param {String} questionnaireId
     * @param {Object} options
     * @return {Object}
     */
    deleteQuestionnaire: async (questionnaireId, options = {}) => {
        return await new Promise((resolve, reject) => {
            questionnaire.findByIdAndDelete(questionnaireId, options, (error, response) => {
                if (error) reject(error);
                resolve(response);
            })
        })
    },
}

export default QuestionnaireController;
