/**
 * @swagger
 * /boards:
 *   get:
 *     summury: 게시글 가져오기
 *     tags: [Board]
 *     parameter:
 *         - in: query
 *           name: int
 *           type: int
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          number:
 *                              type: int
 *                              example: 3
 *                          writer:
 *                              type: string
 *                              example: "원영"
 *                          title:
 *                              type: string
 *                              example: 제목입니다~~
 *                          contents:
 *                              type: string
 *                              example: 내용입니다.!!
 */

/**
 * @swagger
 * /boards:
 *  post:
 *      summury: 게시글 등록하기
 *      tags: [Board]
 *      responses:
 *          200:
 *              description: 성공
 */