import * as util from "../utils";

/**
 * Generates a random korean word
 *
 * @returns Random word
 */
const koreanWord = () => (_, loopIndex) => {
  return util.randomKoreanWord();
};

export default koreanWord;
