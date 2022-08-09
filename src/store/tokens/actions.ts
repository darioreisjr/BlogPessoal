/**
 * Action é um tipo que é um objeto com uma propriedade de tipo que é uma string com o valor de ADD_TOKEN
 * e uma propriedade de carga útil que é uma string.
 * @property type - Este é o tipo de ação que está sendo despachada.
 * @property {string} carga útil - string -&gt; A carga útil são os dados que estão sendo passados ​​para o
 *redutor.
 */
export type Action = {type: "ADD_TOKEN"; payload: string};

/**
 * Recebe uma string como argumento e retorna um objeto com uma propriedade type e uma propriedade payload
 * @param {string} token - string
 */
export const addToken = (token: string): Action =>({
    type: "ADD_TOKEN",
    payload: token,
});